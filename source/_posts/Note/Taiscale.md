---
title: Tailscale：随时随地远程和使用服务器
date: 2024-01-03 13:28:38
updated:
tags:
   - Note
   - Linux
categories: Note
cover: https://pic1.zhimg.com/70/v2-508dc3a04ba0ad79075b8576e2556780_1440w.jpg

---

## Tailscale是什么？

网上有时候提到tailscale，总是介绍好多，比如以下介绍，但是太官方了

> Tailscale 是一种基于 WireGuard 的虚拟组网工具，和 Netmaker 类似，**最大的区别在于 Tailscale 是在用户态实现了 WireGuard 协议，而 Netmaker 直接使用了内核态的 WireGuard**。

这里面简单介绍一下，实际上Tailscale属于一种虚拟组网工具，基于WireGuard。简单来说他能帮助我们把安装了Tailscale服务的机器，都放到同一个局域网。比如我们的NAS或者PC，或者在其他地方的NAS和PC，甚至云服务器都能放到同一个局域网。这样就实现了一个内网穿透，有时候我们就可以随时随地远程和使用我们的服务器。



## **Tailscale能做什么？**

只需将你的设备连接到公网，Tailscale就能让所有设备加入同一个私有子网。这意味着，无论你身在何处，都可以轻松实现设备间的连接，就像它们在同一个局域网中一样。

举个例子，我的台式机和笔记本都登录了相同的Tailscale账号，它们共享一个100.64/10的子网，可以方便地互联。即使我的笔记本在公司内网，无法直接连接到家里的台式机，通过Tailscale的relay功能，它们依然能够直接连接，实现畅通无阻的通信。

### **1、传输文件**

Tailscale内置了taildrop，可用于设备之间的文件传输。由于Tailscale支持android/ios/mac/windows/linux，因此它也是一个跨平台文件传输工具。如果设备在同一局域网内，传输速度将非常快速。

### **2、远程开发**

举例来说，如果我的台式电脑运行Windows系统，我可以启动WSL2，安装SSHD，相当于将它变成一个服务器。这样，无论我身在何处，都可以通过笔记本上的VSCode Remote SSH随时打开台式机上的VSCode Server，实现远程开发。

对我而言，移动办公的真谛不在于随身携带一台笔记本，而是在任何地方只要有网络，就能使用任何设备接入统一的办公环境。

### **3、代理**

具体可参考，这里不主要介绍，https://github.com/nadoo/glider

## **Tailscale怎么用？**

参照这个官方页面安装，然后登录即可：https://tailscale.com/download

![Tailscale官网](https://picx.zhimg.com/v2-0f0f761a65f56a0818e53fdef6592e11.png)







如下图所示，一旦登录，每台设备都会被分配一个对应的IP地址。此时，所有设备实际上都在同一个局域网内，接下来我们可以启动设备的SSH功能。无论身在何处，只需使用分配给设备的IP地址，就能连接到该设备，从而实现远程办公的功能，例如连接到服务器等。

![设备](https://picx.zhimg.com/v2-5c27422f68e185584f24f59621ae1ebf.png)







## **Windows下安装OpenSSH**

OpenSSH 是 SSH （Secure SHell） 协议的免费开源实现。OpenSSH提供了服务端后台程序和客户端工具，用来加密远程控制和文件传输过程中的数据。安装以后，我们就可以把我们的电脑作为一台服务器进行链接，这样就成功可以随时随地进行远程连接了。

### **在线安装**

一般windows自带SSH server，直接启动即可

开启方法： 安装openssh

设置-应用-应用和功能-可选功能-添加功能

安装OpenSSH服务器即可

![安装SSH步骤1](https://picx.zhimg.com/v2-aeb2d713f14ed7cf9c25f2340190a631.webp)







访问可选功能屏幕。

![安装SSH步骤2](https://picx.zhimg.com/v2-f94b788ac25b51a54a85bf0074d81941.webp)







选择添加要素的选项。

![安装SSH步骤3](https://picx.zhimg.com/v2-15d13a44cccd6e77e83d833b5ca28b7e.webp)







选择 SSH 服务器包，然后单击"安装"按钮。

![安装SSH步骤4](https://pic1.zhimg.com/v2-7087d6f462dc72d88429d3825ac9f160.webp)







等待 Openssh 服务器安装完成。

![安装SSH步骤5](https://pica.zhimg.com/v2-cf48691afcf3e5e8340c490e46d59c94.webp)







作为管理员，启动 Powershell 命令行的提升版本。

![安装SSH步骤6](https://picx.zhimg.com/v2-967a457fd357ab32cd55c5440953af9a.webp)







将 SSH 服务配置为自动启动。

```
 sc config sshd start=auto
```

启动 SSH 服务。

```
 net start sshd
```

创建防火墙规则以允许在 SSH 端口上输入数据包。

```
 netsh advfirewall firewall add rule name="SSH PORT 22" dir=in action=allow protocol=TCP localport=22
```

祝贺！ 您已完成在 Windows 上安装 SSH 服务器。

### **离线安装**

下载最新版本 [适用于Windows二进制文件的OpenSSH](https://github.com/PowerShell/Win32-OpenSSH/releases) （包OpenSSH-Win64.zip或OpenSSH-Win32.zip）

建议直接下载msi 即可，自动安装以后就可以按照上述方法进行启动ssh服务了

## **连接SSH服务器**

接下来，我们就可以使用常规的SSH的方式来连接我们配置好的windows了，我们只需要找到对应的IP地址，对其进行ssh连接即可。

这里一定要注意，**密码是你微软账户的密码**。

连接成功后即可远程办公了，比如我在家里，我们可以设置公司的电脑的ssh，后续我们就可以连接公司的电脑后对其进行操作，这样就比较的方便，当然，也可以对其进行远程，比如todesk等远程工具，这个可以见仁见智，我觉得都可以，有时候我只使用终端，我觉得都还好。

参考

[Laisky's Blog](https://blog.laisky.com/p/tailscale/)

[小辣椒高效Office：Windows系统开启Ssh Server服务](https://zhuanlan.zhihu.com/p/452890363)