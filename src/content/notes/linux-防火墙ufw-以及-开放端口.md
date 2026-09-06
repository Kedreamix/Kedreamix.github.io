---
title: "防火墙ufw 以及 开放端口"
description: "Ubuntu 默认使用 UFW（Uncomplicated Firewall）作为防火墙，并且已经支持界面操作了。在命令行中运行 ufw 命令就可以看到一系列可进行的操作。"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://pic1.zhimg.com/80/v2-03eaa06ee2eaf7ef7c0716c7e9831e0c_720w.png"
featured: false
oldPath: "/Linux/防火墙ufw 以及 开放端口/"
---

Ubuntu 默认使用 UFW（Uncomplicated Firewall）作为防火墙，并且已经支持界面操作了。在命令行中运行 `ufw` 命令就可以看到一系列可进行的操作。

最简单的一个操作是使用以下命令来检查防火墙的状态：

```bash
sudo ufw status
```

我的返回结果是：不活动。

防火墙版本：

```bash
sudo ufw version
ufw 0.29-4ubuntu1
Copyright 2008-2009 Canonical Ltd.
```

Ubuntu 系统默认已安装 UFW。

### 1. 安装

```bash
sudo apt-get install ufw
```

### 2. 启用

```bash
sudo ufw enable
sudo ufw default deny
```

运行以上两条命令后，开启了防火墙，并在系统启动时自动开启。这将关闭所有外部对本机的访问，但本机访问外部仍然正常。

### 3. 开启/禁用

以下命令可以打开或关闭某个端口：

```bash
sudo ufw allow smtp     # 允许所有的外部 IP 访问本机的 25/tcp (smtp) 端口
sudo ufw allow 22/tcp   # 允许所有的外部 IP 访问本机的 22/tcp (ssh) 端口
sudo ufw allow 53       # 允许外部访问 53 端口 (tcp/udp)
sudo ufw allow from 192.168.1.100   # 允许 IP 地址为 192.168.1.100 的主机访问所有本机端口
sudo ufw allow proto udp from 192.168.0.1 port 53 to 192.168.0.2 port 53
sudo ufw deny smtp      # 禁止外部访问 smtp 服务
sudo ufw delete allow smtp   # 删除上面建立的某条规则
```

### 4. 查看防火墙状态

```bash
sudo ufw status
```

一般用户只需要如下设置：

```bash
sudo apt-get install ufw
sudo ufw enable
sudo ufw default deny
```

以上三条命令已经足够安全了，如果你需要开放某些服务，再使用 `sudo ufw allow` 开启。

其他命令：

- 开启/关闭防火墙（默认设置是 `disable`）：`sudo ufw enable|disable`
- 转换日志状态：`sudo ufw logging on|off`
- 设置默认策略（比如 “mostly open” vs “mostly closed”）：`sudo ufw default allow|deny`
- 允许或屏蔽端口：`sudo ufw allow|deny [service]`
- 显示防火墙和端口的侦听状态：`sudo ufw status`

### UFW 使用范例

允许 53 端口：

```bash
sudo ufw allow 53
```

禁用 53 端口：

```bash
sudo ufw delete allow 53
```

允许 80 端口：

```bash
sudo ufw allow 80/tcp
```

禁用 80 端口：

```bash
sudo ufw delete allow 80/tcp
```

允许 smtp 端口：

```bash
sudo ufw allow smtp
```

删除 smtp 端口的许可：

```bash
sudo ufw delete allow smtp
```

允许某特定 IP：

```bash
sudo ufw allow from 192.168.254.254
```

删除上面的规则：

```bash
sudo ufw delete allow from 192.168.254.254
```

Linux 2.4 内核以后提供了一个非常优秀的防火墙工具：netfilter/iptables。它免费且功能强大，可以对流入和流出的信息进行细化控制，实现防火墙、NAT（网络地址翻译）和数据包的分割等功能。netfilter 工作在内核内部，而 iptables 则是让用户定义规则集的表结构。

但是 iptables 的规则稍微有些复杂，因此 Ubuntu 提供了 UFW 这个设定工具，以简化 iptables 的某些设定，其后台仍然是 iptables。UFW 即 Uncomplicated Firewall 的简称，一些复杂的设定还是需要使用 iptables。

UFW 相关的文件和文件夹有：

- `/etc/ufw/`：包含一些 UFW 的环境设定文件，如 `before.rules`、`after.rules`、`sysctl.conf`、`ufw.conf`，以及用于 IPv6 的 `before6.rules` 和 `after6.rules`。这些文件一般按照默认设置进行即可。
- 如果在启用 UFW 后，`/etc/ufw/sysctl.conf` 覆盖了默认的 `/etc/sysctl.conf` 文件，如果在 `/etc/ufw/sysctl.conf` 中有新的赋值，则会覆盖 `/etc/sysctl.conf`，否则以 `/etc/sysctl.conf` 的设置为准。你可以通过修改 `/etc/default/ufw` 中的 `IPT_SYSCTL=` 条目来设置使用哪个 sysctrl.conf。
- `/var/lib/ufw/user.rules`：这个文件中包含我们设置的一些防火墙规则，你可以直接修改这个文件来进行设定。修改后需要使用 `ufw reload` 命令重启 UFW 以使新规则生效。

下面是 UFW 命令行的一些示例：

- `ufw enable/disable`：打开/关闭 UFW
- `ufw status`：查看已经定义的 UFW 规则
- `ufw default allow/deny`：外来访问默认允许/拒绝
- `ufw allow/deny 20`：允许/拒绝访问 20 端口（`20` 后可跟 `/tcp` 或 `/udp

`，表示 TCP 或 UDP 封包）

- `ufw allow/deny servicename`：UFW 从 `/etc/services` 中找到对应服务的端口进行过滤
- `ufw allow proto tcp from 10.0.1.0/10 to 本机ip port 25`：允许来自 `10.0.1.0/10` 的 TCP 封包访问本机的 25 端口
- `ufw delete allow/deny 20`：删除以前定义的允许/拒绝访问 20 端口的规则
