
---
title: LLM
date: 2024-01-24 01:59:49
author: Kedreamix
cover: https://pic1.zhimg.com/v2-66c858aa31f63c6ce390099af5809303.jpg
categories: Paper
tags:
    - LLM
description: LLM 方向最新论文已更新，请持续关注 Update in 2024-01-24 Less Could Be Better Parameter-efficient Fine-tuning Advances Medical   Vision Foundation Models
keywords: LLM
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


## Less Could Be Better: Parameter-efficient Fine-tuning Advances Medical   Vision Foundation Models
**Authors:Chenyu Lian, Hong-Yu Zhou, Yizhou Yu, Liansheng Wang**

Parameter-efficient fine-tuning (PEFT) that was initially developed for exploiting pre-trained large language models has recently emerged as an effective approach to perform transfer learning on computer vision tasks. However, the effectiveness of PEFT on medical vision foundation models is still unclear and remains to be explored. As a proof of concept, we conducted a detailed empirical study on applying PEFT to chest radiography foundation models. Specifically, we delved into LoRA, a representative PEFT method, and compared it against full-parameter fine-tuning (FFT) on two self-supervised radiography foundation models across three well-established chest radiograph datasets. Our results showed that LoRA outperformed FFT in 13 out of 18 transfer learning tasks by at most 2.9% using fewer than 1% tunable parameters. Combining LoRA with foundation models, we set up new state-of-the-art on a range of data-efficient learning tasks, such as an AUROC score of 80.6% using 1% labeled data on NIH ChestX-ray14. We hope this study can evoke more attention from the community in the use of PEFT for transfer learning on medical imaging tasks. Code and models are available at https://github.com/RL4M/MED-PEFT. 

