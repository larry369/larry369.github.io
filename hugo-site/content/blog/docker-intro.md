---
title: "Docker 基础入门：从零开始容器化你的应用"
date: 2025-06-15
categories: ["DevOps"]
tags: ["docker", "devops", "tutorial"]
description: "介绍 Docker 的基本概念、常用指令，以及如何将 Spring Boot 应用容器化。"
---

## 什么是 Docker？

Docker 是一个开源的容器化平台，让你可以将应用程序及其依赖打包到一个轻量级、可移植的容器中。

## 常用指令

```bash
# 构建镜像
docker build -t my-app .

# 运行容器
docker run -d -p 8080:8080 my-app

# 查看运行中的容器
docker ps

# 停止容器
docker stop <container-id>
```

## Dockerfile 示例

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 总结

Docker 让部署变得简单，配合 CI/CD 可以实现自动化部署流程。
