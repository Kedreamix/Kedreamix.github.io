---
title: 开机自启动登录/认证脚本设置（SZU为例）
date: 2024-01-22 01:20:13
tags:
    - Note
categories: Note
cover: https://pica.zhimg.com/80/v2-365ad83c095e796fe879249bfb86ac35.png
---



## 开机自启动登录/认证前沿

有时候在学校或者在企业的时候，会出现这样一种情况，就是我们需要认证才能够上网，但是这种认证并不是非常稳定，有可能会出现断连的情况 

包括有时候电脑关机后自启后也会断掉，针对这种情况，我介绍一种开机自启动登录/认证的脚本，这样能不断的保证联网



## 开机自启动目录

首先，我们既然向进行开机自启动，那么我就需要找到开机自启动目录

在Windows中想要开机自启动某些应用，可以把程序的快捷方式放到开始菜单->程序->启动目录下，但是自启动又分为用户自启动和系统自启动，前者针对单个用户，后者针对全部用户生效。

- 用户自启动目录：`C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`
- 系统自启动目录：`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`

这里要根据用户名进行设置和修改，但是当然有更简单的方法对吧，如下，我也推荐这样的方式自动打开我们的开机自启动目录。

**快捷命令：按下【win+R】打开运行输入：【shell:Common Startup】**



## 设置脚本运行

当我们已经找到了开机自启动目录后，我们就可以在这个文件下，写入`bat`文件，这样每次开机都会自动运行。

首先我们定义`drcom.bat`，我们希望他能运行一个代码来进行一个检测连接网络情况，这个代码放在了 `C盘` 的根目录下，我们也可以根据自己情况修改路径放置

```bash
python C:\\network.py
```

所以主要的就是这个代码了，这个代码是用Python写的，原理十分的简单

既然我们需要不断的联网，那我们就不断的看看能否ping通百度，如果ping通了说明联网了，如果没有，说明我们需要运行一个登录的`Shell`文件

```python
import os
import time

while True:
    exit_code = os.system('ping www.baidu.com')
    if exit_code != 0:
        os.system(r'C:\login_network.sh')
        time.sleep(10)
    else:
        time.sleep(10)
```

这里面的`Shell`文件可以是任何登录的脚本和命令，对于`SZU`来说，脚本如下，只要改为自己的账号和密码即可，这样就完成了开机自启动。

```bash
echo "Login SZU NetWork"
username="1111111"  && password="6666666" && curl -k https://drcom.szu.edu.cn/a70.htm --data "DDDDD=$username&upass=$password&0MKKey=123456";
```

当然，简单的情况下，我们也可以直接在上面的代码`network.py`里面修改，比如如下

```python
import os
import time

while True:
    exit_code = os.system('ping www.baidu.com')
    if exit_code != 0:
        os.system(r'username="1111111"  && password="6666666" && curl -k https://drcom.szu.edu.cn/a70.htm --data "DDDDD=$username&upass=$password&0MKKey=123456";')
        time.sleep(10)
    else:
        time.sleep(10)
```

## 总结

通过这个脚本实现开机自动登录，解决了开机后无法连接网络的问题。本文介绍了在Windows系统下找到开机自启动目录，并放置检查网络状态和登录认证脚本的方法。

具体来说，使用Python脚本循环ping百度检测网络，如果无法连接则调用登录脚本进行登录。登录脚本可以直接写死账号密码，也可以单独保存为文件引用。

这种方法很简单实用，不需要付出额外精力就可以获得自动登录的功能。尤其是在需要频繁登录校园网或公司WiFi的环境下，可以大大提升效率。只需一次设置，之后就可以享受每次开机即可上网的体验。

总之，通过这个开机自启动脚本，轻松实现了每次开机自动登录网络的需求。给日常工作和学习生活带来了许多便利。

最后感谢木子李的代码提供，感谢感谢！！！