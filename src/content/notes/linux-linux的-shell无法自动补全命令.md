---
title: "Linux的 shell无法自动补全命令"
description: "在ubuntuhttps://so.csdn.net/so/search?q=ubuntu&spm=1001.2101.3001.7020上使用useradd新建了一个用户，发现用新建的用户登陆无法使用tab键补全，这个问题是否让人恼火，所以来解决一下。"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-d97b8120c702e09595748700d3d524b6_720w.png"
featured: false
oldPath: "/Linux/Linux的 shell无法自动补全命令/"
---

在[ubuntu](https://so.csdn.net/so/search?q=ubuntu&spm=1001.2101.3001.7020)上使用useradd新建了一个用户，发现用新建的用户登陆无法使用tab键补全，这个问题是否让人恼火，所以来解决一下。

## 一、问题

这是因为shell的解释器不是bash，需把shell的解释器更改为bash

## 二、两种解决方法

### 1)方式一

![](https://picx.zhimg.com/v2-3abd850433ca2709a7ca8e90cb50b340.png)

新建一用户lqding，切换到该用户下

```bash
root@lqding:~# su - lqding
$ echo $USER
lqding
```

提示符仅仅是一个$ ，很奇怪。输入命令，用TAB键也无法补全命令。并且没有命令历史功能。

使用root用户看passwd文件

```bash
root@lqding:~# grep lqding /etc/passwd
lqding:x:1000:1000::/home/lqding:/bin/sh
root@lqding:~#
```

原来lqding用户默认的shell是/bin/sh 将其改为/bin/bash后

```bash
root@lqding:~# vi /etc/passwd
root@lqding:~# grep lqding /etc/passwd
lqding:x:1000:1000::/home/lqding:/bin/bash
root@lqding:~# su - lqding
lqding@lqding:~$
```

经 测试 ，一切功能正常。

### 2)方式二：

![](https://pica.zhimg.com/v2-94d10245114f3dfa18bc77a058301ee1.png)

一劳永逸型的。

这样问题就解决了

## 三、补充知识点

### 1. 作用

`useradd` 或 `adduser` 命令用于创建用户帐号和设置用户的初始目录，通常需要超级用户权限。

### 2. 格式

```bash
useradd [-d home] [-s shell] [-c comment] [-m [-k template]] [-f inactive] [-e expire ] [-p passwd] [-r] name
```

### 3. 主要参数

- `-c`：添加备注文字，备注文字保存在 passwd 的备注栏中。
- `-d`：指定用户登入时的主目录，替换系统默认值 `/home/<用户名>`。
- `-D`：变更预设值。
- `-e`：指定账号的失效日期，日期格式为 MM/DD/YY，例如 06/30/12。缺省表示永久有效。
- `-f`：指定在密码过期后多少天即关闭该账号。如果为 0 账号立即被停用；如果为 -1 则账号一直可用。默认值为 -1。
- `-g`：指定用户所属的群组。值可以是组名也可以是 GID。用户组必须已经存在，默认值为 100，即 users。
- `-G`：指定用户所属的附加群组。
- `-m`：自动建立用户的登入目录。
- `-M`：不要自动建立用户的登入目录。
- `-n`：取消建立以用户名称为名的群组。
- `-r`：建立系统账号。
- `-s`：指定用户登入后所使用的 shell。默认值为 `/bin/bash`。
- `-u`：指定用户ID号。该值在系统中必须是唯一的。0~499默认是保留给系统用户账号使用的，所以该值必须大于 499。

### 4. 说明

`useradd` 可用于创建用户账号，它和 `adduser` 命令是相同的。账号创建完成后，可以使用 `passwd` 设置账号的密码。通过 `useradd` 命令创建的账号实际上是保存在 `/etc/passwd` 文本文件中。

### 参考

<https://blog.csdn.net/bilifo/article/details/50442737>

<https://blog.csdn.net/weixin_37569048/article/details/101675360>
