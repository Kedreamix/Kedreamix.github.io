---
title: "Failed building wheel for PyAudio  解决方法"
description: "Failed building wheel for PyAudio 解决方法"
date: 2024-01-28
updated: 2024-01-28
kind: note
tags: ["Note", "Linux"]
cover: "https://picx.zhimg.com/80/v2-85b33202a0c79fba4f52969014d37826.png"
featured: false
oldPath: "/Note/pyaudio/"
---

## Failed building wheel for PyAudio 解决方法

有时候在安装pyaudio的时候，总是有时候遇见一些错误，如下

```bash
  Building wheel for pyaudio (pyproject.toml) ... error
  error: subprocess-exited-with-error

  × Building wheel for pyaudio (pyproject.toml) did not run successfully.
  │ exit code: 1
  ╰─> [18 lines of output]
      running bdist_wheel
      running build
      running build_py
      creating build
      creating build/lib.linux-x86_64-cpython-310
      creating build/lib.linux-x86_64-cpython-310/pyaudio
      copying src/pyaudio/__init__.py -> build/lib.linux-x86_64-cpython-310/pyaudio
      running build_ext
      building 'pyaudio._portaudio' extension
      creating build/temp.linux-x86_64-cpython-310
      creating build/temp.linux-x86_64-cpython-310/src
      creating build/temp.linux-x86_64-cpython-310/src/pyaudio
      gcc -pthread -B anaconda3/envs/ernerf/compiler_compat -Wno-unused-result -Wsign-compare -DNDEBUG -fwrapv -O2 -Wall -fPIC -O2 -isystem anaconda3/envs/ernerf/include -fPIC -O2 -isystem anaconda3/envs/ernerf/include -fPIC -I/usr/local/include -I/usr/include -Ianaconda3/envs/ernerf/include/python3.10 -c src/pyaudio/device_api.c -o build/temp.linux-x86_64-cpython-310/src/pyaudio/device_api.o
      src/pyaudio/device_api.c:9:10: fatal error: portaudio.h: No such file or directory
          9 | #include "portaudio.h"
            |          ^~~~~~~~~~~~~
      compilation terminated.
      error: command '/usr/bin/gcc' failed with exit code 1
      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
  ERROR: Failed building wheel for pyaudio
Successfully built python_speech_features
Failed to build pyaudio
ERROR: Could not build wheels for pyaudio, which is required to install pyproject.toml-based projects
```

如果单纯查后面这一句，会发现找不到什么错误，最后我找到了对应的解决办法，实际上是linux有一些库没安装上，用root权限装一下即可

```bash
# 有些人说这样即可
sudo apt-get install portaudio19-dev
# 如果不行就试一下这样
sudo apt-get install libasound-dev portaudio19-dev libportaudio2 libportaudiocpp0
```

这样安装完以后，我们就可以正常安装pyaudio了

```bash
pip install pyaudio
```

我也在github上看到的相关帖子，大家也可以参考：<https://github.com/ardha27/AI-Waifu-Vtuber/issues/49>，而且这里面有个windows的解决方法，还蛮有趣，我还没试过

```bash
pip install pipwin
pipwin install pyaudio
pip install -r requirements.txt
```
