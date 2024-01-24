---
title: Arxiv学术论文查询接口详解
date: 2024-01-24 13:40
tags: 
    - Python
categories: Note
cover: https://pica.zhimg.com/80/v2-d1a008dad678ebe5120851c3e528c6f5.png
---



# Arxiv学术论文查询接口详解 转载

> 这篇博客主要转载自：[Arxiv学术论文查询接口详解](https://hiyoungai.com/posts/arxiv%E5%AD%A6%E6%9C%AF%E8%AE%BA%E6%96%87%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3%E8%AF%A6%E8%A7%A3/)，我觉得写的很好，所以我也不重新整理这一部分的API接口了。我后续使用这一部分的API接口来进行爬取得到最新的文章，还是非常方便的，所以也同时推荐给大家，能最快follow新文章

Arxiv API 允许以编程方式获取 [https://arxiv.org](https://arxiv.org/) 上的论文。API 的基本结构为：

```bash
http://export.arxiv.org/api/{method_name}?{parameters}
```

## 查询接口

查询接口的的 method_name 为 query，下面是查询方法的参数，参数之间以 *&* 分隔。

|  parameters  |                      type                      | defaults | required |
| :----------: | :--------------------------------------------: | :------: | :------: |
| search_query |                     string                     |   None   |    No    |
|   id_list    | comma-delimited string（以 ‘，’ 分隔的字符串） |   None   |    No    |
|    start     |                      int                       |    0     |    No    |
| max_results  |                      int                       |    10    |    No    |

### 参数说明

- 如果 API 只包含 search_query（不包含 id_list），那么返回与 search_query 内容匹配的结果。
- 如果 API 只包含 id_list（不包含 search_query），那么返回 id_list 中每一项的结果。
- 如果 API 中包含了 search_query 和 id_list，那么返回在 id_list 中，并且与 search_query 匹配的文章。

### 分页查询

通常情况下，一个查询可能有成百上千个返回结果。有时候我们不希望一次性查询到这么多数量，那么可以使用 *start* 和 *max_results* 两个字段来进行分页查询。

- start 是查询的起始索引，以 0 为第一个。
- max_results 是查询返回的集合数。

下面来举例说明一下：

```bash
http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=10 (1)
http://export.arxiv.org/api/query?search_query=all:electron&start=10&max_results=10 (2)
http://export.arxiv.org/api/query?search_query=all:electron&start=20&max_results=10 (3)
```

查询结果分别为：

1. 0 - 9
2. 10 - 19
3. 20 - 29

需要注意的是，由于 API 的限制，在多次调用 API 的情况下，建议每次调用的时间间隔为 3 秒。每次调用返回的最大数量为 2000 个。arXiv的硬限制约为 50,000 条记录； 对于与 50,000 多个原稿匹配的查询，无法接收全部结果. 解决这个问题的最简单的解决方案是将中断查询成小块，例如使用的时间片，与一系列日期的`submittedDate`或`lastUpdatedDate` 。

### 排序查询

对查询的结果进行排序有两个选项：*sortBy* 和 *sortOrder*。

- sortBy 的值有：relevance，lastUpdatedDate 和 submittedDate。
- sortOrder 的值有：ascending 和 descending。

示例：

```bash
http://export.arxiv.org/api/query?search_query=ti:%22electron%20thermal%20conductivity%22&sortBy=lastUpdatedDate&sortOrder=ascending
```

## 结果响应

API 的 Response 内容中是以 *Atom 1.0* 为主体的，*Atom* 是 XML 的一种语法。下面分别来说明各个标签的含义。

### Feed Metadata

每个 Response 都会包含的内容：

1. 版本和命名空间

```bash
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
```

1. Title：feed 的标题，通常为查询 URL 的字符串。

```bash
<title xmlns="http://www.w3.org/2005/Atom">
    ArXiv Query:  search_query=all:electron&amp;id_list=&amp;start=0&amp;max_results=1
</title>
```

1. Id：查询的唯一标识（注意不是查询的每个文章的 id），保证每个查询 id 是唯一的。

```bash
<id xmlns="http://www.w3.org/2005/Atom">
    http://arxiv.org/api/cHxbiOdZaP56ODnBPIenZhzg5f8
</id>
```

1. Link：查询 URL 的规范化。

```bash
<link xmlns="http://www.w3.org/2005/Atom" href="http://arxiv.org/api/query?search_query=all:electron&amp;id_list=&amp;start=0&amp;max_results=1" rel="self" type="application/atom+xml"/>
```

1. Updated：提供了 feed 内容最后一次更新的时间。

```bash
<updated xmlns="http://www.w3.org/2005/Atom">2007-10-08T00:00:00-04:00</updated>
```

1. Opensearch：扩展元素，包含了查询的返回数量以及分页信息等。

```bash
<opensearch:totalResults xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">
   1000
</opensearch:totalResults>
<opensearch:startIndex xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">
   0
</opensearch:startIndex>
<opensearch:itemsPerPage xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">
   1
</opensearch:itemsPerPage>
```

### Entry Metadata

正常情况下，Response 返回结果中的 *feed* 标签会包含 0 个或者多个 *entry* 标签。每个 entry 表示一个查询的返回文章，下面分别说一下 entry 中的各个元素。

1. Title：返回文章的标题

```bash
<title xmlns="http://www.w3.org/2005/Atom">
    Multi-Electron Production at High Transverse Momenta in ep Collisions at HERA
</title>
```

1. Id：文章的 URL ，可以认为是文章的绝对路径。最后一个字段是文章的唯一标识符。

```bash
<id xmlns="http://www.w3.org/2005/Atom">
    http://arxiv.org/abs/hep-ex/0307015
</id>
```

1. Published/Updated：文章的发布日期和更新日期。

```bash
<published xmlns="http://www.w3.org/2005/Atom">
    2007-02-27T16:02:02-05:00
</published>
<updated xmlns="http://www.w3.org/2005/Atom">
    2007-06-25T17:09:59-04:00
</updated>
```

1. Summary：文章的摘要。

```bash
<summary xmlns="http://www.w3.org/2005/Atom">
    Multi-electron production is studied at high electron transverse momentum
    in positron- and electron-proton collisions using the H1 detector at HERA.
    The data correspond to an integrated luminosity of 115 pb-1. Di-electron
    and tri-electron event yields are measured. Cross sections are derived in
    a restricted phase space region dominated by photon-photon collisions. In
    general good agreement is found with the Standard Model predictions.
    However, for electron pair invariant masses above 100 GeV, three
    di-electron events and three tri-electron events are observed, compared to
    Standard Model expectations of 0.30 \pm 0.04 and 0.23 \pm 0.04,
    respectively.
</summary>
```

1. Author：文章的作者，包含一个或者多个 name 标签，分别表示多个作者。

```bash
<author xmlns="http://www.w3.org/2005/Atom">
      <name xmlns="http://www.w3.org/2005/Atom">H1 Collaboration</name>
</author>
```

1. Category：文章的分类。

```bash
<category xmlns="http://www.w3.org/2005/Atom" term="cs.LG" scheme="http://arxiv.org/schemas/atom"/>
<category xmlns="http://www.w3.org/2005/Atom" term="cs.AI" scheme="http://arxiv.org/schemas/atom"/>
<category xmlns="http://www.w3.org/2005/Atom" term="I.2.6" scheme="http://arxiv.org/schemas/atom"/>
```

1. Link，对于每个文章，最多有三个 link 元素，通过 ref 和 title 来区别，下面的表格表示 ref 和 title 的内容：

|    rel    | title |   refers to   | always present |
| :-------: | :---: | :-----------: | :------------: |
| alternate |   -   | abstract page |      yes       |
|  related  |  pdf  |      pdf      |      yes       |
|  related  |  doi  | resolved doi  |       no       |

例子：

```bash
<link xmlns="http://www.w3.org/2005/Atom" href="http://arxiv.org/abs/hep-ex/0307015v1" rel="alternate" type="text/html"/>
<link xmlns="http://www.w3.org/2005/Atom" title="pdf" href="http://arxiv.org/pdf/hep-ex/0307015v1" rel="related" type="application/pdf"/>
<link xmlns="http://www.w3.org/2005/Atom" title="doi" href="http://dx.doi.org/10.1529/biophysj.104.047340" rel="related"/>
```

1. arxiv:primary_category：主要分类的扩展元素。

```bash
<arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.LG" scheme="http://arxiv.org/schemas/atom"/>
```

1. arxiv:comment：评论扩展元素。

```bash
<arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">
   23 pages, 8 figures and 4 tables
</arxiv:comment>
```

1. arxiv:affiliation：作者从属关系。

```bash
<author>
   <name>G. G. Kacprzak</name>
   <arxiv:affiliation xmlns:arxiv="http://arxiv.org/schemas/atom">NMSU</arxiv:affiliation>
</author>
```

1. arxiv:journal_ref：期刊说明

```bash
<arxiv:journal_ref xmlns:arxiv="http://arxiv.org/schemas/atom">
   Eur.Phys.J. C31 (2003) 17-29
</arxiv:journal_ref>
```

1. arxiv:doi：doi 说明

```bash
<arxiv:doi xmlns:arxiv="http://arxiv.org/schemas/atom">
   10.1529/biophysj.104.047340
</arxiv:doi>
```

### Errors

返回错误，如果请求的响应出现错误，会返回一个详细的错误信息。例如下面是一个错误 id 的信息：

```bash
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">
  <link xmlns="http://www.w3.org/2005/Atom" href="http://arxiv.org/api/query?search_query=&amp;id_list=1234.12345" rel="self" type="application/atom+xml"/>
  <title xmlns="http://www.w3.org/2005/Atom">ArXiv Query: search_query=&amp;id_list=1234.12345</title>
  <id xmlns="http://www.w3.org/2005/Atom">http://arxiv.org/api/kvuntZ8c9a4Eq5CF7KY03nMug+Q</id>
  <updated xmlns="http://www.w3.org/2005/Atom">2007-10-12T00:00:00-04:00</updated>
  <opensearch:totalResults xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">1</opensearch:totalResults>
  <opensearch:startIndex xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">0</opensearch:startIndex>

  <opensearch:itemsPerPage xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">1</opensearch:itemsPerPage>
  <entry xmlns="http://www.w3.org/2005/Atom">
    <id xmlns="http://www.w3.org/2005/Atom">http://arxiv.org/api/errors#incorrect_id_format_for_1234.12345</id>
    <title xmlns="http://www.w3.org/2005/Atom">Error</title>
    <summary xmlns="http://www.w3.org/2005/Atom">incorrect id format for 1234.12345</summary>
    <updated xmlns="http://www.w3.org/2005/Atom">2007-10-12T00:00:00-04:00</updated>

    <link xmlns="http://www.w3.org/2005/Atom" href="http://arxiv.org/api/errors#incorrect_id_format_for_1234.12345" rel="alternate" type="text/html"/>
    <author xmlns="http://www.w3.org/2005/Atom">
      <name xmlns="http://www.w3.org/2005/Atom">arXiv api core</name>
    </author>
  </entry>
</feed>
```

下面提供了一些常见的错误：

|                 **Sample query 示例查询**                  | **Error Explanation 错误解释** |
| :--------------------------------------------------------: | :----------------------------: |
|     http://export.arxiv.org/api/query?start=not_an_int     |      `start` 一定是个整数      |
|         http://export.arxiv.org/api/query?start=-1         |       `start` 必须 >= 0        |
|  http://export.arxiv.org/api/query?max_results=not_an_int  |   `max_results` 一定是个整数   |
|      http://export.arxiv.org/api/query?max_results=-1      |    `max_results` 必须 >= 0     |
|    http://export.arxiv.org/api/query?id_list=1234.1234     |          malformed id          |
| http://export.arxiv.org/api/query?id_list=cond—mat/0709123 |          malformed id          |

## 例子

### Python

python2.7 上的简单请求：

```python
import urllib
url = 'http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1'
data = urllib.urlopen(url).read()
print data
```

python3 上的请求：

```python
import urllib.request as libreq
with libreq.urlopen('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1') as url:
    r = url.read()
    print(r)
```

## 附录

### 查询的详细结构

在 arXiv 搜索引擎中，每篇文章都被划分为许多可以单独搜索的字段。 例如，可以搜索一篇文章的标题，以及作者列表、摘要、评论和期刊参考文献。 要搜索其中一个字段，只需在搜索词前加上字段前缀和冒号即可。 例如：

```bash
http://export.arxiv.org/api/query?search_query=au:del_maestro
```

下面的表格显示所有字段的前缀：

| **prefix** |      **explanation**       |
| :--------: | :------------------------: |
|     ti     |           Title            |
|     au     |           Author           |
|    abs     |          Abstract          |
|     co     |          Comment           |
|     jr     |     Journal Reference      |
|    cat     |      Subject Category      |
|     rn     |       Report Number        |
|     id     | Id (use `id_list` instead) |
|    all     |      All of the above      |

并且查询也支持布尔运算，假设我们希望找到作者 Adrian DelMaestro 的所有文章，其标题中也包含单词 checkerboard。 我们可以使用 AND 操作符构造下面的查询：

```bash
http://export.arxiv.org/api/query?search_query=au:del_maestro+AND+ti:checkerboard
```

下面是三种可能的布尔值：

- AND
- OR
- ANDNOT

下面是特殊符号的含义以及转义字符：

| symbol | encoding | explanation                                |
| :----- | :------- | :----------------------------------------- |
| ( )    | %28 %29  | 用于为布尔运算符优先级对布尔表达式进行分组 |
| " "    | %22 %22  | 用于将多个单词组合成短语以搜索特定字段     |
| 空格   | +        | 用于扩展`search_query` 包含多个字段        |

### 返回的详细结构

下表列出了返回的 Atom 结果的每个元素:

|       **element**       |                  **explanation**                   |
| :---------------------: | :------------------------------------------------: |
|    **feed elements**    |                                                    |
|          title          |             包含规范化查询字符串的标题             |
|           id            |               分配给此查询的唯一 id                |
|         updated         |  最后一次更新此查询的搜索结果。 设置为当天的午夜   |
|          link           |           通过 GET 请求检索此提要的 url            |
| opensearch:totalResults |                此查询的搜索结果总数                |
|  opensearch:startIndex  |      总结果列表中第一个返回结果的基于0的索引       |
| opensearch:itemsPerPage |                  每页返回的结果数                  |
|   **entry elements**    |                                                    |
|          title          |                     文章的标题                     |
|           id            |        文章的网址`http://arxiv.org/abs/id`         |
|        published        |                   文章的发布日期                   |
|         updated         | 文章的更新日期，如果为 v1 版本，那么与发布日期相同 |
|         summary         |                      文章摘要                      |
|         author          |    每个作者有一个子元素 name，包含了作者的名字     |
|          link           |         可以给定与这篇文章关联的 3 个网址          |
|        category         |                      文章分类                      |
| arxiv:primary_category  |                 主要的 arXiv 分类                  |
|      arxiv:comment      |                 作者对此发表的评论                 |
|    arxiv:affiliation    |                   作者的从属关系                   |
|    arxiv:journal_ref    |                      参考文献                      |
|        arxiv:doi        |         已解析的 DOI 的 url，指向外部资源          |

### 学科的分类

下面是学科分类字段以及对应的翻译（软件脚本自动翻译，如不对请勿喷）：

|        字段        |                  学科（英文）                   |       学科（中文）       |
| :----------------: | :---------------------------------------------: | :----------------------: |
|      astro-ph      |                  Astrophysics                   |         天体物理         |
|    astro-ph.CO     |     Cosmology and Nongalactic Astrophysics      | 宇宙学与非规则天体物理学 |
|    astro-ph.EP     |        Earth and Planetary Astrophysics         |   地球与行星天体物理学   |
|    astro-ph.GA     |            Astrophysics of Galaxies             |     星系的天体物理学     |
|    astro-ph.HE     |       High Energy Astrophysical Phenomena       |     高能天体物理现象     |
|    astro-ph.IM     |  Instrumentation and Methods for Astrophysics   |  天体物理学的仪器和方法  |
|    astro-ph.SR     |         Solar and Stellar Astrophysics          |   太阳与恒星天体物理学   |
|  cond-mat.dis-nn   |     Disordered Systems and Neural Networks      |    无序系统与神经网络    |
| cond-mat.mes-hall  |         Mesoscale and Nanoscale Physics         |  中尺度和纳米尺度物理学  |
| cond-mat.mtrl-sci  |                Materials Science                |         材料科学         |
|   cond-mat.other   |             Other Condensed Matter              |        其他凝聚态        |
| cond-mat.quant-gas |                  Quantum Gases                  |         量子气体         |
|   cond-mat.soft    |              Soft Condensed Matter              |         软凝聚物         |
| cond-mat.stat-mech |              Statistical Mechanics              |         统计力学         |
|  cond-mat.str-el   |          Strongly Correlated Electrons          |        强关联电子        |
| cond-mat.supr-con  |                Superconductivity                |         超导现象         |
|       cs.AI        |             Artificial Intelligence             |         人工智能         |
|       cs.AR        |              Hardware Architecture              |         硬件架构         |
|       cs.CC        |            Computational Complexity             |        计算复杂性        |
|       cs.CE        | Computational Engineering, Finance, and Science |   计算工程，金融和科学   |
|       cs.CG        |             Computational Geometry              |         计算几何         |
|       cs.CL        |            Computation and Language             |        计算与语言        |
|       cs.CR        |            Cryptography and Security            |       密码学与保安       |
|       cs.CV        |     Computer Vision and Pattern Recognition     |   计算机视觉与模式识别   |
|         CY         |              Computers and Society              |        电脑与社会        |
|       cs.DB        |                    Databases                    |          数据库          |
|       cs.DC        |  Distributed, Parallel, and Cluster Computing   |  分布式、并行和集群计算  |
|       cs.DL        |                Digital Libraries                |         数字仓库         |
|       cs.DM        |              Discrete Mathematics               |         离散数学         |
|       cs.DS        |         Data Structures and Algorithms          |      数据结构和算法      |
|       cs.ET        |              Emerging Technologies              |         新兴科技         |
|       cs.FL        |      Formal Languages and Automata Theory       |   形式语言与自动机理论   |
|       cs.GL        |               General Literature                |         一般文学         |
|       cs.GR        |                    Graphics                     |           图形           |
|       cs.GT        |        Computer Science and Game Theory         |    计算机科学与博弈论    |
|       cs.HC        |           Human-Computer Interaction            |         人机交互         |
|       cs.IR        |              Information Retrieval              |         信息检索         |
|       cs.IT        |               Information Theory                |         信息理论         |
|       cs.LG        |                    Learning                     |           学习           |
|       cs.LO        |            Logic in Computer Science            |    计算机科学中的逻辑    |
|       cs.MA        |               Multiagent Systems                |        多代理系统        |
|       cs.MM        |                   Multimedia                    |          多媒体          |
|       cs.MS        |              Mathematical Software              |         数学软件         |
|       cs.NA        |               Numerical Analysis                |         数值分析         |
|       cs.NE        |        Neural and Evolutionary Computing        |      神经和进化计算      |
|       cs.NI        |      Networking and Internet Architecture       |     网络与互联网架构     |
|       cs.OH        |             Other Computer Science              |      其他计算机科学      |
|       cs.OS        |                Operating Systems                |         操作系统         |
|       cs.PF        |                   Performance                   |           性能           |
|       cs.PL        |              Programming Languages              |         编程语言         |
|       cs.RO        |                    Robotics                     |        机器人技术        |
|       cs.SC        |              Symbolic Computation               |         符号计算         |
|       cs.SD        |                      Sound                      |           声音           |
|       cs.SE        |              Software Engineering               |         软件工程         |
|       cs.SI        |         Social and Information Networks         |      社会和信息网络      |
|       cs.SY        |               Systems and Control               |        系统及控制        |
|      econ.EM       |                  Econometrics                   |        计量经济学        |
|      eess.AS       |           Audio and Speech Processing           |      音频及语音处理      |
|      eess.IV       |           Image and Video Processing            |      图像和视频处理      |
|      eess.SP       |                Signal Processing                |         信号处理         |
|       gr-qc        |    General Relativity and Quantum Cosmology     |  广义相对论和量子宇宙学  |
|       hep-ex       |        High Energy Physics - Experiment         |       高能物理实验       |
|      hep-lat       |          High Energy Physics - Lattice          |      高能物理-晶格       |
|       hep-ph       |       High Energy Physics - Phenomenology       |     高能物理-现象学      |
|       hep-th       |          High Energy Physics - Theory           |       高能物理理论       |
|      math.AC       |               Commutative Algebra               |         交换代数         |
|      math.AG       |               Algebraic Geometry                |         代数几何         |
|      math.AP       |                Analysis of PDEs                 |      偏微分方程分析      |
|      math.AT       |               Algebraic Topology                |         代数拓扑         |
|      math.CA       |           Classical Analysis and ODEs           |    传统分析和微分方程    |
|      math.CO       |                  Combinatorics                  |         组合数学         |
|      math.CT       |                 Category Theory                 |         范畴理论         |
|      math.CV       |                Complex Variables                |         复杂变量         |
|      math.DG       |              Differential Geometry              |         微分几何         |
|      math.DS       |                Dynamical Systems                |         动力系统         |
|      math.FA       |               Functional Analysis               |         功能分析         |
|      math.GM       |               General Mathematics               |         普通数学         |
|      math.GN       |                General Topology                 |        点集拓扑学        |
|      math.GR       |                  Group Theory                   |           群论           |
|      math.GT       |               Geometric Topology                |        几何拓扑学        |
|      math.HO       |              History and Overview               |        历史和概述        |
|      math.IT       |               Information Theory                |         信息理论         |
|      math.KT       |              K-Theory and Homology              |       K 理论与同调       |
|      math.LO       |                      Logic                      |           逻辑           |
|      math.MG       |                 Metric Geometry                 |        度量几何学        |
|      math.MP       |              Mathematical Physics               |         数学物理         |
|      math.NA       |               Numerical Analysis                |         数值分析         |
|      math.NT       |                  Number Theory                  |           数论           |
|      math.OA       |                Operator Algebras                |         算子代数         |
|      math.OC       |            Optimization and Control             |        优化和控制        |
|      math.PR       |                   Probability                   |           概率           |
|      math.QA       |                 Quantum Algebra                 |         量子代数         |
|      math.RA       |               Rings and Algebras                |         环与代数         |
|      math.RT       |              Representation Theory              |          表示论          |
|      math.SG       |               Symplectic Geometry               |          辛几何          |
|      math.SP       |                 Spectral Theory                 |         光谱理论         |
|      math.ST       |                Statistics Theory                |        统计学理论        |
|      math-ph       |              Mathematical Physics               |         数学物理         |
|      nlin.AO       |     Adaptation and Self-Organizing Systems      |     适应与自组织系统     |
|      nlin.CD       |                Chaotic Dynamics                 |        混沌动力学        |
|      nlin.CG       |       Cellular Automata and Lattice Gases       |   元胞自动机与格子气体   |
|      nlin.PS       |         Pattern Formation and Solitons          |      模式形成与孤子      |
|      nlin.SI       |     Exactly Solvable and Integrable Systems     |     严格可解可积系统     |
|      nucl-ex       |               Nuclear Experiment                |          核试验          |
|      nucl-th       |                 Nuclear Theory                  |          核理论          |
|   physics.acc-ph   |               Accelerator Physics               |       加速器物理学       |
|   physics.ao-ph    |         Atmospheric and Oceanic Physics         |     大气和海洋物理学     |
|   physics.app-ph   |                 Applied Physics                 |        应用物理学        |
|  physics.atm-clus  |          Atomic and Molecular Clusters          |      原子和分子团簇      |
|  physics.atom-ph   |                 Atomic Physics                  |        原子物理学        |
|   physics.bio-ph   |               Biological Physics                |        生物物理学        |
|  physics.chem-ph   |                Chemical Physics                 |         化学物理         |
|  physics.class-ph  |                Classical Physics                |        经典物理学        |
|  physics.comp-ph   |              Computational Physics              |        计算物理学        |
|  physics.data-an   |    Data Analysis, Statistics and Probability    |   数据分析、统计和概率   |
|   physics.ed-ph    |                Physics Education                |         物理教育         |
|  physics.flu-dyn   |                 Fluid Dynamics                  |        流体动力学        |
|   physics.gen-ph   |                 General Physics                 |         普通物理         |
|   physics.geo-ph   |                   Geophysics                    |        地球物理学        |
|  physics.hist-ph   |        History and Philosophy of Physics        |    物理学的历史与哲学    |
|  physics.ins-det   |          Instrumentation and Detectors          |       仪器和探测器       |
|   physics.med-ph   |                 Medical Physics                 |        医学物理学        |
|   physics.optics   |                     Optics                      |           光学           |
|  physics.plasm-ph  |                 Plasma Physics                  |       等离子体物理       |
|   physics.pop-ph   |                 Popular Physics                 |         大众物理         |
|   physics.soc-ph   |               Physics and Society               |       物理学与社会       |
|  physics.space-ph  |                  Space Physics                  |        空间物理学        |
|      q-bio.BM      |                  Biomolecules                   |         生物分子         |
|      q-bio.CB      |                  Cell Behavior                  |         细胞行为         |
|      q-bio.GN      |                    Genomics                     |         基因组学         |
|      q-bio.MN      |               Molecular Networks                |         分子网络         |
|      q-bio.NC      |              Neurons and Cognition              |       神经元与认知       |
|      q-bio.OT      |           Other Quantitative Biology            |      其他定量生物学      |
|      q-bio.PE      |            Populations and Evolution            |        种群与进化        |
|      q-bio.QM      |              Quantitative Methods               |         定量方法         |
|      q-bio.SC      |              Subcellular Processes              |        亚细胞突起        |
|      q-bio.TO      |               Tissues and Organs                |        组织和器官        |
|      q-fin.CP      |              Computational Finance              |         金融工程         |
|      q-fin.EC      |                    Economics                    |          经济学          |
|      q-fin.GN      |                 General Finance                 |         财务概述         |
|      q-fin.MF      |              Mathematical Finance               |         数学金融         |
|      q-fin.PM      |              Portfolio Management               |       投资组合管理       |
|      q-fin.PR      |              Pricing of Securities              |         证券定价         |
|      q-fin.RM      |                 Risk Management                 |         风险管理         |
|      q-fin.ST      |               Statistical Finance               |         金融统计         |
|      q-fin.TR      |        Trading and Market Microstructure        |    交易与市场微观结构    |
|      quant-ph      |                 Quantum Physics                 |        量子物理学        |
|      stat.AP       |                  Applications                   |           应用           |
|      stat.CO       |                   Computation                   |           计算           |
|      stat.ME       |                   Methodology                   |          方法论          |
|      stat.ML       |                Machine Learning                 |         机器学习         |
|      stat.OT       |                Other Statistics                 |        其他统计学        |
|      stat.TH       |                Statistics Theory                |        统计学理论        |