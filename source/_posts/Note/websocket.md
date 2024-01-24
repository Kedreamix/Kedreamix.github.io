---
title: 解决Flask-Sockets连接WebSocket时出现werkzeug.routing.WebsocketMismatch的错误
date: 2024-01-15 01:01:01
updated:
tags:
    - Bug
categories: Note
conver: https://pic1.zhimg.com/80/v2-80baa49adeae8dc18ce5779731989a84_720w.png
---

在使用Flask-Sockets进行WebSocket连接时，一些用户可能会遇到如下错误信息：werkzeug.routing.WebsocketMismatch: 400 Bad Request: The browser (or proxy) sent a request that this server could not understand.

这个问题的解决方法可能有两种，从整理的资料上来看，接下来分别对两种方法进行说明。

1. 降低falsk和Werkzeug版本
2. 涉及到安装flask_sockets库并对其源代码进行手动修改。

### 方法一：降低 Flask 和 Werkzeug 版本

这种错误有时是因为Flask版本过高，降级即可成功，但是这种方式可能不够理想，推荐查看方法二。

```bash
pip install flask==1.1.2
pip install Werkzeug==1.0.2
```

### 方法二（推荐）

首先，确保已经安装了flask_sockets库，可以通过运行以下命令进行安装：

```bash
pip install flask_sockets
```

安装完成后，需要对flask_sockets库的源代码进行手动修改。具体的修改如下：

文件：flask_sockets.py 函数：add_url_rule

修改前的代码：

```bash
self.url_map.add(Rule(rule, endpoint=f))
```

修改后的代码：

```bash
self.url_map.add(Rule(rule, endpoint=f, websocket=True))
```

这个修改的目的是为了在添加URL规则时明确指定WebSocket。通过将websocket=True添加到Rule构造函数中，可以解决400 Bad Request错误。

关于这个问题的详细讨论可以参考以下链接： https://github.com/heroku-python/flask-sockets/issues/81

有关这个问题的具体修改可以参考以下链接： https://github.com/slipperstree/flask-sockets/commit/cb06c69db3af2cb52fbc050f3595ffa4100bbee3

通过对flask_sockets库的手动修改，您可以顺利解决WebSocket连接时可能遇到的400 Bad Request错误，确保您的应用正常运行。希望这篇文章对您有帮助！