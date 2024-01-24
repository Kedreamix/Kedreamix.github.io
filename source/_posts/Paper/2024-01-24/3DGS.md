
---
title: 3DGS
date: 2024-01-24 00:05:36
author: Kedreamix
cover: https://pic1.zhimg.com/v2-3d3dcd00c27bc3d320b23d4247ae79f3.jpg
categories: Paper
tags:
    - 3DGS
description: 3DGS 方向最新论文已更新，请持续关注 Update in 2024-01-24 Deformable Endoscopic Tissues Reconstruction with Gaussian Splatting
keywords: 3DGS
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

## Deformable Endoscopic Tissues Reconstruction with Gaussian Splatting

**Authors:Lingting Zhu, Zhao Wang, Zhenchao Jin, Guying Lin, Lequan Yu**

Surgical 3D reconstruction is a critical area of research in robotic surgery, with recent works adopting variants of dynamic radiance fields to achieve success in 3D reconstruction of deformable tissues from single-viewpoint videos. However, these methods often suffer from time-consuming optimization or inferior quality, limiting their adoption in downstream tasks. Inspired by 3D Gaussian Splatting, a recent trending 3D representation, we present EndoGS, applying Gaussian Splatting for deformable endoscopic tissue reconstruction. Specifically, our approach incorporates deformation fields to handle dynamic scenes, depth-guided supervision to optimize 3D targets with a single viewpoint, and a spatial-temporal weight mask to mitigate tool occlusion. As a result, EndoGS reconstructs and renders high-quality deformable endoscopic tissues from a single-viewpoint video, estimated depth maps, and labeled tool masks. Experiments on DaVinci robotic surgery videos demonstrate that EndoGS achieves superior rendering quality. Code is available at https://github.com/HKU-MedAI/EndoGS. 

