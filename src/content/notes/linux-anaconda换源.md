---
title: "conda和pip换源"
description: "升级 pip 到最新的版本 =10.0.0 后进行配置："
date: 2023-12-31
updated: 2024-01-28
kind: linux
tags: ["Linux"]
cover: "https://pic1.zhimg.com/80/v2-9127c5054919631807bd1dbcc052c0b8_720w.png"
featured: false
oldPath: "/Linux/Anaconda换源/"
---

## pip换源

### 设为默认清华源

升级 pip 到最新的版本 (>=10.0.0) 后进行配置：

```bash
python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

如果您到 pip 默认源的网络连接较差，临时使用本镜像站来升级 pip：

```bash
python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
```

<https://blog.csdn.net/wyf2017/article/details/118676765>

### 修改配置

vim ~/.pip/pip.conf  
注意，这里设置的豆瓣源

```bash
[global]

index-url = https://pypi.doubanio.com/simple

trusted-host = pypi.doubanio.com
```

## conda换源

### 清华源

```bash
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/conda
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/conda
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/conda
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
conda config --set show_channel_urls yes
```

**提前说**：如果配置镜像源后报 HTTP 错误，只需要将源链接中的 https://… 中的 s 删掉就行 清华源

```python
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forgeconda config --set show_channel_urls yes
```

### 中科大源

```python
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/conda
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/conda 
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/conda 
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/conda 
conda config --set show_channel_urls yes
```

### 修改配置

我们还刻有直接修改配置  
vim ~/.condarc

```bash
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

### 换为默认源

```bash
conda config --remove-key channels
```
