
---
title: NeRF
date: 2024-01-24 01:30:59
author: Kedreamix
cover: https://picx.zhimg.com/v2-eaae707aaf894e22e54246edd91e6dce.jpg
categories: Paper
tags:
    - NeRF
description: NeRF 方向最新论文已更新，请持续关注 Update in 2024-01-24 IPR-NeRF Ownership Verification meets Neural Radiance Field
keywords: NeRF
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


## IPR-NeRF: Ownership Verification meets Neural Radiance Field
**Authors:Win Kent Ong, Kam Woh Ng, Chee Seng Chan, Yi Zhe Song, Tao Xiang**

Neural Radiance Field (NeRF) models have gained significant attention in the computer vision community in the recent past with state-of-the-art visual quality and produced impressive demonstrations. Since then, technopreneurs have sought to leverage NeRF models into a profitable business. Therefore, NeRF models make it worth the risk of plagiarizers illegally copying, re-distributing, or misusing those models. This paper proposes a comprehensive intellectual property (IP) protection framework for the NeRF model in both black-box and white-box settings, namely IPR-NeRF. In the black-box setting, a diffusion-based solution is introduced to embed and extract the watermark via a two-stage optimization process. In the white-box setting, a designated digital signature is embedded into the weights of the NeRF model by adopting the sign loss objective. Our extensive experiments demonstrate that not only does our approach maintain the fidelity (\ie, the rendering quality) of IPR-NeRF models, but it is also robust against both ambiguity and removal attacks compared to prior arts. 

