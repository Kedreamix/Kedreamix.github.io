---
title: "Linux安全配置Fail2ban"
description: "所有连接到互联网的服务器都面临恶意软件攻击的风险。连接到互联网的软件可能成为攻击者蛮力尝试的目标，试图访问应用程序。"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://pic1.zhimg.com/80/v2-3173a6684e53eb6b7172f6b25a89fbf6_720w.png"
featured: false
oldPath: "/Linux/Linux安全配置fail2ban/"
---

### 风险暴露

所有连接到互联网的服务器都面临恶意软件攻击的风险。连接到互联网的软件可能成为攻击者蛮力尝试的目标，试图访问应用程序。

### 使用Fail2ban工具

Fail2ban是一个开源工具，可帮助保护Linux免受暴力攻击和其他自动攻击。它通过监视服务日志中的恶意活动来工作，使用正则表达式扫描日志文件。

#### 工作原理

1. 扫描日志文件，匹配特定模式的记录。
2. 计数匹配记录，当数量达到预定义阈值时采取措施。
3. 在指定时间段内禁止有问题的IP。
4. 默认使用系统防火墙阻止被禁止IP的访问。
5. 禁止期限到期后，IP地址将从禁止列表中删除。

### 安装和配置Fail2ban

如果需要更新和升级服务器，执行以下命令：

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y fail2ban
```

在root状态下，编辑Fail2ban的配置文件：

```bash
vim /etc/fail2ban/jail.local
```

配置文件内容如下（注意修改ssh端口和sshd日志路径）：

```properties
[sshd]
port = 2223
enabled = true
filter = sshd
logpath = /var/log/auth.log
maxretry = 6
findtime = 60
bantime = 86400

[ssh-iptables]
enabled = true
filter = sshd
action = iptables[name=SSH, port=ssh, protocol=tcp]
```

重启Fail2ban服务：

```bash
sudo service fail2ban restart
```

### 使用Fail2ban

检查被封禁的IP：

```bash
fail2ban-client status sshd
```

取消被禁止的IP地址：

```bash
sudo fail2ban-client set sshd unbanip IP_ADDRESS
```
  
（其中，`IP_ADDRESS`是被禁止的IP地址）

### 启用ufw防火墙

1. 安装ufw：

   ```bash
sudo apt-get install ufw
```
2. 启用ufw：

   ```bash
sudo ufw enable
sudo ufw default allow
sudo ufw allow ssh
sudo ufw allow 2223
```

   以上是简单的保护措施，但记得随时保持系统和软件更新以确保安全性。
