---
title: "FastAPI 快速教程: 从零开始构建你的第一个API项目"
date: 2024-01-19 23:09:47
tags: 
    - Linux
    - Python
    - Note
categories: Note
cover: https://picx.zhimg.com/80/v2-f7dc5c12cb693d83a113359819a1f26e_720w.png?source=d16d100b
---

最近在学习大模型的时候，有时候会遇到要写API的时候，这个时候我就遇见了FastAPI，我发现这个是一个很好的库，可以很方便的让我们构建一个属于自己的API，所以今天我也写一下这个入门教程和大家一起分享一下，同时也让我们解密一下，OpenAI和一些公司的API，可能是怎么写和怎么做的。

![FastAPI framework, high performance, easy to learn, fast to code, ready for production](https://picx.zhimg.com/80/v2-f7dc5c12cb693d83a113359819a1f26e_720w.png?source=d16d100b)


## FastAPI介绍

FastAPI 是一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.8+ 并基于标准的 Python 类型提示。

**文档**： [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com/)

**源码**： https://github.com/tiangolo/fastapi

关键特性:

- **快速**：可与 **NodeJS** 和 **Go** 并肩的极高性能（归功于 Starlette 和 Pydantic）。[最快的 Python web 框架之一](https://fastapi.tiangolo.com/zh/#_11)。
- **高效编码**：提高功能开发速度约 200％ 至 300％。*
- **更少 bug**：减少约 40％ 的人为（开发者）导致错误。*
- **智能**：极佳的编辑器支持。处处皆可自动补全，减少调试时间。
- **简单**：设计的易于使用和学习，阅读文档的时间更短。
- **简短**：使代码重复最小化。通过不同的参数声明实现丰富功能。bug 更少。
- **健壮**：生产可用级别的代码。还有自动生成的交互式文档。
- **标准化**：基于（并完全兼容）API 的相关开放标准：[OpenAPI](https://github.com/OAI/OpenAPI-Specification) (以前被称为 Swagger) 和 [JSON Schema](https://json-schema.org/)。

## 安装及依赖

Python 3.8 及更高版本

FastAPI 站在以下巨人的肩膀之上：

- [Starlette](https://www.starlette.io/) 负责 web 部分。
- [Pydantic](https://pydantic-docs.helpmanual.io/) 负责数据部分。

```bash
pip install fastapi
```

我们有可能还会需要一个 ASGI 服务器，可以使用[Uvicorn](https://www.uvicorn.org/)

```bash
pip install unvicorn
```

## 示例

### 创建

创建一个 main.py 文件并写入以下内容:

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

如果我们需要加入异步编程的话，我们就需要改一下代码，加入async/await和async def 

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

如果对于异步编程有点兴趣的话，可以看看这个讲解，我觉得还是很不错的，这也加强了代码的并发能力。

### 运行

通过以下命令进行运行服务器

```bash
$ uvicorn main:app --reload

INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [28720]
INFO:     Started server process [28722]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

uvicorn main:app 命令含义如下:

- main：main.py 文件（一个 Python "模块"）。
- app：在 main.py 文件中通过 app = FastAPI() 创建的对象。
- --reload：让服务器在更新代码后重新启动。仅在开发时使用该选项。

这里面着重提一下**reolab参数**，这个相当于我们在开发是对代码进行修改的同时，服务器也在变化，这样就方便我们进行开发和学习，但是如果开发完毕以后，我们可以去掉**--reload**，防止不小心动到代码改变了api的访问

### **检查**

使用浏览器访问 http://127.0.0.1:8000/items/5?q=somequery。

你将会看到如下 JSON 响应：

```
 {"item_id": 5, "q": "somequery"}
```

你已经创建了一个具有以下功能的 API：

- 通过 *路径* / 和 /items/{item_id} 接受 HTTP 请求。
- 以上 *路径* 都接受 GET *操作*（也被称为 HTTP *方法*）。
- /items/{item_id} *路径* 有一个 *路径参数* item_id 并且应该为 int 类型。
- /items/{item_id} *路径* 有一个可选的 str 类型的 *查询参数* q。

## API文档

### **交互式 API 文档**

现在访问 http://127.0.0.1:8000/docs。

你会看到自动生成的交互式 API 文档（由 [Swagger UI](https://github.com/swagger-api/swagger-ui)生成）：

![交互式 API 文档](https://picx.zhimg.com/80/v2-39fe8891285bf578eee8466c4aec1b52_720w.png?source=d16d100b)







### 可选的 API 文档

访问 http://127.0.0.1:8000/redoc。

你会看到另一个自动生成的文档（由 [ReDoc](https://github.com/Rebilly/ReDoc) 生成）：

![可选的 API 文档](https://picx.zhimg.com/80/v2-23ae5bafaed6faf6ced83d987b17fc98_720w.png?source=d16d100b)







## 大模型API实战

比如我现在想使用一个大模型，比如就是阿里的通义千问的大模型，我希望能写一个api接口进行对其调用，有点类似与OpenAI一样写一个接口，这样就方便我们进行去调用，而不用每次跑一堆代码。

### Qwen模型下载与使用

比如我们可以从Qwen中获取对应的模型，https://huggingface.co/Qwen/Qwen-7B-Chat

从里面我们可以看到多轮对话的快速使用代码，这对我们写API有很大的帮助，我们从中可以看到主要的流程，实际上还是蛮简单的，就是导入模型后，进行传入参数，参数一般有三个，一个是一开始定义的分词器**tokenizer**，另外两个就比较重要，分别是问题和历史记录，所以我们希望得到的api应该是有这两个输入的。

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers.generation import GenerationConfig

# Note: The default behavior now has injection attack prevention off.
tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen-7B-Chat", trust_remote_code=True)

# use bf16
# model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat", device_map="auto", trust_remote_code=True, bf16=True).eval()
# use fp16
# model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat", device_map="auto", trust_remote_code=True, fp16=True).eval()
# use cpu only
# model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat", device_map="cpu", trust_remote_code=True).eval()
# use auto mode, automatically select precision based on the device.
model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat", device_map="auto", trust_remote_code=True).eval()

# Specify hyperparameters for generation. But if you use transformers>=4.32.0, there is no need to do this.
# model.generation_config = GenerationConfig.from_pretrained("Qwen/Qwen-7B-Chat", trust_remote_code=True) # 可指定不同的生成长度、top_p等相关超参

# 第一轮对话 1st dialogue turn
response, history = model.chat(tokenizer, "你好", history=None)
print(response)
# 你好！很高兴为你提供帮助。

# 第二轮对话 2nd dialogue turn
response, history = model.chat(tokenizer, "给我讲一个年轻人奋斗创业最终取得成功的故事。", history=history)
print(response)
# 这是一个关于一个年轻人奋斗创业最终取得成功的故事。
# 故事的主人公叫李明，他来自一个普通的家庭，父母都是普通的工人。从小，李明就立下了一个目标：要成为一名成功的企业家。
# 为了实现这个目标，李明勤奋学习，考上了大学。在大学期间，他积极参加各种创业比赛，获得了不少奖项。他还利用课余时间去实习，积累了宝贵的经验。
# 毕业后，李明决定开始自己的创业之路。他开始寻找投资机会，但多次都被拒绝了。然而，他并没有放弃。他继续努力，不断改进自己的创业计划，并寻找新的投资机会。
# 最终，李明成功地获得了一笔投资，开始了自己的创业之路。他成立了一家科技公司，专注于开发新型软件。在他的领导下，公司迅速发展起来，成为了一家成功的科技企业。
# 李明的成功并不是偶然的。他勤奋、坚韧、勇于冒险，不断学习和改进自己。他的成功也证明了，只要努力奋斗，任何人都有可能取得成功。

# 第三轮对话 3rd dialogue turn
response, history = model.chat(tokenizer, "给这个故事起一个标题", history=history)
print(response)
# 《奋斗创业：一个年轻人的成功之路》
```

### 编写FastAPI代码

所以弄清楚了原理以后，我们就可以开始利用FastAPI写以下的代码了，为了更好的使用api，除了prompt和history两个参数之外，还加入了max_lenth和temperature等参数，这些参数实际上都是model.chat里面进行使用的，这样更好的去设置和学习。等到返回结果以后，就会返回时间和成功的标志，这样我们就获取了结果。

```python
from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForCausalLM, GenerationConfig
import uvicorn
import json
import datetime
import torch

# 设置设备参数
DEVICE = "cuda"  # 使用CUDA
DEVICE_ID = "0"  # CUDA设备ID，如果未设置则为空
CUDA_DEVICE = f"{DEVICE}:{DEVICE_ID}" if DEVICE_ID else DEVICE  # 组合CUDA设备信息

# 清理GPU内存函数
def torch_gc():
    if torch.cuda.is_available():  # 检查是否可用CUDA
        with torch.cuda.device(CUDA_DEVICE):  # 指定CUDA设备
            torch.cuda.empty_cache()  # 清空CUDA缓存
            torch.cuda.ipc_collect()  # 收集CUDA内存碎片

# 创建FastAPI应用
app = FastAPI()

# 处理POST请求的端点
@app.post("/")
async def create_item(request: Request):
    global model, tokenizer  # 声明全局变量以便在函数内部使用模型和分词器
    json_post_raw = await request.json()  # 获取POST请求的JSON数据
    json_post = json.dumps(json_post_raw)  # 将JSON数据转换为字符串
    json_post_list = json.loads(json_post)  # 将字符串转换为Python对象
    prompt = json_post_list.get('prompt')  # 获取请求中的提示
    history = json_post_list.get('history')  # 获取请求中的历史记录
    max_length = json_post_list.get('max_length')  # 获取请求中的最大长度
    top_p = json_post_list.get('top_p')  # 获取请求中的top_p参数
    temperature = json_post_list.get('temperature')  # 获取请求中的温度参数
    # 调用模型进行对话生成
    response, history = model.chat(
        tokenizer,
        prompt,
        history=history,
        max_length=max_length if max_length else 2048,  # 如果未提供最大长度，默认使用2048
        top_p=top_p if top_p else 0.7,  # 如果未提供top_p参数，默认使用0.7
        temperature=temperature if temperature else 0.95  # 如果未提供温度参数，默认使用0.95
    )
    now = datetime.datetime.now()  # 获取当前时间
    time = now.strftime("%Y-%m-%d %H:%M:%S")  # 格式化时间为字符串
    # 构建响应JSON
    answer = {
        "response": response,
        "history": history,
        "status": 200,
        "time": time
    }
    # 构建日志信息
    log = "[" + time + "] " + '", prompt:"' + prompt + '", response:"' + repr(response) + '"'
    print(log)  # 打印日志
    torch_gc()  # 执行GPU内存清理
    return answer  # 返回响应

# 主函数入口
if __name__ == '__main__':
    # 加载预训练的分词器和模型
    tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen-7B-Chat", trust_remote_code=True)
    model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat", device_map="auto", trust_remote_code=True).eval()
    model.generation_config = GenerationConfig.from_pretrained("Qwen/Qwen-7B-Chat", trust_remote_code=True) # 可指定
    model.eval()  # 设置模型为评估模式
    # 启动FastAPI应用，用6006端口映射到本地，从而在本地使用api
    uvicorn.run(app, host='0.0.0.0', port=6006, workers=1)  # 在指定端口和主机上启动应用
```

### 运行及使用API

我们运行方式很简单，直接在服务器终端运行

```
python api.py
```

加载完毕后出现如下信息说明成功。

![运行方式](https://picx.zhimg.com/80/v2-25146b4a0f3b5a0fa70782b1ed749e5d_720w.png?source=d16d100b)







默认部署在 6006 端口，通过 POST 方法进行调用，可以使用curl调用，如下所示：

```
 curl -X POST "http://127.0.0.1:6006" \
      -H 'Content-Type: application/json' \
      -d '{"prompt": "你好", "history": []}'
```

也可以使用python中的requests库进行调用，如下所示：

```
 import requests
 import json
 
 def get_completion(prompt):
     headers = {'Content-Type': 'application/json'}
     data = {"prompt": prompt, "history": []}
     response = requests.post(url='http://127.0.0.1:6006', headers=headers, data=json.dumps(data))
     return response.json()['response']
 
 if __name__ == '__main__':
     print(get_completion('你好'))
```

得到的返回值如下所示：

```
 {
   "response":"你好！很高兴为你服务。有什么我可以帮助你的吗？",
   "history":[["你好","你好！很高兴为你服务。有什么我可以帮助你的吗？"]],
   "status":200,
   "time":"2023-11-26 1:14:20"
 }
```

![运行结果](https://pic1.zhimg.com/80/v2-284a1395c44b8bb0177dae70fd54b930_720w.png?source=d16d100b)







## 总结

我觉得在有时候我们要实现一个API的时候，我们可以用FastAPI快速实现，并且得到一个不错的结果，这也是我学习的初衷，有时候一些服务器可能可以当做API来使用来调用，其实也方便去使用，也可以部署后成为商业产品，类似于OpenAI一样。

最后感谢一下FastAPI的文档，让我学习到很多，在里面还有更详细的使用方案，大家也可以去学习一下，然后再感谢一下datawhale的self-llm项目，也是在里面我学习到了使用FastAPI，大家如果对大模型感兴趣也可以关注一下。

self-llm项目：https://github.com/datawhalechina/self-llm

FastAPI学习文档：https://fastapi.tiangolo.com/zh/learn/
