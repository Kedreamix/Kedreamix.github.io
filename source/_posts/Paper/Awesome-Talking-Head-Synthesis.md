---
title: 超赞的数字人生成知识库  Awesome-Talking-Head-Synthesis
date: 2024-01-1 01:01:01
updated:
tags:
    - Talking Head Generation
    - 3DGS
    - NeRF
categories: Paper
keywords: Awesome-Talking-Head-Synthesis
description: 超赞的数字人生成知识库  Awesome-Talking-Head-Synthesis
cover: https://picx.zhimg.com/70/v2-de8deb9ec70dc554000936e71b7e907a.jpg
---

Gihub：https://github.com/Kedreamix/Awesome-Talking-Head-Synthesis

这份资源库整理了与生成对抗网络(GAN)和神经辐射场(NeRF)相关的论文、代码和资源,重点关注基于图像和音频的虚拟讲话头合成论文及已发布代码。

论文合集及发布代码整理。✍️

大多数论文链接到“arXiv”或学术会议/期刊的PDF。但是,一些论文可能需要学术许可才能查看。

这个Awesome Talking Head Synthesis项目将持续更新 - 欢迎Pull Request。如果您有任何论文缺失、新增论文、关键研究人员或错别字建议,请编辑提交PR。您也可以打开Issue或直接通过电子邮件联系我。

如果您觉得这个仓库有用,请star⭐支持!

**2023年12月更新 📆**

感谢https://github.com/Curated-Awesome-Lists/awesome-ai-talking-heads, 我增加了一些其内容,例如Tools&Software和Slides&Presentations模块。 希望这对您有帮助。

如果您对扩展这个聚合资源有任何想法或反馈,请打开Issue或PR——社区贡献对推进我们共同的知识至关重要。

让我们继续努力,实现更逼真的数字人脸表现!我们已经走了很长一段路,但还有很长的路要走。通过持续的研究和合作,我相信我们一定会达到目标!

如果您觉得这个仓库很有价值,请star⭐并分享给他人。您的支持可以激励我持续改进和维护它。如果您还有任何其他问题,请告诉我!



This repository organizes papers, codes and resources related to generative adversarial networks (GANs) 🤗 and neural radiance fields (NeRF) 🎨, with a main focus on image-driven and audio-driven talking head synthesis papers and released codes. 👤

Papers for Talking Head Synthesis, released codes collections. ✍️

Most papers are linked to PDFs on "arXiv" or journal/conference websites 📚. However, some papers require an academic license to view 🔐.

🔆 This project Awesome-Talking-Head-Synthesis is ongoing - pull requests are welcome! If you have any suggestions (missing papers, new papers, key researchers or typos), please feel free to edit and submit a PR. You can also open an issue or contact me directly via email. 📩

⭐ If you find this repo useful, please give it a star! 🤩



**2023.12 Update** 📆

Thank you to https://github.com/Curated-Awesome-Lists/awesome-ai-talking-heads, I have added some of its contents, such as `Tools & Software` and `Slides & Presentations`. 🙏 I hope this will be helpful.😊

If you have any feedback or ideas on extending this aggregated resource, please open an issue or PR - community contributions are vital to advancing this shared knowledge. 🤝

Let's keep pushing forward to recreate ever more realistic digital human faces! 💪 We've come so far but still have a long way to go. With continued research 🔬 and collaboration, I'm sure we'll get there! 🤗

Please feel free to star ⭐ and share this repo if you find it a valuable resource. Your support helps motivate me to keep maintaining and improving it. 🥰 Let me know if you have any other questions!



## Datasets

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/841257d9dee74547bbd4f717794a9492.png#pic_center)

