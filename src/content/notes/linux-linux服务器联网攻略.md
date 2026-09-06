---
title: "Linux服务器联网攻略"
description: "学校的个人账号只能在一台设备上进行认证联网，但是我们使用的 GPU 服务器经常需要访问互联网，在服务器上认证之后我们自己的电脑就会掉线，所以可以通过代理的方式让服务器通过我们自己的设备进行联网，解决这个问题。 以下所有的方法，实际上让服务器可通过代理本地网络上网（解决服务器连不上网时使用）"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-adcc50aaac04c707317ae9a5db5ee52a_1440w.png"
featured: false
oldPath: "/Linux/Linux服务器联网攻略/"
---

# 背景

学校的个人账号只能在一台设备上进行认证联网，但是我们使用的 GPU 服务器经常需要访问互联网，在服务器上认证之后我们自己的电脑就会掉线，所以可以通过代理的方式让服务器通过我们自己的设备进行联网，解决这个问题。  
**以下所有的方法，实际上让服务器可通过代理本地网络上网（解决服务器连不上网时使用）**

> 此文档是借鉴实验室的师兄的文档完善而来，在这里感谢木子李！！！

# 设置http代理

首先在自己本机电脑上，查看自己的ip地址，在当前终端进行输入

```bash
export http_proxy=http://ip:7890
export https_proxy=https://ip:7890
curl cip.cc # 有输出说明成功代理到了
```
  
若希望不用每次终端都需要设置，也可以把export的部分写入~/.bashrc中，设置后进行source ~/.basrc即可
> 这里面的7890端口是通过clash进行转发的，可以进行下载clash
>
> 除此之外，也需要设置代理软件才能让服务器访问到网络，在 clash 中打开 Allow LAN， v2ray 中打开 允许局域网的连接 就行了。这样我们的设备可以访问的东西，服务器都可以访问到。
>
> 以下是两种软件设置举例（注意：服务器端代理上网行为和代理软件设置一致）。
>
> V2ray设置中开启允许局域网访问（需要注意本地端口和局域网端口不一样）
>
> ![](https://pica.zhimg.com/v2-7c222d179d5454cef5d6a55f9a4f26b6.jpg)
>
> clash开启局域网  
> ![](https://picx.zhimg.com/v2-d8dea34b8e6980fc40d3fb790733d70b.png)

上面这种方法有时候每次都需要打两行命令，还有一种比较简单的方法，在 .bashrc 中设置alias

> Linux alias 命令用于设置指令的别名，用户可利用 alias，自定指令的别名。  
> 它可以使您以一种更简单和易于记忆的方式执行命令，而不必每次都键入完整的命令。  
> 若仅输入 alias，则可列出目前所有的别名设置。  
> alias 的效果仅在该次登入的操作有效，若想要每次登入都生效，可在 **.profile** 或 **.cshrc** 中设定指令的别名。

```jsx
vim ~/.bashrc
# 在最后一行加入
alias setproxy='export http_proxy=http://ip:7890; export https_proxy=http://ip:7890'
# 启动
source ~/.bashrc
# 运行上网命令
setproxy
```

这样以后，每次只需要输入 setproxy 就可以方便快捷的连入自己的网络了。

# 借助proxychains工具

核心：服务器端借助proxychains-ng 将应用“http/https/socks4/socks5”请求代理到本地。

## 安装软件

1. 主要是通过 proxychains-ng 来转发网络请求，可以通过 git 下载也可以直接下载压缩包。（可在仓库直接下载zip 上传服务器解压）

   ```bash
git clone https://github.com/rofl0r/proxychains-ng
```
2. 然后进入软件目录，用 pwd 命令看一下当前的绝对路径，这个在下一步中要用到

![](https://picx.zhimg.com/80/v2-68aa3d2a2b0e5ce78f7643598f82b814.png)

1. 进入目录执行命令，这里的 pwd 就是上一步输出的**绝对路径**，要输**绝对路径**，不然后面编译的时候会出错

```bash
# ./configure --prefix=pwd --sysconfdir=/raid/xxx/proxychains
./configure --prefix=pwd --sysconfdir=pwd
```

1. 编译二进制文件

```bash
make
make install
make install-config
```

## 配置

进入安装目录找到配置文件 proxychains.conf，进行编辑  
在底部添加需要代理的设备的 ip 和端口，我使用的 clash，是 socks 代理，在其底部添加本地代理软件的本机IP 和 代理软件的局域网端口号。

```bash
vim proxychains/proxychains.conf
```
  
![](https://picx.zhimg.com/80/v2-71d052ed41187a762ba6f9619d0b3b8a.png)

我的配置是

```bash
socks5 172.31.xx.xx 7890
```

## 软件设置以及路径

那么我们自己的设备上也需要打开代理软件才能让服务器访问到网络，在 clash 中打开 Allow LAN， v2ray 中打开 允许局域网的连接 就行了。这样我们的设备可以访问的东西，服务器都可以访问到。  
以下是两种软件设置举例（注意：服务器端代理上网行为和代理软件设置一致）。

V2ray设置中开启允许局域网访问（需要注意本地端口和局域网端口不一样）

![](https://pica.zhimg.com/v2-7c222d179d5454cef5d6a55f9a4f26b6.jpg)

clash开启局域网

![](https://picx.zhimg.com/v2-d8dea34b8e6980fc40d3fb790733d70b.png)

此外，我们还需要在 bash 配置文件中加入二进制文件的路径，不然运行时会找不到文件（如果是通过管理员装的，则不用这一步),环境变量中添加刚刚的安装路径

```jsx
vim ~/.bashrc
```

![](https://picx.zhimg.com/80/v2-ea6a367e8a4642a7b49a498821427b79.png)

```jsx
export PATH=/data/xxx/proxychains/bin:$PATH
export PROXYCHAINS_CONF_FILE=/data/xxx/proxychains/proxychains.conf
```

重新开启终端后可正常使用 或者进行 source ~/.bashrc

## 使用

在想要代理网络的时候就在命令前加上 proxychains4 就可以了，例如：

```jsx
proxychains4 curl cip.cc
proxychains4 python main.py
```
  
这样在linux服务器上用本机电脑的代理网络，可以完成wget和git clone的代码等，还是很方便和舒服的

## troubleshoot

在使用的时候报错找不到 proxychains.conf 的，基本上都是编译的时候没有填绝对路径而是填了相对路径，用 make uninstall 以及 make clean 把刚刚生成的东西给删了，然后重新运行上述的安装步骤，一定要填绝对路径。
