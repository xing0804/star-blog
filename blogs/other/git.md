---
title: git 常用命令
date: 2021-06-18
sidebar: 'auto'
tags:
 - git
---

* 初始化git init
* 提交到暂存区git add名称/ ./*
* 将暂存区的内容提交的历史区git commit -m  描述
* 对比工作区、暂存区、历史区的内容git diff
* 版本穿梭 git reset --hard HEAD^/版本号

* 查看当前状态 git status、git status -s
* 查看历史版本 git log --oneline --graph
* 撤销工作区的修改 git checkout -- 文件名
* 撤销暂存区的修改 git reset HEAD 文件名
* 删除文件 git rm 文件
* 分支创建/切换 got branch dev/git checkout dev  ==  git checkout -b dev;
* 合并分支 git merge dev;
* 查看分支 git branch