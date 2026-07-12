---
title: "从 SVN 迁移到 GitLab 的自动化工具体验"
date: 2025-04-10
categories: ["DevOps"]
tags: ["git", "svn", "automation"]
description: "开发 SVN 转 GitLab 自动化迁移工具的过程与经验分享。"
---

## 问题

MES 系统版本众多，每个案子大约有近百支程式需要维护。原本使用 SVN 做版本管理，但效率不佳。

## 解决方案

开发了一个自动上传工具，将 SVN 上的程式自动迁移至 GitLab，并保持版本历史纪录。

## 实现方式

```python
import subprocess

def migrate_svn_to_git(svn_path, git_repo):
    # Checkout SVN
    subprocess.run(["svn", "checkout", svn_path])
    
    # Init Git and push
    subprocess.run(["git", "init"])
    subprocess.run(["git", "remote", "add", "origin", git_repo])
    subprocess.run(["git", "add", "."])
    subprocess.run(["git", "commit", "-m", "Initial migration"])
    subprocess.run(["git", "push", "-u", "origin", "master"])
```

## 成果

- 迁移了 90+ 支程式
- 保持了完整的版本历史
- 后续更新可一键同步
