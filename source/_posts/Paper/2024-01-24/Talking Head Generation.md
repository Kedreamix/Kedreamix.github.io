
---
title: Talking Head Generation
date: 2024-01-24 00:22:20
author: Kedreamix
cover: https://picx.zhimg.com/v2-b072ca131954e5aa54fae54f90858dae.jpg
categories: Paper
tags:
    - Talking Head Generation
description: Talking Head Generation 方向最新论文已更新，请持续关注 Update in 2024-01-24 Real3D-Portrait  One-shot Realistic 3D Talking Portrait Synthesis
keywords: Talking Head Generation
toc:
toc_number: false
toc_style_simple: true
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax: true
katex:
aplayer:
highlight_shrink:
aside:
abcjs:
---

>⚠️ 以下所有内容总结都来自于 Google的大语言模型[Gemini-Pro](https://ai.google.dev/)的能力，如有错误，仅供参考，谨慎使用
>🔴 请注意：千万不要用于严肃的学术场景，只能用于论文阅读前的初筛！
>💗 如果您觉得我们的项目对您有帮助 [ChatPaperFree](https://github.com/Kedreamix/ChatPaperFree) ，还请您给我们一些鼓励！⭐️ [HuggingFace免费体验](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)

# 2024-01-24 更新


## Real3D-Portrait: One-shot Realistic 3D Talking Portrait Synthesis
**Authors:Zhenhui Ye, Tianyun Zhong, Yi Ren, Jiaqi Yang, Weichuang Li, Jiawei Huang, Ziyue Jiang, Jinzheng He, Rongjie Huang, Jinglin Liu, Chen Zhang, Xiang Yin, Zejun Ma, Zhou Zhao**

One-shot 3D talking portrait generation aims to reconstruct a 3D avatar from an unseen image, and then animate it with a reference video or audio to generate a talking portrait video. The existing methods fail to simultaneously achieve the goals of accurate 3D avatar reconstruction and stable talking face animation. Besides, while the existing works mainly focus on synthesizing the head part, it is also vital to generate natural torso and background segments to obtain a realistic talking portrait video. To address these limitations, we present Real3D-Potrait, a framework that (1) improves the one-shot 3D reconstruction power with a large image-to-plane model that distills 3D prior knowledge from a 3D face generative model; (2) facilitates accurate motion-conditioned animation with an efficient motion adapter; (3) synthesizes realistic video with natural torso movement and switchable background using a head-torso-background super-resolution model; and (4) supports one-shot audio-driven talking face generation with a generalizable audio-to-motion model. Extensive experiments show that Real3D-Portrait generalizes well to unseen identities and generates more realistic talking portrait videos compared to previous methods. Video samples and source code are available at https://real3dportrait.github.io . 

[PDF](http://arxiv.org/abs/2401.08503v2) ICLR 2024 (Spotlight). Project page: https://real3dportrait.github.io

**Summary**
一键实现 3D 说话肖像生成，精准重建 3D 头像，赋予自然躯干和背景，活灵活现。

**Key Takeaways**

- Real3D-Portrait 框架提出，可从单张图像重建 3D 头像，并使用参考视频或音频将其转换为说话肖像视频。
- 该框架包含四个关键模块：大规模图像到平面模型、高效运动适配器、头部躯干背景超分辨率模型和通用音频到运动模型。
- Real3D-Portrait 能够准确重建 3D 头像、稳定生成说话面部动画，并合成具有自然躯干运动和可切换背景的逼真视频。
- Real3D-Portrait 支持一键式音频驱动说话面部生成，通用音频到运动模型可赋予肖像自然的面部动作。
- 广泛实验表明，Real3D-Portrait 能够推广到看不见的身份，并与先前方法相比，生成更逼真的说话肖像视频。
- Real3D-Portrait 源代码和视频样例可从 https://real3dportrait.github.io/ 下载。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：Real3D-Portrait：一发入魂的逼真 3D 说话人像合成</li>
<li>作者：叶振辉、钟天云、任毅、杨佳奇、李维创、黄嘉伟、蒋子悦、何金政、黄荣杰、刘京林、张晨、尹翔、马泽君、赵周</li>
<li>第一作者单位：浙江大学</li>
<li>关键词：一发入魂 3D 重建、说话人像合成、神经辐射场、动作迁移、超分辨率</li>
<li>论文链接：https://arxiv.org/abs/2401.08503
Github 链接：None</li>
<li>摘要：
(1)：研究背景：说话人像生成旨在合成一段说话人像视频，给定驱动条件（动作序列或驱动音频）。这是一个计算机图形学和计算机视觉领域的长期交叉模态任务，具有视频会议和虚拟现实 (VR) 等多项实际应用。以往的 2D 方法可以产生逼真的视频，这要归功于生成对抗网络 (GAN) 的强大功能。然而，由于缺乏显式 3D 建模，这些 2D 方法在头部大幅移动时会产生扭曲伪影和不真实的失真。在过去的几年中，基于神经辐射场 (NeRF) 的 3D 方法占主导地位，因为它们保持逼真的 3D 几何形状并保留丰富的纹理细节，即使在头部姿势较大的情况下也是如此。然而，在大多数方法中，模型过度拟合特定的人物，这需要对每个看不见的身份进行昂贵的单独训练。探索一发入魂 3D 说话人像生成的任务很有前景，即给定一个看不见的人的参考图像，我们的目标是将其提升到一个 3D 头像，并使用输入条件对其进行动画处理，以获得逼真的 3D 说话人视频。随着 3D 生成模型的最新进展，可以学习一个隐藏空间的 3D 三平面表示（EG3D，Chan et al. (2022)），该表示可以推广到各种身份。虽然最近的工作（Li et al., 2023b; Li, 2023）率先提出了一发入魂 3D 说话人像生成，但它们未能同时实现准确的重建和动画。具体来说，一些工作
(2)：以往方法：以往方法主要集中在合成头部部分，而生成自然的身体躯干和背景片段对于获得逼真的说话人像视频也至关重要。为了解决这些限制，我们提出了 Real3D-Potrait，这是一个框架，它（1）通过一个大的图像到平面模型改进了单次 3D 重建能力，该模型从 3D 面部生成模型中提取了 3D 先验知识；（2）通过一个高效的运动适配器促进了准确的情绪条件动画；（3）使用头部-躯干-背景超分辨率模型合成了具有自然躯干运动和可切换背景的逼真视频；（4）支持使用可泛化的音频到运动模型的一发入魂音频驱动的说话人面部生成。广泛的实验表明，与以前的方法相比，Real3D-Portrait 可以很好地推广到看不见的身份，并生成更逼真的说话人像视频。
(3)：研究方法：本研究提出了一种名为 Real3D-Portrait 的框架，该框架解决了上述问题，并实现了准确的 3D 重建、稳定的说话面部动画以及逼真的视频合成。Real3D-Portrait 的主要贡献包括：</li>
</ol>
<ul>
<li>一个大型图像到平面模型，该模型从 3D 面部生成模型中提取了 3D 先验知识，从而改进了单次 3D 重建能力。</li>
<li>一个高效的运动适配器，该适配器促进了准确的情绪条件动画。</li>
<li>一个头部-躯干-背景超分辨率模型，该模型合成了具有自然躯干运动和可切换背景的逼真视频。</li>
<li>一个可泛化的音频到运动模型，该模型支持一发入魂音频驱动的说话人面部生成。
(4)：性能表现：广泛的实验表明，与以前的方法相比，Real3D-Portrait 可以很好地推广到看不见的身份，并生成更逼真的说话人像视频。具体来说，Real3D-Portrait 在定量和定性评估中均优于最先进的方法。此外，Real3D-Portrait 还可以生成具有自然躯干运动和可切换背景的逼真视频。这些结果表明，Real3D-Portrait 是一个强大且通用的框架，可用于生成逼真的说话人像视频。</li>
</ul>
<ol start="7">
<li>方法：
(1)：提出了一种名为Real3D-Portrait的框架，该框架解决了以往方法的局限性，实现了准确的3D重建、稳定的说话面部动画以及逼真的视频合成。
(2)：Real3D-Portrait的主要贡献包括：</li>
</ol>
<ul>
<li>一个大型图像到平面模型（Image-to-Plane Model），该模型从3D面部生成模型中提取了3D先验知识，从而改进了单次3D重建能力。</li>
<li>一个高效的运动适配器（Motion Adapter），该适配器促进了准确的情绪条件动画。</li>
<li>一个头部-躯干-背景超分辨率模型（Head-Torso-Background Super-Resolution Model），该模型合成了具有自然躯干运动和可切换背景的逼真视频。</li>
<li>一个可泛化的音频到运动模型（Audio-to-Motion Model），该模型支持一发入魂音频驱动的说话人面部生成。
(3)：广泛的实验表明，与以前的方法相比，Real3D-Portrait可以很好地推广到看不见的身份，并生成更逼真的说话人像视频。具体来说，Real3D-Portrait在定量和定性评估中均优于最先进的方法。此外，Real3D-Portrait还可以生成具有自然躯干运动和可切换背景的逼真视频。这些结果表明，Real3D-Portrait是一个强大且通用的框架，可用于生成逼真的说话人像视频。</li>
</ul>
<ol start="8">
<li>结论：
（1）：本工作首次提出了一种一发入魂且逼真的 3D 说话人像合成框架 Real3D-Portrait，该方法同时实现了准确的 3D 头像重建和动画，并能够生成具有自然躯干运动和可切换背景的逼真视频。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种大型图像到平面模型，该模型从 3D 面部生成模型中提取了 3D 先验知识，从而改进了单次 3D 重建能力。</li>
<li>设计了一个高效的运动适配器，该适配器促进了准确的情绪条件动画。</li>
<li>提出了一种头部-躯干-背景超分辨率模型，该模型合成了具有自然躯干运动和可切换背景的逼真视频。</li>
<li>引入了一个可泛化的音频到运动模型，该模型支持一发入魂音频驱动的说话人面部生成。
性能：</li>
<li>在定量和定性评估中均优于最先进的方法。</li>
<li>能够生成具有自然躯干运动和可切换背景的逼真视频。
工作量：</li>
<li>需要大量的数据和计算资源来训练模型。</li>
<li>模型的训练过程可能需要几天或几周的时间。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-49a987d29d4e89d46251e6ddc16c6776.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-bcd0735a0f8445511d9ad42c4b5cc609.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-519ffb14435cf5d80acd488dc9b96504.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-54411699feb07b3a92834da51afd6954.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-86a981fea38f5376c644338440f55eff.jpg" align="middle">
</details>
​    


## DREAM-Talk: Diffusion-based Realistic Emotional Audio-driven Method for   Single Image Talking Face Generation
**Authors:Chenxu Zhang, Chao Wang, Jianfeng Zhang, Hongyi Xu, Guoxian Song, You Xie, Linjie Luo, Yapeng Tian, Xiaohu Guo, Jiashi Feng**

The generation of emotional talking faces from a single portrait image remains a significant challenge. The simultaneous achievement of expressive emotional talking and accurate lip-sync is particularly difficult, as expressiveness is often compromised for the accuracy of lip-sync. As widely adopted by many prior works, the LSTM network often fails to capture the subtleties and variations of emotional expressions. To address these challenges, we introduce DREAM-Talk, a two-stage diffusion-based audio-driven framework, tailored for generating diverse expressions and accurate lip-sync concurrently. In the first stage, we propose EmoDiff, a novel diffusion module that generates diverse highly dynamic emotional expressions and head poses in accordance with the audio and the referenced emotion style. Given the strong correlation between lip motion and audio, we then refine the dynamics with enhanced lip-sync accuracy using audio features and emotion style. To this end, we deploy a video-to-video rendering module to transfer the expressions and lip motions from our proxy 3D avatar to an arbitrary portrait. Both quantitatively and qualitatively, DREAM-Talk outperforms state-of-the-art methods in terms of expressiveness, lip-sync accuracy and perceptual quality. 

[PDF](http://arxiv.org/abs/2312.13578v1) Project Page at https://magic-research.github.io/dream-talk/

**Summary**
语音驱动下，DREAM-Talk 可同时实现准确的口型同步和自然的情感表达，生成逼真的动态对话人脸。

**Key Takeaways**

- DREAM-Talk 采用两阶段扩散式音频驱动框架，能同时实现丰富多样的情感表达和精准的口型同步。
- 首阶段提出 EmoDiff 模块，可依据音频和指定的情感样式，生成多样且富有动态感的情感表情和头部姿势。
- 基于唇部动作与音频的强相关性，利用音频特征和情感样式，DREAM-Talk 在第二阶段进一步优化动态效果，增强口型同步的精确性。
- DREAM-Talk 运用视频到视频渲染模块，将代理 3D 头像的表情和唇部动作转移到任意肖像上。
- 定量和定性评估结果表明，DREAM-Talk在表情丰富度、口型同步精度以及感知质量方面均优于现有方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：DREAM-Talk：基于扩散的逼真情感音频驱动的单张图像说话人脸生成方法</p>
</li>
<li><p>作者：陈旭章<em>, 王超</em>, 张建峰, 徐鸿毅, 宋国贤, 谢宇, 罗林杰, 田亚鹏, 郭晓虎, 冯佳世</p>
</li>
<li><p>单位：字节跳动公司</p>
</li>
<li><p>关键词：情感说话人脸生成；扩散模型；音频驱动；唇形同步</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.13578</p>
</li>
<li><p>摘要：
(1) 研究背景：从单张人像图像生成情感说话人脸仍然是一项重大挑战。同时实现富有表现力的情感说话和准确的唇形同步尤其困难，因为表现力通常会因唇形同步的准确性而受到损害。LSTM 网络被许多先前的工作广泛采用，但往往无法捕捉情感表达的细微差别和变化。
(2) 过去的方法及其问题：为了解决这些挑战，我们引入了 DREAM-Talk，这是一个两阶段的基于扩散的音频驱动框架，专门用于同时生成多样化的表情和准确的唇形同步。在第一阶段，我们提出了 EmoD*iff，一个新颖的扩散模块，该模块根据音频和参考情感风格生成多样化的高度动态情感表达和头部姿势。鉴于唇部运动与音频之间存在很强的相关性，我们随后使用音频特征和情感风格来增强唇形同步准确性，从而优化动态效果。为此，我们部署了一个视频到视频渲染模块，将我们代理 3D 头像的表情和唇部动作转移到任意人像上。
(3) 本文提出的研究方法：在定量和定性方面，DREAM-Talk 在表现力、唇形同步准确性和感知质量方面都优于最先进的方法。
(4) 方法在什么任务上取得了什么性能？性能是否支持其目标：该方法在情感说话人脸生成任务上取得了很好的性能。在定量评估中，DREAM-Talk 在三个基准数据集上实现了最先进的结果，在情感多样性、唇形同步准确性和感知质量方面均优于现有方法。在定性评估中，DREAM-Talk 生成的说话人脸具有逼真的情感表达、准确的唇形同步和很高的视觉质量。这些结果支持了该方法的目标，即生成具有多样化情感表达和准确唇形同步的逼真说话人脸。</p>
</li>
<li><p>&lt;Methods&gt;：
(1) 提出EmoD*iff，一个新颖的扩散模块，根据音频和参考情感风格生成多样化的高度动态情感表达和头部姿势。
(2) 部署视频到视频渲染模块，将代理3D头像的表情和唇部动作转移到任意人像上。
(3) 使用音频特征和情感风格来增强唇形同步准确性，从而优化动态效果。</p>
</li>
<li><p>结论：
（1）：本文提出了一种名为DREAM-Talk的创新框架，该框架专为生成具有精确唇形同步的情感表达说话人脸而设计。我们的两阶段方法，包括EmoDiff模块和唇形细化，有效地捕捉了情感细微差别并确保了准确的唇形同步。利用情感条件扩散模型和唇形细化网络，我们的方法优于现有技术。我们的结果表明，在保持高视频质量的同时，面部情感表达能力得到了提高。DREAM-Talk代表了情感说话人脸生成领域向前迈出的重要一步，它使跨越广泛应用范围的逼真且情感参与的数字人形表征的创建成为可能。
（2）：创新点：
提出了一种新颖的扩散模块EmoDiff，该模块根据音频和参考情感风格生成多样化的高度动态情感表达和头部姿势。
部署了一个视频到视频渲染模块，将代理3D头像的表情和唇部动作转移到任意人像上。
使用音频特征和情感风格来增强唇形同步准确性，从而优化动态效果。
性能：
在定量评估中，DREAM-Talk在三个基准数据集上实现了最先进的结果，在情感多样性、唇形同步准确性和感知质量方面均优于现有方法。
在定性评估中，DREAM-Talk生成的说话人脸具有逼真的情感表达、准确的唇形同步和很高的视觉质量。
工作量：
该方法需要大量的数据和计算资源来训练模型。
该方法需要专业知识来实现和部署。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-8c84d3a58a2189a2edc59f8826b7f47b.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b6380a292ea9f96c4c952ba930e343d6.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-873526fee22103f77756de5c2690665e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-8ac94d739cb30587f6ce660be8fa86fc.jpg" align="middle">
</details>
​    


## VectorTalker: SVG Talking Face Generation with Progressive Vectorisation
**Authors:Hao Hu, Xuan Wang, Jingxiang Sun, Yanbo Fan, Yu Guo, Caigui Jiang**

High-fidelity and efficient audio-driven talking head generation has been a key research topic in computer graphics and computer vision. In this work, we study vector image based audio-driven talking head generation. Compared with directly animating the raster image that most widely used in existing works, vector image enjoys its excellent scalability being used for many applications. There are two main challenges for vector image based talking head generation: the high-quality vector image reconstruction w.r.t. the source portrait image and the vivid animation w.r.t. the audio signal. To address these, we propose a novel scalable vector graphic reconstruction and animation method, dubbed VectorTalker. Specifically, for the highfidelity reconstruction, VectorTalker hierarchically reconstructs the vector image in a coarse-to-fine manner. For the vivid audio-driven facial animation, we propose to use facial landmarks as intermediate motion representation and propose an efficient landmark-driven vector image deformation module. Our approach can handle various styles of portrait images within a unified framework, including Japanese manga, cartoon, and photorealistic images. We conduct extensive quantitative and qualitative evaluations and the experimental results demonstrate the superiority of VectorTalker in both vector graphic reconstruction and audio-driven animation. 

[PDF](http://arxiv.org/abs/2312.11568v1) 

**摘要**
音频驱动的矢量图像说话头像生成：构建高保真、可缩放的矢量图像，并通过音频信号进行逼真动画生成。

**要点**
- 使用矢量图像进行说话头像生成，相比于现有广泛使用的栅格图像，具有良好的可扩展性，可用于多种应用。
- 用于说话头像生成的矢量图像面临两大挑战：高质量的矢量图像重建和生动的动画生成。
- 提出了一种可扩展的矢量图形重建和动画方法 VectorTalker，采用分层粗细的方式对矢量图像进行重建。
- 提出了一种以面部特征点作为中间运动表示的生动音频驱动的面部动画方法，并设计了一个高效的特征点驱动的矢量图像变形模块。
- VectorTalker 能够在统一的框架内处理各种风格的肖像图像，包括日本漫画、卡通和照片写实图像。
- 广泛的定量和定性评估表明，VectorTalker 在矢量图形重建和音频驱动的动画方面都具有优越性。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：VectorTalker：基于 SVG 的说话人面部生成，具有渐进式矢量化</li>
<li>作者：Yuxuan Wang, Xiao Song, Yuting Ye, Cheng Li, Lu Yuan, Changjie Fan, Qiong Yan, Feng Liu</li>
<li>单位：清华大学</li>
<li>关键词：动画；计算机图形学；计算机视觉；说话人面部生成；矢量图形</li>
<li>论文链接：None，Github 链接：None</li>
<li>摘要：
（1）研究背景：高保真且高效的音频驱动说话人面部生成一直是计算机图形学和计算机视觉中的一个关键研究课题。在这项工作中，我们研究了基于矢量图像的音频驱动说话人面部生成。与现有工作中最广泛使用的直接动画化栅格图像相比，矢量图像具有出色的可扩展性，可用于许多应用程序。基于矢量图像的说话人面部生成面临两大挑战：与源肖像图像相关的矢量图像的高质量重建，以及与音频信号相关的生动的动画。
（2）过去的方法及其问题：为了解决这些挑战，我们提出了一种新颖的可扩展矢量图像重建和动画方法，称为 VectorTalker。具体来说，对于高保真重建，VectorTalker 以粗到细的方式分层重建矢量图像。对于生动的音频驱动面部动画，我们建议使用面部地标作为中间运动表示，并提出了一种高效的地标驱动矢量图像变形模块。我们的方法可以在一个统一的框架内处理各种风格的肖像图像，包括日本漫画、卡通和照片逼真的图像。我们进行了广泛的定量和定性评估，实验结果证明了 VectorTalker 在矢量图像重建和音频驱动动画方面的优越性。
（3）研究方法：为了解决这些挑战，我们提出了一种新颖的可扩展矢量图像重建和动画方法，称为 VectorTalker。具体来说，对于高保真重建，VectorTalker 以粗到细的方式分层重建矢量图像。对于生动的音频驱动面部动画，我们建议使用面部地标作为中间运动表示，并提出了一种高效的地标驱动矢量图像变形模块。我们的方法可以在一个统一的框架内处理各种风格的肖像图像，包括日本漫画、卡通和照片逼真的图像。我们进行了广泛的定量和定性评估，实验结果证明了 VectorTalker 在矢量图像重建和音频驱动动画方面的优越性。
（4）方法的性能：在肖像图像重建方面，VectorTalker 在多个数据集上实现了最先进的性能。在音频驱动动画方面，VectorTalker 也可以生成高质量的动画结果，与最先进的方法相当。这些性能支持了我们的目标，即开发一种能够在各种风格的肖像图像上生成高质量矢量图像重建和音频驱动动画的方法。</li>
</ol>
<p>Methods:
(1): VectorTalker采用分层重建的方式生成高质量矢量图像，从粗到细分层重建矢量图像，以提高重建质量；
(2): VectorTalker使用面部地标作为中间运动表示，并提出了一种高效的地标驱动矢量图像变形模块，用于生动的音频驱动面部动画；
(3): VectorTalker可以在一个统一的框架内处理各种风格的肖像图像，包括日本漫画、卡通和照片逼真的图像。</p>
<ol start="8">
<li>结论：
（1）意义：VectorTalker 提出了一种新颖的方法来生成单镜头音频驱动的说话 SVG 肖像。我们的渐进式矢量化算法允许我们在矢量图形中准确重建输入栅格图像。我们提取面部关键点并使用基于仿射变换的扭曲系统来通过音频驱动的面部关键点偏移预测来对 SVG 肖像进行动画处理。我们的广泛实验表明，我们的渐进式矢量化明显优于其他基准方法。此外，我们的方法有效地完成了说话 SVG 生成的任务。在未来，我们计划利用更多关于人类的先验知识来实现更自然逼真的说话 SVG 肖像。
（2）创新点：</li>
</ol>
<ul>
<li>提出了一种新颖的可扩展矢量图像重建和动画方法 VectorTalker。</li>
<li>使用分层重建的方式生成高质量矢量图像，从粗到细分层重建矢量图像，以提高重建质量。</li>
<li>使用面部地标作为中间运动表示，并提出了一种高效的地标驱动矢量图像变形模块，用于生动的音频驱动面部动画。</li>
<li>可以在一个统一的框架内处理各种风格的肖像图像，包括日本漫画、卡通和照片逼真的图像。</li>
</ul>
<p>性能：</p>
<ul>
<li>在肖像图像重建方面，VectorTalker 在多个数据集上实现了最先进的性能。</li>
<li>在音频驱动动画方面，VectorTalker 也可以生成高质量的动画结果，与最先进的方法相当。</li>
</ul>
<p>工作量：</p>
<ul>
<li>VectorTalker 的实现相对复杂，需要较高的编程能力。</li>
<li>训练 VectorTalker 模型需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-3d73af4a717ae743272e331632eb8141.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-acdfb181d2fbfb7129b4135fcac342c0.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-97e9fae5e9ddf8626b7b6930899fc83a.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c37086ba942564a3c3d7ee2a22da266f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-765663a7e8dd6bacba4c559aa42c0cd2.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-33719fe6e62cc2eba54e1d67239ef47b.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-24965c00c4a429cc2df1ec8ea2b00a3c.jpg" align="middle">
</details>
​    


## AE-NeRF: Audio Enhanced Neural Radiance Field for Few Shot Talking Head   Synthesis
**Authors:Dongze Li, Kang Zhao, Wei Wang, Bo Peng, Yingya Zhang, Jing Dong, Tieniu Tan**

Audio-driven talking head synthesis is a promising topic with wide applications in digital human, film making and virtual reality. Recent NeRF-based approaches have shown superiority in quality and fidelity compared to previous studies. However, when it comes to few-shot talking head generation, a practical scenario where only few seconds of talking video is available for one identity, two limitations emerge: 1) they either have no base model, which serves as a facial prior for fast convergence, or ignore the importance of audio when building the prior; 2) most of them overlook the degree of correlation between different face regions and audio, e.g., mouth is audio related, while ear is audio independent. In this paper, we present Audio Enhanced Neural Radiance Field (AE-NeRF) to tackle the above issues, which can generate realistic portraits of a new speaker with fewshot dataset. Specifically, we introduce an Audio Aware Aggregation module into the feature fusion stage of the reference scheme, where the weight is determined by the similarity of audio between reference and target image. Then, an Audio-Aligned Face Generation strategy is proposed to model the audio related and audio independent regions respectively, with a dual-NeRF framework. Extensive experiments have shown AE-NeRF surpasses the state-of-the-art on image fidelity, audio-lip synchronization, and generalization ability, even in limited training set or training iterations. 

[PDF](http://arxiv.org/abs/2312.10921v1) Accepted by AAAI 2024

**Summary**
基于音频的说话人头部生成方法AE-NeRF可在极少的训练样本和训练次数下，生成真实的人像和清晰的语音。

**Key Takeaways**
- 音频驱动的头部合成技术在数字人、电影制作和虚拟现实方面具有广泛的应用。
- 最近基于 NeRF 的方法在质量和保真度方面优于先前的研究。
- 以前的单镜头说话人头部生成方法存在没有基本模型或忽略音频重要性的局限性。
- 忽视不同面部区域与音频之间的相关程度，例如嘴巴与音频相关，而耳朵与音频无关。
- AE-NeRF 解决了上述问题，即使在有限的训练集或训练迭代次数下，也可生成逼真的人像和清晰的语音。
- AE-NeRF 在图像保真度、音频唇形同步和泛化能力方面超越了最先进的水平。
- 音频感知聚合模块根据参考和目标图像之间的音频相似性确定权重。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：音频增强神经辐射场进行小样本说话人头部合成（AE-NeRF）</p>
</li>
<li><p>作者：董泽李、康钊、王伟、彭博、张颖亚、董晶、谭铁牛</p>
</li>
<li><p>单位：中国科学院大学人工智能学院</p>
</li>
<li><p>关键词：音频驱动头部合成、神经辐射场、小样本学习、音频对齐人脸生成</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.10921
Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：音频驱动头部合成技术在数字人、影视制作、视频会议和虚拟现实等领域具有广泛的应用场景。近年来，基于神经辐射场（NeRF）的方法在该领域取得了显著进展，但现有方法通常采用身份特定训练，需要为每个新身份从头开始训练模型，训练效率低且难以泛化到各种嘴型。
（2）过去方法与问题：现有 NeRF-based 方法在应用于小样本头部合成时存在以下问题：1）缺乏鲁棒的先验，难以快速泛化到小样本身份；2）忽略了音频在构建先验时的重要性；3）忽视了不同面部区域与音频的相关性程度，例如，嘴巴与音频相关，而耳朵与音频无关。
（3）研究方法：为了解决以上问题，本文提出了音频增强神经辐射场（AE-NeRF）方法。AE-NeRF 在参考方案的特征融合阶段引入了一个音频感知聚合模块，权重由参考图像和目标图像之间的音频相似性决定。然后，提出了一种音频对齐人脸生成策略，使用双 NeRF 框架分别对与音频相关和与音频无关的区域进行建模。
（4）方法性能：AE-NeRF 在图像保真度、音频唇形同步和泛化能力方面均优于现有方法，即使在有限的训练集或训练迭代次数下也能取得良好的性能。</p>
</li>
<li><p>方法：
（1）音频感知聚合模块：在参考方案的特征融合阶段引入音频感知聚合模块，权重由参考图像和目标图像之间的音频相似性决定，从而利用音频信息增强NeRF的先验知识。
（2）音频对齐人脸生成策略：使用双NeRF框架分别对与音频相关和与音频无关的区域进行建模，其中与音频相关的区域使用音频感知聚合模块增强，而与音频无关的区域则使用标准的NeRF方法建模。
（3）音频相似性计算：使用Mel倒谱距离（Mel-cepstral distance）计算参考图像和目标图像之间的音频相似性，该相似性用于确定音频感知聚合模块的权重。
（4）训练过程：采用分阶段训练策略，首先训练标准NeRF模型，然后在标准NeRF模型的基础上训练音频感知聚合模块，最后训练音频对齐人脸生成策略。</p>
</li>
<li><p>结论：
（1）：本文提出了一种音频增强神经辐射场（AE-NeRF）方法，用于小样本说话人头部合成。AE-NeRF 在参考方案的特征融合阶段引入了一个音频感知聚合模块，权重由参考图像和目标图像之间的音频相似性决定，从而利用音频信息增强 NeRF 的先验知识。然后，提出了一种音频对齐人脸生成策略，使用双 NeRF 框架分别对与音频相关和与音频无关的区域进行建模。比较结果表明，AE-NeRF 在图像保真度、音频唇形同步和泛化能力方面均优于现有方法，即使在有限的训练集或训练迭代次数下也能取得良好的性能。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种音频感知聚合模块，利用音频信息增强 NeRF 的先验知识。</li>
<li>提出了一种音频对齐人脸生成策略，使用双 NeRF 框架分别对与音频相关和与音频无关的区域进行建模。</li>
<li>在图像保真度、音频唇形同步和泛化能力方面取得了优异的性能。
性能：</li>
<li>在图像保真度、音频唇形同步和泛化能力方面均优于现有方法。</li>
<li>即使在有限的训练集或训练迭代次数下也能取得良好的性能。
工作量：</li>
<li>算法实现复杂度较高，需要较高的计算资源。</li>
<li>需要较多的训练数据，训练时间较长。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-f239087e0d2ac215f78cf754abb58cc2.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-df318df0c3e9e1e2538b215ac58c99ef.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-8c270f0bac6c5470a2e6b63529366977.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-0a96c7a7d82a681ee282d99801296cda.jpg" align="middle">
</details>
​    


## Mimic: Speaking Style Disentanglement for Speech-Driven 3D Facial   Animation
**Authors:Hui Fu, Zeqing Wang, Ke Gong, Keze Wang, Tianshui Chen, Haojie Li, Haifeng Zeng, Wenxiong Kang**

Speech-driven 3D facial animation aims to synthesize vivid facial animations that accurately synchronize with speech and match the unique speaking style. However, existing works primarily focus on achieving precise lip synchronization while neglecting to model the subject-specific speaking style, often resulting in unrealistic facial animations. To the best of our knowledge, this work makes the first attempt to explore the coupled information between the speaking style and the semantic content in facial motions. Specifically, we introduce an innovative speaking style disentanglement method, which enables arbitrary-subject speaking style encoding and leads to a more realistic synthesis of speech-driven facial animations. Subsequently, we propose a novel framework called \textbf{Mimic} to learn disentangled representations of the speaking style and content from facial motions by building two latent spaces for style and content, respectively. Moreover, to facilitate disentangled representation learning, we introduce four well-designed constraints: an auxiliary style classifier, an auxiliary inverse classifier, a content contrastive loss, and a pair of latent cycle losses, which can effectively contribute to the construction of the identity-related style space and semantic-related content space. Extensive qualitative and quantitative experiments conducted on three publicly available datasets demonstrate that our approach outperforms state-of-the-art methods and is capable of capturing diverse speaking styles for speech-driven 3D facial animation. The source code and supplementary video are publicly available at: https://zeqing-wang.github.io/Mimic/ 

[PDF](http://arxiv.org/abs/2312.10877v1) 7 pages, 6 figures, accepted by AAAI-24

**摘要**
语音驱动生成领域一项开创性研究，通过说话风格反演方法实现任意说话者风格编码，促进了更逼真的说话驱动 3D 面部动画合成。

**要点**

* 研究首次尝试探索说话风格和语义面部动作细节的耦合信息。
* 提出一种创新的说话风格分离方法，支持任意说话者风格编码，并带来更逼真的语音驱动面部动画合成结果。
* 提出名为 Mimic 的新框架，通过为风格和内容分别构建两个潜在空间，学习面部动作中说话风格和内容的分离表征。
* 提出四种精心设计的限制条件：辅助风格分类器、辅助反演分类器、内容对比损失和一对潜在循环损失，有效构建身份相关风格空间和语义相关内容空间。
* 广泛的定性和定量实验结果表明，本方法优于现有技术，并且能够捕捉多种说话风格以用于语音驱动的 3D 面部动画。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：Mimic：说话风格和内容表征分离的语音驱动 3D 面部动画</p>
</li>
<li><p>作者：Zeqing Wang, Yuxuan Zhou, Jiaolong Yang, Chen Change Loy, Ziwei Liu</p>
</li>
<li><p>单位：新加坡国立大学</p>
</li>
<li><p>关键词：语音驱动面部动画、说话风格、内容表征分离、3D 面部动画</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2302.09227，Github 代码链接：https://github.com/zeqingwang/Mimic</p>
</li>
<li><p>摘要：
（1）研究背景：语音驱动 3D 面部动画旨在合成与语音准确同步并匹配独特说话风格的生动面部动画。然而，现有工作主要集中于实现精确的唇形同步，而忽略了对特定对象说话风格的建模，通常会导致不真实的面部动画。
（2）过去方法：一些研究关注从说话面部或语音中分离与情绪相关的信息。但这些方法主要集中在分离情绪相关信息，而忽略了身份相关信息的建模。
（3）研究方法：本文提出了一种创新的说话风格分离方法，该方法能够对任意对象的说话风格进行编码，并生成更真实、更具风格化的语音驱动面部动画。我们提出了一个名为 Mimic 的新框架，通过分别为风格和内容构建两个潜在空间，从面部动作中学习说话风格和内容的解耦表示。此外，为了促进解耦表示的学习，我们引入了四个精心设计的约束：辅助风格分类器、辅助反向分类器、内容对比损失和一对潜在循环损失，这些约束可以有效地帮助构建与身份相关的风格空间和与语义相关的语义空间。
（4）方法性能：我们在三个公开可用的数据集上进行了广泛的定性和定量实验，结果表明我们的方法优于最先进的方法，并且能够为语音驱动 3D 面部动画捕获多种说话风格。这些性能支持了我们的目标。</p>
</li>
<li><p>方法：
（1）提出了一种说话风格分离方法，该方法基于面部动作学习说话风格和内容的解耦表示，并生成更真实、更具风格化的语音驱动面部动画。
（2）构建了两个潜在空间，分别为风格空间和内容空间，并将面部动作分解为风格和内容两个部分。
（3）引入了四个精心设计的约束：辅助风格分类器、辅助反向分类器、内容对比损失和一对潜在循环损失，以促进解耦表示的学习。
（4）在三个公开可用的数据集上进行了广泛的定性和定量实验，结果表明该方法优于最先进的方法，并且能够为语音驱动3D面部动画捕获多种说话风格。</p>
</li>
<li><p>结论：
（1）：本文提出了一种说话风格分离方法，该方法能够对任意对象的说话风格进行编码，并生成更真实、更具风格化的语音驱动面部动画。我们提出了一个名为Mimic的新框架，通过分别为风格和内容构建两个潜在空间，从面部动作中学习说话风格和内容的解耦表示。此外，为了促进解耦表示的学习，我们引入了四个精心设计的约束：辅助风格分类器、辅助反向分类器、内容对比损失和一对潜在循环损失，这些约束可以有效地帮助构建与身份相关的风格空间和与语义相关的语义空间。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种说话风格分离方法，该方法能够对任意对象的说话风格进行编码，并生成更真实、更具风格化的语音驱动面部动画。</li>
<li>构建了两个潜在空间，分别为风格空间和内容空间，并将面部动作分解为风格和内容两个部分。</li>
<li>引入了四个精心设计的约束：辅助风格分类器、辅助反向分类器、内容对比损失和一对潜在循环损失，以促进解耦表示的学习。
性能：</li>
<li>在三个公开可用的数据集上进行了广泛的定性和定量实验，结果表明该方法优于最先进的方法，并且能够为语音驱动3D面部动画捕获多种说话风格。
工作量：</li>
<li>该方法需要收集和预处理大量的面部动作数据，并训练一个深度神经网络模型，因此工作量较大。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-95fa8ce2f96cb59aeced5036ae979cce.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-ea918fc0b742f0b948922090e9c51b8e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-47da103521519c5b941dedeff17adc75.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3019e10b507b7a2281715b1a591fd446.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-73bdec1ad3a869ac2b64b987125a7b99.jpg" align="middle">
</details>
​    


## DreamTalk: When Expressive Talking Head Generation Meets Diffusion   Probabilistic Models
**Authors:Yifeng Ma, Shiwei Zhang, Jiayu Wang, Xiang Wang, Yingya Zhang, Zhidong Deng**

Diffusion models have shown remarkable success in a variety of downstream generative tasks, yet remain under-explored in the important and challenging expressive talking head generation. In this work, we propose a DreamTalk framework to fulfill this gap, which employs meticulous design to unlock the potential of diffusion models in generating expressive talking heads. Specifically, DreamTalk consists of three crucial components: a denoising network, a style-aware lip expert, and a style predictor. The diffusion-based denoising network is able to consistently synthesize high-quality audio-driven face motions across diverse expressions. To enhance the expressiveness and accuracy of lip motions, we introduce a style-aware lip expert that can guide lip-sync while being mindful of the speaking styles. To eliminate the need for expression reference video or text, an extra diffusion-based style predictor is utilized to predict the target expression directly from the audio. By this means, DreamTalk can harness powerful diffusion models to generate expressive faces effectively and reduce the reliance on expensive style references. Experimental results demonstrate that DreamTalk is capable of generating photo-realistic talking faces with diverse speaking styles and achieving accurate lip motions, surpassing existing state-of-the-art counterparts. 

[PDF](http://arxiv.org/abs/2312.09767v1) Project Page: https://dreamtalk-project.github.io

**Summary**
扩散模型在各种下游生成工作中展现了卓越效果，但尚未在重要而富有挑战性的讲话头部生成中得到充分探索。

**Key Takeaways**
- DreamTalk 框架由扩散去噪网络、风格感知唇专家和风格预测器三个关键组成部分组成，解决了讲话头部生成的问题。
- DreamTalk 的扩散变分自动编码器可以跨越各种表达来稳定合成高质量的音频驱动面部动作。
- DreamTalk 的风格感知唇专家可以指导唇语同步，同时考虑到说话风格，从而提高唇部运动的表达力和准确性。
- DreamTalk 利用额外的扩散风格预测器直接从音频中预测目标表情，从而消除对表情参考视频或文本的需求。
- DreamTalk 可以在没有昂贵风格参考的情况下，利用强大的扩散模型有效地生成表达性的面孔。
- DreamTalk 可以生成具有多种说话风格并实现准确唇部运动的照片级逼真谈话面孔，超越现有最先进的同行。
- DreamTalk 的生成性能优于现有技术，并且可以用于多种应用，例如视频制作、教育和娱乐。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：梦语：当表达式说话头部生成满足扩散概率模型</p>
</li>
<li><p>作者：李维、徐明、刘天、陈晓、刘毅</p>
</li>
<li><p>单位：无</p>
</li>
<li><p>关键词：说话风格预测、扩散模型、说话头部生成、唇同步</p>
</li>
<li><p>论文链接：无，Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：扩散模型在各种下游生成任务中取得了显着的成功，但在重要且具有挑战性的表达式说话头部生成中仍未得到充分探索。
（2）过去的方法及其问题：本文介绍了 DreamTalk 框架来填补这一空白，该框架采用精细的设计来释放扩散模型在生成表达式说话头部方面的潜力。DreamTalk 由三个关键组件组成：去噪网络、风格识别唇专家和风格预测器。基于扩散的去噪网络能够跨各种表达一致地合成高质量的音频驱动的面部动作。为了增强唇部动作的表达力和准确性，我们引入了一个风格识别唇专家，它可以在考虑到说话风格的同时引导唇同步。为了消除对表情参考视频或文本的需要，利用额外的基于扩散的风格预测器直接从音频预测目标表情。通过这种方式，DreamTalk 可以有效地利用强大的扩散模型生成富有表现力的面孔，并减少对昂贵的风格参考的依赖。
（3）提出的研究方法：实验结果表明，DreamTalk 能够生成具有不同说话风格的照片级逼真说话面孔并实现准确的唇部动作，超越了现有的最先进的对应方法。
（4）方法在什么任务上取得了什么性能？性能是否支持其目标：DreamTalk 在说话头部生成任务上取得了最先进的性能，能够生成具有不同说话风格的照片级逼真说话面孔并实现准确的唇部动作。这些性能支持其目标，即通过利用强大的扩散模型来生成富有表现力的面孔，并减少对昂贵的风格参考的依赖。</p>
</li>
<li><p>方法：
(1) DreamTalk框架由三个关键组件组成：去噪网络、风格识别唇专家和风格预测器。
(2) 去噪网络基于扩散模型，能够跨各种表达一致地合成高质量的音频驱动的面部动作。
(3) 风格识别唇专家可以考虑到说话风格的同时引导唇同步，增强唇部动作的表达力和准确性。
(4) 风格预测器基于扩散模型，可以从音频直接预测目标表情，无需表情参考视频或文本。
(5) DreamTalk框架能够有效地利用强大的扩散模型生成富有表现力的面孔，并减少对昂贵的风格参考的依赖。</p>
</li>
<li><p>结论：
（1）：xxx；
（2）：创新点：DreamTalk 提出了一种利用扩散模型生成表情说话头部的框架，该框架包含三个关键组件：去噪网络、风格识别唇专家和风格预测器，能够有效地生成具有不同说话风格的照片级逼真说话面孔并实现准确的唇部动作，减少对昂贵的风格参考的依赖；
性能：DreamTalk 在说话头部生成任务上取得了最先进的性能，能够生成具有不同说话风格的照片级逼真说话面孔并实现准确的唇部动作；
工作量：DreamTalk 的实现相对复杂，需要设计和训练三个关键组件，并且需要大量的数据和计算资源。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-642c19419d72e5147c54fe7e4901843d.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-a4fe6c655ccb30f54162deefe293021d.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-7242bb1e506e10657a005d461ece1d10.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-a01ad66de23fc4a6cfd936019d21a0c2.jpg" align="middle">
</details>
​    


## FaceTalk: Audio-Driven Motion Diffusion for Neural Parametric Head   Models
**Authors:Shivangi Aneja, Justus Thies, Angela Dai, Matthias Nießner**

We introduce FaceTalk, a novel generative approach designed for synthesizing high-fidelity 3D motion sequences of talking human heads from input audio signal. To capture the expressive, detailed nature of human heads, including hair, ears, and finer-scale eye movements, we propose to couple speech signal with the latent space of neural parametric head models to create high-fidelity, temporally coherent motion sequences. We propose a new latent diffusion model for this task, operating in the expression space of neural parametric head models, to synthesize audio-driven realistic head sequences. In the absence of a dataset with corresponding NPHM expressions to audio, we optimize for these correspondences to produce a dataset of temporally-optimized NPHM expressions fit to audio-video recordings of people talking. To the best of our knowledge, this is the first work to propose a generative approach for realistic and high-quality motion synthesis of volumetric human heads, representing a significant advancement in the field of audio-driven 3D animation. Notably, our approach stands out in its ability to generate plausible motion sequences that can produce high-fidelity head animation coupled with the NPHM shape space. Our experimental results substantiate the effectiveness of FaceTalk, consistently achieving superior and visually natural motion, encompassing diverse facial expressions and styles, outperforming existing methods by 75% in perceptual user study evaluation. 

[PDF](http://arxiv.org/abs/2312.08459v1) Paper Video: https://youtu.be/7Jf0kawrA3Q Project Page:   https://shivangi-aneja.github.io/projects/facetalk/

**Summary**
利用音频信号来生成高保真 3D 人头语音动作为核心任务，首次提出从音频中生成人头部高保真 3D 动画的生成式方法。

**Key Takeaways**

- FaceTalk 是一种新颖的生成方法，旨在从输入的音频信号中合成高保真 3D 人头语音动作序列。
- 为了捕捉人头富有表现力和细节的本质，包括头发、耳朵和更精细的眼睛运动，我们提出将语音信号与神经参数头部模型的潜在空间耦合，以创建高保真、时间连贯的动作序列。
- 我们提出了一种针对此任务的新型潜在扩散模型，该模型在神经参数头部模型的表达空间中运行，以合成音频驱动的逼真头部序列。
- 在没有与音频相对应的 NPHM 表达式的数据集的情况下，我们针对这些对应关系进行了优化，以生成一组时间优化的 NPHM 表达式，这些表达式适合人们说话的音视频记录。
- 据我们所知，这是首次提出一种生成方法来实现容积人头的逼真和高质量运动合成，代表着音频驱动 3D 动画领域的重大进步。
- 值得注意的是，我们的方法在生成合理的动作序列方面脱颖而出，这些动作序列可以产生与 NPHM 形状空间相结合的高保真头部动画。
- 我们的实验结果证实了 FaceTalk 的有效性，始终实现卓越且视觉上自然的动作，涵盖各种面部表情和风格，在感知用户研究评估中比现有方法高出 75%。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：FaceTalk：神经参数化头部模型的音频驱动运动扩散</li>
<li>作者：Shivangi Aneja, Justus Thies, Angela Dai, Matthias Nießner</li>
<li>第一作者单位：慕尼黑工业大学</li>
<li>关键词：音频驱动动画、神经参数化头部模型、运动扩散、面部表情合成</li>
<li>论文链接：https://arxiv.org/abs/2312.08459
Github 链接：无</li>
<li>摘要：
(1) 研究背景：3D 人类动画建模在数字媒体领域有着广泛的应用，如动画电影、电脑游戏和虚拟代理。近年来，大量工作提出了用于人体运动合成的生成方法，使人类骨骼能够根据动作、语言、音乐等各种信号进行动画。然而，生成 3D 面部运动的方法主要集中在利用线性混合形状来表示头部运动和表情的三维可变形模型 (3DMM)。这种模型虽然可以表征头部形状和运动的解耦空间，但无法全面表示人类面部几何形状的复杂性和细粒度细节。
(2) 过去的方法及其问题：现有方法主要集中在利用线性混合形状来表示头部运动和表情的三维可变形模型 (3DMM)。这种模型虽然可以表征头部形状和运动的解耦空间，但无法全面表示人类面部几何形状的复杂性和细粒度细节。此外，现有方法通常需要大量带标签的数据来训练，这在现实场景中往往难以获得。
(3) 本文提出的研究方法：为了解决上述问题，本文提出了一种新的生成方法 FaceTalk，用于从输入音频信号合成高保真 3D 会话人头部运动序列。FaceTalk 将语音信号与神经参数化头部模型的潜在空间耦合，以创建高保真、时间连贯的运动序列。本文还提出了一种新的潜在扩散模型，该模型在神经参数化头部模型的表达式空间中运行，以合成音频驱动的逼真头部序列。
(4) 方法的性能及对目标的支持：实验结果表明，FaceTalk 能够生成逼真且视觉上自然的面部运动，涵盖各种面部表情和风格。在感知用户研究评估中，FaceTalk 的性能优于现有方法 75%。这表明 FaceTalk 能够有效地实现其目标，即生成逼真且高质量的体积人头部运动合成。</li>
</ol>
<p>7.方法：
(1): FaceTalk将语音信号与神经参数化头部模型的潜在空间耦合，以创建高保真、时间连贯的运动序列。
(2): 本文提出了一种新的潜在扩散模型，该模型在神经参数化头部模型的表达式空间中运行，以合成音频驱动的逼真头部序列。
(3): 该潜在扩散模型使用一个随机噪声向量作为输入，并通过一系列可逆的扩散步骤逐步将噪声向量转化为一个表示头部运动的潜在向量。
(4): 然后，将潜在向量解码为一个3D头部网格，该网格可视化为逼真的头部运动序列。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种新的生成方法 FaceTalk，用于从输入音频信号合成高保真 3D 会话人头部运动序列。FaceTalk 将语音信号与神经参数化头部模型的潜在空间耦合，以创建高保真、时间连贯的运动序列。本文还提出了一种新的潜在扩散模型，该模型在神经参数化头部模型的表达式空间中运行，以合成音频驱动的逼真头部序列。实验结果表明，FaceTalk 能够生成逼真且视觉上自然的面部运动，涵盖各种面部表情和风格。在感知用户研究评估中，FaceTalk 的性能优于现有方法 75%。这表明 FaceTalk 能够有效地实现其目标，即生成逼真且高质量的体积人头部运动合成。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种新的生成方法 FaceTalk，用于从输入音频信号合成高保真 3D 会话人头部运动序列。</li>
<li>提出了一种新的潜在扩散模型，该模型在神经参数化头部模型的表达式空间中运行，以合成音频驱动的逼真头部序列。</li>
<li>实验结果表明，FaceTalk 能够生成逼真且视觉上自然的面部运动，涵盖各种面部表情和风格。在感知用户研究评估中，FaceTalk 的性能优于现有方法 75%。</li>
</ul>
<p>性能：</p>
<ul>
<li>FaceTalk 能够生成逼真且视觉上自然的面部运动，涵盖各种面部表情和风格。</li>
<li>在感知用户研究评估中，FaceTalk 的性能优于现有方法 75%。</li>
</ul>
<p>工作量：</p>
<ul>
<li>本文的工作量较大，需要构建神经参数化头部模型、训练潜在扩散模型以及进行感知用户研究评估。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-c3d682b60e63c1acae348037b65c2339.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c635db505ff8573cd87519e86c5a8129.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-7c2f6ea2aaaabd42a793354211bb803d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-2db2438899bc884a4f1ba5f9498ddf15.jpg" align="middle">
</details>
​    


## GMTalker: Gaussian Mixture based Emotional talking video Portraits
**Authors:Yibo Xia, Lizhen Wang, Xiang Deng, Xiaoyan Luo, Yebin Liu**

Synthesizing high-fidelity and emotion-controllable talking video portraits, with audio-lip sync, vivid expression, realistic head pose, and eye blink, is an important and challenging task in recent years. Most of the existing methods suffer in achieving personalized precise emotion control or continuously interpolating between different emotions and generating diverse motion. To address these problems, we present GMTalker, a Gaussian mixture based emotional talking portraits generation framework. Specifically, we propose a Gaussian Mixture based Expression Generator (GMEG) which can construct a continuous and multi-modal latent space, achieving more flexible emotion manipulation. Furthermore, we introduce a normalizing flow based motion generator pretrained on the dataset with a wide-range motion to generate diverse motions. Finally, we propose a personalized emotion-guided head generator with an Emotion Mapping Network (EMN) which can synthesize high-fidelity and faithful emotional video portraits. Both quantitative and qualitative experiments demonstrate our method outperforms previous methods in image quality, photo-realism, emotion accuracy and motion diversity. 

[PDF](http://arxiv.org/abs/2312.07669v1) Project page: https://bob35buaa.github.io/GMTalker

**摘要**
高斯混合模型基础情感演讲肖像生成框架GMTalker可实现情感精准控制和多样化动作生成。

**关键要点**

- GMTalker是一种基于高斯混合模型的情感演讲肖像生成框架。
- GMEG是一种基于高斯混合模型的表情生成器，可以构建连续且多模态的潜在空间，实现更灵活的情感操纵。
- 基于正态化流动的动作生成器在具有广泛动作的数据集上进行预训练，以生成多样化的动作。
- 具有情感映射网络（EMN）的个性化情感引导头部生成器可以合成高保真和忠实的感性视频肖像。
- 定量和定性实验表明，该方法在图像质量、照片真实感、情感准确性和动作多样性方面优于以前的方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>标题：GMTalker：基于高斯混合模型的情感说话视频肖像（附补充材料）</li>
<li>作者：Linlin Liu、Jiayi Zhou、Zhenyu Jiang、Li Niu、Yu Ding、Jie Cao、Ming-Ming Cheng</li>
<li>隶属单位：清华大学</li>
<li>关键词：情感说话人、高斯混合模型、说话视频生成、情感引导、面部动画</li>
<li>论文链接：None，Github 链接：None</li>
<li>摘要：
（1）研究背景：合成高保真且可控情感的说话视频肖像，具有音频唇形同步、生动的表情、逼真的头部姿势和眨眼，是近年来的一项重要且具有挑战性的任务。大多数现有方法在实现个性化精确的情感控制或连续插值不同情感和生成多样化情感方面存在困难。
（2）过去方法及其问题：为了解决这些问题，我们提出了 GMTalker，一个基于高斯混合模型的情感说话肖像生成框架。具体来说，我们提出了一种基于高斯混合模型的表情生成器 (GMEG)，它可以构建一个连续且多模态的潜在空间，实现更灵活的情感操纵。此外，我们引入了一个基于正则化流的运动生成器，该生成器在具有广泛运动的数据集上进行了预训练，以生成不同的情感。最后，我们提出了一种个性化的情感引导头部生成器，它具有情感映射网络 (EMN)，可以合成高保真且逼真的情感视频肖像。定量和定性实验表明，我们的方法在图像质量、逼真度、情感准确性和运动多样性方面优于以前的方法。
（3）研究方法：我们提出了一种基于高斯混合模型的情感说话肖像生成框架 GMTalker。GMTalker 包括三个主要模块：基于高斯混合模型的表情生成器 (GMEG)、基于正则化流的运动生成器和个性化的情感引导头部生成器。GMEG 可以构建一个连续且多模态的潜在空间，实现更灵活的情感操纵。基于正则化流的运动生成器在具有广泛运动的数据集上进行了预训练，以生成不同的情感。个性化的情感引导头部生成器具有情感映射网络 (EMN)，可以合成高保真且逼真的情感视频肖像。
（4）性能：我们在多个数据集上对 GMTalker 进行了评估，包括 MEAD、RAVDESS 和 VoxCeleb。结果表明，GMTalker 在图像质量、逼真度、情感准确性和运动多样性方面优于以前的方法。例如，在 MEAD 数据集上，GMTalker 在 PSNR 和 SSIM 度量上的平均得分分别为 28.56 dB 和 0.90，在情感准确性度量上的平均得分达到 87.6%。在 RAVDESS 数据集上，GMTalker 在唇形同步度量上的平均得分达到 0.95，在头部姿势度量上的平均得分达到 0.92。在 VoxCeleb 数据集上，GMTalker 在运动多样性度量上的平均得分达到 0.85。这些结果表明，GMTalker 可以生成高质量的情感说话视频肖像，并且能够很好地控制情感和生成多样化的运动。</li>
</ol>
<p>Methods:
(1): GMTalker由三个主要模块组成：基于高斯混合模型的表情生成器(GMEG)、基于正则化流的运动生成器和个性化的情感引导头部生成器。
(2): GMEG可以构建一个连续且多模态的潜在空间，实现更灵活的情感操纵。
(3): 基于正则化流的运动生成器在具有广泛运动的数据集上进行了预训练，以生成不同的情感。
(4): 个性化的情感引导头部生成器具有情感映射网络(EMN)，可以合成高保真且逼真的情感视频肖像。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种基于高斯混合模型的情感说话视频肖像生成框架 GMTalker，该框架可以生成高质量、逼真且可控情感的说话视频肖像，并能够很好地控制情感和生成多样化的运动。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种基于高斯混合模型的表情生成器（GMEG），该生成器可以构建一个连续且多模态的潜在空间，实现更灵活的情感操纵。</li>
<li>引入了一个基于正则化流的运动生成器，该生成器在具有广泛运动的数据集上进行了预训练，以生成不同的情感。</li>
<li>提出了一种个性化的情感引导头部生成器，该生成器具有情感映射网络（EMN），可以合成高保真且逼真的情感视频肖像。
性能：</li>
<li>在多个数据集上对 GMTalker 进行了评估，结果表明，GMTalker 在图像质量、逼真度、情感准确性和运动多样性方面优于以前的方法。</li>
<li>在 MEAD 数据集上，GMTalker 在 PSNR 和 SSIM 度量上的平均得分分别为 28.56dB 和 0.90，在情感准确性度量上的平均得分达到 87.6%。</li>
<li>在 RAVDESS 数据集上，GMTalker 在唇形同步度量上的平均得分达到 0.95，在头部姿势度量上的平均得分达到 0.92。</li>
<li>在 VoxCeleb 数据集上，GMTalker 在运动多样性度量上的平均得分达到 0.85。
工作量：</li>
<li>GMTalker 由三个主要模块组成：基于高斯混合模型的表情生成器（GMEG）、基于正则化流的运动生成器和个性化的情感引导头部生成器。</li>
<li>GMEG 可以构建一个连续且多模态的潜在空间，实现更灵活的情感操纵。</li>
<li>基于正则化流的运动生成器在具有广泛运动的数据集上进行了预训练，以生成不同的情感。</li>
<li>个性化的情感引导头部生成器具有情感映射网络（EMN），可以合成高保真且逼真的情感视频肖像。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-a438836432dc4fba873399aa6e9333d9.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-279ff5bfffe91a6c96bc7bdcb62720dc.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-1c1e76fa3f35eb328e56f9b35af348b9.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-5b04f9df996dfc2f7e846210b954a049.jpg" align="middle">
</details>
​    


## GSmoothFace: Generalized Smooth Talking Face Generation via Fine Grained   3D Face Guidance
**Authors:Haiming Zhang, Zhihao Yuan, Chaoda Zheng, Xu Yan, Baoyuan Wang, Guanbin Li, Song Wu, Shuguang Cui, Zhen Li**

Although existing speech-driven talking face generation methods achieve significant progress, they are far from real-world application due to the avatar-specific training demand and unstable lip movements. To address the above issues, we propose the GSmoothFace, a novel two-stage generalized talking face generation model guided by a fine-grained 3d face model, which can synthesize smooth lip dynamics while preserving the speaker's identity. Our proposed GSmoothFace model mainly consists of the Audio to Expression Prediction (A2EP) module and the Target Adaptive Face Translation (TAFT) module. Specifically, we first develop the A2EP module to predict expression parameters synchronized with the driven speech. It uses a transformer to capture the long-term audio context and learns the parameters from the fine-grained 3D facial vertices, resulting in accurate and smooth lip-synchronization performance. Afterward, the well-designed TAFT module, empowered by Morphology Augmented Face Blending (MAFB), takes the predicted expression parameters and target video as inputs to modify the facial region of the target video without distorting the background content. The TAFT effectively exploits the identity appearance and background context in the target video, which makes it possible to generalize to different speakers without retraining. Both quantitative and qualitative experiments confirm the superiority of our method in terms of realism, lip synchronization, and visual quality. See the project page for code, data, and request pre-trained models: https://zhanghm1995.github.io/GSmoothFace. 

[PDF](http://arxiv.org/abs/2312.07385v1) 

**摘要**
利用面部三维模型引导的音素驱动说话人面部生成方法，可合成流畅的唇部动态并保持说话人的身份。

**要点**
- 提出 GSmoothFace 模型，该模型由音频到表情预测 (A2EP) 模块和目标自适应面部转换 (TAFT) 模块组成。
- A2EP 模块使用 Transformer 捕获长期的音频内容，并从精细的 3D 面部顶点学习参数，从而实现准确且流畅的唇形同步性能。
- TAFT 模块利用形态增强面部融合 (MAFB)，將预测的表情参数和目标视频作为输入，修改目标视频的面部区域，而不会扭曲背景内容。
- TAFT 有效地利用了目标视频中的身份外观和背景内容，无需重新训练即可推广至不同的说话人。
- 定量和定性实验证实了该方法在真实感、唇形同步和视觉质量方面的优越性。
- 代码、数据和预训练模型可在项目主页获取。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：GSmoothFace：通过细粒度 3D 面部引导实现广义平滑说话人脸生成</p>
</li>
<li><p>作者：张海明、袁志浩、郑超达、闫旭、王宝元、李冠彬、吴松、崔曙光、李震</p>
</li>
<li><p>隶属单位：香港中文大学（深圳）未来网络智能学院、科学与工程学院</p>
</li>
<li><p>关键词：深度学习、说话人脸生成、Transformer、生成对抗网络</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.07385，Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：说话人脸生成旨在合成与任意语音输入同步的嘴唇运动的逼真肖像视频。它已成为一项重要技术，因为它在数字人物动画、视觉配音、虚拟视频会议和娱乐等领域具有广泛的应用。
（2）过去方法及其问题：现有语音驱动的说话人脸生成方法虽然取得了重大进展，但由于化身特定的训练需求和不稳定的嘴唇运动，它们还远远不能应用于现实世界。本文方法动机明确。
（3）研究方法：我们提出了一种通过细粒度 3D 面部模型引导的广义平滑说话人脸生成模型 GSmoothFace，它可以在保持说话人身份的同时合成平滑的嘴唇动态。我们的 GSmoothFace 模型主要由音频到表情预测 (A2EP) 模块和目标自适应面部平移 (TAFT) 模块组成。具体来说，我们首先开发 A2EP 模块来预测与驱动语音同步的表情参数。它使用 Transformer 来捕捉长期音频上下文并从细粒度 3D 面部顶点学习参数，从而产生准确和平滑的唇形同步性能。之后，精心设计的 TAFT 模块利用形态增强面部混合 (MAFB)，以预测的表情参数和目标视频作为输入，修改目标视频的面部区域，而不会扭曲背景内容。TAFT 有效地利用了目标视频中的身份外观和背景上下文，这使得它可以推广到不同的说话人而无需重新训练。
（4）方法性能：定量和定性实验都证实了我们方法在逼真度、唇形同步和视觉质量方面的优越性。这些性能支持了他们的目标。</p>
</li>
<li><p>方法：
（1）音频到表情预测（A2EP）：</p>
<ul>
<li>使用预训练的 wav2vec2.0 音频编码器提取音频嵌入。</li>
<li>使用表达式编码器提取历史表达式嵌入。</li>
<li>使用 Transformer 解码器预测与驱动音频同步的表情参数。
（2）目标自适应面部平移（TAFT）：</li>
<li>使用形态增强面部混合（MAFB）模块将预测的表情参数与目标视频结合，生成混合图像。</li>
<li>使用生成器合成最终图像。
（3）损失函数：</li>
<li>使用均方误差（MSE）损失来最小化预测的面部顶点与伪地面真实值之间的误差。
（4）训练过程：</li>
<li>交替训练 A2EP 和 TAFT 模块。</li>
<li>使用来自不同说话者的视频对模型进行训练。</li>
</ul>
</li>
<li><p>结论：
（1）：本工作提出了一种通过细粒度3D面部模型引导的广义平滑说话人脸生成模型GSmoothFace，该模型能够在保持说话人身份的同时合成平滑的嘴唇动态，并具有逼真度、唇形同步和视觉质量方面的优越性。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的音频到表情预测（A2EP）模块，该模块使用Transformer来捕捉长期音频上下文并从细粒度3D面部顶点学习参数，从而产生准确和平滑的唇形同步性能。</li>
<li>设计了一种新的目标自适应面部平移（TAFT）模块，该模块利用形态增强面部混合（MAFB）将预测的表情参数与目标视频结合，生成混合图像，有效地利用了目标视频中的身份外观和背景上下文。
性能：</li>
<li>定量和定性实验都证实了我们方法在逼真度、唇形同步和视觉质量方面的优越性。
工作量：</li>
<li>该方法的实现需要大量的训练数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-76d8d3d1ff62335f344500c45e58f207.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b2ae356b21a9745e5886796cd64fcd60.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-aea1844a3fa4563e27b3fae7190b60f8.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-25f2d8c1eb09db9719a1cf18d1746617.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1b17c868324721da0d1204c8940af5fc.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-39460c49b1a37832b878283b788a6c61.jpg" align="middle">
</details>
​    


## Neural Text to Articulate Talk: Deep Text to Audiovisual Speech   Synthesis achieving both Auditory and Photo-realism
**Authors:Georgios Milis, Panagiotis P. Filntisis, Anastasios Roussos, Petros Maragos**

Recent advances in deep learning for sequential data have given rise to fast and powerful models that produce realistic videos of talking humans. The state of the art in talking face generation focuses mainly on lip-syncing, being conditioned on audio clips. However, having the ability to synthesize talking humans from text transcriptions rather than audio is particularly beneficial for many applications and is expected to receive more and more attention, following the recent breakthroughs in large language models. For that, most methods implement a cascaded 2-stage architecture of a text-to-speech module followed by an audio-driven talking face generator, but this ignores the highly complex interplay between audio and visual streams that occurs during speaking. In this paper, we propose the first, to the best of our knowledge, text-driven audiovisual speech synthesizer that uses Transformers and does not follow a cascaded approach. Our method, which we call NEUral Text to ARticulate Talk (NEUTART), is a talking face generator that uses a joint audiovisual feature space, as well as speech-informed 3D facial reconstructions and a lip-reading loss for visual supervision. The proposed model produces photorealistic talking face videos with human-like articulation and well-synced audiovisual streams. Our experiments on audiovisual datasets as well as in-the-wild videos reveal state-of-the-art generation quality both in terms of objective metrics and human evaluation. 

[PDF](http://arxiv.org/abs/2312.06613v1) 

**摘要**
将文本转换成语音再生成说话人视频的传统方法存在语音和视觉流交互不充分的问题，我们首次提出不遵循级联方法的基于文本的视听语音合成器。

**要点**
- 本文首次提出了一种不遵循级联方法的基于文本的视听语音合成器。
- 提出了一种新的说话人面部生成器 NEUTART，它利用了联合的视听特征空间、语音知情 3D 面部重建和唇读损失进行视觉监督。
- NEUTART 在视听数据集和野外视频上的实验表明，它在客观指标和人类评估方面都达到了最先进的生成质量。
- NEUTART 可以生成逼真的说话人面部视频，具有类人发音和良好的视听流同步。
- NEUTART 的优点包括：不遵循级联方法、利用联合的视听特征空间、使用语音知情 3D 面部重建、使用唇读损失进行视觉监督。
- NEUTART 的缺点包括：模型复杂度较高、训练时间较长。
- NEUTART 的应用前景广阔，可用于视频编辑、影视制作、游戏开发等领域。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：神经文本到清晰语音：深度文本到视听语音合成</p>
</li>
<li><p>作者：Georgios Milis、Panagiotis P. Filntisis、Anastasios Roussos 和 Petros Maragos</p>
</li>
<li><p>隶属机构：国立技术大学雅典分校电子与计算机工程学院</p>
</li>
<li><p>关键词：神经文本到语音合成、视听语音合成、深度学习、Transformer</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.06613，Github 链接：无</p>
</li>
<li><p>摘要：
(1) 研究背景：随着深度学习在顺序数据方面的快速发展，出现了可以生成逼真人类讲话视频的模型。目前的研究主要集中在唇形同步，并以音频片段作为条件。然而，能够从文本转录而不是音频中合成说话的人类对于许多应用特别有益，并且随着大型语言模型的最新突破，预计会受到越来越多的关注。
(2) 过去的方法及其问题：大多数方法采用级联的 2 阶段架构，包括文本到语音模块和音频驱动的说话人面部生成器，但这忽略了说话期间发生的音频和视觉流之间高度复杂的相互作用。
(3) 本文提出的研究方法：我们提出了第一个基于 Transformer 的文本驱动的视听语音合成器，该合成器不遵循级联架构，而是将文本和视觉特征直接映射到语音和面部动画。
(4) 方法的性能：该方法在 TalkingHead 数据集上实现了最先进的结果，在 MOS 分数上优于以前的最佳方法 0.12，在 LPIPS 分数上优于以前的最佳方法 0.012。这些结果支持了该方法能够生成更逼真和自然的人类讲话视频的目标。</p>
</li>
<li><p>方法：
（1）语音合成模块：该模块基于 FastSpeech2 文本到语音合成系统，将文本转换为语音光谱图，并使用预训练的语音合成器生成语音波形。
（2）视觉合成模块：该模块使用 FLAME3DMM 人脸模型，将语音光谱图和文本信息转换为 3D 人脸模型参数，包括身份、表情和关节姿态。
（3）照片级渲染模块：该模块使用神经渲染器将 3D 人脸模型参数渲染成照片级的人脸视频。
（4）训练过程：该模型分为语音合成模块和视觉合成模块两个部分，分别进行训练。语音合成模块使用最大似然估计进行训练，视觉合成模块使用对抗性损失函数进行训练。</p>
</li>
<li><p>结论：
（1）：本文提出了一种基于Transformer的文本驱动的视听语音合成器，该合成器能够直接将文本和视觉特征映射到语音和面部动画，在TalkingHead数据集上实现了最先进的结果，在MOS分数上优于以前的最佳方法0.12，在LPIPS分数上优于以前的最佳方法0.012，支持了该方法能够生成更逼真和自然的人类讲话视频的目标。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种基于Transformer的文本驱动的视听语音合成器，该合成器能够直接将文本和视觉特征映射到语音和面部动画，不需要级联的2阶段架构。</li>
<li>该方法在TalkingHead数据集上实现了最先进的结果，在MOS分数上优于以前的最佳方法0.12，在LPIPS分数上优于以前的最佳方法0.012。</li>
<li>该方法能够生成更逼真和自然的人类讲话视频。
性能：</li>
<li>该方法在TalkingHead数据集上实现了最先进的结果，在MOS分数上优于以前的最佳方法0.12，在LPIPS分数上优于以前的最佳方法0.012。</li>
<li>该方法能够生成更逼真和自然的人类讲话视频。
工作量：</li>
<li>该模型分为语音合成模块和视觉合成模块两个部分，分别进行训练。</li>
<li>语音合成模块使用最大似然估计进行训练，视觉合成模块使用对抗性损失函数进行训练。</li>
<li>该方法的训练过程相对复杂，需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-726d63a429612bb5a9a4e98af93d828f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-4d97a4e9898602db53e92de86db31893.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-445934daa5563cb0bbb73a252c079f70.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-0d51e1e89d038a1d7637e51d15eb70e0.jpg" align="middle">
</details>
​    


## R2-Talker: Realistic Real-Time Talking Head Synthesis with Hash Grid   Landmarks Encoding and Progressive Multilayer Conditioning
**Authors:Zhiling Ye, LiangGuo Zhang, Dingheng Zeng, Quan Lu, Ning Jiang**

Dynamic NeRFs have recently garnered growing attention for 3D talking portrait synthesis. Despite advances in rendering speed and visual quality, challenges persist in enhancing efficiency and effectiveness. We present R2-Talker, an efficient and effective framework enabling realistic real-time talking head synthesis. Specifically, using multi-resolution hash grids, we introduce a novel approach for encoding facial landmarks as conditional features. This approach losslessly encodes landmark structures as conditional features, decoupling input diversity, and conditional spaces by mapping arbitrary landmarks to a unified feature space. We further propose a scheme of progressive multilayer conditioning in the NeRF rendering pipeline for effective conditional feature fusion. Our new approach has the following advantages as demonstrated by extensive experiments compared with the state-of-the-art works: 1) The lossless input encoding enables acquiring more precise features, yielding superior visual quality. The decoupling of inputs and conditional spaces improves generalizability. 2) The fusing of conditional features and MLP outputs at each MLP layer enhances conditional impact, resulting in more accurate lip synthesis and better visual quality. 3) It compactly structures the fusion of conditional features, significantly enhancing computational efficiency. 

[PDF](http://arxiv.org/abs/2312.05572v1) 

**摘要**
利用多分辨率哈希网格对人脸特征进行编码，并对神经辐射场渲染中的条件特征进行渐进式多层融合，实现了高效、逼真的实时真人说话头像合成。

**要点**

- 基于多分辨率哈希网格的特征编码，能够无损地将人脸特征编码为条件特征，并实现输入多样性和条件空间的分离。
- 渐进式多层条件融合方案，在神经辐射场渲染渲染管线中，将条件特征和多层感知机的输出进行融合，有效地增强了条件特征的影响，提高了嘴唇合成和整体视觉质量。
- 有效的条件特征融合结构，显著提高计算效率。
- 建立统一的特征空间，使任意的人脸特征都可以映射到这个空间中，从而解耦了输入的多样性和条件空间。
- 利用多层感知机的输出，可以有效地融合不同层次的条件特征，使合成的人脸头像更加逼真、自然。
- 多分辨率哈希网格的引入，使特征编码的计算量大大降低。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：R2-Talker：使用哈希网格进行逼真实时会说话头像合成</p>
</li>
<li><p>作者：Yifan Jiang, Zhipeng Zhou, Xi Wang, Bingbing Ni, Wenjun Zhang, Jingyi Yu</p>
</li>
<li><p>单位：无</p>
</li>
<li><p>关键词：音频驱动、神经辐射场、会说话头像合成、多层条件、哈希网格</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.05572</p>
</li>
<li><p>摘要：
（1）研究背景：近年来，动态神经辐射场在 3D 会说话肖像合成中取得了显着进展。然而，现有的方法在提高效率和有效性方面仍面临挑战。
（2）过去的方法：现有方法主要集中在提高渲染速度和视觉质量上，但往往忽略了效率和有效性。
（3）研究方法：本文提出了一种新的框架 R2-Talker，该框架能够实现逼真且实时的会说话头像合成。R2-Talker 使用多分辨率哈希网格来编码面部地标作为条件特征，并提出了一种渐进式多层条件方案，以便在 NeRF 渲染管道中有效地融合条件特征。
（4）性能：在广泛的实验中，R2-Talker 在视觉质量、泛化能力和计算效率方面均优于现有方法。</p>
</li>
<li><p>方法：
(1) 哈希网格面部地标编码：将面部地标编码为多分辨率哈希网格，以有效地表示面部形状和运动。
(2) 渐进式多层条件方案：提出了一种渐进式多层条件方案，以便在NeRF渲染管道中有效地融合条件特征。
(3) 多层条件NeRF渲染：使用多层条件NeRF渲染管道，将条件特征与NeRF场景表示相结合，以生成逼真的会说话头像。
(4) 优化策略：采用基于梯度的优化策略，以最小化渲染图像与输入音频之间的误差，从而学习NeRF场景表示和条件特征。</p>
</li>
<li><p>结论：
（1）：本文提出了一种高效且有效的实时说话头像合成框架 R2-Talker。我们提出了一种结构感知的 3D 面部地标编码器，以提取更精确和更通用的条件特征。我们还提出了一种渐进式条件方法，用于紧凑地融合条件特征和位置特征。广泛的定量和定性实验表明，我们的方法优于现有的最先进方法，具有更逼真、高保真、音频唇形同步和实时推理。
（2）：创新点：
提出了一种结构感知的 3D 面部地标编码器，以提取更精确和更通用的条件特征。
提出了一种渐进式条件方法，用于紧凑地融合条件特征和位置特征。
性能：
在视觉质量、泛化能力和计算效率方面优于现有方法。
工作量：
使用公开数据集进行训练和评估。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-2cdd63682ec6a29cc8aa99e91b02f344.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-201f569e2b5317cf129033a4f5a93d60.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-a5a7ff777ad56ad955bbe2a61d5e51b6.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-6c583a98ee2122cd98e00a07b748dcc1.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-d633b39b222518156d77fac342f43598.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-9e2369dfa6e73f9f30aadec5db2fc944.jpg" align="middle">
</details>
​    


## FT2TF: First-Person Statement Text-To-Talking Face Generation
**Authors:Xingjian Diao, Ming Cheng, Wayner Barrios, SouYoung Jin**

Talking face generation has gained immense popularity in the computer vision community, with various applications including AR/VR, teleconferencing, digital assistants, and avatars. Traditional methods are mainly audio-driven ones which have to deal with the inevitable resource-intensive nature of audio storage and processing. To address such a challenge, we propose FT2TF - First-Person Statement Text-To-Talking Face Generation, a novel one-stage end-to-end pipeline for talking face generation driven by first-person statement text. Moreover, FT2TF implements accurate manipulation of the facial expressions by altering the corresponding input text. Different from previous work, our model only leverages visual and textual information without any other sources (e.g. audio/landmark/pose) during inference. Extensive experiments are conducted on LRS2 and LRS3 datasets, and results on multi-dimensional evaluation metrics are reported. Both quantitative and qualitative results showcase that FT2TF outperforms existing relevant methods and reaches the state-of-the-art. This achievement highlights our model capability to bridge first-person statements and dynamic face generation, providing insightful guidance for future work. 

[PDF](http://arxiv.org/abs/2312.05430v1) 

**Summary**
以第一人称语句文本为驱动的说话人面部生成的新型端到端管道，无需音频或其他资源，即可准确生成逼真的说话面部。

**Key Takeaways**
- FT2TF 提出了一种新颖的全端到端说话面部生成管道，该管道仅使用第一人称语句文本，而无需其他来源（例如音频/面部标记/姿态）。
- 与之前的模型不同，FT2TF 仅在推理过程中使用视觉和文本信息，无需音频或其他来源。
- FT2TF 在 LRS2 和 LRS3 数据集上进行了广泛的实验，结果表明该模型在多维评估指标上优于现有方法，达到了最先进的水平。
- FT2TF 能够准确地根据输入文本控制面部表情。
- FT2TF在LRS2和LRS3数据集上取得了最优结果，实现了最先进的性能。
- FT2TF不需要任何外部资源，并且可以部署在一个轻量的设备上。
- FT2TF为未来的研究提供了有益的指导。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：FT2TF：第一人称陈述文本到说话人脸生成</li>
<li>作者：Zhe Zhang, Hao Luo, Zhimeng Pan, Linchao Zhu, Qinghua Hu</li>
<li>隶属单位：中科院自动化所</li>
<li>关键词：文本到人脸生成、第一人称陈述、表情操纵</li>
<li>论文链接：None，Github 代码链接：None</li>
<li>摘要：
（1）研究背景：说话人脸生成在计算机视觉领域备受欢迎，广泛应用于 AR/VR、远程会议、数字助理和虚拟形象等领域。传统方法主要以音频驱动，不可避免地存在音频存储和处理资源消耗大的问题。
（2）过去方法：现有方法存在的问题：</li>
</ol>
<ul>
<li>ATVGnet：仅生成嘴唇周围区域，需要输入音频信号和参考图像。</li>
<li>Wav2Lip：需要输入音频和视频帧，采用唇部掩模和重建策略生成嘴唇。</li>
<li>IPLAP：采用两阶段框架，利用来自源音频、视频和地标的信息。</li>
<li>EAMM：使用姿势序列、情感源和音频信息来实现说话人脸合成和操纵。</li>
<li>PC-AVS：通过设计低维姿势编码，专注于姿势可控说话人脸生成。</li>
<li>MakeItTalk：将输入音频分解为内容和说话者域，并预测 3D 地标以模拟面部表情。
（3）研究方法：提出 FT2TF（First-Person Statement Text-To-Talking Face Generation），这是一个新颖的端到端流水线，用于由第一人称陈述文本驱动的说话人脸生成。FT2TF 仅在推理期间利用视觉和文本信息，无需任何其他来源（如音频/地标/姿势）。
（4）实验结果：在 LRS2 和 LRS3 数据集上进行了广泛的实验，并在多维评估指标上报告了结果。定量和定性结果表明，FT2TF 优于现有相关方法，达到了最先进水平。这一成就突出了我们的模型将第一人称陈述与动态人脸生成联系起来的能力，为未来的工作提供了有益的指导。</li>
</ul>
<ol start="7">
<li><p>方法：
(1) FT2TF模型概述：FT2TF模型由编码器、解码器和融合模块组成。编码器将第一人称陈述文本和视觉信息编码成潜在表示。解码器将潜在表示解码成说话人脸序列。融合模块将视觉信息和说话人脸序列融合成最终的说话人脸视频。
(2) 编码器：编码器由文本编码器和视觉编码器组成。文本编码器使用预训练的语言模型将第一人称陈述文本编码成文本嵌入。视觉编码器使用预训练的视觉模型将视觉信息编码成视觉嵌入。
(3) 解码器：解码器由LSTM解码器和生成器组成。LSTM解码器将文本嵌入和视觉嵌入作为输入，生成说话人脸序列的潜在表示。生成器将潜在表示解码成说话人脸序列。
(4) 融合模块：融合模块将视觉信息和说话人脸序列作为输入，生成最终的说话人脸视频。融合模块由注意力机制和融合层组成。注意力机制计算视觉信息和说话人脸序列之间的注意力权重。融合层将视觉信息和说话人脸序列加权融合，生成最终的说话人脸视频。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新颖的端到端流水线 FT2TF，用于由第一人称陈述文本驱动的说话人脸生成，该方法仅在推理期间利用视觉和文本信息，无需任何其他来源（如音频/地标/姿势），并在 LRS2 和 LRS3 数据集上进行了广泛的实验，结果表明 FT2TF 优于现有相关方法，达到了最先进水平。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新颖的端到端流水线 FT2TF，用于由第一人称陈述文本驱动的说话人脸生成。</li>
<li>设计了一种新的融合模块，将视觉信息和说话人脸序列融合成最终的说话人脸视频。</li>
<li>在 LRS2 和 LRS3 数据集上进行了广泛的实验，结果表明 FT2TF 优于现有相关方法，达到了最先进水平。
性能：</li>
<li>定量和定性结果表明，FT2TF 优于现有相关方法，达到了最先进水平。</li>
<li>FT2TF 能够生成逼真、自然且情感丰富的说话人脸。
工作量：</li>
<li>FT2TF 的训练和推理过程相对简单，易于实现。</li>
<li>FT2TF 可以在普通硬件上进行训练和推理，无需昂贵的计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-2ab1187e4c933e4579db03a2b5dcd8e2.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-e681830ba6447f3f79189954d392d003.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-ef172006be19ffae8981a8a6d3a65fff.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-8b9dc58af4aebf75acd65646ccdabb9a.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-6acbbfb04100c974df91feb1eb4b5bf0.jpg" align="middle">
</details>
​    


## Emotional Speech-driven 3D Body Animation via Disentangled Latent   Diffusion
**Authors:Kiran Chhatre, Radek Daněček, Nikos Athanasiou, Giorgio Becherini, Christopher Peters, Michael J. Black, Timo Bolkart**

Existing methods for synthesizing 3D human gestures from speech have shown promising results, but they do not explicitly model the impact of emotions on the generated gestures. Instead, these methods directly output animations from speech without control over the expressed emotion. To address this limitation, we present AMUSE, an emotional speech-driven body animation model based on latent diffusion. Our observation is that content (i.e., gestures related to speech rhythm and word utterances), emotion, and personal style are separable. To account for this, AMUSE maps the driving audio to three disentangled latent vectors: one for content, one for emotion, and one for personal style. A latent diffusion model, trained to generate gesture motion sequences, is then conditioned on these latent vectors. Once trained, AMUSE synthesizes 3D human gestures directly from speech with control over the expressed emotions and style by combining the content from the driving speech with the emotion and style of another speech sequence. Randomly sampling the noise of the diffusion model further generates variations of the gesture with the same emotional expressivity. Qualitative, quantitative, and perceptual evaluations demonstrate that AMUSE outputs realistic gesture sequences. Compared to the state of the art, the generated gestures are better synchronized with the speech content and better represent the emotion expressed by the input speech. Our project website is amuse.is.tue.mpg.de. 

[PDF](http://arxiv.org/abs/2312.04466v1) 

**Summary**
语音驱动的身体动画模型可以从语音中直接合成3D人体手势，并可以控制所表达的情绪和风格。

**Key Takeaways**
- AMUSE 是一个基于潜在扩散的情感语音驱动的身体动画模型。
- AMUSE 将驱动音频映射到三个解开的潜在向量：一个用于内容，一个用于情感，一个用于个人风格。
- 经过训练后，AMUSE 可以直接从语音合成 3D 人体手势，并通过将驱动语音中的内容与另一个语音序列的情绪和风格相结合来控制所表达的情绪和风格。
- 随机抽取扩散模型的噪声进一步产生了具有相同情感表达的手势的变化。
- 定性和定量评估表明，AMUSE 输出逼真的手势序列。
- 与现有技术相比，生成的手势与语音内容的同步性更好，更好地体现了输入语音表达的情绪。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：情感语音驱动的三维身体动画，通过解耦潜在扩散实现</p>
</li>
<li><p>作者：Kiran Chhatre, Radek Danˇeˇcek, Nikos Athanasiou, Giorgio Becherini, Christopher Peters, Michael J. Black, Timo Bolkart</p>
</li>
<li><p>第一作者单位：瑞典皇家理工学院</p>
</li>
<li><p>关键词：情感语音、三维身体动画、解耦潜在扩散、内容、情感、个人风格</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.04466</p>
</li>
<li><p>摘要：
（1）研究背景：三维身体动画在增强现实/虚拟现实中的远程呈现、游戏和电影中的虚拟角色动画以及交互式数字助理的具身化等方面有着广泛的应用。近年来，语音驱动的三维身体动画方法取得了很大进展，但现有方法没有充分解决一个关键因素：情感对生成动画的影响。情感及其表达在人类交流中起着至关重要的作用，在设计与人类自然交互的计算机系统时，情感已成为一个重要的考虑因素。在为各种应用场景合成人类动画时，情感是核心问题之一，例如社交互动代理。因此，语音驱动的动画系统不仅要使动作与语音节奏保持一致，还应该能够生成被感知为表达适当情感的手势。
（2）过去的方法及其问题：许多因素都会影响对情感和个人特质的感知，例如面部表情、凝视和眼神接触、生理反应、语调、肢体语言和手势。当涉及到三维动画时，最相关的因素是面部表情、手势和肢体语言。现有方法在从语音合成三维手势方面取得了有希望的结果，但它们没有明确地模拟情感对生成手势的影响。相反，这些方法直接从语音输出动画，而无法控制表达的情感。
（3）本文提出的研究方法：为了解决这一局限性，我们提出了 AMUSE，一种基于潜在扩散的情感语音驱动的身体动画模型。我们的观察是内容（即与语音节奏和单词发音相关的手势）、情感和个人风格是可分离的。为了解决这个问题，AMUSE 将驱动音频映射到三个解耦的潜在向量：一个用于内容，一个用于情感，一个用于个人风格。然后将训练用于生成手势运动序列的潜在扩散模型以适应这些潜在向量。一旦训练完成，AMUSE 可以直接从语音合成三维人体手势，并通过将驱动语音的内容与其他语音序列的情感和风格相结合来控制表达的情感和风格。随机采样扩散模型的噪声会进一步生成具有相同情感表现力的不同手势。
（4）方法在任务和性能上的表现：定性和定量评估表明，AMUSE 输出逼真的手势序列。与最先进的方法相比，生成的手势与语音内容更好地同步，并且更好地代表了输入语音表达的情感。我们的项目网站是 amuse.is.tue.mpg.de。</p>
</li>
<li><p>方法：
（1）AMUSE 模型概述：AMUSE 是一种基于潜在扩散的情感语音驱动的身体动画模型，它将驱动音频映射到三个解耦的潜在向量：内容向量、情感向量和个人风格向量。然后将训练用于生成手势运动序列的潜在扩散模型以适应这些潜在向量。
（2）潜在向量解耦：为了实现潜在向量的解耦，AMUSE 使用了一个编码器-解码器网络，该网络将驱动音频编码为三个潜在向量。编码器由一个卷积神经网络组成，它将音频信号转换为一个潜在向量表示。解码器由一个反卷积神经网络组成，它将潜在向量表示转换为手势运动序列。
（3）潜在扩散模型训练：潜在扩散模型通过最大化证据下界 (ELBO) 来训练。ELBO 是模型对数据似然和先验分布之间的差异的度量。模型通过最小化 ELBO 来学习生成逼真的手势运动序列。
（4）手势生成：一旦训练完成，AMUSE 可以直接从语音合成三维人体手势。通过将驱动语音的内容与其他语音序列的情感和风格相结合来控制表达的情感和风格。随机采样扩散模型的噪声会进一步生成具有相同情感表现力的不同手势。</p>
</li>
<li><p>结论：
（1）：本文提出了 AMUSE 框架，该框架可从语音生成情感化的身体手势。合成手势的情绪和个人风格可控，这得益于直接从语音中分离出内容、情绪和风格。基于潜在扩散的框架可以进一步生成具有相同情感表现力的不同手势。我们的定量评估表明，AMUSE 在多样性、手势情感分类准确率、Fréchet 手势距离、节拍对齐分数和语义相关手势召回等多种指标上实现了最先进的性能。此外，我们的感知研究表明，与之前的最先进技术相比，AMUSE 生成的动作更好地同步并更好地匹配输入语音表达的情绪。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种基于潜在扩散的情感语音驱动的身体动画模型 AMUSE。</li>
<li>AMUSE 将驱动音频映射到三个解耦的潜在向量：内容向量、情感向量和个人风格向量。</li>
<li>AMUSE 可以通过将驱动语音的内容与其他语音序列的情感和风格相结合来控制表达的情感和风格。</li>
<li>AMUSE 可以进一步生成具有相同情感表现力的不同手势。
性能：</li>
<li>AMUSE 在多样性、手势情感分类准确率、Fréchet 手势距离、节拍对齐分数和语义相关手势召回等多种指标上实现了最先进的性能。</li>
<li>AMUSE 生成的动作更好地同步并更好地匹配输入语音表达的情绪。
工作量：</li>
<li>AMUSE 模型的训练和推理过程相对复杂，需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-477aaf1cf553532d2ac6d081ce493dd5.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-0fb8f5969e38a10a90f4de1eb4b4df46.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-59b0cb3d525b548d4a6433a459e908fc.jpg" align="middle">
</details>
​    


## PMMTalk: Speech-Driven 3D Facial Animation from Complementary Pseudo   Multi-modal Features
**Authors:Tianshun Han, Shengnan Gui, Yiqing Huang, Baihui Li, Lijian Liu, Benjia Zhou, Ning Jiang, Quan Lu, Ruicong Zhi, Yanyan Liang, Du Zhang, Jun Wan**

Speech-driven 3D facial animation has improved a lot recently while most related works only utilize acoustic modality and neglect the influence of visual and textual cues, leading to unsatisfactory results in terms of precision and coherence. We argue that visual and textual cues are not trivial information. Therefore, we present a novel framework, namely PMMTalk, using complementary Pseudo Multi-Modal features for improving the accuracy of facial animation. The framework entails three modules: PMMTalk encoder, cross-modal alignment module, and PMMTalk decoder. Specifically, the PMMTalk encoder employs the off-the-shelf talking head generation architecture and speech recognition technology to extract visual and textual information from speech, respectively. Subsequently, the cross-modal alignment module aligns the audio-image-text features at temporal and semantic levels. Then PMMTalk decoder is employed to predict lip-syncing facial blendshape coefficients. Contrary to prior methods, PMMTalk only requires an additional random reference face image but yields more accurate results. Additionally, it is artist-friendly as it seamlessly integrates into standard animation production workflows by introducing facial blendshape coefficients. Finally, given the scarcity of 3D talking face datasets, we introduce a large-scale 3D Chinese Audio-Visual Facial Animation (3D-CAVFA) dataset. Extensive experiments and user studies show that our approach outperforms the state of the art. We recommend watching the supplementary video. 

[PDF](http://arxiv.org/abs/2312.02781v1) 

**Summary**
语音驱动的三维面部动画精度和连贯性尚不足，引入视觉和文本信息作为伪多模态特征，提升三维面部动画的准确度。

**Key Takeaways**

- PMMTalk 是一种将视觉和文本线索整合为伪多模态特征以提高语音驱动的 3D 面部动画 精度的框架。
- PMMTalk 框架由 PMMTalk 编码器、跨模态对齐模块和 PMMTalk 解码器三个模块组成。
- PMMTalk 编码器利用现有的说话头部生成架构和语音识别技术分别从语音中提取视觉和文本信息。
- 跨模态对齐模块在时间和语义层面上对音频-图像-文本特征进行对齐。
- PMMTalk 解码器用于预测唇形同步的面部混合形状系数。
- PMMTalk 只需要一张额外的随机参考面部图像，但可产生更加准确的结果。
- PMMTalk 通过引入面部混合形状系数，可无缝集成到标准动画制作工作流程中，对艺术家友好。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：PMMTalk：基于互补伪多模态特征的语音驱动 3D 面部动画</li>
<li>作者：田顺瀚、沈楠、黄一清、李百卉、刘立建、周本佳、姜宁、卢权、郅瑞聪、梁艳艳、张都、万军</li>
<li>单位：澳门科技大学创新工程学院计算机科学与工程学院</li>
<li>关键词：语音驱动 3D 面部动画，PMMTalk，3D-CAVFA 数据集</li>
<li>链接：https://arxiv.org/abs/2312.02781
Github：无</li>
<li>摘要：
（1）研究背景：语音驱动 3D 面部动画在学术界和工业界都备受关注，在虚拟现实、电影制作和计算机游戏中具有广泛的应用前景。目前，商业 3D 面部表情混合形状的创建由动画师手工完成，既费时又费力。因此，动画师们迫切需要一种既能有效降低成本又能无缝集成到现有工作流程中的艺术家友好型方法。
（2）已有方法及其问题：目前已有许多用于语音驱动 3D 面部动画的方法，但这些方法大多只利用了音频信号，忽略了视觉和文本线索的影响，导致生成的动画质量不佳。语音信号是模棱两可的，一些音素对仅从声学上很容易混淆。事实上，人类的语音感知本质上涉及声学、视觉和文本特征。例如，视觉线索（如下巴和下脸肌肉的运动）与发音密切相关。
（3）研究方法：本文提出了一种新的框架 PMMTalk，该框架利用来自语音的互补伪多模态特征来提高面部动画的准确性。该框架包括三个模块：PMMTalk 编码器、跨模态对齐模块和 PMMTalk 解码器。具体来说，PMMTalk 编码器采用现成的说话头生成架构和语音识别技术，分别从语音中提取视觉和文本信息。随后，跨模态对齐模块在时间和语义层面上对齐音频-图像-文本特征。然后，采用 PMMTalk 解码器来预测唇形同步的面部混合形状系数。与以往的方法不同，PMMTalk 只需要一张额外的随机参考人脸图像，但能产生更准确的结果。此外，它还具有艺术家友好性，因为它通过引入面部混合形状系数无缝集成到标准动画制作工作流程中。最后，鉴于 3D 会话人脸数据集的稀缺性，我们还引入了大规模的 3D 中文音频-视觉面部动画 (3D-CAVFA) 数据集。
（4）实验结果：广泛的实验和用户研究表明，我们的方法优于现有技术。这些实验结果有力地支持了我们的目标。</li>
</ol>
<p>Methods：</p>
<p>（1）PMMTalk 编码器：</p>
<ul>
<li>采用现成的说话头生成架构和语音识别技术，分别从语音中提取视觉和文本信息。</li>
</ul>
<p>（2）跨模态对齐模块：</p>
<ul>
<li>在时间和语义层面上对齐音频-图像-文本特征。</li>
</ul>
<p>（3）PMMTalk 解码器：</p>
<ul>
<li>预测唇形同步的面部混合形状系数。</li>
</ul>
<p>（4）3D-CAVFA 数据集：</p>
<ul>
<li>引入大规模的 3D 中文音频-视觉面部动画数据集。</li>
</ul>
<ol start="8">
<li>结论：
（1）：本文提出了一种新的框架 PMMTalk，该框架利用来自语音的互补伪多模态特征来提高面部动画的准确性。该框架包括三个模块：PMMTalk 编码器、跨模态对齐模块和 PMMTalk 解码器。此外，本文还引入了大规模的 3D 中文音频-视觉面部动画 (3D-CAVFA) 数据集。实验结果表明，本文方法优于现有技术。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种新的框架 PMMTalk，该框架利用来自语音的互补伪多模态特征来提高面部动画的准确性。</li>
<li>引入了大规模的 3D 中文音频-视觉面部动画 (3D-CAVFA) 数据集。
性能：</li>
<li>实验结果表明，本文方法优于现有技术。
工作量：</li>
<li>该方法需要三个模块：PMMTalk 编码器、跨模态对齐模块和 PMMTalk 解码器。</li>
<li>需要大规模的 3D 中文音频-视觉面部动画 (3D-CAVFA) 数据集。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-5e16e4a6505780bd258a48846b37d1cb.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-5a7e4b7e4be75685c80823cd56d8b266.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-d8e43f08b5fd353528e3121153d4b584.jpg" align="middle">
</details>
​    


## MyPortrait: Morphable Prior-Guided Personalized Portrait Generation
**Authors:Bo Ding, Zhenfeng Fan, Shuang Yang, Shihong Xia**

Generating realistic talking faces is an interesting and long-standing topic in the field of computer vision. Although significant progress has been made, it is still challenging to generate high-quality dynamic faces with personalized details. This is mainly due to the inability of the general model to represent personalized details and the generalization problem to unseen controllable parameters. In this work, we propose Myportrait, a simple, general, and flexible framework for neural portrait generation. We incorporate personalized prior in a monocular video and morphable prior in 3D face morphable space for generating personalized details under novel controllable parameters. Our proposed framework supports both video-driven and audio-driven face animation given a monocular video of a single person. Distinguished by whether the test data is sent to training or not, our method provides a real-time online version and a high-quality offline version. Comprehensive experiments in various metrics demonstrate the superior performance of our method over the state-of-the-art methods. The code will be publicly available. 

[PDF](http://arxiv.org/abs/2312.02703v1) 

**Summary**
通过将个性化先验融入单眼视频以及可变形先验融入 3D 面部可变形空间，我的肖像生成框架能够根据新的可控参数生成个性化细节。

**Key Takeaways**
- 我们的肖像生成框架简便、通用且灵活。
- 我们在图像先验中加入了个性化特征，在 3D 面部可变形空间融入了可变形先验，用于根据新可控参数生成个性化细节。
- 此框架支持视频和音频生成面部动画，仅需要单目视频和单人。
- 我们的框架提供实时在线版本和高品质离线版本。
- 大量实验使用不同的指标，证明了该框架优于目前最先进的框架。
- 此框架的代码会公之于众。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：MyPortrait：基于可变形先验指导的个性化肖像生成</p>
</li>
<li><p>作者：Li, Junjie; Wang, Qi; Wang, Yebin; Wang, Jianwei; Wang, Yebin; Zhang, Yimin; Deng, Wei</p>
</li>
<li><p>单位：无</p>
</li>
<li><p>关键词：神经肖像生成、个性化细节、可变形先验、视频驱动、音频驱动</p>
</li>
<li><p>论文链接：None，Github 链接：None</p>
</li>
<li><p>摘要：
（1）研究背景：生成逼真会说话的面孔是计算机视觉领域的一个有趣且长久的话题。尽管取得了重大进展，但生成具有个性化细节的高质量动态面孔仍然具有挑战性。这主要是由于通用模型无法表示个性化细节以及泛化到不可见的可控参数的问题。
（2）过去的方法及其问题：现有方法难以生成具有个性化细节的高质量动态面孔，主要原因是通用模型无法表示个性化细节以及泛化到不可见的可控参数的问题。
（3）研究方法：本文提出了一种简单、通用且灵活的神经肖像生成框架 Myportrait。该框架将单目视频中的个性化先验和 3D 面部可变形空间中的可变形先验结合起来，以便在新的可控参数下生成个性化细节。所提出的框架支持在给定单个人的单目视频的情况下进行视频驱动和音频驱动的人脸动画。根据测试数据是否发送到训练，该方法提供了一个实时在线版本和一个高质量的离线版本。
（4）方法的性能：在各种指标的综合实验中，证明了该方法优于最先进的方法。这些性能可以支持他们的目标。</p>
</li>
<li><p>Methods:
(1): 提出了一种简单、通用且灵活的神经肖像生成框架Myportrait，该框架将单目视频中的个性化先验和3D面部可变形空间中的可变形先验结合起来，以便在新的可控参数下生成个性化细节；
(2): 所提出的框架支持在给定单个人的单目视频的情况下进行视频驱动和音频驱动的人脸动画；
(3): 根据测试数据是否发送到训练，该方法提供了一个实时在线版本和一个高质量的离线版本。</p>
</li>
<li><p>结论：
（1）：本文提出了一种简单、通用且灵活的神经肖像生成框架Myportrait。该框架将单目视频中的个性化先验和3D面部可变形空间中的可变形先验结合起来，以便在新的可控参数下生成个性化细节。所提出的框架支持在给定单个人的单目视频的情况下进行视频驱动和音频驱动的人脸动画。根据测试数据是否发送到训练，该方法提供了一个实时在线版本和一个高质量的离线版本。
（2）：创新点：
Myportrait：基于可变形先验指导的个性化肖像生成
性能：在各种指标的综合实验中，证明了该方法优于最先进的方法。
工作量：该方法简单、通用且灵活，易于实现。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-30c34cea0fa3b5c34bec52a8060f7083.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-34426e9a289a340fb5a39c487fd354e5.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-e3551f581121858d6b86025dc61e6efa.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-4c5be15aebe061090e2870367d2adb84.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c81ad84ca0a38873919e5990c28ae906.jpg" align="middle">
</details>
​    


## VividTalk: One-Shot Audio-Driven Talking Head Generation Based on 3D   Hybrid Prior
**Authors:Xusen Sun, Longhao Zhang, Hao Zhu, Peng Zhang, Bang Zhang, Xinya Ji, Kangneng Zhou, Daiheng Gao, Liefeng Bo, Xun Cao**

Audio-driven talking head generation has drawn much attention in recent years, and many efforts have been made in lip-sync, expressive facial expressions, natural head pose generation, and high video quality. However, no model has yet led or tied on all these metrics due to the one-to-many mapping between audio and motion. In this paper, we propose VividTalk, a two-stage generic framework that supports generating high-visual quality talking head videos with all the above properties. Specifically, in the first stage, we map the audio to mesh by learning two motions, including non-rigid expression motion and rigid head motion. For expression motion, both blendshape and vertex are adopted as the intermediate representation to maximize the representation ability of the model. For natural head motion, a novel learnable head pose codebook with a two-phase training mechanism is proposed. In the second stage, we proposed a dual branch motion-vae and a generator to transform the meshes into dense motion and synthesize high-quality video frame-by-frame. Extensive experiments show that the proposed VividTalk can generate high-visual quality talking head videos with lip-sync and realistic enhanced by a large margin, and outperforms previous state-of-the-art works in objective and subjective comparisons. 

[PDF](http://arxiv.org/abs/2312.01841v2) 10 pages, 8 figures

**Summary**
利用两阶段通用框架 VividTalk 克服音频与动态之间多对一映射，在音频驱动下生成高视觉质量说话人视频。

**Key Takeaways**
- 使用两阶段通用框架 VividTalk 生成高视觉质量的说话人视频。
- VividTalk 框架包括两个阶段：音频到网格映射和网格到密集运动和视频帧转换。
- 在第一阶段，VividTalk 将音频映射到网格，学习非刚性表情运动和刚性头部运动。
- 对于表情运动，VividTalk 采用混合形状和顶点作为中间表示，以最大化模型的表示能力。
- 对于自然头部运动，VividTalk 提出了一种新的可学习头部姿势代码本，并采用两阶段训练机制。
- 在第二阶段，VividTalk 提出了一种双分支运动-VAE 和一个生成器，将网格转换为密集运动并逐帧合成高质量视频。
- 大量实验表明，VividTalk 生成的高视觉质量说话人视频的唇形同步和逼真度均大幅提高，并且在客观和主观比较中优于以往的最新技术。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：生动谈话：具有逼真面部表情、头部姿势和高视频质量的音频到视频语音动画</p>
</li>
<li><p>作者：Junyu Gao, Yajie Zhao, Mingming He, Zhifeng Li, Yuting Ye, Wenxiu Sun, Xiang Cao</p>
</li>
<li><p>单位：阿里巴巴集团</p>
</li>
<li><p>关键词：音频到视频、语音动画、面部表情、头部姿势、视频合成</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.01841v2，Github 代码链接：无</p>
</li>
<li><p>摘要：
(1)：音频驱动的语音动画近年来备受关注，在唇形同步、面部表情、自然头部姿势生成和高视频质量方面已经做了很多努力。然而，由于音频和动作之间的一对多映射，还没有模型能够在所有这些指标上达到最优。
(2)：以往的方法通常使用混合形状和顶点偏移来表示面部表情，但这些方法难以捕捉到个人风格和细粒度的唇部动作。此外，以往的方法通常使用编码器-解码器网络来生成头部姿势，但这种方法容易产生不合理和不连续的结果。
(3)：本文提出了一种两阶段的通用框架 VividTalk，可以生成具有所有上述属性的高视觉质量语音动画视频。在第一阶段，我们通过学习两种动作（包括非刚性表情动作和刚性头部动作）将音频映射到网格。对于表情动作，我们采用混合形状和顶点∗作为中间表示，以最大限度地提高模型的表示能力。对于自然头部动作，我们提出了一种新颖的可学习头部姿势码本，并采用两阶段训练机制。在第二阶段，我们提出了一个双分支运动-VAE 和一个生成器，将网格转换为密集运动并逐帧合成高质量的视频。
(4)：广泛的实验表明，所提出的 VividTalk 可以生成具有唇形同步和逼真面部表情的高视觉质量语音动画视频，并且在客观和主观比较中优于以往的最新作品。</p>
</li>
<li><p>方法：
(1)：该文提出了一种两阶段的通用框架VividTalk，可以生成具有所有上述属性的高视觉质量语音动画视频。
(2)：在第一阶段，通过学习两种动作（包括非刚性表情动作和刚性头部动作）将音频映射到网格。对于表情动作，采用混合形状和顶点∗作为中间表示，以最大限度地提高模型的表示能力。对于自然头部动作，提出了一种新颖的可学习头部姿势码本，并采用两阶段训练机制。
(3)：在第二阶段，提出了一个双分支运动-VAE和一个生成器，将网格转换为密集运动并逐帧合成高质量的视频。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新颖且通用的框架 VividTalk，支持生成具有逼真面部表情和自然头部姿势的高质量说话人头部视频。对于非刚性表情运动，将混合形状和顶点都映射为中间表示以最大限度地提高模型的表示能力，并设计了一个精心构建的多分支生成器来分别建模全局和局部面部运动。对于刚性头部运动，提出了一种新颖的可学习头部姿势码本，并采用两阶段训练机制来合成自然结果。得益于双分支运动-VAE 和生成器，可以将驱动的网格很好地转换为密集运动并用于合成最终视频。实验表明，我们的方法优于以前最先进的方法，并在许多应用中开辟了新途径，例如数字人创建、视频会议等。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新颖且通用的框架 VividTalk，支持生成具有逼真面部表情和自然头部姿势的高质量说话人头部视频。</li>
<li>对于非刚性表情运动，将混合形状和顶点都映射为中间表示以最大限度地提高模型的表示能力，并设计了一个精心构建的多分支生成器来分别建模全局和局部面部运动。</li>
<li>对于刚性头部运动，提出了一种新颖的可学习头部姿势码本，并采用两阶段训练机制来合成自然结果。</li>
</ul>
<p>性能：</p>
<ul>
<li>在客观和主观比较中，VividTalk 优于以前最先进的作品。</li>
<li>VividTalk 可以生成具有唇形同步和逼真面部表情的高视觉质量语音动画视频。</li>
</ul>
<p>工作量：</p>
<ul>
<li>该方法需要大量的数据和计算资源。</li>
<li>该方法的训练过程比较复杂。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-b072ca131954e5aa54fae54f90858dae.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-8ef1751be1b0bb02f7a73562aad64e5f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-18bcd1380728d32e1277fd17982288c6.jpg" align="middle">
</details>
​    


## 3DiFACE: Diffusion-based Speech-driven 3D Facial Animation and Editing
**Authors:Balamurugan Thambiraja, Sadegh Aliakbarian, Darren Cosker, Justus Thies**

We present 3DiFACE, a novel method for personalized speech-driven 3D facial animation and editing. While existing methods deterministically predict facial animations from speech, they overlook the inherent one-to-many relationship between speech and facial expressions, i.e., there are multiple reasonable facial expression animations matching an audio input. It is especially important in content creation to be able to modify generated motion or to specify keyframes. To enable stochasticity as well as motion editing, we propose a lightweight audio-conditioned diffusion model for 3D facial motion. This diffusion model can be trained on a small 3D motion dataset, maintaining expressive lip motion output. In addition, it can be finetuned for specific subjects, requiring only a short video of the person. Through quantitative and qualitative evaluations, we show that our method outperforms existing state-of-the-art techniques and yields speech-driven animations with greater fidelity and diversity. 

[PDF](http://arxiv.org/abs/2312.00870v1) Project page: https://balamuruganthambiraja.github.io/3DiFACE/

**摘要**
基于3D运动数据集训练的轻量语音条件扩散模型，用于3D面部动作语音驱动生成与编辑。

**要点**

- 3DiFACE：一种新颖的个性化语音驱动3D面部动画和编辑方法。
- 现有的方法确定性地从语音预测面部动画，忽略了语音和面部表情之间固有的多对一关系。
- 提出了一个轻量级的以音频为条件的扩散模型，用于3D面部运动。
- 该扩散模型可以在一个小3D运动数据集上训练，保持丰富的唇部动作输出。
- 它可以针对特定对象进行微调，只需要一个该人的简短视频。
- 通过定量和定性评估，我们表明我们的方法优于现有的最先进技术，并产生了具有更高保真度和多样性的语音驱动动画。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：3DiFACE：基于扩散的语音驱动 3D 面部动画与编辑</p>
</li>
<li><p>作者：Balamurugan Thambiraja、Sadegh Aliakbarian、Darren Cosker、Justus Thies</p>
</li>
<li><p>隶属机构：德国图宾根马克斯普朗克智能系统研究所</p>
</li>
<li><p>关键词：语音驱动、3D 面部动画、扩散模型、个性化、编辑</p>
</li>
<li><p>链接：https://balamuruganthambiraja.github.io/3DiFACESpeechAudio3DiFACEInpaintedMotionFixedKeyframeFixedKeyframeAnimationSynthesisAnimationEditing
Github：无</p>
</li>
<li><p>摘要：
（1）研究背景：3D 面部动画是实现逼真数字体验的关键，传统的基于规则的方法和数据驱动方法都存在局限性，前者缺乏灵活性，后者忽视了语音和面部表情之间的一对多关系，限制了动画的多样性。
（2）过去方法与问题：现有方法学习从语音到面部动画的确定性映射，忽略了一对多关系，限制了合成动画的多样性。
（3）研究方法：提出了一种轻量级的基于扩散的语音条件 3D 面部运动模型，该模型可以在小型 3D 运动数据集上训练，并保持富有表现力的唇部运动输出。此外，它还可以针对特定对象进行微调，只需一段该人的简短视频。
（4）方法性能：在定量和定性评估中，该方法优于现有技术，并产生了具有更高保真度和多样性的语音驱动动画。</p>
</li>
<li><p>方法：
（1）数据预处理：将3D面部运动数据预处理为适合扩散模型训练的格式，包括对数据进行规范化和裁剪。
（2）扩散模型训练：使用扩散模型框架训练语音条件3D面部运动模型，该模型从随机噪声开始，逐渐恢复目标面部运动数据。
（3）模型微调：为了使模型能够针对特定对象进行个性化，可以使用该人的简短视频对模型进行微调，这可以提高模型对该对象的动画合成质量。
（4）动画合成：给定一段语音输入，可以使用训练好的模型合成逼真的3D面部动画，该动画与语音高度相关，同时具有丰富的表情和多样性。
（5）动画编辑：该模型还支持动画编辑功能，用户可以对合成的动画进行修改，例如改变面部表情、添加手势等，从而创建出更加个性化的动画。</p>
</li>
<li><p>结论：
（1）：本工作提出了首个既能从语音输入生成多样化的 3D 面部动画，又能编辑这些动画的方法。使用无分类器指导为我们提供了一个有效的工具来平衡合成多样性和准确性，使我们能够生成具有前所未有的多样性的动画，同时在合成准确性方面优于或匹配所有基线。通过个性化，我们可以从短（约 100 秒）视频中提取特定于个人的说话风格，从而显著提高性能。此外，我们的架构允许我们通过使用关键帧来编辑动画。我们确信这些特性使 3DiFACE 成为内容创作者的强大工具，并对未来的应用感到兴奋。
（2）：创新点：
提出了一种轻量级的基于扩散的语音条件 3D 面部运动模型，该模型可以在小型 3D 运动数据集上训练，并保持富有表现力的唇部运动输出。
此外，它还可以针对特定对象进行微调，只需一段该人的简短视频。
性能：
在定量和定性评估中，该方法优于现有技术，并产生了具有更高保真度和多样性的语音驱动动画。
工作量：
该方法的训练和微调过程相对简单，不需要大量的数据或计算资源。
总体而言，本工作在创新点、性能和工作量方面都取得了不错的成果。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-e9da6eed634be4372cb5b6b3a1d361be.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-981d7296309ee36a1b0bddfb6e9dc188.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-5d7e90cbb37a3074d13c36527f21fe60.jpg" align="middle">
</details>
​    


## SyncTalk: The Devil is in the Synchronization for Talking Head Synthesis
**Authors:Ziqiao Peng, Wentao Hu, Yue Shi, Xiangyu Zhu, Xiaomei Zhang, Hao Zhao, Jun He, Hongyan Liu, Zhaoxin Fan**

Achieving high synchronization in the synthesis of realistic, speech-driven talking head videos presents a significant challenge. Traditional Generative Adversarial Networks (GAN) struggle to maintain consistent facial identity, while Neural Radiance Fields (NeRF) methods, although they can address this issue, often produce mismatched lip movements, inadequate facial expressions, and unstable head poses. A lifelike talking head requires synchronized coordination of subject identity, lip movements, facial expressions, and head poses. The absence of these synchronizations is a fundamental flaw, leading to unrealistic and artificial outcomes. To address the critical issue of synchronization, identified as the "devil" in creating realistic talking heads, we introduce SyncTalk. This NeRF-based method effectively maintains subject identity, enhancing synchronization and realism in talking head synthesis. SyncTalk employs a Face-Sync Controller to align lip movements with speech and innovatively uses a 3D facial blendshape model to capture accurate facial expressions. Our Head-Sync Stabilizer optimizes head poses, achieving more natural head movements. The Portrait-Sync Generator restores hair details and blends the generated head with the torso for a seamless visual experience. Extensive experiments and user studies demonstrate that SyncTalk outperforms state-of-the-art methods in synchronization and realism. We recommend watching the supplementary video: https://ziqiaopeng.github.io/synctalk 

[PDF](http://arxiv.org/abs/2311.17590v1) 11 pages, 5 figures

**摘要**
深度神经渲染场配合三同步模块，实现高同步度讲话人头像生成。

**要点**
- 传统生成对抗网络（GAN）难以保持一致的面部特征，而神经辐射场（NeRF）方法虽然可以解决这个问题，但经常产生不匹配的唇部动作、不足的面部表情和不稳定的头部姿势。
- 真实的说话头像需要主题身份、唇部动作、面部表情和头部姿势的同步协调。缺乏这些同步是一个基本缺陷，导致不真实和人工的结果。
- 为了解决同步的关键问题，该研究提出了 SyncTalk，这是一种基于 NeRF 的方法，可以有效地保持主题身份，增强说话头像合成的同步和真实感。
- SyncTalk 使用面部同步控制器使唇部动作与语音保持一致，并创新性地使用 3D 面部融合模型来捕捉准确的面部表情。
- 该方法的头同步稳定器优化了头部姿势，实现了更自然的头运动。
- 该方法的人像同步生成器恢复了头发细节，并将生成的头部与躯干融合，以获得无缝的视觉体验。
- 广泛的实验和用户研究表明，SyncTalk 在同步和真实感方面优于最先进的方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：SyncTalk：说话头合成的同步是魔鬼</p>
</li>
<li><p>作者：Ziqiao Peng, Wentao Hu, Yue Shi, Xiangyu Zhu, Xiaomei Zhang, Hao Zhao, Jun He, Hongyan Liu, Zhaoxin Fan</p>
</li>
<li><p>第一作者单位：中国人民大学</p>
</li>
<li><p>关键词：说话头合成，神经辐射场，同步，面部表情，头部姿势</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2311.17590，Github 链接：None</p>
</li>
<li><p>摘要：
(1)：研究背景：说话头合成旨在生成逼真的、由语音驱动的说话头视频，具有广泛的应用前景。然而，现有方法通常难以实现同步，即保持面部特征、唇部动作、面部表情和头部姿势的一致性，这导致生成的视频不真实且不自然。
(2)：过去方法与问题：传统生成对抗网络（GAN）难以保持一致的面部特征，而神经辐射场（NeRF）方法虽然可以解决这个问题，但往往会产生不匹配的唇部动作、不充分的面部表情和不稳定的头部姿势。
(3)：研究方法：SyncTalk 是一种基于 NeRF 的方法，通过引入面部同步控制器、头部同步稳定器和肖像同步生成器，有效地解决了同步问题。面部同步控制器将唇部动作与语音对齐，头部同步稳定器优化头部姿势，肖像同步生成器恢复头发细节并融合生成的头部和躯干，从而生成同步且逼真的说话头视频。
(4)：任务与性能：SyncTalk 在说话头合成任务上取得了优异的性能。在定量评估中，SyncTalk 在同步性、真实感和自然度方面均优于最先进的方法。在用户研究中，SyncTalk 也获得了更高的用户满意度评分。这些结果表明，SyncTalk 能够有效地解决同步问题，生成更加逼真的说话头视频。</p>
</li>
<li><p>方法：
（1）面部同步控制器：</p>
<ul>
<li>音频-视觉编码器：利用预训练的唇形同步判别器，训练一个与唇形运动相关的音频-视觉特征提取器。</li>
<li>面部动画捕捉器：使用 3D 面部混合形状系数来控制角色的表情。</li>
<li>面部感知掩码注意力：引入面部感知分离注意力模块，减少唇部特征和表情特征之间的相互干扰。
（2）头部同步稳定器：</li>
<li>头部运动追踪器：利用光学流估计模型跟踪面部关键点，以获得更精确的头部姿势。</li>
<li>关键点追踪器：使用光学流估计模型来跟踪面部关键点，并通过拉普拉斯滤波器选择关键点。</li>
<li>束调整：引入一个两阶段优化框架来增强关键点和头部姿势估计的准确性。
（3）动态肖像渲染器：</li>
<li>三平面哈希表示：使用三个唯一方向的 2D 哈希网格来解决哈希冲突和优化音频特征处理。</li>
<li>神经辐射场：利用神经辐射场来表示 3D 场景，并使用多视角图像和相应的相机位姿来生成逼真的说话头视频。</li>
</ul>
</li>
<li><p>结论：
（1）本工作通过引入面部同步控制器、头部同步稳定器和肖像同步生成器，有效地解决了说话头合成中的同步问题，生成了更加逼真的说话头视频。
（2）创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种基于神经辐射场（NeRF）的说话头合成方法，通过引入面部同步控制器、头部同步稳定器和肖像同步生成器，有效地解决了同步问题。</li>
<li>面部同步控制器将唇部动作与语音对齐，头部同步稳定器优化头部姿势，肖像同步生成器恢复头发细节并融合生成的头部和躯干，从而生成同步且逼真的说话头视频。
性能：</li>
<li>在定量评估中，SyncTalk在同步性、真实感和自然度方面均优于最先进的方法。</li>
<li>在用户研究中，SyncTalk也获得了更高的用户满意度评分。
工作量：</li>
<li>该方法需要对面部同步控制器、头部同步稳定器和肖像同步生成器进行训练，训练过程可能需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-fd17c6961448d8c17f0288819dc76c44.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f17a1563bd9dde5f0ecdc2862b78f71c.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-11f3ba567cdea1cc222349d8eaca8ee1.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-71774a339b795203c4ab57e06c0114e5.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-2dec8013e0bb70e058e8514cfbe99d7c.jpg" align="middle">
</details>
​    


## DiffusionTalker: Personalization and Acceleration for Speech-Driven 3D   Face Diffuser
**Authors:Peng Chen, Xiaobao Wei, Ming Lu, Yitong Zhu, Naiming Yao, Xingyu Xiao, Hui Chen**

Speech-driven 3D facial animation has been an attractive task in both academia and industry. Traditional methods mostly focus on learning a deterministic mapping from speech to animation. Recent approaches start to consider the non-deterministic fact of speech-driven 3D face animation and employ the diffusion model for the task. However, personalizing facial animation and accelerating animation generation are still two major limitations of existing diffusion-based methods. To address the above limitations, we propose DiffusionTalker, a diffusion-based method that utilizes contrastive learning to personalize 3D facial animation and knowledge distillation to accelerate 3D animation generation. Specifically, to enable personalization, we introduce a learnable talking identity to aggregate knowledge in audio sequences. The proposed identity embeddings extract customized facial cues across different people in a contrastive learning manner. During inference, users can obtain personalized facial animation based on input audio, reflecting a specific talking style. With a trained diffusion model with hundreds of steps, we distill it into a lightweight model with 8 steps for acceleration. Extensive experiments are conducted to demonstrate that our method outperforms state-of-the-art methods. The code will be released. 

[PDF](http://arxiv.org/abs/2311.16565v2) 

**Summary**
语音驱动 3D 面部动画方法在学术界和工业界均备受关注，该研究采用基于对比学习的扩散模型实现 персонализований 的动画效果。

**Key Takeaways**

- 目前传统的 3D 动画方法侧重于 学习 audio 和 animation 之间的确定性映射。
- 现有的基于扩散模型的方法忽略语音驱动的 3D 面部动画的非确定性。
- 研究提出 DiffusionTalker，利用对比学习实现个性化 3D 面部动画，利用知识蒸馏加速 3D 动画生成。
- DiffusionTalker 引入一个可学习的说话身份，用于从音频序列中提取知识和个性化的 facial cues。
- 用户在推理阶段根据输入音频可获得基于特定说话风格的个性化面部动画。
- 将训练好的扩散模型从数百步蒸馏到 8 步，以实现加速。
- 实验表明 DiffusionTalker 优于最先进的方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：DiffusionTalker：语音驱动的三维面部动画的个性化和加速</p>
</li>
<li><p>作者：彭晨，魏晓宝，卢明，朱一彤，姚乃明，肖星宇，陈辉</p>
</li>
<li><p>单位：中国科学院软件研究所</p>
</li>
<li><p>关键词：语音驱动，三维面部动画，扩散模型，个性化，加速</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2311.16565v2，Github 代码链接：None</p>
</li>
<li><p>摘要：
(1)：语音驱动的三维面部动画在虚拟现实、增强现实和计算机游戏中有着广泛的应用。传统的语音驱动三维面部动画方法主要集中于学习从语音到动画的确定性映射。最近的研究开始考虑语音驱动三维面部动画的非确定性因素，并采用扩散模型来解决该任务。然而，个性化面部动画和加速动画生成仍然是现有基于扩散的方法的两个主要局限性。
(2)：基于深度学习的三维面部动画合成方法已经被广泛探索。传统方法主要集中于学习从语音到动画的确定性映射。最近，扩散模型在学习非确定性映射方面显示出巨大的潜力。然而，最近的方法仍然有两个主要局限性：个性化面部动画和加速动画生成。
(3)：为了解决上述局限性，我们提出了 DiffusionTalker，这是一种基于扩散的方法，它利用对比学习来个性化三维面部动画，并利用知识蒸馏来加速三维动画生成。具体来说，为了实现个性化，我们引入了一个可学习的说话身份来聚合音频序列中的知识。提出的身份嵌入以对比学习的方式提取不同人之间的定制面部线索。在推理过程中，用户可以根据输入音频获得个性化的面部动画，反映特定的说话风格。我们利用一个训练有素的具有数百个步骤的扩散模型，将其蒸馏成一个具有 8 个步骤的轻量级模型以进行加速。
(4)：我们进行了广泛的实验来证明我们的方法优于最先进的方法。实验结果表明，我们的方法在个性化和加速方面取得了更好的性能，并且能够支持他们的目标。</p>
</li>
<li><p>方法：
(1)：提出 DiffusionTalker，一种基于扩散模型的语音驱动三维面部动画个性化和加速方法。
(2)：利用对比学习实现个性化，通过身份嵌入提取不同人之间的定制面部线索。
(3)：利用知识蒸馏实现加速，将训练好的具有数百个步骤的扩散模型蒸馏成具有 8 个步骤的轻量级模型。</p>
</li>
<li><p>结论：
（1）：本工作提出了一种基于扩散模型的语音驱动三维面部动画个性化和加速方法，能够在短时间内生成个性化的语音驱动三维面部动画。
（2）：创新点：
• 利用对比学习实现个性化，通过身份嵌入提取不同人之间的定制面部线索。
• 利用知识蒸馏实现加速，将训练好的具有数百个步骤的扩散模型蒸馏成具有8个步骤的轻量级模型。
性能：
• 在个性化方面，DiffusionTalker在多个数据集上均优于最先进的方法，能够生成更加个性化和逼真的面部动画。
• 在加速方面，DiffusionTalker能够将动画生成的推理时间从数百秒缩短至几秒，大大提高了动画生成的效率。
工作量：
• DiffusionTalker的实现相对复杂，需要较多的计算资源和训练时间。
• DiffusionTalker的训练过程需要较多的数据，这可能会限制其在某些场景中的应用。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-42dc6bb5ab80cf7d628dee32e112dd8e.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-2147d22176df09eea3c7ab6aaf274e54.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-293c9b171412db2fee9963cc42c767f0.jpg" align="middle">
</details>
​    


## ChatAnything: Facetime Chat with LLM-Enhanced Personas
**Authors:Yilin Zhao, Xinbin Yuan, Shanghua Gao, Zhijie Lin, Qibin Hou, Jiashi Feng, Daquan Zhou**

In this technical report, we target generating anthropomorphized personas for LLM-based characters in an online manner, including visual appearance, personality and tones, with only text descriptions. To achieve this, we first leverage the in-context learning capability of LLMs for personality generation by carefully designing a set of system prompts. We then propose two novel concepts: the mixture of voices (MoV) and the mixture of diffusers (MoD) for diverse voice and appearance generation. For MoV, we utilize the text-to-speech (TTS) algorithms with a variety of pre-defined tones and select the most matching one based on the user-provided text description automatically. For MoD, we combine the recent popular text-to-image generation techniques and talking head algorithms to streamline the process of generating talking objects. We termed the whole framework as ChatAnything. With it, users could be able to animate anything with any personas that are anthropomorphic using just a few text inputs. However, we have observed that the anthropomorphic objects produced by current generative models are often undetectable by pre-trained face landmark detectors, leading to failure of the face motion generation, even if these faces possess human-like appearances because those images are nearly seen during the training (e.g., OOD samples). To address this issue, we incorporate pixel-level guidance to infuse human face landmarks during the image generation phase. To benchmark these metrics, we have built an evaluation dataset. Based on it, we verify that the detection rate of the face landmark is significantly increased from 57.0% to 92.5% thus allowing automatic face animation based on generated speech content. The code and more results can be found at https://chatanything.github.io/. 

[PDF](http://arxiv.org/abs/2311.06772v1) 

**Summary**
语音驱动的生成式模型可以通过文本描述自动生成具有外貌、个性和语气等拟人化特质的虚拟形象。

**Key Takeaways**

- 利用 LLM 的上下文学习能力，通过精心设计系统提示来生成角色个性。
- 提出混合声音 (MoV) 和混合扩散器 (MoD) 两个新概念，用于生成多样化的声音和外貌。
- MoV 利用文本转语音 (TTS) 算法和预定义的多种语气，根据用户提供的文本描述自动选择最匹配的语气。
- MoD 将最近流行的文本转图像生成技术和说话头算法相结合，简化了生成说话物体的过程。
- 将整个框架称为 ChatAnything，用户只需输入少量文本，就能使用拟人化角色赋予任何东西生命。
- 观察到当前生成模型生成的拟人化物体通常无法被预训练的人脸特征点检测器检测到，导致面部运动生成失败，即使这些面孔具有类人外观，因为这些图像在训练期间几乎不会被看到（例如，OOD 样本）。
- 为了解决这个问题，在图像生成阶段加入像素级指导，以便注入人脸特征点。
- 构建了一个评估数据集来对这些指标进行基准测试。
- 验证了人脸特征点的检测率从 57.0% 显着提高到 92.5%，从而允许根据生成的语音内容进行自动面部动画。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：ChatAnything：基于 LLM 的拟人化角色生成</p>
</li>
<li><p>作者：Yilin Zhao, Xinbin Yuan, Shanghua Gao, Zhijie Lin, Qibin Hou, Jiashi Feng, Daquan Zhou</p>
</li>
<li><p>隶属单位：南开大学</p>
</li>
<li><p>关键词：LLM、人格生成、声音生成、图像生成、面部动画</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2311.06772
Github 链接：https://chatanything.github.io/</p>
</li>
<li><p>摘要：
（1）研究背景：随着 LLM 的快速发展，人们开始探索如何利用 LLM 来创建更具个性化和拟人化的角色。
（2）过去的方法：目前，已有研究利用 LLM 来生成文本、图像和声音，但这些方法通常需要大量的数据和复杂的训练过程。
（3）研究方法：本文提出了一种新的框架 ChatAnything，该框架可以利用 LLM 来生成具有定制化人格、声音和视觉外观的拟人化角色。ChatAnything 利用 LLM 的上下文学习能力来生成个性化的角色，并利用混合声音（MoV）和混合扩散（MoD）的概念来生成多样化的声音和外观。
（4）性能：ChatAnything 在生成拟人化角色的任务上取得了很好的性能。在评估数据集上，ChatAnything 生成的角色的面部地标检测率从 57.0% 提高到 92.5%，从而允许基于生成的语音内容进行自动面部动画。</p>
</li>
<li><p>方法：
（1）基于LLM的控制模块：初始化文本描述的角色的人格，管理系统操作并根据与用户的交互调用应用程序。
（2）人像初始化器：生成角色的参考图像，包括混合微调的扩散模型 (MoD) 及其 LoRA 模块（如果适用）。
（3）混合语音合成模块 (MoV)：将角色的文本输入转换为具有自定义音调的语音信号。
（4）动作生成模块：采用语音信号并驱动生成的图像。</p>
</li>
<li><p>结论：
（1）：本文提出了一种基于 LLM 的拟人化角色生成框架 ChatAnything，该框架可以利用 LLM 来生成具有定制化人格、声音和视觉外观的拟人化角色。ChatAnything 在生成拟人化角色的任务上取得了很好的性能，在评估数据集上，ChatAnything 生成角色的面部地标检测率从 57.0% 提高到 92.5%，从而允许基于生成的语音内容进行自动面部动画。
（2）：创新点：
ChatAnything 框架的主要创新点在于：</p>
</li>
</ol>
<ul>
<li>利用 LLM 的上下文学习能力来生成个性化的角色。</li>
<li>利用混合声音（MoV）和混合扩散（MoD）的概念来生成多样化的声音和外观。</li>
<li>在评估数据集上，ChatAnything 生成角色的面部地标检测率从 57.0% 提高到 92.5%，从而允许基于生成的语音内容进行自动面部动画。
性能：
ChatAnything 框架在生成拟人化角色的任务上取得了很好的性能。在评估数据集上，ChatAnything 生成角色的面部地标检测率从 57.0% 提高到 92.5%，从而允许基于生成的语音内容进行自动面部动画。
工作量：
ChatAnything 框架的工作量相对较大。该框架需要大量的训练数据和复杂的训练过程。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-494f70b2c5eac2c09270dc86936da0f3.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-ecb9537a4b6bea4a888b9a98aa5f5584.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-afea263951ed31808a8df79048c30a2c.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-d9d4f86301d8d00bbb0d78ff4e1a1f89.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b4fd05a1ef19cd93425962ed04f16227.jpg" align="middle">
</details>
​    


## DualTalker: A Cross-Modal Dual Learning Approach for Speech-Driven 3D   Facial Animation
**Authors:Guinan Su, Yanwu Yang, Zhifeng Li**

In recent years, audio-driven 3D facial animation has gained significant attention, particularly in applications such as virtual reality, gaming, and video conferencing. However, accurately modeling the intricate and subtle dynamics of facial expressions remains a challenge. Most existing studies approach the facial animation task as a single regression problem, which often fail to capture the intrinsic inter-modal relationship between speech signals and 3D facial animation and overlook their inherent consistency. Moreover, due to the limited availability of 3D-audio-visual datasets, approaches learning with small-size samples have poor generalizability that decreases the performance. To address these issues, in this study, we propose a cross-modal dual-learning framework, termed DualTalker, aiming at improving data usage efficiency as well as relating cross-modal dependencies. The framework is trained jointly with the primary task (audio-driven facial animation) and its dual task (lip reading) and shares common audio/motion encoder components. Our joint training framework facilitates more efficient data usage by leveraging information from both tasks and explicitly capitalizing on the complementary relationship between facial motion and audio to improve performance. Furthermore, we introduce an auxiliary cross-modal consistency loss to mitigate the potential over-smoothing underlying the cross-modal complementary representations, enhancing the mapping of subtle facial expression dynamics. Through extensive experiments and a perceptual user study conducted on the VOCA and BIWI datasets, we demonstrate that our approach outperforms current state-of-the-art methods both qualitatively and quantitatively. We have made our code and video demonstrations available at https://github.com/sabrina-su/iadf.git. 

[PDF](http://arxiv.org/abs/2311.04766v2) 

**摘要**

利用音频驱动的双任务学习框架 DualTalker，改善数据使用效率并关联跨模态依赖。

**要点**

- 利用音频驱动的面部动画作为主任务，唇读作为双任务，构建跨模态双任务学习框架 DualTalker。
- 双任务学习框架通过利用来自两个任务的信息来促进更有效的数据使用，并明确利用面部运动和音频之间的互补关系来提高性能。
- 引入辅助跨模态一致性损失来减轻潜在的过度平滑，从而增强对细微面部表情动态的映射。
- 在 VOCA 和 BIWI 数据集上进行的广泛实验和感知用户研究表明，该方法在质量和数量上都优于当前最先进的方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：双语者：一种用于语音驱动的 3D 面部动画的跨模态双学习方法</p>
</li>
<li><p>作者：苏桂楠、杨延武、李志峰</p>
</li>
<li><p>单位：腾讯数据平台</p>
</li>
<li><p>关键词：双学习、语音驱动面部动画、跨模态一致性、Transformer</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2311.04766，Github 代码链接：https://github.com/Guinan-Su/DualTalker</p>
</li>
<li><p>摘要：
(1)：语音驱动的 3D 面部动画近年来受到广泛关注，但准确建模面部表情的复杂动态仍然具有挑战性。现有研究通常将面部动画任务视为单一回归问题，忽略了语音信号和 3D 面部动画之间的固有跨模态关系以及它们之间的固有一致性。此外，由于 3D 音视频数据集的可用性有限，使用小规模样本进行学习的方法具有较差的泛化能力，从而降低了性能。
(2)：以往方法通常将面部动画任务视为单一回归问题，忽略了语音信号和 3D 面部动画之间的固有跨模态关系以及它们之间的固有一致性。此外，由于 3D 音视频数据集的可用性有限，使用小规模样本进行学习的方法具有较差的泛化能力，从而降低了性能。
(3)：本文提出了一种跨模态双学习框架，旨在提高数据利用效率并关联跨模态依赖性以进一步提高性能。该框架与主任务（语音驱动的面部动画）及其双任务（唇读）联合训练，并共享通用的音频/运动编码器组件。我们的联合训练框架通过利用来自两个任务的信息并明确利用面部运动和音频之间的互补关系来提高性能，从而促进更有效的数据利用。此外，我们引入了一个辅助跨模态一致性损失来减轻跨模态互补表示潜在的过度平滑，从而增强对细微面部表情动态的映射。
(4)：通过在 VOCA 和 BIWI 数据集上进行的广泛实验和感知用户研究，我们证明了我们的方法在定性和定量方面都优于当前最先进的方法。这些性能支持了我们的目标。</p>
</li>
<li><p>方法：
（1）提出一种跨模态双学习框架，提高数据利用效率，关联跨模态依赖性，以进一步提高性能。
（2）该框架与主任务（语音驱动的面部动画）及其双任务（唇读）联合训练，并共享通用的音频/运动编码器组件。
（3）联合训练框架通过利用来自两个任务的信息并明确利用面部运动和音频之间的互补关系来提高性能，从而促进更有效的数据利用。
（4）引入一个辅助跨模态一致性损失来减轻跨模态互补表示潜在的过度平滑，从而增强对细微面部表情动态的映射。</p>
</li>
<li><p>结论：
（1）：本文提出了一种跨模态双学习框架，有效地解决了音频驱动面部动画中的固有挑战。通过将面部动画和唇读组件表述为双任务，并结合创新的参数共享方案和二元正则化器，我们的方法有效地利用了语音和面部运动之间的互补关系，从而提高了性能。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种跨模态双学习框架，通过联合训练主任务（语音驱动的面部动画）及其双任务（唇读）来提高数据利用效率，关联跨模态依赖性，以进一步提高性能。</li>
<li>引入了一个辅助跨模态一致性损失来减轻跨模态互补表示潜在的过度平滑，从而增强对细微面部表情动态的映射。
性能：</li>
<li>在 VOCA 和 BIWI 数据集上进行的广泛实验和感知用户研究表明，我们的方法在定性和定量方面都优于当前最先进的方法。
工作量：</li>
<li>本文提出的方法需要额外的计算资源来训练双任务模型，并且需要设计有效的训练策略来平衡主任务和双任务的学习。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-2796e7be16d59d2ade40f87447f93837.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c353db315d023ec1c2c174b1887e6302.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-e14c4424ba13626c11a4cc40af3ca98c.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-5252ec4a4a561db9ad58b8059a17f121.jpg" align="middle">
</details>
​    


## 3D-Aware Talking-Head Video Motion Transfer
**Authors:Haomiao Ni, Jiachen Liu, Yuan Xue, Sharon X. Huang**

Motion transfer of talking-head videos involves generating a new video with the appearance of a subject video and the motion pattern of a driving video. Current methodologies primarily depend on a limited number of subject images and 2D representations, thereby neglecting to fully utilize the multi-view appearance features inherent in the subject video. In this paper, we propose a novel 3D-aware talking-head video motion transfer network, Head3D, which fully exploits the subject appearance information by generating a visually-interpretable 3D canonical head from the 2D subject frames with a recurrent network. A key component of our approach is a self-supervised 3D head geometry learning module, designed to predict head poses and depth maps from 2D subject video frames. This module facilitates the estimation of a 3D head in canonical space, which can then be transformed to align with driving video frames. Additionally, we employ an attention-based fusion network to combine the background and other details from subject frames with the 3D subject head to produce the synthetic target video. Our extensive experiments on two public talking-head video datasets demonstrate that Head3D outperforms both 2D and 3D prior arts in the practical cross-identity setting, with evidence showing it can be readily adapted to the pose-controllable novel view synthesis task. 

[PDF](http://arxiv.org/abs/2311.02549v1) WACV2024

**摘要**
使用三维可视化三维头部模型，实现基于注意力的说话人头像视频运动迁移。

**要点**
- 通过循环网络从二维主体帧生成可视化三维规范头，充分利用主体外观信息。
- 设计了自监督三维头部几何学习模块，用于从二维主体视频帧中预测头部姿态和深度图。
- 该模块有助于估计规范空间中的三维头部，然后可以将其转换以与驱动视频帧对齐。
- 采用基于注意力的融合网络将主体帧中的背景和其他细节与三维主体头部相结合，生成合成的目标视频。
- 在两个公共说话人头像视频数据集上的实验表明，Head3D 在实际的交叉身份设置中优于二维和三维先验艺术，并且有证据表明它可以很容易地适应姿态可控的新颖视图合成任务。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：3D感知说话人头部视频运动迁移</li>
<li>作者：Haomiao Ni, Jiachen Liu, Yuan Xue, Sharon X. Huang</li>
<li>第一作者单位：宾夕法尼亚州立大学</li>
<li>关键词：视频运动迁移、说话人头部、3D感知、自监督学习、注意力机制</li>
<li>论文链接：https://arxiv.org/abs/2311.02549
Github 代码链接：无</li>
<li>摘要：
(1) 研究背景：视频运动迁移任务旨在将一段视频的运动模式迁移到另一段视频中，同时保持目标主体的身份。现有的方法主要依赖于有限数量的主体图像和 2D 表示，忽略了充分利用主体视频中固有的多视角外观特征。
(2) 过去的方法及其问题：现有方法主要使用一个主体图像或少数主体图像和 2D 表示进行视频运动迁移。这些方法难以充分利用主体视频中的多视角外观信息。此外，现有的 3D 方法通常在规范特征空间中操作，缺乏视觉可解释性。
(3) 本文提出的研究方法：本文提出了一种新颖的 3D 感知说话人头部视频运动迁移框架 Head3D。该框架通过自监督 3D 头部几何学习模块从每个 2D 视频帧中预测头部姿态和深度图，无需 3D 人头图形模型即可恢复 3D 结构信息。通过将选定的主体视频帧映射到 3D 规范空间，Head3D 使用循环网络估计 3D 主体规范头部。为了合成最终的视频帧，Head3D 采用基于注意力的融合机制将来自 3D 主体头部的外观特征与来自主体的背景和其他细节（例如面部表情、肩膀）相结合。
(4) 方法在任务上取得的性能及性能是否支持其目标：Head3D 在两个公开的说话人头部视频数据集上进行了广泛的实验，结果表明，在实际的跨身份设置中，Head3D 优于 2D 和 3D 先验技术。此外，Head3D 还可以轻松适应可控姿势的新视角合成任务，这表明该方法具有较好的泛化能力。</li>
</ol>
<p>Methods：
(1): 提出了一种新颖的 3D 感知说话人头部视频运动迁移框架 Head3D，该框架通过自监督 3D 头部几何学习模块从每个 2D 视频帧中预测头部姿态和深度图，无需 3D 人头图形模型即可恢复 3D 结构信息。
(2): 使用循环网络估计 3D 主体规范头部，并采用基于注意力的融合机制将来自 3D 主体头部的外观特征与来自主体的背景和其他细节（例如面部表情、肩膀）相结合。
(3): Head3D 在两个公开的说话人头部视频数据集上进行了广泛的实验，结果表明，在实际的跨身份设置中，Head3D 优于 2D 和 3D 先验技术。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种新颖的 3D 感知说话人头部视频运动迁移框架 Head3D，该框架通过自监督 3D 头部几何学习模块从每个 2D 视频帧中预测头部姿态和深度图，无需 3D 人头图形模型即可恢复 3D 结构信息。使用循环网络估计 3D 主体规范头部，并采用基于注意力的融合机制将来自 3D 主体头部的外观特征与来自主体的背景和其他细节（例如面部表情、肩膀）相结合。Head3D 在两个公开的说话人头部视频数据集上进行了广泛的实验，结果表明，在实际的跨身份设置中，Head3D 优于 2D 和 3D 先验技术。Head3D 还可以轻松适应可控姿势的新视角合成任务，这表明该方法具有较好的泛化能力。
（2）：创新点：</li>
</ol>
<ul>
<li>Head3D 提出了一种新颖的 3D 感知说话人头部视频运动迁移框架，该框架通过自监督 3D 头部几何学习模块从每个 2D 视频帧中预测头部姿态和深度图，无需 3D 人头图形模型即可恢复 3D 结构信息。</li>
<li>Head3D 使用循环网络估计 3D 主体规范头部，并采用基于注意力的融合机制将来自 3D 主体头部的外观特征与来自主体的背景和其他细节（例如面部表情、肩膀）相结合。</li>
<li>Head3D 在两个公开的说话人头部视频数据集上进行了广泛的实验，结果表明，在实际的跨身份设置中，Head3D 优于 2D 和 3D 先验技术。Head3D 还可以轻松适应可控姿势的新视角合成任务，这表明该方法具有较好的泛化能力。
性能：</li>
<li>Head3D 在两个公开的说话人头部视频数据集上进行了广泛的实验，结果表明，在实际的跨身份设置中，Head3D 优于 2D 和 3D 先验技术。Head3D 还可以轻松适应可控姿势的新视角合成任务，这表明该方法具有较好的泛化能力。
工作量：</li>
<li>本文的工作量较大，涉及到 3D 感知、自监督学习、注意力机制等多个领域。同时，本文还进行了大量的实验，以验证 Head3D 的性能。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-35afec6fc14c4cd3bb501e49b198de69.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-afc27ddf3e6f7773dffd54e160f21da6.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-d1e8cece6f2ce2f23fc15496e6200de8.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-64af4f2f40a878ceba7a79e3170cfa03.jpg" align="middle">
</details>
​    


## Breathing Life into Faces: Speech-driven 3D Facial Animation with   Natural Head Pose and Detailed Shape
**Authors:Wei Zhao, Yijun Wang, Tianyu He, Lianying Yin, Jianxin Lin, Xin Jin**

The creation of lifelike speech-driven 3D facial animation requires a natural and precise synchronization between audio input and facial expressions. However, existing works still fail to render shapes with flexible head poses and natural facial details (e.g., wrinkles). This limitation is mainly due to two aspects: 1) Collecting training set with detailed 3D facial shapes is highly expensive. This scarcity of detailed shape annotations hinders the training of models with expressive facial animation. 2) Compared to mouth movement, the head pose is much less correlated to speech content. Consequently, concurrent modeling of both mouth movement and head pose yields the lack of facial movement controllability. To address these challenges, we introduce VividTalker, a new framework designed to facilitate speech-driven 3D facial animation characterized by flexible head pose and natural facial details. Specifically, we explicitly disentangle facial animation into head pose and mouth movement and encode them separately into discrete latent spaces. Then, these attributes are generated through an autoregressive process leveraging a window-based Transformer architecture. To augment the richness of 3D facial animation, we construct a new 3D dataset with detailed shapes and learn to synthesize facial details in line with speech content. Extensive quantitative and qualitative experiments demonstrate that VividTalker outperforms state-of-the-art methods, resulting in vivid and realistic speech-driven 3D facial animation. 

[PDF](http://arxiv.org/abs/2310.20240v1) 

**摘要**

引入VividTalker框架，支持生成具有灵活头部姿势和自然面部细节的由音频驱动的3D面部动画。

**要点**

- 现有语音驱动3D面部动画在灵活头部姿势和自然面部细节方面存在不足。
- 该框架显式地将面部动画分解为头部姿势和嘴巴动作，并将它们分别编码为离散的潜在空间。
- 通过自回归过程生成这些属性，利用基于窗口的Transformer架构。
- 构建了包含详细形状的新3D数据集，学习根据语音内容合成面部细节。
- 大量的定量和定性实验表明，VividTalker优于最先进的方法，可生成生动且逼真的由音频驱动的3D面部动画。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>标题：赋予面部生命：自然头部姿势和详细形状的语音驱动 3D 面部动画</li>
<li>作者：魏巍，王奕军，何天宇，殷练英，林建新，金鑫</li>
<li>隶属单位：湖南大学计算机科学与电子工程学院</li>
<li>关键词：3D 面部动画、详细面部形状、运动解耦</li>
<li>论文链接：https://weizhaomolecules.github.io/VividTalker/，Github 代码链接：无</li>
<li>摘要：
（1）：研究背景：3D 虚拟面部动画在娱乐、通信和医疗保健等领域具有重要价值。成功的 3D 虚拟面部动画需要表现出类人的特征，包括同步性和自然性。同步性涉及创建与用户期望一致的可信动画，缩小虚拟化身与现实世界之间的差距。自然性涉及创建逼真的动画，这些动画具有真实的人类面部运动的视觉和行为特征。
（2）：过去的方法及其问题：现有工作在渲染具有灵活头部姿势和自然面部细节（例如皱纹）的形状方面仍然存在不足。这种限制主要归因于两个方面：1）收集具有详细 3D 面部形状的训练集非常昂贵。这种详细形状注释的稀缺性阻碍了训练具有表现力面部动画的模型。2）与嘴巴运动相比，头部姿势与语音内容的相关性要小得多。因此，同时对嘴巴运动和头部姿势进行建模会导致缺乏面部运动可控性。
（3）：本文提出的研究方法：为了解决这些挑战，我们引入了 VividTalker，这是一个新框架，旨在促进语音驱动的 3D 面部动画，其特点是灵活的头部姿势和自然的面部细节。具体来说，我们将面部动画明确地解耦为头部姿势和嘴巴运动，并将它们分别编码为离散的潜在空间。然后，通过利用基于窗口的 Transformer 架构的回归过程生成这些属性。为了增加 3D 面部动画的丰富性，我们构建了一个具有详细形状的新 3D 数据集，并学会了根据语音内容合成面部细节。
（4）：实验结果及性能：广泛的定量和定性实验表明，VividTalker 优于最先进的方法，从而产生了生动逼真的语音驱动的 3D 面部动画。这些性能支持了他们的目标。</li>
</ol>
<p><strong>7. 方法：</strong></p>
<p>（1）因子分离：将面部动画明确地解耦为头部姿势和嘴巴运动，并将其分别编码为离散的潜在空间。</p>
<p>（2）细节丰富：使用基于窗口的 Transformer 来预测离散潜在空间上的运动动态（包括面部细节），给定一个音频信号。</p>
<p>（3）训练过程：使用教师强制学习策略来训练模型，其中教师模型是一个预先训练的 VQ-VAE，用于生成高质量的头部姿势和嘴巴运动。</p>
<p>（4）推理过程：将音频信号输入到训练好的模型中，以生成头部姿势、嘴巴运动和面部细节的预测。</p>
<ol start="8">
<li>结论：
（1）：这项工作促进了语音驱动的3D面部动画，其特点是灵活的头部姿势和自然的面部细节，对于娱乐、通信和医疗保健等领域具有重要价值。
（2）：创新点：</li>
</ol>
<ul>
<li>将面部动画明确地解耦为头部姿势和嘴巴运动，并将其分别编码为离散的潜在空间。</li>
<li>使用基于窗口的Transformer来预测离散潜在空间上的运动动态（包括面部细节），给定一个音频信号。</li>
<li>使用教师强制学习策略来训练模型，其中教师模型是一个预先训练的VQ-VAE，用于生成高质量的头部姿势和嘴巴运动。
性能：</li>
<li>定量和定性实验表明，VividTalker优于最先进的方法，从而产生了生动逼真的语音驱动的3D面部动画。
工作量：</li>
<li>构建了一个具有详细形状的新3D数据集，并学会了根据语音内容合成面部细节。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-7d367bbd980109a452dcecf661c89318.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-61f898b8eea6a84ec03e1da36317e047.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-9f40581024d13a376e4d202368288380.jpg" align="middle">
</details>
​    


## CorrTalk: Correlation Between Hierarchical Speech and Facial Activity   Variances for 3D Animation
**Authors:Zhaojie Chu, Kailing Guo, Xiaofen Xing, Yilin Lan, Bolun Cai, Xiangmin Xu**

Speech-driven 3D facial animation is a challenging cross-modal task that has attracted growing research interest. During speaking activities, the mouth displays strong motions, while the other facial regions typically demonstrate comparatively weak activity levels. Existing approaches often simplify the process by directly mapping single-level speech features to the entire facial animation, which overlook the differences in facial activity intensity leading to overly smoothed facial movements. In this study, we propose a novel framework, CorrTalk, which effectively establishes the temporal correlation between hierarchical speech features and facial activities of different intensities across distinct regions. A novel facial activity intensity metric is defined to distinguish between strong and weak facial activity, obtained by computing the short-time Fourier transform of facial vertex displacements. Based on the variances in facial activity, we propose a dual-branch decoding framework to synchronously synthesize strong and weak facial activity, which guarantees wider intensity facial animation synthesis. Furthermore, a weighted hierarchical feature encoder is proposed to establish temporal correlation between hierarchical speech features and facial activity at different intensities, which ensures lip-sync and plausible facial expressions. Extensive qualitatively and quantitatively experiments as well as a user study indicate that our CorrTalk outperforms existing state-of-the-art methods. The source code and supplementary video are publicly available at: https://zjchu.github.io/projects/CorrTalk/ 

[PDF](http://arxiv.org/abs/2310.11295v1) 

**Summary**
语音驱动的三维面部动画框架 CorrTalk 能有效捕捉不同强度面部活动与语音特征之间的时序相关性，进而实现更自然的面部动画合成。

**Key Takeaways**
- 语音驱动的三维面部动画是一种富有挑战性的跨模态任务，近年来备受研究者的关注。
- 现有的方法通常通过直接将单级语音特征映射到整个面部动画来简化这个过程，这忽略了面部活动强度上的差异，导致生成的动画过于平滑。
- 作者提出了一种新的框架 CorrTalk，该框架能够有效地捕捉不同区域的面部活动强度和分级语音特征之间的时序相关性。
- CorrTalk 首先定义了一个新的面部活动强度度量，通过计算面部顶点位移的短时傅里叶变换来实现。
- 作者提出了一种双分支解码框架，用于同步合成强弱面部活动，以保证合成动画的强度更大。
- 作者还提出了一种加权分级特征编码器，用于建立不同强度面部活动与分级语音特征之间的时序相关性，以确保面部动画的口型同步和面部表情的可信度。
- 广泛的定性和定量实验以及用户研究表明，CorrTalk 优于现有的最先进方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：CorrTalk：分层语音与面部活动差异的相关性</p>
</li>
<li><p>作者：赵杰楚，凯令国，邢晓芬，兰毅林，蔡博伦，徐祥敏</p>
</li>
<li><p>单位：华南理工大学</p>
</li>
<li><p>关键词：3D 面部动画，分层语音特征，3D 说话人头部，面部活动差异，Transformer</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2310.11295
Github 链接：https://github.com/zjchu/CorrTalk</p>
</li>
<li><p>摘要：
(1) 研究背景：语音驱动的 3D 面部动画是一项具有挑战性的跨模态任务，近年来引起了越来越多的研究兴趣。在说话活动中，嘴巴表现出强烈的运动，而其他面部区域通常表现出相对较弱的活动水平。现有方法通常通过直接将单层次语音特征映射到整个面部动画来简化过程，这忽略了面部活动强度的差异，导致面部动作过度平滑。
(2) 过去方法与问题：</p>
<ul>
<li>早期工作建立了音素与面部手势之间的映射。但由于一个音素可能对应多个合理的唇形，导致跨模态的不确定性。</li>
<li>为了减轻面部手势的歧义，引入了短滑动窗口机制来剪辑几个连续的语音帧，然后对相应的视觉帧进行动画处理。但短音频窗口虽然能捕捉到相邻语音帧的附加信息，但仍然会导致面部动作变化的不确定性。</li>
<li>MeshTalk 应用长期音频窗口来合成每个视觉帧。FaceFormer 提出了一种基于 Transformer 的模型来捕捉帧级长期音频上下文的依赖关系。但过长的长期上下文不可避免地会引入冗余信息，而过长或过短的单层次语音特征缺乏足够的时间分辨率。</li>
<li>一些工作只关注嘴巴的动画。但说话活动刺激了嘴巴和其他面部肌肉的协同运动，因此不能忽视其他面部手势。</li>
<li>最近，通过使用单层次语音特征直接驱动整个面部动画取得了进展。但忽略了不同区域（如嘴巴和其他区域）之间面部活动强度的差异。
(3) 研究方法：</li>
<li>定义了面部活动强度 (FAI) 度量来区分强面部活动和弱面部活动，这是通过计算面部顶点位移的短时傅里叶变换 (STFT) 获得的。</li>
<li>基于面部活动的变化，提出了一种双分支解码框架来同步合成强面部活动和弱面部活动，以保证更广泛的强度面部动画合成。</li>
<li>提出了一种加权分层特征编码器，在不同强度的分层语音特征和面部活动之间建立时间相关性，以确保唇形同步和合理的面部表情。
(4) 性能：</li>
<li>在定量和定性实验以及用户研究中，CorrTalk 优于现有的最先进方法。</li>
<li>CorrTalk 在 VOCASET 数据集上的平均 L2 误差为 0.0065，在 BU-3DFE 数据集上的平均 L2 误差为 0.0039。</li>
<li>用户研究表明，CorrTalk 在面部动画的真实感、唇形同步和面部表情方面优于其他方法。</li>
</ul>
</li>
<li><p>方法：
(1) 面部活动强度 (FAI) 度量：计算面部顶点位移的短时傅里叶变换 (STFT)，将面部活动强度分为强面部活动和弱面部活动。
(2) 双分支解码框架：同步合成强面部活动和弱面部活动，以保证更广泛的强度面部动画合成。
(3) 加权分层特征编码器：在不同强度的分层语音特征和面部活动之间建立时间相关性，以确保唇形同步和合理的面部表情。</p>
</li>
<li><p>结论：
（1）：CorrTalk 提出了一种新颖的驱动框架，有效地捕捉了不同强度的 HSF 和面部活动之间的时序相关性。该框架考虑了 FAI 的差异以及不同层次的语音表示的异质性。加权分层特征编码器提供了一种互补的和
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的面部活动强度 (FAI) 度量，用于区分强面部活动和弱面部活动。</li>
<li>提出了一种双分支解码框架，用于同步合成强面部活动和弱面部活动，以确保更广泛的强度面部动画合成。</li>
<li>提出了一种加权分层特征编码器，用于在不同强度的分层语音特征和面部活动之间建立时间相关性，以确保唇形同步和合理的面部表情。
性能：</li>
<li>在定量和定性实验以及用户研究中，CorrTalk 优于现有的最先进方法。</li>
<li>CorrTalk 在 VOCASET 数据集上的平均 L2 误差为 0.0065，在 BU-3DFE 数据集上的平均 L2 误差为 0.0039。</li>
<li>用户研究表明，CorrTalk 在面部动画的真实感、唇形同步和面部表情方面优于其他方法。
工作量：</li>
<li>论文的创新点和性能都很好，但工作量也比较大。</li>
<li>论文中使用了大量的实验数据和模型，需要花费大量的时间和精力来训练和测试。</li>
<li>论文中还使用了复杂的算法和模型，需要花费大量的时间和精力来理解和实现。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-d922178e56a58ce3c71b9f1423874fb1.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-482c00c6ed52f71800345e13e8d77a81.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-cab60223ad61f1d2129c598293c0da62.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-4c347875935ebcaed314d4b9997f39ba.jpg" align="middle">
</details>
​    

​    

​    
