---
title: "Linux服务器之间文件传输"
description: "bash 将服务器文件传输到本地 scp -r user@ip:服务器文件夹 本地文件夹 bash 将本地文件传输到服务器 scp -r 本地文件夹 user@ip:服务器文件夹"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-a1da67d15cf06025bde4f94b757be7f7_720w.png"
featured: false
oldPath: "/Linux/Linux服务器间文件传输/"
---

## SCP命令

正常情况下使用SCP命令

```bash
# 将服务器文件传输到本地
scp -r user@ip:服务器文件夹 本地文件夹
```
  
```bash
# 将本地文件传输到服务器
scp -r 本地文件夹 user@ip:服务器文件夹
```

## 使用密钥

使用密钥时，需要添加一个-i的参数，并输入对应密钥的密码即可

```bash
scp -i 对应密钥地址 -r user@ip 本地文件夹
```
  
如果出现Permissions 0644错误，则运行chmod 400修改一下权限即可  
```plaintext
chmod 400 密钥地址
```

## 增加端口port

```plaintext
scp -r -i 对应密钥地址 -P 端口号 user@ip:服务器文件夹 本地文件夹
```
