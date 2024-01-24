---
title: Linux使用gdown从Google Drive下载文件和文件夹（命令行/代码下载）
date: 2024-01-19 20:25:30
tags:
    - Linux
    - Note
categories: Note
cover: https://pic1.zhimg.com/80/v2-f550e1f03cb5099f8d1db289b74f56a1_720w.png
---

## 一、安装gdown

```bash
git clone https://github.com/wkentaro/gdown 
cd gdown
pip install gdown
```

## 二、获取Google Drive文件链接

1. 打开Google Drive
2. 右键点击要下载的文件/文件夹
3. 选择"获取链接"
4. 确保文件/文件夹的访问权限设置为"任何人均可访问"
5. 打开分享链接,复制地址栏中的文件ID,链接前缀都为`https://drive.google.com/uc?id=`，如`https://drive.google.com/uc?id=1l_5RK28JRL19wpT22B-DY9We3TVXnnQQ`
6. 复制链接

## 三、使用gdown下载

```bash
# 文件下载

gdown https://drive.google.com/uc?id=<文件ID>
# gdown https://drive.google.com/uc?id=1l_5RK28JRL19wpT22B-DY9We3TVXnnQQ
# gdown 1l_5RK28JRL19wpT22B-DY9We3TVXnnQQ

# 文件夹下载
gdown https://drive.google.com/drive/folders/15uNXeRBIhVvZJIhL4yTw4IsStMhUaaxl -O /tmp/folder --folder
```

除了命令行之外，我们也可以通过代码来进行下载

```python
## 文件下载
import gdown

url = 'https://drive.google.com/file/d/1uFTzwFc3tmS-D7azjMiJcxSfn71BPqKt/view?usp=sharing'
output_path = 'graph_ML.pk'
gdown.download(url, output_path, quiet=False,fuzzy=True)

# 文件夹下载
import gdown
url = "https://drive.google.com/drive/folders/1HWFHKCprFzR7H7TYhrE-W7v4bz2Vc7Ia"

gdown.download_folder(url, quiet=True, use_cookies=False)
```

> 除此之外，还有一些命令的使用，这里就不过多解释了
>
> ```bash
> gdown --help
> usage: gdown [-h] [-V] [-O OUTPUT] [-q] [--fuzzy] [--id] [--proxy PROXY]
>              [--speed SPEED] [--no-cookies] [--no-check-certificate]
>              [--continue] [--folder] [--remaining-ok]
>              url_or_id
> ```

## 四、问题解决

由于Google Drive文件大小限制,直接使用curl/wget下载可能会失败。

这时需要使用gdown来实现从Google Drive下载大文件。它可以解决由于文件太大导致的curl/wget下载失败问题。



**参考链接**

gdown项目地址: https://github.com/wkentaro/gdown
