---
title: 简便快捷获取Hugging Face模型（使用镜像站点）
date: 2024-01-05 14:40
updated:
tags:
    - Note
categories: Note
cover: https://picx.zhimg.com/80/v2-71309ab12e2af7e147bae8eaadac1f48_720w.png
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
abcjs: 
---

通常，我们可以通过代码直接下载模型，但有时会遇到诸多问题，例如下载速度慢或其他一些问题。在这里，我将主要介绍一些常用的简便方法。如果你想了解更多用法，请查看这篇知乎文章：https://zhuanlan.zhihu.com/p/663712983， 其中包含许多多线程的方法。

[padeoe：如何快速下载huggingface模型](https://zhuanlan.zhihu.com/p/663712983)

![img](https://picx.zhimg.com/v2-9e8901ddec21dae36a31bb438dae03a8_r.jpg?source=172ae18b)

我的关注点主要是**断点续传和多线程下载**的方式，因为这样可以避免每次都重新下载，同时在网络不稳定时能够保持相对较好的下载速度。

### 浏览器下载

首先，最简单的方法是通过浏览器下载。找到相应的文件，一个一个地下载即可。然而，这样会耗费时间和精力。

![浏览器下载](https://picx.zhimg.com/80/v2-83aaadbd16b90a345f15a08954aa9e2e_720w.png?source=d16d100b)





浏览器下载

### 直接使用URL下载

使用URL直接下载时，将 huggingface.co 直接替换为域名 hf-mirror.com。可以使用浏览器，或者命令行工具如 wget -c、curl -L、aria2c 等。对于需要登录的模型，需在命令行中添加 --header hf_*** 参数，具体获取token的方法请参见前文。

Hugging Face提供的包会获取系统变量，因此可以通过设置变量来解决：

```bash
HF_ENDPOINT=https://hf-mirror.com python your_script.py
```

### Git克隆下载

此外，还有一种通过 git clone repo_url 下载的方式由官方提供。尽管这种方法相对简单，但却被认为是**最不建议直接采用的途径**，主要有以下三个弊端：

1. 不支持断点续传，一旦中断，需要重新启动整个下载过程。
2. 占用大量磁盘空间,即使没有历史版本,也会存储一份元信息和当前版本文件拷贝;
3. 对于一些存在历史版本的模型，**下载时间会超过两倍**。

一个较好的方法是设置环境变量GIT_LFS_SKIP_SMUDGE=1开启git clone,之后单独使用其他支持断点续传的工具下载大文件。这种方式可以很好地兼顾断点续传和磁盘空间占用。

![Git下载](https://picx.zhimg.com/80/v2-3e4aaa6d94bd5dd6b7cea0f745e581f8_720w.png?source=d16d100b)







### Hugging Face CLI命令行工具

Hugging Face官方提供的 [**huggingface-cli** ](https://zhuanlan.zhihu.com/p/676222159///hf-mirror.com/docs/huggingface_hub/guides/download#download-from-the-cli) **命令行工具功能很强大,极力推荐使用。它支持下载模型、数据集,登录注册,且长期持续更新维护。**

使用镜像网站可以加快速度。基本操作如下:安装依赖、设置环境变量、执行下载、处理需要登录的模型等情况。此外,可以尝试使用hf_transfer进行加速。

1. 安装依赖

```bash
pip install -U huggingface_hub
```

2. 基本命令示例：

这里使用了镜像网站[https://hf-mirror.com](https://hf-mirror.com/)，会加快速度一点，**hf-mirror.com**，用于镜像 [huggingface.co](https://huggingface.co/) 域名。

```bash
export HF_ENDPOINT=https://hf-mirror.com
# 下载模型
huggingface-cli download --resume-download --local-dir-use-symlinks False bigscience/bloom-560m --local-dir bloom-560m
# 下载数据集
huggingface-cli download --resume-download --repo-type dataset lavita/medical-qa-shared-task-v1-toy
```

3. 下载需要登录的模型（Gated Model）

请添加 --token hf_*** 参数，其中 hf_*** 是 *access token*，请在 [Hugging Face官网这里](https://huggingface.co/settings/tokens) 获取。示例：

```bash
huggingface-cli download --token hf_*** --resume-download --local-dir-use-symlinks False meta-llama/Llama-2-7b-hf --local-dir Llama-2-7b-hf
```

### hf_transfer加速

hf_transfer 依附并兼容 huggingface-cli，是 hugging face 官方专门为提高下载速度基于 Rust 开发的一个模块。

**开启方法**

1. 安装依赖

```bash
pip install -U hf-transfer
```

2. 设置 HF_HUB_ENABLE_HF_TRANSFER 环境变量为 1。

```bash
export HF_HUB_ENABLE_HF_TRANSFER=1
```

3. 开启后使用方法同 huggingface-cli：

```bash
huggingface-cli download --resume-download bigscience/bloom-560m --local-dir bloom-560m
```

以前hf_transfer没有进度条,需要根据是否有进度条判断是否成功开启。但从0.19版本开始已支持进度条,开启更为便捷。

不过,hf_transfer的鲁棒性较低,在网络不稳定时可能会报错。这是因为它还在完善过程中,对国内较差的网络状况支持不够好。如果出现错误,可以尝试关闭该模块以提高程序的容错性。

总体来说,hf_transfer能有效提速,但在网络不稳定时可能会出现问题。基于自身网络环境调整是否使用它是个不错的选择。

### 总结

总体来说，选择下载模型的方式取决于个人需求和网络环境。浏览器下载简单直接，但耗时耗力；Git克隆方式虽简单，但不支持断点续传且占用磁盘空间较大；Hugging Face CLI命令行工具功能强大，推荐使用，尤其搭配 hf_transfer 进行加速，但在网络不稳定时可能会遇到问题。根据实际情况，选择合适的方式可以更高效地获取所需模型。