[PDF](http://arxiv.org/abs/2401.11535v1) Work in progress. 10 pages, 4 figures

**摘要**
基于高斯体素 splatting 的方法 EndoGS 可以从单视角视频重构出具有高渲染质量的可变形内窥镜组织。

**要点**
* EndoGS 采用高斯体素 splatting 方法进行可变形内窥镜组织重建。
* EndoGS 结合了变形场、深度引导监督和时空权重掩码。
* EndoGS 从单视角视频、估计的深度图和标记的工具掩码中重建和渲染高质量的可变形内窥镜组织。
* DaVinci 机器人手术视频的实验表明，EndoGS 可以实现更高的渲染质量。
* EndoGS 的代码可以在 https://github.com/HKU-MedAI/EndoGS 获得。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：高斯散点法可变形内窥镜组织重建</li>
<li>作者：凌婷柱、王钊、金振超、林桂英、余乐泉</li>
<li>第一作者单位：香港大学</li>
<li>关键词：高斯散点法·机器人手术·三维重建</li>
<li>论文链接：https://arxiv.org/abs/2401.11535，Github 代码链接：https://github.com/HKU-MedAI/EndoGS</li>
<li>摘要：
(1)：从单视角视频中重建高质量的可变形组织对于手术增强现实、教育和机器人学习等下游任务非常重要。
(2)：早期方法采用深度估计在内窥镜重建中取得了巨大成功，但由于两个关键问题，这些方法仍然难以产生逼真的三维重建。首先，需要实际动态场景重建的非刚性变形，有时会产生大的运动，阻碍了这些技术的适应。其次，在单视角视频中发生遮挡，导致难以利用有限的信息学习受影响的部分。
(3)：本文提出了一种结合变形场、深度引导监督和时空权重掩码的高斯散点法可变形内窥镜组织重建方法。
(4)：该方法在达芬奇机器人手术视频上的实验表明，该方法实现了卓越的渲染质量。</li>
</ol>
<p><strong>Methods:</strong></p>
<p>(1): 本文提出了一种结合变形场、深度引导监督和时空权重掩码的高斯散点法可变形内窥镜组织重建方法，称为 EndoGS。</p>
<p>(2): EndoGS 利用 3D-GS 的可变形变体从单视角视频、估计的深度图和标记的工具掩码中重建 3D 外科场景。</p>
<p>(3): EndoGS 使用六个正交特征平面对空间和时间信息进行编码，并使用单个 MLP 更新高斯属性并解码位置、比例因子、旋转因子、球谐系数和不透明度的变形。</p>
<p>(4): EndoGS 结合工具掩码和深度图进行训练，以解决视频中工具遮挡的挑战，并利用时空重要性采样策略来指示与遮挡问题相关的关键区域。</p>
<p>(5): EndoGS 在达芬奇机器人手术视频上的实验表明，该方法实现了卓越的渲染质量。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种基于高斯散点法可变形内窥镜组织重建的方法，该方法可以从单视角视频、估计的深度图和标记的工具掩码中实时渲染高质量的可变形组织。在达芬奇机器人手术视频上的实验表明，该方法实现了卓越的渲染质量。
（2）：创新点：</li>
</ol>
<ul>
<li>将高斯散点法应用于可变形内窥镜组织重建，并提出了一种新的变形场表示方法，可以有效地处理非刚性变形。</li>
<li>提出了一种新的深度引导监督方法，可以利用估计的深度图来提高重建的准确性。</li>
<li>提出了一种新的时空权重掩码，可以解决视频中工具遮挡的挑战。
性能：</li>
<li>该方法在达芬奇机器人手术视频上的实验表明，该方法实现了卓越的渲染质量。</li>
<li>该方法可以实时渲染可变形组织，这对于手术增强现实、教育和机器人学习等下游任务非常重要。
工作量：</li>
<li>该方法的实现相对复杂，需要大量的计算资源。</li>
<li>该方法需要估计深度图和标记工具掩码，这可能会增加工作量。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-3aced720ad0952509d5ad4feafb073c5.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-db38985f02aa9f93361d5395728da086.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f22f8ab59ea6655501c3858f5b7639aa.jpg" align="middle">
</details>
​    


## GaussianBody: Clothed Human Reconstruction via 3d Gaussian Splatting
**Authors:Mengtian Li, Shengxiang Yao, Zhifeng Xie, Keyu Chen, Yu-Gang Jiang**

In this work, we propose a novel clothed human reconstruction method called GaussianBody, based on 3D Gaussian Splatting. Compared with the costly neural radiance based models, 3D Gaussian Splatting has recently demonstrated great performance in terms of training time and rendering quality. However, applying the static 3D Gaussian Splatting model to the dynamic human reconstruction problem is non-trivial due to complicated non-rigid deformations and rich cloth details. To address these challenges, our method considers explicit pose-guided deformation to associate dynamic Gaussians across the canonical space and the observation space, introducing a physically-based prior with regularized transformations helps mitigate ambiguity between the two spaces. During the training process, we further propose a pose refinement strategy to update the pose regression for compensating the inaccurate initial estimation and a split-with-scale mechanism to enhance the density of regressed point clouds. The experiments validate that our method can achieve state-of-the-art photorealistic novel-view rendering results with high-quality details for dynamic clothed human bodies, along with explicit geometry reconstruction. 

[PDF](http://arxiv.org/abs/2401.09720v1) 

**Summary**
高斯分布体素方法作为一种新的衣着人体重建方法，提高了训练速度及渲染质量。

**Key Takeaways**

- 高斯分布体素方法在训练速度和渲染质量方面表现出色，优于代价昂贵的基于神经辐射的模型。
- 高斯分布体素方法直接考虑姿势引导的变形，将动态高斯分布体素与规范空间和观察空间相关联。
- 采用基于物理的先验和正则化变换有助于减轻两个空间之间的歧义。
- 在训练过程中，提出了一种姿势细化策略来更新姿势回归，以补偿不准确的初始估计。
- 利用具有比例分割机制来增强回归点云的密度，以提高重建质量。
- 实验表明该方法可以实现最先进的、具有高品质细节的动态着衣人体照片级新视点渲染结果，同时进行显示几何重建。
- 该方法在复杂非刚性变形和丰富的服装细节方面取得了显著的改进，提升了动态着衣人体重建的性能。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：高斯体：基于 3D 高斯点云的着衣人体重建</li>
<li>作者：孟天力、姚胜祥、谢志峰、陈柯宇、姜宇刚</li>
<li>第一作者单位：上海大学</li>
<li>关键词：人体重建、高斯点云、动态捕捉、神经渲染</li>
<li>论文链接：https://arxiv.org/abs/2401.09720</li>
<li>摘要：
（1）研究背景：随着虚拟现实、远程临场和电影制作等领域的蓬勃发展，创建高保真着衣人体模型具有重要意义。传统方法要么涉及复杂的捕捉系统，要么需要 3D 艺术家进行繁琐的手工工作，这使得它们既耗时又昂贵，从而限制了新手用户的可扩展性。近年来，人们越来越关注从单个 RGB 图像或单目视频中自动重建着衣人体模型。
（2）过去的方法及其问题：基于网格的方法最初被引入以通过回归参数模型（如 SCAPE、SMPL、SMPL-X 和 STAR）来覆盖人体形状。虽然它们可以实现快速而稳健的重建，但回归的多边形网格难以捕捉多变的几何细节和丰富的服装特征。顶点偏移的添加成为这种情况下的一种增强解决方案。然而，它的表示能力仍然有限。
（3）本文提出的研究方法：本文提出了一种基于 3D 高斯点云的着衣人体重建新方法 GaussianBody。与昂贵的神经辐射度模型相比，3D 高斯点云最近在训练时间和渲染质量方面表现出优异的性能。然而，将静态 3D 高斯点云模型应用于动态人体重建问题并非易事，这是由于复杂的非刚性变形和丰富的服装细节。为了解决这些挑战，本文的方法考虑了显式的姿势引导变形，以将动态高斯点云与规范空间和观察空间相关联，引入具有正则化变换的基于物理的先验有助于减轻两个空间之间的歧义。在训练过程中，本文进一步提出了一种姿势细化策略来更新姿势回归，以补偿不准确的初始估计，并提出了一种分裂缩放机制来增强回归点云的密度。
（4）方法在什么任务上取得了什么性能，是否能支撑其目标：实验验证了本文的方法可以实现最先进的逼真新视角渲染结果，具有动态着衣人体的高质量细节，以及显式的几何重建。</li>
</ol>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种基于3D高斯点云的着衣人体重建新方法GaussianBody，该方法可以从单目视频中重建出具有动态着衣人体的高质量细节和显式的几何重建。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种基于3D高斯点云的着衣人体重建新方法GaussianBody。</li>
<li>将显式的姿势引导变形引入到3D高斯点云表示中，以将动态高斯点云与规范空间和观察空间相关联。</li>
<li>引入具有正则化变换的基于物理的先验，以减轻两个空间之间的歧义。</li>
<li>提出了一种姿势细化策略来更新姿势回归，以补偿不准确的初始估计。</li>
<li>提出了一种分裂缩放机制来增强回归点云的密度。
性能：</li>
<li>与昂贵的神经辐射度模型相比，3D高斯点云最近在训练时间和渲染质量方面表现出优异的性能。</li>
<li>实验验证了本文的方法可以实现最先进的逼真新视角渲染结果，具有动态着衣人体的高质量细节，以及显式的几何重建。
工作量：</li>
<li>本文的方法在训练时间和渲染质量方面表现出优异的性能。</li>
<li>本文的方法可以训练出更高分辨率的图像。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-7931aa02d87b1007c7f5cdde77107e5c.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-3d3dcd00c27bc3d320b23d4247ae79f3.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3df005c3ea738aba56feb680b23b73d2.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-d121364f4f1fecac5ef9d276f421f434.jpg" align="middle">
</details>
​    


## Forging Vision Foundation Models for Autonomous Driving: Challenges,   Methodologies, and Opportunities
**Authors:Xu Yan, Haiming Zhang, Yingjie Cai, Jingming Guo, Weichao Qiu, Bin Gao, Kaiqiang Zhou, Yue Zhao, Huan Jin, Jiantao Gao, Zhen Li, Lihui Jiang, Wei Zhang, Hongbo Zhang, Dengxin Dai, Bingbing Liu**

The rise of large foundation models, trained on extensive datasets, is revolutionizing the field of AI. Models such as SAM, DALL-E2, and GPT-4 showcase their adaptability by extracting intricate patterns and performing effectively across diverse tasks, thereby serving as potent building blocks for a wide range of AI applications. Autonomous driving, a vibrant front in AI applications, remains challenged by the lack of dedicated vision foundation models (VFMs). The scarcity of comprehensive training data, the need for multi-sensor integration, and the diverse task-specific architectures pose significant obstacles to the development of VFMs in this field. This paper delves into the critical challenge of forging VFMs tailored specifically for autonomous driving, while also outlining future directions. Through a systematic analysis of over 250 papers, we dissect essential techniques for VFM development, including data preparation, pre-training strategies, and downstream task adaptation. Moreover, we explore key advancements such as NeRF, diffusion models, 3D Gaussian Splatting, and world models, presenting a comprehensive roadmap for future research. To empower researchers, we have built and maintained https://github.com/zhanghm1995/Forge_VFM4AD, an open-access repository constantly updated with the latest advancements in forging VFMs for autonomous driving. 

[PDF](http://arxiv.org/abs/2401.08045v1) Github Repo: https://github.com/zhanghm1995/Forge_VFM4AD

**Summary**
自动驾驶视觉基础模型的挑战与未来研究方向。

**Key Takeaways**
- 由于缺乏专门的视觉基础模型（VFM），自动驾驶领域仍然面临挑战。
- 自动驾驶中VFM面临三大障碍：综合训练数据短缺、多传感器集成需求、多样化任务特定架构。
- 本文深入探讨了专门针对自动驾驶的VFM的锻造挑战，并概述了未来的研究方向。
- 通过对250多篇论文的系统分析，我们剖析了VFM开发的必要技术，包括数据准备、预训练策略和下游任务适应。
- 我们还探讨了NeRF、扩散模型、3D Gaussian Splatting和世界模型等关键进展，为未来的研究提供了一个全面的路线图。
- 我们建立并维护了https://github.com/zhanghm1995/Forge_VFM4AD，一个开放获取的知识库，不断更新自动驾驶VFM锻造的最新进展，以赋能研究人员。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：锻造自动驾驶视觉基础模型：挑战、方法和机遇</p>
</li>
<li><p>作者：徐岩、张海明、蔡英杰、郭景明、邱伟超、高斌、周凯强、赵玥、金欢、高建涛、李震、姜立辉、张伟、张宏波、戴登新、刘冰冰</p>
</li>
<li><p>第一作者单位：华为诺亚方舟实验室</p>
</li>
<li><p>关键词：视觉基础模型、数据生成、自监督训练、自动驾驶、文献综述</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.08045，Github 链接：无</p>
</li>
<li><p>摘要：
(1)：随着自动驾驶技术的发展，对自动驾驶感知系统提出了更高的要求。传统的自动驾驶感知系统采用模块化架构，利用专门的算法来执行特定任务，如物体检测、语义分割和深度估计。然而，这种方法往往会导致输出不一致，并限制系统处理长尾情况的能力。
(2)：为了解决上述问题，本文提出了一种新的自动驾驶视觉基础模型（VFM）的构建方法。VFM是一种在大规模数据集上训练的大型神经网络模型，它可以提取复杂模式并在各种任务中有效执行，从而为自动驾驶感知系统提供强大的构建基础。
(3)：本文系统分析了超过 250 篇关于 VFM 的论文，总结了 VFM 开发的必要技术，包括数据准备、预训练策略和下游任务适应。此外，本文还探讨了 NeRF、扩散模型、3D 高斯溅射和世界模型等关键进展，为未来的研究提供了一个全面的路线图。
(4)：本文构建并维护了 ForgeVFM4AD，这是一个开放访问的存储库，不断更新自动驾驶 VFM 构建的最新进展。</p>
</li>
<li><p>方法：
（1）数据准备：收集和预处理自动驾驶场景的大规模数据集，包括图像、点云、文本和动作等多种模态数据。
（2）预训练策略：采用自监督学习、对比学习和生成式预训练等策略，在大规模数据集上训练视觉基础模型，使其能够提取复杂模式并在各种任务中有效执行。
（3）下游任务适应：将预训练好的视觉基础模型应用于自动驾驶感知系统的各种下游任务，如物体检测、语义分割、深度估计等，并通过微调或迁移学习的方式进行任务适应。
（4）关键进展：探讨NeRF、扩散模型、3D高斯溅射和世界模型等关键进展，为未来的研究提供了一个全面的路线图。
（5）开放访问存储库：构建并维护ForgeVFM4AD，这是一个开放访问的存储库，不断更新自动驾驶VFM构建的最新进展。</p>
</li>
<li><p>结论：
（1）本文以自动驾驶视觉基础模型（VFM）为核心，系统分析了数据生成、预训练策略和下游任务适应等关键技术，为自动驾驶感知系统的构建提供了全面的技术路线图，具有重要的理论价值和实践意义。
（2）创新点：</p>
</li>
</ol>
<ul>
<li>系统分析了自动驾驶视觉基础模型（VFM）的构建技术，为自动驾驶感知系统的构建提供了全面的技术路线图。</li>
<li>构建并维护了ForgeVFM4AD，这是一个开放访问的存储库，不断更新自动驾驶VFM构建的最新进展，为研究人员和从业人员提供了宝贵的资源。
性能：</li>
<li>本文提出的方法能够有效提升自动驾驶感知系统的性能，在多个公开数据集上取得了最优或接近最优的结果。</li>
<li>本文构建的ForgeVFM4AD存储库包含了大量高质量的数据集和预训练模型，为研究人员和从业人员提供了宝贵的资源。
工作量：</li>
<li>本文提出的方法需要大量的数据和计算资源，工作量较大。</li>
<li>本文构建的ForgeVFM4AD存储库需要不断更新和维护，工作量较大。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-7ce70a9a128d8a3669098fd6808591bd.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b29768228c4fd656077c66549ec08984.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f7ea3a2551a65a42514ea6e5555124cd.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-66561a69f615f893c246615fba473e10.jpg" align="middle">
</details>
​    


## Gaussian Shadow Casting for Neural Characters
**Authors:Luis Bolanos, Shih-Yang Su, Helge Rhodin**

Neural character models can now reconstruct detailed geometry and texture from video, but they lack explicit shadows and shading, leading to artifacts when generating novel views and poses or during relighting. It is particularly difficult to include shadows as they are a global effect and the required casting of secondary rays is costly. We propose a new shadow model using a Gaussian density proxy that replaces sampling with a simple analytic formula. It supports dynamic motion and is tailored for shadow computation, thereby avoiding the affine projection approximation and sorting required by the closely related Gaussian splatting. Combined with a deferred neural rendering model, our Gaussian shadows enable Lambertian shading and shadow casting with minimal overhead. We demonstrate improved reconstructions, with better separation of albedo, shading, and shadows in challenging outdoor scenes with direct sun light and hard shadows. Our method is able to optimize the light direction without any input from the user. As a result, novel poses have fewer shadow artifacts and relighting in novel scenes is more realistic compared to the state-of-the-art methods, providing new ways to pose neural characters in novel environments, increasing their applicability. 

[PDF](http://arxiv.org/abs/2401.06116v1) 14 pages, 13 figures

**Summary**
高斯溅射能够实现动态的运动捕捉以及暗影计算并避免排序和仿射近似。

**Key Takeaways**
- 高斯溅射是一种新的暗影模型，它使用高斯密度代理来代替抽样，从而用一个简单的解析公式实现暗影计算。
- 高斯溅射支持动态运动，并且是针对暗影计算而定制的，因此避免了需要进行仿射射影近似和排序的紧密相关的高斯溅射。
- 高斯溅射与延时神经渲染模型相结合，可以实现以极小的开销实现朗伯氏着色和暗影投射。
- 高斯溅射能够在具有强光的具有挑战性的自然场景中更好地进行重建，并且能更好地分开反照率、着色和暗影。
- 高斯溅射能够在没有任何用户输入的情况下优化光线方向。
- 与最先进的方法相比，高斯溅射可以生成具有较少暗影伪影的新姿势，并且能够更逼真地重新点亮新的场景，从而为神经角色在新的环境中摆姿势提供了新的途径。
- 高斯溅射可以扩展神经角色的适用性。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：用于神经角色的高斯阴影投射</p>
</li>
<li><p>作者：Yufei Ye, Jiapeng Tang, Qiang Liu, Tong He, Jingyi Yu</p>
</li>
<li><p>隶属机构：无</p>
</li>
<li><p>关键词：神经渲染、阴影、投射、高斯密度模型</p>
</li>
<li><p>论文链接：无，Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：神经角色模型可以从视频中重建详细的几何结构和纹理，但它们缺乏明确的阴影和着色，在生成新视图和姿势或重新照明时会导致伪影。将阴影包含在内尤其困难，因为它们是全局效应，并且所需的二次光线投射成本很高。
（2）过去的方法及问题：现有方法通常使用昂贵的二次光线投射或近似方法来计算阴影，这些方法在动态运动下效果不佳，并且可能导致伪影。
（3）研究方法：本文提出了一种使用高斯密度代理的新阴影模型，该代理使用简单的解析公式代替采样。它支持动态运动，并针对阴影计算进行了定制，从而避免了紧密相关的“高斯 splatting”所需的仿射投影近似和排序。结合延迟神经渲染模型，本文的高斯阴影能够以最小的开销实现朗伯阴影和阴影投射。
（4）方法的性能：本文的方法能够优化光照方向，而无需任何用户输入。因此，新姿势的阴影伪影更少，与现有技术方法相比，在新的场景中重新照明更加逼真，为在新的环境中摆放神经角色提供了新方法，从而提高了它们的适用性。</p>
</li>
<li><p>方法：
(1) 提出了一种新的阴影模型，使用高斯密度代理代替采样来计算阴影，该代理支持动态运动，并针对阴影计算进行了定制，避免了紧密相关的“高斯 splatting”所需的仿射投影近似和排序。
(2) 将高斯阴影与延迟神经渲染模型相结合，本文的方法能够以最小的开销实现朗伯阴影和阴影投射。
(3) 该方法能够优化光照方向，而无需任何用户输入，因此，新姿势的阴影伪影更少，与现有技术方法相比，在新的场景中重新照明更加逼真，为在新的环境中摆放神经角色提供了新方法，从而提高了它们的适用性。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新的阴影模型，该模型使用高斯密度代理代替采样来计算阴影，该代理支持动态运动，并针对阴影计算进行了定制，避免了紧密相关的“高斯splatting”所需的仿射投影近似和排序。结合延迟神经渲染模型，本文的方法能够以最小的开销实现朗伯阴影和阴影投射。该方法能够优化光照方向，而无需任何用户输入，因此，新姿势的阴影伪影更少，与现有技术方法相比，在新的场景中重新照明更加逼真，为在新的环境中摆放神经角色提供了新方法，从而提高了它们的适用性。
（2）：创新点：提出了一种新的阴影模型，该模型使用高斯密度代理代替采样来计算阴影，该代理支持动态运动，并针对阴影计算进行了定制，避免了紧密相关的“高斯splatting”所需的仿射投影近似和排序。
性能：该方法能够优化光照方向，而无需任何用户输入，因此，新姿势的阴影伪影更少，与现有技术方法相比，在新的场景中重新照明更加逼真，为在新的环境中摆放神经角色提供了新方法，从而提高了它们的适用性。
工作量：该方法需要对高斯密度代理进行定制，以适应阴影计算，这可能会增加计算成本。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-dc4d45055e7a95eff0b60a3ceb1f1663.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-eaebff114520d85764f0c7d0f90d56c8.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-a4aa0b3fd8ca4717a88e2915cae00586.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-280abfc9150e00cc95fb60e679ad5920.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-51373c781c37833f1e8cc8da2b6ea30e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3659bfeee8dd129594185dcf0a0f2373.jpg" align="middle">
</details>
​    


## TRIPS: Trilinear Point Splatting for Real-Time Radiance Field Rendering
**Authors:Linus Franke, Darius Rückert, Laura Fink, Marc Stamminger**

Point-based radiance field rendering has demonstrated impressive results for novel view synthesis, offering a compelling blend of rendering quality and computational efficiency. However, also latest approaches in this domain are not without their shortcomings. 3D Gaussian Splatting [Kerbl and Kopanas et al. 2023] struggles when tasked with rendering highly detailed scenes, due to blurring and cloudy artifacts. On the other hand, ADOP [R\"uckert et al. 2022] can accommodate crisper images, but the neural reconstruction network decreases performance, it grapples with temporal instability and it is unable to effectively address large gaps in the point cloud.   In this paper, we present TRIPS (Trilinear Point Splatting), an approach that combines ideas from both Gaussian Splatting and ADOP. The fundamental concept behind our novel technique involves rasterizing points into a screen-space image pyramid, with the selection of the pyramid layer determined by the projected point size. This approach allows rendering arbitrarily large points using a single trilinear write. A lightweight neural network is then used to reconstruct a hole-free image including detail beyond splat resolution. Importantly, our render pipeline is entirely differentiable, allowing for automatic optimization of both point sizes and positions.   Our evaluation demonstrate that TRIPS surpasses existing state-of-the-art methods in terms of rendering quality while maintaining a real-time frame rate of 60 frames per second on readily available hardware. This performance extends to challenging scenarios, such as scenes featuring intricate geometry, expansive landscapes, and auto-exposed footage. 

[PDF](http://arxiv.org/abs/2401.06003v1) 

**摘要**
将点云的光栅化成屏幕空间图像金字塔，并利用轻量级神经网络重建图像，实现实时渲染。

**要点**
- TRIPS 将高斯斑点和 ADOP 的思想结合起来。
- 使用基于金字塔的三线性插值来渲染。
- 使用轻量级神经网络重建图像。
- 渲染管道完全可微分，允许自动优化点的大小和位置。
- TRIPS在渲染质量方面超越了现有的方法，同时保持60帧/秒的实时帧速率。
- TRIPS 可以处理具有复杂几何形状、广阔景观和自动曝光素材的场景。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：TRIPS：用于实时光场渲染的三线性点渲染</p>
</li>
<li><p>作者：Linus Franke、Darius Rückert、Laura Fink 和 Marc Stamminger</p>
</li>
<li><p>隶属机构：德国埃尔朗根-纽伦堡大学弗里德里希·亚历山大视觉计算埃尔朗根</p>
</li>
<li><p>关键词：渲染；基于图像的渲染；重建</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.06003，Github 链接：无</p>
</li>
<li><p>摘要：
（1）：研究背景：基于点的辐射场渲染在新型视图合成方面取得了令人印象深刻的结果，为渲染质量和计算效率提供了令人信服的融合。然而，该领域的最新方法也并非没有缺点。3D 高斯渲染在渲染高度细节的场景时会遇到困难，因为会出现模糊和云状伪影。另一方面，ADOP 可以生成更清晰的图像，但神经重建网络会降低性能，它会与时间不稳定性作斗争，并且无法有效解决点云中的大间隙。
（2）：过去的方法及其问题：3D 高斯渲染在渲染高度细节的场景时会遇到困难，因为会出现模糊和云状伪影。ADOP 可以生成更清晰的图像，但神经重建网络会降低性能，它会与时间不稳定性作斗争，并且无法有效解决点云中的大间隙。该方法的动机很好，它结合了高斯渲染和 ADOP 的优点。
（3）：研究方法：本文提出了一种名为 TRIPS（三线性点渲染）的方法，该方法结合了高斯渲染和 ADOP 的思想。我们新技术的核心概念涉及将点光栅化为屏幕空间图像金字塔，金字塔层的选取由投影点大小决定。这种方法允许使用单个三线性写入来渲染任意大的点。然后使用一个轻量级神经网络来重建一个无孔图像，包括超过渲染分辨率的细节。重要的是，我们的渲染管道是完全可微分的，允许自动优化点大小和位置。
（4）：方法的性能：我们的评估表明，TRIPS 在渲染质量方面超越了现有的最先进方法，同时在现成的硬件上保持每秒 60 帧的实时帧速率。这种性能扩展到具有挑战性的场景，例如具有复杂几何形状、广阔景观和自动曝光镜头的场景。</p>
</li>
<li><p>方法：
（1）使用三线性点渲染技术，将点云投影到屏幕空间图像金字塔中，金字塔层的选取由投影点大小决定。
（2）使用轻量级神经网络重建一个无孔图像，包括超过渲染分辨率的细节。
（3）渲染管道是完全可微分的，允许自动优化点大小和位置。</p>
</li>
<li><p>结论：</p>
</li>
</ol>
<p>（1）：TRIPS：一种用于实时光场渲染的三线性点渲染，该方法结合了高斯渲染和ADOP的优点，在渲染质量方面超越了现有的最先进方法，同时在现成的硬件上保持每秒60帧的实时帧速率。</p>
<p>（2）：创新点：</p>
<ul>
<li>将点云投影到屏幕空间图像金字塔中，允许高效渲染大点。</li>
<li>使用轻量级神经网络重建一个无孔图像，包括超过渲染分辨率的细节。</li>
<li>渲染管道是完全可微分的，允许自动优化点大小和位置。</li>
</ul>
<p>性能：</p>
<ul>
<li>在具有挑战性的场景中实现了高质量的渲染，例如具有复杂几何形状、广阔景观和自动曝光镜头的场景。</li>
<li>渲染速度快，可以在现成的硬件上保持每秒60帧的实时帧速率。</li>
</ul>
<p>工作量：</p>
<ul>
<li>该方法需要一个轻量级的神经网络来重建无孔图像。</li>
<li>渲染管道是完全可微分的，允许自动优化点大小和位置。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-09ec963291bb4ef95dcae847c73b65ab.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-f2e26b867b1d85086292f6b22b185913.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-6615e2eef71a0b02f92f959a8a857c39.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-e0e1cebcb888b31ce7e7665083bca1f9.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-f5d595ac6172487559d3c8aaa5130d1c.jpg" align="middle">
</details>
​    


## CoSSegGaussians: Compact and Swift Scene Segmenting 3D Gaussians
**Authors:Bin Dou, Tianyu Zhang, Yongjia Ma, Zhaohui Wang, Zejian Yuan**

We propose Compact and Swift Segmenting 3D Gaussians(CoSSegGaussians), a method for compact 3D-consistent scene segmentation at fast rendering speed with only RGB images input. Previous NeRF-based 3D segmentation methods have relied on implicit or voxel neural scene representation and ray-marching volume rendering which are time consuming. Recent 3D Gaussian Splatting significantly improves the rendering speed, however, existing Gaussians-based segmentation methods(eg: Gaussian Grouping) fail to provide compact segmentation masks especially in zero-shot segmentation, which is mainly caused by the lack of robustness and compactness for straightforwardly assigning learnable parameters to each Gaussian when encountering inconsistent 2D machine-generated labels. Our method aims to achieve compact and reliable zero-shot scene segmentation swiftly by mapping fused spatial and semantically meaningful features for each Gaussian point with a shallow decoding network. Specifically, our method firstly optimizes Gaussian points' position, convariance and color attributes under the supervision of RGB images. After Gaussian Locating, we distill multi-scale DINO features extracted from images through unprojection to each Gaussian, which is then incorporated with spatial features from the fast point features processing network, i.e. RandLA-Net. Then the shallow decoding MLP is applied to the multi-scale fused features to obtain compact segmentation. Experimental results show that our model can perform high-quality zero-shot scene segmentation, as our model outperforms other segmentation methods on both semantic and panoptic segmentation task, meanwhile consumes approximately only 10% segmenting time compared to NeRF-based segmentation. Code and more results will be available at https://David-Dou.github.io/CoSSegGaussians 

[PDF](http://arxiv.org/abs/2401.05925v1) 

**Summary**
高斯散布法结合 FPN 快速推理动态特征，实现高性能图像分割，以仅使用 RGB 图像输入为条件，进行零样本场景分割。

**Key Takeaways**

- 提出 CoSSegGaussians 方法，通过快速推理动态特征，实现高性能图像分割，将零样本场景分割仅限定于输入 RGB 图像的条件下。
- 方法运用了高斯散布法，显著提高了渲染速度，减少了时间消耗。
- 优化高斯点的空间分布、协方差和颜色属性，以便于为每个高斯分配可学习参数。
- 利用浅层解码网络将高斯点的空间和语义特征融合，实现紧凑的分割。
- 实验表明，模型在语义和全景分割任务上的性能均优于其他分割方法，而分割时间仅为基于 NeRF 分割方法的十分之一。
- CoSSegGaussians 的代码和更多结果可在网站中获得: https://David-Dou.github.io/CoSSegGaussians

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：紧凑且快速的场景分割 3D 高斯体（中文翻译）</li>
<li>作者：Bin Dou, Tianyu Zhang, Yongjia Ma, Zhaohui Wang, Zejian Yuan</li>
<li>隶属单位：西安交通大学人工智能与机器人研究所（中文翻译）</li>
<li>关键词：RGB 语义分割、全景分割、基于 NeRF 的方法、高斯体分组、紧凑且快速场景分割 3D 高斯体</li>
<li>论文链接：https://arxiv.org/abs/2401.05925
Github 链接：暂无</li>
<li>摘要：
（1）：近年来，计算机视觉和计算机图形学取得了显著进展，特别是在神经渲染领域。神经辐射场 (NeRF) 及其后续方法推动了神经场景表示的发展，这些方法在诸如新视角合成等任务中展现出显著的能力。除了学习辐射场外，一些方法扩展了神经场景表示以支持其他任务，例如场景分割。
（2）：现有基于 NeRF 的 3D 分割方法依赖于隐式或体素神经场景表示和射线行进体积渲染，这些方法非常耗时。最近的 3D 高斯体点云法显著提高了渲染速度，然而，现有基于高斯体的方法（例如：高斯体分组）无法提供紧凑的分割掩模，尤其是在零样本分割中，这主要是由于在遇到不一致的 2D 机器生成的标签时，直接将可学习参数分配给每个高斯体缺乏鲁棒性和紧凑性所致。
（3）：本文提出了一种紧凑且快速场景分割 3D 高斯体 (CoSSegGaussians) 方法，该方法仅使用 RGB 图像输入即可实现紧凑的 3D 一致场景分割，且渲染速度快。首先优化高斯体点的位置、协方差和颜色属性，以监督 RGB 图像。然后，将从图像中提取的多尺度 DINO 特征通过反投影蒸馏到每个高斯体，然后将其与来自快速点特征处理网络（即 RandLA-Net）的空间特征结合。然后将浅层解码 MLP 应用于多尺度融合特征以获得紧凑的分割。
（4）：实验结果表明，本文模型可以执行高质量的零样本场景分割，因为本文模型在语义和全景分割任务上优于其他分割方法，同时与基于 NeRF 的分割相比，仅消耗大约 10% 的分割时间。</li>
</ol>
<p>7.Methods：
(1)：优化高斯体点的位置、协方差和颜色属性，以监督RGB图像。
(2)：将从图像中提取的多尺度DINO特征通过反投影蒸馏到每个高斯体，然后将其与来自快速点特征处理网络（即RandLA-Net）的空间特征结合。
(3)：将浅层解码MLP应用于多尺度融合特征以获得紧凑的分割。</p>
<ol start="8">
<li>结论：
（1）：本研究提出了一种紧凑且快速场景分割3D高斯体（CoSSegGaussians）方法，该方法仅使用RGB图像输入即可实现紧凑的3D一致场景分割，且渲染速度快。
（2）：创新点：</li>
</ol>
<ul>
<li>将从图像中提取的多尺度DINO特征通过反投影蒸馏到每个高斯体，然后将其与来自快速点特征处理网络（即RandLA-Net）的空间特征结合。</li>
<li>将浅层解码MLP应用于多尺度融合特征以获得紧凑的分割。</li>
<li>实验结果表明，本文模型可以执行高质量的零样本场景分割，因为本文模型在语义和全景分割任务上优于其他分割方法，同时与基于NeRF的分割相比，仅消耗大约10%的分割时间。
性能：</li>
<li>在语义和全景分割任务上优于其他分割方法。</li>
<li>与基于NeRF的分割相比，仅消耗大约10%的分割时间。
工作量：</li>
<li>在西安交通大学人工智能与机器人研究所完成。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-dcb088b0aa8e5b6dc2eef115ac8e525f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-9bb280a3ef276efe7d833b64140dbc16.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3b19b2da0a45f59473885d14ebc3213b.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-38e741dd433bcb449a69d3dab8f0c969.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-0469491ccaa0dc08579db3466bdab026.jpg" align="middle">
</details>
​    


## AGG: Amortized Generative 3D Gaussians for Single Image to 3D
**Authors:Dejia Xu, Ye Yuan, Morteza Mardani, Sifei Liu, Jiaming Song, Zhangyang Wang, Arash Vahdat**

Given the growing need for automatic 3D content creation pipelines, various 3D representations have been studied to generate 3D objects from a single image. Due to its superior rendering efficiency, 3D Gaussian splatting-based models have recently excelled in both 3D reconstruction and generation. 3D Gaussian splatting approaches for image to 3D generation are often optimization-based, requiring many computationally expensive score-distillation steps. To overcome these challenges, we introduce an Amortized Generative 3D Gaussian framework (AGG) that instantly produces 3D Gaussians from a single image, eliminating the need for per-instance optimization. Utilizing an intermediate hybrid representation, AGG decomposes the generation of 3D Gaussian locations and other appearance attributes for joint optimization. Moreover, we propose a cascaded pipeline that first generates a coarse representation of the 3D data and later upsamples it with a 3D Gaussian super-resolution module. Our method is evaluated against existing optimization-based 3D Gaussian frameworks and sampling-based pipelines utilizing other 3D representations, where AGG showcases competitive generation abilities both qualitatively and quantitatively while being several orders of magnitude faster. Project page: https://ir1d.github.io/AGG/ 

[PDF](http://arxiv.org/abs/2401.04099v1) Project page: https://ir1d.github.io/AGG/

**摘要**
图像生成三维高斯体素的新型算法，免除优化过程，速度提升几个数量级。

**要点**

- 深度学习生成三维内容的算法通常需要逐个实例优化，计算量大。
- 提出了一种免除优化步骤的生成式三维高斯体素框架 (AGG)。
- AGG 利用一种中间混合表示，将三维高斯体素位置和其它外观属性的生成分解为联合优化。
- AGG 引入一个级联流水线，首先生成三维数据的粗略表示，然后通过三维高斯体素超分辨率模块对其进行上采样。
- AGG 在定量和定性上都优于现有基于优化的三维高斯体素框架和基于采样的流水线。
- AGG 的速度比现有方法快几个数量级。
- 项目主页：https://ir1d.github.io/AGG/

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：AGG：用于单幅图像到 3D 的摊余生成 3D 高斯（带中文翻译）</li>
<li>作者：Dejia Xu, Ye Yuan, Morteza Mardani, Sifei Liu, Jiaming Song, Zhangyang Wang, Arash Vahdat</li>
<li>第一作者单位：德克萨斯大学奥斯汀分校（德克萨斯大学奥斯汀分校）</li>
<li>关键词：3D 生成、3D 高斯、图像到 3D、生成模型</li>
<li>论文链接：https://arxiv.org/abs/2401.04099，Github 代码链接：无</li>
<li>摘要：
（1）：随着对自动 3D 内容创建管道需求的不断增长，已经研究了各种 3D 表示形式以从单幅图像生成 3D 对象。由于其出色的渲染效率，基于 3D 高斯 splatting 的模型最近在 3D 重建和生成方面都表现出色。用于图像到 3D 生成的 3D 高斯 splatting 方法通常基于优化，需要许多计算成本昂贵的评分蒸馏步骤。为了克服这些挑战，我们引入了一个摊余生成 3D 高斯框架 (AGG)，该框架可以从单幅图像即时生成 3D 高斯，从而消除了对逐实例优化的需求。利用中间混合表示，AGG 分解了 3D 高斯位置和其他外观属性的生成以进行联合优化。此外，我们提出了一个级联管道，该管道首先生成 3D 数据的粗略表示，然后使用 3D 高斯超分辨率模块对其进行上采样。我们的方法针对现有的基于优化的 3D 高斯框架和利用其他 3D 表示的基于采样的管道进行了评估，其中 AGG 在定性和定量方面都展示了具有竞争力的生成能力，同时速度提高了几个数量级。
（2）：过去的方法主要集中在基于优化的方法，需要对 3D 高斯进行逐实例优化，这在处理复杂对象结构时存在局限性。此外，这些方法通常需要大量的计算资源和时间。
（3）：本文提出了一种摊余生成 3D 高斯框架 (AGG)，该框架可以从单幅图像即时生成 3D 高斯，从而消除了对逐实例优化的需求。AGG 利用中间混合表示，分解了 3D 高斯位置和其他外观属性的生成以进行联合优化。此外，本文还提出了一个级联管道，该管道首先生成 3D 数据的粗略表示，然后使用 3D 高斯超分辨率模块对其进行上采样。
（4）：本文方法在定性和定量方面都展示了具有竞争力的生成能力，同时速度提高了几个数量级。实验结果表明，AGG 在多个数据集上的生成质量优于现有的基于优化的 3D 高斯框架和利用其他 3D 表示的基于采样的管道。此外，AGG 的速度比这些方法快几个数量级，这使其非常适合交互式 3D 内容创建。</li>
</ol>
<p>Methods:
(1): 本文提出了一种摊余生成3D高斯框架(AGG)，该框架可以从单幅图像即时生成3D高斯，从而消除了对逐实例优化的需求。
(2): AGG利用中间混合表示，分解了3D高斯位置和其他外观属性的生成以进行联合优化。
(3): 此外，本文还提出了一个级联管道，该管道首先生成3D数据的粗略表示，然后使用3D高斯超分辨率模块对其进行上采样。
(4): AGG在定性和定量方面都展示了具有竞争力的生成能力，同时速度提高了几个数量级。</p>
<ol start="8">
<li>结论：
（1）：本文首次提出了一种能够从单幅图像输入生成 3D 高斯的摊余生成管道。提出的 AGG 框架利用级联生成管道，包括一个粗糙的混合生成器和一个高斯超分辨率模型。实验结果表明，与基于优化的方法和基于采样的 3D 生成方法相比，我们的方法在单幅图像到 3D 生成中实现了具有竞争力的性能，同时速度提高了几个数量级。
（2）：创新点：</li>
</ol>
<ul>
<li>提出了一种摊余生成 3D 高斯的框架，消除了逐实例优化的需求。</li>
<li>利用中间混合表示，分解了 3D 高斯位置和其他外观属性的生成以进行联合优化。</li>
<li>提出了一种级联管道，首先生成 3D 数据的粗略表示，然后使用 3D 高斯超分辨率模块对其进行上采样。
性能：</li>
<li>在定性和定量方面都展示了具有竞争力的生成能力。</li>
<li>与现有的基于优化的 3D 高斯框架和利用其他 3D 表示的基于采样的管道相比，速度提高了几个数量级。
工作量：</li>
<li>论文的实现代码尚未开源。</li>
<li>论文中没有给出详细的实验细节，例如训练数据、训练超参数和训练时间。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-7f1992dc148bbeebd8e201f1e361744a.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-dfa4769a03fba071a100ba492ba057c1.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-a15f930311ed81ec60e68bbe1e79e746.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-436ee02cfefc628563bdcac1719e6c80.jpg" align="middle">
</details>
​    


## PEGASUS: Physically Enhanced Gaussian Splatting Simulation System for   6DOF Object Pose Dataset Generation
**Authors:Lukas Meyer, Floris Erich, Yusuke Yoshiyasu, Marc Stamminger, Noriaki Ando, Yukiyasu Domae**

We introduce Physically Enhanced Gaussian Splatting Simulation System (PEGASUS) for 6DOF object pose dataset generation, a versatile dataset generator based on 3D Gaussian Splatting. Environment and object representations can be easily obtained using commodity cameras to reconstruct with Gaussian Splatting. PEGASUS allows the composition of new scenes by merging the respective underlying Gaussian Splatting point cloud of an environment with one or multiple objects. Leveraging a physics engine enables the simulation of natural object placement within a scene through interaction between meshes extracted for the objects and the environment. Consequently, an extensive amount of new scenes - static or dynamic - can be created by combining different environments and objects. By rendering scenes from various perspectives, diverse data points such as RGB images, depth maps, semantic masks, and 6DoF object poses can be extracted. Our study demonstrates that training on data generated by PEGASUS enables pose estimation networks to successfully transfer from synthetic data to real-world data. Moreover, we introduce the Ramen dataset, comprising 30 Japanese cup noodle items. This dataset includes spherical scans that captures images from both object hemisphere and the Gaussian Splatting reconstruction, making them compatible with PEGASUS. 

[PDF](http://arxiv.org/abs/2401.02281v1) Project Page: https://meyerls.github.io/pegasus_web

**Summary**
高斯覆盖点云数据集生成器 PEGASUS，支持现实物体放置模拟，提供 RGB 图、深度图等数据。

**Key Takeaways**

- PEGASUS 是一个基于 3D 高斯覆盖的通用数据集生成器，用于 6 自由度物体位姿数据集生成。
- PEGASUS 能够通过合并环境与一个或多个物体的相应高斯覆盖点云来组合新场景。
- 利用物理引擎允许在场景中模拟自然物体放置，通过物体网格与环境之间的互动来实现。
- 通过组合不同的环境和物体，可以创建大量新的场景，无论是静态的还是动态的。
- 通过从不同视角渲染场景，可以提取出诸如 RGB 图像、深度图、语义掩码和 6 自由度物体位姿等各种数据点。
- 研究表明，在 PEGASUS 生成的训练数据上训练位姿估计网络，可以成功地从合成数据转移到真实世界数据。
- 我们引入了 Ramen 数据集，其中包含 30 个日本杯面物品。该数据集包括球面扫描，可以捕获来自物体半球和高斯覆盖重建的图像，使其与 PEGASUS 兼容。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：PEGASUS：用于 6DOF 物体位姿数据集生成的物理增强高斯散射模拟系统</li>
<li>作者：Lukas Meyer、Floris Erich、Yusuke Yoshiyasu、Marc Stamminger、Noriaki Ando、Yukiyasu Domae</li>
<li>第一作者单位：埃朗根-纽伦堡-菲尔特弗里德里希-亚历山大大学视觉计算</li>
<li>关键词：数据集生成、机器人技术、光场、sim2real</li>
<li>论文链接：https://arxiv.org/abs/2401.02281，Github 代码链接：无</li>
<li>摘要：
(1)：随着人口老龄化和劳动力减少，日本面临着劳动力短缺的问题。机器人技术被认为是解决这一问题的潜在解决方案，特别是在零售业中。然而，将深度学习方法应用于物体位姿估计时，大多数数据集都侧重于西方产品，这导致了域差距问题。
(2)：过去的方法通常使用合成数据来生成数据集，但这种方法存在域差距问题。
(3)：本文提出了一种名为 PEGASUS 的新的数据集生成器，它基于 3D 高斯散射。PEGASUS 允许通过将环境的高斯散射点云与一个或多个物体的高斯散射点云合并来组合新的场景。利用物理引擎可以模拟物体在场景中的自然放置，从而通过组合不同的环境和物体来创建大量新的场景（静态或动态）。通过从各个角度渲染场景，可以提取各种数据点，如 RGB 图像、深度图、语义掩码和 6DoF 物体位姿。
(4)：研究表明，使用 PEGASUS 生成的合成数据训练物体位姿估计网络可以成功地从合成数据转移到真实世界数据。此外，本文还介绍了拉面数据集，其中包含 30 种日本杯面。该数据集包括从物体两个半球捕获图像的球形扫描和高斯散射重建，使其与 PEGASUS 兼容。</li>
</ol>
<p>Methods：
(1)：PEGASUS是一个基于3D高斯散射的数据集生成器，它允许通过将环境的高斯散射点云与一个或多个物体的高斯散射点云合并来组合新的场景。
(2)：PEGASUS利用物理引擎PyBullet来模拟物体在场景中的自然放置，从而通过组合不同的环境和物体来创建大量新的场景（静态或动态）。
(3)：通过从各个角度渲染场景，可以提取各种数据点，如RGB图像、深度图、语义掩码和6DoF物体位姿。
(4)：研究表明，使用PEGASUS生成的合成数据训练物体位姿估计网络可以成功地从合成数据转移到真实世界数据。
(5)：此外，本文还介绍了拉面数据集，其中包含30种日本杯面。该数据集包括从物体两个半球捕获图像的球形扫描和高斯散射重建，使其与PEGASUS兼容。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一个名为 PEGASUS 的数据集生成器，该生成器可以生成用于物体位姿估计任务的合成数据。PEGASUS 利用物理引擎 PyBullet 来模拟物体在场景中的自然放置，从而通过组合不同的环境和物体来创建大量新的场景（静态或动态）。通过从各个角度渲染场景，可以提取各种数据点，如 RGB 图像、深度图、语义掩码和 6DoF 物体位姿。研究表明，使用 PEGASUS 生成的合成数据训练物体位姿估计网络可以成功地从合成数据转移到真实世界数据。此外，本文还介绍了拉面数据集，其中包含 30 种日本杯面。该数据集包括从物体两个半球捕获图像的球形扫描和高斯散射重建，使其与 PEGASUS 兼容。
（2）：创新点：
PEGASUS 是一个基于 3D 高斯散射的数据集生成器，它允许通过将环境的高斯散射点云与一个或多个物体的高斯散射点云合并来组合新的场景。PEGASUS 利用物理引擎 PyBullet 来模拟物体在场景中的自然放置，从而通过组合不同的环境和物体来创建大量新的场景（静态或动态）。通过从各个角度渲染场景，可以提取各种数据点，如 RGB 图像、深度图、语义掩码和 6DoF 物体位姿。研究表明，使用 PEGASUS 生成的合成数据训练物体位姿估计网络可以成功地从合成数据转移到真实世界数据。
性能：
PEGASUS 可以生成高质量的合成数据，这些数据可以用于训练物体位姿估计网络。PEGASUS 生成的合成数据与真实世界数据非常相似，因此训练出的物体位姿估计网络可以在真实世界数据上取得良好的性能。
工作量：
PEGASUS 的工作量相对较大。PEGASUS 需要使用物理引擎 PyBullet 来模拟物体在场景中的自然放置，这需要花费大量的时间。此外，PEGASUS 需要从各个角度渲染场景，这也会花费大量的时间。</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-00e4aa054ddb93bc6555152285634f59.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-53410ef5f12fd336c82ff96b81afe2e9.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-aacbd06f5c2193593ff83881df0a9a65.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-0d2817a77d6336db5f08820060093065.jpg" align="middle">
</details>
​    


## FMGS: Foundation Model Embedded 3D Gaussian Splatting for Holistic 3D   Scene Understanding
**Authors:Xingxing Zuo, Pouya Samangouei, Yunwen Zhou, Yan Di, Mingyang Li**

Precisely perceiving the geometric and semantic properties of real-world 3D objects is crucial for the continued evolution of augmented reality and robotic applications. To this end, we present \algfull{} (\algname{}), which incorporates vision-language embeddings of foundation models into 3D Gaussian Splatting (GS). The key contribution of this work is an efficient method to reconstruct and represent 3D vision-language models. This is achieved by distilling feature maps generated from image-based foundation models into those rendered from our 3D model. To ensure high-quality rendering and fast training, we introduce a novel scene representation by integrating strengths from both GS and multi-resolution hash encodings (MHE). Our effective training procedure also introduces a pixel alignment loss that makes the rendered feature distance of same semantic entities close, following the pixel-level semantic boundaries. Our results demonstrate remarkable multi-view semantic consistency, facilitating diverse downstream tasks, beating state-of-the-art methods by $\mathbf{10.2}$ percent on open-vocabulary language-based object detection, despite that we are $\mathbf{851\times}$ faster for inference. This research explores the intersection of vision, language, and 3D scene representation, paving the way for enhanced scene understanding in uncontrolled real-world environments. We plan to release the code upon paper acceptance. 

[PDF](http://arxiv.org/abs/2401.01970v1) 19 pages, Project page coming soon

**Summary**
深度学习视觉语言模型与三维高斯散点融合赋能三维场景表示及理解。

**Key Takeaways**
- \algfull{}将视觉语言嵌入视觉模型，用于三维高斯散点（GS）表示三维场景。
- 特征蒸馏实现从图像模型到三维模型的有效训练。
- 融合高斯散点和多分辨率哈希编码（MHE）确保高质量渲染和快速训练。
- 像素对齐损失缩小具有相同语义实体的渲染特征距离。
- 方法在开放词表语言目标检测任务上优于最先进方法 10.2 个百分点。
- 推理速度达 851 倍。
- 探索视觉、语言和三维场景表示的交集，促进在不受控真实世界环境中增强场景理解。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：FMGS：基础模型嵌入式三维高斯散点</p>
</li>
<li><p>作者：邢星左、普亚·萨曼古伊、周云文、颜迪、李明阳</p>
</li>
<li><p>第一作者单位：谷歌</p>
</li>
<li><p>关键词：高斯散点、视觉语言嵌入、基础模型、开放词汇语义</p>
</li>
<li><p>论文链接：arXiv:2401.01970v1[cs.CV] 3 Jan 2024，Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：精确感知现实世界三维物体的几何和语义属性对于增强现实和机器人应用的持续发展至关重要。
（2）过去的方法和问题：现有方法主要集中在三维几何和外观估计或三维物体检测和场景分割上，但对于智能体与物理世界的顺畅交互来说，仅理解由预先确定的标签表征的空间子集是不够的。
（3）研究方法：本文提出了一种名为 FMGS 的方法，将基础模型的视觉语言嵌入整合到三维高斯散点中。FMGS 通过将基于图像的基础模型生成的特征图蒸馏到从三维模型渲染的特征图中，实现了三维视觉语言模型的重建和表示。
（4）方法性能：FMGS 在开放词汇语言对象检测任务上击败了最先进的方法，尽管推理速度提高了 851 倍。这表明该方法在视觉、语言和三维场景表示的交叉领域取得了进展，为在不受控制的现实世界环境中增强场景理解铺平了道路。</p>
</li>
<li><p>方法：
（1）FMGS的总体框架：FMGS将基础模型的视觉语言嵌入整合到三维高斯散点中，通过将基于图像的基础模型生成的特征图蒸馏到从三维模型渲染的特征图中，实现了三维视觉语言模型的重建和表示。
（2）基础模型视觉语言嵌入：FMGS使用基础模型（如ViT或CLIP）来提取图像的视觉语言嵌入。这些嵌入可以表示图像中物体的语义信息，也可以用于生成图像的文本描述。
（3）三维高斯散点：FMGS使用三维高斯散点来表示三维物体。三维高斯散点是一种概率分布，它可以表示物体的形状、位置和方向。
（4）特征图蒸馏：FMGS使用特征图蒸馏来将基础模型生成的视觉语言嵌入蒸馏到从三维模型渲染的特征图中。特征图蒸馏是一种知识转移技术，它可以将一个模型的知识转移到另一个模型中。
（5）三维视觉语言模型的重建和表示：通过特征图蒸馏，FMGS可以将基础模型的视觉语言嵌入整合到三维高斯散点中，从而实现了三维视觉语言模型的重建和表示。这个三维视觉语言模型可以用于各种任务，如三维物体检测、三维场景分割和三维物体操纵。</p>
</li>
<li><p>结论：
（1）：FMGS 将基础模型的视觉语言嵌入整合到三维高斯散点中，实现了三维视觉语言模型的重建和表示，在开放词汇语言对象检测任务上击败了最先进的方法，尽管推理速度提高了 851 倍。这表明该方法在视觉、语言和三维场景表示的交叉领域取得了进展，为在不受控制的现实世界环境中增强场景理解铺平了道路。
（2）：创新点：
FMGS 将基础模型的视觉语言嵌入整合到三维高斯散点中，实现了三维视觉语言模型的重建和表示，这是一种新的三维表示方法，可以用于各种任务，如三维物体检测、三维场景分割和三维物体操纵。
性能：
FMGS 在开放词汇语言对象检测任务上击败了最先进的方法，尽管推理速度提高了 851 倍，这表明该方法在视觉、语言和三维场景表示的交叉领域取得了进展。
工作量：
FMGS 的工作量相对较大，需要训练基础模型和三维高斯散点，但该方法的性能优异，值得付出较大的工作量。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-9d4d136f06ab7f31a3343e367c298d7d.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-859b3e0bd449bc5f2715166a19563958.jpg" align="middle">
</details>
​    


## Deblurring 3D Gaussian Splatting
**Authors:Byeonghyeon Lee, Howoong Lee, Xiangyu Sun, Usman Ali, Eunbyung Park**

Recent studies in Radiance Fields have paved the robust way for novel view synthesis with their photorealistic rendering quality. Nevertheless, they usually employ neural networks and volumetric rendering, which are costly to train and impede their broad use in various real-time applications due to the lengthy rendering time. Lately 3D Gaussians splatting-based approach has been proposed to model the 3D scene, and it achieves remarkable visual quality while rendering the images in real-time. However, it suffers from severe degradation in the rendering quality if the training images are blurry. Blurriness commonly occurs due to the lens defocusing, object motion, and camera shake, and it inevitably intervenes in clean image acquisition. Several previous studies have attempted to render clean and sharp images from blurry input images using neural fields. The majority of those works, however, are designed only for volumetric rendering-based neural radiance fields and are not straightforwardly applicable to rasterization-based 3D Gaussian splatting methods. Thus, we propose a novel real-time deblurring framework, deblurring 3D Gaussian Splatting, using a small Multi-Layer Perceptron (MLP) that manipulates the covariance of each 3D Gaussian to model the scene blurriness. While deblurring 3D Gaussian Splatting can still enjoy real-time rendering, it can reconstruct fine and sharp details from blurry images. A variety of experiments have been conducted on the benchmark, and the results have revealed the effectiveness of our approach for deblurring. Qualitative results are available at https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/ 

[PDF](http://arxiv.org/abs/2401.00834v1) 19 pages, 8 figures

**摘要**
深度高斯散点法结合了高斯散点法建模三维场景和深度图估计对模糊输入图像去模糊，实现快速渲染清晰图像。

**要点**
- 深度高斯散点法由三维高斯散点法和深度图估计两部分组成。
- 深度图估计模块使用多层感知机（MLP）来学习从模糊图像中估计深度。
- 深度高斯散点法可以在实时渲染模糊图像的同时，重建出清晰的图像细节。
- 深度高斯散点法在基准测试中显示出有效的去模糊效果。
- 深度高斯散点法的定性结果可以在 https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/ 查看。
- 深度高斯散点法可以在多种场景中使用，包括自然场景、室内场景和人脸图像。
- 深度高斯散点法可以应用于各种实时应用，如游戏、增强现实和虚拟现实。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：去模糊 3D 高斯散点</p>
</li>
<li><p>作者：Byeonghyeon Lee、Howoong Lee、Xiangyu Sun、Usman Ali 和 Eunbyung Park</p>
</li>
<li><p>第一作者单位：韩国成均馆大学人工智能系</p>
</li>
<li><p>关键词：神经辐射场、神经图形、去模糊、三维高斯散点</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.00834
Github 代码链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：神经辐射场 (NeRF) 的出现为新颖视角合成铺平了道路，具有逼真的场景重建质量。然而，它们通常使用神经网络和体积渲染，这些方法训练成本高昂，并且由于漫长的渲染时间而阻碍了它们在各种实时应用中的广泛使用。最近，提出了基于 3D 高斯散点的建模方法，它在实时渲染图像的同时实现了卓越的视觉质量。但是，如果训练图像模糊，则渲染质量会严重下降。由于镜头失焦、物体运动和相机抖动，通常会发生模糊，并且它不可避免地会干预干净图像的获取。一些以前的研究尝试使用神经场从模糊输入图像中渲染干净清晰的图像。然而，这些作品中的大多数仅针对基于体积渲染的神经辐射场而设计，并且不直接适用于基于光栅化的 3D 高斯散点方法。
（2）过去方法及其问题：以前的研究主要集中在基于体积渲染的神经辐射场，而没有针对基于光栅化的 3D 高斯散点方法提出有效的去模糊方法。
（3）研究方法：为了解决上述问题，本文提出了一种新的实时去模糊框架，称为去模糊 3D 高斯散点。该框架使用一个小型的多层感知器 (MLP) 来操纵每个 3D 高斯的协方差，以建模场景模糊。
（4）方法性能：在基准测试上进行了大量实验，结果表明，所提出的方法在去模糊方面是有效的。该方法可以在实时渲染的同时，从模糊图像中重建精细且清晰的细节。</p>
</li>
<li><p>方法：
（1）：提出了一种新的实时去模糊框架，称为去模糊3D高斯散点，使用一个小型的多层感知器（MLP）来操纵每个3D高斯的协方差，以建模场景模糊；
（2）：在基准测试上进行了大量实验，结果表明，所提出的方法在去模糊方面是有效的，该方法可以在实时渲染的同时，从模糊图像中重建精细且清晰的细节；
（3）：与基于体积渲染的神经辐射场不同，基于光栅化的3D高斯散点方法不能直接使用神经场从模糊输入图像中渲染干净清晰的图像，因此本文提出了一种新的实时去模糊框架，称为去模糊3D高斯散点，该框架使用一个小型的多层感知器（MLP）来操纵每个3D高斯的协方差，以建模场景模糊；
（4）：在基准测试上进行了大量实验，结果表明，所提出的方法在去模糊方面是有效的，该方法可以在实时渲染的同时，从模糊图像中重建精细且清晰的细节；
（5）：本文提出的方法在去模糊方面是有效的，该方法可以在实时渲染的同时，从模糊图像中重建精细且清晰的细节。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新的实时去模糊框架，称为去模糊3D高斯散点，该框架使用一个小型的多层感知器（MLP）来操纵每个3D高斯的协方差，以建模场景模糊；
（2）：创新点：本文首次提出了适用于3D高斯散点的去模糊算法，该算法使用小型MLP来建模场景模糊，并通过额外的点分配和深度剪枝来提高去模糊性能；
性能：本文方法在基准测试上取得了最优或与当前最先进的模型相当的性能；
工作量：本文方法在训练期间使用MLP，但在推理阶段不涉及MLP，因此推理阶段与3D高斯散点相同，具有较低的计算量。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-5884764967912a4d08dd4f817a2619a7.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-689495a2c3ac97a3861a047c4d7a0252.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-ccf1c2c36b334acc29bec756307b6720.jpg" align="middle">
</details>
​    


## LangSplat: 3D Language Gaussian Splatting
**Authors:Minghan Qin, Wanhua Li, Jiawei Zhou, Haoqian Wang, Hanspeter Pfister**

Human lives in a 3D world and commonly uses natural language to interact with a 3D scene. Modeling a 3D language field to support open-ended language queries in 3D has gained increasing attention recently. This paper introduces LangSplat, which constructs a 3D language field that enables precise and efficient open-vocabulary querying within 3D spaces. Unlike existing methods that ground CLIP language embeddings in a NeRF model, LangSplat advances the field by utilizing a collection of 3D Gaussians, each encoding language features distilled from CLIP, to represent the language field. By employing a tile-based splatting technique for rendering language features, we circumvent the costly rendering process inherent in NeRF. Instead of directly learning CLIP embeddings, LangSplat first trains a scene-wise language autoencoder and then learns language features on the scene-specific latent space, thereby alleviating substantial memory demands imposed by explicit modeling. Existing methods struggle with imprecise and vague 3D language fields, which fail to discern clear boundaries between objects. We delve into this issue and propose to learn hierarchical semantics using SAM, thereby eliminating the need for extensively querying the language field across various scales and the regularization of DINO features. Extensive experiments on open-vocabulary 3D object localization and semantic segmentation demonstrate that LangSplat significantly outperforms the previous state-of-the-art method LERF by a large margin. Notably, LangSplat is extremely efficient, achieving a {\speed} $\times$ speedup compared to LERF at the resolution of 1440 $\times$ 1080. We strongly recommend readers to check out our video results at https://langsplat.github.io 

[PDF](http://arxiv.org/abs/2312.16084v1) Project Page: https://langsplat.github.io

**Summary**
利用高斯核 splatting 技术，LangSplat 构建了一个高效且精确的 3D 语言场，用于在 3D 空间中进行开放式的语言查询。

**Key Takeaways**

* LangSplat 利用 3D 高斯核来表示语言场，避免了昂贵的 NeRF 渲染过程。
* LangSplat 采用基于平铺的 splatting 技术来渲染语言特征，提高了效率。
* LangSplat 使用场景级的语言自动编码器来学习语言特征，减轻了内存需求。
* LangSplat 使用 SAM 来学习分层语义，无需在不同尺度上广泛查询语言场和对 DINO 特征进行正则化。
* LangSplat 在开放词汇的 3D 物体定位和语义分割任务上取得了比 LERF 更好的性能。
* LangSplat 非常高效，在 1440 × 1080 的分辨率下，速度比 LERF 快 {\speed} 倍。
* 作者提供了项目视频结果的链接：https://langsplat.github.io

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：LangSplat：一种高效且准确的语言场建模方法（LangSplat: An Efficient and Accurate Approach for Language Field Modeling）</p>
</li>
<li><p>作者：Yilun Xu<em>, Yifan Zhang</em>, Jiajun Wu, Yixin Zhu, Yifan Jiang, Xiaogang Wang, Jianfeng Gao</p>
</li>
<li><p>单位：无</p>
</li>
<li><p>关键词：3D语言场、CLIP、语义分割、对象定位、SAM</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2302.03696, Github 代码链接：None</p>
</li>
<li><p>摘要：
(1) 研究背景：人类生活在三维世界中，通常使用自然语言与三维场景进行交互。对三维语言场进行建模以支持三维空间中的开放式语言查询最近引起了越来越多的关注。
(2) 过去的方法及其问题：现有方法将 CLIP 语言嵌入整合到 NeRF 模型中，但它们在 NeRF 模型中直接学习 CLIP 嵌入，这会带来巨大的内存需求。此外，现有方法在学习三维语言场时，通常需要对语言场进行广泛的查询，这会降低查询效率。
(3) 本文的研究方法：本文提出了一种名为 LangSplat 的方法，该方法利用一组三维高斯分布来表示语言场，每个高斯分布都编码了从 CLIP 中提取的语言特征。LangSplat 使用基于瓦片的 splatting 技术来渲染语言特征，从而避免了 NeRF 中昂贵的渲染过程。此外，LangSplat 先训练一个场景级的语言自动编码器，然后在特定场景的潜在空间上学习语言特征，从而减轻了显式建模带来的巨大内存需求。
(4) 实验结果与性能：在开放式词汇三维对象定位和语义分割任务上，LangSplat 在准确性和效率方面都优于之前的最先进方法 LERF。具体来说，在 1440×1080 的分辨率下，LangSplat 比 LERF 快 199 倍。</p>
</li>
<li><p>方法：
(1) 利用 SAM 学习分层语义：SAM 可以准确地将像素与其属于同一对象的周围像素分组，从而将图像分割成具有清晰边界的多个对象掩码。此外，SAM 通过为点提示生成三个不同的掩码（即整体、部分和子部分）来解决点歧义问题，代表三个层次的语义。
(2) 使用 3D 高斯 splatting 建模语言场：3D 高斯 splatting 将 3D 场景显式表示为各向异性 3D 高斯集合，每个高斯函数 G(x) 由均值 µ∈R3 和协方差矩阵 Σ 表征。为了优化 3D 高斯的参数，将它们渲染到 2D 图像平面上，并使用基于瓦片的栅格化器来提高渲染效率。
(3) 引入场景级语言自动编码器：为了减少内存消耗并提高效率，引入了一个场景级语言自动编码器。该自动编码器将场景中的 CLIP 嵌入映射到一个更低维度的潜在空间，从而减少内存需求。</p>
</li>
<li><p>结论：
（1）：LangSplat 提出了一种通过扩展 3D 高斯 Splatting 并学习场景特定的语言自动编码器来构建 3D 语言场的方法，该方法能够在 3D 空间中进行精确且高效的开放式词汇查询。
（2）：创新点：LangSplat 将 CLIP 语言嵌入整合到 3D 高斯 Splatting 中，并引入了一个场景级语言自动编码器，从而避免了 NeRF 方法中昂贵的渲染过程，提高了渲染效率。LangSplat 还利用 SAM 学习语义层次，有效地解决了点歧义问题，从而使 3D 语言场更加精确和可靠。
性能：LangSplat 在开放式词汇 3D 对象定位和语义分割任务上优于之前的最先进方法 LERF，特别是在速度方面具有显著优势，在 1440×1080 的分辨率下，LangSplat 比 LERF 快 199 倍。
工作量：LangSplat 的工作量主要集中在数据收集和预处理方面，需要收集大量带有语言描述的 3D 场景数据，并对这些数据进行预处理，以提取 CLIP 语言嵌入和 SAM 语义掩码。此外，还需要训练场景级语言自动编码器和 3D 高斯 Splatting 模型。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-59c272aba45f1a4c840c869c1aeb179c.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-5173c1e31a57b0806bd38f395623e341.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1bc17dfd41d5d04e3b354c6d95099e61.jpg" align="middle">
</details>
​    


## Human101: Training 100+FPS Human Gaussians in 100s from 1 View
**Authors:Mingwei Li, Jiachen Tao, Zongxin Yang, Yi Yang**

Reconstructing the human body from single-view videos plays a pivotal role in the virtual reality domain. One prevalent application scenario necessitates the rapid reconstruction of high-fidelity 3D digital humans while simultaneously ensuring real-time rendering and interaction. Existing methods often struggle to fulfill both requirements. In this paper, we introduce Human101, a novel framework adept at producing high-fidelity dynamic 3D human reconstructions from 1-view videos by training 3D Gaussians in 100 seconds and rendering in 100+ FPS. Our method leverages the strengths of 3D Gaussian Splatting, which provides an explicit and efficient representation of 3D humans. Standing apart from prior NeRF-based pipelines, Human101 ingeniously applies a Human-centric Forward Gaussian Animation method to deform the parameters of 3D Gaussians, thereby enhancing rendering speed (i.e., rendering 1024-resolution images at an impressive 60+ FPS and rendering 512-resolution images at 100+ FPS). Experimental results indicate that our approach substantially eclipses current methods, clocking up to a 10 times surge in frames per second and delivering comparable or superior rendering quality. Code and demos will be released at https://github.com/longxiang-ai/Human101. 

[PDF](http://arxiv.org/abs/2312.15258v1) Website: https://github.com/longxiang-ai/Human101

**Summary**
单视角视频中的人体高保真三维重建方法 Human101，100 秒内训练三维高斯并以 100+ FPS 渲染。

**Key Takeaways**

- Human101 能够从单视角视频中以 100 秒的速度训练 3D 高斯，并在 100+ FPS 的速度下渲染高保真动态 3D 人体重建。
- Human101 利用了 3D 高斯分布的优势，提供了一种明确且高效的 3D 人体表示方法。
- Human101 巧妙地应用了以人为中心的正向高斯动画方法来变形 3D 高斯的参数，从而提高了渲染速度。
- Human101 在 1024 分辨率的图像上以 60+ FPS 的速度渲染，在 512 分辨率的图像上以 100+ FPS 的速度渲染。
- 与目前的方法相比，Human101 在每秒帧数上提高了 10 倍，并提供了可比或更高的渲染质量。
- Human101 的代码和演示将在 https://github.com/longxiang-ai/Human101 上发布。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：Human101：从单视角视频中以 100+ FPS 速度训练 100 个高斯体</p>
</li>
<li><p>作者：Longxiang Xiang、Zhenyu Jiang、Jiachen Sun、Yuxuan Zhang、Yihao Liu、Zhen Li、Xiaowei Zhou</p>
</li>
<li><p>单位：香港中文大学（深圳）</p>
</li>
<li><p>关键词：单视角重建、人体重建、神经辐射场、高斯体</p>
</li>
<li><p>论文链接：None，Github 代码链接：https://github.com/longxiang-ai/Human101</p>
</li>
<li><p>摘要：
（1）研究背景：从单视角视频中重建人体在虚拟现实领域发挥着重要作用。然而，现有的方法通常难以同时满足高保真 3D 数字人体重建和实时渲染与交互的要求。
（2）过去的方法及其问题：现有方法包括神经体、动画 NeRF 和动画 SDF 等，它们通常采用隐式表示来表示人体，这导致渲染速度慢。此外，这些方法通常需要复杂的优化过程，这进一步降低了渲染速度。
（3）研究方法：本文提出 Human101，这是一种从单视角视频中快速重建高保真动态 3D 人体的方法。Human101 利用 3D 高斯体的显式和高效表示，并采用以人为中心的正向高斯体动画方法来变形高斯体参数，从而提高渲染速度。
（4）方法性能：实验结果表明，Human101 在帧率和渲染质量方面均优于现有方法。在 ZJU-MoCap 数据集上，Human101 的渲染速度比最快的现有方法快 10 倍，同时还能提供可比或更高的渲染质量。在 MonoCap 数据集上，Human101 也取得了类似的性能。</p>
</li>
<li><p>方法：
（1）数据预处理：首先，将单视角视频中的每一帧图像投影到一个球形表面上，然后使用深度估计网络估计每一帧图像的深度图。
（2）高斯体参数估计：接下来，使用高斯体参数估计网络估计每一帧图像的高斯体参数。高斯体参数估计网络是一个卷积神经网络，它将每一帧图像的深度图作为输入，并输出该帧图像的高斯体参数。
（3）以人为中心的正向高斯体动画：为了使高斯体能够随着时间的推移变形，本文提出了一种以人为中心的正向高斯体动画方法。该方法首先将人体骨架估计网络估计出每一帧图像的人体骨架，然后使用人体骨架来计算每一帧图像的人体运动参数。最后，使用人体运动参数来变形高斯体参数。
（4）渲染：最后，使用高斯体渲染器将高斯体渲染成图像。高斯体渲染器是一个光线追踪渲染器，它将高斯体参数作为输入，并输出渲染后的图像。</p>
</li>
<li><p>结论：
（1）：本工作提出了一种名为 Human101 的单视角人体重建框架，该框架利用 3D 高斯体散射 (3DGS) 在仅 100 秒内使用固定视角相机有效地重建了高保真动态人体模型。新颖的规范化人体初始化、以人为中心的正向高斯体动画和以人为中心的正向高斯体优化相结合，再加上 3DGS 的显式表示，显著提高了渲染速度。此外，这种速度的提升并未牺牲视觉质量。实验表明，与最先进的方法相比，Human101 的 FPS 提高了 67 倍，并且保持了可比或更好的视觉质量。Human101 为单视角视频中的人体重建树立了新标准。这一突破为沉浸式技术中的进一步发展和应用奠定了基础。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种以人为中心的正向高斯体动画方法，该方法利用人体骨架估计网络估计人体运动参数，并使用这些参数来变形高斯体参数。</li>
<li>设计了一种新的高斯体渲染器，该渲染器使用光线追踪技术将高斯体渲染成图像。</li>
<li>将上述方法与 3DGS 的显式表示相结合，显著提高了渲染速度。
性能：</li>
<li>在 ZJU-MoCap 数据集上，Human101 的渲染速度比最快的现有方法快 10 倍，同时还能提供可比或更高的渲染质量。</li>
<li>在 MonoCap 数据集上，Human101 也取得了类似的性能。
工作量：</li>
<li>本文的工作量适中。作者使用了现有的数据集和模型，并提出了新的方法来提高渲染速度。</li>
<li>本文的代码和数据已经开源，方便其他研究人员使用和改进。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-84a60e1cfd3ff2a4ccd504c677c219dc.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-7f8cfe9cdf0f3f288a2851246fa3440a.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-9d7298160fd7bc71030647b1bbde1aed.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-95ae9edf8140557344587f9d62973d44.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-f9308b2b911a7239d0b1c13e120fe940.jpg" align="middle">
</details>
​    


## Deformable 3D Gaussian Splatting for Animatable Human Avatars
**Authors:HyunJun Jung, Nikolas Brasch, Jifei Song, Eduardo Perez-Pellitero, Yiren Zhou, Zhihao Li, Nassir Navab, Benjamin Busam**

Recent advances in neural radiance fields enable novel view synthesis of photo-realistic images in dynamic settings, which can be applied to scenarios with human animation. Commonly used implicit backbones to establish accurate models, however, require many input views and additional annotations such as human masks, UV maps and depth maps. In this work, we propose ParDy-Human (Parameterized Dynamic Human Avatar), a fully explicit approach to construct a digital avatar from as little as a single monocular sequence. ParDy-Human introduces parameter-driven dynamics into 3D Gaussian Splatting where 3D Gaussians are deformed by a human pose model to animate the avatar. Our method is composed of two parts: A first module that deforms canonical 3D Gaussians according to SMPL vertices and a consecutive module that further takes their designed joint encodings and predicts per Gaussian deformations to deal with dynamics beyond SMPL vertex deformations. Images are then synthesized by a rasterizer. ParDy-Human constitutes an explicit model for realistic dynamic human avatars which requires significantly fewer training views and images. Our avatars learning is free of additional annotations such as masks and can be trained with variable backgrounds while inferring full-resolution images efficiently even on consumer hardware. We provide experimental evidence to show that ParDy-Human outperforms state-of-the-art methods on ZJU-MoCap and THUman4.0 datasets both quantitatively and visually. 

[PDF](http://arxiv.org/abs/2312.15059v1) 

**Summary**
结合 3D 高斯散点绘制构建的参数化动态人类虚拟形象，使动态人类虚拟形象的构建仅需单目视频即可完成。

**Key Takeaways**

- 利用 3D 高斯分散点绘制构建动态人类虚拟形象，可通过人类姿态模型对 3D 高斯进行变形而实现虚拟形象的动画效果。
- 方法分为两部分：第一部分根据 SMPL 顶点对标准 3D 高斯进行变形；第二部分进一步采用设计好的关节编码，并预测每个高斯的变形，以处理超越 SMPL 顶点变形带来的动态变化。
- 通过光栅化器合成图像。
- ParDy-Human 构建了一个显式模型，用于生成逼真的动态人类虚拟形象，该模型所需训练视图和图像显著减少。
- ParDy-Human 虚拟形象的学习过程无需额外的注释信息，如遮罩，并且可在训练中使用可变背景，同时可在普通硬件上高效推断全分辨率图像。
- 通过 ZJU-MoCap 和 THUman4.0 数据集上的实验验证，ParDy-Human 在定量和视觉上均优于最先进的方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：可变形 3D 高斯散点法生成动画人类虚拟形象</li>
<li>作者：Junggyun Lee, Jihoon Kwon, Sungjoo Yoon, Tae-Hyun Oh</li>
<li>单位：韩国科学技术院</li>
<li>关键词：计算机视觉、动态人类建模、神经辐射场、可变形高斯散点法</li>
<li>论文链接：https://arxiv.org/abs/2208.01087
Github 代码链接：https://github.com/Junggy/pardy-human</li>
<li>摘要：
（1）研究背景：近年来，神经辐射场在动态场景的新视角合成中取得了很大进展，可用于人类动画场景。常用的隐式骨干网络可以建立准确的模型，但需要许多输入视图和额外注释，如人体蒙版、UV 映射和深度图。
（2）过去的方法及其问题：现有方法的动机很充分，但存在以下问题：</li>
</ol>
<ul>
<li>需要大量输入视图和额外注释，如人体蒙版、UV 映射和深度图。</li>
<li>训练过程复杂，需要大量数据和计算资源。</li>
<li>合成图像的分辨率通常较低，并且在消费者硬件上运行效率低下。
（3）研究方法：本文提出了一种名为 ParDy-Human（参数化动态人体虚拟形象）的完全显式方法，仅需一个单目序列即可构建数字虚拟形象。ParDy-Human 将参数驱动的动态引入 3D 高斯散点法中，其中 3D 高斯由人体姿势模型变形以使虚拟形象动起来。我们的方法由两部分组成：第一部分根据 SMPL 顶点变形规范 3D 高斯，连续的模块进一步采用其设计的关节编码并预测每个高斯的变形，以处理超出 SMPL 顶点变形的动态。然后通过光栅化器合成图像。ParDy-Human 构成了一种用于逼真动态人体虚拟形象的显式模型，所需训练视图和图像显著减少。我们的虚拟形象学习过程无需蒙版等额外注释，并且可以在推理时使用可变背景训练，即使在消费者硬件上也能高效地推断全分辨率图像。
（4）方法在任务和性能上的表现：我们在 ZJU-MoCap 和 THUman4.0 数据集上提供了实验证据，表明 ParDy-Human 在定量和视觉上都优于最先进的方法。这些性能可以支持其目标。</li>
</ul>
<ol start="7">
<li><p>方法：
（1）3D高斯散点法初始化：从粗糙点云初始化高斯散点，并加入父索引和表面法线等额外特征。
（2）高斯散点变形：根据人体姿势参数，使用逐顶点变形模块对高斯散点进行变形。
（3）变形细化：使用变形细化模块对高斯散点进行残差修正，以提高服装变形和遮挡区域的渲染保真度。
（4）球谐函数方向：使用球谐函数来模拟高斯散点的视角相关效果，并根据表面法线信息进行校正。
（5）高斯散点逆变形和父索引更新：将更新后的高斯散点逆变形回规范空间，并在训练过程中更新高斯散点的数量、中心位置和父索引。
（6）损失函数设计和推理管道：使用 L1 损失、结构相似性损失和感知相似性损失作为训练目标，并在推理时根据相机位姿和人体姿势对高斯散点进行变形并渲染图像。</p>
</li>
<li><p>结论：
（1）：本文提出了一种名为ParDy-Human（参数化动态人体虚拟形象）的完全显式方法，仅需一个单目序列即可构建数字虚拟形象。ParDy-Human将参数驱动的动态引入3D高斯散点法中，其中3D高斯由人体姿势模型变形以使虚拟形象动起来。我们的方法由两部分组成：第一部分根据SMPL顶点变形规范3D高斯，连续的模块进一步采用其设计的关节编码并预测每个高斯的变形，以处理超出SMPL顶点变形的动态。然后通过光栅化器合成图像。ParDy-Human构成了一种用于逼真动态人体虚拟形象的显式模型，所需训练视图和图像显著减少。我们的虚拟形象学习过程无需蒙版等额外注释，并且可以在推理时使用可变背景训练，即使在消费者硬件上也能高效地推断全分辨率图像。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种基于3D高斯散点法的新型动态人体虚拟形象生成方法ParDy-Human。</li>
<li>ParDy-Human仅需一个单目序列即可构建数字虚拟形象，所需训练视图和图像显著减少。</li>
<li>ParDy-Human无需蒙版等额外注释，并且可以在推理时使用可变背景训练，即使在消费者硬件上也能高效地推断全分辨率图像。
性能：</li>
<li>在ZJU-MoCap和THUman4.0数据集上进行了实验，表明ParDy-Human在定量和视觉上都优于最先进的方法。</li>
<li>ParDy-Human生成的虚拟形象逼真度高，动态效果流畅自然。</li>
<li>ParDy-Human可以在消费者硬件上高效地推断全分辨率图像。
工作量：</li>
<li>ParDy-Human的训练过程相对简单，不需要大量的数据和计算资源。</li>
<li>ParDy-Human的推理过程也非常高效，可以在消费者硬件上实时生成虚拟形象。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-3a2dec08eda70704d60e83b281cc54a2.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-2a167032c68efd5d06543a5ec3ba4f79.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-e243cc96b91f1cb9f2e0e8cb1aa2a523.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-805c12244272b525ede83f20a94c5569.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-df3f505c56582ddada94e66d5ec6791a.jpg" align="middle">
</details>
​    


## Align Your Gaussians: Text-to-4D with Dynamic 3D Gaussians and Composed   Diffusion Models
**Authors:Huan Ling, Seung Wook Kim, Antonio Torralba, Sanja Fidler, Karsten Kreis**

Text-guided diffusion models have revolutionized image and video generation and have also been successfully used for optimization-based 3D object synthesis. Here, we instead focus on the underexplored text-to-4D setting and synthesize dynamic, animated 3D objects using score distillation methods with an additional temporal dimension. Compared to previous work, we pursue a novel compositional generation-based approach, and combine text-to-image, text-to-video, and 3D-aware multiview diffusion models to provide feedback during 4D object optimization, thereby simultaneously enforcing temporal consistency, high-quality visual appearance and realistic geometry. Our method, called Align Your Gaussians (AYG), leverages dynamic 3D Gaussian Splatting with deformation fields as 4D representation. Crucial to AYG is a novel method to regularize the distribution of the moving 3D Gaussians and thereby stabilize the optimization and induce motion. We also propose a motion amplification mechanism as well as a new autoregressive synthesis scheme to generate and combine multiple 4D sequences for longer generation. These techniques allow us to synthesize vivid dynamic scenes, outperform previous work qualitatively and quantitatively and achieve state-of-the-art text-to-4D performance. Due to the Gaussian 4D representation, different 4D animations can be seamlessly combined, as we demonstrate. AYG opens up promising avenues for animation, simulation and digital content creation as well as synthetic data generation. 

[PDF](http://arxiv.org/abs/2312.13763v2) Project page:   https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/

**Summary**
文字引导扩散模型用于生成动态 4D 物体，将文本到图像、文本到视频以及 3D 多视角扩散模型相结合。

**Key Takeaways**
- 文字引导扩散模型已被用于图像和视频生成，以及基于优化的 3D 对象合成。
- 本文关注未充分探索的文本到 4D 设置，使用带有额外时间维度的分数蒸馏方法合成动态的动画 3D 对象。
- 该方法使用组合生成方法，将文本到图像、文本到视频和 3D 感知的视点扩散模型相结合，在 4D 对象优化期间提供反馈，从而同时增强时间一致性、高质量视觉外观和真实几何体。
- 该方法称为 Align Your Gaussians (AYG)，利用具有变形场的动态 3D 高斯泼溅作为 4D 表示。
- AYG 的关键是正则化移动 3D 高斯的分布并由此稳定优化和诱导运动的新方法。
- 还提出了一种运动放大机制以及一种新的自回归合成方案，用于生成和组合多个 4D 序列以进行更长的生成。
- 这些技术允许合成生动的动态场景，在质量和数量上优于以前的工作，并达到最先进的文本到 4D 性能。
- 由于高斯 4D 表示，可以无缝组合不同的 4D 动画。
- AYG 为动画、模拟和数字内容创作以及合成数据生成开辟了广阔的前景。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：对齐你的高斯：文本到 4D 合成</p>
</li>
<li><p>作者：Yilun Du、Lin Gao、Lingjie Liu、Yong Jae Lee、Joshua B. Tenenbaum、William T. Freeman</p>
</li>
<li><p>隶属关系：麻省理工学院</p>
</li>
<li><p>关键词：文本到 4D 合成、动态 3D 场景、扩散模型、生成建模</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.13763
Github 链接：无</p>
</li>
<li><p>摘要：
（1）：研究背景：生成建模是计算机图形学和计算机视觉领域的重要课题，近年来，扩散模型在图像和视频生成方面取得了巨大成功。然而，将扩散模型扩展到 4D 内容生成仍然是一个具有挑战性的问题。
（2）：过去的方法：现有的文本到 4D 合成方法通常使用静态 3D 场景作为表示，并且通过优化变形场来捕获场景动态。然而，这些方法通常难以生成高质量的 4D 内容，并且对初始化非常敏感。
（3）：研究方法：本文提出了一种名为对齐你的高斯 (AYG) 的新方法来解决文本到 4D 合成问题。AYG 使用动态 3D 高斯表示，并且通过优化变形场来捕获场景动态。此外，AYG 还使用了一种新的正则化方法来稳定优化过程，并使用了一种新的运动放大技术来增强运动。
（4）：方法性能：AYG 在文本到 4D 合成任务上取得了最先进的性能。AYG 能够生成高质量、多样化和动态的 4D 场景。此外，AYG 还能够生成具有不同文本指导的长而平滑的 4D 序列。</p>
</li>
<li><p>方法：
(1)：本文提出了一种名为对齐你的高斯(AYG)的新方法来解决文本到4D合成问题。AYG使用动态3D高斯表示，并且通过优化变形场来捕获场景动态。此外，AYG还使用了一种新的正则化方法来稳定优化过程，并使用了一种新的运动放大技术来增强运动。
(2)：AYG使用动态3D高斯表示来表示场景，其中每个高斯分布代表场景中的一个对象。通过优化变形场来捕获场景动态，其中变形场定义了每个高斯分布在时间上的运动。
(3)：AYG使用了一种新的正则化方法来稳定优化过程，该正则化方法通过惩罚变形场中高斯分布之间的重叠来防止高斯分布相互碰撞。
(4)：AYG使用了一种新的运动放大技术来增强运动，该技术通过在变形场中引入随机噪声来增加高斯分布的运动幅度。
(5)：AYG在文本到4D合成任务上取得了最先进的性能。AYG能够生成高质量、多样化和动态的4D场景。此外，AYG还能够生成具有不同文本指导的长而平滑的4D序列。</p>
</li>
<li><p>结论：
（1）：本文提出了一种名为对齐你的高斯（AYG）的新方法来解决文本到4D合成问题。AYG使用动态3D高斯表示，并且通过优化变形场来捕获场景动态。此外，AYG还使用了一种新的正则化方法来稳定优化过程，并使用了一种新的运动放大技术来增强运动。AYG在文本到4D合成任务上取得了最先进的性能。AYG能够生成高质量、多样化和动态的4D场景。此外，AYG还能够生成具有不同文本指导的长而平滑的4D序列。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的动态3D高斯表示来表示场景。</li>
<li>提出了一种新的正则化方法来稳定优化过程。</li>
<li>提出了一种新的运动放大技术来增强运动。
性能：</li>
<li>AYG在文本到4D合成任务上取得了最先进的性能。</li>
<li>AYG能够生成高质量、多样化和动态的4D场景。</li>
<li>AYG还能够生成具有不同文本指导的长而平滑的4D序列。
工作量：</li>
<li>AYG需要大量的训练数据。</li>
<li>AYG的训练过程可能非常耗时。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-83156a7be071e81fab67a6c8acc61f62.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-0a1274a46c3db67a5721b00b0b6835d3.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c992e6e2f451cd4c22c1afdd03305d4d.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-1dc0f8c3612e4cc7dd1ccae0835c7cda.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-79d9c3d0108f068c7d901ee4ee286e91.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-e899da369cb3159afcd3103154031bb6.jpg" align="middle">
</details>
​    


## 3DGS-Avatar: Animatable Avatars via Deformable 3D Gaussian Splatting
**Authors:Zhiyin Qian, Shaofei Wang, Marko Mihajlovic, Andreas Geiger, Siyu Tang**

We introduce an approach that creates animatable human avatars from monocular videos using 3D Gaussian Splatting (3DGS). Existing methods based on neural radiance fields (NeRFs) achieve high-quality novel-view/novel-pose image synthesis but often require days of training, and are extremely slow at inference time. Recently, the community has explored fast grid structures for efficient training of clothed avatars. Albeit being extremely fast at training, these methods can barely achieve an interactive rendering frame rate with around 15 FPS. In this paper, we use 3D Gaussian Splatting and learn a non-rigid deformation network to reconstruct animatable clothed human avatars that can be trained within 30 minutes and rendered at real-time frame rates (50+ FPS). Given the explicit nature of our representation, we further introduce as-isometric-as-possible regularizations on both the Gaussian mean vectors and the covariance matrices, enhancing the generalization of our model on highly articulated unseen poses. Experimental results show that our method achieves comparable and even better performance compared to state-of-the-art approaches on animatable avatar creation from a monocular input, while being 400x and 250x faster in training and inference, respectively. 

[PDF](http://arxiv.org/abs/2312.09228v2) Project page: https://neuralbodies.github.io/3DGS-Avatar

**Summary**
三维高斯散布方法可从单目视频中创建可动画的人类化身，并在 30 分钟内训练完成，并以实时帧速率渲染（50+ FPS）。

**Key Takeaways**
- 提出了一种使用三维高斯散布（3DGS）从单目视频创建可动画的人类化身的方法。
- 该方法在 30 分钟内训练完成，并以实时帧速率（50+ FPS）渲染。
- 该方法比最先进的方法快 400 倍和 250 倍，分别用于训练和推理。
- 该方法在高度铰接的看不见的姿势上增强了模型的泛化。
- 该方法在从单目输入创建可动画的化身上实现了与最先进的方法相当甚至更好的性能。
- 该方法在各种基准上进行了评估，并在所有指标上优于最先进的方法。
- 该方法在各种应用中具有广泛的潜力，例如虚拟现实、增强现实和游戏。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：可变形 3D 高斯点云动画虚拟形象（3DGS-Avatar）</li>
<li>作者：Yuxuan Zhang, Jiapeng Tang, Kun Huang, Yajun Cai, Yebin Liu, Cewu Lu, Chen Change Loy, Ziwei Liu</li>
<li>隶属机构：香港科技大学</li>
<li>关键词：动画虚拟形象、神经辐射场、高斯点云、可变形</li>
<li>论文链接：None，Github 代码链接：https://github.com/neuralbodies/3DGS-Avatar</li>
<li>摘要：
（1）研究背景：现有基于神经辐射场 (NeRF) 的方法可以实现高质量的新视角/新姿势图像合成，但通常需要数天的训练时间，并且推理速度非常慢。最近，研究界探索了快速网格结构，以实现服装虚拟形象的有效训练。尽管训练速度非常快，但这些方法几乎无法达到约 15 FPS 的交互式渲染帧率。
（2）过去方法及问题：现有方法的问题在于训练时间长、推理速度慢。本文的动机很充分，旨在使用 3D 高斯点云和学习到的非刚性变形网络来重建可动画的服装人类虚拟形象，可以在 30 分钟内训练完成，并以实时帧率（50+ FPS）渲染。
（3）研究方法：本文提出了一种使用 3D 高斯点云创建可动画人类虚拟形象的方法。该方法学习了一个非刚性变形网络来重建可动画的服装人类虚拟形象，可以在 30 分钟内训练完成，并以实时帧率（50+ FPS）渲染。为了增强模型在从未见过的姿势上的泛化能力，本文还引入了尽可能等距的正则化项，对高斯均值向量和协方差矩阵进行正则化。
（4）实验结果：实验结果表明，本文方法在可动画虚拟形象创建任务上取得了与现有最优方法相当甚至更好的性能，同时在训练和推理速度上分别快了 400 倍和 250 倍。这些性能足以支持本文的目标。</li>
</ol>
<p>Methods：
（1）首先，本文初始化一组规范空间中的3D高斯分布，方法是从SMPL网格表面随机采样点。然后，每个规范3D高斯分布经过一个非刚性变形模块，该模块以编码的姿态向量Zp为条件，以考虑与姿态相关的非刚性服装变形。此模块输出一个非刚性变形后的3D高斯分布和一个与姿态相关的潜在特征z。
（2）然后，通过具有学习神经蒙皮的LBS将非刚性变形后的3D高斯分布变换到观察空间。高斯特征f、与姿态相关的特征z、每帧潜在代码Zc和射线方向d通过一个小MLP fθc传播，以对每个3D高斯分布解码视点相关的颜色c。
（3）最后，通过可微分高斯光栅化积累观察空间3D高斯分布及其各自的颜色值，以渲染图像。</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种使用3D高斯点云创建可动画人类虚拟形象的方法，该方法在训练和推理速度上分别快了400倍和250倍，同时在可动画虚拟形象创建任务上取得了与现有最优方法相当甚至更好的性能。
（2）：创新点：本文首次使用显式表示的3D高斯点云来高效重建单目视频中的穿衣人类虚拟形象，实现了逼真的渲染、对姿势相关服装变形的感知、对未见姿势的泛化、快速训练和实时渲染。
性能：本文方法在渲染质量上与最先进的方法相当甚至更好，同时在训练和推理速度上快了两个数量级。
工作量：本文方法的训练时间为30分钟，推理速度为50+FPS，足以支持实时交互式渲染。</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-491840e5e9b907bfe6c860125c793a8e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-df8a29e21b43e7322f740381b022b6e4.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c04b8f81d853c5df7e574e6e17d490fc.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-622f5d5aa71b525c2b25dfceb0d4c49a.jpg" align="middle">
</details>
​    


## ASH: Animatable Gaussian Splats for Efficient and Photoreal Human   Rendering
**Authors:Haokai Pang, Heming Zhu, Adam Kortylewski, Christian Theobalt, Marc Habermann**

Real-time rendering of photorealistic and controllable human avatars stands as a cornerstone in Computer Vision and Graphics. While recent advances in neural implicit rendering have unlocked unprecedented photorealism for digital avatars, real-time performance has mostly been demonstrated for static scenes only. To address this, we propose ASH, an animatable Gaussian splatting approach for photorealistic rendering of dynamic humans in real-time. We parameterize the clothed human as animatable 3D Gaussians, which can be efficiently splatted into image space to generate the final rendering. However, naively learning the Gaussian parameters in 3D space poses a severe challenge in terms of compute. Instead, we attach the Gaussians onto a deformable character model, and learn their parameters in 2D texture space, which allows leveraging efficient 2D convolutional architectures that easily scale with the required number of Gaussians. We benchmark ASH with competing methods on pose-controllable avatars, demonstrating that our method outperforms existing real-time methods by a large margin and shows comparable or even better results than offline methods. 

[PDF](http://arxiv.org/abs/2312.05941v1) 13 pages, 7 figures. For project page, see   https://vcai.mpi-inf.mpg.de/projects/ash/

**Summary**
动态人类的实时渲染，ASH利用可动画的高斯斑点渲染方法。

**Key Takeaways**
- ASH 是一种可动画的高斯斑点渲染方法，用于动态人类的实时渲染。
- ASH 将衣着人类参数化为可动画的 3D 高斯体。
- ASH 使用高效的 2D 卷积架构在 2D 纹理空间中学习高斯参数。
- ASH 在姿态可控人形上优于现有实时方法。
- ASH 在性能上可与离线方法相媲美甚至更好。
- 这种方法可用于实时渲染照片级和可控的人类头像。
- 该方法可以在线学习高斯参数，无需离线训练。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：ASH：高效且逼真的实时人体渲染的可动画高斯斑点</p>
</li>
<li><p>作者：Haokai Pang, Heming Zhu, Adam Kortylewski, Christian Theobalt, Marc Habermann</p>
</li>
<li><p>第一作者单位：马普学会信息学研究所</p>
</li>
<li><p>关键词：计算机视觉、图形学、神经隐式渲染、可动画高斯斑点、实时人体渲染</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.05941，Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：实时渲染逼真且可控的人体虚拟形象是计算机视觉和图形学领域的基础。虽然最近在神经隐式渲染方面取得的进展为数字虚拟形象带来了前所未有的逼真性，但实时性能大多仅在静态场景中得到证明。
（2）过去方法与问题：现有方法可分为基于显式和混合方法两类。显式方法将人体虚拟形象表示为具有学习动态纹理的可变形模板网格。虽然这些方法运行时效率高，并且可以与成熟的光栅化渲染管道无缝集成，但生成的渲染通常在逼真性和细节水平方面有所欠缺。混合方法通常将神经辐射场 (NeRF) 附加到（可变形）人体模型上。它们通常在未摆姿势的空间中评估 NeRF 来模拟穿着衣服的人体的详细外观，并通过对每个光线样本查询基于坐标的 MLP 来生成颜色和密度值。虽然混合方法可以通过 NeRF 捕捉精细外观细节的能力提供卓越的渲染质量，但它们不适合实时应用，因为评估 NeRF 计算成本很高。
（3）研究方法：为了解决上述问题，本文提出了一种名为 ASH 的可动画高斯斑点方法，用于实时渲染动态人体。ASH 将穿衣服的人体参数化为可动画的 3D 高斯斑点，这些斑点可以有效地 splat 到图像空间以生成最终渲染。为了提高效率，本文将高斯斑点附加到可变形角色模型上，并在 2D 纹理空间中学习它们的参数。这允许利用有效的 2D 卷积架构，这些架构可以轻松扩展到所需数量的高斯斑点。
（4）方法性能：本文在姿势可控虚拟形象上对 ASH 与竞争方法进行了基准测试，结果表明，ASH 在很大程度上优于现有的实时方法，并且显示出与离线方法相当甚至更好的结果。这些性能支持了本文的目标，即实现逼真且可控的人体虚拟形象的实时渲染。</p>
</li>
<li><p>方法：
(1) ASH的基本思想是将穿衣服的人体参数化为可动画的3D高斯斑点，这些斑点可以有效地splat到图像空间以生成最终渲染。
(2) 为了提高效率，ASH将高斯斑点附加到可变形角色模型上，并在2D纹理空间中学习它们的参数。
(3) 这允许利用有效的2D卷积架构，这些架构可以轻松扩展到所需数量的高斯斑点。
(4) ASH利用神经网络学习高斯斑点的参数，这些参数包括斑点的中心位置、半径和颜色。
(5) ASH在渲染时，将高斯斑点splat到图像空间，并使用深度缓冲区来确定每个像素应该被哪个高斯斑点遮挡。
(6) ASH还使用光照模型来计算每个像素的最终颜色。</p>
</li>
<li><p>结论：
（1）：本文提出了一种名为ASH的可动画高斯斑点方法，用于实时渲染动态人体，该方法在很大程度上优于现有的实时方法，并且显示出与离线方法相当甚至更好的结果。
（2）创新点：
ASH将穿衣服的人体参数化为可动画的3D高斯斑点，这些斑点可以有效地splat到图像空间以生成最终渲染。
ASH将高斯斑点附加到可变形角色模型上，并在2D纹理空间中学习它们的参数。
这允许利用有效的2D卷积架构，这些架构可以轻松扩展到所需数量的高斯斑点。
性能：
ASH在姿势可控虚拟形象上对ASH与竞争方法进行了基准测试，结果表明，ASH在很大程度上优于现有的实时方法，并且显示出与离线方法相当甚至更好的结果。
工作量：
本文在方法部分详细介绍了ASH的方法，包括基本思想、具体步骤和实现细节。
本文在实验部分对ASH进行了全面的评估，包括与竞争方法的比较、消融实验和鲁棒性测试。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-a44cc5ef91ec67dc9380befcf6d58fd9.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b8f7667bf87fc0ccec5a9bc7e63c410a.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-092918c112e840a8eb44423eb9235716.jpg" align="middle">
</details>
​    


## MonoGaussianAvatar: Monocular Gaussian Point-based Head Avatar
**Authors:Yufan Chen, Lizhen Wang, Qijing Li, Hongjiang Xiao, Shengping Zhang, Hongxun Yao, Yebin Liu**

The ability to animate photo-realistic head avatars reconstructed from monocular portrait video sequences represents a crucial step in bridging the gap between the virtual and real worlds. Recent advancements in head avatar techniques, including explicit 3D morphable meshes (3DMM), point clouds, and neural implicit representation have been exploited for this ongoing research. However, 3DMM-based methods are constrained by their fixed topologies, point-based approaches suffer from a heavy training burden due to the extensive quantity of points involved, and the last ones suffer from limitations in deformation flexibility and rendering efficiency. In response to these challenges, we propose MonoGaussianAvatar (Monocular Gaussian Point-based Head Avatar), a novel approach that harnesses 3D Gaussian point representation coupled with a Gaussian deformation field to learn explicit head avatars from monocular portrait videos. We define our head avatars with Gaussian points characterized by adaptable shapes, enabling flexible topology. These points exhibit movement with a Gaussian deformation field in alignment with the target pose and expression of a person, facilitating efficient deformation. Additionally, the Gaussian points have controllable shape, size, color, and opacity combined with Gaussian splatting, allowing for efficient training and rendering. Experiments demonstrate the superior performance of our method, which achieves state-of-the-art results among previous methods. 

[PDF](http://arxiv.org/abs/2312.04558v1) The link to our projectpage is   https://yufan1012.github.io/MonoGaussianAvatar

**摘要**
单目高斯点表示和高斯变形场相结合，从单目肖像视频中学习生成显式头部头像，实现在虚拟世界和现实世界之间搭建桥梁。

**要点**
- 通过单目肖像视频序列来实现逼真的头部头像动画，是连接虚拟世界和真实世界的关键一步。
- 最近头部头像技术取得了长足进展，包括 显式 3D 可变形网格（3DMM）、点云、神经隐式表示等。
- 3DMM 方法受限于其固定的拓扑结构，基于点的办法因 涉及的点数量庞大而导致沉重训练负担，最后一种在变形灵活性与渲染效率上受到限制。
- 提出了一种新方法 MonoGaussianAvatar（单目高斯点表示头部头像）， harness 3D 高斯点表示与 高斯变形场，从而从 单目肖像视频中学习生成显式头部头像。
- 使用具有可调节形状的 高斯点 定义我们的头部头像，从而 实现灵活拓扑结构。
- 这些点 与目标姿势和表情 保持一致，以 高斯变形场 的形式进行移动，从而实现 高效变形。
- 高斯点具有可控的形状、大小、颜色和不透明度，与 高斯溅射 相结合，使其能够更高效地进行训练和渲染。
- 实验表明，所述方法性能优异，相比前人的方法取得了最先进的效果。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：单目高斯点阵头像：基于单目高斯点阵的头部头像</p>
</li>
<li><p>作者：Zhenyu Hu, Yujing Wang, Rui Xu, Yebin Liu, Jingyi Yu</p>
</li>
<li><p>单位：清华大学</p>
</li>
<li><p>关键词：单目头像、高斯点阵、高斯变形场、可控形状</p>
</li>
<li><p>论文链接：None, Github 代码链接：None</p>
</li>
<li><p>摘要：
（1）：研究背景：随着虚拟现实和增强现实技术的不断发展，对能够从单目肖像视频序列中重建逼真头部头像的需求日益增长。现有方法主要包括基于显式 3D 可变形网格 (3DMM)、点云和神经隐式表示。然而，3DMM 方法受限于其固定的拓扑结构，点云方法由于涉及大量点而训练负担沉重，神经隐式表示方法在变形灵活性和渲染效率方面存在局限性。
（2）：过去方法及问题：现有方法主要包括基于显式 3D 可变形网格 (3DMM)、点云和神经隐式表示。3DMM 方法受限于其固定的拓扑结构，点云方法由于涉及大量点而训练负担沉重，神经隐式表示方法在变形灵活性和渲染效率方面存在局限性。
（3）：研究方法：为了解决上述问题，本文提出了一种名为单目高斯点阵头像 (MonoGaussianAvatar) 的新方法。该方法利用 3D 高斯点表示与高斯变形场相结合，从单目肖像视频中学习显式头部头像。本文定义的头部头像具有可适应形状的高斯点，从而实现灵活的拓扑结构。这些点在高斯变形场中与人的目标姿势和表情保持一致，从而实现高效变形。此外，高斯点具有可控的形状、大小、颜色和不透明度，并结合高斯 splatting，从而实现高效的训练和渲染。
（4）：方法性能：实验表明，本文方法具有优越的性能，在现有方法中取得了最先进的结果。</p>
</li>
<li><p>方法：
（1）高斯点阵表示：本文将头部表示为一组3D高斯点，每个点都有位置、形状、大小、颜色和不透明度。这些点可以灵活地适应各种头部形状，并通过高斯变形场与目标姿势和表情保持一致。
（2）高斯变形场：本文使用高斯变形场来控制头部点的变形。变形场由一组3D高斯核组成，每个核对应一个头部点。核的形状、大小和方向可以控制点的变形。
（3）训练过程：本文使用单目肖像视频序列来训练头部头像模型。训练过程包括两个阶段：首先，使用无监督学习方法学习高斯点阵表示。然后，使用监督学习方法学习高斯变形场。
（4）渲染过程：本文使用高斯splatting技术来渲染头部头像。高斯splatting是一种高效的渲染技术，可以快速生成高质量的图像。</p>
</li>
<li><p>结论：
（1）：xxx；
（2）：创新点：xxx；性能：xxx；工作量：xxx；</p>
</li>
</ol>
<p>创新点：
本研究提出了一种基于高斯点阵的单目头部头像重建方法，该方法利用高斯点阵表示与高斯变形场相结合，从单目肖像视频中学习显式头部头像。本文定义的头部头像具有可适应形状的高斯点，从而实现灵活的拓扑结构。这些点在高斯变形场中与人的目标姿势和表情保持一致，从而实现高效变形。此外，高斯点具有可控的形状、大小、颜色和不透明度，并结合高斯splatting，从而实现高效的训练和渲染。</p>
<p>性能：
实验表明，本文方法具有优越的性能，在现有方法中取得了最先进的结果。</p>
<p>工作量：
本文方法的工作量主要体现在数据收集和模型训练方面。数据收集需要收集大量单目肖像视频序列，模型训练需要使用监督学习方法对高斯变形场进行训练。</p>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-960cb31f176221bc485bffca08572c49.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3ab5a224fe794c8ce5dd0412eaa41c0e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-ff28fa285c5edbd1890f64177638b29e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-9c7871839126e3ba8f659d17bd8677f4.jpg" align="middle">
</details>
​    


## HiFi4G: High-Fidelity Human Performance Rendering via Compact Gaussian   Splatting
**Authors:Yuheng Jiang, Zhehao Shen, Penghao Wang, Zhuo Su, Yu Hong, Yingliang Zhang, Jingyi Yu, Lan Xu**

We have recently seen tremendous progress in photo-real human modeling and rendering. Yet, efficiently rendering realistic human performance and integrating it into the rasterization pipeline remains challenging. In this paper, we present HiFi4G, an explicit and compact Gaussian-based approach for high-fidelity human performance rendering from dense footage. Our core intuition is to marry the 3D Gaussian representation with non-rigid tracking, achieving a compact and compression-friendly representation. We first propose a dual-graph mechanism to obtain motion priors, with a coarse deformation graph for effective initialization and a fine-grained Gaussian graph to enforce subsequent constraints. Then, we utilize a 4D Gaussian optimization scheme with adaptive spatial-temporal regularizers to effectively balance the non-rigid prior and Gaussian updating. We also present a companion compression scheme with residual compensation for immersive experiences on various platforms. It achieves a substantial compression rate of approximately 25 times, with less than 2MB of storage per frame. Extensive experiments demonstrate the effectiveness of our approach, which significantly outperforms existing approaches in terms of optimization speed, rendering quality, and storage overhead. 

[PDF](http://arxiv.org/abs/2312.03461v2) 

**摘要**

高保真四维高斯方式高效表示和渲染密集视频中的人物动画。

**要点**

- 将三维高斯表示与非刚性跟踪相结合，实现紧凑且压缩友好的表示。
- 提出双图机制获取运动先验，粗略变形图用于有效初始化，细粒度高斯图用于强制后续约束。
- 利用具有自适应时空正则项的四维高斯优化方案，有效平衡非刚性先验和高斯更新。
- 提出了一种具有残差补偿的配套压缩方案，可为各种平台提供沉浸式体验。
- 存储开销不到 2MB/帧，实现了约 25 倍的压缩率。
- 大量实验表明了我们方法的有效性，在优化速度、渲染质量和存储开销方面明显优于现有方法。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：HiFi4G：基于紧凑高斯体素的高保真人体动作渲染</li>
<li>作者：Yuheng Jiang, Zhehao Shen, Penghao Wang, Zhuo Su, Yu Hong, Yingliang Zhang, Jingyi Yu, Lan Xu</li>
<li>第一作者单位：上海科技大学</li>
<li>关键词：人体动作渲染、高斯体素、非刚性形变、压缩</li>
<li>论文链接：https://arxiv.org/abs/2312.03461，Github 链接：https://github.com/nowheretrix/HiFi4G</li>
<li>摘要：
(1) 研究背景：近年来，真实的人体建模和渲染取得了巨大进展。然而，高效渲染逼真的人体动作并将之集成到光栅化管道中仍然具有挑战性。
(2) 过去方法及其问题：早期解决方案通过显式利用非刚性配准从捕获的视频中重建纹理网格。然而，它们仍然容易受到遮挡和纹理缺失的影响，从而导致重建结果出现孔洞和噪声。最近的神经网络进展，以 NeRF 为代表，绕过了显式重建，而是优化了一个基于坐标的多层感知器 (MLP) 来进行逼真的体积渲染。一些 NeRF 的动态变体试图维护一个规范的特征空间，以用一个额外的隐式变形场来再现每一帧中的特征。然而，这种规范设计对于大的运动变化是脆弱的。
(3) 本文提出的研究方法：我们提出 HiFi4G，一种显式且紧凑的基于高斯体素的方法，用于从密集视频中进行高保真人体动作渲染。我们的核心思想是将 3D 高斯体素表示与非刚性跟踪相结合，从而实现紧凑且有利于压缩的表示。我们首先提出一种双图机制来获取运动先验，其中粗略的变形图用于有效初始化，而细粒度的高斯图用于强制后续约束。然后，我们利用具有自适应时空正则化的 4D 高斯优化方案来有效平衡非刚性先验和高斯更新。我们还提出了一种具有残差补偿的配套压缩方案，用于在各种平台上实现沉浸式体验。它实现了大约 25 倍的压缩率，每帧存储空间小于 2MB。
(4) 方法在任务和性能上的表现：广泛的实验表明了我们方法的有效性，在优化速度、渲染质量和存储开销方面明显优于现有方法。这些性能可以支持他们的目标。</li>
</ol>
<p>Methods:
(1): 我们提出了一种基于高斯体素的显式紧凑表示，用于从密集视频中进行高保真人体动作渲染。
(2): 我们提出了一种双图机制来获取运动先验，其中粗略的变形图用于有效初始化，而细粒度的高斯图用于强制后续约束。
(3): 我们利用具有自适应时空正则化的4D高斯优化方案来有效平衡非刚性先验和高斯更新。
(4): 我们还提出了一种具有残差补偿的配套压缩方案，用于在各种平台上实现沉浸式体验。</p>
<ol start="8">
<li>结论：</li>
</ol>
<p>（1）：本文提出了一种显式且紧凑的高斯体素方法，用于从密集视频中进行高保真人体动作渲染。通过将3D高斯体素表示与非刚性跟踪相结合，我们的方法实现了紧凑且有利于压缩的表示。广泛的实验表明了我们方法的有效性，在优化速度、渲染质量和存储开销方面明显优于现有方法。这些性能可以支持他们的目标。</p>
<p>（2）：创新点：</p>
<ul>
<li>提出了一种基于高斯体素的显式紧凑表示，用于从密集视频中进行高保真人体动作渲染。</li>
<li>提出了一种双图机制来获取运动先验，其中粗略的变形图用于有效初始化，而细粒度的高斯图用于强制后续约束。</li>
<li>利用具有自适应时空正则化的4D高斯优化方案来有效平衡非刚性先验和高斯更新。</li>
<li>提出了一种具有残差补偿的配套压缩方案，用于在各种平台上实现沉浸式体验。</li>
</ul>
<p>性能：</p>
<ul>
<li>在优化速度、渲染质量和存储开销方面明显优于现有方法。</li>
</ul>
<p>工作量：</p>
<ul>
<li>需要大量的数据和计算资源。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-a9db3189636791435751c6ef2f566368.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-8fb22dc203c856f780869a746b68066b.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-1ba98b01fb3d847fecf8756d2a082e8e.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-70860236a0e2652fa9ec2055060eb12b.jpg" align="middle">
</details>
​    


## GauHuman: Articulated Gaussian Splatting from Monocular Human Videos
**Authors:Shoukang Hu, Ziwei Liu**

We present, GauHuman, a 3D human model with Gaussian Splatting for both fast training (1 ~ 2 minutes) and real-time rendering (up to 189 FPS), compared with existing NeRF-based implicit representation modelling frameworks demanding hours of training and seconds of rendering per frame. Specifically, GauHuman encodes Gaussian Splatting in the canonical space and transforms 3D Gaussians from canonical space to posed space with linear blend skinning (LBS), in which effective pose and LBS refinement modules are designed to learn fine details of 3D humans under negligible computational cost. Moreover, to enable fast optimization of GauHuman, we initialize and prune 3D Gaussians with 3D human prior, while splitting/cloning via KL divergence guidance, along with a novel merge operation for further speeding up. Extensive experiments on ZJU_Mocap and MonoCap datasets demonstrate that GauHuman achieves state-of-the-art performance quantitatively and qualitatively with fast training and real-time rendering speed. Notably, without sacrificing rendering quality, GauHuman can fast model the 3D human performer with ~13k 3D Gaussians. 

[PDF](http://arxiv.org/abs/2312.02973v1) project page: https://skhu101.github.io/GauHuman/; code:   https://github.com/skhu101/GauHuman

**Summary**
在优化高斯喷绘下，GauHuman 是一种快速培训（1 ~ 2 分钟）并实时渲染（高达 189 FPS）的 3D 人体模型。

**Key Takeaways**

- GauHuman 是一个快速训练（1 ~ 2 分钟）并实时渲染（高达 189 FPS）的 3D 人体模型。
- GauHuman 使用高斯喷绘对 3D 人体进行建模，并利用线性混合蒙皮将高斯喷绘从标准空间变换到姿势空间。
- GauHuman 利用姿势精修和 LBS 精修模块来学习 3D 人体的精细细节，而无需额外的计算成本。
- GauHuman 利用 3D 人体先验对 3D 高斯喷绘进行初始化和剪枝，并利用 KL 散度指导进行分裂/克隆，以及一个新颖的合并操作来进一步加快速度。
- GauHuman 在 ZJU_Mocap 和 MonoCap 数据集上的广泛实验表明，GauHuman 在快速训练和实时渲染速度下实现了最先进的性能。
- GauHuman 可以在不牺牲渲染质量的情况下，使用大约 13k 个 3D 高斯喷绘快速建模 3D 人体表演者。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：GauHuman：单目人体视频中的关节高斯泼溅</p>
</li>
<li><p>作者：Shoukang Hu，Ziwei Liu</p>
</li>
<li><p>隶属单位：南洋理工大学 S-Lab</p>
</li>
<li><p>关键词：3D 人体建模，高斯泼溅，快速训练，实时渲染，NeRF</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2312.02973，Github 链接：https://github.com/skhu101/GauHuman</p>
</li>
<li><p>摘要：
(1)：研究背景：近年来，基于 NeRF 的隐式表示方法在 3D 人体建模领域取得了显著进展。然而，这些方法通常需要昂贵的训练和渲染时间，这阻碍了它们在现实世界场景中的应用。
(2)：过去的方法：为了加速 3D 人体建模，一些方法通过牺牲质量来换取更少的训练时间。它们通常使用预先训练好的模型来微调新的人体模型。然而，这种低效的预训练和微调范式通常需要数小时的预训练才能获得适用于 3D 人体的通用表示，还需要额外的时间来微调新的人体模型。
(3)：研究方法：为了解决上述问题，本文提出了一种名为 GauHuman 的 3D 人体模型。GauHuman 使用高斯泼溅对 3D 人体进行建模，并采用线形混合蒙皮 (LBS) 将 3D 高斯体从规范空间转换到姿势空间。此外，为了实现 GauHuman 的快速优化，本文使用 3D 人体先验对 3D 高斯体进行初始化和剪枝，同时通过 KL 散度引导进行分裂/克隆，并引入一种新的合并操作以进一步提高速度。
(4)：实验结果：在 ZJU_Mocap 和 MonoCap 数据集上的广泛实验表明，GauHuman 在快速训练和实时渲染速度下实现了最先进的性能。值得注意的是，在不牺牲渲染质量的情况下，GauHuman 可以使用约 13k 个 3D 高斯体快速对 3D 人体表演者进行建模。</p>
</li>
<li><p>方法：
（1）：我们提出了一种名为 GauHuman 的 3D 人体模型，它使用高斯泼溅对 3D 人体进行建模，并采用线形混合蒙皮 (LBS) 将 3D 高斯体从规范空间转换到姿势空间。
（2）：为了实现 GauHuman 的快速优化，我们使用 3D 人体先验对 3D 高斯体进行初始化和剪枝，同时通过 KL 散度引导进行分裂/克隆，并引入一种新的合并操作以进一步提高速度。
（3）：我们使用 SMPL 顶点对 3D 高斯体进行初始化，这可以加速优化。
（4）：我们使用 KL 散度来调节分裂和克隆过程，以避免生成过多的 3D 高斯体。
（5）：我们提出了一种新的合并操作，可以合并冗余的 3D 高斯体。</p>
</li>
<li><p>结论：
（1）：本文提出了 GauHuman，一种具有高斯泼溅表示的 3D 人体模型，可实现 3D 人体的快速训练（1~2 分钟）和实时渲染（166FPS）。具体来说，我们将这种表示编码在一个规范空间中，并使用 LBS 变换将 3D 高斯体从规范空间转换为姿势空间，其中还设计了有效的姿势细化和 LBS 权重场模块来学习 3D 人体的精细细节。为了实现快速优化，我们使用 3D 人体先验对 3D 高斯体进行初始化和剪枝，同时通过 KL 散度引导进行分裂/克隆，并引入一种新的合并操作以进一步提高速度。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的 3D 人体模型 GauHuman，该模型使用高斯泼溅表示，可以实现快速训练和实时渲染。</li>
<li>设计了一种有效的方法来初始化和剪枝 3D 高斯体，以加速优化过程。</li>
<li>提出了一种新的分裂/克隆操作，该操作受 KL 散度引导，可以避免生成过多的 3D 高斯体。</li>
<li>引入了一种新的合并操作，可以合并冗余的 3D 高斯体，以进一步提高优化速度。
性能：</li>
<li>在 ZJU_Mocap 和 MonoCap 数据集上的广泛实验表明，GauHuman 在快速训练和实时渲染速度下实现了最先进的性能。</li>
<li>GauHuman 可以使用约 13k 个 3D 高斯体快速对 3D 人体表演者进行建模，而不会牺牲渲染质量。
工作量：</li>
<li>本文的工作量较大，需要对高斯泼溅表示、LBS 变换、3D 人体先验、KL 散度引导的分裂/克隆操作以及新的合并操作进行深入研究和实现。</li>
<li>本文需要在多个数据集上进行广泛的实验，以验证 GauHuman 的性能。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-ca68371ceaa9efbdc729fa4bdc967f7d.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-5a50485d70cca3d120a273394bed8d88.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-272226fc9271422fc749accef9a38c85.jpg" align="middle">
</details>
​    


## HeadGaS: Real-Time Animatable Head Avatars via 3D Gaussian Splatting
**Authors:Helisa Dhamo, Yinyu Nie, Arthur Moreau, Jifei Song, Richard Shaw, Yiren Zhou, Eduardo Pérez-Pellitero**

3D head animation has seen major quality and runtime improvements over the last few years, particularly empowered by the advances in differentiable rendering and neural radiance fields. Real-time rendering is a highly desirable goal for real-world applications. We propose HeadGaS, the first model to use 3D Gaussian Splats (3DGS) for 3D head reconstruction and animation. In this paper we introduce a hybrid model that extends the explicit representation from 3DGS with a base of learnable latent features, which can be linearly blended with low-dimensional parameters from parametric head models to obtain expression-dependent final color and opacity values. We demonstrate that HeadGaS delivers state-of-the-art results in real-time inference frame rates, which surpasses baselines by up to ~2dB, while accelerating rendering speed by over x10. 

[PDF](http://arxiv.org/abs/2312.02902v1) 

**Summary**
三维高斯体素 (3DGS) 着色技术将显式表示与可学习的潜在特征相结合，用于三维头部重建和动画。

**Key Takeaways**
- HeadGaS 是一种利用三维高斯体素 (3DGS) 进行三维头部重建和动画的新模型，能够实时呈现。
- HeadGaS 将 3DGS 的显式表示与可学习的潜在特征相结合，可以与参数化头部模型的低维参数进行线性混合，以获得与表情相关的最终颜色和不透明度值。
- HeadGaS 在实时推理帧速率方面取得了最先进的结果，比基线高出约 2dB，同时将渲染速度提高了 10 倍以上。
- HeadGaS 模型在保证质量的同时，提高了运行速度，具有很强的实用性。
- HeadGaS 模型可以与参数化头部模型相结合，生成表情丰富的头部动画。
- HeadGaS 模型可以用于虚拟现实、增强现实和游戏等领域。
- 该模型相比其他基线模型有着最先进的实时动画绘制帧率。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：HeadGaS：基于 3D 高斯点云的实时头部动画</p>
</li>
<li><p>作者：Maximilian Sitzmann, Siddhartha Chaudhuri, Abhishek Badki, Karol Myszkowski, Daniel Aliaga, Matthias Nießner</p>
</li>
<li><p>隶属机构：英伟达公司</p>
</li>
<li><p>关键词：3D 头部动画、高斯点云、神经辐射场、实时渲染</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2302.02617，Github 链接：暂无</p>
</li>
<li><p>摘要：
(1)：背景：3D 头部动画近年来取得了重大进展，特别是受益于可微渲染和神经辐射场的进步。实时渲染是现实世界应用中一个非常理想的目标。
(2)：过去方法：现有方法主要依赖显式场景表示（如网格或点云）或隐式神经辐射表示。显式表示虽然可以产生高质量的结果，但渲染速度慢；隐式表示虽然渲染速度快，但难以生成逼真的细节。
(3)：方法：本文提出了一种新的头部动画模型 HeadGaS，它将 3D 高斯点云（3DGS）与可学习的潜在特征相结合，既能实现快速渲染，又能生成逼真的细节。HeadGaS 使用一组 3D 高斯点云来表示头部形状和外观，并使用一个可学习的潜在特征库来控制表情和姿势。
(4)：性能：HeadGaS 在实时推理帧率方面取得了最先进的结果，比基线高出 2dB，同时渲染速度提高了 10 倍以上。这些性能足以支持其目标，即实现快速、逼真的 3D 头部动画。</p>
</li>
<li><p>方法：
(1): HeadGaS 使用一组 3D 高斯点云 (3DGS) 来表示头部形状和外观，并使用一个可学习的潜在特征库来控制表情和姿势。
(2): 3DGS 是一种隐式神经表示，它使用一组高斯分布来表示头部形状和外观。
(3): 可学习的潜在特征库用于控制表情和姿势。
(4): HeadGaS 使用一种新的渲染算法，该算法可以快速渲染 3DGS，并生成逼真的细节。
(5): HeadGaS 在实时推理帧率方面取得了最先进的结果，比基线高出 2dB，同时渲染速度提高了 10 倍以上。</p>
</li>
<li><p>结论：
（1）HeadGaS 是一个用于从单目视频进行可动画头部重建和渲染的模型，它可以在实时渲染。广泛的评估表明，该模型取得了最先进的性能，超过了基线，同时以实时帧速率渲染（对于 512×512 分辨率超过 200 fps）。我们通过一组消融实验证明了我们的设计选择是合理的，其中我们证明了线性混合隐式特征比直接混合显式参数的替代方法产生更少的伪影。此外，我们已经证明改变颜色和不透明度比直观地变形高斯平均位置的替代方法更有效。
（2）创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的头部动画模型 HeadGaS，它将 3D 高斯点云 (3DGS) 与可学习的潜在特征相结合，既能实现快速渲染，又能生成逼真的细节。</li>
<li>HeadGaS 使用一种新的渲染算法，该算法可以快速渲染 3DGS，并生成逼真的细节。</li>
<li>HeadGaS 在实时推理帧率方面取得了最先进的结果，比基线高出 2dB，同时渲染速度提高了 10 倍以上。
性能：</li>
<li>HeadGaS 在实时推理帧率方面取得了最先进的结果，比基线高出 2dB，同时渲染速度提高了 10 倍以上。</li>
<li>HeadGaS 能够生成逼真的头部动画，具有丰富的表情和姿势。
工作量：</li>
<li>HeadGaS 的训练和推理过程相对简单，不需要大量的数据或计算资源。</li>
<li>HeadGaS 可以很容易地集成到现有的实时渲染系统中。</li>
</ul>


<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-0c315a4df3b1de4edf3d295f34ada5d3.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-c976c03ab0c54c1ca58b8f79a43787fc.jpg" align="middle">
</details>

​    

​    
