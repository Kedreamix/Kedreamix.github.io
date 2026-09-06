---
title: "Linux中修改用户UID和组GID的方法"
description: "我在部署nfs的时候，共享了一个文件夹。为了让远程nfs客户端挂载这个文件夹的时候都有可读写权限，我需要把服务器上的用户uid、gid设置成nfs服务端文件夹一样的权限。不过因为之前新建的用户uid、gid都是系统自动生成的，几台服务器之前某个用户的uid、gid可能都不一样，所以现在需要把这个uid、gid都设置成统"
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://picx.zhimg.com/80/v2-76775d513b4c305892c3a0297a2077d9_720w.png"
featured: false
oldPath: "/Linux/Linux中修改用户UID和组GID的方法/"
---

我在部署nfs的时候，共享了一个文件夹。为了让远程nfs客户端挂载这个文件夹的时候都有可读写权限，我需要把服务器上的用户uid、gid设置成nfs服务端文件夹一样的权限。不过因为之前新建的用户uid、gid都是系统自动生成的，几台服务器之前某个用户的uid、gid可能都不一样，所以现在需要把这个uid、gid都设置成统一某个值。

修改用户uid和组gid的命令分别是usermod和groupmod，思路很简单。先使用usermod修改用户的uid，然后使用groupmod修改组的gid，最后使用chown和chgrp命令修改原来用户文件和目录的属主属组。  
例如测试用户foo和测试组foo。

```bash
foo old UID: 1005
foo new UID: 2005
foo old GID: 2000
foo new GID: 3000
```

## 命令：

1、修改foo用户的uid

```bash
usermod -u 2005 foo
```

2、修改foo组的gid

```bash
groupmod -g 3000 foo
```

3、foo用户的家目录下面的文件属主和属组会在1、2命令执行后自动修改成新的uid、gid对应的属主属组，但是其他文件目录需要手动修改。手动修改的命令也比较简单。

```bash
# 利用name
find / -user 1005 -exec chown -h foo {} ;
find / -group 2000 -exec chgrp -h foo {} ;
# 利用old id
find / -user 1005 -exec chown -h 2005 {} ;
find / -group 2000 -exec chgrp -h 3000 {} ;
```

这样用户和组的uid、gid就修改好了。可以用id命令看下是否修改的如我们所愿。

```bash
ls -l /home/foo/

id -u foo

id -g foo

grep foo /etc/passwd

grep foo /etc/group
```
