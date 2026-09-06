---
title: "Linux常用技巧及命令（不断更新）"
description: "| 命令 | command | | --- | --- | | 查看 GPU 使用状态 | nvidia-smi | gpustat -i 需 pip install gpustat | nvitop（需pip install nvitop） | | 查看进程 | top、htop、ps -ef | grep pid"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-64e58c7c0cd5c371273bb90889453c7c_720w.png"
featured: false
oldPath: "/Linux/Linux常用技巧及命令/"
---

## 常用命令

| 命令 | command |
| --- | --- |
| 查看 GPU 使用状态 | nvidia-smi | gpustat -i (需 pip install gpustat) | nvitop（需pip install nvitop） |
| 查看进程 | top、htop、ps -ef | grep [pid] |
| 查看服务器磁盘容量 | df -h |
| 查看自己占用服务器的容量 | du -h |
| 查看当前目录下文件个数 (不包含子目录) | ls -l | grep “^-“ | wc -l |
| 查看端口占用 (Linux) | lsof -i:PORT (没有空格) |
| 查看端口占用 (Windows) | 查看所有开放端口： netstat -ano 查看占用端口程序的 PID：netstat -aon | findstr “PORT” 查看占用端口的 PID 所对应的程序：tasklist | findstr “PID” 杀死占用端口的进程：taskkill /T /F /PID “PID” |

## Linux的Vim常用快捷键

<https://www.runoob.com/w3cnote/all-vim-cheatsheat.html>

![Linux的Vim常用快捷键](https://picx.zhimg.com/v2-8ccbfe019bbbb1f2062d5bd6ff9d75f4.png)

## 解压中文文件

```bash
unzip -O GBK 脑PET图像分析和疾病预测挑战赛公开数据.zip
```

## 查看进程使用者以及命令

```bash
ps -p <PID> -o user,cmd
```

请注意，在某些情况下，特权用户可能无法查看其他用户的进程信息。在这种情况下，您需要以root用户或拥有适当权限的用户身份运行`ps`命令。

## 查找历史记录

查找历史记录中包含关键字的命令：

```bash
history | grep 关键字
```

这个命令将显示包含指定关键字的历史记录命令。通过使用`history`命令查看最近使用的命令列表，并结合`grep`命令在文本中搜索指定模式（或关键字）。

## 批量 kill 进程

用 grep 配合 awk 可以轻易做到，`awk '{print $2}'` 表示输出第二列结果，在 ps 命令中就是进程的 id 号

```bash
ps -ef | grep xxx | grep -v grep | awk '{print $2}' | xargs kill -9
```

如果要kill掉所有python的进程

```bash
pkill python
```

## 查看内存占用

输入 `ps aux | sort -k4nr | head -n 5` 查看占用内存最多的前 5 个进程，或者也可以通过 `top` 命令后按住 `M` 来对内存占用进行排序，两个都可以。利用 `ps -aux` 或者 `top` 命令也可以查看到具体的占用多少 G 内存，举个例子，这是 `top` 命令的界面，`%MEM` 就是内存的占用量，对 `250508` 这个进程来分析一下，它的占用率是 2.1%，我们服务器内存大概是 504G，得出这个进程占用了大约 10.6G 的内存

```bash
   PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
250508 wubizhu   20   0 92.497g 0.010t  88056 S   0.0  2.1   0:32.10 python
250593 wubizhu   20   0 92.498g 0.010t  87900 S   0.0  2.1   0:29.64 python
225884 xjheng    20   0 49.620g 0.010t 6.367g S   4.8  2.0  57:06.42 python
 83813 xjheng    20   0 52.932g 6.760g 3.045g R 101.9  1.3 205:04.84 python
252689 zxdong    20   0 14.935g 4.106g  83604 D   2.6  0.8  22:00.05 python
252681 zxdong    20   0 14.935g 4.106g  83608 D  30.4  0.8  22:18.04 python
 13646 xjheng    20   0 17.928g 4.022g 1.127g D  22.7  0.8   1:29.93 python
```

验证一下说法，通过 `ps -aux | grep 250508` 得到下面结果，第六列 `10944660` 就是占用的物理内存，单位是 k，所以这里统计出的是 10.9G，跟我们算出来的差不多

```bash
wubizhu  250508  1.8  2.0 96990572 10944660 pts/131 Sl+ 11:50   0:42 python xx.py
```

通过 `cat /proc/250508/status` 也能得到进程的内存占用量，`VmRSS` 就是物理内存使用量，单位也是 k

```bash
Name:   python
Umask:  0002
State:  S (sleeping)
Tgid:   250508
Ngid:   250508
Pid:    250508
PPid:   38642
TracerPid:      0
Uid:    1074    1074    1074    1074
Gid:    1074    1074    1074    1074
FDSize: 128
Groups: 1074
NStgid: 250508
NSpid:  250508
NSpgid: 38642
NSsid:  9950
VmPeak: 97005580 kB
VmSize: 96990572 kB
VmLck:         0 kB
VmPin:         0 kB
VmHWM:  10961980 kB
VmRSS:  10944656 kB
```

## Linux中断运行以及恢复

如果您不小心停止了一个正在运行的文件，一般终端可以使用`ctrl + Z`，可以尝试使用以下方法来继续它的运行：

**使用 fg 命令将进程移动到前台**

如果您在终端中运行的是一个正在运行的程序，可以使用 `fg` 命令将其移动到前台继续运行。首先，使用 `jobs` 命令查看当前终端会话中的作业列表，找到您想要恢复的作业的编号。然后，使用 `fg` 命令并带上作业编号，将进程移动到前台继续运行。例如，如果您想要恢复作业编号为 1 的进程，可以使用以下命令：

```bash
jobs
fg %1
```

**使用 nohup 命令将进程放入后台继续运行**

如果您希望进程在后台继续运行，可以使用 `nohup` 命令。该命令可以使进程在断开终端连接后继续运行，并将输出写入指定的文件。例如，如果您想要在后台运行名为 `myprogram` 的程序，并将输出写入 `myprogram.log` 文件，可以使用以下命令：

```bash
nohup myprogram > myprogram.log &
```

其中，`&` 符号表示将进程放入后台运行。

请注意，这些方法仅适用于在终端中运行的进程。如果您使用 GUI 界面启动的程序，可以尝试重新启动该程序或者使用系统监视器等工具来查看和终止进程。
