# React 资讯网站项目

### 项目结构

```
src
    --components    公共组件
        |--Header           头部组件
        |--Footer           底部组件
        |--Login            登录组件
    --containers    页面组件
        |--MusicReview      乐评页面
        |--EnglishCorner    英语角页面
        |--NewsInfo         资讯页面
        |--Detail           详情页面
    --router        路由封装
    --store         Redux
    --utils         axios封装
    --index.js      入口文件
```

### 功能介绍

mock 地址：https://rap2-api.bundleb2b.net/repository/editor?id=56

1. 页面数据获取与渲染

2. 登录权限路由拦截与数据持久化（sessionStorage）

   > - 登录功能用户数据使用 rap2 模拟假数据，Login 组件编写判断逻辑
   > - 用户名：admin 密码：admin

3. 注册功能（待开发。。。）

### 功能演示

![项目功能演示](./项目功能演示.gif)