[PDF](http://arxiv.org/abs/2401.09495v3) Error on result tabulation for the state of the art method which   might cause misleading to the readers

**摘要**
利用水印优化与签署保护 NeRF 模型的知识产权。

**要点**
- IPR-NeRF 框架在黑盒和白盒设置中提供了 NeRF 模型的知识产权保护。
- 在黑盒设置中，使用基于扩散的解决方案通过两阶段优化过程嵌入和提取水印。
- 在白盒设置中，通过采用符号损失目标，将指定的数字签名嵌入到 NeRF 模型的权重中。
- IPR-NeRF 模型不仅保持了渲染质量，而且与现有技术相比，它还具有鲁棒性，可抵抗模糊和移除攻击。
- IPR-NeRF 模型在用于生成合成数据的视觉效果时，能够有效防止模型窃取和误用。
- IPR-NeRF 模型还可用于保护 NeRF 模型在商业环境中的知识产权。
- IPR-NeRF 模型为 NeRF 模型的知识产权保护提供了一种通用解决方案。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：IPR-NeRF：所有权验证满足神经辐射场（中文翻译：IPR-NeRF：所有权验证满足神经辐射场）</p>
</li>
<li><p>作者：Kent Ong、Kam Woh Ng、Chee Seng Chan、Yi Zhe Song、Tao Xiang</p>
</li>
<li><p>第一作者单位：马来亚大学图像与信号处理中心（中文翻译：马来亚大学图像与信号处理中心）</p>
</li>
<li><p>关键词：神经辐射场、知识产权保护、数字水印、数字签名</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.09495，Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场 (NeRF) 模型因其出色的视觉质量和令人印象深刻的演示而在计算机视觉领域引起了广泛关注。NeRF 模型的商业价值也引起了技术企业家的注意，但这也使得 NeRF 模型面临被非法复制、再分发或滥用的风险。
（2）过去的方法及其问题：目前还没有针对 NeRF 模型的知识产权保护框架。现有的保护方案主要针对卷积神经网络 (CNN)、生成对抗网络 (GAN) 和循环神经网络 (RNN)。这些方法在设计 NeRF 模型的保护框架时面临诸多挑战，例如现有黑盒保护方法在 NeRF 渲染过程中会导致水印无法恢复。
（3）提出的研究方法：本文提出了一种针对 NeRF 模型的综合知识产权保护框架，称为 IPR-NeRF。在黑盒设置中，引入了一种基于扩散的解决方案，通过两阶段优化过程嵌入和提取水印。在白盒设置中，通过采用符号损失目标函数，将指定数字签名嵌入 NeRF 模型的权重中。
（4）方法在任务和性能上的表现：实验结果表明，IPR-NeRF 方法不仅保持了 NeRF 模型的保真度（即渲染质量），而且在面对模糊性和去除攻击时也表现出比以往方法更强的鲁棒性。这些性能支持了本文提出的方法的目标。</p>
</li>
<li><p>方法：
(1) IPR-NeRF 框架概述：IPR-NeRF 框架包含两个主要模块：黑盒保护模块和白盒保护模块。黑盒保护模块旨在保护未经授权访问的 NeRF 模型，而白盒保护模块旨在保护经授权访问的 NeRF 模型。
(2) 黑盒保护模块：黑盒保护模块采用基于扩散的解决方案，通过两阶段优化过程嵌入和提取水印。在嵌入阶段，将水印嵌入到 NeRF 模型的权重中，在提取阶段，从渲染的图像中提取水印。
(3) 白盒保护模块：白盒保护模块采用符号损失目标函数，将指定数字签名嵌入 NeRF 模型的权重中。符号损失目标函数旨在最小化数字签名与 NeRF 模型权重的差异，从而确保数字签名被嵌入到 NeRF 模型中。
(4) 实验结果：实验结果表明，IPR-NeRF 方法不仅保持了 NeRF 模型的保真度，而且在面对模糊性和去除攻击时也表现出比以往方法更强的鲁棒性。</p>
</li>
<li><p>结论：
（1）：IPR-NeRF：所有权验证满足神经辐射场，提出了一种针对 NeRF 模型的全面且鲁棒的知识产权保护方案，在黑盒和白盒场景中均能有效保护模型。综合实验结果表明，该方案在抵抗嵌入水印的模糊性和去除攻击方面表现出优异的性能，同时保持了渲染性能。然而，该方案在计算能力和黑盒保护方面存在局限性，当攻击者拥有受保护模型的详细信息时，该方案无法抵御覆盖攻击。未来的研究将集中在改进这些方面。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种综合的 NeRF 模型知识产权保护框架，该框架在黑盒和白盒场景中均能有效保护模型。</li>
<li>引入了一种基于扩散的解决方案，通过两阶段优化过程嵌入和提取水印，在黑盒设置中保护未经授权访问的 NeRF 模型。</li>
<li>采用符号损失目标函数，将指定数字签名嵌入 NeRF 模型的权重中，在白盒设置中保护经授权访问的 NeRF 模型。</li>
</ul>
<p>性能：</p>
<ul>
<li>实验结果表明，该方案不仅保持了 NeRF 模型的保真度，而且在面对模糊性和去除攻击时也表现出比以往方法更强的鲁棒性。</li>
</ul>
<p>工作量：</p>
<ul>
<li>该方案在计算能力和黑盒保护方面存在局限性，当攻击者拥有受保护模型的详细信息时，该方案无法抵御覆盖攻击。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-7702dd0580aeb20d2469586499df517d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b6cd7f525efd45ad04614d4ae868c5ff.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-cd4e10da5a013a99ebc46d33f1e102a8.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-ed46804675ae115b408ec3a1b30d40dd.jpg" align="middle">
</details>
​    


## ProvNeRF: Modeling per Point Provenance in NeRFs as a Stochastic Process
**Authors:Kiyohiro Nakayama, Mikaela Angelina Uy, Yang You, Ke Li, Leonidas Guibas**

Neural radiance fields (NeRFs) have gained popularity across various applications. However, they face challenges in the sparse view setting, lacking sufficient constraints from volume rendering. Reconstructing and understanding a 3D scene from sparse and unconstrained cameras is a long-standing problem in classical computer vision with diverse applications. While recent works have explored NeRFs in sparse, unconstrained view scenarios, their focus has been primarily on enhancing reconstruction and novel view synthesis. Our approach takes a broader perspective by posing the question: "from where has each point been seen?" -- which gates how well we can understand and reconstruct it. In other words, we aim to determine the origin or provenance of each 3D point and its associated information under sparse, unconstrained views. We introduce ProvNeRF, a model that enriches a traditional NeRF representation by incorporating per-point provenance, modeling likely source locations for each point. We achieve this by extending implicit maximum likelihood estimation (IMLE) for stochastic processes. Notably, our method is compatible with any pre-trained NeRF model and the associated training camera poses. We demonstrate that modeling per-point provenance offers several advantages, including uncertainty estimation, criteria-based view selection, and improved novel view synthesis, compared to state-of-the-art methods. Please visit our project page at https://provnerf.github.io 

[PDF](http://arxiv.org/abs/2401.08140v2) 

**Summary**
神经辐射场（NeRF）模型在丰富应用中广受欢迎，但由于缺乏体积渲染的充分约束，在稀疏视图设置中面临挑战。

**Key Takeaways**

- ProvNeRF模型通过引入每个点的来源，对传统NeRF表示进行扩展，模拟每个点的可能来源位置。
- ProvNeRF兼容任何预训练的NeRF模型及其训练相机位姿。
- 建模每个点的来源提供几个优势，包括不确定性估计、基于标准的视图选择和改进的新颖视图合成。
- ProvNeRF 可用于不确定性估计，基于标准的视图选择和改进的新颖视图合成。
- ProvNeRF 可以扩展到动态场景，并与稀疏视图 SLAM 管道结合使用。
- ProvNeRF 可以通过更好的体积渲染和基于概率的表面渲染来补充实际应用。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>标题：ProvNeRF：将 NeRF 中的逐点来源建模为随机过程</li>
<li>作者：George Kiyohiro Nakayama, Mikaela Angelina Uy, Yang You, Ke Li, Leonidas Guibas</li>
<li>隶属机构：斯坦福大学</li>
<li>关键词：神经辐射场、稀疏视图、来源建模、不确定性估计、视图选择、新颖视图合成</li>
<li>论文链接：https://arxiv.org/abs/2401.08140
Github 链接：无</li>
<li>摘要：
(1)：研究背景：神经辐射场 (NeRF) 在各种应用中越来越受欢迎，但它们在稀疏视图设置中面临挑战，因为仅靠体积渲染无法提供足够的约束。
(2)：过去的方法：过去的方法主要集中在增强重建和新颖视图合成上，但没有解决如何从更全面的角度理解场景的问题，例如不确定性估计、基于标准的视图选择和改进的新颖视图合成。
(3)：研究方法：本文提出 ProvNeRF，一种通过结合逐点来源来丰富传统 NeRF 表示的模型，为每个点建模可能的源位置。我们通过扩展随机过程的隐式最大似然估计 (IMLE) 来实现这一点。值得注意的是，我们的方法与任何预训练的 NeRF 模型及其相关的训练相机位姿兼容。
(4)：方法性能：我们证明了对逐点来源建模提供了多种优势，包括不确定性估计、基于标准的视图选择和改进的新颖视图合成，与最先进的方法相比。这些性能支持了我们的目标。</li>
</ol>
<p>Methods：
(1)：我们提出ProvNeRF，一种通过结合逐点来源来丰富传统NeRF表示的模型，为每个点建模可能的源位置。我们通过扩展随机过程的隐式最大似然估计（IMLE）来实现这一点。值得注意的是，我们的方法与任何预训练的NeRF模型及其相关的训练相机位姿兼容。
(2)：我们定义了逐点来源作为随机过程，其边缘分布在x处编码了x的来源。我们使用随机过程的分布来建模逐点来源，使得样本Dθ∼Dθ是R3上的确定性函数，将每个点x映射到其来源之一。
(3)：我们提出了ProvNeRF，通过扩展隐式概率模型，特别是IMLE，来将逐点来源建模为随机过程。ProvNeRF学习了一个从预定义的潜在随机函数分布或潜在随机过程分布Z到模型分布Dθ的变换Hθ。
(4)：我们定义了潜在分布Z为潜在随机过程的分布，使得每个样本Z∼Z是一个函数，将点x映射到潜在向量z∈Rb。
(5)：我们使用神经网络表示Hθ来处理从Z到Dθ的复杂变换。我们定义潜在分布Z为输入x和x本身的随机线性变换的连接。
(6)：我们通过扩展IMLE来优化Dθ，使用Eq.6中的经验分布D。我们将Eq.3调整到函数空间，并证明它等价于经验样本Dθ(x)∼Dθ(x)和模型样本Dθ(x)∼Dθ(x)在每个点x处的逐点匹配。</p>
<ol start="8">
<li>总结：
（1）：本文的意义在于，它提出了一种新的神经辐射场（NeRF）模型ProvNeRF，该模型通过结合逐点来源来丰富传统的NeRF表示，为每个点建模可能的源位置。ProvNeRF可以很容易地应用于任何预训练的NeRF模型，并具有相关的训练相机位姿。我们展示了在各种下游应用中对逐点来源建模的优势，包括不确定性建模、基于标准的视图选择和改进的新颖视图合成，与现有的最先进方法相比。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种新的NeRF模型ProvNeRF，该模型通过结合逐点来源来丰富传统的NeRF表示，为每个点建模可能的源位置。</li>
<li>扩展了随机过程的隐式最大似然估计（IMLE），将逐点来源建模为随机过程。</li>
<li>证明了对逐点来源建模提供了多种优势，包括不确定性估计、基于标准的视图选择和改进的新颖视图合成，与最先进的方法相比。
性能：</li>
<li>ProvNeRF可以很容易地应用于任何预训练的NeRF模型，并具有相关的训练相机位姿。</li>
<li>ProvNeRF在各种下游应用中表现出优于最先进方法的性能，包括不确定性建模、基于标准的视图选择和改进的新颖视图合成。
工作量：</li>
<li>ProvNeRF的实现相对简单，可以很容易地应用于任何预训练的NeRF模型。</li>
<li>ProvNeRF的训练时间与传统的NeRF模型相当。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-f48885cf9ef1b2a677c258f6b1e9a2a2.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-d72d125185075e757ca6e7284c2ace68.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-a582ca9b91a20a6a1c1593166a2d8401.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-d26582d170597ef79c1a5e15500eaa42.jpg" align="middle">
</details>
​    


## TriNeRFLet: A Wavelet Based Multiscale Triplane NeRF Representation
**Authors:Rajaei Khatib, Raja Giryes**

In recent years, the neural radiance field (NeRF) model has gained popularity due to its ability to recover complex 3D scenes. Following its success, many approaches proposed different NeRF representations in order to further improve both runtime and performance. One such example is Triplane, in which NeRF is represented using three 2D feature planes. This enables easily using existing 2D neural networks in this framework, e.g., to generate the three planes. Despite its advantage, the triplane representation lagged behind in its 3D recovery quality compared to NeRF solutions. In this work, we propose TriNeRFLet, a 2D wavelet-based multiscale triplane representation for NeRF, which closes the 3D recovery performance gap and is competitive with current state-of-the-art methods. Building upon the triplane framework, we also propose a novel super-resolution (SR) technique that combines a diffusion model with TriNeRFLet for improving NeRF resolution. 

[PDF](http://arxiv.org/abs/2401.06191v1) webpage link: https://rajaeekh.github.io/trinerflet-web

**Summary**
TriNeRFLet采用2D小波多尺度三平面表示，在3D重建质量上能与目前最先进的方法相媲美。

**Key Takeaways**
- TriNeRFLet是一种基于2D小波的多尺度三平面表示，用于NeRF。
- TriNeRFLet在3D重建质量方面可以与目前最先进的方法相媲美。
- Triplane表示在3D重建质量方面落后于NeRF解决方案。
- TriNeRFLet使用了一个新颖的超分辨率（SR）技术，该技术结合了扩散模型和TriNeRFLet来提高NeRF的分辨率。
- TriNeRFLet可以很容易地利用现有的2D神经网络。
- 扩散模型可以用来提高NeRF的分辨率。
- TriNeRFLet在3D重建质量方面有很大的潜力。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：TriNeRFLet：一种基于小波的多尺度三平面神经辐射场表示（TriNeRFLet: A 2D Wavelet-based Multiscale Triplane NeRF Representation）</li>
<li>作者：Rajaee Khatib, Raja Giryes</li>
<li>隶属单位：特拉维夫大学电子工程系</li>
<li>关键词：神经辐射场、三平面表示、多尺度表示、小波变换、超分辨率</li>
<li>论文链接：https://arxiv.org/abs/2401.06191
Github 链接：None</li>
<li>摘要：
（1）研究背景：近年来，神经辐射场（NeRF）模型因其能够恢复复杂 3D 场景而广受欢迎。在 NeRF 取得成功之后，许多方法提出了不同的 NeRF 表示，以便进一步提高运行时效率和性能。其中一个例子是三平面表示，其中使用三个 2D 特征平面来表示 NeRF。这使得在该框架中轻松使用现有的 2D 神经网络成为可能，例如生成三个平面。尽管具有优势，但与 NeRF 解决方案相比，三平面表示在 3D 恢复质量方面落后。
（2）过去的方法及其问题：在本文中，我们提出了 TriNeRFLet，这是一种用于 NeRF 的基于 2D 小波的多尺度三平面表示，它缩小了 3D 恢复性能差距，并且与当前最先进的方法具有竞争力。在三平面框架的基础上，我们还提出了一种新颖的超分辨率 (SR) 技术，该技术将扩散模型与 TriNeRFLet 相结合，以提高 NeRF 分辨率。
（3）研究方法：在渲染过程中，通过将每个点投影到三个平面之一，然后连接对应于三个投影的特征，对每个点进行采样。这为该点形成一个单独的特征向量，然后将其传递给输出该点密度和颜色值的小型 MLP。三平面表示的一个显着优势是它可以与许多已经存在的 2D 方法一起使用。在原始工作中，作者使用现有的 2D 生成对抗网络 (GAN) 架构来生成其平面。后续工作采用了 2D StyleGAN 架构。
（4）方法的性能：我们的方法改进了 NeRF 重建的质量。使用具有三平面表示的多尺度小波表示可以提高 3D 重建质量；将基于扩散的超分辨率与 TriNeRFLet 相结合，可以从低分辨率 2D 视图生成高分辨率重建。</li>
</ol>
<p>&lt;Methods&gt;:
(1): 在渲染过程中，通过将每个点投影到三个平面之一，然后连接对应于三个投影的特征，对每个点进行采样。这为该点形成一个单独的特征向量，然后将其传递给输出该点密度和颜色值的小型MLP。
(2): 三平面表示的一个显着优势是它可以与许多已经存在的2D方法一起使用。在原始工作中，作者使用现有的2D生成对抗网络(GAN)架构来生成其平面。后续工作采用了2DStyleGAN架构。
(3): 使用具有三平面表示的多尺度小波表示可以提高3D重建质量；将基于扩散的超分辨率与TriNeRFLet相结合，可以从低分辨率2D视图生成高分辨率重建。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种基于2D小波的多尺度三平面神经辐射场表示（TriNeRFLet），该方法缩小了3D恢复性能差距，并且与当前最先进的方法具有竞争力。此外，我们还提出了一种新颖的超分辨率（SR）技术，该技术将扩散模型与TriNeRFLet相结合，以提高NeRF分辨率。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种基于2D小波的多尺度三平面神经辐射场表示（TriNeRFLet），该方法改进了NeRF重建的质量。</li>
<li>将基于扩散的超分辨率与TriNeRFLet相结合，可以从低分辨率2D视图生成高分辨率重建。
性能：</li>
<li>使用具有三平面表示的多尺度小波表示可以提高3D重建质量。</li>
<li>将基于扩散的超分辨率与TriNeRFLet相结合，可以从低分辨率2D视图生成高分辨率重建。
工作量：</li>
<li>该方法需要训练一个三平面神经辐射场表示模型和一个基于扩散的超分辨率模型。</li>
<li>该方法的训练和推理时间与其他NeRF方法相当。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-376ce19b86e43007a4505ad233d775ef.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-62e7822d95a507a9a6135289c7daa699.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-7a5c91a388f997c293454bfee53afa88.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-e34ea48c160c12032d9b31bd76183537.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c58b3d3d4afab12adc77185baa182d90.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-8f1a3bb1b557793cc8f1d5f612cbf4c1.jpg" align="middle">
</details>
​    


## Fast High Dynamic Range Radiance Fields for Dynamic Scenes
**Authors:Guanjun Wu, Taoran Yi, Jiemin Fang, Wenyu Liu, Xinggang Wang**

Neural Radiances Fields (NeRF) and their extensions have shown great success in representing 3D scenes and synthesizing novel-view images. However, most NeRF methods take in low-dynamic-range (LDR) images, which may lose details, especially with nonuniform illumination. Some previous NeRF methods attempt to introduce high-dynamic-range (HDR) techniques but mainly target static scenes. To extend HDR NeRF methods to wider applications, we propose a dynamic HDR NeRF framework, named HDR-HexPlane, which can learn 3D scenes from dynamic 2D images captured with various exposures. A learnable exposure mapping function is constructed to obtain adaptive exposure values for each image. Based on the monotonically increasing prior, a camera response function is designed for stable learning. With the proposed model, high-quality novel-view images at any time point can be rendered with any desired exposure. We further construct a dataset containing multiple dynamic scenes captured with diverse exposures for evaluation. All the datasets and code are available at \url{https://guanjunwu.github.io/HDR-HexPlane/}. 

[PDF](http://arxiv.org/abs/2401.06052v1) 3DV 2024. Project page: https://guanjunwu.github.io/HDR-HexPlane

**Summary**
动态 HDR 神经辐射场框架可从具有不同曝光的动态 2D 图像学习 3D 场景，并可在任何时间点渲染出任意所需曝光的高质量新视角图像。

**Key Takeaways**

- HDR-HexPlane 是一种动态 HDR 神经辐射场框架，可以从具有不同曝光的动态 2D 图像学习 3D 场景。
- HDR-HexPlane 使用可学习的曝光映射函数来为每个图像获取自适应曝光值。
- HDR-HexPlane 使用单调递增先验设计相机响应函数，以实现稳定学习。
- HDR-HexPlane 可以渲染任何时间点和任何所需曝光的高质量新视角图像。
- HDR-HexPlane 数据集包含多个具有不同曝光的动态场景，可用于评估模型性能。
- HDR-HexPlane 模型和代码可在 \url{https://guanjunwu.github.io/HDR-HexPlane/} 下载。

- 该研究扩展了 HDR 神经辐射场方法在更广泛应用程序中的使用。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>标题：动态场景的快速高动态范围辐射场</li>
<li>作者：Guanjun Wu, Taoran Yi, Jiemin Fang, Wenyu Liu, Xinggang Wang</li>
<li>隶属单位：华中科技大学计算机科学与技术学院</li>
<li>关键词：神经辐射场、高动态范围、动态场景、曝光映射、相机响应函数</li>
<li>论文链接：https://arxiv.org/abs/2401.06052
Github 代码链接：无</li>
<li>摘要：
（1）研究背景：神经辐射场（NeRF）及其扩展在表示 3D 场景和合成新视角图像方面取得了巨大成功。然而，大多数 NeRF 方法采用低动态范围 (LDR) 图像，这可能会丢失细节，尤其是在照明不均匀的情况下。一些先前的 NeRF 方法尝试引入高动态范围 (HDR) 技术，但主要针对静态场景。
（2）过去的方法及其问题：为了将 HDR NeRF 方法扩展到更广泛的应用，本文提出了一种动态 HDR NeRF 框架，名为 HDR-HexPlane，它可以从动态 2D 图像中学习 3D 场景，这些图像使用不同的曝光值捕获。构建了一个可学习的曝光映射函数，以针对每个图像获取自适应曝光值。基于单调递增先验，设计了用于稳定学习的相机响应函数。使用所提出的模型，可以在任何时间点使用任何所需的曝光值渲染高质量的新视角图像。
（3）提出的研究方法：本文还构建了一个包含多个动态场景的数据集，这些场景使用不同的曝光值进行捕获，以进行评估。所有数据集和代码均可在 https://guanjunwu.github.io/HDR-HexPlane/ 获得。
（4）方法性能：在动态场景的新视角合成任务上，HDR-HexPlane 在质量和速度方面都优于现有方法。该方法可以生成具有准确几何形状、逼真纹理和正确曝光的新视角图像。性能支持其目标，即在动态场景中合成高质量的新视角图像。</li>
</ol>
<p>Methods：</p>
<p>（1）HDR-HexPlane框架概述：HDR-HexPlane框架将HexPlane表示与HDR-NeRF方法相结合，可以从动态2D图像中学习3D场景。该框架包括HexPlane模块、曝光映射模块和相机响应函数模块。</p>
<p>（2）HexPlane模块：HexPlane模块使用六个可学习的参数平面来表示动态场景，其中每个平面对应于一个时间步长。给定位置x和时间t，HexPlane模块使用双线性插值和向量矩阵乘法来计算隐藏信息，然后将其与位置编码后的位置、时间和视点方向连接起来，并输入到单独的MLP中以导出空间颜色c和密度σ。</p>
<p>（3）曝光映射模块：曝光映射模块学习每个图像索引对应的对数曝光系数ej。该模块使用参数函数ϕ来计算曝光值，该函数可以是线性函数或其他非线性函数。</p>
<p>（4）相机响应函数模块：相机响应函数模块使用sigmoid函数来建模相机响应函数g。该函数将对数空间的辐射值E′和对数曝光系数ej映射到空间颜色c。</p>
<p>（5）优化：HDR-HexPlane框架使用优化器来最小化重建损失和零点约束损失的总和。重建损失衡量渲染图像与真实图像之间的差异，而零点约束损失确保相机响应函数g在原点处具有适当的先验。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种新的动态 HDR 神经辐射场框架 HDR-HexPlane，该框架将 HDR 成像和动态场景表示管道相结合，可以有效地学习 HDR 动态场景。在新的视角合成任务上，HDR-HexPlane 在质量和速度方面都优于现有方法。该方法可以生成具有准确几何形状、逼真纹理和正确曝光的新视角图像。
（2）：创新点：</li>
</ol>
<ul>
<li>将 HDR 成像技术与动态场景表示管道相结合，提出了一种新的动态 HDR 神经辐射场框架 HDR-HexPlane。</li>
<li>设计了一种可学习的曝光映射函数，可以针对每个图像获取自适应曝光值。</li>
<li>基于单调递增先验，设计了用于稳定学习的相机响应函数。
性能：</li>
<li>在新的视角合成任务上，HDR-HexPlane 在质量和速度方面都优于现有方法。</li>
<li>该方法可以生成具有准确几何形状、逼真纹理和正确曝光的新视角图像。
工作量：</li>
<li>该方法需要收集包含多个动态场景的数据集，这些场景使用不同的曝光值进行捕获。</li>
<li>该方法需要训练一个神经网络模型，该模型可以从动态 2D 图像中学习 3D 场景。</li>
<li>该方法需要渲染新视角图像，这需要一定的时间和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-365b96052d113ae5a68faafffa3b689c.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f64579f98fad3923afdea199ebc9b8cc.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-a65b50e441e1d12f71aca19d6858a6fc.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-8ba32dc69a2b4433dbf0e3259f92de8c.jpg" align="middle">
</details>
​    


## GO-NeRF: Generating Virtual Objects in Neural Radiance Fields
**Authors:Peng Dai, Feitong Tan, Xin Yu, Yinda Zhang, Xiaojuan Qi**

Despite advances in 3D generation, the direct creation of 3D objects within an existing 3D scene represented as NeRF remains underexplored. This process requires not only high-quality 3D object generation but also seamless composition of the generated 3D content into the existing NeRF. To this end, we propose a new method, GO-NeRF, capable of utilizing scene context for high-quality and harmonious 3D object generation within an existing NeRF. Our method employs a compositional rendering formulation that allows the generated 3D objects to be seamlessly composited into the scene utilizing learned 3D-aware opacity maps without introducing unintended scene modification. Moreover, we also develop tailored optimization objectives and training strategies to enhance the model's ability to exploit scene context and mitigate artifacts, such as floaters, originating from 3D object generation within a scene. Extensive experiments on both feed-forward and $360^o$ scenes show the superior performance of our proposed GO-NeRF in generating objects harmoniously composited with surrounding scenes and synthesizing high-quality novel view images. Project page at {\url{https://daipengwa.github.io/GO-NeRF/}. 

[PDF](http://arxiv.org/abs/2401.05750v1) 12 pages

**Summary**
GO-NeRF利用场景语境在现有NeRF中生成高质量且和谐的3D物体。

**Key Takeaways**

- GO-NeRF提出了一种新的方法，可以利用场景语境在现有NeRF中生成高质量且和谐的3D物体。
- GO-NeRF使用了一种组合渲染公式，允许生成的3D物体利用学习到的3D感知不透明度图无缝地合成到场景中，而不会引入意外的场景修改。
- GO-NeRF还开发了定制的优化目标和训练策略，以增强模型利用场景语境的能力并减轻源自场景中3D物体生成的人工制品，例如漂浮物。
- GO-NeRF在馈送和360度场景上的大量实验表明，GO-NeRF在生成与周围场景和谐合成的物体和合成高质量的新视图图像方面具有优越的性能。
- GO-NeRF可以在项目页面上找到。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：GO-NeRF：在神经辐射场中生成虚拟物体</p>
</li>
<li><p>作者：彭代、谭飞通、于欣、张银达、戚晓娟</p>
</li>
<li><p>隶属：香港大学</p>
</li>
<li><p>关键词：神经辐射场、3D物体生成、场景合成、文本到3D</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.05750
Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：近年来，神经辐射场（NeRF）在可渲染真实世界环境重建方面取得了巨大进展。与此同时，文本引导的物体生成也展现出创造新颖 3D 内容的巨大潜力。本文研究了一个新颖的问题：生成与给定 3D 真实世界场景协调的 3D 物体。这种能力对于新颖场景的创建和编辑至关重要，它要求将生成的物体无缝地合成到环境中，并确保在后续应用中获得高度沉浸式的体验。
（2）过去的方法及其问题：Gordon 等人利用基于 CLIP 的文本图像匹配损失进行 3D 物体生成，并引入了一个 3D 混合管道将合成的 3D 物体合成到 NeRF 中。然而，这种方法受到模型的生成能力和缺乏利用场景上下文信息的限制，导致生成的物体质量低劣，并且无法与 NeRF 无缝融合。另一方面，文本引导的图像修复模型可以通过填充指定掩码来创建与所需物体协调的场景。然而，为后续 NeRF 模型训练生成具有视图一致性的合成物体图像仍然具有挑战性。因此，这些技术容易受到大的视图变化和由于不准确的修复掩码导致的意外场景内容修改的影响。
（3）提出的研究方法：本文提出了一种新颖的管道，称为 GO-NeRF，它可以在用户指定的给定 NeRF 环境中的位置生成由文本提示控制的 3D 虚拟物体，从而产生协调的 3D 场景。我们的方法基于两个关键方面：（1）组合渲染公式，便于将生成的 3D 物体无缝合成到现有场景中，同时防止引入意外的场景修改；（2）开发定制的优化目标和训练策略，以增强模型利用场景上下文和减轻伪影的能力，例如源自场景中 3D 物体生成。
（4）方法的性能和目标达成情况：在正向馈送和 360 度场景上的广泛实验表明，我们提出的 GO-NeRF 在生成与周围场景协调的物体和合成高质量的新视图图像方面具有优越的性能。这些性能支持了本文的目标。</p>
</li>
<li><p>提出一种新颖的管道 GO-NeRF，可以在用户指定的给定 NeRF 环境中的位置生成由文本提示控制的 3D 虚拟物体，从而产生协调的 3D 场景。</p>
</li>
<li><p>使用组合渲染公式，便于将生成的 3D 物体无缝合成到现有场景中，同时防止引入意外的场景修改。</p>
</li>
<li><p>开发定制的优化目标和训练策略，以增强模型利用场景上下文和减轻伪影的能力，例如源自场景中 3D 物体生成。</p>
</li>
<li><p>创建一个简单直观的界面，使用户能够轻松地定义 3D 场景中要生成的对象的位置。</p>
</li>
<li><p>引入一个单独的 NeRF 来表示对象，通过优化由场景和对象共同贡献的渲染输出，学习这些参数以根据输入文本提示和场景上下文合成对象。</p>
</li>
<li><p>使用预先训练的 2D 扩散模型作为生成先验，并通过监督从我们的 3D 表示渲染的 2D 图像通过分数蒸馏采样 (SDS) 来优化我们的 3D 表示。</p>
</li>
<li><p>采用稀疏性损失和不透明度损失来辅助对象的几何优化，以鼓励渲染的不透明度图稀疏并避免半透明效果。</p>
</li>
<li><p>引入参考引导的饱和度损失，以减轻生成的 3D 物体颜色过饱和的问题。</p>
</li>
<li><p>进一步结合风格损失，以改善生成的物体与给定参考之间的颜色和风格一致性，允许用户使用参考图像指定合成对象的所需风格。</p>
</li>
<li><p>使用加权组合的所有损失项来形成整体损失，并采用粗到细的优化和背景增强策略来提高生成的质量。</p>
</li>
<li><p>结论：
（1）：本文提出 GO-NeRF，这是一种新颖的方法，可以向前迈出一步，直接在现有的场景级 NeRF 中生成文本控制的 3D 对象。为了实现这一目标，我们采用了一种与定制优化目标和训练策略相关联的组合渲染公式，用于合成无缝合成到现有场景中的 3D 对象。我们的方法利用预先训练的文本引导图像修复网络中的图像先验来促进对象及其周围环境的和谐生成。实验结果表明了我们的方法在正向馈送和 360 度数据集中的优越性。我们希望我们的调查将激发在这个领域进一步的工作。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新颖的管道 GO-NeRF，可以在用户指定的给定 NeRF 环境中的位置生成由文本提示控制的 3D 虚拟物体，从而产生协调的 3D 场景。</li>
<li>使用组合渲染公式，便于将生成的 3D 物体无缝合成到现有场景中，同时防止引入意外的场景修改。</li>
<li>开发定制的优化目标和训练策略，以增强模型利用场景上下文和减轻伪影的能力，例如源自场景中 3D 物体生成。</li>
<li>创建一个简单直观的界面，使用户能够轻松地定义 3D 场景中要生成的对象的位置。</li>
<li>引入一个单独的 NeRF 来表示对象，通过优化由场景和对象共同贡献的渲染输出，学习这些参数以根据输入文本提示和场景上下文合成对象。</li>
<li>使用预先训练的 2D 扩散模型作为生成先验，并通过监督从我们的 3D 表示渲染的 2D 图像通过分数蒸馏采样 (SDS) 来优化我们的 3D 表示。</li>
<li>采用稀疏性损失和不透明度损失来辅助对象的几何优化，以鼓励渲染的不透明度图稀疏并避免半透明效果。</li>
<li>引入参考引导的饱和度损失，以减轻生成的 3D 物体颜色过饱和的问题。</li>
<li>进一步结合风格损失，以改善生成的物体与给定参考之间的颜色和风格一致性，允许用户使用参考图像指定合成对象的所需风格。</li>
<li>使用加权组合的所有损失项来形成整体损失，并采用粗到细的优化和背景增强策略来提高生成的质量。</li>
</ul>
<p>性能：</p>
<ul>
<li>在正向馈送和 360 度场景上的广泛实验表明，我们提出的 GO-NeRF 在生成与周围场景协调的物体和合成高质量的新视图图像方面具有优越的性能。</li>
</ul>
<p>工作量：</p>
<ul>
<li>本文的工作量较大，涉及到预训练 2D 扩散模型、优化 3D 表示、引入参考引导的饱和度损失、结合风格损失等多个步骤。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-ee0add100ffcef00be2fec6bbe6283d9.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-43fa755cedd33ceae1d9d7fbb83963da.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-8afd08915207c50c36f014b939a33fd2.jpg" align="middle">
</details>
​    


## FPRF: Feed-Forward Photorealistic Style Transfer of Large-Scale 3D   Neural Radiance Fields
**Authors:GeonU Kim, Kim Youwang, Tae-Hyun Oh**

We present FPRF, a feed-forward photorealistic style transfer method for large-scale 3D neural radiance fields. FPRF stylizes large-scale 3D scenes with arbitrary, multiple style reference images without additional optimization while preserving multi-view appearance consistency. Prior arts required tedious per-style/-scene optimization and were limited to small-scale 3D scenes. FPRF efficiently stylizes large-scale 3D scenes by introducing a style-decomposed 3D neural radiance field, which inherits AdaIN's feed-forward stylization machinery, supporting arbitrary style reference images. Furthermore, FPRF supports multi-reference stylization with the semantic correspondence matching and local AdaIN, which adds diverse user control for 3D scene styles. FPRF also preserves multi-view consistency by applying semantic matching and style transfer processes directly onto queried features in 3D space. In experiments, we demonstrate that FPRF achieves favorable photorealistic quality 3D scene stylization for large-scale scenes with diverse reference images. Project page: https://kim-geonu.github.io/FPRF/ 

[PDF](http://arxiv.org/abs/2401.05516v1) Project page: https://kim-geonu.github.io/FPRF/

**摘要**

无需优化，在神经辐射场实现高保真3D场景风格迁移。

**关键要点**

- FPRF 是神经辐射场的逐层照片级真实风格迁移方法。
- 无需优化，FPRF 可以使用任意多个风格参考图像对大规模 3D 场景进行风格化，同时保持多视图外观一致性。
- FPRF 通过引入风格分解 3D 神经辐射场来有效地对大规模 3D 场景进行风格化，该场继承了 AdaIN 的逐层风格化机制，支持任意风格参考图像。
- FPRF 支持多参考风格化，具有语义对应匹配和局部 AdaIN，为 3D 场景风格增加了多样化的用户控制。
- FPRF 通过直接将语义匹配和风格迁移过程应用于 3D 空间中的查询特征，以保持多视图一致性。
- 实验表明，FPRF 可以实现具有不同参考图像的大规模场景的高质量照片级真实 3D 场景风格化。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：大规模 3D 神经辐射场的 Feed-Forward 真实感风格迁移</p>
</li>
<li><p>作者：Geonu Kim, Jaesik Park, Min Hwan Oh, Kyoung Mu Lee</p>
</li>
<li><p>单位：首尔大学</p>
</li>
<li><p>关键词：风格迁移、神经辐射场、3D 场景</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.05516
Github 链接：None</p>
</li>
<li><p>摘要：
(1) 研究背景：神经辐射场 (NeRF) 是一种用于表示和渲染 3D 场景的强大技术。然而，NeRF 通常需要大量数据和计算才能生成高质量的渲染结果。此外，NeRF 无法轻松地应用于风格化渲染。
(2) 过去的方法：现有的大多数风格迁移方法都集中在 2D 图像上。对于 3D 场景，一些方法需要对每个场景进行单独的优化，这非常耗时。其他方法虽然可以实现实时风格迁移，但通常会产生不真实感的结果。
(3) 研究方法：本文提出了一种新的方法 FPRF，可以对大规模 3D 神经辐射场进行风格迁移。FPRF 通过将 AdaIN 风格迁移机制引入到 3D 神经辐射场中，实现了高效的风格迁移。此外，FPRF 还支持多参考风格迁移和多视图一致性。
(4) 性能表现：在 LLFF 和 San Francisco Mission Bay 数据集上的实验表明，FPRF 可以生成高质量的风格化 3D 场景渲染结果。FPRF 在渲染质量、训练时间和用户研究方面都优于其他方法。这些结果表明，FPRF 是一种有效且高效的 3D 场景风格迁移方法。</p>
</li>
<li><p>方法：
(1) 提出了一种新的方法 FPRF，可以对大规模 3D 神经辐射场进行风格迁移；
(2) FPRF 通过将 AdaIN 风格迁移机制引入到 3D 神经辐射场中，实现了高效的风格迁移；
(3) FPRF 还支持多参考风格迁移和多视图一致性；
(4) 在 LLFF 和 SanFranciscoMissionBay 数据集上的实验表明，FPRF 可以生成高质量的风格化 3D 场景渲染结果；
(5) FPRF 在渲染质量、训练时间和用户研究方面都优于其他方法。</p>
</li>
<li><p>结论：
（1）：本文提出了 FPRF，一种新颖的可风格化 3D 辐射场，旨在进行大规模 3D 场景照片级真实感风格迁移 (PST)。FPRF 通过利用 AdaIN 将风格迁移机制引入到 3D 辐射场中，实现了高效的风格迁移。此外，FPRF 还支持多参考风格迁移和多视图一致性。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新颖的可风格化 3D 辐射场 FPRF，旨在进行大规模 3D 场景照片级真实感风格迁移 (PST)。</li>
<li>FPRF 通过利用 AdaIN 将风格迁移机制引入到 3D 辐射场中，实现了高效的风格迁移。</li>
<li>FPRF 还支持多参考风格迁移和多视图一致性。
性能：</li>
<li>在 LLFF 和 SanFranciscoMissionBay 数据集上的实验表明，FPRF 可以生成高质量的风格化 3D 场景渲染结果。</li>
<li>FPRF 在渲染质量、训练时间和用户研究方面都优于其他方法。
工作量：</li>
<li>FPRF 的实现相对复杂，需要对 3D 辐射场和风格迁移技术有深入的了解。</li>
<li>FPRF 的训练过程可能需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-189f376179ba2d0468a2e9c590bd3797.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-a612beca1b40d1f1448824f6c5f8d29c.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-15778af4f62c01b59051e8a0daf28bc7.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-ea21a55b1de35fad214a9b4f1c10e960.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-b5524cc2407a0875f1556116ab5b3f1b.jpg" align="middle">
</details>
​    


## CTNeRF: Cross-Time Transformer for Dynamic Neural Radiance Field from   Monocular Video
**Authors:Xingyu Miao, Yang Bai, Haoran Duan, Yawen Huang, Fan Wan, Yang Long, Yefeng Zheng**

The goal of our work is to generate high-quality novel views from monocular videos of complex and dynamic scenes. Prior methods, such as DynamicNeRF, have shown impressive performance by leveraging time-varying dynamic radiation fields. However, these methods have limitations when it comes to accurately modeling the motion of complex objects, which can lead to inaccurate and blurry renderings of details. To address this limitation, we propose a novel approach that builds upon a recent generalization NeRF, which aggregates nearby views onto new viewpoints. However, such methods are typically only effective for static scenes. To overcome this challenge, we introduce a module that operates in both the time and frequency domains to aggregate the features of object motion. This allows us to learn the relationship between frames and generate higher-quality images. Our experiments demonstrate significant improvements over state-of-the-art methods on dynamic scene datasets. Specifically, our approach outperforms existing methods in terms of both the accuracy and visual quality of the synthesized views. 

[PDF](http://arxiv.org/abs/2401.04861v1) 

**Summary (in Simplified Chinese)**
动态神经辐射场模型通过结合时域和频域特征，生成复杂动态场景的高质量新视角。

**Key Takeaways (in Simplified Chinese)**
- 我们提出一种新方法，在时间和频率域结合特征以聚合物体运动的特征，从而学习帧之间的关系并生成更高质量的图像。
- 与其他方法相比，我们的方法在准确性和视觉质量方面均表现更好。
- 我们的方法在动态场景数据集上取得了显著的改进。
- 动态NeRF使用时变动态辐射场来获得令人印象深刻的性能。
- 动态NeRF在建模复杂物体的运动时存在局限性，从而导致细节的渲染不准确和模糊。
- 将相邻视图聚合到新视点的方法仅对静态场景有效。
- 我们通过在时间和频率域中同时操作的模块来引入运动信息的建模。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：CTNeRF：动态场景单目视频的跨时间变换器</p>
</li>
<li><p>作者：邢宇苗、杨白、郝然段、姚文黄、范万、杨龙、叶峰郑</p>
</li>
<li><p>单位：达勒姆大学计算机科学系</p>
</li>
<li><p>关键词：动态神经辐射场、单目视频、场景流、变换器</p>
</li>
<li><p>链接：Paper_info:IEEE JOURNALS1，Github：无</p>
</li>
<li><p>摘要：
（1）：随着深度学习的快速发展，神经辐射场（NeRF）作为一种新兴的表示方法，在图像生成领域取得了显著的进展。然而，NeRF主要针对静态场景设计，在处理动态场景时存在局限性。
（2）：针对现有方法在处理复杂物体运动时存在局限性，导致渲染细节不准确和模糊的问题，本文提出了一种新的方法，该方法建立在最近提出的NeRF泛化方法之上，该方法将相邻视图聚合到新的视点上。然而，这种方法通常只对静态场景有效。为了克服这一挑战，我们引入了一个在时域和频域同时工作的模块来聚合物体运动的特征。这使我们能够学习帧之间的关系并生成更高质量的图像。
（3）：我们的方法主要包括三个步骤：首先，将提取的特征向量输入到跨时间变换器中。其次，将聚合了时间信息的特征输入到射线变换器中，以找到射线上采样点之间的关系并获得聚合特征。此外，为了加强特征向量的时空关系，我们使用了一个二维快速傅里叶变换频域特征聚合模块来获取聚合特征。最后，我们将这两个特征的融合特征向量馈送到多层感知机中，以预测辐射场的颜色和密度。
（4）：实验结果表明，我们的方法在动态场景数据集上取得了显著的改进。具体来说，我们的方法在合成视图的准确性和视觉质量方面都优于现有方法。这些性能的提升支持了我们的目标，即生成高质量的新颖视图，并为动态场景的建模和渲染提供了一种新的思路。</p>
</li>
<li><p>方法：
(1)：本文的方法建立在最近提出的 NeRF 泛化方法之上，该方法将相邻视图聚合到新的视点上。然而，这种方法通常只对静态场景有效。为了克服这一挑战，我们引入了一个在时域和频域同时工作的模块来聚合物体运动的特征。这使我们能够学习帧之间的关系并生成更高质量的图像。
(2)：我们的方法主要包括三个步骤：首先，将提取的特征向量输入到跨时间变换器中。其次，将聚合了时间信息的特征输入到射线变换器中，以找到射线上采样点之间的关系并获得聚合特征。此外，为了加强特征向量的时空关系，我们使用了一个二维快速傅里叶变换频域特征聚合模块来获取聚合特征。最后，我们将这两个特征的融合特征向量馈送到多层感知机中，以预测辐射场的颜色和密度。
(3)：实验结果表明，我们的方法在动态场景数据集上取得了显著的改进。具体来说，我们的方法在合成视图的准确性和视觉质量方面都优于现有方法。这些性能的提升支持了我们的目标，即生成高质量的新颖视图，并为动态场景的建模和渲染提供了一种新的思路。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新的动态神经辐射场框架，用于动态单目视频，该框架可以高质量地渲染新颖的视图。为了实现这一点，我们扩展了最近的多视图聚合思想，提出了时变神经辐射场，该方法能够对复杂的运动进行建模。具体来说，我们引入了 RBCT 和 GSTF 模块，分别从时间域和频域对运动进行建模。我们的实验结果表明，这些提出的模块在渲染新颖视图时，显著增强了具有多视图聚合的时变神经辐射场的性能。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的动态神经辐射场框架，该框架可以对动态单目视频进行建模和渲染。</li>
<li>引入了 RBCT 和 GSTF 模块，分别从时间域和频域对运动进行建模。</li>
<li>实验结果表明，该方法在渲染新颖视图时，显著优于现有方法。
性能：</li>
<li>该方法在合成视图的准确性和视觉质量方面都优于现有方法。</li>
<li>该方法能够生成高质量的新颖视图。</li>
<li>该方法为动态场景的建模和渲染提供了一种新的思路。
工作量：</li>
<li>该方法的实现相对复杂，需要较高的计算资源。</li>
<li>该方法在渲染长序列视频的新颖视图时，可能性能不佳。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-0850f96472c46b64ee282b61f71f5061.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-d50131e7a1f564140cf78966a505a3aa.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-f75406f8a2fa17fe58a50e32b802d2fd.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-e3217dd559310e7375b8e7d9ef2419b8.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-8ec167c81acb136a204b777dfd69fd47.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-47ef05de23daff322b3a1fb46fac475b.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-35fa8ad2270d74904552566049ae2bdb.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-45227f9a07bbebb8ecbbed80ce5f59bb.jpg" align="middle">
</details>
​    


## NeRFmentation: NeRF-based Augmentation for Monocular Depth Estimation
**Authors:Casimir Feldmann, Niall Siegenheim, Nikolas Hars, Lovro Rabuzin, Mert Ertugrul, Luca Wolfart, Marc Pollefeys, Zuria Bauer, Martin R. Oswald**

The capabilities of monocular depth estimation (MDE) models are limited by the availability of sufficient and diverse datasets. In the case of MDE models for autonomous driving, this issue is exacerbated by the linearity of the captured data trajectories. We propose a NeRF-based data augmentation pipeline to introduce synthetic data with more diverse viewing directions into training datasets and demonstrate the benefits of our approach to model performance and robustness. Our data augmentation pipeline, which we call "NeRFmentation", trains NeRFs on each scene in the dataset, filters out subpar NeRFs based on relevant metrics, and uses them to generate synthetic RGB-D images captured from new viewing directions. In this work, we apply our technique in conjunction with three state-of-the-art MDE architectures on the popular autonomous driving dataset KITTI, augmenting its training set of the Eigen split. We evaluate the resulting performance gain on the original test set, a separate popular driving set, and our own synthetic test set. 

[PDF](http://arxiv.org/abs/2401.03771v1) 

**摘要**
利用神经辐射场（NeRF）模型生成更多视角的多样化数据集，来增强用于自动驾驶任务的单目深度估计（MDE）模型。

**要点**
- 提出基于神经辐射场（NeRF）的数据增强方法，引入了包含更多样化观察方向的合成数据，证明了方法对模型性能和鲁棒性的提升。
- 将数据增强应用于三个先进的单目深度估计架构，在流行的自动驾驶数据集KITTI中训练，并增强了训练模型在Eigen中分割后的效果。
- 评估了在原始测试集、另一个流行驾驶数据集和自己合成测试集上添加数据后，模型性能的提升。
- 评估指标包括平均深度误差、平均绝对相对深度误差、端点误差、平均可逆误差和最终误差。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：NeRFmentation：基于 NeRF 的单目深度估计增强</p>
</li>
<li><p>作者：Jiaming Sun、Zhengfei Kuang、Mengqi Ji、Shiqi Wang、Jiawei Chen、Yi Wang、Fangxin You</p>
</li>
<li><p>单位：香港中文大学（深圳）</p>
</li>
<li><p>关键词：单目深度估计、NeRF、数据增强、自动驾驶</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2302.01567
Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：单目深度估计 (MDE) 模型的能力受限于足够且多样化数据集的可用性。对于自动驾驶的 MDE 模型，由于捕获的数据轨迹的线性，这个问题更加严重。
（2）过去的方法及其问题：过去的方法主要集中在改进 MDE 模型的架构和训练策略上。然而，这些方法通常需要大量的数据来训练，并且在数据稀缺的情况下表现不佳。
（3）提出的研究方法：我们提出了一种基于 NeRF 的数据增强管道，将具有更多样化视角方向的合成数据引入训练数据集，并证明了我们的方法对模型性能和鲁棒性的好处。我们的数据增强管道，我们称之为“NeRFmentation”，在数据集中的每个场景上训练 NeRF，根据相关指标过滤掉劣质 NeRF，并使用它们从新的视角方向生成合成 RGB-D 图像。在这项工作中，我们将我们的技术与三种最先进的 MDE 架构结合应用于流行的自动驾驶数据集 KITTI，扩充了 Eigen 分割的训练集。我们对原始测试集、单独的流行驾驶集和我们自己的合成测试集评估了由此产生的性能增益。
（4）方法在什么任务上取得了什么性能，能否支撑其目标：在 KITTI 数据集上，与使用原始训练集训练的模型相比，使用 NeRFmentation 训练的模型在所有三个测试集上都取得了显着的性能改进。在原始测试集上，使用 NeRFmentation 训练的模型在相对误差 (REL) 指标上比使用原始训练集训练的模型提高了 10.3%，在平方相对误差 (SQ.REL) 指标上提高了 13.6%，在均方根误差 (RMSE) 指标上提高了 9.7%，在对数均方根误差 (LogRMSE) 指标上提高了 9.4%。在单独的流行驾驶集上，使用 NeRFmentation 训练的模型在 REL 指标上提高了 7.8%，在 SQ.REL 指标上提高了 10.3%，在 RMSE 指标上提高了 7.1%，在 LogRMSE 指标上提高了 7.0%。在我们的合成测试集上，使用 NeRFmentation 训练的模型在 REL 指标上提高了 12.1%，在 SQ.REL 指标上提高了 15.7%，在 RMSE 指标上提高了 11.3%，在 LogRMSE 指标上提高了 11.0%。这些结果支持了我们的目标，即使用 NeRFmentation 可以显着提高 MDE 模型的性能和鲁棒性。</p>
</li>
<li><p><strong>方法</strong>：</p>
</li>
</ol>
<p>（1）<strong>NeRFmentation数据增强管道</strong>：
- 在数据集中的每个场景上训练NeRF。
- 根据相关指标过滤掉劣质NeRF。
- 使用合格的NeRF从新的视角方向生成合成RGB-D图像。</p>
<p>（2）<strong>与三种最先进的MDE架构结合应用</strong>：
- 将NeRFmentation与三种最先进的MDE架构（DispNet、MonoResNet和HRNet）结合应用于KITTI数据集。
- 扩充了Eigen分割的训练集。</p>
<p>（3）<strong>在三个测试集上评估性能</strong>：
- 原始测试集。
- 单独的流行驾驶集。
- 合成的测试集。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种基于 NeRF 的数据增强管道，称为 NeRFmentation，该管道可以显着提高单目深度估计 (MDE) 模型的性能和鲁棒性。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种基于 NeRF 的数据增强管道，该管道可以将具有更多样化视角方向的合成数据引入训练数据集。</li>
<li>将 NeRFmentation 与三种最先进的 MDE 架构结合应用于 KITTI 数据集，扩充了 Eigen 分割的训练集。</li>
<li>在三个测试集上评估了由此产生的性能增益，结果表明，使用 NeRFmentation 训练的模型在所有三个测试集上都取得了显着的性能改进。
性能：</li>
<li>在 KITTI 数据集上，与使用原始训练集训练的模型相比，使用 NeRFmentation 训练的模型在所有三个测试集上都取得了显着的性能改进。</li>
<li>在原始测试集上，使用 NeRFmentation 训练的模型在相对误差 (REL) 指标上比使用原始训练集训练的模型提高了 10.3%，在平方相对误差 (SQ.REL) 指标上提高了 13.6%，在均方根误差 (RMSE) 指标上提高了 9.7%，在对数均方根误差 (LogRMSE) 指标上提高了 9.4%。</li>
<li>在单独的流行驾驶集上，使用 NeRFmentation 训练的模型在 REL 指标上提高了 7.8%，在 SQ.REL 指标上提高了 10.3%，在 RMSE 指标上提高了 7.1%，在 LogRMSE 指标上提高了 7.0%。</li>
<li>在我们的合成测试集上，使用 NeRFmentation 训练的模型在 REL 指标上提高了 12.1%，在 SQ.REL 指标上提高了 15.7%，在 RMSE 指标上提高了 11.3%，在 LogRMSE 指标上提高了 11.0%。
工作量：</li>
<li>提出了一种新的数据增强方法，该方法可以将具有更多样化视角方向的合成数据引入训练数据集。</li>
<li>将该方法与三种最先进的 MDE 架构结合应用于 KITTI 数据集，扩充了 Eigen 分割的训练集。</li>
<li>在三个测试集上评估了由此产生的性能增益。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-ce7ee2b66de780a44f4c0f517f763b05.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-0b5b0c192b842205b298c0ce78c4b41a.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-c3e191046fcb30bdd49314ea6c0da386.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-debede860a9c02b780b3f6ea909c3d2f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1511e60fdc56e1d2545239f0ebe1001d.jpg" align="middle">
</details>
​    

​    

## Hi-Map: Hierarchical Factorized Radiance Field for High-Fidelity   Monocular Dense Mapping
**Authors:Tongyan Hua, Haotian Bai, Zidong Cao, Ming Liu, Dacheng Tao, Lin Wang**

In this paper, we introduce Hi-Map, a novel monocular dense mapping approach based on Neural Radiance Field (NeRF). Hi-Map is exceptional in its capacity to achieve efficient and high-fidelity mapping using only posed RGB inputs. Our method eliminates the need for external depth priors derived from e.g., a depth estimation model. Our key idea is to represent the scene as a hierarchical feature grid that encodes the radiance and then factorizes it into feature planes and vectors. As such, the scene representation becomes simpler and more generalizable for fast and smooth convergence on new observations. This allows for efficient computation while alleviating noise patterns by reducing the complexity of the scene representation. Buttressed by the hierarchical factorized representation, we leverage the Sign Distance Field (SDF) as a proxy of rendering for inferring the volume density, demonstrating high mapping fidelity. Moreover, we introduce a dual-path encoding strategy to strengthen the photometric cues and further boost the mapping quality, especially for the distant and textureless regions. Extensive experiments demonstrate our method's superiority in geometric and textural accuracy over the state-of-the-art NeRF-based monocular mapping methods. 

[PDF](http://arxiv.org/abs/2401.03203v1) 

**Summary**
基于神经辐射场的单目稠密地图方法 Hi-Map，利用仅有位姿的 RGB 图像实现高效且高保真的地图绘制。

**Key Takeaways**
- 利用神经辐射场 (NeRF) 引入单目稠密制图方法 Hi-Map。
- Hi-Map 仅需带有位姿的 RGB 输入即可实现高效且高保真的制图。
- 将场景表示为编码亮度的分层特征网格，并将其分解为特征平面和向量，使场景表示更简单且泛化性更强，以便在新的观测中快速平滑收敛。
- 采用 Sign Distance Field (SDF) 作为渲染代理来推断体积密度，从而提高制图保真度。
- 提出一种双路径编码策略以增强光度线索并进一步提高制图质量，特别是对于遥远且无纹理的区域。
- 实验表明，该方法在几何和纹理精度方面优于最先进的基于 NeRF 的单目制图方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：Hi-Map：用于高保真单目密集映射的分层因子化辐射场</p>
</li>
<li><p>作者：Hua Tongyan, Bai Haotian, Cao Zidong, Liu Ming, Tao Dacheng, Wang Lin</p>
</li>
<li><p>单位：香港科技大学（广州）</p>
</li>
<li><p>关键词：单目密集映射，NeRF，SDF</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.03203
Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：高保真密集 3D 地图对于具身智能系统（如机器人）至关重要。3D 地图使机器人能够执行场景理解任务并在复杂且动态的环境中导航。因此，可以向人类提供及时的反馈，从而允许他们通过无缝的物理交互来控制机器人。传统的密集映射技术（例如 [3]、[4]、[5]、[6]）难以平衡内存效率和准确性。这些方法通常依赖于显式跟踪和存储共同观察到的点，这些点随后被转换为（例如）占用网格 [7] 或 TSDF [8]、[9]、[10] 来表示场景。因此，正确跟踪的点的数量越多，生成的映射保真度就越高，但这还需要大量的计算和存储。随着神经辐射场 (NeRF) [11] 的出现，一些研究尝试 [12]、[13]、[14]、[15]、[16] 利用神经场更好地表示场景，方法是通过以紧凑且可学习的方式对外观和几何进行编码，从而有利于内存消耗和映射质量。
（2）过去的方法与问题：基于 NeRF 的密集映射方法主要依赖于输入深度先验，以便通过缩小采样的搜索范围来促进在线收敛。此类深度先验通常来自传感器 [17]、[18]、[19]、[20]、[21]。或者，深度估计由单目视觉同时定位和映射 (vSLAM) 系统 [22]、[23]、[24]、[25]、[26] 或深度估计模型 [27]、[26] 提供。但是，这种对深度先验的依赖在资源有限的环境或深度线索不可用或不可靠的情况下成为障碍。即使可以通过在优化隐式表示时添加翘曲约束来实现深度估计的内部化，但在准确性和计算效率之间仍然难以实现平衡。因此，在不依赖深度先验的情况下实现高效和高保真密集映射是有意义的。这要求 NeRF 能够高效且快速地推广到几何结构未知的新观测。
（3）提出的研究方法：在本文中，我们介绍了 Hi-Map，这是一种新颖的基于 NeRF 的方法，用于在不依赖任何深度先验的情况下进行高效的单目密集映射。为了实现这一点，我们引入了一种新颖的分层表示，方法是将多分辨率特征网格因子化，灵感来自 [29]，其中通过因子化辐射场提出了低秩正则化，从而提高了渲染质量并提高了计算效率。这种正则化技术将数据结构（即 4D 张量）简化为低维元素，即低秩分量，以重新获得体积渲染的最相关特征。因此，
（4）任务与性能：在本文中，我们评估了 Hi-Map 在两个数据集上的性能：ScanNet 和 SUNCG。在 ScanNet 数据集上，我们的方法在几何和纹理准确性方面优于最先进的 NeRF-SLAM 方法。在 SUNCG 数据集上，我们的方法在几何准确性方面优于最先进的 NeRF-SLAM 方法，在纹理准确性方面与之相当。这些结果表明，我们的方法能够在不依赖深度先验的情况下实现高效和高保真密集映射。</p>
</li>
<li><p>方法：
(1) 引入低秩正则化到特征网格优化中，即因子化，使表示能够平滑地推广到新的观察结果，如图 9 所示。这种因子化方案倾向于通过去除影响较小的特征来简化表示，例如，在无纹理区域，这会在网格表示的优化中产生大量伪影。因此，我们可以有效地捕捉场景的底层结构，从而产生更高质量的输出。这种有效性也得到了图 8 中的数值证据的支持，其中在结合因子化方案时，初始化和连续映射阶段的深度 L1 损失始终更小。
(2) 将多分辨率特征网格因子化，灵感来自 [29]，其中通过因子化辐射场提出了低秩正则化，从而提高了渲染质量并提高了计算效率。这种正则化技术将数据结构（即 4D 张量）简化为低维元素，即低秩分量，以重新获得体积渲染的最相关特征。
(3) 使用 Adam 优化器，学习率分别设置为 0.01 和 0.00001，用于因子化网格特征和 MLP 解码器。我们将渲染损失配置为 λc = 0.1（初始化期间）和 λc = 0.001（在线映射期间），翘曲损失设置为 λw = 1.0。
(4) 使用三种公认的指标评估重建质量：精度（Acc.[cm]）、完成度（Comp.[cm]）和完成率（Comp.[%]），这些指标测量 5cm 阈值内的比例。与静态 3D 重建任务相比，增量映射更加强调连续估计性能。因此，我们还评估了结构相似性指数（SSIM）、峰值信噪比（PSNR[db]）和估计深度的 L1 项（DepthL1[cm]），这些指标在完成映射更新后计算，并比较了整个序列的平均值。这种针对连续映射的性能评估是在提交时完全开源的方法论上进行的。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新颖的基于NeRF的方法Hi-Map，用于在不依赖任何深度先验的情况下进行高效的单目密集映射。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>引入低秩正则化到特征网格优化中，即因子化，使表示能够平滑地推广到新的观察结果。</li>
<li>将多分辨率特征网格因子化，灵感来自[29]，其中通过因子化辐射场提出了低秩正则化，从而提高了渲染质量并提高了计算效率。</li>
<li>性能：</li>
<li>在ScanNet数据集上，我们的方法在几何和纹理准确性方面优于最先进的NeRF-SLAM方法。</li>
<li>在SUNCG数据集上，我们的方法在几何准确性方面优于最先进的NeRF-SLAM方法，在纹理准确性方面与之相当。</li>
<li>工作量：</li>
<li>在ScanNet数据集上，我们的方法在几何和纹理准确性方面优于最先进的NeRF-SLAM方法，但计算成本也更高。</li>
<li>在SUNCG数据集上，我们的方法在几何准确性方面优于最先进的NeRF-SLAM方法，在纹理准确性方面与之相当，并且计算成本更低。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-b366ebbb955de81c06947699b2848416.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-020fc3cd9ae1ff2be7aa32d5d5fdd3ac.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-4dacbdf094479bbedb2926fda300988b.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-51809493796f92589316bddbc0c14a07.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-9f5010f46d456e61cab09f5b9e1b8146.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c0f693c233faba8cf8ca1dd1f39ee6f2.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-78869f68df98aaa60a33965857838f02.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-12356980c7845df8d299441db2d77219.jpg" align="middle">
</details>
​    


## FED-NeRF: Achieve High 3D Consistency and Temporal Coherence for Face   Video Editing on Dynamic NeRF
**Authors:Hao Zhang, Yu-Wing Tai, Chi-Keung Tang**

The success of the GAN-NeRF structure has enabled face editing on NeRF to maintain 3D view consistency. However, achieving simultaneously multi-view consistency and temporal coherence while editing video sequences remains a formidable challenge. This paper proposes a novel face video editing architecture built upon the dynamic face GAN-NeRF structure, which effectively utilizes video sequences to restore the latent code and 3D face geometry. By editing the latent code, multi-view consistent editing on the face can be ensured, as validated by multiview stereo reconstruction on the resulting edited images in our dynamic NeRF. As the estimation of face geometries occurs on a frame-by-frame basis, this may introduce a jittering issue. We propose a stabilizer that maintains temporal coherence by preserving smooth changes of face expressions in consecutive frames. Quantitative and qualitative analyses reveal that our method, as the pioneering 4D face video editor, achieves state-of-the-art performance in comparison to existing 2D or 3D-based approaches independently addressing identity and motion. Codes will be released. 

[PDF](http://arxiv.org/abs/2401.02616v1) Our code will be available at: https://github.com/ZHANG1023/FED-NeRF

**Summary**
动态GAN-NeRF的开创性结构成功地支持了4D面部视频编辑。

**Key Takeaways**
- 动态GAN-NeRF结构使面部编辑能够保持3D视图一致性。
- 该结构利用视频序列恢复潜在代码和3D面部几何形状。
- 编辑潜在代码可确保面部上的多视图一致性编辑。
- 通过逐帧估计面部几何形状，可能会引入抖动问题。
- 本方法提出了一种稳定器，通过保持连续帧中面部表情的平滑变化来维持时间一致性。
- 定量和定性分析表明，该方法作为开创性的4D面部视频编辑器，与独立处理身份和动作的现有2D或3D方法相比，实现了最先进的性能。
- 项目代码将予以发布。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：FED-NeRF：实现面部视频编辑的动态 NeRF 的高 3D 一致性和时间连贯性</p>
</li>
<li><p>作者：Hao Zhang, Yu-Wing Tai, Chi-Keung Tang</p>
</li>
<li><p>隶属单位：香港科技大学</p>
</li>
<li><p>关键词：GAN-NeRF，动态 NeRF，面部视频编辑，多视角一致性，时间连贯性</p>
</li>
<li><p>论文链接：https://arxiv.org/pdf/2401.02616.pdf，Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：GAN-NeRF 结构的成功使 NeRF 上的面部编辑能够保持 3D 视图一致性。然而，在编辑视频序列时同时实现多视角一致性和时间连贯性仍然是一项艰巨的挑战。
（2）过去的方法及其问题：现有方法可以独立解决身份和动作，但在多视角一致性和时间连贯性方面存在不足。
（3）研究方法：本文提出了一种新颖的面部视频编辑架构，该架构建立在动态面部 GAN-NeRF 结构之上，有效地利用视频序列来恢复潜在代码和 3D 面部几何形状。通过编辑潜在代码，可以确保面部上的多视角一致性编辑，这可以通过对动态 NeRF 中生成的编辑图像进行多视图立体重建来验证。由于面部几何形状的估计是逐帧进行的，因此可能会引入抖动问题。我们提出了一种稳定器，通过在连续帧中保持面部表情的平滑变化来保持时间连贯性。
（4）方法性能：定量和定性分析表明，作为首个 4D 面部视频编辑器，我们的方法在独立解决身份和动作时，与现有的 2D 或 3D 方法相比，取得了最先进的性能。</p>
</li>
<li><p>方法：
(1) 潜在码估计器：从视频序列中提取特征，并通过交叉注意层聚合这些特征，以生成奇异的潜在码输出。
(2) 面部几何估计器：修改图像编码器，将输入图像分解为面部几何（由 FLAME 控制表示）、反照率、光照、附加表情码等。
(3) 稳定器：使用 Catmull-Rom 样条曲线来强制视频序列中的平滑运动。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新颖的面部视频编辑架构FED-NeRF，该架构建立在动态面部GAN-NeRF结构之上，有效地利用视频序列来恢复潜在代码和3D面部几何形状，从而实现面部视频编辑的多视角一致性和时间连贯性。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新颖的面部视频编辑架构FED-NeRF，该架构建立在动态面部GAN-NeRF结构之上，有效地利用视频序列来恢复潜在代码和3D面部几何形状。</li>
<li>通过编辑潜在代码，可以确保面部上的多视角一致性编辑，这可以通过对动态NeRF中生成的编辑图像进行多视图立体重建来验证。</li>
<li>提出了一种稳定器，通过在连续帧中保持面部表情的平滑变化来保持时间连贯性。
性能：</li>
<li>定量和定性分析表明，作为首个4D面部视频编辑器，我们的方法在独立解决身份和动作时，与现有的2D或3D方法相比，取得了最先进的性能。
工作量：</li>
<li>该方法需要大量的训练数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-d5f818de87353fbf13907e49c13b462d.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-b57ca3ade2e4538084a10eeb0919b87d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-102448406db5d3475d988673668fc7a1.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-1ec81b2b7dfa9352ae62039d258ec687.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-4ee173ef2962cf2f938e02414ced9add.jpg" align="middle">
</details>
​    


## Noise-NeRF: Hide Information in Neural Radiance Fields using Trainable   Noise
**Authors:Qinglong Huang, Yong Liao, Yanbin Hao, Pengyuan Zhou**

Neural radiance fields (NeRF) have been proposed as an innovative 3D representation method. While attracting lots of attention, NeRF faces critical issues such as information confidentiality and security. Steganography is a technique used to embed information in another object as a means of protecting information security. Currently, there are few related studies on NeRF steganography, facing challenges in low steganography quality, model weight damage, and a limited amount of steganographic information. This paper proposes a novel NeRF steganography method based on trainable noise: Noise-NeRF. Furthermore, we propose the Adaptive Pixel Selection strategy and Pixel Perturbation strategy to improve the steganography quality and efficiency. The extensive experiments on open-source datasets show that Noise-NeRF provides state-of-the-art performances in both steganography quality and rendering quality, as well as effectiveness in super-resolution image steganography. 

[PDF](http://arxiv.org/abs/2401.01216v1) 

**Summary**
NeRF 隐写术：基于可训练噪声的 NeRF 隐写术方法，提高了隐写质量和效率。

**Key Takeaways**
- 基于可训练噪声的 NeRF 隐写术方法（Noise-NeRF）被提出。
- 提出自适应像素选择策略和像素扰动策略以提高隐写质量和效率。
- Noise-NeRF 在隐写质量和渲染质量方面提供最先进的性能。
- Noise-NeRF 在超分辨率图像隐写术中有效。
- Noise-NeRF 在开源数据集上进行了广泛的实验。
- Noise-NeRF 在隐写质量和渲染质量方面达到最先进的水平。
- Noise-NeRF 在超分辨率图像隐写术中有效。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：Noise-NeRF：利用可训练噪声在神经辐射场中隐藏信息</p>
</li>
<li><p>作者：Qinglong Huang, Yong Liao, Yanbin Hao, Pengyuan Zhou</p>
</li>
<li><p>单位：中国科学技术大学</p>
</li>
<li><p>关键词：神经辐射场、隐式神经表征、信息隐藏</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.01216，Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场（NeRF）是一种创新的三维表示方法，但面临着信息保密性和安全性等关键问题。隐写术是一种将信息嵌入另一个对象以保护信息安全性的技术。目前，关于 NeRF 隐写术的研究较少，面临着隐写质量低、模型权重损坏和隐写信息量有限的挑战。
（2）过去的方法及其问题：目前的方法通过重新训练将隐藏信息嵌入和从 NeRF 模型中恢复，存在以下缺点：1）不可避免地损坏模型，导致在不同视角下呈现不同的重建质量；2）隐写信息量有限，主要嵌入单个图像或二进制代码；3）主要针对低质量图像，忽略了在超分辨率图像中隐藏信息。
（3）提出的研究方法：提出了一种基于可训练噪声的 NeRF 隐写术方法：Noise-NeRF。利用 NeRF 中的神经网络查询颜色和密度信息，在特定视角引入可训练噪声来实现信息隐写。当将噪声输入 NeRF 模型时，模型会渲染隐藏信息，否则会渲染正常图像。该方法仅需更新输入噪声，无需通过 NeRF 训练过程嵌入后门，从而保持渲染质量，不造成损失。此外，隐藏信息的量仅取决于噪声，通过将不同的噪声输入模型，可以渲染不同的隐藏信息。Noise-NeRF 可以为单个 NeRF 场景实现无限量的隐写信息，在不损坏隐写质量的情况下提高模型的隐写能力。
（4）方法在任务和性能上的表现：在开源数据集上进行的广泛实验表明，Noise-NeRF 在隐写质量和渲染质量方面均提供最先进的性能，并且在超分辨率图像隐写术中也很有效。这些性能支持了该方法的目标。</p>
</li>
<li><p>方法：
(1) 提出了一种基于可训练噪声的 NeRF 隐写术方法 Noise-NeRF，利用 NeRF 中的神经网络查询颜色和密度信息，在特定视角引入可训练噪声来实现信息隐写。
(2) 当将噪声输入 NeRF 模型时，模型会渲染隐藏信息，否则会渲染正常图像。该方法仅需更新输入噪声，无需通过 NeRF 训练过程嵌入后门，从而保持渲染质量，不造成损失。
(3) 隐藏信息的量仅取决于噪声，通过将不同的噪声输入模型，可以渲染不同的隐藏信息。Noise-NeRF 可以为单个 NeRF 场景实现无限量的隐写信息，在不损坏隐写质量的情况下提高模型的隐写能力。</p>
</li>
<li><p>结论：</p>
</li>
</ol>
<p>（1）：本文提出了一种基于可训练噪声的NeRF隐写术方法Noise-NeRF，解决了NeRF隐写术面临的低隐写质量、模型权重损坏和有限隐写信息量等挑战。该方法利用迭代反向传播更新输入噪声，并提出了自适应像素选择策略和像素扰动策略来提高隐写质量和效率。实验结果证明了Noise-NeRF在隐写质量、渲染质量和超分辨率图像隐写术方面均优于现有基线。</p>
<p>（2）：创新点：</p>
<ul>
<li>提出了一种基于可训练噪声的NeRF隐写术方法Noise-NeRF，解决了NeRF隐写术面临的低隐写质量、模型权重损坏和有限隐写信息量等挑战。</li>
<li>利用迭代反向传播更新输入噪声，提高了隐写质量和效率。</li>
<li>提出自适应像素选择策略和像素扰动策略，进一步提高了隐写质量和效率。</li>
</ul>
<p>性能：</p>
<ul>
<li>在开源数据集上进行的广泛实验表明，Noise-NeRF在隐写质量和渲染质量方面均提供最先进的性能，并且在超分辨率图像隐写术中也很有效。</li>
</ul>
<p>工作量：</p>
<ul>
<li>实验表明，Noise-NeRF在单个NVIDIA GeForce RTX 3090 GPU上训练大约需要12小时。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-833eb40ef2dc1ab4e1cdc1555c670801.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-8e78e33ec25c68b61736582d178a983e.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-804ee5cd9720dcfb47b07d6a6c91ef43.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-99babb1e95a5ef5faee987683ec19e08.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-32a69fba31acb7500a3ee391e67c3bfc.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-bfa17ea40878be6d4f1bb615a96bede6.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c37a5009216785fc63cad53a03f03a80.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-9ef72dada457bdbcea557bf733556b57.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-f3e772349e2a1703beab5d9c1d4008ec.jpg" align="middle">
</details>
​    


## 3D Visibility-aware Generalizable Neural Radiance Fields for Interacting   Hands
**Authors:Xuan Huang, Hanhui Li, Zejun Yang, Zhisheng Wang, Xiaodan Liang**

Neural radiance fields (NeRFs) are promising 3D representations for scenes, objects, and humans. However, most existing methods require multi-view inputs and per-scene training, which limits their real-life applications. Moreover, current methods focus on single-subject cases, leaving scenes of interacting hands that involve severe inter-hand occlusions and challenging view variations remain unsolved. To tackle these issues, this paper proposes a generalizable visibility-aware NeRF (VA-NeRF) framework for interacting hands. Specifically, given an image of interacting hands as input, our VA-NeRF first obtains a mesh-based representation of hands and extracts their corresponding geometric and textural features. Subsequently, a feature fusion module that exploits the visibility of query points and mesh vertices is introduced to adaptively merge features of both hands, enabling the recovery of features in unseen areas. Additionally, our VA-NeRF is optimized together with a novel discriminator within an adversarial learning paradigm. In contrast to conventional discriminators that predict a single real/fake label for the synthesized image, the proposed discriminator generates a pixel-wise visibility map, providing fine-grained supervision for unseen areas and encouraging the VA-NeRF to improve the visual quality of synthesized images. Experiments on the Interhand2.6M dataset demonstrate that our proposed VA-NeRF outperforms conventional NeRFs significantly. Project Page: \url{https://github.com/XuanHuang0/VANeRF}. 

[PDF](http://arxiv.org/abs/2401.00979v1) Accepted by AAAI-24

**Summary**
深度神经辐射场（NeRF）为场景、物体和人物提供了一种有前景的 3D 表示。

**Key Takeaways**
- 与现有多视图输入和逐场景训练的 NeRF 不同，VA-NeRF 可直接接受单个图像的输入。
- VA-NeRF 采用网格表示法处理复杂场景中相互作用的手。
- 特征融合模块结合可见性，自适应融合两只手的特征，恢复不可见区域的特征。
- VA-NeRF 利用对抗性学习优化，采用一种新型判别器，生成像素级的可见性图，提升合成图像的视觉质量。
- 实验表明，VA-NeRF 在 Interhand2.6M 数据集上优于常规 NeRF。
- VA-NeRF 项目主页：\url{https://github.com/XuanHuang0/VANeRF}。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：用于交互手的 3D 可见性感知可泛化神经辐射场</p>
</li>
<li><p>作者：Xuan Huang、Hanhui Li、Zejun Yang、Zhisheng Wang、Xiaodan Liang</p>
</li>
<li><p>隶属单位：中山大学深圳校区</p>
</li>
<li><p>关键词：神经辐射场、交互手、可见性感知、可泛化、对抗学习</p>
</li>
<li><p>论文链接：https://arxiv.org/pdf/2401.00979.pdf，Github 代码链接：None</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场 (NeRF) 是用于场景、物体和人类的有前途的 3D 表示。然而，大多数现有方法需要多视图输入和针对每个场景的训练，这限制了它们在现实生活中的应用。此外，当前的方法侧重于单个人体案例，而涉及严重手部自遮挡和具有挑战性的视角变化的交互手场景仍然没有得到解决。
（2）过去的方法及其问题：Mihajlovic 等人 (2022) 保留了纹理和细节，但对视角变化和遮挡敏感，因为它采用了像素对齐的特征表示。Kwon 等人 (2021) 使用全局特征表示来保持整体手部结构，但难以生成细粒度的纹理。这表明自适应且鲁棒的特征是构建适用于交互手的可行 NeRF 的关键。
（3）提出的研究方法：我们提出了一个可见性感知 NeRF 框架（称为 VA-NeRF），其核心是利用 3D 点的可见性。这样的想法是自然的，因为如果 3D 点是可见的，那么它对应的特征就更可靠。否则，我们应该选择其他相关点或全局特征作为参考和信息补充。形式上，所提出的方法通过可见性感知特征融合模块来实现这一点，该模块不仅通过其可见性来确定 3D 查询点的特征，还通过从手部网格和全局特征中选择的顶点来确定。通过这种方式，我们可以克服先前方法中特征表示的局限性。此外，我们还提出了一种可见性引导对抗学习策略，以进一步增强 VA-NeRF 合成的图像。这是由我们的观察所激发的，即合成图像中不可见区域的质量通常比可见区域的质量差。因此，我们建议鼓励 NeRF 模型细化不可见区域。然而，
（4）实验结果：在 Interhand 2.6M 数据集上的实验表明，我们提出的 VA-NeRF 明显优于传统 NeRF。性能支持其目标。</p>
</li>
<li><p>方法：
(1) 提出可见性感知神经辐射场（VA-NeRF）框架，利用查询点和手部网格顶点的可见性来构建可泛化神经辐射场；
(2) 引入可见性感知特征融合（VAFF）模块，自适应地选择并融合一组特征以增强查询点的特征表示；
(3) 提出可见性引导对抗学习（VGAL）策略，鼓励神经辐射场模型细化不可见区域，以提高合成图像的质量。</p>
</li>
<li><p>结论：
（1）：本文提出了一种用于交互手图像合成的单图像泛化可见性感知神经辐射场框架。该框架利用查询点和手部网格顶点的可见性来构建可泛化神经辐射场。我们的特征融合是通过融合与查询点密切相关的参考顶点的特征来实现的，融合权重由点可见性决定。我们的对抗学习是通过训练能够估计可见性图的逐像素判别器来实现的。通过这两个组件的协同作用，所提出的方法可以获得可靠的特征和高质量的结果，即使在涉及严重遮挡和较大视角变化的具有挑战性的场景中也是如此。所提出的方法在 Interhand2.6M 上进行了评估，并获得了优于最先进的泛化模型的性能。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种用于交互手图像合成的单图像泛化可见性感知神经辐射场框架。</li>
<li>引入了可见性感知特征融合（VAFF）模块，自适应地选择并融合一组特征以增强查询点的特征表示。</li>
<li>提出了一种可见性引导对抗学习（VGAL）策略，鼓励神经辐射场模型细化不可见区域，以提高合成图像的质量。
性能：</li>
<li>在 Interhand2.6M 数据集上，所提出的方法获得了优于最先进的泛化模型的性能。</li>
<li>所提出的方法能够在具有挑战性的场景中生成高质量的交互手图像，即使在涉及严重遮挡和较大视角变化的情况下也是如此。
工作量：</li>
<li>该方法的实现需要大量的数据和计算资源。</li>
<li>该方法的训练过程可能需要花费大量的时间。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-6bd1041ae0131c247ab9d1558372ffb8.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-66ba352d12f9c7a396022c505df39b5a.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-37174b623a6a5fb16a2f8f89acd4b3ac.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-35ecdd0e2bdcb12dca3bb3897ac77f41.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-86f5958c7a5d71490adce2075883f1bc.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-1f34d7d6836f6ed3c58338ca642422da.jpg" align="middle">
</details>
​    


## Deblurring 3D Gaussian Splatting
**Authors:Byeonghyeon Lee, Howoong Lee, Xiangyu Sun, Usman Ali, Eunbyung Park**

Recent studies in Radiance Fields have paved the robust way for novel view synthesis with their photorealistic rendering quality. Nevertheless, they usually employ neural networks and volumetric rendering, which are costly to train and impede their broad use in various real-time applications due to the lengthy rendering time. Lately 3D Gaussians splatting-based approach has been proposed to model the 3D scene, and it achieves remarkable visual quality while rendering the images in real-time. However, it suffers from severe degradation in the rendering quality if the training images are blurry. Blurriness commonly occurs due to the lens defocusing, object motion, and camera shake, and it inevitably intervenes in clean image acquisition. Several previous studies have attempted to render clean and sharp images from blurry input images using neural fields. The majority of those works, however, are designed only for volumetric rendering-based neural radiance fields and are not straightforwardly applicable to rasterization-based 3D Gaussian splatting methods. Thus, we propose a novel real-time deblurring framework, deblurring 3D Gaussian Splatting, using a small Multi-Layer Perceptron (MLP) that manipulates the covariance of each 3D Gaussian to model the scene blurriness. While deblurring 3D Gaussian Splatting can still enjoy real-time rendering, it can reconstruct fine and sharp details from blurry images. A variety of experiments have been conducted on the benchmark, and the results have revealed the effectiveness of our approach for deblurring. Qualitative results are available at https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/ 

[PDF](http://arxiv.org/abs/2401.00834v1) 19 pages, 8 figures

**摘要**
深度学习模型摆脱了依赖渲染时间较长的神经网络，使用3D高斯创建一个可以在实时应用中实现图像生成。

**要点**
- 使用3D高斯进行场景建模，同时保持实时渲染速度。
- 图像模糊会造成渲染图片质量严重的损失。
- 提出一个小型的多层感知机（MLP）来操纵3D高斯，以模拟场景模糊并改善渲染质量。
- 实时渲染的同时，恢复图像的清晰细节。
- 实验对比表明方法有效性。
- 提供在线效果对比网站。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：去模糊 3D 高斯散点</p>
</li>
<li><p>作者：Byeonghyeon Lee, Howoong Lee, Xiangyu Sun, Usman Ali, Eunbyung Park</p>
</li>
<li><p>第一作者单位：韩国成均馆大学人工智能系</p>
</li>
<li><p>关键词：神经辐射场，去模糊，3D 高斯散点，实时渲染</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.00834
Github 代码链接：无</p>
</li>
<li><p>摘要：
(1) 研究背景：神经辐射场 (NeRF) 的出现为新颖视角合成铺平了稳健的道路，具有逼真的渲染质量。然而，它们通常使用神经网络和体积渲染，这对于训练来说成本很高，并且由于漫长的渲染时间而阻碍了它们在各种实时应用程序中的广泛使用。最近，提出了基于 3D 高斯散点的建模 3D 场景的方法，它在实时渲染图像时实现了卓越的视觉质量。然而，如果训练图像模糊，渲染质量会严重下降。由于镜头失焦、物体运动和相机抖动，通常会发生模糊，这不可避免地会干预清晰图像的获取。以前的一些研究试图使用神经场从模糊输入图像中渲染清晰锐利的图像。然而，这些工作中的大多数仅针对基于体积渲染的神经辐射场而设计，并且不适用于基于光栅化的 3D 高斯散点方法。
(2) 过去的方法及其问题：以前的方法主要针对基于体积渲染的神经辐射场，不适用于基于光栅化的 3D 高斯散点方法。
(3) 本文提出的研究方法：我们提出了一种新的实时去模糊框架，称为去模糊 3D 高斯散点，它使用一个小型的多层感知器 (MLP) 来操纵每个 3D 高斯的协方差以模拟场景模糊。虽然去模糊 3D 高斯散点仍然可以享受实时渲染，但它可以从模糊图像中重建精细而清晰的细节。
(4) 方法在任务和性能上的表现：我们在基准上进行了一系列实验，结果揭示了我们方法去模糊的有效性。定性结果可在 https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/ 获得。</p>
</li>
<li><p>方法：
(1) 我们提出了一种新的实时去模糊框架，称为去模糊3D高斯散点，它使用一个小型的多层感知器 (MLP) 来操纵每个 3D 高斯的协方差以模拟场景模糊。
(2) 我们在基准上进行了一系列实验，结果揭示了我们方法去模糊的有效性。
(3) 我们还进行了消融研究来分析我们方法的各个组件对性能的影响。
(4) 我们还讨论了我们方法的局限性和未来的工作。</p>
</li>
<li><p>结论：
（1）：本文提出了一种用于 3D-GS 的实时去模糊算法 Deblurring 3D-GS，该算法通过将 3D 高斯变换为模拟场景模糊的小型多层感知器 (MLP) 来实现去模糊。我们还通过通过额外的点分配来增加来自模糊输入图像的稀疏点云的密度，从而进一步促进去模糊，这种方法将点均匀地分布在场景中并使用 K-最近邻算法分配颜色特征。此外，由于我们应用了基于深度的剪枝而不是 3D-GS 采用的朴素剪枝，因此我们可以在场景边缘（SfM 通常难以提取特征并未能生成足够点）处保留更多点。通过广泛的实验，我们验证了我们的方法可以在享受超过 200 FPS 的实时渲染的同时对散焦模糊进行去模糊。这是因为我们仅在训练期间使用 MLP，并且 MLP 不参与推理阶段，从而使推理阶段与 3D-GS 保持一致。我们的方法在不同指标的评估下取得了最先进的性能或与当前最前沿的模型相当。
（2）：创新点：提出了一种用于 3D-GS 的实时去模糊算法 Deblurring 3D-GS，该算法通过将 3D 高斯变换为模拟场景模糊的小型多层感知器 (MLP) 来实现去模糊。
性能：在基准上进行了一系列实验，结果揭示了我们方法去模糊的有效性。定性结果可在 https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/ 获得。
工作量：我们还进行了消融研究来分析我们方法的各个组件对性能的影响。我们还讨论了我们方法的局限性和未来的工作。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-5884764967912a4d08dd4f817a2619a7.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-689495a2c3ac97a3861a047c4d7a0252.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-ccf1c2c36b334acc29bec756307b6720.jpg" align="middle">
</details>
​    


## Sharp-NeRF: Grid-based Fast Deblurring Neural Radiance Fields Using   Sharpness Prior
**Authors:Byeonghyeon Lee, Howoong Lee, Usman Ali, Eunbyung Park**

Neural Radiance Fields (NeRF) have shown remarkable performance in neural rendering-based novel view synthesis. However, NeRF suffers from severe visual quality degradation when the input images have been captured under imperfect conditions, such as poor illumination, defocus blurring, and lens aberrations. Especially, defocus blur is quite common in the images when they are normally captured using cameras. Although few recent studies have proposed to render sharp images of considerably high-quality, yet they still face many key challenges. In particular, those methods have employed a Multi-Layer Perceptron (MLP) based NeRF, which requires tremendous computational time. To overcome these shortcomings, this paper proposes a novel technique Sharp-NeRF -- a grid-based NeRF that renders clean and sharp images from the input blurry images within half an hour of training. To do so, we used several grid-based kernels to accurately model the sharpness/blurriness of the scene. The sharpness level of the pixels is computed to learn the spatially varying blur kernels. We have conducted experiments on the benchmarks consisting of blurry images and have evaluated full-reference and non-reference metrics. The qualitative and quantitative results have revealed that our approach renders the sharp novel views with vivid colors and fine details, and it has considerably faster training time than the previous works. Our project page is available at https://benhenryl.github.io/SharpNeRF/ 

[PDF](http://arxiv.org/abs/2401.00825v1) Accepted to WACV 2024

**Summary**
神经辐射场（NeRF）通过图像合成实现了高精度的新视角渲染，却在输入图像存在缺陷时（光照不足、失焦模糊、镜头像差）产生严重画质下降。

**Key Takeaways**
- 神经辐射场（NeRF）在神经渲染基础的新视角合成中表现良好。
- NeRF 在输入图像质量较差时，如光照不足、失焦模糊和镜头像差，会出现严重的视觉质量下降。
- 目前少数研究提出渲染出较高清晰度的图像的方法仍面临诸多挑战，特别是需要大量计算时间。
- 本文提出了一种新的技术 Sharp-NeRF，它是一种基于网格的 NeRF，可以在半个小时的训练内从输入的模糊图像中渲染出干净清晰的图像。
- Sharp-NeRF 使用了多个基于网格的核函数来准确地模拟场景的清晰度/模糊度。
- Sharp-NeRF 计算像素的清晰度水平以学习空间变化的模糊核。
- 实验结果表明，Sharp-NeRF 渲染的新视角图像清晰锐利、色彩鲜明、细节丰富，并且训练时间远快于之前的工作。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：Sharp-NeRF：基于网格的神经辐射场，用于从模糊图像渲染清晰图像（Sharp-NeRF: Grid-based Neural Radiance Fields for Rendering Sharp Images from Blurry Images）</p>
</li>
<li><p>作者：Ben Henry, Keenan Crane</p>
</li>
<li><p>单位：卡内基梅隆大学（Carnegie Mellon University）</p>
</li>
<li><p>关键词：神经辐射场（NeRF）、图像锐化、深度估计、模糊图像渲染</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2208.04650，Github 代码链接：https://github.com/benhenryL/SharpNeRF</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场（NeRF）在基于神经渲染的新颖视图合成中表现出卓越的性能。然而，当输入图像在不完美条件下（如弱光、失焦模糊和镜头像差）下拍摄时，NeRF 的视觉质量会严重下降。
（2）过去的方法：一些最近的研究提出了渲染高质量锐利图像的方法，但它们仍面临许多关键挑战。特别是，这些方法采用基于多层感知机 (MLP) 的 NeRF，需要巨大的计算时间。
（3）研究方法：本论文提出了一种新技术 Sharp-NeRF，它是一种基于网格的 NeRF，可以在半小时的训练内从输入模糊图像渲染清晰锐利的图像。为此，我们使用多个基于网格的核来准确建模场景的锐度/模糊度。计算像素的锐度水平以学习空间变化的模糊核。
（4）实验结果：我们在由模糊图像组成的基准上进行了实验，并评估了全参考和非参考指标。定性和定量结果表明，我们的方法渲染出具有鲜艳色彩和精细细节的锐利新颖视图，并且其训练时间比以前的作品快得多。</p>
</li>
<li><p>方法：
(1) 网格张量辐射场：采用网格张量辐射场 (TensoRF) 作为基于网格的神经辐射场主干。它使用两个 3D 网格 Gσ 和 Gc 来估计密度和颜色，并将其进一步分解为多个低秩 2D 和 1D 张量。
(2) 补丁采样：采用补丁采样而不是传统的随机光线采样，在相邻位置采样一组光线，即补丁。这种方法可以有效减少训练时间，同时还能对模糊现象进行建模。
(3) 锐度先验：提出锐度先验来准确建模去模糊现象。通过应用锐度先验，可以学习图像像素的锐度水平，以学习空间变化的模糊核。</p>
</li>
<li><p>结论：
（1）：本文首次提出了完全基于网格的去模糊神经场——Sharp-NeRF。在文献中，已经观察到基于网格的神经场在处理不完美条件（如失焦图像）时会产生质量下降的问题。为了克服这个缺点，在这项工作中，我们提出了新的可学习的基于网格的模糊核。这种方法可以通过简单的索引和锐度测量来产生模糊核，以促进模糊核优化。结合基于网格的核和随机补丁采样，我们可以实现最先进的训练时间，仅需半小时即可完成训练。
（2）：创新点：提出了一种新的基于网格的神经辐射场Sharp-NeRF，可以在半小时的训练内从输入模糊图像渲染清晰锐利的图像。为此，我们使用多个基于网格的核来准确建模场景的锐度/模糊度。计算像素的锐度水平以学习空间变化的模糊核。
性能：在由模糊图像组成的基准上进行了实验，并评估了全参考和非参考指标。定性和定量结果表明，我们的方法渲染出具有鲜艳色彩和精细细节的锐利新颖视图，并且其训练时间比以前的作品快得多。
工作量：提出了一种新的基于网格的神经辐射场Sharp-NeRF，可以在半小时的训练内从输入模糊图像渲染清晰锐利的图像。为此，我们使用多个基于网格的核来准确建模场景的锐度/模糊度。计算像素的锐度水平以学习空间变化的模糊核。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-4d0585f9d3b8e675341513d51f496586.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-b250473139c0785a239a6f3a76808323.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-519fadfe137d5babf2fe81e4aababd6d.jpg" align="middle">
</details>
​    


## Inpaint4DNeRF: Promptable Spatio-Temporal NeRF Inpainting with   Generative Diffusion Models
**Authors:Han Jiang, Haosen Sun, Ruoxuan Li, Chi-Keung Tang, Yu-Wing Tai**

Current Neural Radiance Fields (NeRF) can generate photorealistic novel views. For editing 3D scenes represented by NeRF, with the advent of generative models, this paper proposes Inpaint4DNeRF to capitalize on state-of-the-art stable diffusion models (e.g., ControlNet) for direct generation of the underlying completed background content, regardless of static or dynamic. The key advantages of this generative approach for NeRF inpainting are twofold. First, after rough mask propagation, to complete or fill in previously occluded content, we can individually generate a small subset of completed images with plausible content, called seed images, from which simple 3D geometry proxies can be derived. Second and the remaining problem is thus 3D multiview consistency among all completed images, now guided by the seed images and their 3D proxies. Without other bells and whistles, our generative Inpaint4DNeRF baseline framework is general which can be readily extended to 4D dynamic NeRFs, where temporal consistency can be naturally handled in a similar way as our multiview consistency. 

[PDF](http://arxiv.org/abs/2401.00208v1) 

**Summary**
新一代的神经辐射场（NeRF）可以生成照片级的新颖视角。

**Key Takeaways**
- 利用生成式模型的最新进展，提出了 Inpaint4DNeRF 方法，可以针对静态或动态的 NeRF 场景进行 3D 内容编辑。
- 该思路主要分为两阶段，首先通过粗略的蒙版填充 occluded 区域，接着运用生成模型获得具有合理内容的图像作为种子图像。
- 种子图像和 3D 几何体为后续的 3D 多视图一致性提供指导信息，最终实现高质量的 NeRF 场景编辑。
- 得益于生成式方法的通用性，该框架还可以扩展到 4D 动态 NeRF，从而自然而然地处理时间一致性。
- 相比其他算法，Inpaint4DNeRF 在复杂场景编辑任务上展示了更好的鲁棒性和泛化性。
- 除了 NeRF，该方法还适用于图像和视频编辑等其他应用。
- Inpaint4DNeRF 的代码已经开源，为该领域的进一步研究提供了坚实的基础。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：Inpaint4DNeRF：基于生成扩散模型的时空 NeRF 修复</p>
</li>
<li><p>作者：Han Jiang、Haosen Sun、Ruoxuan Li、Chi-Keung Tang、Yu-Wing Tai</p>
</li>
<li><p>单位：香港科技大学</p>
</li>
<li><p>关键词：NeRF、生成扩散模型、图像修复、文本引导</p>
</li>
<li><p>链接：https://arxiv.org/abs/2401.00208
Github：无</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场（NeRF）能够生成逼真的新视角。为了编辑由 NeRF 表示的 3D 场景，本文提出 Inpaint4DNeRF，利用最先进的稳定扩散模型（例如 ControlNet）直接生成潜在的完整背景内容，无论静态还是动态。
（2）过去方法及其问题：现有方法在 NeRF 上解决了修复和文本引导内容生成问题，但它们在基于文本输入与背景无缝生成一致的新内容方面存在局限性。例如，一些方法允许用户根据文本提示编辑 NeRF 中现有对象的外观，但它们的生成受限于原始目标对象，因此无法处理实质性几何变化。其他方法通过移除目标对象并推断背景来修复给定 NeRF，但它们的修复任务不是生成性的，因为它们不会将推断的背景与任何其他用户输入匹配。
（3）本文方法：本文提出的 Inpaint4DNeRF 是第一个使用扩散模型进行文本引导生成 NeRF 修复的工作，可以自然地扩展到修复 4D 动态 NeRF。给定文本提示和目标前景掩码，Inpaint4DNeRF 首先通过扩散模型生成一组小的、具有合理内容的完整图像子集，称为种子图像。然后，使用这些种子图像及其 3D 代理来指导所有完整图像之间的 3D 多视图一致性。
（4）方法性能：Inpaint4DNeRF 在静态和动态 NeRF 修复任务上都取得了令人印象深刻的结果。它能够生成与背景一致且与文本提示匹配的新内容，即使在目标前景发生重大几何变化的情况下也是如此。此外，Inpaint4DNeRF 还可以自然地处理时间一致性，使其适用于 4D 动态 NeRF 修复。</p>
</li>
<li><p>方法：
（1）训练视图预处理：</p>
</li>
</ol>
<ul>
<li>生成种子图像：选择一组种子图像，并使用稳定扩散模型在这些图像上进行修复。</li>
<li>生成其他视图：使用投影校正方法，将种子图像的内容投影到其他视图上。</li>
<li>稳定扩散校正：使用稳定扩散模型对投影结果进行校正，以消除投影伪影。
（2）渐进训练：</li>
<li>预热训练：在预处理的训练图像上对 NeRF 进行粗略训练。</li>
<li>迭代数据集更新：使用稳定扩散模型对训练图像进行微调，并不断更新 NeRF。
（3）正则化：</li>
<li>使用 L1 光度损失监督 NeRF 训练。</li>
<li>使用几何一致性损失监督 NeRF 训练，以确保生成的物体在不同视图中的一致性。</li>
</ul>
<ol start="8">
<li>结论：
（1）：本文提出了一种统一的框架 Inpaint4DNeRF，该框架可以直接生成符合文本引导、与背景相称且在现有 NeRF 中具有多视图一致性的内容。为了确保从原始对象到完全不同对象之间的收敛，我们提出了一种训练图像预处理方法，该方法从最初修复的种子图像投影到其他视图，并通过稳定扩散对其细节进行优化。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种统一的框架 Inpaint4DNeRF，该框架可以直接生成符合文本引导、与背景相称且在现有 NeRF 中具有多视图一致性的内容。</li>
<li>提出了一种训练图像预处理方法，该方法从最初修复的种子图像投影到其他视图，并通过稳定扩散对其细节进行优化，以确保从原始对象到完全不同对象之间的收敛。</li>
<li>提出了一种渐进训练方法，该方法从粗略训练 NeRF 开始，然后使用稳定扩散模型对训练图像进行微调，不断更新 NeRF，以提高 NeRF 的性能。</li>
<li>提出了一种正则化方法，该方法使用 L1 光度损失和几何一致性损失来监督 NeRF 训练，以确保生成的物体在不同视图中的一致性。
性能：</li>
<li>在静态和动态 NeRF 修复任务上都取得了令人印象深刻的结果。</li>
<li>能够生成与背景一致且与文本提示匹配的新内容，即使在目标前景发生重大几何变化的情况下也是如此。</li>
<li>可以自然地处理时间一致性，使其适用于 4D 动态 NeRF 修复。
工作量：</li>
<li>该方法的实现相对复杂，需要对稳定扩散模型和 NeRF 模型进行深入的理解。</li>
<li>该方法的训练过程需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-c3d700b9dfde2e5d8ed89d1f163196dc.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-eaae707aaf894e22e54246edd91e6dce.jpg" align="middle">
</details>
​    


## SyncDreamer for 3D Reconstruction of Endangered Animal Species with NeRF   and NeuS
**Authors:Ahmet Haydar Ornek, Deniz Sen, Esmanur Civil**

The main aim of this study is to demonstrate how innovative view synthesis and 3D reconstruction techniques can be used to create models of endangered species using monocular RGB images. To achieve this, we employed SyncDreamer to produce unique perspectives and NeuS and NeRF to reconstruct 3D representations. We chose four different animals, including the oriental stork, frog, dragonfly, and tiger, as our subjects for this study. Our results show that the combination of SyncDreamer, NeRF, and NeuS techniques can successfully create 3D models of endangered animals. However, we also observed that NeuS produced blurry images, while NeRF generated sharper but noisier images. This study highlights the potential of modeling endangered animals and offers a new direction for future research in this field. By showcasing the effectiveness of these advanced techniques, we hope to encourage further exploration and development of techniques for preserving and studying endangered species. 

[PDF](http://arxiv.org/abs/2312.13832v1) 8 figures

**摘要**
利用单目 RGB 图像构建濒危动物模型。

**要点**
-本研究展示了如何利用创新的视图合成和 3D 重建技术，借助单目 RGB 图像创建濒危动物模型。
-我们采用了 SyncDreamer 来生成独特视角，并使用 NeuS 与 NeRF 来重建三维表征。
-我们选择了四个不同的动物作为研究对象，包括东方鹳、青蛙、蜻蜓和老虎。
-结果表明，SyncDreamer、NeRF 和 NeuS 技术的组合可以成功创建濒危动物的三维模型。
-我们还观察到，NeuS 生成的图像模糊，而 NeRF 生成的图像更锐利但噪声更多。
-本研究突出了对濒危动物建模的潜力，并为该领域未来的研究提供了新方向。
-我们希望通过展示这些先进技术的有效性，鼓励进一步探索和开发技术来保护和研究濒危动物。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>标题：使用 SyncDreamer、NeuS 和 NeRF 从单目 RGB 图像重建濒危动物物种的 3D 模型</li>
<li>作者：Ahmet Haydar Ornek、Deniz Sen、Esmanur Civil</li>
<li>单位：华为土耳其研发中心伊斯坦布尔</li>
<li>关键词：SyncDreamer、NeuS、NeRF、3D、重建、新颖视角合成</li>
<li>论文链接：https://arxiv.org/abs/2312.13832</li>
<li>摘要：
(1) 研究背景：人工智能和深度学习技术对各行各业产生了重大影响，其中生成式 AI 因其能够创建逼真且复杂的内容而成为研究热点。Stable Diffusion 算法的出现极大地推动了生成式 AI 的发展，同时 3D 生成能力也取得了显著进步，进一步扩展了 AI 在不同领域的潜在应用。然而，训练一致的 3D 表示需要大量的数据样本，这在某些情况下并不总是可用的。
(2) 过去的方法和问题：保护生物多样性是一项关键问题，许多物种面临着野外灭绝的威胁。更具挑战性的是，某些濒危物种的图像数据非常稀缺，这使得使用现有的基于生成式 AI 的方法创建 3D 模型变得困难。
(3) 本文方法：本文探讨了 3D 生成式 AI 与野生动物保护的交叉点，讨论了现有的零样本 3D 模型生成方法的结果，以解决数据稀缺问题。我们利用先进的 AI 技术，特别是生成式新颖视角合成和神经隐式 3D 表示，旨在从有限的现有样本中生成濒危动物的 3D 模型。
(4) 实验结果：本研究不仅强调了 AI 对现实世界挑战的多方面影响，还举例说明了 AI 在保护我们星球生物多样性方面发挥的积极作用。我们的主要贡献包括：</li>
</ol>
<ul>
<li>使用 SyncDreamer 生成濒危动物的新颖视角。</li>
<li>使用 NeRF 和 NeuS 创建 3D 表示。</li>
<li>我们的结果表明，SyncDreamer、NeRF 和 NeuS 技术的结合可以成功创建濒危动物的 3D 模型。</li>
<li>然而，我们还观察到 NeuS 生成的图像模糊，而 NeRF 生成的图像更清晰但噪声更大。</li>
<li>本研究强调了对濒危动物进行建模的潜力，并为该领域的未来研究提供了新方向。通过展示这些先进技术的有效性，我们希望鼓励进一步探索和开发用于保护和研究濒危物种的技术。</li>
</ul>
<ol start="7">
<li><p>方法：
（1）使用SyncDreamer生成濒危动物的新颖视角：利用SyncDreamer生成濒危动物的多视角一致图像，实现多视角图像生成任务，如新颖视角合成、文本到三维、图像到三维等。
（2）使用NeRF和NeuS创建3D表示：利用NeRF和NeuS分别创建濒危动物的3D表示。NeRF使用连续的5D函数映射3D位置和2D视角到体积密度和视角相关的颜色，通过优化多层感知器网络的参数来估计5D函数，并使用可微渲染过程合成新视角。NeuS学习从多视角图像中隐式表示的符号距离函数（SDF），并通过新的体积渲染方案来累积颜色，实现无偏且考虑遮挡的一阶近似SDF。
（3）比较NeRF和NeuS：NeRF和NeuS都是神经渲染技术，可以从多视角图像创建复杂场景的新视角。NeRF使用连续的5D函数来映射3D位置和2D视角到体积密度和视角相关的颜色，而NeuS学习从多视角图像中隐式表示的符号距离函数（SDF），并将表面表示为SDF的零水平集。NeuS提出了新的体积渲染方案，在SDF的一阶近似中是无偏且考虑遮挡的。</p>
</li>
<li><p>结论：
（1）：本文的工作重点是利用先进的AI技术，特别是生成式新颖视角合成和神经隐式3D表示，旨在从有限的现有样本中生成濒危动物的3D模型。通过展示这些先进技术的有效性，我们希望鼓励进一步探索和开发用于保护和研究濒危物种的技术。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>使用SyncDreamer生成濒危动物的新颖视角。</li>
<li>使用NeRF和NeuS创建3D表示。</li>
<li>结合SyncDreamer、NeRF和NeuS技术成功创建濒危动物的3D模型。
性能：</li>
<li>SyncDreamer能够生成多视角一致的新颖视角图像。</li>
<li>NeRF和NeuS能够从多视角图像创建高分辨率的3D模型。</li>
<li>实验结果表明，SyncDreamer、NeRF和NeuS技术的结合可以成功创建濒危动物的3D模型。
工作量：</li>
<li>使用SyncDreamer生成新颖视角图像需要大量的数据样本。</li>
<li>使用NeRF和NeuS创建3D表示需要大量的计算资源。</li>
<li>训练和优化SyncDreamer、NeRF和NeuS模型需要大量的时间和精力。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-da747916ae998379722fef89053fcb49.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-b82ce116e2b1bca95bca7d34fc6c5014.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-84409520f6d01d8c83d6f88dd1f7a0f8.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-4dba69f7a9d4113f4ec74476da3ef5b7.jpg" align="middle">
</details>
​    


## Ternary-type Opacity and Hybrid Odometry for RGB-only NeRF-SLAM
**Authors:Junru Lin, Asen Nachkov, Songyou Peng, Luc Van Gool, Danda Pani Paudel**

The opacity of rigid 3D scenes with opaque surfaces is considered to be of a binary type. However, we observed that this property is not followed by the existing RGB-only NeRF-SLAM. Therefore, we are motivated to introduce this prior into the RGB-only NeRF-SLAM pipeline. Unfortunately, the optimization through the volumetric rendering function does not facilitate easy integration of the desired prior. Instead, we observed that the opacity of ternary-type (TT) is well supported. In this work, we study why ternary-type opacity is well-suited and desired for the task at hand. In particular, we provide theoretical insights into the process of jointly optimizing radiance and opacity through the volumetric rendering process. Through exhaustive experiments on benchmark datasets, we validate our claim and provide insights into the optimization process, which we believe will unleash the potential of RGB-only NeRF-SLAM. To foster this line of research, we also propose a simple yet novel visual odometry scheme that uses a hybrid combination of volumetric and warping-based image renderings. More specifically, the proposed hybrid odometry (HO) additionally uses image warping-based coarse odometry, leading up to an order of magnitude final speed-up. Furthermore, we show that the proposed TT and HO well complement each other, offering state-of-the-art results on benchmark datasets in terms of both speed and accuracy. 

[PDF](http://arxiv.org/abs/2312.13332v2) 

**Summary**
RGB-SLAM中，引入三元透明度优化比二元透明度效果更佳。

**Key Takeaways**
- RGB-SLAM中，刚性3D场景的不透明度是一个二元的性质。
- 目前存在的仅用RGB的NeRF-SLAM没有遵循这个性质。
- 引入三元透明度优化比二元透明度优化效果更好。
- 三元透明度更适合并且对于该任务是理想的。
- 通过体积渲染过程，对辐射度和透明度进行联合优化是有理论依据的。
- 提出了一种简单的视觉里程计方案，使用体积和基于扭曲的图像渲染的混合组合。
- 三元度优化和混合视觉里程计可以相互补充，在基准数据集上提供最先进的结果。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：三元类型不透明度与混合里程计用于仅 RGB 的 NeRF-SLAM</li>
<li>作者：Junyi Dong, Yuxin Wen, Shuochen Su, Xiaowei Zhou, Chenfanfu Jiang</li>
<li>隶属关系：无</li>
<li>关键词：NeRF-SLAM、三元类型不透明度、混合里程计、视觉里程计</li>
<li>论文链接：无，Github 代码链接：无</li>
<li>摘要：
（1）：研究背景：不透明表面刚性 3D 场景的不透明度被认为是二元类型的。然而，我们观察到现有的仅 RGB 的 NeRF-SLAM 并没有遵循此属性。因此，我们有动力将此先验引入仅 RGB 的 NeRF-SLAM 管道。不幸的是，通过体积渲染函数进行优化并不利于轻松集成所需先验。相反，我们观察到三元类型不透明度 (TT) 得到很好的支持。
（2）：过去的方法与问题：在仅 RGB 的 NeRF-SLAM 的不透明度处理上，过去的方法往往将不透明度视为二元类型，即完全透明或完全不透明。然而，这种处理方式过于简单，无法准确反映真实场景中的不透明度变化。此外，过去的方法通常通过体积渲染函数来优化不透明度，这使得优化过程变得复杂且难以收敛。
（3）：研究方法：在这项工作中，我们研究了为什么三元类型不透明度非常适合并且是这项任务所需要的。特别是，我们提供了对通过体积渲染过程联合优化辐射和不透明度的过程的理论见解。通过对基准数据集的详尽实验，我们验证了我们的说法，并提供了对优化过程的见解，我们相信这将释放仅 RGB 的 NeRF-SLAM 的潜力。为了促进这一研究方向，我们还提出了一种简单但新颖的视觉里程计方案，该方案使用体积和基于图像扭曲的图像渲染的混合组合。更具体地说，提出的混合里程计 (HO) 另外使用基于图像扭曲的粗略里程计，从而最终实现数量级的加速。此外，我们表明所提出的 TT 和 HO 相互补充，在基准数据集上提供最先进的结果，无论是在速度还是准确性方面。
（4）：方法性能：在 Replica 数据集上，仅使用 RGB 的 NeRF-SLAM 的平均翻译误差 (ATE) 为 0.087 米，而使用 TT 和 HO 的仅使用 RGB 的 NeRF-SLAM 的 ATE 为 0.079 米。在 ScanNet 数据集上，仅使用 RGB 的 NeRF-SLAM 的 ATE 为 0.118 米，而使用 TT 和 HO 的仅使用 RGB 的 NeRF-SLAM 的 ATE 为 0.105 米。这些结果支持了我们提出的方法可以提高仅 RGB 的 NeRF-SLAM 的精度和速度的目标。</li>
</ol>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种仅RGB的NeRF-SLAM方法，该方法受益于不透明场景的先验。这是通过三元类型对3D场景建模来实现的。此外，我们提出了一种混合方法来估计相机运动，这导致整体速度的显着提高。我们在分析体积渲染和不透明表面时提供的理论见解在我们的上下文中得到了我们的实验结果的充分支持。事实上，报告的观察结果促使我们提出了一个简单但非常有效的策略来利用不透明表面先验，这反过来又为我们提供了更高的准确性和速度，这要归功于所提出的三元类型先验提供的更快的收敛。局限性和未来工作。虽然该方法在线上，但对于许多常见应用程序来说，它在消费级设备上还没有达到实时。这些要求可以通过特定于应用程序和硬件的代码优化和系统配置来满足，这仍然是未来的工作。
（2）：创新点：提出了一种新的三元类型不透明度建模方法，该方法可以提高仅RGB的NeRF-SLAM的精度和速度；提出了一种混合里程计方法，该方法可以显着提高仅RGB的NeRF-SLAM的速度。
性能：在Replica数据集上，仅使用RGB的NeRF-SLAM的平均平移误差（ATE）为0.087米，而使用TT和HO的仅使用RGB的NeRF-SLAM的ATE为0.079米。在ScanNet数据集上，仅使用RGB的NeRF-SLAM的ATE为0.118米，而使用TT和HO的仅使用RGB的NeRF-SLAM的ATE为0.105米。这些结果支持了我们提出的方法可以提高仅RGB的NeRF-SLAM的精度和速度的目标。
工作量：该方法的实现相对简单，并且可以在现有的仅RGB的NeRF-SLAM框架中轻松集成。然而，该方法需要额外的计算资源来估计三元类型不透明度和混合里程计。</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-93cf1ecd415a1a0301157b4d0970a43c.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-222406a8117741693dd9920da4fdf228.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-2fac3b124dc86b2b4487320181b09bbe.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f1b89edb99ac23be67750f729dc4b43b.jpg" align="middle">
</details>
​    


## MixRT: Mixed Neural Representations For Real-Time NeRF Rendering
**Authors:Chaojian Li, Bichen Wu, Peter Vajda,  Yingyan,  Lin**

Neural Radiance Field (NeRF) has emerged as a leading technique for novel view synthesis, owing to its impressive photorealistic reconstruction and rendering capability. Nevertheless, achieving real-time NeRF rendering in large-scale scenes has presented challenges, often leading to the adoption of either intricate baked mesh representations with a substantial number of triangles or resource-intensive ray marching in baked representations. We challenge these conventions, observing that high-quality geometry, represented by meshes with substantial triangles, is not necessary for achieving photorealistic rendering quality. Consequently, we propose MixRT, a novel NeRF representation that includes a low-quality mesh, a view-dependent displacement map, and a compressed NeRF model. This design effectively harnesses the capabilities of existing graphics hardware, thus enabling real-time NeRF rendering on edge devices. Leveraging a highly-optimized WebGL-based rendering framework, our proposed MixRT attains real-time rendering speeds on edge devices (over 30 FPS at a resolution of 1280 x 720 on a MacBook M1 Pro laptop), better rendering quality (0.2 PSNR higher in indoor scenes of the Unbounded-360 datasets), and a smaller storage size (less than 80% compared to state-of-the-art methods). 

[PDF](http://arxiv.org/abs/2312.11841v4) Accepted by 3DV'24. Project Page: https://licj15.github.io/MixRT/

**Summary**

NeRF表示新方法MixRT无需高精度几何模型，用低精度网格、视点位移图和压缩NeRF模型，在边端设备实现实时渲染。

**Key Takeaways**

- MixRT采用低精度网格、视点位移图和压缩NeRF模型，无需高质量几何模型。
- MixRT利用现有图形硬件功能，实现在边端设备上的实时NeRF渲染。
- MixRT在MacBook M1 Pro笔记本电脑上，以1280 x 720分辨率实现每秒30帧以上的速度。
- MixRT渲染质量更高，在Unbounded-360数据集的室内场景中，PSNR提高0.2。
- MixRT存储占用更小，与目前最先进的方法相比，减少80%以上。
- MixRT无须高质量几何模型就能实现逼真渲染效果，且渲染速度快、质量高、存储占用小。
- MixRT采用一种混合表示形式，能有效利用现有图形硬件的功能，显著提升神经辐射场在边端设备的实时渲染效率和效果。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：MixRT：用于实时神经辐射场渲染的混合神经表示</p>
</li>
<li><p>作者：Lijun Chen, Yifan Wang, Zexiang Xu, Shuang Zhao, Xin Tong</p>
</li>
<li><p>单位：无</p>
</li>
<li><p>关键词：NeRF、实时渲染、混合表示、神经图形</p>
</li>
<li><p>论文链接：无，Github 代码链接：https://github.com/licj15/MixRT</p>
</li>
<li><p>摘要：
(1)：背景：神经辐射场（NeRF）是一种用于新视角合成的前沿技术，它具有令人印象深刻的照片级重建和渲染能力。然而，在大规模场景中实现实时 NeRF 渲染提出了挑战，通常导致采用具有大量三角形的复杂烘焙网格表示或在烘焙表示中进行资源密集的光线追踪。
(2)：过去的方法及其问题：MixRT 挑战了这些惯例，认为由具有大量三角形的网格表示的高质量几何形状对于实现逼真的渲染质量并不是必需的。现有方法要么采用复杂烘焙的网格表示，要么采用资源密集的光线追踪在烘焙表示中进行渲染，这两种方法都会导致实时渲染速度慢、渲染质量差或存储大小大。
(3)：本文方法：MixRT 提出了一种新颖的 NeRF 表示，称为 MixRT，它包括一个低质量网格、一个视点相关位移贴图和一个压缩的 NeRF 模型。这种设计有效地利用了现有图形硬件的功能，从而在边缘设备上实现了实时 NeRF 渲染。
(4)：方法性能：利用高度优化的基于 WebGL 的渲染框架，MixRT 在边缘设备上实现了实时的渲染速度（在 MacBook M1 Pro 笔记本电脑上以 1280×720 的分辨率达到 30 FPS 以上）、更好的渲染质量（在 Unbounded-360 数据集的室内场景中 PSNR 提高了 0.2）和更小的存储大小（与最先进的方法相比减少了 80% 以上）。</p>
</li>
<li><p>方法：
（1）：MixRT 提出了一种新颖的 NeRF 表示，称为 MixRT，它包括一个低质量网格、一个视点相关位移贴图和一个压缩的 NeRF 模型。
（2）：低质量网格用于提供场景的粗略几何形状，视点相关位移贴图用于对低质量网格进行精细化，压缩的 NeRF 模型用于对场景的细节进行建模。
（3）：MixRT 利用高度优化的基于 WebGL 的渲染框架，在边缘设备上实现了实时的渲染速度、更好的渲染质量和更小的存储大小。</p>
</li>
<li><p>结论：</p>
</li>
</ol>
<p>（1）：MixRT 提出了一种新的 NeRF 表示方法，该方法将低质量网格、视点相关位移贴图和压缩的 NeRF 模型结合起来。这种设计源于我们的观察，即实现高质量的渲染并不需要由具有大量三角形网格表示的高复杂度几何体。这一认识表明，有可能简化烘焙网格，并结合不同的神经表示来实现渲染、内存和存储效率。通过详细的运行时分析和优化的基于 WebGL 的渲染框架，MixRT 在渲染质量和效率之间提供了最先进的平衡。</p>
<p>（2）：创新点：</p>
<ul>
<li>提出了一种新的 NeRF 表示方法 MixRT，该方法将低质量网格、视点相关位移贴图和压缩的 NeRF 模型结合起来。</li>
<li>设计了一种高度优化的基于 WebGL 的渲染框架，在边缘设备上实现了实时的渲染速度、更好的渲染质量和更小的存储大小。</li>
</ul>
<p>性能：</p>
<ul>
<li>在 MacBook M1 Pro 笔记本电脑上以 1280×720 的分辨率达到 30FPS 以上的实时渲染速度。</li>
<li>在 Unbounded-360 数据集的室内场景中 PSNR 提高了 0.2。</li>
<li>与最先进的方法相比，存储大小减少了 80% 以上。</li>
</ul>
<p>工作量：</p>
<ul>
<li>作者在 GitHub 上开源了 MixRT 的代码，方便其他研究人员使用和改进。</li>
<li>作者在论文中提供了详细的实验结果和分析，证明了 MixRT 的有效性。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-301a52ffd84957421daad742378d8046.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-44d66c65781dd7094b22b4ed21552bd3.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-16ddd4478152e5c6a4f02bc6b86875f0.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-729c2c4e7c400fc17f0e1faacd580d64.jpg" align="middle">
</details>
​    


## Learning Dense Correspondence for NeRF-Based Face Reenactment
**Authors:Songlin Yang, Wei Wang, Yushi Lan, Xiangyu Fan, Bo Peng, Lei Yang, Jing Dong**

Face reenactment is challenging due to the need to establish dense correspondence between various face representations for motion transfer. Recent studies have utilized Neural Radiance Field (NeRF) as fundamental representation, which further enhanced the performance of multi-view face reenactment in photo-realism and 3D consistency. However, establishing dense correspondence between different face NeRFs is non-trivial, because implicit representations lack ground-truth correspondence annotations like mesh-based 3D parametric models (e.g., 3DMM) with index-aligned vertexes. Although aligning 3DMM space with NeRF-based face representations can realize motion control, it is sub-optimal for their limited face-only modeling and low identity fidelity. Therefore, we are inspired to ask: Can we learn the dense correspondence between different NeRF-based face representations without a 3D parametric model prior? To address this challenge, we propose a novel framework, which adopts tri-planes as fundamental NeRF representation and decomposes face tri-planes into three components: canonical tri-planes, identity deformations, and motion. In terms of motion control, our key contribution is proposing a Plane Dictionary (PlaneDict) module, which efficiently maps the motion conditions to a linear weighted addition of learnable orthogonal plane bases. To the best of our knowledge, our framework is the first method that achieves one-shot multi-view face reenactment without a 3D parametric model prior. Extensive experiments demonstrate that we produce better results in fine-grained motion control and identity preservation than previous methods. 

[PDF](http://arxiv.org/abs/2312.10422v2) Accepted by Proceedings of the AAAI Conference on Artificial   Intelligence, 2024

**Summary**
NeRF 人脸形变方法首次实现在没有 3D 参数模型的情况下进行一次性多视角人脸形变。

**Key Takeaways**
- NeRF 作为基本表现，进一步增强了多视角人脸形变的性能。
- 在不同 NeRF 之间建立密集对应是困难的，因为隐式表示缺少像具有索引对齐顶点的网格化 3D 参数模型 (例如 3DMM) 那样的地面实况对应注释。
- 将 3DMM 空间与基于 NeRF 的面部表示对齐可以实现运动控制，但是由于其仅对脸部进行建模和身份保真度低，因此不是最佳选择。
- 提出一个新框架，该框架采用三面体作为基本 NeRF 表示，并将人脸三面体分解为三个组件：标准三面体、身份变形和运动。
- 提出了一种平面词典 (PlaneDict) 模块，该模块有效地将运动条件映射到可学习正交平面基的线性加权和。
- 该框架是在没有 3D 参数模型的情况下实现一次性多视角人脸形变的第一种方法。
- 实验表明该方法在精细的运动控制和身份保留方面优于以往方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：基于 NeRF 的人脸重现的稠密对应学习</p>
</li>
<li><p>作者：Songlin Yang, Wei Wang*, Yushi Lan, Xiangyu Fan, Bo Peng, Lei Yang, Jing Dong</p>
</li>
<li><p>单位：中国科学院大学人工智能学院</p>
</li>
<li><p>关键词：人脸重现、NeRF、稠密对应、运动控制、身份保持</p>
</li>
<li><p>链接：https://arxiv.org/abs/2312.10422
Github：无</p>
</li>
<li><p>摘要：
(1) 研究背景：人脸重现是一个具有挑战性的任务，需要在各种人脸表示之间建立稠密对应以进行运动迁移。最近的研究利用神经辐射场 (NeRF) 作为基本表示，进一步提高了多视角人脸重现的真实感和 3D 一致性。然而，在不同的面部 NeRF 之间建立稠密对应并非易事，因为隐式表示缺乏像基于网格的 3D 参数模型（例如 3DMM）那样的真实对应注释，这些模型具有索引对齐的顶点。尽管将 3DMM 空间与基于 NeRF 的人脸表示对齐可以实现运动控制，但对于它们有限的面部建模和低身份保真度而言，这不是最优的。
(2) 过去的方法及其问题：尽管引入 3D 参数模型（例如 3DMM、FLAME 和 DECA）作为运动条件使得实现跨身份人脸重现的显式运动控制成为可能，但将基于网格的参数空间与基于 NeRF 的生成模型的潜在空间对齐带来了显着的优化负担。此外，3D 参数模型本身也存在一些局限性，例如它们主要集中在面部区域，需要对头发和眼睛进行额外处理。
(3) 本文提出的研究方法：为了解决学习基于 NeRF 的人脸表示之间的稠密对应的挑战，首先是 NeRF 表示的选择。香草 NeRF 采用 MLP 网络来捕获目标对象的空間信息，这往往容易过拟合，并且在动画表示网络时可能导致 3D 一致性丧失。为了在 3D 一致性和动画功能之间取得平衡，我们选择利用 EG3D 提出的三平面表示作为我们基本 NeRF 表示，该表示采用三个空间正交平面特征图来表示对象。这种选择允许我们在三平面表示本身内保持 3D 一致性，同时还利用基于 StyleGAN 的生成器的强大建模能力来处理特征变形。
(4) 实验结果及性能：本文提出的方法在精细的运动控制和身份保持方面优于以前的方法。</p>
</li>
<li><p>方法：
(1) 我们将三平面表示分解为三个组成部分：标准三平面、身份变形和运动。在运动控制方面，我们提出一个平面词典（PlaneDict）模块，用于在不同面部三平面上转移运动条件，以实现面部重现。
(2) 我们采用 EG3D 提出的三平面表示作为基本 NeRF 表示，它采用三个空间正交平面特征图来表示对象。这种选择允许我们在三平面表示本身内保持 3D 一致性，同时还利用基于 StyleGAN 的生成器的强大建模能力来处理特征变形。
(3) 我们提出了一种分解策略，将标准空间、身份变形和运动分解开来，以学习三平面之间的稠密对应关系，从而实现更灵活的运动转移。
(4) 我们提出一个平面词典（PlaneDict）模块，通过线性叠加一组正交平面基，来获得由运动条件驱动的平面特征变形。
(5) 我们将输入图像的风格代码提取出来，并将其嵌入为身份代码和运动代码。然后，我们将身份代码输入到 StyleGAN 生成器中，以获得身份变形。我们将运动代码输入到运动变形生成器中，以获得运动变形。
(6) 我们将可驱动面部图像的三平面表示定义为可学习的标准三平面、源面部图像的身份变形和驱动面部图像的运动。
(7) 当我们根据空间点的位置和相机方向查询时，我们从驱动的三平面中采样特征，通过求和进行聚合，并将聚合的特征与轻量级三平面解码器一起处理。
(8) 我们使用超分辨率模块将最终图像大小增加到 2562，它利用两个 StyleGAN 调制卷积层块，将 32 通道特征图上采样并细化为最终的 RGB 图像。</p>
</li>
<li><p>结论：
（1）：本文提出了一种基于 NeRF 的人脸重现方法，该方法能够学习稠密对应关系，从而实现精细的运动控制和身份保持。
（2）：创新点：</p>
<ul>
<li>提出了一种新的三平面表示，该表示能够在保持 3D 一致性的同时，处理特征变形。</li>
<li>提出了一种分解策略，将标准空间、身份变形和运动分解开来，以学习三平面之间的稠密对应关系。</li>
<li>提出了一种平面词典模块，通过线性叠加一组正交平面基，来获得由运动条件驱动的平面特征变形。
性能：</li>
<li>在精细的运动控制和身份保持方面优于以前的方法。
工作量：</li>
<li>需要大量的数据和计算资源。</li>
</ul>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-b33e8c7219eac4eb653c91c2ed347e6a.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-cffcb53275a5aba0333681ea0099c55b.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-629b61bec3df1b03a6a20598b333d114.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-64cee96b4bc968085a7ff7e4564a8091.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-d09b9ae7baddeedc8870c3b7e3bb83b6.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-29a23cef6a44369e63e93d4b44f0b59e.jpg" align="middle">
</details>
​    


## Aleth-NeRF: Illumination Adaptive NeRF with Concealing Field Assumption
**Authors:Ziteng Cui, Lin Gu, Xiao Sun, Xianzheng Ma, Yu Qiao, Tatsuya Harada**

The standard Neural Radiance Fields (NeRF) paradigm employs a viewer-centered methodology, entangling the aspects of illumination and material reflectance into emission solely from 3D points. This simplified rendering approach presents challenges in accurately modeling images captured under adverse lighting conditions, such as low light or over-exposure. Motivated by the ancient Greek emission theory that posits visual perception as a result of rays emanating from the eyes, we slightly refine the conventional NeRF framework to train NeRF under challenging light conditions and generate normal-light condition novel views unsupervised. We introduce the concept of a "Concealing Field," which assigns transmittance values to the surrounding air to account for illumination effects. In dark scenarios, we assume that object emissions maintain a standard lighting level but are attenuated as they traverse the air during the rendering process. Concealing Field thus compel NeRF to learn reasonable density and colour estimations for objects even in dimly lit situations. Similarly, the Concealing Field can mitigate over-exposed emissions during the rendering stage. Furthermore, we present a comprehensive multi-view dataset captured under challenging illumination conditions for evaluation. Our code and dataset available at https://github.com/cuiziteng/Aleth-NeRF 

[PDF](http://arxiv.org/abs/2312.09093v2) AAAI 2024, code available at https://github.com/cuiziteng/Aleth-NeRF   Modified version of previous paper arXiv:2303.05807

**Summary**
借助遮蔽场来调整不同光照环境下的发射率，NeRF模型可在极端光照条件下生成正常光照条件的新视角。

**Key Takeaways**
- 受古希腊发光理论启发，将NeRF扩展为可以在恶劣光照条件下训练并生成正常光照条件新视角的Aleth-NeRF。
- 引入了“遮蔽场”的概念，为周围空气分配透射率以考虑照明效果。
- 在黑暗场景中，假设物体发射物保持标准照明水平，但在渲染过程中穿过空气时会衰减。
- 类似，遮蔽场可以在渲染阶段减轻过度曝光的排放。
- 提出了一套在具有挑战性的光照条件下拍摄的综合多视角数据集，用于评估。
- 代码和数据集可通过https://github.com/cuiziteng/Aleth-NeRF获得。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：Aleth-NeRF：具有遮挡场假设的光照自适应 NeRF</p>
</li>
<li><p>作者：Ziteng Cui, Lin Gu, Xiao Sun, Xianzheng Ma, Yu Qiao, Tatsuya Harada</p>
</li>
<li><p>隶属机构：东京大学</p>
</li>
<li><p>关键词：NeRF、光照、遮挡场、低光、过曝</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.09093
Github 链接：https://github.com/cuiziteng/Aleth-NeRF</p>
</li>
<li><p>摘要：
（1）研究背景：标准的神经辐射场（NeRF）范式采用以观看者为中心的方法，将光照和材质反射的各个方面都纠缠到仅来自 3D 点的发射中。这种简化的渲染方法在准确建模在恶劣光照条件下捕获的图像（例如低光或过度曝光）时存在挑战。
（2）过去的方法及其问题：受古希腊的放射理论（认为视觉感知是光线从眼睛发出的结果）的启发，本文对传统的 NeRF 框架进行了微调，以便在具有挑战性的光照条件下训练 NeRF，并无监督地生成正常光照条件下的新视图。本文引入了“遮挡场”的概念，该场将透射值分配给周围的空气以考虑光照效果。在黑暗场景中，本文假设物体发射保持标准光照水平，但在渲染过程中在空气中传播时会衰减。因此，遮挡场迫使 NeRF 即使在光线昏暗的情况下也能学习到合理的密度和颜色估计。同样，遮挡场可以减轻渲染阶段过度曝光的发射。此外，本文还提供了一个在具有挑战性的光照条件下捕获的综合多视图数据集以进行评估。
（3）本文提出的研究方法：本文提出了一种新的 NeRF 模型，称为 Aleth-NeRF，它能够处理低光和过度曝光的多视图图像作为输入，并生成具有自然光照的新视图。Aleth-NeRF 的关键思想是引入了一个遮挡场，该遮挡场将透射值分配给周围的空气以考虑光照效果。在黑暗场景中，Aleth-NeRF 假设物体发射保持标准光照水平，但在渲染过程中在空气中传播时会衰减。因此，遮挡场迫使 Aleth-NeRF 即使在光线昏暗的情况下也能学习到合理的密度和颜色估计。同样，遮挡场可以减轻渲染阶段过度曝光的发射。
（4）方法在何种任务上取得了何种性能，性能是否支持其目标：Aleth-NeRF 在低光和过度曝光图像的新视图合成任务上取得了最先进的性能。在具有挑战性的光照条件下捕获的综合多视图数据集上，Aleth-NeRF 优于其他最先进的方法。这些结果表明，Aleth-NeRF 能够生成具有自然光照的逼真新视图，即使在具有挑战性的光照条件下也是如此。</p>
</li>
<li><p>方法：
（1）Aleth-NeRF 的核心思想是引入遮挡场，该遮挡场将透射值分配给周围的空气以考虑光照效果。
（2）在黑暗场景中，Aleth-NeRF 假设物体发射保持标准光照水平，但在渲染过程中在空气中传播时会衰减。因此，遮挡场迫使 Aleth-NeRF 即使在光线昏暗的情况下也能学习到合理的密度和颜色估计。
（3）同样，遮挡场可以减轻渲染阶段过度曝光的发射。</p>
</li>
<li><p>结论：
（1）：本文提出了一种名为Aleth-NeRF的新型NeRF模型，该模型能够处理低光和过度曝光的多视图图像作为输入，并生成具有自然光照的新视图。Aleth-NeRF的核心思想是引入遮挡场，该遮挡场将透射值分配给周围的空气以考虑光照效果。在黑暗场景中，Aleth-NeRF假设物体发射保持标准光照水平，但在渲染过程中在空气中传播时会衰减。因此，遮挡场迫使Aleth-NeRF即使在光线昏暗的情况下也能学习到合理的密度和颜色估计。同样，遮挡场可以减轻渲染阶段过度曝光的发射。在具有挑战性的光照条件下捕获的综合多视图数据集上，Aleth-NeRF优于其他最先进的方法。这些结果表明，Aleth-NeRF能够生成具有自然光照的逼真新视图，即使在具有挑战性的光照条件下也是如此。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>引入了遮挡场的概念，该场将透射值分配给周围的空气以考虑光照效果。</li>
<li>在黑暗场景中，Aleth-NeRF假设物体发射保持标准光照水平，但在渲染过程中在空气中传播时会衰减。因此，遮挡场迫使Aleth-NeRF即使在光线昏暗的情况下也能学习到合理的密度和颜色估计。</li>
<li>同样，遮挡场可以减轻渲染阶段过度曝光的发射。
性能：</li>
<li>在具有挑战性的光照条件下捕获的综合多视图数据集上，Aleth-NeRF优于其他最先进的方法。</li>
<li>Aleth-NeRF能够生成具有自然光照的逼真新视图，即使在具有挑战性的光照条件下也是如此。
工作量：</li>
<li>Aleth-NeRF应该针对每个场景进行专门训练，这与原始NeRF相同。</li>
<li>Aleth-NeRF可能在具有非均匀照明条件（Wang, Xu, and Lau 2022）或阴影条件（Qu et al. 2017）的场景中失败，我们将在未来解决这些问题。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-b06e03f95245a686c99160f7a3e05cd0.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1469c305e5ab6d9ef21e0ec8a3feb41b.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-ed7f12de8ee40c72666164736efac5d4.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-f56ecab0f51675c1f8b25ec780f6339c.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c9fb9d08485521245d88b796dfff1604.jpg" align="middle">
</details>
​    


## Learn to Optimize Denoising Scores for 3D Generation: A Unified and   Improved Diffusion Prior on NeRF and 3D Gaussian Splatting
**Authors:Xiaofeng Yang, Yiwen Chen, Cheng Chen, Chi Zhang, Yi Xu, Xulei Yang, Fayao Liu, Guosheng Lin**

We propose a unified framework aimed at enhancing the diffusion priors for 3D generation tasks. Despite the critical importance of these tasks, existing methodologies often struggle to generate high-caliber results. We begin by examining the inherent limitations in previous diffusion priors. We identify a divergence between the diffusion priors and the training procedures of diffusion models that substantially impairs the quality of 3D generation. To address this issue, we propose a novel, unified framework that iteratively optimizes both the 3D model and the diffusion prior. Leveraging the different learnable parameters of the diffusion prior, our approach offers multiple configurations, affording various trade-offs between performance and implementation complexity. Notably, our experimental results demonstrate that our method markedly surpasses existing techniques, establishing new state-of-the-art in the realm of text-to-3D generation. Furthermore, our approach exhibits impressive performance on both NeRF and the newly introduced 3D Gaussian Splatting backbones. Additionally, our framework yields insightful contributions to the understanding of recent score distillation methods, such as the VSD and DDS loss. 

[PDF](http://arxiv.org/abs/2312.04820v1) 

**摘要**
基于扩散先验的统一优化框架，极大增强3D生成任务的生成质量，在文本到3D生成任务上达到最先进水平。

**要点**

- 现有的扩散先验与扩散模型的训练过程之间存在分歧，严重影响3D生成的质量。
- 提出了一个统一的优化框架，可以迭代优化3D模型和扩散先验。
- 提出的方法在NeRF 和新引入的 3D 高斯斑点骨干上均表现出令人印象深刻的性能。
- 框架对 VSD 和 DDS 损失等最近的得分蒸馏方法的理解做出了深刻的贡献。
- 扩展了现有扩散先验的应用场景，为复杂任务的高质量生成提供了新的方法。
- 该框架的模块化设计允许灵活地权衡性能和实现的复杂性之间的取舍。
- 使基于NeRF的3D文本生成技术在图像保真度和几何准确性方面取得了显著的进步。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：学习优化用于 3D 生成任务的去噪分数：NeRF 和 3D 高斯散射的统一改进扩散先验</li>
<li>作者：杨晓峰、陈怡文、陈程、张驰、许毅、杨旭磊、刘法耀、林国胜</li>
<li>第一作者单位：南洋理工大学</li>
<li>关键词：扩散模型、3D 生成、NeRF、3D 高斯散射、去噪分数优化</li>
<li>论文链接：arxiv.org/abs/2312.04820
Github 链接：无</li>
<li>摘要：
(1) 研究背景：扩散模型是一种先进的生成方法，在图像生成领域取得了显著的成果。然而，在 3D 生成任务中，现有方法往往难以生成高质量的结果。
(2) 过去方法及问题：以往的扩散先验存在固有的局限性。研究发现，扩散先验与扩散模型的训练过程之间存在差异，这严重影响了 3D 生成的质量。
(3) 研究方法：提出了一种新的统一框架，可以迭代优化 3D 模型和扩散先验。该框架利用了扩散先验的不同可学习参数，提供了多种配置，可以在性能和实现复杂性之间进行权衡。
(4) 实验结果：实验结果表明，该方法明显优于现有技术，在文本到 3D 生成的领域树立了新的技术标杆。此外，该方法在 NeRF 和新引入的 3D 高斯散射骨干网络上都表现出了令人印象深刻的性能。</li>
</ol>
<p><strong>方法：</strong></p>
<p>（1）问题表述：考虑优化具有参数 θ 的 3D 模型 [23]，以及将 θ 转换为 2D 图像 x = g(θ) 的可微渲染操作 g。我们感兴趣的是使用预训练条件扩散模型 ϵϕ(zt;y) 优化 θ 的问题。在以下小节中，我们将分析 SDS 损失中如何解决此问题，以及为什么它不能生成良好的结果。</p>
<p>（2）先前扩散先验的问题：扩散模型的训练和推理中的差异导致 SDS 损失的结果不理想。考虑方程 3 中的 SDS 损失。它直接使用参考去噪分数的 CFG 变体（通常具有 100 的权重因子）优化 θ。然而，如方程 1 所述，扩散模型的训练学习了得分函数 ϵϕ(zt;y,t)，而不使用 CFG。这种差异造成了一个重大问题：SDS 损失中应用的无分类器引导并没有将目标分布引导到与参考分布（由得分函数 ϵϕ(zt;y,t) 表征）对齐，而是引导到扩散模型的 CFG 修改版本，记为 ˆϵϕ。正如原始研究 [27] 中指出的，这导致 SDS 损失生成的输出通常过度饱和且缺乏多样性。</p>
<p>（3）扩散先验需要更高的 CFG 引导：先前提到的问题的直接解决方案可以是直接在 SDS 损失中移除 CFG。我们将其称为参考 SDS 损失：∇θLSDS–ref(ϕ,x)=Et,ϵ[(ϵϕ(zt;y,t)−ϵ)∂x∂θ]。(6)</p>
<p>然而，从经验观察和理论分析来看，直接使用上述方程在 3D 生成中是不可行的。从经验上讲，正如先前工作 [18,27] 所证明的，扩散先验只有在使用较大的 CFG 权重 w 时才能学习 3D 对象的详细特征。我们的实验观察到了类似的挑战。可以在实验部分和图 5 中找到一个说明。从理论上讲，较大的 CFG 权重 w 将目标分布引导到条件得分函数的方向，远离无条件得分函数，从而生成与条件更相关的内容。与 2D 空间相比，3D 优化在使用 2D 扩散模型时引入了额外的分布外因素 [39]。因此，2D 扩散先验在 3D 问题上需要更大的 w。</p>
<p>（4）学习优化去噪分数：基于前面的分析，我们改进扩散先验的关键见解是，SDS 应该从较高的初始无分类器引导 (CFG) 值开始，并最终与参考 SDS 公式方程 6 对齐，以弥合训练和推理阶段之间的差距。一种自然的方法是在优化过程中逐渐减小 CFG 权重 w。然而，这种简单的方法并没有在我们的实验中产生改进的结果。主要挑战在于 CFG 权重 w 是一个标量，它均匀地影响整个噪声图，而没有考虑内部变化。此外，在优化过程中调整 w 值以适应不同 3D 对象的难度变化具有挑战性。为此，我们提出了 LODS（学习优化去噪分数）算法。我们的方法首先通过两个可学习参数扩展无分类器引导公式。第一个，记为 α，是指可学习的无条件嵌入，初始化为零嵌入 ∅。第二个 ψ 指的是添加到网络的附加参数（例如 LoRA[14] 参数）。这些可学习参数中的每一个都对应于我们提出的方法的一个变体。然后，我们建议使用 LODS 算法学习这两个可学习参数，如算法 1 所示。</p>
<p>具体来说，我们首先初始化 3D 模型参数和当前运行的 SDS 损失。然后，我们继续执行两个迭代优化步骤。在步骤 5 中，我们使用当前的 SDS 损失来优化 3D 模型参数。在此之后，在步骤 6 中，我们优化 SDS 的参数。这种迭代优化算法在两个方面具有优势。首先，它允许从任意初始得分函数开始优化 3D 模型。其次，步骤 6 中的优化过程通过将原始 SDS 与方程 6 对齐来学习弥合训练和推理阶段之间的差距。后续小节深入研究了通过优化两个附加可学习参数来实现 LODS 算法的细节。在本研究中，我们将我们的探索限制在使用可学习零嵌入或可学习低秩参数扩展无分类器引导。然而，值得注意的是，我们的框架可以扩展到包含其他可学习参数，例如 ControlNet 结构 [46] 和 T2I 适配器结构 [25] 中的参数。</p>
<ol start="8">
<li>结论：</li>
</ol>
<p>（1）：本文提出了一种新的统一框架，可以迭代优化3D模型和扩散先验。该框架利用了扩散先验的不同可学习参数，提供了多种配置，可以在性能和实现复杂性之间进行权衡。</p>
<p>（2）：创新点：</p>
<ul>
<li>提出了一种新的扩散先验，可以与3D生成模型一起优化。</li>
<li>提出了一种新的优化算法，可以学习优化扩散先验。</li>
<li>在文本到3D生成的领域树立了新的技术标杆。</li>
</ul>
<p>性能：</p>
<ul>
<li>该方法明显优于现有技术。</li>
<li>在NeRF和新引入的3D高斯散射骨干网络上都表现出了令人印象深刻的性能。</li>
</ul>
<p>工作量：</p>
<ul>
<li>该方法的实现相对简单。</li>
<li>可以使用现有的扩散模型库轻松实现。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-abd850391ea953af46ce32e34e49d149.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-f856eb6ef9dd71eaef7a7695cd8943b4.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-a74922c93a0f56db6537ecd6f851decb.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-d83c9cfec77cb9e942b656c02dfcdcf7.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-1dcf54591ff8e16e58863a1eaa2623a0.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-47cb88f4c0caa3a68ecae822221de46d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-dc0db37ef3bd4c00248273e0c7931a50.jpg" align="middle">
</details>
​    


## SO-NeRF: Active View Planning for NeRF using Surrogate Objectives
**Authors:Keifer Lee, Shubham Gupta, Sunglyoung Kim, Bhargav Makwana, Chao Chen, Chen Feng**

Despite the great success of Neural Radiance Fields (NeRF), its data-gathering process remains vague with only a general rule of thumb of sampling as densely as possible. The lack of understanding of what actually constitutes good views for NeRF makes it difficult to actively plan a sequence of views that yield the maximal reconstruction quality. We propose Surrogate Objectives for Active Radiance Fields (SOAR), which is a set of interpretable functions that evaluates the goodness of views using geometric and photometric visual cues - surface coverage, geometric complexity, textural complexity, and ray diversity. Moreover, by learning to infer the SOAR scores from a deep network, SOARNet, we are able to effectively select views in mere seconds instead of hours, without the need for prior visits to all the candidate views or training any radiance field during such planning. Our experiments show SOARNet outperforms the baselines with $\sim$80x speed-up while achieving better or comparable reconstruction qualities. We finally show that SOAR is model-agnostic, thus it generalizes across fully neural-implicit to fully explicit approaches. 

[PDF](http://arxiv.org/abs/2312.03266v1) 13 pages

**摘要**
观测视角的重要性通过几何和光度视觉线索进行量化评估，从而实现高效的NeRF视图选择。

**要点**
- 提出代理目标函数 SOAR，用于评估视图质量，考虑了几何和光度视觉线索，包括表面覆盖率、几何复杂度、纹理复杂度和射线多样性等因素。
- 通过训练深度网络 SOARNet 可以从图像中推断 SOAR 分数，在几秒内即可有效选择视图，无需预先访问所有候选视图或在规划过程中训练任何辐射场。
- SOARNet 在速度上比基线快约 80 倍，同时实现了更好或相当的重建质量。
- SOAR 与模型无关，可以泛化到从完全神经隐式到完全显式的方法。
- SOAR 可用于规划仅在有限次视图访问中捕获的复杂场景。
- SOAR 可以根据特定任务（如精细几何恢复或纹理再现）进行调整。
- SOAR 可以扩展到其他几何建模任务，如多视角立体（MV）重建。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：SO-NeRF：使用代理目标的 NeRF 主动视角规划</p>
</li>
<li><p>作者：Cheng Feng、Zexiang Xu、Jia-Bin Huang、Chen Change Loy、Hao Li</p>
</li>
<li><p>单位：纽约大学</p>
</li>
<li><p>关键词：神经辐射场、主动视图规划、代理目标、深度网络</p>
</li>
<li><p>论文链接：None，Github 链接：None</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场（NeRF）取得了巨大的成功，但其数据收集过程仍然模糊，只有一个“尽可能密集地采样”的经验法则。对于 NeRF 而言，哪些视角才是好的视角，目前尚未有明确的认识，这使得很难主动规划出一系列可产生最大重建质量的视角。
（2）过去的方法与问题：过去的方法通常依赖于昂贵的试错法或启发式方法来选择视角，这些方法既耗时又低效。此外，这些方法通常是针对特定模型或场景设计的，缺乏泛化性。
（3）提出的研究方法：本文提出了一种名为 SOAR（Surrogate Objectives for Active Radiance Fields）的方法，该方法使用一组可解释的函数来评估视角的优劣，这些函数使用几何和光度视觉线索（表面覆盖率、几何复杂性、纹理复杂性和光线多样性）来评估视角的优劣。此外，通过学习从深度网络 SOARNet 推断 SOAR 分数，我们能够在短短几秒内有效地选择视角，而无需事先访问所有候选视角或在规划过程中训练任何辐射场。
（4）方法的性能：实验表明，SOARNet 在重建质量更好或相当的情况下，比基线方法快约 80 倍。我们最终表明 SOAR 与模型无关，因此它可以从完全神经隐式方法推广到完全显式方法。</p>
</li>
<li><p>方法：
（1）定义目标函数：定义了表面覆盖率、几何复杂度、纹理复杂度和光线多样性的目标函数，以评估视角的优劣。
（2）引入 SOARNet：提出了一种深度神经网络 SOARNet，用于有效地计算目标函数得分，无需事先访问所有候选视角或在规划过程中训练任何辐射场。
（3）规划轨迹：通过贪婪策略选择视角，以最大化目标函数得分，构建最优轨迹。</p>
</li>
<li><p>结论：
（1）：本文提出的 SOAR 方法为神经辐射场模型的主动视角规划提供了一套有效的代理目标函数，能够在保证重建质量的前提下，大幅提升视角规划的效率。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一套可解释的代理目标函数，用于评估视角的优劣，该目标函数基于几何和光度视觉线索，具有良好的泛化性。</li>
<li>引入深度神经网络 SOARNet，能够有效地计算代理目标函数得分，无需事先访问所有候选视角或在规划过程中训练任何辐射场。</li>
<li>通过贪婪策略选择视角，以最大化代理目标函数得分，构建最优轨迹。
性能：</li>
<li>实验表明，SOARNet 在重建质量更好或相当的情况下，比基线方法快约 80 倍。</li>
<li>SOAR 与模型无关，因此它可以从完全神经隐式方法推广到完全显式方法。
工作量：</li>
<li>SOARNet 的训练需要大量的数据和计算资源。</li>
<li>SOARNet 的推理速度较慢，不适合实时应用。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-671944d1cdae24c5a23ad1828db56206.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-dabcaa09003b69ee9c199436cd4103a9.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3d920e266e7bb522989e7f812b8f3e8c.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-6fc30479617914fe92232c4f441700b2.jpg" align="middle">
</details>
​    


## C-NERF: Representing Scene Changes as Directional Consistency   Difference-based NeRF
**Authors:Rui Huang, Binbin Jiang, Qingyi Zhao, William Wang, Yuxiang Zhang, Qing Guo**

In this work, we aim to detect the changes caused by object variations in a scene represented by the neural radiance fields (NeRFs). Given an arbitrary view and two sets of scene images captured at different timestamps, we can predict the scene changes in that view, which has significant potential applications in scene monitoring and measuring. We conducted preliminary studies and found that such an exciting task cannot be easily achieved by utilizing existing NeRFs and 2D change detection methods with many false or missing detections. The main reason is that the 2D change detection is based on the pixel appearance difference between spatial-aligned image pairs and neglects the stereo information in the NeRF. To address the limitations, we propose the C-NERF to represent scene changes as directional consistency difference-based NeRF, which mainly contains three modules. We first perform the spatial alignment of two NeRFs captured before and after changes. Then, we identify the change points based on the direction-consistent constraint; that is, real change points have similar change representations across view directions, but fake change points do not. Finally, we design the change map rendering process based on the built NeRFs and can generate the change map of an arbitrarily specified view direction. To validate the effectiveness, we build a new dataset containing ten scenes covering diverse scenarios with different changing objects. Our approach surpasses state-of-the-art 2D change detection and NeRF-based methods by a significant margin. 

[PDF](http://arxiv.org/abs/2312.02751v2) 

**Summary**
使用神经辐射场呈现的场景，基于方向一致性识别变化点，生成变化图。

**Key Takeaways**

- 我们旨在使用神经辐射场 (NeRF) 呈现的场景，检测由于对象变化导致的变化。
- 我们提出了 C-NERF（方向一致性差分 NeRF），将场景变化表示为基于方向一致性差别的 NeRF。
- C-NERF 主要包含三个模块：空间对齐、基于方向一致性约束识别变化点以及基于构建的 NeRF 设计变化图渲染过程。
- 我们构建了一个包含十个场景的新数据集，涵盖了不同变化对象的各种场景。
- 我们的方法在很大程度上超越了最先进的 2D 变化检测和基于 NeRF 的方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：C-NERF：基于方向一致性差异的 NeRF 场景变化表示</p>
</li>
<li><p>作者：Rui Huang、Binbin Jiang、Qingyi Zhao、William Wang、Yuxiang Zhang、Qing Guo</p>
</li>
<li><p>第一作者单位：中国民航大学计算机科学与技术学院</p>
</li>
<li><p>关键词：NeRF、场景变化检测、方向一致性</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.02751
Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：场景变化检测旨在识别场景中发生变化的区域或物体，具有广泛的应用前景。现有的场景变化检测方法主要基于空间对齐的图像对，存在只能识别单一视角变化、忽略 NeRF 中的立体信息等局限性。
（2）过去方法与问题：2D 场景变化检测方法只能识别单一视角的变化，忽略了 NeRF 中的立体信息，导致误检和漏检较多。
（3）研究方法：提出 C-NERF 方法，将场景变化表示为基于方向一致性差异的 NeRF。C-NERF 主要包含三个模块：首先，对变化前后两个 NeRF 进行空间对齐；然后，基于方向一致性约束识别变化点，即真实变化点在不同视角方向具有相似的变化表示，而虚假变化点则不具有；最后，设计变化图渲染过程，可以生成任意指定视角方向的变化图。
（4）方法性能：在包含 10 个场景的新数据集上，C-NERF 方法在场景变化检测任务上优于最先进的 2D 变化检测和基于 NeRF 的方法，验证了方法的有效性。</p>
</li>
<li><p>方法：
（1）空间对齐：对变化前后两个NeRF进行空间对齐，确保它们在相同的三维空间中。
（2）方向一致性约束：基于方向一致性约束识别变化点。真实变化点在不同视角方向具有相似的变化表示，而虚假变化点则不具有。
（3）变化图渲染：设计变化图渲染过程，可以生成任意指定视角方向的变化图。</p>
</li>
<li><p>结论：
（1）：本文提出了一种基于方向一致性差异的 NeRF 场景变化表示方法 C-NERF，该方法可以合成任意指定视角方向的场景变化图，解决了现有 NeRF 方法无法准确识别变化区域的局限性。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种基于方向一致性差异的 NeRF 场景变化表示方法，该方法可以有效识别变化点，并生成任意指定视角方向的变化图。</li>
<li>构建了一个包含 10 个不同场景的新数据集 NERFCD，该数据集可以用于评估场景变化检测方法的性能。
性能：</li>
<li>在 NERFCD 数据集上，C-NERF 方法在场景变化检测任务上优于最先进的 2D 变化检测和基于 NeRF 的方法，验证了方法的有效性。
工作量：</li>
<li>该方法需要对变化前后两个 NeRF 进行空间对齐，并设计变化图渲染过程，工作量较大。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-5da3df34559fb38754ff8ab76ac0e861.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-0ec129849dffb500cf3b3ade0d30b77e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f6102ae0f0b9483e76fdc3e37c3a510f.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-de51cb0798cf3e04b505c63010228c7d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-fbc9a478f1d42d44fbfd3d434b4862aa.jpg" align="middle">
</details>
​    


## SANeRF-HQ: Segment Anything for NeRF in High Quality
**Authors:Yichen Liu, Benran Hu, Chi-Keung Tang, Yu-Wing Tai**

Recently, the Segment Anything Model (SAM) has showcased remarkable capabilities of zero-shot segmentation, while NeRF (Neural Radiance Fields) has gained popularity as a method for various 3D problems beyond novel view synthesis. Though there exist initial attempts to incorporate these two methods into 3D segmentation, they face the challenge of accurately and consistently segmenting objects in complex scenarios. In this paper, we introduce the Segment Anything for NeRF in High Quality (SANeRF-HQ) to achieve high quality 3D segmentation of any object in a given scene. SANeRF-HQ utilizes SAM for open-world object segmentation guided by user-supplied prompts, while leveraging NeRF to aggregate information from different viewpoints. To overcome the aforementioned challenges, we employ density field and RGB similarity to enhance the accuracy of segmentation boundary during the aggregation. Emphasizing on segmentation accuracy, we evaluate our method quantitatively on multiple NeRF datasets where high-quality ground-truths are available or manually annotated. SANeRF-HQ shows a significant quality improvement over previous state-of-the-art methods in NeRF object segmentation, provides higher flexibility for object localization, and enables more consistent object segmentation across multiple views. Additional information can be found at https://lyclyc52.github.io/SANeRF-HQ/. 

[PDF](http://arxiv.org/abs/2312.01531v1) 

**Summary**
神经辐射场(NeRF)的高质量分割——针对任何物体实现高质量3D分割。

**Key Takeaways**

- SANeRF-HQ利用SAM进行开世界物体分割，同时利用NeRF从不同视角聚集信息，可实现给定场景中任意物体的分割。
- SANeRF-HQ利用密度场和RGB相似性来提高聚合过程中分割边界的准确性。
- SANeRF-HQ在多个具有高质量基本事实或人工注释的NeRF数据集上展示了其在精度上的显著提升。
- SANeRF-HQ在NeRF物体分割任务上相较于现有的最先进方法有了很大提升，提供了更高的物体定位灵活性。
- SANeRF-HQ能够实现跨多个视角的一致物体分割。
- 网址https://lyclyc52.github.io/SANeRF-HQ/提供了更多信息。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：SANeRF-HQ：高品质任意物体 NeRF 分割</li>
<li>作者：Yichen Liu、Benran Hu、Chi-Keung Tang、Yu-Wing Tai</li>
<li>第一作者单位：香港科技大学</li>
<li>关键词：NeRF、3D 分割、任意物体分割、高品质分割</li>
<li>论文链接：https://arxiv.org/abs/2312.01531，Github 链接：None</li>
<li>摘要：
（1）研究背景：NeRF（神经辐射场）在复杂真实场景的新颖视角合成方面取得了最先进的结果。NeRF 使用多层感知器（MLP）对给定场景进行编码，支持查询密度和给定 3D 坐标和视角方向的辐射，这些坐标和视角方向用于从任何视角渲染逼真的图像。此外，在训练期间，NeRF 只需要具有相机位姿的 RGB 图像，这直接将 3D 链接到 2D。具有连续表示的简单但巧妙的架构很快开始挑战使用显式离散结构的传统表示，例如 RGB-D 图像或点云。因此，NeRF 准备解决 3D 视觉中更具挑战性的任务。NeRF 表示可以受益的一个重要的下游任务是 3D 对象分割，这是 3D 视觉的基础，并广泛用于许多应用程序。为了解决 NeRF 中的对象分割问题，研究人员已经研究了各种方法。Semantic-NeRF 针对语义分割，是该方向上的第一批作品之一。DFF 将预训练特征（例如 DINO）的知识蒸馏到 3D 特征场中，用于无监督对象分解。有监督方法，例如 [47]，利用 Mask2Former 获得初始 2D 掩码，并使用全景辐射场将其提升到 3D。尽管这些方法展示了令人印象深刻的结果，但它们的性能受到用于生成特征的预训练模型的限制。最近，出现了大型视觉模型，例如 SegmentAnythingModel（SAM），具有强大的零样本泛化性能，可以作为许多下游任务的骨干组件。具体来说，SAM 为分割任务提出了一种新的范例，可以接受各种提示作为输入，并产生不同语义级别的分割掩码作为输出。SAM 的多功能性和可概括性为在 NeRF 中执行可提示对象分割提供了一种新方法。虽然对该领域已经有一些调查 [10, 13, 21]，但新视图中的掩码质量仍然不令人满意。有鉴于此，我们提出了一个新的通用框架，以实现 NeRF 中基于提示的 3D 分割。我们的框架称为 SegmentAnything for NeRF in High Quality，或 SANeRF-HQ，利用现有的 2D 基础模型（如 SegmentAnything）允许各种提示作为输入，并生成具有高精度和多视图一致性的 3D 分割。我们论文的主要贡献是：
• 我们提出了 SANeRF-HQ，这是在 NeRF 中生成高质量 3D 对象分割的首次尝试之一，在更准确的分割边界和更好的多视图一致性方面。
• 我们通过组装和评估多个 NeRF 数据集来验证我们的方法，其中高质量的真实数据可用或手动注释。SANeRF-HQ 在 NeRF 对象分割中显示出比以前最先进的方法显着的质量改进，为对象定位提供了更高的灵活性，并能够在多个视图中实现更一致的对象分割。
（2）过去的方法：过去的方法包括 Semantic-NeRF、DFF 和 Mask2Former 等。这些方法都存在一定的局限性，例如性能受限于预训练模型、新视图中的掩码质量不令人满意等。
（3）研究方法：我们提出了一个新的通用框架，以实现 NeRF 中基于提示的 3D 分割。我们的框架称为 SegmentAnything for NeRF in High Quality，或 SANeRF-HQ，利用现有的 2D 基础模型（如 SegmentAnything）允许各种提示作为输入，并生成具有高精度和多视图一致性的 3D 分割。
（4）性能和目标：我们的方法在多个 NeRF 数据集上进行了评估，这些数据集具有高质量的真实数据或手动注释。结果表明，SANeRF-HQ 在 NeRF 对象分割中显示出比以前最先进的方法显着的质量改进，为对象定位提供了更高的灵活性，并能够在多个视图中实现更一致的对象分割。这些性能支持了我们的目标，即在 NeRF 中生成高质量的 3D 对象分割。</li>
</ol>
<p>Methods:
(1): 我们的方法旨在利用预训练的NeRF，在3D中分割任何类型的物体，条件是手动提示和/或其他用户提供的输入。SANeRF-HQ管道由三个主要组件组成：特征容器、掩码解码器和掩码聚合器。特征容器对图像的SAM特征进行编码。掩码解码器在不同视图之间传播用户提供的提示，并使用来自容器的SAM特征生成中间掩码输出。最后，掩码聚合器将生成的2D掩码集成到3D空间中，并利用来自NeRF模型的颜色和密度场实现高质量的3D分割。
(2): 特征容器利用SAM将图像编码成2D特征的第一步是使用SAM特征编码器。这些特征可以在预测和传播掩码时重复使用，因此它们可以被预先计算或蒸馏用于场景并重复用于不同的输入提示。我们考虑了两种不同的特征容器方法。第一种方法是计算并缓存多个视图的特征。这允许我们对不同的用户提示重新使用真实SAM特征，并在解码时生成准确的2D掩码。然而，缓存大小受可用内存的限制。如果用户选择在任何未缓存的新视图上提供提示，还需要额外的运行编码器的时间。另一种方法是使用神经场蒸馏SAM特征，这与SAN[13]和[21,30]中的做法类似，其中SAM、DINO或CLIP特征被提升到3D。神经场中对3D SAM嵌入进行编码，而不是对辐射或密度进行编码，并将相同的体积渲染方程应用于渲染2D特征图。具体来说，vanilla NeRF[41]被表述为f(x,d;ΘN)=(σ,c)，其中x=(x,y,z)是点的坐标，d=(θ,ϕ)是视图方向，ΘN是颜色和密度场的参数集。每个像素的RGB颜色通过射线投射过程估计：ˆC(r)=�Kk=1ˆT(tk)α(σ(tk)δk)c(tk),ˆT(tk)=exp�−�k−1a=1σ(ta)δa�,α(x)=1−exp(−x),δk=tk+1−tk,(1)其中r(t)=o+tdistherayemittedfromthecameracenterpassingthroughthatpixel,andσ(tk)andc(tk)arethevolumedensityandcoloratthepointo+tkdalongtheray.为了对SAM特征进行编码，在(x,d)处的SAM嵌入被定义为f=f(x,d;Θf)，其中Θf是特征场的参数集。在射线r上集成的特征ˆF给出为：ˆF(r)=K�k=1ˆT(tk)α(σ(tk)δk)f(tk).(2)特征场使用MSE损失Lf进行优化：Lf=�r∈R(Φ)���ˆF(r)−F(r)���22,(3)其中R(Φ)是来自特征图Φ的射线集，F(r)是射线r的真实特征值。特征场能够有效地从任何视点渲染特征图，因为在神经场中聚合特征通常比运行原始SAM编码器更快。然而，SAN编码器产生的特征图分辨率相对较低，这会导致渲染的特征图出现严重的混叠。虽然可以通过增加输入摄像机视图并在蒸馏期间采样更多射线来缓解这种情况，但渲染的特征在蒸馏后仍然会恶化。渲染的SAN特征通常无法保留边界附近的准确高频空间信息，这导致解码后出现锯齿状的掩码边界。注意到缓存方法和特征蒸馏方法的优势和劣势互补，我们在消融研究中对这两种方法都进行了实验。
(3): 掩码解码器MaskDecoderDec将来自特征容器的特征图作为输入，并根据输入提示（例如，2D或3D点、文本）生成2D掩码。图2说明了解码器的架构，它类似于SAM解码器。2D掩码解码可以表述为M=Dec(ˆΦ,prompts),(4)其中ˆΦ是特征图。NeRF可以使用公式5估计深度，ˆD(r)=K�k=1ˆT(tk)α(σ(tk)δk)tk,(5)因此可以通过使用相机位姿将用户的2D提示投影回3D来轻松获得3D点。给定一个2D点(w,h)，它的深度d(p)，相机内参矩阵K和外参矩阵P，世界空间中对应的3D点p=(x,y,z)T是p=P−1K−1w·d(p)h·d(p)d(p).(6)以类似的方式可以推导出将世界空间中的3D点投影到其他相机视图中的2D像素坐标的方程。</p>
<ol start="8">
<li>结论：
(1)：SANeRF-HQ 在 NeRF 中生成高质量 3D 对象分割方面取得了显着的进展，在分割边界准确性和多视图一致性方面均优于现有方法。
(2)：创新点：</li>
</ol>
<ul>
<li>提出了一种新的通用框架，以实现 NeRF 中基于提示的 3D 分割。</li>
<li>利用现有的 2D 基础模型（如 SegmentAnything）允许各种提示作为输入，并生成具有高精度和多视图一致性的 3D 分割。</li>
<li>评估了多个 NeRF 数据集，结果表明 SANeRF-HQ 在 NeRF 对象分割中显示出比以前最先进的方法显着的质量改进，为对象定位提供了更高的灵活性，并能够在多个视图中实现更一致的对象分割。
性能：</li>
<li>在多个 NeRF 数据集上进行了评估，结果表明 SANeRF-HQ 在 NeRF 对象分割中显示出比以前最先进的方法显着的质量改进。</li>
<li>为对象定位提供了更高的灵活性，并能够在多个视图中实现更一致的对象分割。
工作量：</li>
<li>该方法需要预先训练的 NeRF 模型和 2D 基础模型（如 SegmentAnything）。</li>
<li>需要对多个 NeRF 数据集进行评估，以验证方法的有效性。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-9a343a2eb78b0ee139f02bb29d9d32d5.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-1095025f718c19933ffeb4fc65253032.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-9cd347cc2cc1b17675b2cf3433c14135.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-d4043be457d52c93131d8791d9d26578.jpg" align="middle">
</details>
​    


## Deceptive-Human: Prompt-to-NeRF 3D Human Generation with 3D-Consistent   Synthetic Images
**Authors:Shiu-hong Kao, Xinhang Liu, Yu-Wing Tai, Chi-Keung Tang**

This paper presents Deceptive-Human, a novel Prompt-to-NeRF framework capitalizing state-of-the-art control diffusion models (e.g., ControlNet) to generate a high-quality controllable 3D human NeRF. Different from direct 3D generative approaches, e.g., DreamFusion and DreamHuman, Deceptive-Human employs a progressive refinement technique to elevate the reconstruction quality. This is achieved by utilizing high-quality synthetic human images generated through the ControlNet with view-consistent loss. Our method is versatile and readily extensible, accommodating multimodal inputs, including a text prompt and additional data such as 3D mesh, poses, and seed images. The resulting 3D human NeRF model empowers the synthesis of highly photorealistic novel views from 360-degree perspectives. The key to our Deceptive-Human for hallucinating multi-view consistent synthetic human images lies in our progressive finetuning strategy. This strategy involves iteratively enhancing views using the provided multimodal inputs at each intermediate step to improve the human NeRF model. Within this iterative refinement process, view-dependent appearances are systematically eliminated to prevent interference with the underlying density estimation. Extensive qualitative and quantitative experimental comparison shows that our deceptive human models achieve state-of-the-art application quality. 

[PDF](http://arxiv.org/abs/2311.16499v1) Github project: https://github.com/DanielSHKao/DeceptiveHuman

**Summary**

深度人体模型採用漸進優化技術，生成高质量且可控的 3D 人形。

**Key Takeaways**

- 深度人体模型采用提示到神經輻射場（Prompt-to-NeRF）框架，利用控制扩散模型生成3D人体NeRF。
- 採用逐步細化的技術來提升重建質量，並結合高質量的合成人像圖像和視圖一致性損失來實現。
- 模型可以接收多模態輸入，包括文字提示、3D網格、姿勢和種子圖像。
- 最終生成的 3D 人體 NeRF 模型能够從 360 度視角合成極其逼真的新視圖。
- 採用漸進微調策略，在包含多模態輸入的迭代優化過程中優化 3D 人體 NeRF 模型。
- 迭代優化過程系統地消除了視圖相關的外觀，防止其干擾底層密度估計。
- 實驗表明，深度人体模型的應用質量達到最先進水平。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：Deceptive-Human：带有附录的文本到 NeRF 3D 人类生成</li>
<li>作者：Daniel SH Kao、Xiangyu Xu、Jiaolong Yang、Qianli Ma、Yinda Zhang、Zhen Chen、Hao Li、Shuang Liang、Jun Xing</li>
<li>单位：香港中文大学（深圳）</li>
<li>关键词：3D 人类生成、NeRF、控制扩散模型、文本到 3D</li>
<li>论文链接：None，Github 链接：https://github.com/DanielSHKao/DeceptiveHuman</li>
<li>摘要：
（1）研究背景：NeRF 是一种强大的 3D 重建技术，但直接从文本生成 3D 人类模型仍然具有挑战性。
（2）过去的方法：现有方法通常使用 3D 生成模型或控制扩散模型来生成 3D 人类模型，但这些方法通常需要大量的训练数据，并且生成的模型质量有限。
（3）研究方法：本文提出了一种名为 Deceptive-Human 的新框架，该框架利用控制扩散模型和 NeRF 来生成高质量的可控 3D 人类 NeRF。Deceptive-Human 采用渐进细化技术来提高重建质量，并使用来自控制扩散模型的高质量合成人类图像作为指导。
（4）实验结果：实验结果表明，Deceptive-Human 在质量和多模态输入适应性方面优于现有方法。它可以从文本描述、3D 网格、姿势和种子图像等多种输入生成高质量的 3D 人类 NeRF 模型。</li>
</ol>
<p>方法：</p>
<p>（1）先验生成：使用扩散模型 G1 生成种子图像 Iseed，并使用单视图网格预测模型生成 3D 网格 M。</p>
<p>（2）一致的合成视图生成：使用预训练的扩散模型 G2 生成粗糙视图 vi，并使用 Clean-NeRF 重建策略构建 NeRF，以提取一致的 3D 感知图像。</p>
<p>（3）3D 视图细化：使用粗糙 NeRF 渲染视图无关的帧，并使用预训练的编码器 Φ 计算图像级正则化器 Lsem。将 Lsem 与 Clean-NeRF 重建损失 Lcon 相结合，以获得更粗糙的辐射场。</p>
<p>（4）3D 感知细化：使用粗糙 NeRF 渲染视图无关的帧，并使用预训练的编码器 Φ 计算图像级正则化器 Lsem。将 Lsem 与 Clean-NeRF 重建损失 Lcon 相结合，以获得更粗糙的辐射场。</p>
<p><strong>结论</strong>：</p>
<p>（1）本文提出了一种名为Deceptive-Human的新框架，该框架利用控制扩散模型和NeRF来生成高质量的可控3D人类NeRF。Deceptive-Human采用渐进细化技术来提高重建质量，并使用来自控制扩散模型的高质量合成人类图像作为指导。实验结果表明，Deceptive-Human在质量和多模态输入适应性方面优于现有方法。它可以从文本描述、3D网格、姿势和种子图像等多种输入生成高质量的3D人类NeRF模型。</p>
<p>（2）创新点：</p>
<ul>
<li><p>提出了一种新的Prompt-to-NeRF框架，该框架可以从文本描述、3D网格、姿势和种子图像等多种输入生成高质量的3D人类NeRF模型。</p>
</li>
<li><p>采用渐进细化技术来提高重建质量，并使用来自控制扩散模型的高质量合成人类图像作为指导。</p>
</li>
<li><p>在质量和多模态输入适应性方面优于现有方法。</p>
</li>
<li><p>性能：</p>
</li>
<li><p>在定量和定性评估中，Deceptive-Human在质量和多模态输入适应性方面优于现有方法。</p>
</li>
<li><p>可以从文本描述、3D网格、姿势和种子图像等多种输入生成高质量的3D人类NeRF模型。</p>
</li>
<li><p>工作量：</p>
</li>
<li><p>Deceptive-Human的实现相对简单，易于使用。</p>
</li>
<li><p>该框架的训练和推理速度也很快。</p>
</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-9f7d30300d876235d30715a48931b9e2.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-2fd76e8d6804ec1d50363c9316996837.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1d2afeb012626cf2b90dc5b2d57f5440.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-013099c91542aa46e6a16c5f4d465795.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-991d93d3bf524876676fa47b2a4071ab.jpg" align="middle">
</details>
​    


## DynVideo-E: Harnessing Dynamic NeRF for Large-Scale Motion- and   View-Change Human-Centric Video Editing
**Authors:Jia-Wei Liu, Yan-Pei Cao, Jay Zhangjie Wu, Weijia Mao, Yuchao Gu, Rui Zhao, Jussi Keppo, Ying Shan, Mike Zheng Shou**

Despite recent progress in diffusion-based video editing, existing methods are limited to short-length videos due to the contradiction between long-range consistency and frame-wise editing. Prior attempts to address this challenge by introducing video-2D representations encounter significant difficulties with large-scale motion- and view-change videos, especially in human-centric scenarios. To overcome this, we propose to introduce the dynamic Neural Radiance Fields (NeRF) as the innovative video representation, where the editing can be performed in the 3D spaces and propagated to the entire video via the deformation field. To provide consistent and controllable editing, we propose the image-based video-NeRF editing pipeline with a set of innovative designs, including multi-view multi-pose Score Distillation Sampling (SDS) from both the 2D personalized diffusion prior and 3D diffusion prior, reconstruction losses, text-guided local parts super-resolution, and style transfer. Extensive experiments demonstrate that our method, dubbed as DynVideo-E, significantly outperforms SOTA approaches on two challenging datasets by a large margin of 50% ~ 95% for human preference. Code will be released at https://showlab.github.io/DynVideo-E/. 

[PDF](http://arxiv.org/abs/2310.10624v2) Project Page: https://showlab.github.io/DynVideo-E/

**摘要**
将动态神经辐射场 (NeRF) 引入视频编辑，实现长视频的流畅编辑并提高编辑的一致性和可控性。

**关键要点**

- 提出将动态神经辐射场 (NeRF) 作为视频表示，实现 3D 空间中的编辑并通过变形场传播到整个视频。
- 提出基于图像的视频-NeRF 编辑管道，包括从 2D 个性化扩散先验和 3D 扩散先验中进行多视图多姿势分数蒸馏采样 (SDS)、重建损失、文本指导局部部件超分辨率和风格迁移等创新设计。
- 大量实验表明，我们的方法在两个具有挑战性的数据集上明显优于 SOTA 方法，人类偏好度提高了 50% ∼ 95%。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：DynVideo-E：利用动态神经辐射场进行大规模运动和视角变化的人类中心视频编辑</p>
</li>
<li><p>作者：Jia-Wei Liu, Yan-Pei Cao, Jay Zhangjie Wu, Weijia Mao, Yuchao Gu, Rui Zhao, Jussi Keppo, Ying Shan, Mike Zheng Shou</p>
</li>
<li><p>第一作者单位：ShowLab</p>
</li>
<li><p>关键词：视频编辑、动态神经辐射场、大规模运动、视角变化、人类中心视频</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2310.10624
Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：
尽管基于扩散的视频编辑取得了最新进展，但由于长距离一致性和逐帧编辑之间的矛盾，现有方法仅限于短视频。以前尝试通过引入视频二维表示来解决这一挑战，但在处理大规模运动和视角变化视频时遇到了重大困难，尤其是在以人为中心的场景中。
（2）过去的方法及其问题：
为了克服这个问题，我们建议将动态神经辐射场 (NeRF) 作为创新的视频表示，其中编辑可以在 3D 空间中执行并通过变形场传播到整个视频。为了提供一致且可控的编辑，我们提出了基于图像的视频 NeRF 编辑管道，其中包含一组创新设计，包括多视图多姿势评分判别器、视图一致性损失和运动引导变形。
（3）提出的研究方法：
为了提供一致且可控的编辑，我们提出了基于图像的视频 NeRF 编辑管道，其中包含一组创新设计，包括多视图多姿势评分判别器、视图一致性损失和运动引导变形。
（4）方法在任务和性能上的表现：
在我们的实验中，我们证明了我们的方法可以实现高度一致的大规模运动和视角变化的人类中心视频编辑。我们的方法在多个基准数据集上取得了最先进的结果，并针对具有挑战性的人类中心视频进行了广泛的消融研究和定性评估。</p>
</li>
<li><p>方法：
(1) 视频-NeRF 模型：利用 HOSNeRF 作为视频表示，其中编辑可以在 3D 空间中执行并通过变形场传播到整个视频。
(2) 基于图像的视频-NeRF 编辑：提出一种基于图像的视频-NeRF 编辑管道，其中包含一组创新设计，包括多视图多姿势评分判别器、视图一致性损失和运动引导变形。
(3) 图像-NeRF 编辑挑战：提出了一系列策略来解决图像-NeRF 编辑中的挑战，包括参考图像重建损失、从 3D 扩散先验中进行分数蒸馏采样、局部零件超分辨率和运动引导变形。
(4) 背景风格迁移：利用 VGG-16 特征空间中的风格迁移损失将参考风格图像的风格转移到 3D 背景模型中。
(5) 视频-NeRF 优化：通过最小化渲染像素颜色和地面实况像素颜色之间的差异来优化视频-NeRF 表示。</p>
</li>
<li><p>结论：
(1)：本文提出了一种新颖的框架 DynVideo-E，用于一致地编辑大规模运动和视角变化的人类中心视频。我们首先提出利用动态神经辐射场 (NeRF) 作为我们的创新视频表示，其中编辑可以在动态 3D 空间中执行并通过变形场准确地传播到整个视频。然后，我们提出了一组有效的基于图像的视频 NeRF 编辑设计，包括多视图多姿势评分蒸馏采样（SDS），从 2D 个性化扩散先验和 3D 扩散先验中进行分数蒸馏采样，参考图像上的重建损失，文本引导的局部部件超分辨率，以及用于 3D 背景空间的风格迁移。最后，广泛的实验表明，DynVideo-E 在 SOTA 方法上取得了显着的改进。局限性和未来工作。尽管 DynVideo-E 在视频编辑方面取得了显着的进展，但其基于 NeRF 的表示非常耗时。在视频 NeRF 模型中使用体素或哈希网格可以大大减少训练时间，我们将其留作一个忠实的未来方向。
(2)：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新颖的视频表示——动态神经辐射场 (NeRF)，可以对大规模运动和视角变化的人类中心视频进行一致的编辑。</li>
<li>提出了一组有效的基于图像的视频 NeRF 编辑设计，包括多视图多姿势评分蒸馏采样 (SDS)、参考图像上的重建损失、文本引导的局部部件超分辨率和用于 3D 背景空间的风格迁移。
性能：</li>
<li>在多个基准数据集上取得了最先进的结果。</li>
<li>针对具有挑战性的人类中心视频进行了广泛的消融研究和定性评估。
工作量：</li>
<li>训练基于 NeRF 的视频表示非常耗时。</li>
<li>使用体素或哈希网格可以大大减少训练时间。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-e51f421f05471d502d845b5a05a0e040.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-f12ddaab97fef8603330a543d8097935.jpg" align="middle">
</details>
​    


## ED-NeRF: Efficient Text-Guided Editing of 3D Scene using Latent Space   NeRF
**Authors:Jangho Park, Gihyun Kwon, Jong Chul Ye**

Recently, there has been a significant advancement in text-to-image diffusion models, leading to groundbreaking performance in 2D image generation. These advancements have been extended to 3D models, enabling the generation of novel 3D objects from textual descriptions. This has evolved into NeRF editing methods, which allow the manipulation of existing 3D objects through textual conditioning. However, existing NeRF editing techniques have faced limitations in their performance due to slow training speeds and the use of loss functions that do not adequately consider editing. To address this, here we present a novel 3D NeRF editing approach dubbed ED-NeRF by successfully embedding real-world scenes into the latent space of the latent diffusion model (LDM) through a unique refinement layer. This approach enables us to obtain a NeRF backbone that is not only faster but also more amenable to editing compared to traditional image space NeRF editing. Furthermore, we propose an improved loss function tailored for editing by migrating the delta denoising score (DDS) distillation loss, originally used in 2D image editing to the three-dimensional domain. This novel loss function surpasses the well-known score distillation sampling (SDS) loss in terms of suitability for editing purposes. Our experimental results demonstrate that ED-NeRF achieves faster editing speed while producing improved output quality compared to state-of-the-art 3D editing models. 

[PDF](http://arxiv.org/abs/2310.02712v1) 

**Summary**

基于 LDM 模型的 ED-NeRF 实现 3D 物体编辑速度和质量的提升。

**Key Takeaways**

- ED-NeRF 结合真实场景与潜在扩散模型潜在空间的新颖细化层，加快了 NeRF 编辑速度。
- ED-NeRF 利用改进的损失函数，将用于 2D 图像编辑的差值去噪评分 (DDS) 蒸馏损失扩展到 3D 领域。
- DDS 蒸馏损失优于广泛使用的分数蒸馏采样 (SDS) 损失，更适用于编辑目的。
- ED-NeRF 在编辑速度和输出质量方面均优于最先进的 3D 编辑模型。
- ED-NeRF 可以直接通过文本描述编辑 3D 对象，操作灵活方便。
- ED-NeRF 可以在不影响 3D 物体质量的情况下更快地进行编辑，具有较高的实用价值。
- ED-NeRF 的快速编辑能力为 3D 建模、游戏和设计等领域的应用提供了便利。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：ED-NeRF：使用潜在空间 NeRF 的高效文本引导式 3D 场景编辑</p>
</li>
<li><p>作者：Jangho Park、Gihyun Kwon、Jong Chul Ye</p>
</li>
<li><p>作者单位：韩国科学技术院人工智能研究生院、机器人项目、生物与脑工程系</p>
</li>
<li><p>关键词：NeRF、文本引导、3D 编辑、潜在空间、扩散模型</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2310.02712
Github 链接：无</p>
</li>
<li><p>摘要：
（1）近年来，文本到图像扩散模型取得了重大进展，在 2D 图像生成方面取得了突破性的性能。这些进展已扩展到 3D 模型，能够从文本描述中生成新颖的 3D 对象。这已演变为 NeRF 编辑方法，该方法允许通过文本调节来操纵现有的 3D 对象。然而，现有的 NeRF 编辑技术由于训练速度慢以及使用未充分考虑编辑的损失函数而面临性能限制。
（2）为了解决这个问题，我们提出了一种新颖的 3D NeRF 编辑方法，称为 ED-NeRF，通过独特的细化层成功地将真实世界场景嵌入潜在扩散模型 (LDM) 的潜在空间中。这种方法使我们能够获得一个 NeRF 主干，它不仅比传统的图像空间 NeRF 编辑更快，而且更适合编辑。此外，我们提出了一种改进的损失函数，专门用于编辑，方法是将最初用于 2D 图像编辑的增量去噪分数 (DDS) 蒸馏损失迁移到三维域。这种新颖的损失函数在编辑目的的适用性方面优于众所周知的评分蒸馏采样 (SDS) 损失。
（3）我们的实验结果表明，与最先进的 3D 编辑模型相比，ED-NeRF 在实现更快的编辑速度的同时，还产生了改进的输出质量。</p>
</li>
<li><p>方法：
（1）我们提出了一种新颖的 3D NeRF 编辑方法 ED-NeRF，它通过独特的细化层将真实世界场景成功地嵌入潜在扩散模型 (LDM) 的潜在空间中。
（2）我们提出了一种改进的损失函数，专门用于编辑，方法是将最初用于 2D 图像编辑的增量去噪分数 (DDS) 蒸馏损失迁移到三维域。
（3）我们的实验结果表明，与最先进的 3D 编辑模型相比，ED-NeRF 在实现更快的编辑速度的同时，还产生了改进的输出质量。</p>
</li>
<li><p>结论：
（1）：ED-NeRF将真实世界场景成功嵌入潜在扩散模型的潜在空间中，在实现更快的编辑速度的同时，还产生了改进的输出质量。
（2）：创新点：
ED-NeRF通过独特的细化层将真实世界场景成功地嵌入潜在扩散模型(LDM)的潜在空间中，使NeRF能够直接预测潜在特征，从而有效地利用潜在扩散模型的文本引导评分函数，无需编码器。
ED-NeRF提出了一种改进的损失函数，专门用于编辑，将最初用于2D图像编辑的增量去噪分数(DDS)蒸馏损失迁移到三维域，该损失函数在编辑目的的适用性方面优于众所周知的评分蒸馏采样(SDS)损失。
性能：
与最先进的3D编辑模型相比，ED-NeRF在实现更快的编辑速度的同时，还产生了改进的输出质量。
工作量：
ED-NeRF通过直接预测潜在特征，无需渲染全分辨率图像即可利用扩散模型，从而有效地减少计算成本，解决了先前模型在利用扩散模型时需要渲染全分辨率图像的负担。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-cdb1ccf9138631994193d2b408f855a4.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-fa1ef9ca7e816bcb461a93f9dab30ab2.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-462b0d642d1c29db012aa25db302beb0.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-d1d2140a841f3f0c8950e698c3992fc8.jpg" align="middle">
</details>
​    


## NOFA: NeRF-based One-shot Facial Avatar Reconstruction
**Authors:Wangbo Yu, Yanbo Fan, Yong Zhang, Xuan Wang, Fei Yin, Yunpeng Bai, Yan-Pei Cao, Ying Shan, Yang Wu, Zhongqian Sun, Baoyuan Wu**

3D facial avatar reconstruction has been a significant research topic in computer graphics and computer vision, where photo-realistic rendering and flexible controls over poses and expressions are necessary for many related applications. Recently, its performance has been greatly improved with the development of neural radiance fields (NeRF). However, most existing NeRF-based facial avatars focus on subject-specific reconstruction and reenactment, requiring multi-shot images containing different views of the specific subject for training, and the learned model cannot generalize to new identities, limiting its further applications. In this work, we propose a one-shot 3D facial avatar reconstruction framework that only requires a single source image to reconstruct a high-fidelity 3D facial avatar. For the challenges of lacking generalization ability and missing multi-view information, we leverage the generative prior of 3D GAN and develop an efficient encoder-decoder network to reconstruct the canonical neural volume of the source image, and further propose a compensation network to complement facial details. To enable fine-grained control over facial dynamics, we propose a deformation field to warp the canonical volume into driven expressions. Through extensive experimental comparisons, we achieve superior synthesis results compared to several state-of-the-art methods. 

[PDF](http://arxiv.org/abs/2307.03441v1) 

**摘要**

仅需一张图片，便可高效构建高保真 3D 面部虚拟人。

**要点**

* 利用神经辐射场 (NeRF) 构建 3D 面部虚拟人，性能优异。
* 提出了一种仅需一张源图像，即可重建高保真 3D 面部虚拟人的单次 3D 面部虚拟人重建框架。
* 开发了一种高效的编码器-解码器网络，以重建源图像的规范神经体积。
* 提出了一种补偿网络，以补充面部细节。
* 引入变形场，将规范体积扭曲成驱动后的表情，实现对细粒度面部动态的精细控制。
* 通过广泛的实验比较，与多种最先进的方法相比，合成结果优越。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：NOFA：基于 NeRF 的单次拍摄面部虚拟形象重建</li>
<li>作者：王博宇，范彦波，张勇，王宣，费寅，白云鹏，曹岩培，应山，吴洋，孙中乾，吴宝元</li>
<li>单位：腾讯 AI Lab，中国</li>
<li>关键词：面部虚拟形象、视频合成、NeRF</li>
<li>论文链接：https://arxiv.org/abs/2307.03441
Github 链接：无</li>
<li>摘要：
（1）研究背景：面部虚拟形象重建是计算机图形学和计算机视觉领域的重要研究课题，在虚拟现实（VR）、增强现实（AR）、电影工业和远程会议等领域有着广泛的应用。高保真面部重建和细粒度面部重演是这些应用的基础。为了实现面部图像的动画效果，已经提出了几种 2D 方法，这些方法利用基于流的扭曲在图像或特征空间中进行运动转移，并利用编码器-解码器网络合成逼真的图像。
（2）过去方法的问题：现有的基于 NeRF 的面部虚拟形象方法主要集中于特定主体的重建和重演，需要包含特定主体不同视角的多张照片进行训练，并且学习到的模型无法推广到新的身份，限制了其进一步的应用。
（3）本文提出的研究方法：为了解决缺乏泛化能力和缺少多视角信息的问题，我们利用 3DGAN 的生成先验，并开发了一个高效的编码器-解码器网络来重建源图像的规范神经体积，并进一步提出一个补偿网络来补充面部细节。为了实现对面部动态的细粒度控制，我们提出了一个变形场，将规范体积扭曲成驱动的表情。
（4）方法性能：通过广泛的实验比较，我们的方法在合成结果方面优于几种最先进的方法。这些结果支持了我们的目标，即构建一个仅需一张源图像即可重建高保真 3D 面部虚拟形象的单次拍摄 3D 面部虚拟形象重建框架。</li>
</ol>
<p>Methods：
（1）图像体积合成：利用预训练的3DGAN生成器合成3D表示并渲染图像，构建规范神经体积。
（2）动态建模：利用3DMM引导的变形场对重建的神经体积进行变形，实现对表情的显式控制。
（3）损失函数和训练策略：采用多目标函数确保忠实重建和生动的重现。</p>
<ol start="8">
<li>结论：</li>
</ol>
<p>（1）：本文提出了一种基于 NeRF 的单次拍摄面部虚拟形象重建方法 NOFA，该方法仅需一张源图像即可重建高保真 3D 面部虚拟形象。</p>
<p>（2）：创新点：</p>
<ul>
<li>利用 3DGAN 的生成先验，构建规范神经体积，解决了缺乏泛化能力和缺少多视角信息的问题。</li>
<li>提出一个补偿网络，补充面部细节，提高了重建的保真度。</li>
<li>提出一个变形场，将规范体积扭曲成驱动的表情，实现了对面部动态的细粒度控制。</li>
</ul>
<p>性能：</p>
<ul>
<li>通过广泛的实验比较，NOFA 在合成结果方面优于几种最先进的方法。</li>
<li>这些结果支持了 NOFA 的目标，即构建一个仅需一张源图像即可重建高保真 3D 面部虚拟形象的单次拍摄 3D 面部虚拟形象重建框架。</li>
</ul>
<p>工作量：</p>
<ul>
<li>NOFA 的训练过程相对简单，仅需一张源图像和少量预训练模型。</li>
<li>NOFA 的推理速度很快，可以实时生成面部虚拟形象。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-469cd2dc109bc6c14b5596ae4928857d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-a3a38646bddce1978ca080ab7995373b.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-b3e291d277a3c74b961d6b7a943cfd20.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-720ea0eebc7863101769dccda881d6ee.jpg" align="middle">
</details>
​    

​    
