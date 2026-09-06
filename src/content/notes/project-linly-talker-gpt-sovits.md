---
title: "Linly-Talker × GPT-SoVITS"
description: "数字人的未来：数字人对话系统 Linly-Talker + 克隆语音 GPT-SoVITS"
date: 2024-01-19
updated: 2024-02-25
kind: project
tags: ["Talking Head Generation", "LLM"]
cover: "https://pic1.zhimg.com/80/v2-2ae8c11c1aae13ac400d5589124377b9_720w.png"
featured: false
oldPath: "/Project/Linly-Talker - GPT-SoVITS/"
---

# 数字人的未来：数字人对话系统 Linly-Talker + 克隆语音 GPT-SoVITS

<https://github.com/Kedreamix/Linly-Talker>

**2023.12 更新** 📆

**用户可以上传任意图片进行对话**

**2024.01 更新** 📆

- **令人兴奋的消息！我现在已经将强大的GeminiPro和Qwen大模型融入到我们的对话场景中。用户现在可以在对话中上传任何图片，为我们的互动增添了全新的层面。**
- **更新了FastAPI的部署调用方法。**
- **更新了微软TTS的高级设置选项，增加声音种类的多样性，以及加入视频字幕加强可视化。**
  - **更新了GPT多轮对话系统，使得对话有上下文联系，提高数字人的交互性和真实感。**

**2024.02 更新** 📆

- **更新了Gradio的版本为最新版本4.16.0，使得界面拥有更多的功能，比如可以摄像头拍摄图片构建数字人等。**
- **更新了ASR和THG，其中ASR加入了阿里的FunASR，具体更快的速度；THG部分加入了Wav2Lip模型，ER-NeRF在准备中(Comming Soon)。**
- **加入了语音克隆方法GPT-SoVITS模型，能够通过微调一分钟对应人的语料进行克隆，效果还是相当不错的，值得推荐。**
- **集成一个WebUI界面，能够更好的运行Linly-Talker。**

在最近一段时间，我在尝试探索，如何克隆声音，因为在数字人对话系统中，虽然可能能够重建特定的人，但是还是存在一个问题：声音是用固定的人声生成的，导致没有真实性，如果我们能够去克隆出对应的声音，并且结合特定的数字人，那是否就完成了一个数字人的完整复刻。

于是我就研究了一段时间，后面发现了两个非常有意思的项目，分别是`GPT-SoVITS`和`XTTS`两个开源项目，我认为这两个算是现在最好的两个开源项目了，像OpenVoice之类的效果还是比较差，火山效果不错，但是没有开源。

除此之外，我后续集成到了Linly-Talker之中，做了一个WebUI，能够通过我3~10s的语音大概克隆我的声音，同时也可以使用一分钟克隆训练的语音来操作，如果使用多一点的预料能够得到更好的效果，希望和大家一起努力，成功复刻出一个完整的数字人

