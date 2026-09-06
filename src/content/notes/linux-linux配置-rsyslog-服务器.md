---
title: "Linux配置 Rsyslog 服务器"
description: "如何在 Ubuntu 上设置 Rsyslog 服务器 – Digitalixy.comhttps://bynss.com/linux/770633.html"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-d9bddc72a6b01b3a218087ea9c516bb6_720w.png"
featured: false
oldPath: "/Linux/Linux配置 Rsyslog 服务器/"
---

[如何在 Ubuntu 上设置 Rsyslog 服务器 – Digitalixy.com](https://bynss.com/linux/770633.html)

# 日志文件和Rsyslog简介

日志文件是用于保存系统活动信息的文件，包括授权和访问尝试、启动和关闭尝试，以及服务的启动和关闭。不同类型的活动有不同的日志文件。Rsyslog是一款开源程序，用于配置Linux操作系统的日志服务器和客户端。  
在这一部分，将在 Ubuntu 操作系统上设置 Rsyslog 服务器。 我们将使用两台 Ubuntu 机器。  
在一台 Ubuntu 机器上，我们将 Rsyslog 配置为日志服务器，  
在另一台机器上； 我们将 Rsyslog 配置为将日志发送到 Rsyslog 服务器的客户端。

# 在Ubuntu上配置Rsyslog服务器

在这一部分，我们将在两台Ubuntu机器上设置Rsyslog服务器。一台机器将被配置为Rsyslog服务器，另一台机器将被配置为将日志发送到Rsyslog服务器的客户端。

## 安装Rsyslog

如果Rsyslog未安装，可以通过以下命令进行安装：

```bash
sudo apt install rsyslog
```
  
在安装过程中，它会提示您 是/否 用于继续安装 Rsyslog 的选项。 按 是 接着Enter 继续。  
验证Rsyslog安装并检查其服务状态：  
```bash
sudo systemctl status rsyslog
```

## 配置Rsyslog服务器

编辑Rsyslog配置文件`/etc/rsyslog.conf`：

```bash
sudo nano /etc/rsyslog.conf
```
  
在配置文件中添加以下行，用于接收通过UDP和TCP发送的syslog：  
```properties
# Receive syslog over UDP
module(load="imudp") 
input(type="imudp" port="514")

# Receive syslog over TCP
module(load="imtcp") 
input(type="imtcp" port="514")
```
  
创建一个模板，用于存储传入的syslog消息：  
```properties
$template remote-incoming-logs, "/var/log/%HOSTNAME%/%PROGRAMNAME%.log"
*.* ?remote-incoming-logs
```

![](https://picx.zhimg.com/v2-6852e00c33d7a3653c21a0274f95c9d2.png)  
保存并关闭配置文件，然后重启Rsyslog服务：

```bash
sudo systemctl restart rsyslog
```

您还可以使用以下命令验证 Rsyslog 是否正在侦听 TCP/UDP 端口 514：

```bash
$ sudo ss -tunlp | grep 514
```
  
应该收到以下输出：

![](https://picx.zhimg.com/v2-96f64402412999a61ab770c8e4060404.png)

## 配置防火墙

如果系统启用了防火墙，打开TCP和UDP端口514，Rsyslog服务器使用这些端口接收来自远程客户端的日志：

```bash
sudo ufw allow 514/tcp
sudo ufw allow 514/udp
sudo ufw reload # 重新加载防火墙
```

# 在 Ubuntu 上配置 Rsyslog 客户端

现在在另一个 Ubuntu 系统上，我们将执行 Rsyslog 客户端的配置。 然后，此客户端会将其日志发送到 Rsyslog 日志记录服务器。

## 安装Rsyslog

如果尚未安装Rsyslog，执行以下命令：

```plaintext
sudo apt install rsyslog
```

## 修改配置文件

编辑Rsyslog配置文件：

```plaintext
sudo vim /etc/rsyslog.conf
```
  
**具体细节看参考图：**  
![](https://picx.zhimg.com/v2-504b8c11750552c11c53d2233980ef28.png)  
![](https://picx.zhimg.com/v2-20c70f079d16d5dd288004534c7048fe.png)  
在 Rsyslog 配置文件的末尾添加以下行。 确保更换 192.168.72.204 与您的 Rsyslog 日志记录服务器的 IP 地址。(**这里要注意ip地址，如172.31.224.190**)```bash
，#Send system logs to rsyslog server over RDP

*.* @192.168.72.204:514 # *.* @服务器ip地址:514

#Send system logs to rsyslog server over TCP

*.* @@192.168.72.204:514 # *.* @@服务器ip地址:514 

##Set disk queue to preserve your logs in case rsyslog server is experiencing any downtime
```
```bash
$ActionQueueFileName queue

$ActionQueueMaxDiskSpace 1g

$ActionQueueSaveOnShutdown on

$ActionQueueType LinkedList

$ActionResumeRetryCount -1
```

## 修改配置文件

```plaintext
vim /etc/rsyslog.d/50-default.conf
```

![](https://pic1.zhimg.com/v2-9b7bdc9a3e08ad468aef863ce72ad7eb.png)

## 添加环境变量

在vim /etc/profile最后添加

```plaintext
export PROMPT_COMMAND="history -a"
export HISTTIMEFORMAT="`whoami` %F %T "
shopt -s histappend
export PROMPT_COMMAND='{ msg=$(history 1 | { read x y; echo $y; });logger "[euid=$(whoami)]":$(who am i):[`pwd`]"$msg"; }'
```
  
![](https://picx.zhimg.com/v2-6b59d9c8ecdd94a5ef00ee35ed7111e1.png)

## 重启服务

现在运行以下命令重启 Rsyslog 的服务：

```plaintext
/etc/init.d/rsyslog restart
```
  
![](https://pic1.zhimg.com/v2-c1deae4ddcadce6e60f62c011f98248d.png)

# 在 Rsyslog Server 中查看客户端的日志文件

完成上述所有配置后，您可以查看客户端发送到 Rsyslog 服务器的日志文件。 在您的 Rsyslog 服务器机器上，在终端中运行以下命令：

```plaintext
$ ls /var/log/ # 具体看文件的命名
```
  
在上述命令的输出中，您将看到一个与您的客户端系统主机名相同的目录（我们的 ubuntu2 example）。  
![](https://picx.zhimg.com/v2-d524b8a87c12665b38e574fb511d5229.png)  
要查看客户端机器的日志文件，请列出该目录的内容：```plaintext
$ sudo ls /var/log/ubuntu2
```

![](https://pic1.zhimg.com/v2-209842178d0de9e02cff85c548270c8b.png)

这就是它的全部！ 在本指南中，我们介绍了如何在 Ubuntu OS 上将 Rsyslog 配置为日志服务器和客户端以将日志发送到 Rsyslog 服务器。 我们还介绍了如何查看客户端发送到日志服务器的日志。
