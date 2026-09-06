---
title: "如何在Linux服务器上安装Anaconda（超详细）"
description: "这里我们需要在官网上查找自己需要的版本，地址链接在下面: <https://repo.anaconda.com/archive/ 这里以我自己安装的版本为例： <https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh 这是我选择的版本，然后"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://pic1.zhimg.com/80/v2-bbee5dab4d2a8cc201eeeaf811db82b7_720w.png"
featured: false
oldPath: "/Linux/Linux装Anconda及pytorch/"
---

## 安装Anaconda

### 1.1 下载anaconda的安装包

这里我们需要在官网上查找自己需要的版本，地址链接在下面:  
<https://repo.anaconda.com/archive/>  
这里以我自己安装的版本为例：  
<https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh>  
这是我选择的版本，然后我们在控制台输入这句话:

```bash
wget https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh
```
  
如果没有出现问题就是下面图示：  
![](https://pic1.zhimg.com/v2-d676de98829f1145c75f69bc9896c15e.png)  
如果出现问题就按照 1.2 步骤操作。

### 1.2 解决安装出现的bug

当我们输入1.1的那一条命令时，有些人可能会出现下面这样的错误:

```bash
bash: wget: command not found
```
  
当然这也是我自己出现的错误，具体解决办法如下: Debian/Ubuntu系统，需要执行以下命令：  
```bash
apt-get install -y wget
```
  
相反，CentOS系统则需要输入下面指令:  
```bash
yum install wget -y
```

### 1.3 安装anaconda

接下来我们需要首先赋权再执行安装程序，依次输入下面两句命令:

```bash
chmod +x Anaconda3-5.3.0-Linux-x86_64.sh
./Anaconda3-5.3.0-Linux-x86_64.sh
```
  
然后出现下面图所示:  
![](https://picx.zhimg.com/v2-450e81bb2de67a3c137bf068af871d6b.png)

### 1.4 点击Enter（回车键）

此时显示Anaconda的信息，并且会出现More，继续按Enter，直到如下图所示:  
![](https://picx.zhimg.com/v2-558fb8bd56454e22cd5853e97d5d58ef.png)

### 1.5 输入 yes

![](https://picx.zhimg.com/v2-6957bbec41567ae3cf222d00cefa9bca.png)

### 1.6 继续点击 Enter

![](https://pic1.zhimg.com/v2-9cacfb8685e9f1c10036d80edffe6fdd.png)

### 1.7 输入 yes，添加环境变量

这里需要注意点的就是如果你直接跳过这部设置环境变量的话：

![](https://pic1.zhimg.com/v2-f0f80af2b03a73a6a81e82149405e38c.png)

这里需要注意点的就是如果你直接跳过这部设置环境变量的话：  
[no ] >>>  
那你需要自己到这个文件夹设置你安装Anaconda路径（比如上面显示我的是）  
/home/wangke/.bashrc  
单击进去，在最后一行添加：  
export PATH=/home/wangke/anaconda3/bin:$PATH  
需要把之前的那句话给注释掉如下所示：

```bash
# export PATH=/usr/local/nvidia/bin:/usr/local/cuda/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATHexport PATH=/root/anaconda3/bin:$PATH
```

这里只是个示例，具体的还是要看你们自己安装的路径，这个就是相当于windows的环境变量  
然后保存更改，输入下面这句指令：

```bash
source ~/.bashrc
```

### 1.8 完成安装以及检测是否安装成功

打开新的终端后，进入自己的文件夹目录下，输入anaconda -V（注意a要小写，V要大写），conda -V ,显示版本信息，若显示则表示安装成功。

```bash
root@dev-wyf-react:~/wyf# conda -V
conda 4.5.11
```

## Anaconda安装Pytorch

### 2.1 创建虚拟环境

```bash
conda create -n pytorch python=3.7 （pytorch 是我自己取的名字）
```

### 2.2 激活环境

使用下面这条命令，激活环境：

```bash
conda activate pytorch
```
  
出现下面所示:  
```bash
(pytorch) root@dev-wyf-react:~/wyf#
```
  
检测环境是否安装好:  
```bash
(pytorch) root@dev-wyf-react:~/wyf# conda info –envs
```
  
出现下面所示：  
```bash
base /root/anaconda3 pytorch * /root/anaconda3/envs/pytorch
```
  
然后去选择适合自己的pytorch版本，点击下面那个链接:  
<https://pytorch.org/>  
![](https://pica.zhimg.com/v2-909fe51d58b9ad7b9a6494d682206fff.png)  
利用安装的cudatoolkit=11.3可以很好的安装cuda工具包

### 2.3 测试安装成功

首先输入： python 然后在输入：import torch

![](https://pic1.zhimg.com/v2-8351ad9a02919bb2186436fbb04719d5.png)

### 2.4 退出之后如何查看自己安装的环境

如果在一台服务器上安装多个环境，一下子可能不记得需要激活哪个环境名称，这时候我们需要使用下面这个命令来查找：

```bash
conda info –envs
```
  
![](https://picx.zhimg.com/v2-a2d772f6c53ad75747862907d184eec3.png)

## 迁移 conda 环境

有时候我们需要在机器上重新建一个 conda 环境，但是又不想重新装包，毕竟 pytorch 和 cuda 版本都跟之前的环境是一样的，所以可以直接从之前的环境中复制一份成为新环境，conda 是支持这样做的，以下命令就将 BBB 环境拷贝了一份成为 AAA 环境。

```bash
conda create -n AAA --clone BBB
```

如果涉及不同服务器之间装环境的话也一样，可以先将旧的环境拷贝到新的电脑，然后通过下面的命令创一个新的环境

```bash
conda create -n AAA --clone ~/path 
```

可以使用 `conda info -e` 来查询机器上的所有 conda 环境以及对应所在的位置。

## 其他错误

step1：安装anacoda 下载地址

```jsx
bash Anaconda3-2018.12-Linux-x86_64.sh
```

step2：按照官网的方法安装pytorch

```jsx
conda install pytorch torchvision cudatoolkit=10.0 -c pytorch
```

在此期间你会发现特别的慢，慢也就算了主要它还老安装不成功，这是为什么呢  
在用conda安装软件的过程中还会经常遇到的一个问题，就是：软件太大老是下载中断 我要下载一个软件，conda会告诉我这个软件底层依赖好几个其他的软件，需要将它们一起下载安装，这个时候这一大堆软件中可能有几个体量很大，上百MB，很容易下着下着网络连接就中断了，而conda有没有断点下载功能，一旦下载中断，conda就会终止安装进程退出运行 最后，我们转战清华源安装,运行以下命令:

```jsx
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
# reference

# https://mirror.tuna.tsinghua.edu.cn/help/anaconda/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
```

LAST，直接运行下面的命令就可以快速安装好啦，真的真的真的很快，就是不走-c pytorch即可

```plaintext
conda install pytorch torchvision cudatoolkit=10.0
```

可参考：<https://cloud.tencent.com/developer/article/1627527>