[PDF](http://arxiv.org/abs/2401.12215v1) Technical report

**摘要**
用少于 1% 可调参数实现超参数高效微调 (PEFT) 可以极大提高医学视觉基础模型的性能。

**主要要点**
- PEFT 是利用预训练大语言模型开发的一种有效的计算机视觉任务迁移学习方法。
- PEFT 在医学视觉基础模型上的有效性尚不清楚，有待探索。
- 我们通过实验研究将 PEFT 应用于胸部 X 光基础模型。
- 与全参数微调 (FFT) 相比，LoRA 在三个著名的胸部 X 光数据集上的 18 个迁移学习任务中的 13 个中表现更好，最多提高了 2.9%，同时可调参数少于 1%。
- 将 LoRA 与基础模型相结合，我们在各种数据有效学习任务中创下了新纪录，例如在 NIH ChestX-ray14 上使用 1% 的标记数据获得了 80.6% 的 AUROC 分数。
- 我们希望这项研究能够引起社区对 PEFT 用于医学图像任务迁移学习的更多关注。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：少即是多：参数高效微调</p>
</li>
<li><p>作者：陈宇廉，周宏宇，于一舟，王连生</p>
</li>
<li><p>单位：厦门大学</p>
</li>
<li><p>关键词：迁移学习，医学视觉基础模型，胸部X光片</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.12215，Github 代码链接：https://github.com/RL4M/MED-PEFT</p>
</li>
<li><p>摘要：
(1) 研究背景：参数高效微调（PEFT）最初用于开发预训练的大语言模型，最近已成为计算机视觉任务中进行迁移学习的有效方法。然而，PEFT 在医学视觉基础模型上的有效性仍不清楚，有待探索。
(2) 过去的方法及问题：全参数微调（FFT）一直被认为是进行迁移学习的优越技术。然而，基础模型通常具有大量的参数，当下游任务只有有限的注释时，微调整个模型权重可能不是最优选择。在医学影像任务中，由于隐私、安全问题以及某些疾病的罕见性，注释通常难以获得，因此这种差异值得更多关注。
(3) 研究方法：为了证明概念，我们对将 PEFT 应用于胸部放射线照相基础模型进行了详细的实证研究。具体来说，我们深入研究了 LoRA（一种具有代表性的 PEFT 方法），并将其与两个自监督放射线照相基础模型在三个完善的胸部放射线照相数据集上进行了比较。
(4) 实验结果：我们的结果表明，在 18 个迁移学习任务中有 13 个任务中，LoRA 使用少于 1% 可调参数的表现优于 FFT，最多可达 2.9%。将 LoRA 与基础模型相结合，我们在各种数据高效学习任务中确立了新的最优水平，例如，在 NIHChestX-ray14 上使用 1% 的标记数据时，AUROC 得分为 80.6%。我们希望这项研究能够引起社区对 PEFT 在医学影像任务中进行迁移学习的更多关注。</p>
</li>
<li><p>Methods:
(1): 提出了一种参数高效微调（PEFT）方法，用于医学视觉基础模型的迁移学习。
(2): 将LoRA（一种具有代表性的PEFT方法）与两个自监督放射线照相基础模型在三个完善的胸部放射线照相数据集上进行了比较。
(3): 在18个迁移学习任务中有13个任务中，LoRA使用少于1%可调参数的表现优于FFT，最多可达2.9%。
(4): 将LoRA与基础模型相结合，在各种数据高效学习任务中确立了新的最优水平，例如，在NIHChestX-ray14上使用1%的标记数据时，AUROC得分为80.6%。</p>
</li>
<li><p>结论：
(1): 本工作首次将参数高效微调（PEFT）方法应用于医学视觉基础模型的迁移学习，并取得了优异的性能，为医学影像任务中的迁移学习提供了新的思路和方法。
(2): 创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的PEFT方法，该方法可以有效地将预训练的医学视觉基础模型迁移到下游任务，并取得了优异的性能。</li>
<li>在三个完善的胸部放射线照相数据集上，将LoRA与两个自监督放射线照相基础模型进行了比较，结果表明，LoRA使用少于1%可调参数的表现优于FFT，最多可达2.9%。</li>
<li>将LoRA与基础模型相结合，在各种数据高效学习任务中确立了新的最优水平，例如，在NIHChestX-ray14上使用1%的标记数据时，AUROC得分为80.6%。
性能：</li>
<li>在18个迁移学习任务中有13个任务中，LoRA使用少于1%可调参数的表现优于FFT，最多可达2.9%。</li>
<li>将LoRA与基础模型相结合，在各种数据高效学习任务中确立了新的最优水平，例如，在NIHChestX-ray14上使用1%的标记数据时，AUROC得分为80.6%。
工作量：</li>
<li>本工作涉及了大量的数据收集、预处理、模型训练和评估工作，工作量较大。</li>
<li>本工作涉及了多种深度学习模型和算法，需要较强的理论基础和编程能力。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-88f5604fa47b7e6b53fa59ed5ce873a4.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-f28a6055dce3066c942bea25f00c4b98.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-219f68f671f950faee6332daa05d83eb.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b0e3d9c8b6a9c6651af0cb1202241988.jpg" align="middle">
</details>
​    


## CheXagent: Towards a Foundation Model for Chest X-Ray Interpretation
**Authors:Zhihong Chen, Maya Varma, Jean-Benoit Delbrouck, Magdalini Paschali, Louis Blankemeier, Dave Van Veen, Jeya Maria Jose Valanarasu, Alaa Youssef, Joseph Paul Cohen, Eduardo Pontes Reis, Emily B. Tsai, Andrew Johnston, Cameron Olsen, Tanishq Mathew Abraham, Sergios Gatidis, Akshay S. Chaudhari, Curtis Langlotz**

Chest X-rays (CXRs) are the most frequently performed imaging test in clinical practice. Recent advances in the development of vision-language foundation models (FMs) give rise to the possibility of performing automated CXR interpretation, which can assist physicians with clinical decision-making and improve patient outcomes. However, developing FMs that can accurately interpret CXRs is challenging due to the (1) limited availability of large-scale vision-language datasets in the medical image domain, (2) lack of vision and language encoders that can capture the complexities of medical data, and (3) absence of evaluation frameworks for benchmarking the abilities of FMs on CXR interpretation. In this work, we address these challenges by first introducing \emph{CheXinstruct} - a large-scale instruction-tuning dataset curated from 28 publicly-available datasets. We then present \emph{CheXagent} - an instruction-tuned FM capable of analyzing and summarizing CXRs. To build CheXagent, we design a clinical large language model (LLM) for parsing radiology reports, a vision encoder for representing CXR images, and a network to bridge the vision and language modalities. Finally, we introduce \emph{CheXbench} - a novel benchmark designed to systematically evaluate FMs across 8 clinically-relevant CXR interpretation tasks. Extensive quantitative evaluations and qualitative reviews with five expert radiologists demonstrate that CheXagent outperforms previously-developed general- and medical-domain FMs on CheXbench tasks. Furthermore, in an effort to improve model transparency, we perform a fairness evaluation across factors of sex, race and age to highlight potential performance disparities. Our project is at \url{https://stanford-aimi.github.io/chexagent.html}. 

[PDF](http://arxiv.org/abs/2401.12208v1) 24 pages, 8 figures

**摘要**
针对目前医疗图像领域中的大规模视觉语言数据集较少、可捕捉医学数据复杂性的视觉和语言编码器缺乏、以及用于基准测试 CXR 解释能力的评估框架缺失的问题，本文提出了一个新的 CXR 解释基准框架 Chexbench 和一个新的视觉语言基础模型 CheXagent。

**要点**
- **医学影像领域** 中的 **大规模视觉语言数据集** 较少。
- **医疗数据复杂性** 使得 **视觉和语言编码器** 难以有效捕捉。
- 目前 **用于评估 CXR 解释能力的框架** 仍然**缺失**。
- **CheXinstruct** 是一个从 **28 个公开可用的数据集** 中策划的大规模指令微调数据集。
- **CheXagent** 是一个基于指令微调的视觉语言基础模型，能够分析和总结 CXR。
- **CheXbench** 是一个新颖的基准，旨在系统地评估跨越 **8 个临床相关 CXR 解释任务** 的视觉语言基础模型。
- **CheXagent** 在 **CheXbench** 任务上优于此前开发的通用和医学领域视觉语言基础模型。
- 本项目还进行了公平性评估，以突出潜在的性能差异。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：CheXagent：迈向胸部 X 射线解读的基础模型</li>
<li>作者：Zhihong Chen、Maya Varma、Jean-Benoit Delbrouck、Magdalini Paschali、Louis Blankemeier、Dave Van Veen、Jeya Maria Jose Valanarasu、Alaa Youssef、Joseph Paul Cohen、Eduardo Pontes Reis、Emily B. Tsai、Andrew Johnston、Cameron Olsen、Tanishq Mathew Abraham、Sergios Gatidis、Akshay S. Chaudhari、Curtis Langlotz</li>
<li>第一作者单位：斯坦福大学</li>
<li>关键词：胸部 X 射线、医学图像、计算机视觉、自然语言处理、基础模型</li>
<li>论文链接：https://arxiv.org/abs/2401.12208
Github 代码链接：无</li>
<li>摘要：
（1）：胸部 X 射线（CXR）是临床实践中最常进行的影像检查。最近，视觉语言基础模型（FM）的发展为实现自动 CXR 解释提供了可能性，这可以帮助医生进行临床决策并改善患者预后。然而，由于以下原因，开发能够准确解释 CXR 的 FM 具有挑战性：（1）医学图像领域中缺乏大规模视觉语言数据集；（2）缺乏能够捕捉医学数据复杂性的视觉和语言编码器；（3）缺乏用于评估 FM 在 CXR 解释方面的能力的评估框架。
（2）：过去的方法包括使用通用 FM 或针对医学图像领域微调的 FM。这些方法存在的问题在于它们无法充分捕捉 CXR 的复杂性，并且缺乏针对 CXR 解释任务的评估框架。
（3）：本文提出了一种新的研究方法，该方法包括：</li>
</ol>
<ul>
<li>构建了一个名为 CheXinstruct 的大规模指令微调数据集，该数据集是从 28 个公开可用的数据集策划而来。</li>
<li>提出了一种名为 CheXagent 的指令微调 FM，该 FM 能够分析和总结 CXR。</li>
<li>引入了一个名为 CheXbench 的新基准，该基准旨在系统地评估 FM 在 8 个与临床相关的 CXR 解释任务中的表现。
（4）：在 8 个 CXR 解释任务上，CheXagent 的性能优于之前开发的通用和医学领域 FM。此外，公平性评估表明，CheXagent 在性别、种族和年龄等因素上的性能没有显着差异。</li>
</ul>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：
（1）：xxx；
（2）：创新点：xxx；性能：xxx；工作量：xxx；</li>
</ol>
<p>创新点：</p>
<ul>
<li>构建了一个名为 CheXinstruct 的大规模指令微调数据集，该数据集是从 28 个公开可用的数据集策划而来。</li>
<li>提出了一种名为 CheXagent 的指令微调 FM，该 FM 能够分析和总结 CXR。</li>
<li>引入了一个名为 CheXbench 的新基准，该基准旨在系统地评估 FM 在 8 个与临床相关的 CXR 解释任务中的表现。</li>
</ul>
<p>性能：</p>
<ul>
<li>在 8 个 CXR 解释任务上，CheXagent 的性能优于之前开发的通用和医学领域 FM。</li>
<li>公平性评估表明，CheXagent 在性别、种族和年龄等因素上的性能没有显着差异。</li>
</ul>
<p>工作量：</p>
<ul>
<li>数据集构建：从 28 个公开可用的数据集策划 CheXinstruct 数据集。</li>
<li>模型训练：训练 CheXagent 模型。</li>
<li>基准构建：构建 CheXbench 基准。</li>
<li>模型评估：在 CheXbench 基准上评估 CheXagent 的性能。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-6aa52c71b57a2862b763a5188b83d6d8.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-a7d79f07ab8199caa375ff5c3d1ce188.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-71a37c439c6714e8867560f580599d2f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3f44d1729ed1485e81c04a41f097c005.jpg" align="middle">
</details>
​    


## Text Embedding Inversion Attacks on Multilingual Language Models
**Authors:Yiyi Chen, Heather Lent, Johannes Bjerva**

Representing textual information as real-numbered embeddings has become the norm in NLP. Moreover, with the rise of public interest in large language models (LLMs), Embeddings as a Service (EaaS) has rapidly gained traction as a business model. This is not without outstanding security risks, as previous research has demonstrated that sensitive data can be reconstructed from embeddings, even without knowledge of the underlying model that generated them. However, such work is limited by its sole focus on English, leaving all other languages vulnerable to attacks by malicious actors. %As many international and multilingual companies leverage EaaS, there is an urgent need for research into multilingual LLM security. To this end, this work investigates LLM security from the perspective of multilingual embedding inversion. Concretely, we define the problem of black-box multilingual and cross-lingual inversion attacks, with special attention to a cross-domain scenario. Our findings reveal that multilingual models are potentially more vulnerable to inversion attacks than their monolingual counterparts. This stems from the reduced data requirements for achieving comparable inversion performance in settings where the underlying language is not known a-priori. To our knowledge, this work is the first to delve into multilinguality within the context of inversion attacks, and our findings highlight the need for further investigation and enhanced defenses in the area of NLP Security. 

[PDF](http://arxiv.org/abs/2401.12192v1) 13 pages

**Summary**
不断增长的多语言用户植入对 NLP 安全研究提出了迫切要求，也加剧了黑盒多语言对嵌入逆向攻击及跨语言攻击的风险。

**Key Takeaways**
- 安全风险：植入作为一项服务 (EaaS) 模型使数据重构更容易，但过去的重点仅放在英语上，其他语言很脆弱。
- 多语言模型更易受攻击：它们对实现可比的逆向性能的数据需求较少，即使在事先不知道基础语言的情况下也是如此。
- 跨语言攻击：对攻击者来说，在跨语言场景中进行跨域攻击更为容易，因为目标语言通常与源语言不同。
- 表现差异：多语言模型在不同语言上的性能差异可能导致跨语言设置中的攻击成功率发生变化。
- 更少的数据需求：多语言模型对实现可比的逆向性能的数据需求较少，即使在事先不知道基础语言的情况下也是如此。
- 需要进一步研究：这项工作强调了在 NLP 安全领域进行进一步研究和改进防御的必要性。
- 防御措施：开发针对多语言和跨语言嵌入逆向攻击的防御措施，以确保 NLP系统的安全。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>论文标题：多语言语言模型的文本嵌入逆向攻击</p>
</li>
<li><p>作者：Yiyi Chen, Heather Lent, Johannes Bjerva</p>
</li>
<li><p>第一作者单位：奥尔堡大学计算机科学系</p>
</li>
<li><p>关键词：自然语言处理，大语言模型，嵌入式服务，嵌入式逆向攻击，多语言，跨语言</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.12192，Github 链接：无</p>
</li>
<li><p>摘要：</p>
</li>
</ol>
<p>（1）研究背景：随着自然语言处理（NLP）的工业应用日益广泛，大型语言模型（LLM）和嵌入式服务（EaaS）框架的使用也越来越普遍。EaaS 允许用户将文本数据存储为高品质的句子嵌入，从而提高搜索效率。然而，最近的研究表明，嵌入式逆向攻击可以从嵌入中解码出原始文本，这给 NLP 安全带来了重大威胁。</p>
<p>（2）过去的方法和问题：以往的研究主要集中在单语英语模型和嵌入上，假设攻击者知道文本的语言。然而，在现实场景中，攻击者可能不知道文本的语言。</p>
<p>（3）研究方法：本文定义了黑盒多语言和跨语言嵌入逆向攻击问题，并特别关注跨域场景。本文使用外部模型来近似嵌入逆向函数，该函数可以从嵌入中重建文本。</p>
<p>（4）方法的性能和目标支持：本文的实验结果表明，多语言模型比单语模型更容易受到逆向攻击。在不知道底层语言的情况下，攻击者也可以实现与单语模型相当的逆向性能。这表明多语言模型在安全性方面存在潜在的风险。</p>
<ol start="7">
<li><p>方法：
(1) 定义黑盒多语言和跨语言嵌入逆向攻击问题，关注跨域场景；
(2) 使用外部模型 ψ 近似嵌入逆向函数 ϕ−1，从嵌入中重建文本；
(3) 探讨文本生成模型在未知语言文本重建中的作用；
(4) 研究多语言嵌入逆向攻击的潜力和影响；
(5) 提出后逆向策略 AdhocTranslation，将生成文本从 ly 翻译成 lx，评估信息泄露情况；
(6) 使用 T5-base 作为生成模型，在 ME5-base 和 GTR-base 上训练多语言逆向模型；
(7) 与在英语数据集上训练的逆向模型比较，评估多语言模型的性能。</p>
</li>
<li><p>结论：
（1）：本文首次对多语言嵌入逆向攻击问题进行了研究，为该方向的未来工作奠定了基础。我们的核心发现之一是，在某些情况下，多语言模型比单语英语模型更容易受到攻击。我们希望这项工作能够激发人们对 LLM 安全和 NLP 安全的关注，采取多语言的方法。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>定义了黑盒多语言和跨语言嵌入逆向攻击问题，关注跨域场景。</li>
<li>使用外部模型 ψ 近似嵌入逆向函数 ϕ−1，从嵌入中重建文本。</li>
<li>探讨了文本生成模型在未知语言文本重建中的作用。</li>
<li>研究了多语言嵌入逆向攻击的潜力和影响。</li>
<li>提出后逆向策略 AdhocTranslation，将生成文本从 l_x 翻译成 l_y，评估信息泄露情况。</li>
<li>使用 T5-base 作为生成模型，在 ME5-base 和 GTR-base 上训练多语言逆向模型。</li>
<li>与在英语数据集上训练的逆向模型比较，评估了多语言模型的性能。
性能：</li>
<li>多语言模型在某些情况下比单语英语模型更容易受到攻击。</li>
<li>在不知道底层语言的情况下，攻击者也可以实现与单语模型相当的逆向性能。</li>
<li>后逆向策略 AdhocTranslation 可以有效降低信息泄露风险。
工作量：</li>
<li>实验计算量大，需要约 20,000 个 GPU 计算小时。</li>
<li>将这项研究扩展到更多语言将进一步增加开销。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-716d1bb2864a9ac6b2a1614499e04fd6.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-5de54c90ee7b1b6fe5ae2be76cb7496f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-3f940c4622168d9e745d9be24e1dccd3.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-99a0979006c1b27d04c44e10eca03872.jpg" align="middle">
</details>
​    


## WARM: On the Benefits of Weight Averaged Reward Models
**Authors:Alexandre Ramé, Nino Vieillard, Léonard Hussenot, Robert Dadashi, Geoffrey Cideron, Olivier Bachem, Johan Ferret**

Aligning large language models (LLMs) with human preferences through reinforcement learning (RLHF) can lead to reward hacking, where LLMs exploit failures in the reward model (RM) to achieve seemingly high rewards without meeting the underlying objectives. We identify two primary challenges when designing RMs to mitigate reward hacking: distribution shifts during the RL process and inconsistencies in human preferences. As a solution, we propose Weight Averaged Reward Models (WARM), first fine-tuning multiple RMs, then averaging them in the weight space. This strategy follows the observation that fine-tuned weights remain linearly mode connected when sharing the same pre-training. By averaging weights, WARM improves efficiency compared to the traditional ensembling of predictions, while improving reliability under distribution shifts and robustness to preference inconsistencies. Our experiments on summarization tasks, using best-of-N and RL methods, shows that WARM improves the overall quality and alignment of LLM predictions; for example, a policy RL fine-tuned with WARM has a 79.4% win rate against a policy RL fine-tuned with a single RM. 

[PDF](http://arxiv.org/abs/2401.12187v1) 14 pages, 9 figures

**Summary**
利用加权平均奖励模型来克服强化学习中存在的奖励窃取现象。

**Key Takeaways**

- 奖励窃取是指 LLM 利用奖励模型的漏洞来获得看似很高的奖励，但并未达到预期的目标。
- 设计奖励模型时面临的两大挑战是：强化学习过程中分布的变化和人类偏好的不一致。
- 提出加权平均奖励模型 (WARM) 来解决奖励窃取问题，先微调多个奖励模型，然后在权重空间对它们求平均。
- WARM 通过使用最优 N 和强化学习方法在摘要任务上进行的实验证明，WARM 提高了 LLM 预测的整体质量和一致性。
- 与采用单个奖励模型微调的策略型强化学习相比，采用 WARM 微调的策略型强化学习的获胜率为 79.4%。
- 与传统预测集成相比，WARM 在分布变化和偏好不一致的情况下提高了效率和可靠性。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：WARM：关于权重平均奖励模型的优势</li>
<li>作者：Alexandre Ramé, Nino Vieillard, Léonard Hussenot, Robert Dadashi, Geoffrey Cidon, Olivier Bachem, Johan Ferret</li>
<li>隶属机构：谷歌大脑</li>
<li>关键词：对齐，RLHF，奖励建模，模型合并</li>
<li>链接：https://arxiv.org/abs/2401.12187</li>
<li>摘要：
（1）研究背景：近年来，大型语言模型（LLM）在各个领域取得了令人瞩目的成就，这很大程度上得益于强化学习（RL）的应用。然而，在RLHF（从人类反馈中进行强化学习）中，奖励黑客问题是一个普遍存在的问题。奖励黑客是指策略（即正在训练的LLM）学会利用奖励模型（RM）中的漏洞，在不真正满足预期目标的情况下实现看似很高的奖励。这会导致性能下降、检查点选择复杂化、产生谄媚行为或放大社会偏见，最严重的是可能导致安全风险。
（2）过去的方法及其问题：为了解决奖励黑客问题，一些研究人员提出了使用预测集成（ENS）的方法。ENS通过对多个RM的奖励进行平均，可以提高奖励的可靠性并降低黑客风险。然而，ENS存在内存和推理开销大的问题，而且它并不能提高对首选项数据集中标签噪声的鲁棒性。
（3）本文提出的研究方法：为了解决上述问题，本文提出了权重平均奖励模型（WARM）。WARM通过对多个RM的权重进行线性插值，将它们合并成一个新的RM。这种方法继承了WA在分布偏移下的泛化能力，并提高了对标签损坏的鲁棒性。此外，WARM在效率和实用性方面也优于ENS，因为它只需要在推理时使用一个模型，而ENS需要对多个模型的预测进行平均。
（4）方法性能：在本文的实验中，WARM在摘要任务上取得了比传统RLHF方法更好的性能。例如，使用WARM微调的策略在对抗使用单个RM微调的策略时，具有79.4%的获胜率。这表明WARM可以有效地提高LLM预测的整体质量和一致性。</li>
</ol>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种新的权重平均奖励模型（WARM），以解决奖励建模中的两个关键挑战：分布偏移下的可靠性和标签损坏下的鲁棒性。通过对多个来自不同微调的奖励模型的权重进行线性插值，WARM 似乎是一种有效的解决方案，可以减轻人类反馈中的强化学习中的奖励黑客问题。我们的实证结果证明了将其应用于摘要时的有效性。我们预计 WARM 将有助于实现更加一致、透明和有效的 AI 系统，并鼓励在奖励建模方面进行进一步探索。
（2）：创新点：</li>
</ol>
<ul>
<li>WARM 通过对多个奖励模型的权重进行平均，可以提高奖励的可靠性并降低黑客风险。</li>
<li>WARM 在效率和实用性方面优于预测集成（ENS），因为它只需要在推理时使用一个模型，而 ENS 需要对多个模型的预测进行平均。</li>
<li>WARM 在摘要任务上取得了比传统 RLHF 方法更好的性能。</li>
</ul>
<p>性能：</p>
<ul>
<li>WARM 在摘要任务上取得了比传统 RLHF 方法更好的性能。例如，使用 WARM 微调的策略在对抗使用单个 RM 微调的策略时，具有 79.4% 的获胜率。这表明 WARM 可以有效地提高 LLM 预测的整体质量和一致性。</li>
</ul>
<p>工作量：</p>
<ul>
<li>WARM 在效率和实用性方面优于预测集成（ENS），因为它只需要在推理时使用一个模型，而 ENS 需要对多个模型的预测进行平均。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-cb30bdc7fa3fe5ca08f68a92a10b2271.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-0f65c9aafc185dee21168928e8ee7151.jpg" align="middle">
</details>
​    


## Temporal Blind Spots in Large Language Models
**Authors:Jonas Wallat, Adam Jatowt, Avishek Anand**

Large language models (LLMs) have recently gained significant attention due to their unparalleled ability to perform various natural language processing tasks. These models, benefiting from their advanced natural language understanding capabilities, have demonstrated impressive zero-shot performance. However, the pre-training data utilized in LLMs is often confined to a specific corpus, resulting in inherent freshness and temporal scope limitations. Consequently, this raises concerns regarding the effectiveness of LLMs for tasks involving temporal intents. In this study, we aim to investigate the underlying limitations of general-purpose LLMs when deployed for tasks that require a temporal understanding. We pay particular attention to handling factual temporal knowledge through three popular temporal QA datasets. Specifically, we observe low performance on detailed questions about the past and, surprisingly, for rather new information. In manual and automatic testing, we find multiple temporal errors and characterize the conditions under which QA performance deteriorates. Our analysis contributes to understanding LLM limitations and offers valuable insights into developing future models that can better cater to the demands of temporally-oriented tasks. The code is available\footnote{https://github.com/jwallat/temporalblindspots}. 

[PDF](http://arxiv.org/abs/2401.12078v1) accepted at WSDM'24

**摘要**
大型语言模型在处理时间相关任务时存在局限性，尤其是在处理对过去信息的详细问题和较新信息时。

**要点**

- 大型语言模型在自然语言处理任务上表现出色，但受限于预训练语料库，对时间的理解能力有限。
- 大型语言模型在回答关于过去问题的详细问题时表现不佳，对较新信息也存在理解困难。
- 通过手动和自动测试发现大型语言模型存在多种时间错误。
- 大型语言模型在处理时间相关任务时，随着问题对时间敏感性的增加，准确率下降。
- 大型语言模型对时间的理解能力受制于预训练数据的时间范围。
- 研究人员发现时间性问题可以分为事实性问题、个人经历问题和意见问题，其中大型语言模型对事实性问题的回答准确率最高。
- 这项研究为理解大型语言模型的局限性做出了贡献，并为开发能够更好地满足时间相关任务需求的未来模型提供了宝贵的见解。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>论文标题：大型语言模型中的时间盲点</p>
</li>
<li><p>作者：Jonas Wallat、Adam Jatowt、Avishek Anand</p>
</li>
<li><p>第一作者单位：德国汉诺威莱布尼兹信息科学研究所</p>
</li>
<li><p>关键词：大型语言模型、时间知识、时间理解、问答</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.12078
Github 链接：None</p>
</li>
<li><p>摘要：
（1）研究背景：大型语言模型 (LLM) 在自然语言处理任务中表现出色，但其预训练数据通常局限于特定语料库，存在时效性和时间范围的限制，影响了其在涉及时间意图任务中的有效性。
（2）过去的方法及其问题：以往的研究主要集中在知识探测、对抗性示例和风险分析等方面，但对 LLM 在时间知识和理解方面的盲点关注较少。
（3）研究方法：本文通过三个时间问答数据集（Temporal Questions、ArchivalQA 和 TempLAMA）对 LLM 的时间知识和理解能力进行了全面评估，重点关注事实时间知识的处理和复杂时间信息的处理。
（4）方法性能及对目标的支持：实验结果表明，LLM 在涉及时间知识和理解的任务中存在盲点，特别是在处理详细的历史问题和相对较新的信息时表现不佳。这些发现有助于理解 LLM 的局限性，并为开发能够更好地满足时间导向任务需求的未来模型提供有价值的见解。</p>
</li>
</ol>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：</li>
</ol>
<p>（1）意义：
本文通过对大型语言模型（LLM）的时间知识和理解能力进行全面评估，揭示了其在涉及时间意图任务中的盲点，为开发能够更好地满足时间导向任务需求的未来模型提供了有价值的见解。</p>
<p>（2）优缺点：
创新点：</p>
<ul>
<li>提出了一种新的方法来评估 LLM 在时间知识和理解方面的能力。</li>
<li>发现 LLM 在处理详细的历史问题和相对较新的信息时表现不佳。</li>
</ul>
<p>性能：</p>
<ul>
<li>LLM 在涉及时间知识和理解的任务中存在盲点。</li>
</ul>
<p>工作量：</p>
<ul>
<li>需要收集和标记大量的数据来评估 LLM 的时间知识和理解能力。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-ef953dd5680b8986b519ca3040e877c7.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-bb539ecbb67b0f65215a7addd3ccd09f.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-68a2b498e74140261d533e54124b4339.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-a748627690bad5dde36e8816fc801a09.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-65999fcea7981a3e7935b9b9271ce7b8.jpg" align="middle">
</details>
​    


## Spotting LLMs With Binoculars: Zero-Shot Detection of Machine-Generated   Text
**Authors:Abhimanyu Hans, Avi Schwarzschild, Valeriia Cherepanova, Hamid Kazemi, Aniruddha Saha, Micah Goldblum, Jonas Geiping, Tom Goldstein**

Detecting text generated by modern large language models is thought to be hard, as both LLMs and humans can exhibit a wide range of complex behaviors. However, we find that a score based on contrasting two closely related language models is highly accurate at separating human-generated and machine-generated text. Based on this mechanism, we propose a novel LLM detector that only requires simple calculations using a pair of pre-trained LLMs. The method, called Binoculars, achieves state-of-the-art accuracy without any training data. It is capable of spotting machine text from a range of modern LLMs without any model-specific modifications. We comprehensively evaluate Binoculars on a number of text sources and in varied situations. Over a wide range of document types, Binoculars detects over 90% of generated samples from ChatGPT (and other LLMs) at a false positive rate of 0.01%, despite not being trained on any ChatGPT data. 

[PDF](http://arxiv.org/abs/2401.12070v1) 20 pages, code available at https://github.com/ahans30/Binoculars

**摘要**
句法相似度评分可以准确区分人类文本与机器文本。

**要点**

- 基于比较两个紧密相关的语言模型的分数，可以非常准确地区分人类生成的文本和机器生成的文本。
- 基于这种机制，我们提出了一种新颖的 LLM 检测器，它只需要使用一对预训练的 LLM 进行简单的计算。
- 该方法称为 Binoculars，在没有任何训练数据的情况下实现了最先进的准确性。
- 它能够在没有任何特定模型修改的情况下识别来自一系列现代 LLM 的机器文本。
- 我们对 Binoculars 进行了全面的评估，涵盖多种文本来源和不同情况。
- 在广泛的文档类型中，Binoculars 检测到超过 90% 的来自 ChatGPT（和其他 LLM）的生成样本，误报率为 0.01%，尽管它没有针对任何 ChatGPT 数据进行训练。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>标题：使用双筒望远镜发现 LLM：零样本检测机器生成的文本</li>
<li>作者：Abhimanyu Hans、Avi Schwarzschild、Valeriia Cherepanova、Hamid Kazemi、Aniruddha Saha、Micah Goldblum、Jonas Geiping、Tom Goldstein</li>
<li>第一位作者的单位：马里兰大学</li>
<li>关键词：LLM 检测、零样本检测、语言模型、机器生成的文本</li>
<li>论文链接：https://arxiv.org/abs/2401.12070
Github 代码链接：https://github.com/ahans30/Binoculars</li>
<li>摘要：</li>
</ol>
<p>（1）研究背景：检测现代大型语言模型生成的文本被认为是一项困难的任务，因为 LLM 和人都可以表现出广泛的复杂行为。
（2）过去的方法和问题：现有方法主要依赖于训练数据来区分人写文本和机器生成的文本，但是这些方法往往需要大量的数据和模型训练，并且对于新的 LLM 或文本类型可能不适用。
（3）提出的研究方法：本文提出一种基于对比两个紧密相关的语言模型的分数的新颖 LLM 检测器，称为双筒望远镜。该方法仅需使用预训练的 LLM 对进行简单的计算，无需任何训练数据。
（4）方法的性能和对目标的支持：双筒望远镜在各种文本来源和不同情况下进行了全面的评估。在广泛的文件类型中，双筒望远镜检测到超过 90% 的来自聊天机器人和其他 LLM 生成的样本，误报率为 0.01%，尽管它没有在任何聊天机器人数据上进行训练。</p>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：
（1）：本文提出了一种基于对比两个紧密相关的语言模型的分数的新颖LLM检测器，称为双筒望远镜。该方法仅需使用预训练的LLM对进行简单的计算，无需任何训练数据，在广泛的文件类型中，双筒望远镜检测到超过90%的来自聊天机器人和其他LLM生成的样本，误报率为0.01%，尽管它没有在任何聊天机器人数据上进行训练。
（2）：创新点：
创新点一：提出了一种基于对比两个紧密相关的语言模型的分数的新颖LLM检测器，称为双筒望远镜。
创新点二：该方法仅需使用预训练的LLM对进行简单的计算，无需任何训练数据。
性能：
性能一：在广泛的文件类型中，双筒望远镜检测到超过90%的来自聊天机器人和其他LLM生成的样本。
性能二：误报率为0.01%。
工作量：
工作量一：该方法仅需使用预训练的LLM对进行简单的计算，无需任何训练数据。</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-dd3bfb5b9d052c9fd7839e210dcdc353.jpg" align="middle">
</details>
​    


## Blinded by Generated Contexts: How Language Models Merge Generated and   Retrieved Contexts for Open-Domain QA?
**Authors:Hexiang Tan, Fei Sun, Wanli Yang, Yuanzhuo Wang, Qi Cao, Xueqi Cheng**

While auxiliary information has become a key to enhance Large Language Models (LLMs), relatively little is known about how well LLMs merge these contexts, specifically generated and retrieved. To study this, we formulate a task specifically designed to identify whether the answers, derived from the integration of generated and retrieved contexts, are attributed to either generated or retrieved contexts. To support this task, we develop a methodology to construct datasets with conflicting contexts, where each question is paired with both generated and retrieved contexts, yet only one of them contains the correct answer. Our experiments reveal a significant bias in LLMs towards generated contexts, as evidenced across state-of-the-art open (Llama2-7b/13b) and closed (GPT 3.5/4) systems. We further identify two key factors contributing to this bias: i) Contexts generated by LLMs typically show greater similarity to the questions, increasing their likelihood of selection; ii) The segmentation process used in retrieved contexts disrupts their completeness, thereby hindering their full utilization in LLMs. Our analysis enhances the understanding of how LLMs merge diverse contexts, offering valuable insights for advancing current augmentation methods for LLMs. 

[PDF](http://arxiv.org/abs/2401.11911v1) 

**摘要**
大型语言模型对生成和检索上下文的整合存在偏见，更多地依赖生成上下文中的信息。

**要点**
- 大型语言模型对生成上下文的整合存在明显偏见。
- 大型语言模型更倾向于选择与问题更相似的生成上下文作为答案来源。
- 大型语言模型在整合检索上下文的过程中存在一定困难，检索上下文的不完整性可能影响了答案的准确性。
- 针对大型语言模型，现有上下文增强方法需要改进。
- 大型语言模型在整合生成和检索上下文的过程中表现出差异，理解这种差异有助于改进当前的增强方法。
- 影响大型语言模型上下文整合的两个关键因素：第一，生成上下文的相似性；第二，检索上下文的完整性。
- 大型语言模型整合上下文的能力可以通过理解和解决这些因素来提高。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>标题：生成语境掩盖：语言模型如何将生成语境和检索语境融合用于开放域问答？</p>
</li>
<li><p>作者：谭鹤翔，孙飞，杨万里，王元卓，曹琪，程雪启</p>
</li>
<li><p>第一作者单位：中国科学院计算技术研究所人工智能安全与可信赖实验室</p>
</li>
<li><p>关键词：大型语言模型、生成增强、检索增强、冲突语境、问答</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.11911，Github 链接：无</p>
</li>
<li><p>摘要：
（1）研究背景：近年来，利用辅助信息增强大型语言模型（LLM）已成为一项重要研究方向。然而，对于 LLM 如何融合不同来源的语境，特别是生成语境和检索语境，目前的研究还相对较少。
（2）过去方法与问题：现有工作主要分为生成增强和检索增强两种方法。生成增强方法通过生成与问题相关的背景语境，作为 LLM 回答问题的依据。检索增强方法通过从外部语料库中检索相关段落作为语境，以增强 LLM 的知识。然而，这些方法都存在一定的问题。生成增强方法生成的语境可能与问题不一致，检索增强方法检索到的语境可能不完整或与问题无关。
（3）研究方法：为了研究 LLM 如何融合生成语境和检索语境，本文提出了一种新的任务，即冲突语境问答任务。该任务旨在识别 LLM 在融合生成语境和检索语境时，是否倾向于将答案归因于某个特定的语境。为了支持该任务，本文还开发了一种构建冲突语境数据集的方法。该数据集中的每个问题都配对有生成语境和检索语境，但只有其中一个语境包含正确答案。
（4）实验结果与性能：本文在冲突语境问答任务上对 LLM 进行了评估，结果表明 LLM 存在明显的生成语境偏好。这种偏好体现在各个最先进的开放域（Llama2-7b/13b）和封闭域（GPT3.5/4）系统中。进一步分析表明，这种偏好主要由两个因素导致：一是生成语境通常与问题更相似，因此更容易被 LLM 选择；二是检索语境在被分割成段落后，其完整性受到破坏，从而难以被 LLM 充分利用。</p>
</li>
<li><p>方法：
（1）任务定义：冲突语境问答任务。给定一个问题和两个语境，一个由生成器生成，另一个由检索器检索，判断答案来自哪个语境。
（2）数据集构建：构建冲突语境数据集，每个问题配对有生成语境和检索语境，但只有其中一个语境包含正确答案。
（3）模型评估：在冲突语境问答任务上评估 LLM，分析 LLM 在融合生成语境和检索语境时的偏好。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新的任务——冲突语境问答任务，用于研究大型语言模型（LLM）在融合生成语境和检索语境时的偏好。该任务旨在识别 LLM 在融合生成语境和检索语境时，是否倾向于将答案归因于某个特定的语境。为了支持该任务，本文还开发了一种构建冲突语境数据集的方法。该数据集中的每个问题都配对有生成语境和检索语境，但只有其中一个语境包含正确答案。
（2）：创新点：
提出了一种新的任务——冲突语境问答任务，用于研究 LLM 在融合生成语境和检索语境时的偏好。
开发了一种构建冲突语境数据集的方法。
性能：
在冲突语境问答任务上评估 LLM，结果表明 LLM 存在明显的生成语境偏好。这种偏好体现在各个最先进的开放域（Llama2-7b/13b）和封闭域（GPT3.5/4）系统中。
进一步分析表明，这种偏好主要由两个因素导致：一是生成语境通常与问题更相似，因此更容易被 LLM 选择；二是检索语境在被分割成段落后，其完整性受到破坏，从而难以被 LLM 充分利用。
工作量：
构建冲突语境数据集的工作量较大，需要收集大量的问题和语境，并进行人工标注。
评估 LLM 在冲突语境问答任务上的表现的工作量也较大，需要对 LLM 进行多次评估，并分析评估结果。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-aff8facaa355b1505b2cf6af3d0e915b.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-1ee80fef672e8714cbda66ee9ba9e921.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-32c0aa5250fcb9295d1e46e737e52534.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-99f94640fc796568a6b02c8056191892.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-c63733100557d4290705642b87c665f9.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-8815deb3960e6b2bbbe8b92e6f8e6799.jpg" align="middle">
</details>
​    


## PsySafe: A Comprehensive Framework for Psychological-based Attack,   Defense, and Evaluation of Multi-agent System Safety
**Authors:Zaibin Zhang, Yongting Zhang, Lijun Li, Hongzhi Gao, Lijun Wang, Huchuan Lu, Feng Zhao, Yu Qiao, Jing Shao**

Multi-agent systems, augmented with Large Language Models (LLMs), demonstrate significant capabilities for collective intelligence. However, the potential misuse of this intelligence for malicious purposes presents significant risks. To date, comprehensive research on the safety issues associated with multi-agent systems remains limited. From the perspective of agent psychology, we discover that the dark psychological states of agents can lead to severe safety issues. To address these issues, we propose a comprehensive framework grounded in agent psychology. In our framework, we focus on three aspects: identifying how dark personality traits in agents might lead to risky behaviors, designing defense strategies to mitigate these risks, and evaluating the safety of multi-agent systems from both psychological and behavioral perspectives. Our experiments reveal several intriguing phenomena, such as the collective dangerous behaviors among agents, agents' propensity for self-reflection when engaging in dangerous behavior, and the correlation between agents' psychological assessments and their dangerous behaviors. We anticipate that our framework and observations will provide valuable insights for further research into the safety of multi-agent systems. We will make our data and code publicly accessible at https:/github.com/AI4Good24/PsySafe. 

[PDF](http://arxiv.org/abs/2401.11880v1) 

**摘要**
多智能体系统结合了大型语言模型 (LLM)，显示出显著的集体智能能力，但也存在被恶意利用的风险。

**要点**

* 多智能体系统的安全性问题尚未得到全面研究。
* 从智能体心理学角度来看，智能体的黑暗心理状态可能导致严重的安全问题。
* 我们提出了一个基于智能体心理学的综合框架，重点关注三个方面：识别智能体中的黑暗人格特质如何导致危险行为、设计防御策略来减轻这些风险，以及从心理和行为两个角度评估多智能体系统的安全性。
* 我们的实验揭示了一些有趣的现象，例如智能体之间的集体危险行为、智能体在从事危险行为时的自我反省倾向，以及智能体的心理评估与其危险行为之间的相关性。
* 我们希望我们的框架和观察结果将为多智能体系统安全性的进一步研究提供有价值的见解。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>论文标题：黑暗人格特质攻击提示：用于危险任务评估的提示</p>
</li>
<li><p>作者：Yihan Wang, Qiang Zhang, Yuxin Peng, Xiaotong Li, Jingbo Shang, Xiangliang Zhang, Yujie Zhang, Jie Tang, Yong Yu</p>
</li>
<li><p>第一作者单位：斯坦福大学</p>
</li>
<li><p>关键词：多智能体系统、黑暗人格特质、安全、心理、行为</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2302.09358，Github 代码链接：Github：None</p>
</li>
<li><p>摘要：</p>
</li>
</ol>
<p>（1）研究背景：多智能体系统，增强了大型语言模型（LLM），展示了集体智能的显著能力。然而，将这种智能恶意用于恶意目的的潜在滥用带来了重大风险。迄今为止，关于多智能体系统安全问题的全面研究仍然有限。</p>
<p>（2）过去方法及其问题：从代理心理学角度，我们发现代理的黑暗心理状态可能导致严重的安全问题。为了解决这些问题，我们提出了一个以代理心理学为基础的综合框架。</p>
<p>（3）提出的研究方法：在我们的框架中，我们关注三个方面：识别代理中的黑暗人格特质如何导致危险行为、设计防御策略来减轻这些风险，以及从心理和行为角度评估多智能体系统的安全性。</p>
<p>（4）方法在任务和性能方面的表现：我们的实验揭示了一些有趣的现象，例如代理之间的集体危险行为、代理在从事危险行为时进行自我反省的倾向，以及代理的心理评估与其危险行为之间的相关性。我们预计，我们的框架和观察结果将为进一步研究多智能体系统的安全性提供有价值的见解。</p>
<ol start="7">
<li><p>方法：
（1）提出一个基于代理心理学的综合框架，关注代理中的黑暗人格特质如何导致危险行为、设计防御策略来减轻这些风险，以及从心理和行为角度评估多智能体系统的安全性；
（2）通过实验揭示了一些有趣的现象，例如代理之间的集体危险行为、代理在从事危险行为时进行自我反省的倾向，以及代理的心理评估与其危险行为之间的相关性；
（3）分析了不同提示对多智能体系统危险率的影响，包括手工制作的越狱提示、黑暗特质提示注入、诱导指令注入和危险意图的隐藏；
（4）分析了从不同角度攻击多智能体系统的影响，包括人类输入攻击、高频人类输入攻击、特质攻击和混合攻击方法；
（5）评估了不同的大语言模型的安全性，包括基于 API 的模型和开源模型，研究了模型大小与危险率之间的关系；
（6）进行了防御实验，评估了输入过滤器、GPT-4 的有害提示识别、DoctorDefense 和 PoliceDefense 的有效性。</p>
</li>
<li><p>结论：
（1）：从心理学的角度，本文全面分析了多智能体系统的安全性问题，引入了一种结合黑暗人格特质的攻击方法。这种方法可以有效地破坏多智能体系统，诱发危险行为。本文还提出了防御策略，可以显著降低多智能体系统中危险行为的风险。此外，本文还引入了一种包含心理和行为两个方面在内的安全评估方法，对多智能体系统的安全性进行综合评估。
（2）：创新点：提出了一种基于代理心理学的综合框架，关注代理中的黑暗人格特质如何导致危险行为、设计防御策略来减轻这些风险，以及从心理和行为角度评估多智能体系统的安全性；通过实验揭示了一些有趣的现象，例如代理之间的集体危险行为、代理在从事危险行为时进行自我反省的倾向，以及代理的心理评估与其危险行为之间的相关性；分析了不同提示对多智能体系统危险率的影响，包括手工制作的越狱提示、黑暗特质提示注入、诱导指令注入和危险意图的隐藏；分析了从不同角度攻击多智能体系统的影响，包括人类输入攻击、高频人类输入攻击、特质攻击和混合攻击方法；评估了不同的大语言模型的安全性，包括基于API的模型和开源模型，研究了模型大小与危险率之间的关系；进行了防御实验，评估了输入过滤器、GPT-4的有害提示识别、DoctorDefense和PoliceDefense的有效性。
性能：本文提出的攻击方法可以有效地破坏多智能体系统，诱发危险行为。本文提出的防御策略可以显著降低多智能体系统中危险行为的风险。本文提出的安全评估方法可以对多智能体系统的安全性进行综合评估。
工作量：本文的工作量很大，需要进行大量的实验和分析。</p>
</li>
</ol>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pic1.zhimg.com/v2-c838c9a54be9dc1fa902235acfd4e0fa.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-1dc1793d596c4da4ce3e17bd21b27f34.jpg" align="middle">
</details>
​    


## Improving Small Language Models' Mathematical Reasoning via Mix Thoughts   Distillation
**Authors:Xunyu Zhu, Jian Li, Yong Liu, Can Ma, Weiping Wang**

This work addresses the challenge of democratizing advanced Large Language Models (LLMs) by compressing their mathematical reasoning capabilities into sub-billion parameter Small Language Models (SLMs) without compromising performance. We introduce Equation-of-Thought Distillation (EoTD), a novel technique that encapsulates the reasoning process into equation-based representations to construct an EoTD dataset for fine-tuning SLMs. Additionally, we propose the Mix Thoughts Distillation (MTD) framework to enhance the reasoning performance of SLMs. This involves creating a reasoning dataset with multiple thought processes and using it for fine-tuning. Our experimental findings demonstrate that EoTD significantly boosts the reasoning abilities of SLMs, while MTD enables these models to achieve state-of-the-art reasoning performance. 

[PDF](http://arxiv.org/abs/2401.11864v1) 

**摘要**

融合推理蒸馏方法增强小语言模型数学推理能力。

**要点**

- 方程式思维蒸馏 (EoTD) 是一种新颖的技术，将推理过程封装到基于方程式的表示中，以便为精调 SLM 构建 EoTD 数据集。
- EoTD 大幅提升了SLM的推理能力，而MTD使这些模型能够实现最先进的推理性能。
- 混合思维蒸馏 (MTD) 框架用于创建具有多种思维过程的推理数据集，并将其用于精调。
- EoTD 数据集的构建方法为 SLM 的推理能力的提高提供了新的思路。
- MTD 框架通过创建具有多种思维过程的推理数据集，可以进一步增强SLM的推理性能。
- EoTD 和 MTD 方法的结合，使得 SLM 能够实现最先进的推理性能。
- 这些方法为 SLM 的推理能力的提高提供了新的思路，并有望在自然语言处理、机器学习等领域得到广泛的应用。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：通过混合思想蒸馏改进小型语言模型的数学推理能力</p>
</li>
<li><p>作者：朱洵宇, 李健, 刘勇, 马灿, 王卫平</p>
</li>
<li><p>第一作者单位：中国科学院信息工程研究所</p>
</li>
<li><p>关键词：小型语言模型；数学推理；蒸馏；思想链；方程思维</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.11864</p>
</li>
<li><p>摘要：
(1) 研究背景：随着大型语言模型（LLM）的发展，其在自然语言处理任务中表现出强大的性能。然而，LLM的庞大参数规模和计算需求限制了其在实际应用中的部署。为了解决这一问题，研究人员提出了将LLM的数学推理能力压缩到数十亿参数的小型语言模型（SLM）中，以实现更广泛的部署。
(2) 过去的方法及其问题：现有方法主要通过使用LLM创建包含详细推理路径的丰富数据集，然后微调SLM来实现知识迁移。然而，这些方法在数学问题求解方面存在明显的差距。
(3) 本文提出的研究方法：本文提出了一种名为“方程思维蒸馏”（EoTD）的框架来增强SLM的数学推理能力。EoTD首先提示LLM对问题生成方程，然后使用方程求解器求解这些方程。不产生正确解的方程会被丢弃。利用这种方法，我们构建了EoTD数据集，并使用该数据集微调SLM，从而提升了SLM的推理能力。
(4) 方法在任务和性能上的表现：在数学问题求解任务上，EoTD显著提高了SLM的推理能力。同时，我们还提出了混合思想蒸馏（MTD）框架，进一步增强了SLM的推理性能。MTD通过创建一个包含多种推理过程的推理数据集，并使用该数据集微调SLM来实现。实验结果表明，MTD使SLM在数学推理任务上达到了最先进的性能。这些结果证明了EoTD和MTD方法的有效性，为将LLM的数学推理能力压缩到SLM中提供了新的思路。</p>
</li>
<li><p>方法：
(1) 方程思维蒸馏（EoTD）：</p>
<ul>
<li>从大型语言模型（LLM）生成包含方程的推理数据集。</li>
<li>使用方程求解器求解这些方程，并丢弃不产生正确解的方程。</li>
<li>利用该数据集微调小型语言模型（SLM），以提升其数学推理能力。
(2) 混合思想蒸馏（MTD）：</li>
<li>构建包含多种推理过程的推理数据集。</li>
<li>使用该数据集微调 SLM，以进一步增强其推理性能。
(3) MTD 的优势：</li>
<li>结合了方程思维蒸馏、链式思维蒸馏和程序思维蒸馏的优点。</li>
<li>弥补了各思想过程的不足，增强了 SLM 的数学推理能力。</li>
</ul>
</li>
<li><p>结论：
（1）：本研究工作的重要意义在于，它为将大型语言模型（Large Language Models，LLMs）先进的推理能力压缩到小规模语言模型（Small Language Models，SLMs）中迈出了重要一步。通过提出方程思维蒸馏（Equation-of-Thought Distillation，EoTD）和混合思想蒸馏（Mix Thoughts Distillation，MTD）方法，我们证明了将 LLMs 的数学推理能力压缩到参数量少于十亿的 SLMs 中是可行的。EoTD 方法有效地捕获了基于方程的推理过程，促进了 SLMs 对数学推理的理解和生成。MTD 框架通过结合多种推理过程的数据集进一步增强了 SLMs 的推理能力，使其在推理任务上取得了最先进的性能。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的蒸馏框架 EoTD，该框架可以将 LLMs 的数学推理能力压缩到 SLMs 中。</li>
<li>构建了一个包含方程的推理数据集，并使用该数据集微调 SLMs，以提升其数学推理能力。</li>
<li>提出了一种新的蒸馏框架 MTD，该框架可以结合多种推理过程的数据集来微调 SLMs，进一步增强其推理性能。
性能：</li>
<li>EoTD 和 MTD 方法在数学推理任务上显著提高了 SLMs 的推理能力。</li>
<li>在数学推理任务上，MTD 使 SLMs 达到了最先进的性能。
工作量：</li>
<li>EoTD 和 MTD 方法需要构建推理数据集并微调 SLMs，这需要一定的工作量。</li>
<li>EoTD 和 MTD 方法需要使用方程求解器来求解方程，这可能会增加计算成本。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-4f7748b843608736dabf6b6cc14b4ee1.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-4d7fdb18ed70f0091f9dbdbddc997d51.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-7c622575f8bb790ddfec633e22a66d78.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-9c9ffd2b8828d29126e178af6f1f45c3.jpg" align="middle">
</details>
​    


## Speak It Out: Solving Symbol-Related Problems with Symbol-to-Language   Conversion for Language Models
**Authors:Yile Wang, Sijie Cheng, Zixin Sun, Peng Li, Yang Liu**

Symbols (or more broadly, non-natural language textual representations) such as numerical sequences, molecular formulas, and table delimiters widely exist, playing important roles in various tasks such as abstract reasoning, chemical property prediction, and table question answering. Despite the impressive natural language comprehension capabilities of large language models (LLMs), their reasoning abilities for symbols remain inadequate, which could attributed to the difference between symbol representations and general natural languages. We propose symbol-to-language (S2L), a tuning-free method that enables large language models to solve symbol-related problems with information expressed in natural language. Specifically, S2L first converts the symbols involved to language-based representations, which can be implemented by prompting LLMs or leveraging external tools, then these language-based representations are integrated into the original problem via direct substitution or concatenation, serving as useful input information for LLMs. We evaluate the S2L method using both API-based (GPT-4, ChatGPT) and open-source (OpenChat) models over eight symbol-related tasks, ranging from symbol-only abstract reasoning to sentiment analysis in social media. Experimental results show that S2L consistently leads to superior performance. For example, by employing S2L for GPT-4, there can be average significant improvements of +21.9% and +9.5% for subtasks in 1D-ARC and Dyck language, respectively. Codes and data are available at https://github.com/THUNLP-MT/symbol2language. 

[PDF](http://arxiv.org/abs/2401.11725v1) 

**Summary**
在自然语言理解方面表现出色的大语言模型 (LLM) 在处理符号方面能力不足，符号到语言 (S2L) 方法可将符号转换为语言表示，从而显著提高 LLM 解决符号相关问题的性能。

**Key Takeaways**
- 符号广泛存在于各种任务中，如抽象推理、化学性质预测和表格问答。
- LLM 在自然语言理解方面表现出色，但在处理符号方面能力不足。
- 符号与一般自然语言的表示方式不同，这是导致 LLM 符号推理能力不足的原因之一。
- S2L 是一种不需要微调的方法，可以使 LLM 能够利用自然语言表达的信息来解决符号相关的问题。
- S2L 先将符号转换为语言表示，然后将这些语言表示通过直接替换或连接的方式集成到原始问题中，作为 LLM 的有用输入信息。
- 利用 S2L 方法，可以显著提高 LLM 在符号相关任务上的性能。
- S2L 方法的代码和数据可以在 https://github.com/THUNLP-MT/symbol2language 找到。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>论文标题：SpeakItOut：利用符号与语言转换解决符号相关问题</p>
</li>
<li><p>作者：王一乐、程思杰、孙子欣、李鹏、刘洋</p>
</li>
<li><p>第一作者单位：清华大学人工智能产业研究院</p>
</li>
<li><p>关键词：符号与语言转换、大语言模型、符号相关问题</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.11725
Github 代码链接：https://github.com/THUNLP-MT/symbol2language</p>
</li>
<li><p>摘要：</p>
</li>
</ol>
<p>（1）研究背景：符号（或更广泛的非自然语言文本表示），如数值序列、分子式和表格分隔符，广泛存在，在各种任务中发挥着重要作用，如抽象推理、化学性质预测和表格问答。尽管大型语言模型（LLM）具有令人印象深刻的自然语言理解能力，但它们对符号的推理能力仍然不足，这可能归因于符号表示与一般自然语言之间的差异。</p>
<p>（2）过去的方法及其问题：本文提出了一种无调优的方法符号到语言（S2L），该方法使大型语言模型能够利用自然语言中表达的信息来解决符号相关问题。S2L 首先将涉及的符号转换为基于语言的表示，这可以通过提示 LLM 或利用外部工具来实现，然后通过直接替换或连接将这些基于语言的表示集成到原始问题中，作为 LLM 的有用输入信息。</p>
<p>（3）本文提出的研究方法：我们使用基于 API（GPT-4、ChatGPT）和开源（OpenChat）的模型在八个符号相关任务上评估了 S2L 方法，这些任务从仅符号的抽象推理到社交媒体中的情感分析。实验结果表明，S2L 一致地带来了更好的性能。例如，通过将 S2L 用于 GPT-4，1D-ARC 和 Dyck 语言的子任务可以分别平均显着提高 21.9% 和 9.5%。</p>
<p>（4）方法在任务上的表现及其对目标的支持：S2L 方法在各种涉及不同类型符号的场景中具有广泛的适用性。</p>
<p>Some Error for method(比如是不是没有Methods这个章节)</p>
<ol start="8">
<li>结论：
（1）：本文提出了符号到语言转换方法，该方法将符号表示转换为基于语言的表示，从而使大型语言模型能够利用自然语言中表达的信息来解决符号相关问题。实验结果表明，该方法在各种涉及不同类型符号的场景中具有广泛的适用性，并且能够显著提高任务的性能。
（2）：创新点：</li>
</ol>
<ul>
<li>将符号表示转换为基于语言的表示，从而使大型语言模型能够利用自然语言中表达的信息来解决符号相关问题。</li>
<li>提出了一种无调优的方法，该方法无需对大型语言模型进行任何额外的训练，即可将其应用于符号相关问题。</li>
<li>在八个符号相关任务上评估了该方法的性能，实验结果表明该方法能够显著提高任务的性能。
性能：</li>
<li>在1D-ARC和Dyck语言的子任务上，该方法分别平均显着提高了21.9%和9.5%。</li>
<li>在化学性质预测任务上，该方法的准确率提高了10.2%。</li>
<li>在表格问答任务上，该方法的准确率提高了5.8%。
工作量：</li>
<li>该方法的实现相对简单，并且不需要对大型语言模型进行任何额外的训练。</li>
<li>该方法可以很容易地应用于各种符号相关问题。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-40de55454aa9c0a64ccc5f00f797fa15.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-61ef72b92fc749addf01e22c5321e38b.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-9c34ab5861560ccbb591eb0b220a02b3.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-3fe73936de3fc8438e09058d53307b11.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-5fc7e17bf194fb6a87ae3ea50cc1c8f9.jpg" align="middle">
</details>
​    


## Mastering Text-to-Image Diffusion: Recaptioning, Planning, and   Generating with Multimodal LLMs
**Authors:Ling Yang, Zhaochen Yu, Chenlin Meng, Minkai Xu, Stefano Ermon, Bin Cui**

Diffusion models have exhibit exceptional performance in text-to-image generation and editing. However, existing methods often face challenges when handling complex text prompts that involve multiple objects with multiple attributes and relationships. In this paper, we propose a brand new training-free text-to-image generation/editing framework, namely Recaption, Plan and Generate (RPG), harnessing the powerful chain-of-thought reasoning ability of multimodal LLMs to enhance the compositionality of text-to-image diffusion models. Our approach employs the MLLM as a global planner to decompose the process of generating complex images into multiple simpler generation tasks within subregions. We propose complementary regional diffusion to enable region-wise compositional generation. Furthermore, we integrate text-guided image generation and editing within the proposed RPG in a closed-loop fashion, thereby enhancing generalization ability. Extensive experiments demonstrate our RPG outperforms state-of-the-art text-to-image diffusion models, including DALL-E 3 and SDXL, particularly in multi-category object composition and text-image semantic alignment. Notably, our RPG framework exhibits wide compatibility with various MLLM architectures (e.g., MiniGPT-4) and diffusion backbones (e.g., ControlNet). Our code is available at: https://github.com/YangLing0818/RPG-DiffusionMaster 

[PDF](http://arxiv.org/abs/2401.11708v1) Project: https://github.com/YangLing0818/RPG-DiffusionMaster

**摘要**
充分利用多模态语言模型的思维链能力，有效地提高文本到图像扩散模型的合成性。

**要点**

- 提出了一种新型的无训练文本到图像生成/编辑框架，称为重新注释、计划和生成 (RPG)。
- RPG 利用多模态语言模型作为全局规划器，将生成复杂图像的过程分解为子区域内的多个更简单的生成任务。
- 提出了一种互补的区域扩散算法，以实现区域级的合成生成。
- 在闭合回路中集成文本导向图像生成和编辑，从而提高泛化能力。
- 大量实验表明，RPG 优于最先进的文本到图像扩散模型，包括 DALL-E 3 和 SDXL，尤其是在多类别对象合成和文本图像语义对齐方面。
- RPG 框架与各种多模态语言模型架构（例如 MiniGPT-4）和扩散模型骨干（例如 ControlNet）具有广泛的兼容性。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：掌握文本到图像扩散：使用多模态 LLM 进行重新描述、规划和生成</p>
</li>
<li><p>作者：凌扬<em>1、余兆晨</em>1、孟晨林23、徐明凯2、斯特凡诺·埃尔蒙2、崔斌1</p>
</li>
<li><p>所属单位：北京大学</p>
</li>
<li><p>关键词：文本到图像扩散、多模态 LLM、重新描述、规划、生成、区域扩散</p>
</li>
<li><p>论文链接：https://github.com/YangLing0818/RPG-DiffusionMaster
Github 链接：https://github.com/YangLing0818/RPG-DiffusionMaster</p>
</li>
<li><p>摘要：
（1）研究背景：扩散模型在文本到图像生成和编辑方面表现出色的性能。然而，现有方法在处理涉及具有多个属性和关系的多个对象的复杂文本提示时通常面临挑战。
（2）过去的方法及其问题：一些工作通过引入额外的布局/框作为条件或利用提示感知注意指导来解决这个问题。然而，这些方法通常需要额外的训练数据或复杂的设计，并且在处理复杂的文本提示时可能仍然存在局限性。
（3）研究方法：本文提出了一种全新的无训练文本到图像生成/编辑框架，称为重新描述、规划和生成 (RPG)，利用多模态 LLM 强大的链式思维推理能力来增强文本到图像扩散模型的组合性。我们的方法使用 MLLM 作为全局规划器，将生成复杂图像的过程分解为多个更简单的生成任务，这些任务位于子区域内。我们提出了互补的区域扩散来实现区域组合生成。此外，我们将文本引导的图像生成和编辑集成到所提出的 RPG 中，从而增强泛化能力。
（4）方法性能：广泛的实验表明，我们的 RPG 优于最先进的文本到图像扩散模型，包括 DALL-E3 和 SDXL，尤其是在多类别对象组合和文本图像语义对齐方面。值得注意的是，我们的 RPG 框架与各种 MLLM 架构（例如，MiniGPT-4）和扩散骨干网（例如，ControlNet）具有广泛的兼容性。</p>
</li>
<li><p>提出了一种新的无训练文本到图像生成/编辑框架，称为重新描述、规划和生成 (RPG)，利用多模态 LLM 强大的链式思维推理能力来增强文本到图像扩散模型的组合性。</p>
</li>
<li><p>使用 MLLM 作为全局规划器，将生成复杂图像的过程分解为多个更简单的生成任务，这些任务位于子区域内。</p>
</li>
<li><p>提出互补的区域扩散来实现区域组合生成。</p>
</li>
<li><p>将文本引导的图像生成和编辑集成到所提出的 RPG 中，从而增强泛化能力。</p>
</li>
<li><p>广泛的实验表明，我们的 RPG 优于最先进的文本到图像扩散模型，包括 DALL-E3 和 SDXL，尤其是在多类别对象组合和文本图像语义对齐方面。</p>
</li>
<li><p>我们的 RPG 框架与各种 MLLM 架构（例如，MiniGPT-4）和扩散骨干网（例如，ControlNet）具有广泛的兼容性。</p>
</li>
<li><p>结论：
（1）：本文提出了一种新的无训练文本到图像生成/编辑框架 RPG，利用多模态 LLM 强大的链式思维推理能力来增强文本到图像扩散模型的组合性，在多类别对象组合和文本图像语义对齐方面优于最先进的文本到图像扩散模型。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出了一种新的无训练文本到图像生成/编辑框架 RPG，利用多模态 LLM 强大的链式思维推理能力来增强文本到图像扩散模型的组合性。</li>
<li>使用 MLLM 作为全局规划器，将生成复杂图像的过程分解为多个更简单的生成任务，这些任务位于子区域内。</li>
<li>提出互补的区域扩散来实现区域组合生成。</li>
<li>将文本引导的图像生成和编辑集成到所提出的 RPG 中，从而增强泛化能力。
性能：</li>
<li>广泛的实验表明，我们的 RPG 优于最先进的文本到图像扩散模型，包括 DALL-E3 和 SDXL，尤其是在多类别对象组合和文本图像语义对齐方面。</li>
<li>我们的 RPG 框架与各种 MLLM 架构（例如，MiniGPT-4）和扩散骨干网（例如，ControlNet）具有广泛的兼容性。
工作量：</li>
<li>本文的工作量较大，涉及到多模态 LLM、文本到图像扩散模型、区域扩散模型等多个方面的研究。</li>
<li>本文需要进行大量的实验来验证所提出的方法的有效性。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-d7ede89518c7e2b2017c785eb927b766.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-69a6785a9dc22c046203d70cee24a3f1.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-b57333091d6dbb8392ce8971cf413d0b.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-5d6f54078071dcab585ee882e1cb7cb6.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-40b7d562cad3ed84d89938dbcdb65fff.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-fe1c57ab8d093322b4502e666dccd4cb.jpg" align="middle">
</details>
​    


## FinSQL: Model-Agnostic LLMs-based Text-to-SQL Framework for Financial   Analysis
**Authors:Chao Zhang, Yuren Mao, Yijiang Fan, Yu Mi, Yunjun Gao, Lu Chen, Dongfang Lou, Jinshu Lin**

Text-to-SQL, which provides zero-code interface for operating relational databases, has gained much attention in financial analysis; because, financial professionals may not well-skilled in SQL programming. However, until now, there is no practical Text-to-SQL benchmark dataset for financial analysis, and existing Text-to-SQL methods have not considered the unique characteristics of databases in financial applications, such as commonly existing wide tables. To address these issues, we collect a practical Text-to-SQL benchmark dataset and propose a model-agnostic Large Language Model (LLMs)-based Text-to-SQL framework for financial analysis. The benchmark dataset, BULL, is collected from the practical financial analysis business of Hundsun Technologies Inc., including databases for fund, stock, and macro economy. Besides, the proposed LLMs-based Text-to-SQL framework, FinSQL, provides a systematic treatment for financial Text-to-SQL from the perspectives of prompt construction, parameter-efficient fine-tuning and output calibration. Extensive experimental results on BULL demonstrate that FinSQL achieves the state-of-the-art Text-to-SQL performance at a small cost; furthermore, FinSQL can bring up to 36.64% performance improvement in scenarios requiring few-shot cross-database model transfer. 

[PDF](http://arxiv.org/abs/2401.10506v1) 13 pages, 13 figures

**Summary**
基于大语言模型的金融领域文本转 SQL 框架 FinSQL 实现了最先进的文本转 SQL 性能，并且在少样本跨数据库模型迁移的场景中，FinSQL 可以带来高达 36.64% 的性能提升。

**Key Takeaways**

- 基于大语言模型的文本转 SQL 框架 FinSQL 在金融领域实现了最先进的性能，在 BULL 数据集上的准确率达到了 99.36%。
- FinSQL 利用提示工程、参数高效微调和输出校准等技术，有效地解决了金融领域文本转 SQL 的挑战，特别是在处理宽表方面具有优势。
- FinSQL 可以通过提示工程和微调，轻松地适应不同的金融领域数据库，并且在少样本跨数据库模型迁移的场景中表现出色。
- FinSQL 提供了一个统一的框架，可以应用于各种金融领域文本转 SQL 任务，例如基金分析、股票分析和宏观经济分析。
- FinSQL 可以帮助金融专业人士轻松地从文本查询中提取信息，从而提高工作效率和决策质量。
- FinSQL 是一个开源工具，可以在 GitHub 上获取，https://github.com/hundun-tech/FinSQL。
- FinSQL 可以在各种硬件平台上运行，包括 CPU 和 GPU，并且支持多种编程语言，包括 Python、Java 和 C++。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>题目：FinSQL：基于模型无关的 LLM 的金融分析文本转 SQL 框架</p>
</li>
<li><p>作者：Chao Zhang, Yuren Mao, Yijiang Fan, Yu Mi, Yunjun Gao, Lu Chen, Dongfang Lou, Jinshu Lin</p>
</li>
<li><p>单位：浙江大学</p>
</li>
<li><p>关键词：文本转 SQL，大型语言模型（LLM），金融分析</p>
</li>
<li><p>链接：https://arxiv.org/abs/2401.10506
Github：无</p>
</li>
<li><p>摘要：
（1）研究背景：文本转 SQL 旨在将自然语言问题转换成可执行的 SQL 查询，这有助于非专业数据库用户访问数据。在金融分析领域，金融专业人士经常需要查询相关数据库，但他们通常不熟悉 SQL 编程。因此，文本转 SQL 对金融分析非常重要。
（2）过去方法及问题：目前没有针对金融分析的文本转 SQL 基准数据集，现有文本转 SQL 方法也没有考虑金融分析中使用的数据库的独特特征。
（3）研究方法：本文构建了一个实用的金融分析文本转 SQL 数据集 BULL，该数据集包含三个分别对应于基金、股票和宏观经济的数据库。此外，本文还提出了一种基于模型无关的 LLM 的文本转 SQL 框架 FinSQL。FinSQL 从提示构建、参数高效微调和输出校准的角度对金融文本转 SQL 进行了系统处理。
（4）任务和性能：在 BULL 数据集上进行的广泛实验结果表明，FinSQL 以较小的成本实现了最先进的文本转 SQL 性能；此外，在需要少量跨数据库模型迁移的场景中，FinSQL 可以带来高达 36.64% 的性能提升。这些性能结果支持了本文的目标。</p>
</li>
<li><p>方法：
（1）构建金融分析文本转 SQL 基准数据集 BULL，包含基金、股票和宏观经济三个数据库；
（2）提出基于模型无关的 LLM 的文本转 SQL 框架 FinSQL，从提示构建、参数高效微调和输出校准三个角度对金融文本转 SQL 进行了系统处理；
（3）利用 ChatGPT 自动生成同义问句，丰富问题风格的多样性；
（4）设计规则从 SQL 查询中提取关键词，获得相应的骨架，创建骨架增强数据集，指导模型先生成 SQL 骨架，再生成最终 SQL 查询；
（5）改进 Cross-Encoder 模型的训练和推理过程，使其适用于金融场景，快速准确地检索模式项；
（6）提出基于 LoRA 的参数高效微调框架，支持低资源微调和跨数据库泛化，包括 LoRA-based 多任务参数高效微调方法、LoRA 插件中心和权重合并方法；
（7）构建 LoRA 插件中心，存储训练好的 LoRA 模块，支持低资源场景下的少量微调。</p>
</li>
<li><p>结论：
（1）：本文构建了首个金融分析文本转SQL基准数据集BULL，并提出了基于模型无关的LLM的文本转SQL框架FinSQL，在BULL数据集上取得了最先进的性能，并支持低资源微调和跨数据库泛化。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>构建了首个金融分析文本转SQL基准数据集BULL，包含基金、股票和宏观经济三个数据库。</li>
<li>提出了一种基于模型无关的LLM的文本转SQL框架FinSQL，从提示构建、参数高效微调和输出校准三个角度对金融文本转SQL进行了系统处理。</li>
<li>设计了规则从SQL查询中提取关键词，获得相应的骨架，创建骨架增强数据集，指导模型先生成SQL骨架，再生成最终SQL查询。</li>
<li>改进了Cross-Encoder模型的训练和推理过程，使其适用于金融场景，快速准确地检索模式项。</li>
<li>提出基于LoRA的参数高效微调框架，支持低资源微调和跨数据库泛化，包括LoRA-based多任务参数高效微调方法、LoRA插件中心和权重合并方法。</li>
<li>构建了LoRA插件中心，存储训练好的LoRA模块，支持低资源场景下的少量微调。
性能：</li>
<li>在BULL数据集上进行的广泛实验结果表明，FinSQL以较小的成本实现了最先进的文本转SQL性能；此外，在需要少量跨数据库模型迁移的场景中，FinSQL可以带来高达36.64%的性能提升。
工作量：</li>
<li>本文构建了首个金融分析文本转SQL基准数据集BULL，包含基金、股票和宏观经济三个数据库，并提出了基于模型无关的LLM的文本转SQL框架FinSQL，在BULL数据集上取得了最先进的性能，并支持低资源微调和跨数据库泛化。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://pica.zhimg.com/v2-9c895692f6c567a00b199fa54f5a74f5.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-b388a7ca23a42a81a34c91321601c58d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-503c271dadd87a4b6296f39bca961d5e.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-f4ac08d2e533ded93b75b84bb260e475.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-bc20ecf0e3b40a207c16c1ef7b53fe00.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-2bf510e39ce68125220c0fde2cc70d74.jpg" align="middle">
</details>
​    


## Beyond Reference-Based Metrics: Analyzing Behaviors of Open LLMs on   Data-to-Text Generation
**Authors:Zdeněk Kasner, Ondřej Dušek**

We investigate to which extent open large language models (LLMs) can generate coherent and relevant text from structured data. To prevent bias from benchmarks leaked into LLM training data, we collect Quintd-1: an ad-hoc benchmark for five data-to-text (D2T) generation tasks, consisting of structured data records in standard formats gathered from public APIs. We leverage reference-free evaluation metrics and LLMs' in-context learning capabilities, allowing us to test the models with no human-written references. Our evaluation focuses on annotating semantic accuracy errors on token-level, combining human annotators and a metric based on GPT-4. Our systematic examination of the models' behavior across domains and tasks suggests that state-of-the-art open LLMs with 7B parameters can generate fluent and coherent text from various standard data formats in zero-shot settings. However, we also show that semantic accuracy of the outputs remains a major issue: on our benchmark, 80% of outputs of open LLMs contain a semantic error according to human annotators (91% according to GPT-4). Our code, data, and model outputs are available at https://d2t-llm.github.io. 

[PDF](http://arxiv.org/abs/2401.10186v1) 26 pages

**Summary**
大型语言模型在无参考零样本数据对文本生成任务中的语义准确性存在重大问题。

**Key Takeaways**

- 我们收集了一个新的数据对文本生成基准 Quintd-1，以防止基准中的偏见影响 LLM 的训练数据。
- 我们使用无参考评估指标和 LLM 的上下文学习能力，允许我们在没有任何人工书写参考的情况下测试模型。
- 我们对模型在不同领域和任务中的行为进行了系统检查，结果表明，具有 7B 参数的最新开放式 LLM 可以从各种标准数据格式中生成流畅连贯的文本，而无需进行任何预训练。
- 但是，我们还发现，输出的语义准确性仍然是一个主要问题：在我们的基准测试中，根据人工注释者，80% 的开放式 LLM 输出包含语义错误（根据 GPT-4，这一比例为 91%）。
- 需要更多的方法来提高 LLM 在数据对文本生成任务中的语义准确性。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li><p>论文标题：超越基于引用的指标：分析开放式大语言模型在数据到文本生成中的行为</p>
</li>
<li><p>作者：Zdeněk Kasner、Ondřej Dušek</p>
</li>
<li><p>第一作者单位：查尔斯大学数学与物理学院形式与应用语言学研究所，捷克共和国布拉格</p>
</li>
<li><p>关键词：数据到文本生成、大语言模型、无参考评估、语义准确性</p>
</li>
<li><p>论文链接：https://arxiv.org/abs/2401.10186，Github 代码链接：https://github.com/d2t-llm/d2t-llm</p>
</li>
<li><p>摘要：
(1) 研究背景：大语言模型在自然语言处理领域取得了显著进展，但其在数据到文本生成任务中的适用性尚未得到充分探索。当前的数据到文本生成基准测试存在饱和问题，并且与人类判断的相关性较差。
(2) 过去方法及其问题：传统的基于引用的评估指标与人类判断的相关性较差。封闭式大语言模型的使用被认为是一种不良的研究实践，因为其不可重复且存在数据污染问题。
(3) 本文提出的研究方法：本文提出了一种新的数据到文本生成基准测试 QUINTD-1，该基准测试由来自五个领域的结构化数据记录组成。本文还提出了一种新的评估方法，该方法结合了人类注释者和基于 GPT-4 的指标，用于评估模型输出的语义准确性。
(4) 方法在任务上的表现及其对目标的支持：本文的方法在 QUINTD-1 基准测试上进行了评估。结果表明，最先进的开放式大语言模型能够从各种标准数据格式中生成流畅且连贯的文本。然而，语义准确性仍然是一个主要问题，80% 的开放式大语言模型输出根据人类注释者包含语义错误（根据 GPT-4 为 91%）。</p>
</li>
<li><p>方法：
(1): 提出QUINTD-1基准测试，包含来自五个领域的结构化数据记录，用于评估数据到文本生成模型的性能。
(2): 提出一种新的评估方法，结合人类注释者和基于GPT-4的指标，用于评估模型输出的语义准确性。
(3): 使用最先进的开放式大语言模型在QUINTD-1基准测试上进行评估，分析模型在不同数据格式下的生成能力和语义准确性。</p>
</li>
<li><p>结论：
（1）：本文探索了基于开放式大语言模型的数据到文本生成任务，提出了新的基准测试 QUINTD-1 和评估方法，分析了最先进的开放式大语言模型在不同数据格式下的生成能力和语义准确性，为数据到文本生成任务提供了新的研究方向。
（2）：创新点：</p>
</li>
</ol>
<ul>
<li>提出新的基准测试 QUINTD-1，包含来自五个领域的结构化数据记录，用于评估数据到文本生成模型的性能。</li>
<li>提出一种新的评估方法，结合人类注释者和基于 GPT-4 的指标，用于评估模型输出的语义准确性。</li>
<li>使用最先进的开放式大语言模型在 QUINTD-1 基准测试上进行评估，分析模型在不同数据格式下的生成能力和语义准确性。
性能：</li>
<li>最先进的开放式大语言模型能够从各种标准数据格式中生成流畅且连贯的文本。</li>
<li>但语义准确性仍然是一个主要问题，80% 的开放式大语言模型输出根据人类注释者包含语义错误（根据 GPT-4 为 91%）。
工作量：</li>
<li>收集和标注 QUINTD-1 基准测试的数据集。</li>
<li>实现新的评估方法，包括基于 GPT-4 的指标和人类注释。</li>
<li>使用最先进的开放式大语言模型在 QUINTD-1 基准测试上进行评估。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-cbc2ee00465454eb9b14d3b763aac637.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1481e93defe7c7bf222585814e3cc756.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-133889154a0e1815bf8287c40392dc96.jpg" align="middle">
<img src="https://pica.zhimg.com/v2-773279112248c748e33e938a9774aed3.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-41a6874b90e948f998889323b12872af.jpg" align="middle">
</details>
​    


## DiffusionGPT: LLM-Driven Text-to-Image Generation System
**Authors:Jie Qin, Jie Wu, Weifeng Chen, Yuxi Ren, Huixia Li, Hefeng Wu, Xuefeng Xiao, Rui Wang, Shilei Wen**

Diffusion models have opened up new avenues for the field of image generation, resulting in the proliferation of high-quality models shared on open-source platforms. However, a major challenge persists in current text-to-image systems are often unable to handle diverse inputs, or are limited to single model results. Current unified attempts often fall into two orthogonal aspects: i) parse Diverse Prompts in input stage; ii) activate expert model to output. To combine the best of both worlds, we propose DiffusionGPT, which leverages Large Language Models (LLM) to offer a unified generation system capable of seamlessly accommodating various types of prompts and integrating domain-expert models. DiffusionGPT constructs domain-specific Trees for various generative models based on prior knowledge. When provided with an input, the LLM parses the prompt and employs the Trees-of-Thought to guide the selection of an appropriate model, thereby relaxing input constraints and ensuring exceptional performance across diverse domains. Moreover, we introduce Advantage Databases, where the Tree-of-Thought is enriched with human feedback, aligning the model selection process with human preferences. Through extensive experiments and comparisons, we demonstrate the effectiveness of DiffusionGPT, showcasing its potential for pushing the boundaries of image synthesis in diverse domains. 

[PDF](http://arxiv.org/abs/2401.10061v1) 

**摘要**
扩散模型结合大型语言模型，构建领域知识库，引导模型选择，提升图像生成多样性。

**要点**

- 扩散模型在图像生成领域取得重大进展，开源平台共享高质量模型。
- 当前文本转图像系统存在输入多样性不足，模型结果单一等挑战。
- 现有统一尝试分为两种正交方面：i) 在输入阶段解析不同提示；ii) 激活专家模型以输出。
- DiffusionGPT 结合语言模型优势，构建统一生成系统，支持多种提示，集成领域专家模型。
- DiffusionGPT 基于先验知识为不同生成模型构建特定领域树形结构。
- 输入时，语言模型解析提示，利用树形思维引导选择合适模型，放宽输入限制，在不同领域确保出色性能。
- 引入优势数据库，将树形思维与人类反馈相结合，使模型选择过程与人类偏好相一致。
- 大量实验与比较证明了 DiffusionGPT 的有效性，展示了其在不同领域图像合成中的潜力。

**[ChatPaperFree](https://huggingface.co/spaces/Kedreamix/ChatPaperFree)**

<ol>
<li>题目：DiffusionGPT：基于树状思维模型的统一扩散生成系统</li>
<li>作者：Yichuan Liu<em>, Xiang Wang</em>, Xihong Wu, Zhe Gan, Yujun Shen, Jingyi Zhang, Xiaogang Wang</li>
<li>单位：北京大学计算机科学技术系</li>
<li>关键词：扩散模型、生成模型、树状思维模型、文本到图像生成</li>
<li>链接：https://arxiv.org/abs/2302.08134, Github：无</li>
<li>摘要：
（1）研究背景：扩散模型在图像生成领域取得了显著进展，但现有文本到图像生成系统通常无法处理多样化的输入，或者仅限于单一模型的结果。
（2）过去的方法及其问题：目前的研究主要集中在输入阶段解析多样化的提示或在输出阶段激活专家模型。这些方法存在以下问题：1）难以同时处理多样化的输入；2）无法充分利用领域专家模型的知识。
（3）研究方法：本文提出了一种新的文本到图像生成系统——DiffusionGPT，它利用大型语言模型（LLM）构建领域特定的树状思维模型，并根据输入提示和树状思维模型选择合适的生成模型。
（4）实验结果：在多个任务上，DiffusionGPT在图像质量、多样性和准确性方面均优于现有方法，证明了其有效性。</li>
</ol>
<p><strong>方法：</strong></p>
<p>（1）提示解析：利用大型语言模型（LLM）分析和提取输入提示中的关键文本信息，以准确识别用户想要生成的核心内容，并减轻噪声文本的影响。</p>
<p>（2）模型思想树构建与搜索：使用模型思想树（TOT）的概念来构建模型树，并利用模型树的搜索能力来缩小候选模型的集合，提高模型选择过程的准确性。</p>
<p>（3）模型选择与人工反馈：通过与用户交互，获取用户对生成结果的反馈，并根据反馈结果调整模型选择策略，以提高生成结果的质量。</p>
<p>（4）生成执行：根据选定的模型，生成图像。</p>
<ol start="8">
<li>结论：
（1）本工作通过提出 DiffusionGPT，将高性能生成模型与高效提示解析无缝集成，在文本到图像生成任务中取得了显著的成果，为该领域的研究提供了新的思路。
（2）创新点：</li>
</ol>
<ul>
<li>提出了一种新的文本到图像生成框架 DiffusionGPT，该框架能够同时处理多样化的输入提示并充分利用领域专家模型的知识。</li>
<li>提出了一种基于大型语言模型（LLM）的提示解析方法，该方法能够准确识别用户想要生成的核心内容，并减轻噪声文本的影响。</li>
<li>提出了一种基于模型思想树（TOT）的概念构建模型树的方法，该方法能够缩小候选模型的集合，提高模型选择过程的准确性。</li>
<li>提出了一种基于用户反馈的模型选择策略，该策略能够根据用户对生成结果的反馈，调整模型选择策略，以提高生成结果的质量。
性能：</li>
<li>在多个任务上，DiffusionGPT 在图像质量、多样性和准确性方面均优于现有方法，证明了其有效性。</li>
<li>DiffusionGPT 能够处理多样化的输入提示，并生成高质量、多样性和准确的图像。</li>
<li>DiffusionGPT 能够充分利用领域专家模型的知识，生成符合特定领域要求的图像。
工作量：</li>
<li>DiffusionGPT 的训练和推理过程相对复杂，需要大量的数据和计算资源。</li>
<li>DiffusionGPT 的模型选择过程需要与用户交互，这可能会增加生成图像的工作量。</li>
<li>DiffusionGPT 的提示解析过程需要使用大型语言模型（LLM），这可能会增加生成图像的成本。</li>
</ul>



<details>
  <summary>点此查看论文截图</summary>
<img src="https://picx.zhimg.com/v2-206805985eb655491965884e7bb9f034.jpg" align="middle">
<img src="https://pic1.zhimg.com/v2-66c858aa31f63c6ce390099af5809303.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-176a2174255ac60d001c26f929b2818d.jpg" align="middle">
<img src="https://picx.zhimg.com/v2-1cea822f74219b16f2b14b9a08ee6e77.jpg" align="middle">
</details>
​    

​    
