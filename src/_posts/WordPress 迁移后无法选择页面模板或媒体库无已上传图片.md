---
category: 历史文章
tags:
  - php
  - wordpress
date: 2017-10-25 15:20:52
title: WordPress 迁移后无法选择页面模板或媒体库无已上传图片
---

wordpress 迁移服务器后，发现引用的图片正常，可是后台媒体库没有图片显示，

另外建立页面无法选择使用的模板，网上有说是模板文件没有指定 Template Name, 无法被扫描到。

这种基本是自己开发模板才有可能漏掉，一直正常使用的成熟模板基本没有这个可能。
<!-- more -->

最后在 https://www.kejianet.cn/scandir/ 找到解决方案，其实是 php 无法对目录下文件进行扫描。

原因在于服务器的 php 设置，位置在于 php.ini 里面的 disable_functions 参数，去掉其中的 scandir 函数即可使他不再被禁用。