| Dataset                       | Download Link                                                | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Faceforensics++               | [Download link](https://github.com/ondyari/FaceForensics)    |                                                              |
| CelebV                        | [Download link](https://drive.google.com/file/d/1jQ6d76T5GQuvQH4dq8_Wq1T0cxvN0_xp/view) |                                                              |
| VoxCeleb                      | [Download link](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/) | `VoxCeleb`, a comprehensive audio-visual dataset for speaker recognition, encompasses both VoxCeleb1 and VoxCeleb2 datasets. |
| VoxCeleb1                     | [Download link](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/vox1.html) | `VoxCeleb1` contains over 100,000 utterances for 1,251 celebrities, extracted from videos uploaded to YouTube. |
| VoxCeleb2                     | [Download link](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/vox2.html) | Extracted from YouTube videos, VoxCeleb2 includes video URLs and discourse timestamps. As the largest public audio-visual dataset, it is primarily used for speaker recognition tasks. However, it can also be utilized for training talking-head generation models. To obtain download permission and access the dataset, apply [here](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/). Requires 300 GB+ storage space. |
| ObamaSet                      | [Download link](https://github.com/supasorn/synthesizing_obama_network_training) | `ObamaSet` is a specialized audio-visual dataset focused on analyzing the visual speech of former US President Barack Obama. All video samples are collected from his weekly address footage. Unlike previous datasets, it exclusively centers on Barack Obama and does not provide any human annotations. |
| TalkingHead-1KH               | [Download link](https://github.com/tcwang0509/TalkingHead-1KH) | The dataset consists of 500k video clips, of which about 80k are greater than 512x512 resolution. Only videos under permissive licenses are included. Note that the number of videos differ from that in the original paper because a more robust preprocessing script was used to split the videos. |
| LRW (Lip Reading in the Wild) | [Download link](https://www.robots.ox.ac.uk/~vgg/data/lip_reading/lrw1.html) | LRW, a diverse English-speaking video dataset from the BBC program, features over 1000 speakers with various speaking styles and head poses. Each video is 1.16 seconds long (29 frames) and involves the target word along with context. |
| MEAD 2020                     | [Download link](https://github.com/uniBruce/Mead)            | MEAD 2020 is a Talking Head dataset annotated with emotion labels and intensity labels. The dataset focuses on facial generation for natural emotional speech, covering eight different emotions on three intensity levels. |
| CelebV-HQ                     | [Download link](https://github.com/CelebV-HQ/CelebV-HQ)      | CelebV-HQ is a high-quality video dataset comprising 35,666 clips with a resolution of at least 512x512. It includes 15,653 identities, and each clip is manually labeled with 83 facial attributes, spanning appearance, action, and emotion. The dataset's diversity and temporal coherence make it a valuable resource for tasks like unconditional video generation and video facial attribute editing. |
| HDTF                          | [Download link](https://github.com/MRzzm/HDTF)               | HDTF, the High-definition Talking-Face Dataset, is a large in-the-wild high-resolution audio-visual dataset consisting of approximately 362 different videos totaling 15.8 hours. Original video resolutions are 720 P or 1080 P, and each cropped video is resized to 512 × 512. |
| CREMA-D                       | [Download link](https://github.com/CheyneyComputerScience/CREMA-D) | CREMA-D is a diverse dataset with 7,442 original clips featuring 91 actors, including 48 male and 43 female actors aged 20 to 74, representing various races and ethnicities. The dataset includes recordings of actors speaking from a set of 12 sentences, expressing six different emotions (Anger, Disgust, Fear, Happy, Neutral, and Sad) at four emotion levels (Low, Medium, High, and Unspecified). Emotion and intensity ratings were gathered through crowd-sourcing, with 2,443 participants rating 90 unique clips each (30 audio, 30 visual, and 30 audio-visual). Over 95% of the clips have more than 7 ratings. For additional details on CREMA-D, refer to the [paper link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4313618/). |
| LRS2                          | [Download link](https://www.robots.ox.ac.uk/~vgg/data/lip_reading/lrs2.html) | LRS2 is a lip reading dataset that includes videos recorded in diverse settings, suitable for studying lip reading and visual speech recognition. |
| GRID                          | [Download link](http://spandh.dcs.shef.ac.uk/avlombard/)     | The GRID dataset was recorded in a laboratory setting with 34 volunteers, each speaking 1000 phrases, totaling 34,000 utterance instances. Phrases follow specific rules, with six words randomly selected from six categories: "command," "color," "preposition," "letter," "number," and "adverb." Access the dataset [here](https://spandh.dcs.shef.ac.uk/gridcorpus/). |
| SAVEE                         | [Download link](http://kahlan.eps.surrey.ac.uk/savee/Download.html) | The SAVEE (Surrey Audio-Visual Expressed Emotion) database is a crucial component for developing an automatic emotion recognition system. It features recordings from 4 male actors expressing 7 different emotions, totaling 480 British English utterances. These sentences, selected from the standard TIMIT corpus, are phonetically balanced for each emotion. Recorded in a high-quality visual media lab, the data undergoes processing and labeling. Performance evaluation involves 10 subjects rating recordings under audio, visual, and audio-visual conditions. Classification systems for each modality achieve speaker-independent recognition rates of 61%, 65%, and 84% for audio, visual, and audio-visual, respectively. |
| BIWI(3D)                      | [Download link](https://data.vision.ee.ethz.ch/cvl/datasets/b3dac2.en.html) | The Biwi 3D Audiovisual Corpus of Affective Communication serves as a compromise between data authenticity and quality, acquired at ETHZ in collaboration with SYNVO GmbH. |
| VOCA                          | [Download link](https://voca.is.tue.mpg.de/)                 | VOCA is a 4D-face dataset with approximately 29 minutes of 4D face scans and synchronized audio from 12-bit speakers. It greatly facilitates research in 3D VSG. |
| Multiface(3D)                 | [Download link](https://github.com/facebookresearch/multiface) | The Multiface Dataset consists of high-quality multi-view video recordings of 13 people displaying various facial expressions. It contains approximately 12,200 to 23,000 frames per subject, captured at 30 fps from around 40 to 160 camera views with uniform lighting. The dataset's size is 65TB and includes raw images (2048x1334 resolution), tracked and meshed heads, 1024x1024 unwrapped face textures, camera calibration metadata, and audio. This repository provides code for downloading the dataset and building a codec avatar using a deep appearance model. |
| MMFace4D                      | [Download link](https://wuhaozhe.github.io/mmface4d/)        | The MMFace4D dataset is a large-scale multi-modal dataset for audio-driven 3D facial animation research. It contains over 35,000 sequences captured from 431 subjects ranging in age from 15 to 68 years old. Various sentences from scenarios such as news broadcasting, conversations and storytelling were recorded, totaling around 11,000 utterances. High-fidelity data was captured using three synchronized RGB-D cameras to obtain high-resolution 3D meshes and textures. A reconstruction pipeline was developed to fuse the multi-view data and generate topology-consistent 3D mesh sequences. In addition to the 3D facial motions, synchronized speech audio is also provided. The final dataset covers a wide range of expressive talking styles and facial expressions through a diverse set of subjects and utterances. With its large scale, high quality of data and strong diversity, the MMFace4D dataset provides an ideal benchmark for developing and evaluating audio-driven 3D facial animation models. |

---



## Survey

| Year | Title                                                        | Conference/Journal |
| ---- | ------------------------------------------------------------ | ------------------ |
| 2024 | [A Survey on 3D Gaussian Splatting](https://arxiv.org/pdf/2401.03890.pdf) 3DGS🔥🔥🔥**on going** | arXiv 2024         |
| 2024 | [Neural Radiance Fields: Past, Present, and Future](https://arxiv.org/pdf/2304.10050.pdf)  NeRF🔥🔥🔥 **Amazing 413 pages** | arXiv 2024         |
| 2023 | [From Pixels to Portraits: A Comprehensive Survey of Talking Head Generation Techniques and Applications](https://arxiv.org/abs/2308.16041) | arXiv 2023         |
| 2023 | [Human-Computer Interaction System: A Survey of Talking-Head Generation](https://www.mdpi.com/2079-9292/12/1/218) | IEEE               |
| 2023 | [Talking human face generation: A survey](https://dl.acm.org/doi/10.1016/j.eswa.2023.119678) | ACM                |
| 2022 | [Deep Learning for Visual Speech Analysis: A Survey](https://arxiv.org/abs/2205.10839) | arXiv 2022         |
| 2020 | [What comprises a good talking-head video generation?: A Survey and Benchmark](https://arxiv.org/abs/2005.03201) | arXiv 2020         |

---



## Funny Work

| Year | Title                                                        | Code                                                         | Project                                                      | Keywords                  |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| 2024 | [Audio2Photoreal] [From Audio to Photoreal Embodiment: Synthesizing Humans in Conversations](https://arxiv.org/pdf/2401.01885.pdf) | [Code](https://github.com/facebookresearch/audio2photoreal/) | [Project](https://people.eecs.berkeley.edu/~evonne_ng/projects/audio2photoreal/#) | Photoreal                 |
| 2024 | [Animate Anyone] [Animate Anyone: Consistent and Controllable Image-to-Video Synthesis for Character Animation](https://arxiv.org/pdf/2311.17117.pdf) | [Code](https://github.com/HumanAIGC/AnimateAnyone)           | [Project](https://humanaigc.github.io/animate-anyone/)       | 🔥Animate (阿里科目三驱动) |
| 2024 | [3DGAN] [What You See Is What You GAN: Rendering Every Pixel for High-Fidelity Geometry in 3D GANs](https://research.nvidia.com/labs/nxp/wysiwyg/media/WYSIWYG.pdf) |                                                              | [Project](https://research.nvidia.com/labs/nxp/wysiwyg/)     | 🔥Nvidia                   |

---



## Audio-driven

| Year | Title                                                        | Conference/Journal    | Code                                                         | Project                                                      | Keywords               |
| ---- | ------------------------------------------------------------ | --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| 2024 | [Real3D-Portrait] [Real3D-Portrait: One-shot Realistic 3D Talking Portrait Synthesis](http://arxiv.org/abs/2401.08503v2) | ICLR 2024             |                                                              | [Project](https://real3dportrait.github.io/)                 | 3D, One-Shot,Realistic |
| 2024 | [AdaMesh] [AdaMesh: Personalized Facial Expressions and Head Poses for Adaptive   Speech-Driven 3D Facial Animation](http://arxiv.org/abs/2310.07236v2) | Arix 2024             | [Code](https://github.com/adamesh/adamesh)                   | [Project](https://adamesh.github.io)                         | 3D,Mesh                |
| 2024 | [DREAM-Talk] [DREAM-Talk: Diffusion-based Realistic Emotional Audio-driven Method for Single Image Talking Face Generation](http://arxiv.org/abs/2312.13578v1) | Arix 2024             |                                                              | [Project](https://magic-research.github.io/dream-talk/)      | Emotion                |
| 2024 | [AE-NeRF] [AE-NeRF: Audio Enhanced Neural Radiance Field for Few Shot Talking Head Synthesis](http://arxiv.org/abs/2312.10921v1) | AAAI 2024             |                                                              |                                                              |                        |
| 2024 | [VectorTalker] [VectorTalker: SVG Talking Face Generation with Progressive Vectorisation](http://arxiv.org/abs/2312.11568v1) | Arix 2024             |                                                              |                                                              | SVG                    |
| 2024 | [VectorTalker] [VectorTalker: SVG Talking Face Generation with Progressive Vectorisation](http://arxiv.org/abs/2312.11568v1) | Arix 2024             |                                                              |                                                              |                        |
| 2024 | [Mimic] [Mimic: Speaking Style Disentanglement for Speech-Driven 3D Facial Animation](http://arxiv.org/abs/2312.10877v1) | AAAI 2024             |                                                              |                                                              | 3D                     |
| 2024 | [DreamTalk] [DreamTalk: When Expressive Talking Head Generation Meets Diffusion Probabilistic Models](http://arxiv.org/abs/2312.09767v1) | Arix 2024             | [Code](https://github.com/damo-vilab/i2vgen-xl)              | [Project](https://dreamtalk-project.github.io)               | Diffusion              |
| 2024 | [FaceTalk] [FaceTalk: Audio-Driven Motion Diffusion for Neural Parametric Head Models](http://arxiv.org/abs/2312.08459v1) | Arix 2024             | [Code](https://github.com/shivangi-aneja/FaceTalk)           | [Project](https://shivangi-aneja.github.io/projects/facetalk/) |                        |
| 2024 | [GSmoothFace] [GSmoothFace: Generalized Smooth Talking Face Generation via Fine Grained   3D Face Guidance](http://arxiv.org/abs/2312.07385v1) | Arix 2024             |                                                              |                                                              | 3D                     |
| 2024 | [GMTalker] [GMTalker: Gaussian Mixture based Emotional talking video Portraits](http://arxiv.org/abs/2312.07669v1) | Arix 2024             |                                                              | [Project](https://bob35buaa.github.io/GMTalker)              | Emotion                |
| 2024 | [VividTalk] [VividTalk: One-Shot Audio-Driven Talking Head Generation Based on 3D Hybrid Prior](http://arxiv.org/abs/2312.01841v2) | Arix 2024             |                                                              |                                                              | Mesh                   |
| 2024 | [GAIA] [GAIA: Zero-shot Talking Avatar Generation](https://arxiv.org/pdf/2311.15230.pdf) | Arix 2024             | Code(coming)                                                 | [Project](https://microsoft.github.io/GAIA/)                 | 😲😲😲                    |
| 2023 | [Implicit Identity Representation Conditioned Memory Compensation Network for Talking Head Video Generation](https://arxiv.org/abs/2307.10008) | ICCV 2023             | [Code](https://github.com/harlanhong/ICCV2023-MCNET)         | [Project](https://harlanhong.github.io/publications/mcnet.html) | -                      |
| 2023 | [ToonTalker] [ToonTalker: Cross-Domain Face Reenactment](https://openaccess.thecvf.com/content/ICCV2023/papers/Gong_ToonTalker_Cross-Domain_Face_Reenactment_ICCV_2023_paper.pdf) | ICCV 2023             | -                                                            | -                                                            | -                      |
| 2023 | [Efficient Emotional Adaptation for Audio-Driven Talking-Head Generation](https://arxiv.org/abs/2309.04946) | ICCV 2023             | [Code](https://github.com/yuangan/EAT_code)                  | [Project](https://yuangan.github.io/eat/)                    | -                      |
| 2023 | [EMMN] [EMMN: Emotional Motion Memory Network for Audio-driven Emotional Talking Face Generation](https://openaccess.thecvf.com/content/ICCV2023/papers/Tan_EMMN_Emotional_Motion_Memory_Network_for_Audio-driven_Emotional_Talking_Face_ICCV_2023_paper.pdf) | ICCV 2023             | -                                                            | -                                                            | Emotion                |
| 2023 | [Emotional Listener Portrait: Realistic Listener Motion Simulation in Conversation](https://openaccess.thecvf.com/content/ICCV2023/papers/Song_Emotional_Listener_Portrait_Neural_Listener_Head_Generation_with_Emotion_ICCV_2023_paper.pdf) | ICCV 2023             | -                                                            | -                                                            | Emotion,LHG            |
| 2023 | [MODA] [MODA: Mapping-Once Audio-driven Portrait Animation with Dual Attentions](https://arxiv.org/abs/2307.10008) | ICCV 2023             | -                                                            | -                                                            | -                      |
| 2023 | [Facediffuser] [Facediffuser: Speech-driven 3d facial animation synthesis using diffusion](https://dl.acm.org/doi/abs/10.1145/3623264.3624447) | ACM SIGGRAPH MIG 2023 | [Code](https://github.com/uuembodiedsocialai/FaceDiffuser)   | [Project](https://uuembodiedsocialai.github.io/FaceDiffuser/) | 🔥Diffusion,3D          |
| 2023 | [Audio-Driven Dubbing for User Generated Contents via Style-Aware Semi-Parametric Synthesis](https://arxiv.org/abs/2309.00030) | TCSVT 2023            | -                                                            | -                                                            |                        |
| 2023 | [SadTalker] [SadTalker: Learning Realistic 3D Motion Coefficients for Stylized Audio-Driven Single Image Talking Face Animation](https://arxiv.org/pdf/2211.12194.pdf) | CVPR 2023             | [Code](https://github.com/Winfredy/SadTalker)                | [Project](https://sadtalker.github.io/)                      | 3D,Single Image        |
| 2023 | [EmoTalk] [EmoTalk: Speech-Driven Emotional Disentanglement for 3D Face Animation](https://arxiv.org/abs/2303.11089) | ICCV 2023             | [Code](https://github.com/ZiqiaoPeng/EmoTalk)                |                                                              | 3D,Emotion             |
| 2023 | [Emotional Talking Head Generation based on Memory-Sharing and Attention-Augmented Networks](https://arxiv.org/abs/2306.03594) | InterSpeech 2023      |                                                              |                                                              | Emotion                |
| 2023 | [DINet] [DINet: Deformation Inpainting Network for Realistic Face Visually Dubbing on High Resolution Video](https://fuxivirtualhuman.github.io/pdf/AAAI2023_FaceDubbing.pdf) | AAAI 2023             | [Code](https://github.com/MRzzm/DINet)                       | -                                                            |                        |
| 2023 | [StyleTalk] [StyleTalk: One-shot Talking Head Generation with Controllable Speaking Styles](https://arxiv.org/abs/2301.01081) | AAAI 2023             | [Code](https://github.com/FuxiVirtualHuman/styletalk)        | -                                                            | Style                  |
| 2023 | [High-fidelity Generalized Emotional Talking Face Generation with Multi-modal Emotion Space Learning](https://arxiv.org/abs/2305.02572) | CVPR 2023             | -                                                            | -                                                            | Emotion                |
| 2023 | [StyleSync] [StyleSync: High-Fidelity Generalized and Personalized Lip Sync in Style-based Generator](https://arxiv.org/pdf/2305.05445.pdf) | CVPR 2023             | [Code](https://github.com/guanjz20/StyleSync)                | [Project](https://hangz-nju-cuhk.github.io/projects/StyleSync) | -                      |
| 2023 | [TalkLip] [TalkLip: Seeing What You Said - Talking Face Generation Guided by a Lip Reading Expert](https://arxiv.org/pdf/2303.17480.pdf) | CVPR 2023             | [Code](https://github.com/Sxjdwang/TalkLip)                  | -                                                            | -                      |
| 2023 | [CodeTalker] [CodeTalker: Speech-Driven 3D Facial Animation with Discrete Motion Prior](https://arxiv.org/abs/2301.02379) | CVPR 2023             | [Code](https://github.com/Doubiiu/CodeTalker)                | [Project](https://doubiiu.github.io/projects/codetalker/)    | 3D,codebook            |
| 2023 | [EmoGen] [Emotionally Enhanced Talking Face Generation](https://arxiv.org/pdf/2303.11548.pdf) | Arxiv 2023            | [Code](https://github.com/sahilg06/EmoGen)                   | -                                                            | Emotion                |
| 2023 | [DAE-Talker] [DAE-Talker: High Fidelity Speech-Driven Talking Face Generation with Diffusion Autoencoder](https://arxiv.org/pdf/2303.17550.pdf) | Arxiv 2023            | -                                                            | [Project](https://mstypulkowski.github.io/diffusedheads/)    | 🔥Diffusion             |
| 2023 | [READ] [READ Avatars: Realistic Emotion-controllable Audio Driven Avatars](READ Avatars: Realistic Emotion-controllable Audio Driven Avatars) | Arxiv 2023            | -                                                            | -                                                            | -                      |
| 2023 | [DiffTalk] [DiffTalk: Crafting Diffusion Models for Generalized Talking Head Synthesis](https://arxiv.org/abs/2301.03786) | CVPR 2023             | [Code](https://github.com/sstzal/DiffTalk)                   | [Project](https://sstzal.github.io/DiffTalk/)                | 🔥Diffusion             |
| 2023 | [Diffused Heads] [Diffused Heads: Diffusion Models Beat GANs on Talking-Face Generation](https://mstypulkowski.github.io/diffusedheads/diffused_heads.pdf) | Arxiv 2023            | -                                                            | [Project](https://mstypulkowski.github.io/diffusedheads/)    | 🔥Diffusion             |
| 2022 | [MemFace] [Expressive Talking Head Generation with Granular Audio-Visual Control](https://openaccess.thecvf.com/content/CVPR2022/papers/Liang_Expressive_Talking_Head_Generation_With_Granular_Audio-Visual_Control_CVPR_2022_paper.pdf) | CVPR 2022             | -                                                            | -                                                            | -                      |
| 2022 | [Talking Face Generation with Multilingual TTS](https://openaccess.thecvf.com/content/CVPR2022/papers/Song_Talking_Face_Generation_With_Multilingual_TTS_CVPR_2022_paper.pdf) | CVPR 2022             | [Demo Track](https://huggingface.co/spaces/CVPR/ml-talking-face) | -                                                            | -                      |
| 2022 | [EAMM] [EAMM: One-Shot Emotional Talking Face via Audio-Based Emotion-Aware Motion Model](https://arxiv.org/pdf/2205.15278.pdf) | SIGGRAPH 2022         | -                                                            | -                                                            | Emotion                |
| 2022 | [SPACEx] [SPACEx 🚀: Speech-driven Portrait Animation with Controllable Expression](https://arxiv.org/pdf/2211.09809.pdf) | arXiv 2022            | -                                                            | [Project](https://deepimagination.cc/SPACEx/)                | -                      |
| 2022 | [AV-CAT] [Masked Lip-Sync Prediction by Audio-Visual Contextual Exploitation in Transformers](https://arxiv.org/pdf/2212.04970.pdf) | SIGGRAPH Asia 2022    | -                                                            | -                                                            | -                      |
| 2022 | [MemFace] [Memories are One-to-Many Mapping Alleviators in Talking Face Generation](https://arxiv.org/pdf/2212.05005.pdf) | arXiv 2022            | -                                                            | -                                                            | -                      |
| 2021 | [PC-AVS] [PC-AVS: Pose-Controllable Talking Face Generation by Implicitly Modularized Audio-Visual Representation](https://arxiv.org/abs/2104.11116) | CVPR 2021             | [Code](https://github.com/Hangz-nju-cuhk/Talking-Face_PC-AVS) | [Project](https://hangz-nju-cuhk.github.io/projects/PC-AVS)  | -                      |
| 2021 | [IATS] [Imitating Arbitrary Talking Style for Realistic Audio-Driven Talking Face Synthesis](https://arxiv.org/abs/2111.00203) | ACM MM 2021           | -                                                            | -                                                            | -                      |
| 2021 | [Speech2Talking-Face] [Speech2Talking-Face: Inferring and Driving a Face with Synchronized Audio-Visual Representation](https://www.ijcai.org/proceedings/2021/0141.pdf) | IJCAI 2021            | -                                                            | -                                                            | -                      |
| 2021 | [FAU] [Talking Head Generation with Audio and Speech Related Facial Action Units](https://arxiv.org/pdf/2110.09951.pdf) | BMVC 2021             | -                                                            | -                                                            | AU                     |
| 2021 | [EVP] [Audio-Driven Emotional Video Portraits](https://openaccess.thecvf.com/content/CVPR2021/papers/Ji_Audio-Driven_Emotional_Video_Portraits_CVPR_2021_paper.pdf) | CVPR 2021             | [Code](https://github.com/jixinya/EVP)                       | -                                                            | Emotion                |
| 2021 | [IATS] [IATS: Imitating Arbitrary Talking Style for Realistic Audio-Driven Talking Face Synthesis](https://dl.acm.org/doi/pdf/10.1145/3474085.3475280) | ACM Multimedia 2021   | -                                                            | -                                                            | -                      |
| 2020 | [Wav2Lip] [A Lip Sync Expert Is All You Need for Speech to Lip Generation In The Wild](http://arxiv.org/pdf/2008.10010.pdf) | ACM Multimedia 2020   | [Code](https://github.com/Rudrabha/Wav2Lip)                  | [Project](http://cvit.iiit.ac.in/research/projects/cvit-projects/a-lip-sync-expert-is-all-you-need-for-speech-to-lip-generation-in-the-wild/) | -                      |
| 2020 | [RhythmicHead] [Talking-head Generation with Rhythmic Head Motion](https://arxiv.org/pdf/2007.08547v1.pdf) | ECCV 2020             | [Code](https://github.com/lelechen63/Talking-head-Generation-with-Rhythmic-Head-Motion) | -                                                            | -                      |
| 2020 | [MakeItTalk] [Speaker-Aware Talking-Head Animation](https://arxiv.org/pdf/2006.09661.pdf) | SIGGRAPH Asia 2020    | [Code](https://github.com/yzhou359/MakeItTalk)               | [Project](https://people.umass.edu/~yangzhou/MakeItTalk/)    | -                      |
| 2020 | [Neural Voice Puppetry] [Audio-driven Facial Reenactment](https://arxiv.org/pdf/1912.05566.pdf) | ECCV 2020             | -                                                            | [Project](https://justusthies.github.io/posts/neural-voice-puppetry/) | -                      |
| 2020 | [MEAD] [A Large-scale Audio-visual Dataset for Emotional Talking-face Generation](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123660698.pdf) | ECCV 2020             | [Code](https://github.com/uniBruce/Mead)                     | [Project](https://wywu.github.io/projects/MEAD/MEAD.html)    | -                      |
| 2020 | [Realistic Speech-Driven Facial Animation with GANs](https://arxiv.org/pdf/1906.06337.pdf) | IJCV 2020             | -                                                            | -                                                            | -                      |
| 2019 | [DAVS] [Talking Face Generation by Adversarially Disentangled Audio-Visual Representation](https://arxiv.org/pdf/1807.07860.pdf) | AAAI 2019             | [Code](https://github.com/Hangz-nju-cuhk/Talking-Face-Generation-DAVS) | -                                                            | -                      |
| 2019 | [ATVGnet] [Hierarchical Cross-modal Talking Face Generation with Dynamic Pixel-wise Loss](https://www.cs.rochester.edu/~cxu22/p/cvpr2019_facegen_paper.pdf) | CVPR 2019             | [Code](https://github.com/lelechen63/ATVGnet)                | -                                                            | -                      |
| 2018 | [Lip Movements Generation at a Glance](https://openaccess.thecvf.com/content_ECCV_2018/papers/Lele_Chen_Lip_Movements_Generation_ECCV_2018_paper.pdf) | ECCV 2018             | [Code](https://github.com/lelechen63/3d_gan)                 | -                                                            | -                      |
| 2018 | [VisemeNet] [Audio-Driven Animator-Centric Speech Animation](https://arxiv.org/pdf/1805.09488.pdf) | SIGGRAPH 2018         | -                                                            | -                                                            | -                      |
| 2017 | [Synthesizing Obama] [Learning Lip Sync From Audio](https://grail.cs.washington.edu/projects/AudioToObama/siggraph17_obama.pdf) | SIGGRAPH 2017         | -                                                            | [Project](https://grail.cs.washington.edu/projects/AudioToObama/) | -                      |
| 2017 | [You Said That?] [Synthesising Talking Faces From Audio](https://arxiv.org/abs/1705.02966) | BMVC 2019             | [Code](https://github.com/joonson/yousaidthat)               | -                                                            | -                      |
| 2017 | [Audio-Driven Facial Animation by Joint End-to-End Learning of Pose and Emotion](https://users.aalto.fi/~laines9/publications/karras2017siggraph_paper.pdf) | SIGGRAPH 2017         | -                                                            | -                                                            | -                      |
| 2017 | [A Deep Learning Approach for Generalized Speech Animation](https://home.ttic.edu/~taehwan/taylor_etal_siggraph2017.pdf) | SIGGRAPH 2017         | -                                                            | -                                                            | -                      |
| 2016 | [LRW] [Lip Reading in the Wild](https://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16/chung16.pdf) | ACCV 2016             | -                                                            | -                                                            | -                      |


---



## Text-driven

| Year | Title                                                        | Conference/Journal | Code/Proj                                                   |
| ---- | ------------------------------------------------------------ | ------------------ | ----------------------------------------------------------- |
| 2023 | [TalkCLIP: Talking Head Generation with Text-Guided Expressive Speaking Styles](https://arxiv.org/pdf/2304.00334.pdf) | Arxiv              |                                                             |
| 2021 | [Write-a-speaker: Text-based Emotional and Rhythmic Talking-head Generation](https://arxiv.org/abs/2104.07995) | AAAI               | [Code](https://github.com/FuxiVirtualHuman/Write-a-Speaker) |
| 2021 | [Txt2vid: Ultra-low bitrate compression of talking-head videos via text](https://arxiv.org/abs/2106.14014v3) | Arxiv              | [Code](https://github.com/tpulkit/txt2vid)                  |

---



## NeRF & 3D & Gaussian Splatting

| Year | Title                                                        | Conference/Journal | Code                                                     | Project                                                     | Keywords                            |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------- |
| 2024 | [UltrAvatar] [UltrAvatar: A Realistic Animatable 3D Avatar Diffusion Model with Authenticity Guided Textures](http://arxiv.org/abs/2401.11078v1) | Arxiv 2024         |                                                          | [Project](http://usrc-sea.github.io/UltrAvatar/)            | Diffusion,Avatar                    |
| 2024 | [GaussianBody] [GaussianBody: Clothed Human Reconstruction via 3d Gaussian Splatting](http://arxiv.org/abs/2401.09720v1) | Arxiv 2024         |                                                          |                                                             | 🔥Gaussian Splatting                 |
| 2024 | [FED-NeRF: Achieve High 3D Consistency and Temporal Coherence for Face Video Editing on Dynamic NeRF](http://arxiv.org/abs/2401.02616v1) |                    | [Code](https://github.com/ZHANG1023/FED-NeRF)            |                                                             | 4D face video editor                |
| 2024 | [AGG] [AGG: Amortized Generative 3D Gaussians for Single Image to 3D](http://arxiv.org/abs/2401.04099v1) | Arxiv 2024         |                                                          | [Project](https://ir1d.github.io/AGG/)                      | 🔥Gaussian Splatting                 |
| 2024 | [Gaussian Shadow Casting for Neural Characters](http://arxiv.org/abs/2401.06116v1) | Arxiv 2024         |                                                          |                                                             | 🔥Gaussian Splatting                 |
| 2024 | [Human101] [Human101: Training 100+FPS Human Gaussians in 100s from 1 View](http://arxiv.org/abs/2312.15258v1) | Arxiv 2024         |                                                          | [Project](https://github.com/longxiang-ai/Human101)         | 🔥Gaussian Splatting                 |
| 2024 | [Deformable 3D Gaussian Splatting for Animatable Human Avatars](http://arxiv.org/abs/2312.15059v1) | Arxiv 2024         |                                                          |                                                             | 🔥Gaussian Splatting                 |
| 2024 | [4DGen] [4DGen: Grounded 4D Content Generation with Spatial-temporal Consistency](http://arxiv.org/abs/2312.17225v1) | Arxiv 2024         |                                                          | [Project](https://vita-group.github.io/4DGen/ )             | 🔥Gaussian Splatting                 |
| 2024 | [3DGAN] [What You See Is What You GAN: Rendering Every Pixel for High-Fidelity Geometry in 3D GANs](https://research.nvidia.com/labs/nxp/wysiwyg/media/WYSIWYG.pdf) | Arxiv 2024         |                                                          | [Project](https://research.nvidia.com/labs/nxp/wysiwyg/)    |                                     |
| 2024 | [3DGS-Avatar] [3DGS-Avatar: Animatable Avatars via Deformable 3D Gaussian Splatting](http://arxiv.org/abs/2312.09228v2) | Arxiv 2024         | [Code](https://github.com/mikeqzy/3dgs-avatar-release)   | [Project](https://neuralbodies.github.io/3DGS-Avatar)       | 🔥Gaussian Splatting                 |
| 2024 | [Learning Dense Correspondence for NeRF-Based Face Reenactment](http://arxiv.org/abs/2312.10422v2) | AAAI 2024          |                                                          |                                                             | one-shot multi-view face reenactmen |
| 2024 | [R2-Talker] [R2-Talker: Realistic Real-Time Talking Head Synthesis with Hash Grid Landmarks Encoding and Progressive Multilayer Conditioning](http://arxiv.org/abs/2312.05572v1) | Arxiv 2024         |                                                          |                                                             | based-RAD-NeRF                      |
| 2024 | [GaussianHead] [GaussianHead: Impressive 3D Gaussian-based Head Avatars with Dynamic Hybrid Neural Field](https://arxiv.org/abs/2312.01632) | Arxiv 2024         | [Code](https://github.com/chiehwangs/gaussian-head)      |                                                             | 🔥Gaussian Splatting                 |
| 2024 | [MonoGaussianAvatar] [MonoGaussianAvatar: Monocular Gaussian Point-based Head Avatar](https://arxiv.org/abs/2312.00846) | Arxiv 2024         |                                                          |                                                             | 🔥Gaussian Splatting                 |
| 2024 | [Gaussian Head Avatar] [Gaussian Head Avatar: Ultra High-fidelity Head Avatar via Dynamic Gaussians](http://arxiv.org/abs/2312.03029v1) | Arxiv 2024         | [Code](https://github.com/YuelangX/Gaussian-Head-Avatar) | [Project]( https://yuelangx.github.io/gaussianheadavatar/ ) |                                     |
| 2024 | [HeadGaS] [HeadGaS: Real-Time Animatable Head Avatars via 3D Gaussian Splatting](http://arxiv.org/abs/2312.02902v1) | Arxiv 2024         |                                                          |                                                             | 🔥Gaussian Splatting                 |
| 2024 | [GaussianAvatars] [GaussianAvatars: Photorealistic Head Avatars with Rigged 3D Gaussians](http://arxiv.org/abs/2312.02069v1) | Arxiv 2024         |                                                          | [Project](https://shenhanqian.github.io/gaussian-avatars)   | 🔥Gaussian Splatting                 |
| 2024 | [SyncTalk] [SyncTalk: The Devil😈 is in the Synchronization for Talking Head Synthesis](https://arxiv.org/abs/2311.17590) | CVPR 2024?         | [Code](https://github.com/ZiqiaoPeng/SyncTalk)           | [Project](https://ziqiaopeng.github.io/synctalk/)           | 😈                                   |
| 2024 | [R2-Talk] [R2-Talker: Realistic Real-Time Talking Head Synthesis with Hash Grid Landmarks Encoding and Progressive Multilayer Conditioning](https://arxiv.org/abs/2312.05572) | Arxiv 2024         |                                                          |                                                             |                                     |
| 2024 | [DT-NeRF] [DT-NeRF: Decomposed Triplane-Hash Neural Radiance Fields for High-Fidelity Talking Portrait Synthesis](https://arxiv.org/pdf/2309.07752) | ICASSP 2024        | -                                                        | -                                                           | ER-NeRF                             |
| 2023 | [ER-NeRF] [Efficient Region-Aware Neural Radiance Fields for High-Fidelity Talking Portrait Synthesis](https://openaccess.thecvf.com/content/ICCV2023/papers/Li_Efficient_Region-Aware_Neural_Radiance_Fields_for_High-Fidelity_Talking_Portrait_Synthesis_ICCV_2023_paper.pdf) | ICCV 2023          | [Code](https://github.com/Fictionarry/ER-NeRF)           | [Project](https://fictionarry.github.io/ER-NeRF/)           | Tri-plane                           |
| 2023 | [LipNeRF] [LipNeRF: What is the right feature space to lip-sync a NeRF?](https://www.amazon.science/publications/lipnerf-what-is-the-right-feature-space-to-lip-sync-a-nerf) | FG 2023            | Code                                                     | [Project](https://aggelinacha.github.io/LipNeRF/)           | Wav2lip                             |
| 2023 | [SD-NeRF] [SD-NeRF: Towards Lifelike Talking Head Animation via Spatially-adaptive Dual-driven NeRFs](https://ieeexplore.ieee.org/document/10229247) | IEEE 2023          | -                                                        | -                                                           |                                     |
| 2023 | [Instruct-NeuralTalker] [Instruct-NeuralTalker: Editing Audio-Driven Talking Radiance Fields with Instructions](https://arxiv.org/abs/2306.10813) | Arxiv 2023         |                                                          |                                                             |                                     |
| 2023 | [GeneFace++] [Generalized and Stable Real-Time Audio-Driven 3D Talking Face Generation](https://arxiv.org/abs/2305.00787) | Arxiv 2023         | -                                                        | [Project](https://genefaceplusplus.github.io/)              | -                                   |
| 2023 | [GeneFace] [GeneFace: Generalized and High-Fidelity Audio-Driven 3D Talking Face Synthesis](https://arxiv.org/abs/2301.13430) | ICLR 2023          | [Code](https://github.com/yerfor/GeneFace)               | [Project](https://geneface.github.io/)                      | -                                   |
| 2022 | [RAD-NeRF] [RAD-NeRF: Real-time Neural Talking Portrait Synthesis](https://arxiv.org/pdf/2211.12368.pdf) | Arxiv 2022         | [Code](https://github.com/ashawkey/RAD-NeRF)             | [Project](https://ashawkey.github.io/radnerf/)              | InstantNGP                          |
| 2022 | [DFRF] [DFRF：Learning Dynamic Facial Radiance Fields for Few-Shot Talking Head Synthesis](https://arxiv.org/abs/2207.11770) | ECCV 2022          | [Code](https://github.com/sstzal/DFRF)                   | [Project](https://sstzal.github.io/DFRF/)                   |                                     |
| 2022 | [DialogueNeRF] [DialogueNeRF: Towards Realistic Avatar Face-to-face Conversation Video Generation](https://arxiv.org/pdf/2203.07931.pdf) | Arxiv 2022         | -                                                        | -                                                           | -                                   |
| 2022 | [NeRFInvertor] [NeRFInvertor: High Fidelity NeRF-GAN Inversion for Single-shot Real Image Animation](https://arxiv.org/pdf/2211.17235.pdf) | Arxiv 2022         | [Code](https://github.com/YuYin1/NeRFInvertor)           | [Project](https://yuyin1.github.io/NeRFInvertor_Homepage/)  | -                                   |
| 2022 | [Next3D] [Next3D: Generative Neural Texture Rasterization for 3D-Aware Head Avatars](https://arxiv.org/pdf/2211.11208.pdf) | Arxiv 2022         | [Code](https://mrtornado24.github.io/Next3D/)            | [Project](https://mrtornado24.github.io/Next3D/)            | -                                   |
| 2022 | [3DFaceShop] [3DFaceShop: Explicitly Controllable 3D-Aware Portrait Generation](https://arxiv.org/pdf/2209.05434) | Arxiv 2022         | [Code](https://github.com/junshutang/3DFaceShop)         | [Project](https://junshutang.github.io/control/index.html)  | -                                   |
| 2022 | [FNeVR] [FNeVR: Neural Volume Rendering for Face Animation](https://arxiv.org/abs/2209.10340) | Arxiv 2022         | [Code](https://github.com/zengbohan0217/FNeVR)           | -                                                           | -                                   |
| 2022 | [ROME] [ROME: Realistic One-shot Mesh-based Head Avatars](https://arxiv.org/pdf/2206.08343.pdf) | ECCV 2022          | [Code](https://github.com/SamsungLabs/rome)              | [Project](https://samsunglabs.github.io/rome/)              | -                                   |
| 2022 | [IMavatar] [IMavatar: Implicit Morphable Head Avatars from Videos](https://openaccess.thecvf.com/content/CVPR2022/papers/Zheng_I_M_Avatar_Implicit_Morphable_Head_Avatars_From_Videos_CVPR_2022_paper.pdf) | CVPR 2022          | [Code](https://ait.ethz.ch/projects/2022/IMavatar/)      | [Project](https://ait.ethz.ch/projects/2022/IMavatar/)      | -                                   |
| 2022 | [HeadNeRF] [HeadNeRF: A Real-time NeRF-based Parametric Head Model](https://openaccess.thecvf.com/content/CVPR2022/papers/Grassal_Neural_Head_Avatars_From_Monocular_RGB_Videos_CVPR_2022_paper.pdf) | CVPR 2022          | [Code](https://github.com/CrisHY1995/headnerf)           | [Project](https://hy1995.top/HeadNeRF-Project/)             | -                                   |
| 2022 | [SSP-NeRF] [Semantic-Aware Implicit Neural Audio-Driven Video Portrait Generation](https://arxiv.org/pdf/2201.07786.pdf) | Arxiv 2022         | [Code](https://github.com/alvinliu0/SSP-NeRF)            | [Project](https://alvinliu0.github.io/projects/SSP-NeRF)    | -                                   |
| 2021 | [AD-NeRF] [AD-NeRF: Audio Driven Neural Radiance Fields for Talking Head Synthesis](https://arxiv.org/abs/2103.11078) | ICCV 2021          | [Code](https://github.com/YudongGuo/AD-NeRF)             | [Project](https://yudongguo.github.io/ADNeRF/)              | -                                   |
| 2021 | [NerFACE] [NerFACE: Dynamic Neural Radiance Fields for Monocular 4D Facial Avatar Reconstruction](https://arxiv.org/pdf/2012.03065) | CVPR 2021 Oral     | [Code](https://github.com/gafniguy/4D-Facial-Avatars)    | [Project](https://gafniguy.github.io/4D-Facial-Avatars/)    | -                                   |
| 2021 | [DFA-NeRF] [DFA-NeRF: Personalized Talking Head Generation via Disentangled Face Attributes Neural Rendering](https://arxiv.org/pdf/2201.00791v1.pdf) | Arxiv 2021         | [Code](https://github.com/ShunyuYao/DFA-NeRF)            | -                                                           | -                                   |

---



## Metrics

| Metrics                                             | Paper                                                        | Link                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| PSNR (peak signal-to-noise ratio)                   | -                                                            |                                                              |
| SSIM (structural similarity index measure)          | Image quality assessment: from error visibility to structural similarity. |                                                              |
| CPBD(cumulative probability of blur detection)      | A no-reference image blur metric based on the cumulative probability of blur detection |                                                              |
| LPIPS (Learned Perceptual Image Patch Similarity) - | The Unreasonable Effectiveness of Deep Features as a Perceptual Metric | [paper](https://arxiv.org/pdf/1801.03924.pdf)                |
| NIQE (Natural Image Quality Evaluator)              | Making a ‘Completely Blind’ Image Quality Analyzer           | [paper](http://live.ece.utexas.edu/research/Quality/niqe_spl.pdf) |
| FID (Fréchet inception distance)                    | GANs trained by a two time-scale update rule converge to a local nash equilibrium |                                                              |
| LMD (landmark distance error)                       | Lip Movements Generation at a Glance                         |                                                              |
| LRA (lip-reading accuracy)                          | Talking Face Generation by Conditional Recurrent Adversarial Network | [paper](https://arxiv.org/pdf/1804.04786.pdf)                |
| WER(word error rate)                                | Lipnet: end-to-end sentencelevel lipreading.                 |                                                              |
| LSE-D (Lip Sync Error - Distance)                   | Out of time: automated lip sync in the wild                  |                                                              |
| LSE-C (Lip Sync Error - Confidence)                 | Out of time: automated lip sync in the wild                  |                                                              |
| ACD(Average content distance)                       | Facenet: a unified embedding for face recognition and clustering. |                                                              |
| CSIM(cosine similarity)                             | Arcface: additive angular margin loss for deep face recognition. |                                                              |
| EAR(eye aspect ratio)                               | Real-time eye blink detection using facial landmarks. In: Computer Vision Winter Workshop |                                                              |
| ESD(emotion similarity distance)                    | What comprises a good talking-head video generation?: A Survey and Benchmark |                                                              |

---



## Tools & Software

| Tool/Resource                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [LUCIA](https://sourceforge.net/projects/lucia/)             | Development of a MPEG-4 Talking Head Engine. 💻               |
| [Yepic Studio](https://www.g2.com/products/yepic-studio/reviews) | Create and dub talking head-style videos in minutes without expensive equipment. 🎥 |
| [Mel McGee's Talkbots](https://sourceforge.net/projects/talkbots/) | A complete multi-browser, multi-platform talking head application in SVG suitable for web sites or as an avatar. 🗣️ |
| [face3D_chung](https://sourceforge.net/projects/face3dchung/) | Create 3D character avatar head objects with texture from a single photo for your games. 🎮 |
| [CrazyTalk](https://www.g2.com/products/crazytalk/reviews)   | Exciting features for 3D head creation and automation. 🤪     |
| [tts avatar free download - SourceForge](https://sourceforge.net/directory/?q=tts%20avatar) | Mel McGee's Talkbots is a complete multi-browser, multi-platform talking head. (🔧👄) |
| [Verbatim AI - Product Information, Latest Updates, and Reviews 2023](https://www.producthunt.com/products/verbatim-ai) | A simple yet powerful API to generate AI "talking head" videos in near real-time with Verbatim AI. Add interest, intrigue, and dynamism to your chat bots! (🔧👄) |
| [Best Open Source BASIC 3D Modeling Software](https://sourceforge.net/directory/3d-modeling/basic/) | Includes talk3D_chung, a small example using obj models created with face3D_chung, and speak3D_chung_dll, a dll to load and display face3D_chung talking avatars. (🛠️🎭) |
| [DVDStyler / Discussion / Help: ffmpeg-vbr or internal](https://sourceforge.net/p/dvdstyler/discussion/318795/thread/82dcb647/) | Talking heads would get a bitrate which is unnecessarily high while using DVDStyler. (🛠️👄) |
| [puffin web browser free download - SourceForge](https://sourceforge.net/directory/lisp/?q=puffin+web+browser) | Mel McGee's Talkbots is a complete multi-browser, multi-platform talking head. (🔧👄) |
| [12 best AI video generators to use in 2023 Free and paid \|Product ...](https://www.producthunt.com/stories/best-ai-video-generators-free) | Whether you’re an entrepreneur, small business owner, or run a large company, AI video generators make it super easy to create high-quality videos from scratch. (🔧🎥) |

---



## Slides & Presentations

| Presentation Title                                           | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Few-Shot Adversarial Learning of Realistic Neural Talking Head Models](https://www.slideshare.net/ssuserc9d82a/paper-reviewfewshot-adversarial-learning-of-realistic-neural-talking-head-models) | Presentation reviewing the few-shot adversarial learning of realistic neural talking head models. |
| [Nethania Michelle's Character](https://www.slideshare.net/ZULHICZARARIETINARBU/nethania-michelles-character) | PPT: Presentation discussing the improvement of a 3D talking head for use in an avatar of a virtual meeting room. |
| [Presenting you: Top tips on presenting with Prezi Video – Prezi](https://support.prezi.com/hc/en-us/articles/360036679953-Presenting-you-Top-tips-on-presenting-with-Prezi-Video) | Article providing top tips for presenting with Prezi Video.  |
| [Research Presentation](https://pt.slideshare.net/willg_36/research-presentation-presentation-956726) | PPT: Resident Research Presentation Slide Deck.              |
| [Adding narration to your presentation (using Prezi Video) – Prezi](https://support.prezi.com/hc/en-us/articles/360038281894-Adding-narration-to-your-presentation-using-Prezi-Video-) | Learn how to add narration to your Prezi presentation with Prezi Video. |

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Kedreamix/Awesome-Talking-Head-Synthesis&type=Date)](https://star-history.com/#Kedreamix/Awesome-Talking-Head-Synthesis&Date)



[1]: https://github.com/YunjinPark/awesome_talking_face_generation
[2]: https://github.com/LTT-O/Awesome-Talking-Head-Generation

[3]: https://github.com/JosephPai/Awesome-Talking-Face "Greate Project"

[4]: https://github.com/weishida01/Awesome-Talking-Face-Generation
[5]: https://github.com/harlanhong/awesome-talking-head-generation "nice job"
[6]:https://github.com/Curated-Awesome-Lists/awesome-ai-talking-heads "full of tools"

