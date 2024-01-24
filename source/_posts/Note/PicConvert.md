---
title: 图床转化脚本
date: 2024-01-20 16:10
updated:
tags:
    - Note
    - Tool
categories: Note
keywords:
description: 一个适用于多种图床转换的脚本（知乎、b站、简书、CSDN、博客园）
cover: https://pic1.zhimg.com/v2-10ea2f2f64f2fbbef8e61656dee9c1f6.png
---

Github: [https://github.com/imcyx/PicConvert](https://github.com/imcyx/PicConvert)

## 1. 安装依赖

该脚本除了python基础依赖库，需要安装 `requests` 和 `requests_toolbelt` 两个库：

```python
pip install requests
pip install requests_toolbelt
```

安装完成后即可正常使用脚本

## 2. 个人配置

在目录下的`configs.py`文件里，用户可以对自己的脚本进行配置，下面对配置进行解读：

### a. 配置默认使用图床

![配置默认使用图床](https://picx.zhimg.com/v2-dbaa44b516d8fc8934cb1239f57779d0.png)

在`configs.py`文件的第11行可以配置默认使用的图床网站，而使用的图床**必须从下面5种中选择**。可以设置一种或者多种，按表格样式配置即可。

这里推荐使用CSDN，因为目前实测不需要频繁更换cookie，可以比较稳定的使用。

### b. 配置登录cookie

因为使用的各服务提供商图床需要登录cookie，所以需要用户进入自己的浏览器抓包获得对应字段cookie后填入。

下面介绍各浏览器cookie的获取方法：

#### CSDN

登录自己的CSDN，然后进入个人中心 ([https://i.csdn.net/](https://i.csdn.net/))，打开浏览器的开发者工具（chrome 默认 `ctrl`+`alt`+`I`），找到`UserName`和`UserToken`，将对应的值复制。

![CSDN Cookie](https://pic1.zhimg.com/v2-10ea2f2f64f2fbbef8e61656dee9c1f6.png)

然后粘贴到第26行的 `csdn_cookies`内，即完成配置。

![CSDN Cookie](https://pic1.zhimg.com/v2-4a12554481a33bba2f3e3f421a7944b3.png)

#### 知乎

登录自己的知乎，然后进入主页 ([https://www.zhihu.com/](https://www.zhihu.com/))，打开浏览器的开发者工具，找到`z_c0`，将对应的值复制，然后填入33行对应的`zhihu_cookies`里即完成配置。

![知乎 Cookie](https://picx.zhimg.com/v2-c06388579ca46e0ea942d9292d580878.png)

知乎的图片默认支持3种，`src`, `watermark_src`, `original_src`，`watermark_src`是水印原图，`original_src`是原图，`src`是展示图，用户可以自己选择。

#### b站

登录自己的b站，然后进入主页 ([https://www.bilibili.com/](https://www.bilibili.com/))，打开浏览器的开发者工具，找到`SESSDATA`，将对应的值复制，然后填入41行对应的`bili_cookies`里即完成配置。

![Bilibili Cookie](https://pic1.zhimg.com/v2-73f566da43bf13b082b4cc569875bad8.png)

#### 简书

登录自己的简书，然后进入主页 ([https://www.jianshu.com/](https://www.jianshu.com/))，打开浏览器的开发者工具，找到`remember_user_token`和`_m7e_session_core`字段，将对应的值复制，然后填入47行对应的`jianshu_cookies`里即完成配置。

![简书 Cookie](https://pic1.zhimg.com/v2-ed43bbd15853b83cfe8b4c7ccd473424.png)

#### 博客园

登录自己的博客园，然后进入主页 ([https://www.cnblogs.com/](https://www.cnblogs.com/))，打开浏览器的开发者工具，找到`.Cnblogs.AspNetCore.Cookies`字段，将对应的值复制，然后填入53行对应的`bokeyuan_cookies`里即完成配置。

![博客园 Cookie](https://pica.zhimg.com/v2-2ec98121095723e0b63f0dce75441907.png)

## 3.  命令行调用

脚本的使用方法为：

````python
python convert.py
````

使用该命令后，默认读取当前脚本所处目录下的所有md文件，并逐个读取扫描图片链接或本地路径，按照配置里指定的转换方式，转换后再输出为{New_(mode)_(原始名)}。

![使用命令行](https://pica.zhimg.com/v2-d85a797b22394c79616e1645f70047a1.png)

如果需要指定转化的文件，使用命令：

````python
python convert.py -f new.md
````

而如果不适用默认的转换图床，需要额外指定转换图床，使用命令：

``````python
python convert.py -m csdn
``````

这两个参数可以同时指定，转换效果如下：

![指定参数](https://pic1.zhimg.com/v2-56e84953380c8dc11ee8a329c3bc1f5e.png)