具体也可以关注我B站的演示的视频[🚀数字人的未来：Linly-Talker+GPT-SoVIT语音克隆技术的赋能之道](https://www.bilibili.com/video/BV1S4421A7gh)和[Linly-Talker WebUI🚀: 在对话时悄悄偷走你的声音🎤](https://www.bilibili.com/video/BV1nu4m1K7qG)

## GPT-SoVITS（推荐）

感谢大家的开源贡献，我借鉴了当前开源的语音克隆模型 `GPT-SoVITS`，我认为效果是相当不错的，项目地址可参考<https://github.com/RVC-Boss/GPT-SoVITS>

他有以下功能：

1. **零样本文本到语音（TTS）：** 输入 5 秒的声音样本，即刻体验文本到语音转换。
2. **少样本 TTS：** 仅需 1 分钟的训练数据即可微调模型，提升声音相似度和真实感。
3. **跨语言支持：** 支持与训练数据集不同语言的推理，目前支持英语、日语和中文。
4. **WebUI 工具：** 集成工具包括声音伴奏分离、自动训练集分割、中文自动语音识别(ASR)和文本标注，协助初学者创建训练数据集和 GPT/SoVITS 模型。

之前很多方法都是少样本，比如`OpenVoice`和`XTTS`，我之前也想着使用他们来进行实现语音克隆部分，但是很遗憾的是，并没有感觉有很好的效果，其实`XTTS`还是不错的，如果我们简单用麦克风🎤说几句话作为参考来进行克隆，我觉得效果还是可以的。

但是如果遇到比较高的要求，我觉得可能就需要更好的模型，并且成本也要打压下来，所以我就看到了这个`GPT-SoVITS`，我觉得这个模型是相当厉害的，少样本的TTS能做，也能做跨语言支持，这样我们很有可能就可以体验到奥巴马讲中文之类的，这样就可以完成视频翻译的一些任务了，所以我是很推崇这样的简单微调，效果又好的方法的。

**为了尊重作者，在Linly-Talker并没有把`GPT-SoVITS`的全套代码搬过来，我写了一个关于语音克隆的类，大家可以将训练好的模型参数中，就可以在本项目使用经过语音克隆后的TTS了，希望大家玩的开心，玩的愉快。**

> 如果使用语音克隆模型，可能需要python为3.10，pytorch为2.1左右可能比较好，我的环境已经测试过了，简单来说，先安装GPT-SoVITS的环境，再直接pip intsall -r requirements_app.txt即可使用
>
> 除此之外，还需要根据原作者的说明放入对应路径，我的预训练模型和存放位置已给出，可参考<https://huggingface.co/Kedreamix/Linly-Talker>

```python
pip install torch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 --index-url https://download.pytorch.org/whl/cu118
# 安装对应的依赖
pip install -r VITS/requirements_gptsovits.txt

# 启动如下的WebUI界面
python VITS/app.py 
```

![](C:/Users/Kedreamix/Documents/GitHub/Linly-Talker/docs/GPT-SoVITS.png)

## Coqui XTTS

Coqui XTTS是一个领先的深度学习文本到语音任务（TTS语音生成模型）工具包，通过使用一段5秒钟以上的语音频剪辑就可以完成声音克隆*将语音克隆到不同的语言*。支持多种语言文本到语音转换，使其成为国际化应用的理想选择，这一特点特别适用于全球化的市场，其中需要生成多种语言的语音内容。所以在实验过程中，我也加入了这一部分，不过暂时使用的是默认的模型，并没有进行微调，个人认为是没有GPT-SoVITS经过微调后好的，但是其中的少样本五秒钟克隆语音还是值得称赞的。大家也可以在官方的在线体验，但是官方的可能会有生成语音限制，文字不能太长，但是还是足够我们体验了。

🐸TTS 是一个用于高级文本转语音生成的库。

🚀 超过 1100 种语言的预训练模型。

🛠️ 用于以任何语言训练新模型和微调现有模型的工具。

📚 用于数据集分析和管理的实用程序。

- 在线体验XTTS <https://huggingface.co/spaces/coqui/xtts>
- 官方Github库 <https://github.com/coqui-ai/TTS>

XTTS的环境也需要PyTorch 2.1所以，如果下载了GPT-SoVITS，也不妨体验一下XTTS的效果。

```bash
pip install torch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 --index-url https://download.pytorch.org/whl/cu118

# 安装对应的依赖
pip install -r VITS/requirements_xtts.txt

# 启动如下的WebUI界面
python VITS/XTTS.py
```

![](C:/Users/Kedreamix/Documents/GitHub/Linly-Talker/docs/XTTS.png)

## Linly-Talker WebUI

之前我将很多个版本都是分开来的，实际上运行多个会比较麻烦，所以后续我增加了变成WebUI一个界面即可体验，后续也会不断更新

现在已加入WebUI的功能如下

- [x] 文本/语音数字人对话（固定数字人，分男女角色）
- [x] 任意图片数字人对话（可上传任意数字人）
- [x] 多轮GPT对话（加入历史对话数据，链接上下文）
- [x] 语音克隆对话（基于GPT-SoVITS设置进行语音克隆，内置烟嗓音，可根据语音对话的声音进行克隆）

```bash
# WebUI
python webui.py
```

![](C:/Users/Kedreamix/Documents/GitHub/Linly-Talker/docs/WebUI.png)
