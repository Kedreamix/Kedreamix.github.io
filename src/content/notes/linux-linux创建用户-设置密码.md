---
title: "Linux创建用户、设置密码"
description: "由于每台服务器都需要连接到 NAS，而且可能很多用户在不同的服务器上都有账号，这样的话就会导致 uid 冲突（不同服务器上不同用户的 uid 可能是一样的），因此，针对不同情况需要用到不同添加用户的方法："
date: 2023-12-31
updated: 2024-10-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-0001d483092df81d15c83bab67aa01db_720w.png"
featured: false
oldPath: "/Linux/Linux创建用户、设置密码/"
---

## 创建用户

由于每台服务器都需要连接到 NAS，而且可能很多用户在不同的服务器上都有账号，这样的话就会导致 uid 冲突（不同服务器上不同用户的 uid 可能是一样的），因此，针对不同情况需要用到不同添加用户的方法：

1. 该用户为新同学，说明他之前在其他服务器上没有账号，因此，先在 NAS 上为他开一个账号确保 uid 唯一性，再根据这个 uid 去其他的服务器上进行开号。
2. 该用户在其他服务器上有账号，那就直接根据他的 uid 进行开号，无需再经过一遍 NAS。

开号方式使用命令 useradd ，默认情况下直接 useradd user1 就可以了，用户目录为 /home/user1，但是考虑到服务器硬盘容量有限，最好将其划分到具有更大空间的目录如 /data，因此使用如下命令进行自定义添加用户  
在服务器中，可以通过 df -h 来查看磁盘空间，默认uid和gid为同一个

```bash
$ groupadd user1 -g [gid]
$ useradd -u [uid] -g [gid] -d /data/user1 -m -s /bin/bash user1
```

| 选项 | 含义 |
| --- | --- |
| -u UID | 手工指定用户的 UID，注意 UID 的范围（不要小于 500）。 |
| -d 主目录 | 手工指定用户的主目录。主目录必须写绝对路径，而且如果需要手工指定主目录，则一定要注意权限； |
| -c 用户说明 | 手工指定/etc/passwd文件中各用户信息中第 5 个字段的描述性内容，可随意配置； |
| -g 组名 | 手工指定用户的初始组。一般以和用户名相同的组作为用户的初始组，在创建用户时会默认建立初始组。一旦手动指定，则系统将不会在创建此默认的初始组目录。 |
| -G 组名 | 指定用户的附加组。我们把用户加入其他组，一般都使用附加组； |
| -s shell | 手工指定用户的登录 Shell，默认是 /bin/bash； |
| -e 曰期 | 指定用户的失效曰期，格式为 “YYYY-MM-DD”。也就是 /etc/shadow 文件的第八个字段； |
| -o | 允许创建的用户的 UID 相同。例如，执行 “useradd -u 0 -o usertest” 命令建立用户 usertest，它的 UID 和 root 用户的 UID 相同，都是 0； |
| -m | 建立用户时强制建立用户的家目录。在建立系统用户时，该选项是默认的； |
| -r | 创建系统用户，也就是 UID 在 1~499 之间，供系统程序使用的用户。由于系统用户主要用于运行系统所需服务的权限配置，因此系统用户的创建默认不会创建主目录。 |

## 设置密码

开了用户以后，可以进行设置密码

```bash
sudo passwd user1
```
  
设置密码的时候，可以进行随机生成密码得到结果，这样不容易被爆破  
[创建强大、安全、随机的密码 | Password 密码生成器 | 1Password](https://1password.com/zh-cn/password-generator/)  
[生成随机密码 - 密码生成器 - 密码批量生成器](https://suijimimashengcheng.bmcx.com)

## 权限设置

如果需要加入一些权限，比如root权限，首先我们可以查看一下用户的权限

```bash
sudo cat /etc/sudoers
```

- 增加权限 sudo gpasswd -a username sudo / sudo usermod -aG sudo username
- 删除权限 sudo gpasswd -d username sudo

## 命令行窗口下用户的相互切换

su 用户名 说明：su是switch user的缩写，表示用户切换

## 其他

- usermod —help 修改用户这个命令的相关参数
- userdel testuser 删除用户testuser
- rm -rf testuser 删除用户testuser所在目录

创建新用户后，同时会在etc目录下的passwd文件中添加这个新用户的相关信息

- groupadd testgroup 组的添加
- groupdel testgroup 组的删除

说明：组的增加和删除信息会在etc目录的group文件中体现出来。

管理员查看所有用户

```bash
cat /etc/passwd
```

### 生成密钥

```bash
ssh-keygen
# ssh-keygen -m PEM -t rsa -b 4096
cd ~/.ssh
cat id_rsa.pub >> authorized_keys
chmod 600 authorized_keys
chmod 700 ~/.ssh
```

### 增加用户权限

```plaintext
sudo usermod -aG sudo username 
sudo cat /etc/sudoers
```

| 功能 | 命令 |
| --- | --- |
| 增加权限 | sudo gpasswd -a mumbly sudo |
| 删除权限 | sudo gpasswd -d mumbly sudo |

### NAS开号步骤

```plaintext
NAS开号步骤
1. ssh admin@172.31.233.218
2. cd /share/Public
3. useradd xxx
4. mkdir xxx
5. chown xxx:xxx xxx/
6. 完事
```
```bash
sudo systemctl restart sshd
sudo systemctl status sshd
```
