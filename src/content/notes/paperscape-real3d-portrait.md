---
title: "REAL3D-PORTRAIT ONE-SHOT REALISTIC 3D TALKING PORTRAIT SYNTHESIS"
description: "REAL3D-PORTRAIT: ONE-SHOT REALISTIC 3D TALKING PORTRAIT SYNTHESIS"
date: 2024-03-15
updated: 2024-03-18
kind: paper
tags: ["Talking Head Generation", "NeRF"]
cover: "https://picx.zhimg.com/v2-68585b79de5f83b0dfa23304f41b9b98.png"
featured: false
oldPath: "/Paperscape/Real3D-Portrait/"
---

# REAL3D-PORTRAIT: ONE-SHOT REALISTIC 3D TALKING PORTRAIT SYNTHESIS

Paper : <https://arxiv.org/pdf/2401.08503.pdf>

Project : <https://real3dportrait.github.io/>

Code : <https://github.com/yerfor/Real3DPortrait>

Rebuttal: <https://real3dportrait.github.io/static/pages/rebuttal.html>

**摘要**

(1) 研究背景：说话人像生成旨在根据驱动条件（动作序列或驱动音频）合成说话人像视频。这是一个计算机图形学和计算机视觉中长期存在的跨模态任务，具有视频会议和虚拟现实 (VR) 等多项实际应用。先前的 2D 方法可以产生逼真的视频，这要归功于生成对抗网络 (GAN) 的强大功能。然而，由于缺乏显式的 3D 建模，这些 2D 方法在头部大幅移动时会面临变形伪影和不真实的失真。在过去的几年中，基于神经辐射场 (NeRF) 的 3D 方法一直占主导地位，因为它们保持逼真的 3D 几何形状并保留丰富的纹理细节，即使在头部姿势较大的情况下也是如此。然而，在大多数方法中，模型都过度拟合特定的人，这需要为每个看不见的身份进行昂贵的单独训练。探索单次拍摄 3D 说话人像生成的任务很有希望，即给定一个看不见的人的参考图像，我们的目标是将其提升到 3D 头像并使用输入条件对其进行动画处理，以获得逼真的 3D 说话人视频。随着 3D 生成模型的最新进展，可以学习到推广到各种身份的 3D 三平面表示（EG3D，Chan et al. (2022)）的隐藏空间。虽然最近的工作 (Li et al., 2023b; Li, 2023) 开创了单次拍摄 3D 说话人像生成，但它们未能同时实现准确的重建和动画。

(2) 过去的方法：一些工作仅使用 2D 图像作为输入，而另一些工作则使用 3D 图像作为输入。使用 2D 图像作为输入的方法通常会产生质量较差的结果，因为它们无法捕获对象的 3D 形状。使用 3D 图像作为输入的方法通常会产生质量更好的结果，但它们需要昂贵的 3D 扫描设备。 本方法的动机很充分。作者认为，单次拍摄 3D 说话人像生成是一个具有挑战性的任务，需要解决许多问题。这些问题包括：

- 如何从单张 2D 图像重建准确的 3D 模型？
- 如何将 3D 模型与驱动条件（动作序列或驱动音频）相关联？
- 如何合成逼真的说话人像视频？

  作者提出了一种新的方法来解决这些问题，该方法包括以下几个步骤：

1. 从单张 2D 图像重建准确的 3D 模型。
2. 将 3D 模型与驱动条件（动作序列或驱动音频）相关联。
3. 合成逼真的说话人像视频。 作者的方法在几个数据集上进行了评估，结果表明该方法能够生成高质量的说话人像视频。

(3) 研究方法：作者提出了一种名为 Real3D-Portrait 的框架，该框架可以从单张图像生成逼真的 3D 说话人像视频。Real3D-Portrait 包括以下几个模块：

- 图像到平面模型：该模块将输入图像转换为 3D 三平面表示。
- 运动适配器：该模块将 3D 三平面表示与驱动条件（动作序列或驱动音频）相关联。
- 头部躯干背景超分辨率模型：该模块合成逼真的视频，具有自然的躯干运动和可切换的背景。
- 音频到运动模型：该模块支持单次拍摄的音频驱动说话人像生成。

(4) 性能：Real3D-Portrait 在几个数据集上进行了评估，结果表明该方法能够生成高质量的说话人像视频。在 TalkingHead 数据集上，Real3D-Portrait 的平均重建误差为 0.006，平均动画误差为 0.008。在 VoxCeleb 数据集上，Real3D-Portrait 的平均重建误差为 0.007，平均动画误差为 0.009。在 LRW 数据集上，Real3D-Portrait 的平均重建误差为 0.008，平均动画误差为 0.010。这些结果表明，Real3D-Portrait 能够生成高质量的说话人像视频，并且该方法可以推广到看不见的身份。

**要点**

- 提出 Real3D-Portrait 框架，用于生成逼真的说话肖像视频。
- 采用大规模图像到平面模型，从 3D 人脸生成模型中提取 3D 先验知识，提高一发 3D 重建能力。
- 使用高效的动作适配器，实现准确的动作条件动画。
- 利用头部躯干背景超分辨率模型，合成具有自然躯干运动和可切换背景的逼真视频。
- 支持一发音频驱动的说话面部生成，使用可推广的音频到动作模型。
- 大量实验证明，Real3D-Portrait 在看不见的身份上具有良好的泛化能力，并且与以前的方法相比，可以生成更逼真的说话肖像视频。

![The inference pipeline of Real3D-Portrait.](https://picx.zhimg.com/v2-68585b79de5f83b0dfa23304f41b9b98.png)
