---
title: VS Code Server 离线安装（解决超时，XHR Failed等问题）
date: 2023-12-13 13:56
tags: 
    - Linux
    - Note
    - Tool
categories: Note
cover: https://pic1.zhimg.com/70/v2-fb3a7f46e7256be3802ea6bd887543d2_1440w.jpg
---

在设置远程开发环境时,我们首先需要获取并安装 VS Code Server 程序。由于不同的服务器版本和环境,不一定会事先预装 VS Code Server,那么我们需要手动进行下载安装。有时候安裝等半天，有时候还报错，为了防止这样的情况，我还是记录一下解决方法，免得每次都需要找好多资料，但是找不到一个很有效的。

如果服务器是连接外网的，就根本不用有这个烦恼，因为下载很快，有时候主要是因为离线安装

这里我就介绍一种方法，我觉得最有效的方法，其他可能太麻烦而且不一定有效

具体操作如下:

首先,我们需要到 VS Code 的下载页面获取最新的版本号,记为 Commit ID。

![获取Commit ID](https://picx.zhimg.com/80/v2-2f652a6b456e4cef18c01ca60b83d8d1_720w.png?source=d16d100b)





> 除此之外，也可以直接在vscode左上角的帮助查看版本，如：

![查看对应的版本](https://pic1.zhimg.com/80/v2-43da35aeeb56fa0c8c3e9d4eeb39f7d5_720w.png?source=d16d100b)







访问此地址 **https://update.code.visualstudio.com/commit:${commit_id}/server-linux-x64/stable**，其中需要用实际的 Commit ID 替换 **${commit_id}** 变量字段。

比如我这里就是 https://vscode.download.prss.microsoft.com/dbazure/download/stable/af28b32d7e553898b2a91af498b1fb666fdebe0c/vscode-server-linux-x64.tar.gz

这个地址将会返回对应的 VS Code Server 程序压缩包 vscode-server-linux-x64.tar.gz。我们可以通过 wget 或其他方式下载该文件，比如这里就是

```bash
wget https://update.code.visualstudio.com/commit:af28b32d7e553898b2a91af498b1fb666fdebe0c/server-linux-x64/stable
```

下载完成后,需要解压并安装该程序。由于规范性考虑，我们通常将 VS Code 目录放在 ~/.vscode-server 下:

```bash
mkdir -p ~/.vscode-server/bin # 创建目录
rm -rf ~/.vscode-server/bin/* #清空原有文件
tar -zxf vscode-server-linux-x64.tar.gz # 解压程序包
mv vscode-server-linux-x64  ~/.vscode-server/bin/${commit_id} # 移动并重命名程序
```

最后一步就是把 `vscode-server-linux-x64.tar.gz` 解压，其中的内容全部放到`af28b32d7e553898b2a91af498b1fb666fdebe0c`文件夹下，并保持`af28b32d7e553898b2a91af498b1fb666fdebe0c`文件夹下只有`vscode-server-linux-x64.tar.gz`解压出来的文件。

![最后结果](https://pica.zhimg.com/80/v2-ea940b665332a810245ea0e4096a2362_720w.png?source=d16d100b)







完成上述步骤后,VS Code Server 就成功下载和安装了。

另外,为了在多个服务器之间同步设置和扩展,我们也可以将一个服务器的 ~/.vscode-server/extensions 目录直接复制过去,以实现快速配置，因为只要是同一个VScode，版本是一模一样的

参考链接：[离线在远程linux服务器配置vscode-python环境以及在容器中配置_没网的服务器vscode调试容器-](https://blog.csdn.net/m0_43609475/article/details/120905157)

 
