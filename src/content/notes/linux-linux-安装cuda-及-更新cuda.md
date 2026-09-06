---
title: "Linux 安装CUDA 及 更新CUDA"
description: "先装 CUDA 下载地址https://developer.nvidia.com/zh-cn/cuda-toolkit，老版本的 CUDA 不用删掉，直接让管理员将 cuda 软连接到最新的 CUDA 就行了，以防有些代码需要低版本 CUDA，所以我们可以在多个CUDA版本进行切换。"
date: 2023-12-31
updated: 2024-12-02
kind: linux
tags: ["Linux"]
cover: "https://pic1.zhimg.com/80/v2-774e9c242f378d25f33e0ad954e2db61_720w.png"
featured: false
oldPath: "/Linux/Linux 安装CUDA 及 更新CUDA/"
---

# CUDA 更新

先装 CUDA [[下载地址](https://developer.nvidia.com/zh-cn/cuda-toolkit)]，老版本的 CUDA 不用删掉，直接让管理员将 cuda 软连接到最新的 CUDA 就行了，以防有些代码需要低版本 CUDA，所以我们可以在多个CUDA版本进行切换。

再装驱动 [[驱动下载地址]](https://www.nvidia.cn/Download/index.aspx?lang=cn)，安装过程会提示说检测到老版本驱动，直接卸载就行了。（但是在Linux中，我们只需要安装CUDA，里面会自带驱动安装，不需要重新安装驱动）

# CUDA 安装

## CUDA 简介

CUDA 是由 Nvidia 公司开发的并行计算平台和应用程序接口，软件开发者可以利用支持 CUDA 软件的 GPU 进行通用计算。CUDA 可以直接链接到 GPU 的虚拟指令集和并行计算单元，从而在 GPU 中完成内核函数的计算。  
CUDA 提供 C/C++/Fortran 接口，也有许多高性能计算或深度学习库提供包装后的 Python 接口。开发者们可根据实际需要 (高性能计算, 深度学习, 神经网络等) 选择适当的编程语言。

## CUDA 安装步骤

一般而言，在 Linux 下安装和使用 CUDA 的流程如下：

1. 安装 NVIDIA Driver，即显卡驱动
2. 安装 CUDA Toolkit
3. 使用 C/C++ 编译器或 Python 扩展库进行 GPU 加速的 CUDA 编程

## 安装CUDA

1. 首先查看驱动，在命令行输入nvidia-smi查看显卡驱动版本也就是最高支持的CUDA工具包版本。  
   例如，本机可安装11.2及以下的CUDA工具包：  
   ![](https://pica.zhimg.com/v2-8eb67ea314c41ef10fe803db8ec37146.png)
2. 在[nvidia官网](https://developer.nvidia.com/cuda-toolkit-archive)选择对应版本的CUDA工具包并选择你的机器配置，我们就选择11.2.0版本下载，  
   ![](https://cdn.nlark.com/yuque/0/2023/png/32727715/1699412172755-39338a8a-468b-42d7-9f47-b7eae24f7b43.png#averageHue=%23faf9f4&clientId=u8317f767-0156-4&from=paste&id=ub4eaf9ff&originHeight=550&originWidth=602&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub607342c-fcd0-4d93-9eae-541091756f6&title=)  
   ![](https://picx.zhimg.com/v2-7f66e7a0b551621641f20f164e44eaaa.png)
3. 在终端执行如下命令：

```bash
wget https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda_11.2.0_460.27.04_linux.run
sudo sh cuda_11.2.0_460.27.04_linux.run
```

![](https://picx.zhimg.com/v2-d342c888c906d6ffb7e87abab83de0d1.png)  
如果出现以下提示，选择continue并在第四步取消安装驱动即可。  
![](https://picx.zhimg.com/v2-a8f2cd8aec305e7c0ab32d0c21d51901.png)

1. 根据提示一步步安装键入accept确认。👇  
   ![](https://picx.zhimg.com/v2-94f230d6082cbf2b695ba71fda63655d.png)
2. 我们已经有驱动了，这里取消安装驱动，上下键和回车键选择。👇  
   ![](https://picx.zhimg.com/v2-f0602a3e166fc875a2e1ca29ae91c0e6.png)
3. 稍作等待，出现以下提示信息就安装好了，可以看到CUDA安装到了/usr/local/cuda-11.2/。  
   ![](https://pica.zhimg.com/v2-4e3d84d056ff7e7453c4f30e73531ea6.png)
4. 配置环境变量

打开配置文件

```plaintext
vi /etc/profile
```

在配置文件末尾加上：

```plaintext
export PATH=/usr/local/cuda-11.2/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-11.2/lib64$LD_LIBRARY_PATH

# 第二种可以方便切换CUDA
export PATH=/usr/local/cuda/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda/lib64$LD_LIBRARY_PATH
```

source 一下配置文件

```plaintext
source /etc/profile
```

1. 检查是否安装完成

使用nvcc -V检查CUDA是否安装完成，出现以下提示代表安装完成。

![](https://pica.zhimg.com/v2-4c3f3cb58faba27427df57840bd54650.tiff)  
编译并执行CUDA样例程序，出现pass代表CUDA和GPU正常运行：

```plaintext
cd /usr/local/cuda-11.2/samples/1_Utilities/deviceQuery
sudo make
./deviceQuery
```

![](https://pic1.zhimg.com/v2-5c859ddd09830ca59b872170d68f9eb2.png)

# 多个CUDA版本切换

实际上，老版本的 CUDA 不用删掉，直接让管理员将 cuda 软连接到最新的 CUDA 就行了，以防有些代码需要低版本 CUDA，所以我们可以在多个CUDA版本进行切换。在linux里面，就是修改软连接即可，软连接到对应的CUDA就可以实现安装。

## root用户软链接

### 删除原来的软链接

**第一种方法：**  
经评论区大佬指点，可以使用unlink命令删除软链接：

```bash
cd /usr/local
sudo unlink cuda
```

**第二种方法：**  
注意！不要多打一个’/‘，否则会删除了实际数据。  
具体参见：[linux删除软链接的正确方式_每天进步一点的技术博客_51CTO博客_linux软连接](https://link.zhihu.com/?target=https%3A//blog.51cto.com/kusorz/1876315)

```bash
cd /usr/local
sudo rm -rf cuda
```

（千万不要多打’/‘ ！！！！！再说一遍！！！）

### 建立新的软链接

建立指向cuda-10.0（需要的CUDA版本）版本的软链接

```bash
sudo ln -snf /usr/local/cuda-8.0 /usr/local/cuda
```

### 查看当前CUDA版本

通过以下命令来查看切换是否成功

```bash
# 查看'cuda'是否指向'/usr/local/cuda-需要的版本号'
cd /usr/local
stat cuda

# 查看当前CUDA版本号
nvcc -V
```

附查看所有CUDA版本的命令

```bash
ls -l /usr/local | grep cuda
```

下面原来是CUDA 11 ，现切换为CUDA10版本的操作：

```bash
censhaoqi@censhaoqiVM:/usr/local$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2020 NVIDIA Corporation
Built on Thu_Jun_11_22:26:38_PDT_2020
Cuda compilation tools, release 11.0, V11.0.194
Build cuda_11.0_bu.TC445_37.28540450_0

censhaoqi@censhaoqiVM:/usr/local$ sudo rm -rf cuda
censhaoqi@censhaoqiVM:/usr/local$ sudo ln -snf /usr/local/cuda-10.0 /usr/local/cuda

censhaoqi@censhaoqiVM:/usr/local$ stat cuda
  File: 'cuda' -> '/usr/local/cuda-10.0'
  Size: 20        	Blocks: 0          IO Block: 4096   symbolic link
Device: 8dh/141d	Inode: 36966009    Links: 1
Access: (0777/lrwxrwxrwx)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2021-09-15 19:58:35.449731251 +0800
Modify: 2021-09-15 19:58:31.881787060 +0800
Change: 2021-09-15 19:58:31.881787060 +0800
 Birth: -

censhaoqi@censhaoqiVM:/usr/local$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2018 NVIDIA Corporation
Built on Sat_Aug_25_21:08:01_CDT_2018
Cuda compilation tools, release 10.0, V10.0.130
```

## 个人用户设置路径

我们可以在自己的~/.bashrc中设置cuda的路径也可以自由的切换我们的CUDA的版本，同样我们也可以使用alias

> Linux alias 命令用于设置指令的别名，用户可利用 alias，自定指令的别名。  
> 它可以使您以一种更简单和易于记忆的方式执行命令，而不必每次都键入完整的命令。  
> 若仅输入 alias，则可列出目前所有的别名设置。  
> alias 的效果仅在该次登入的操作有效，若想要每次登入都生效，可在 **.profile** 或 **.cshrc** 中设定指令的别名。

```jsx
vim ~/.bashrc
# 加入已有的CUDA的路径，这里面一定要查看自己本机是否有安装好的cuda
# 这里面在多个CUDA安装后进行切换的
# ls /usr/local/ 可查看cuda
alias cuda111='export PATH=/usr/local/cuda-11.1/bin:$PATH'
alias cuda118='export PATH=/usr/local/cuda-11.8/bin:$PATH'
source ~/.bashrc
# 接下来就可以自由切换cuda了，可nvcc -V查看是否正确切换
# 使用cuda11.1
cuda111 
# 使用cuda11.8
cuda118
```

# cuDNN的安装

根据安装的CUDA工具包版本在官网选择适合版本的cuDNN，本文安装的CUDA版本是11.2，就选择与之对应的cuDNN v8.4.0，选择Local Installer for Linux x86_64 (Tar)。

复制cuDNN库的链接，使用wget下载或者下载到自己电脑之后再传到服务器上。  
我的服务器网速有点慢，所以选择先下到自己电脑再传上去，速度很快啊。

解压cuDNN文件，并进入解压出的文件夹，拷贝文件到/usr/local/cuda-11.2中

```bash
tar -xvf cudnn-linux-x86_64-8.4.0.27_cuda11.6-archive.tar.xz
cd cudnn-linux-x86_64-8.4.0.27_cuda11.6-archive
sudo cp lib/* /usr/local/cuda-11.2/lib64/
sudo cp include/* /usr/local/cuda-11.2/include/
sudo chmod a+r /usr/local/cuda-11.2/lib64/*
sudo chmod a+r /usr/local/cuda-11.2/include/*
```

查看cuDNN版本，旧版本指令 为cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A2，新版本有更新，将cuDNN版本信息单拉了一个文件名为 cudnn_version.h，所以新版本查看cuDNN版本的命令为 cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2

出现问题：Error ‘An NVIDIA kernel module ‘nvidia’ appears to already be loaded in your kernel’ when trying to get GPU support in AWS EMR  
<https://unix.stackexchange.com/questions/440840/how-to-unload-kernel-module-nvidia-drm>

# CUDA驱动更新

当用户需要使用当前驱动不能支持的高版本cuda时，需要将机器显卡驱动更新到新版本，用户在自己环境下安装对应的cudatoolkit即可使用。

在更新驱动之前需要保证显卡上没有程序在运行，并且驱动也没有在被使用，可以通过`fuser -v /dev/nvidia*`查看。

```bash
fuser -v /dev/nvidia*
```

1、用户程序，通知用户停止。

2、系统程序（部分机器存在）

![img](https://picx.zhimg.com/80/v2-2eb0bdc223d5c76043ce13cc7689cc0d.png)

```bash
systemctl stop nvidia-persistenced.service
```

![img](https://picx.zhimg.com/80/v2-3df724365c9a4859a0dbe45ac5bad7b5.png)

```bash
systemctl stop dcgm
systemctl stop nvidia-dcgm
# sudo nv-hostengine -t
```

![img](https://picx.zhimg.com/80/v2-da48adc1af6c02a63f4b379acf5434df.png)

```bash
systemctl stop nvsm.service
```

当显卡上没有程序运行时，开始更新驱动。

```bash
Using built-in stream user interface
-> Detected 12 CPUs online; setting concurrency level to 12.
-> The file '/tmp/.X0-lock' exists and appears to contain the process ID '1056' of a running X server.
ERROR: You appear to be running an X server; please exit X before installing.  For further details, please see the section INSTALLING THE NVIDIA DRIVER in the README available on the Linux driver download page at www.nvidia.com.
ERROR: Installation has failed.  Please see the file '/var/log/nvidia-installer.log' for details.  You may find suggestions on fixing installation problems in the README available on the Linux driver download page at www.nvidia.com.
```

解决

sudo service lightdm stop

安装完之后

sudo service lightdm start

更新完驱动之后需要恢复相应服务。

Linux环境变量的加载顺序： **/etc/profile -> ~/.bash_profile -> ~/.bashrc -> /etc/bashrc -> ~/.bash_logout**

# 参考

有时候好像还要装cudnn，但是我那时候没装，不知道是不是必要，可以尝试一下

- [多个CUDA版本切换方法](https://zhuanlan.zhihu.com/p/410764884)
- [Linux 下的 CUDA 安装和使用指南](https://zhuanlan.zhihu.com/p/79059379)
- [【Linux】安装CUDA 11.2 和 cuDNN 8.4.0并检查是否安装成功_linux查看cudnn是否安装成功-CSDN博客](https://blog.csdn.net/tangjiahao10/article/details/125227005)
- [pytorch多gpu并行训练](https://zhuanlan.zhihu.com/p/86441879)
- [基于ubuntu22.04系统安装nvidia A100驱动与NVLink启用](https://blog.csdn.net/kingredfly/article/details/137560894)
- <https://developer.download.nvidia.com/compute/cuda/repos/>
- [CUDA initialization: Unexpected error from cudaGetDeviceCount解决方法](https://blog.51cto.com/lwm666/12218747)

## CUDA Installation

**1)** Download the latest [CUDA Toolkit](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1804&target_type=runfilelocal)

**2) Switch to tty3 by pressing Ctl+Alt+F3**

**3) Unload nvidia-drm before proceeding.**

3a) Isolate multi-user.target

```plaintext
sudo systemctl isolate multi-user.target
```

3b) Note that nvidia-drm is currently in use.

```plaintext
lsmod | grep nvidia.drm
```

3c) Unload nvidia-drm

```plaintext
sudo modprobe -r nvidia-drm
```

4d) Note that nvidia-drm is not in use anymore.

```plaintext
lsmod | grep nvidia.drm
```

\5) Go to your download folder and run the cuda installation.

```plaintext
sudo sh cuda_10.1.168_418.67_linux.run
```

\6) Answer any prompts during installation.

\7) When installation has finished, confirm that the CUDA Version has been updated.

```plaintext
nvidia-smi
```

\8) Start the GUI again.

```plaintext
sudo systemctl start graphical.target
```

<https://neucrack.com/p/252>

<https://gist.github.com/xaliander/2d7ffd6a662b0302fbe840c227cf7a4a>

<https://unix.stackexchange.com/questions/440840/how-to-unload-kernel-module-nvidia-drm>

```plaintext
sudo rmmod nvidia-uvm
```
```bash
sudo lsof /dev/nvidia* | grep -v PID | grep -v lsof | awk '{print $2}' | xargs sudo kill -9
```
```bash
sudo rmmod nvidia_drm
sudo rmmod nvidia_modeset
sudo rmmod nvidia_uvm
sudo rmmod nvidia
sudo lsof /dev/nvidia*
lsmod | grep nvidia
```
```bash
sudo service lightdm stop
sudo stop nvidia-digits-server
sudo service docker stop
sudo rmmod nvidia-uvm
```

service nvidia-docker stop will also resolve it (if UVM is only used by nvidia-docker)

<https://blog.csdn.net/kuku123465/article/details/130250940>

export CUDA_HOME=/usr/local/cuda-11.8

export PATH=/usr/local/cuda-11.8/bin:$PATH
