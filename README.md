# FlappyBird 小游戏

- **视频+代码资料获取方式，加QQ群：631398958**

## 课程内容

- 重点：如何开发小游戏
- 微信小游戏介绍和开发基础知识说明

```html
1 微信小游戏介绍
2 打飞机官方示例介绍和说明
  目录结构、配置 等
3 小游戏基础：canvas、adapter（Image、Audio）
4 Flappy Bird游戏演示和玩法介绍
5 Flappy Bird游戏分析
6 Flappy Bird游戏功能实现
```

## 小游戏介绍

- 微信内部提供的一个基础功能
- 小游戏 属于 小程序范畴
- 利用好微信的社交相关性，微信去中心化的情景下社交分享互动是非常重要的

```html
小游戏特指微信小游戏，是小程序的一个子类目，可在微信内被便捷地获取和传播，即点即玩，具备出色的用户体验。
在开发的视角来看，小游戏是一个基于Canvas/WebGL + 微信社交开放能力的新平台。
在框架上看分为三层，是一个典型的分层架构。微信中有一个小游戏的Runtime去运行小游戏，而OS本身可能会涉及到不同类的设备。

只要学习两个内容，就可以开发小游戏：
1 canvas的基本知识（HTML5）
2 微信小游戏API
```

- 小游戏的开发语言是：JavaScript - （编程届的宠儿~）
  - 前端不要瞧不起自己，后端更不要瞧不起前端
  - 意向者：来 [黑马程序员 上海校区](http://sh.itcast.cn/) - 前端学院，刘玺老师等着你

## 提交审核

- [2018-03-23 小程序游戏类目开放测试](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c2c93b34970f015869a98956401)
- [2018-04-08 小游戏资质提交审核指引](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=00004455a34458355496d601b5b808)

## 建立游戏快速启动模板

- 说明：需要设置`服务类目`为`游戏`，才可以创建游戏模板

### 流程说明

- 1 进入[小程序管理后台](https://mp.weixin.qq.com/)
- 2 在`首页`菜单中，找到step1小程序信息，点击填写按钮
- 3 进入`填写小程序信息`页面，服务类目选择：**游戏**
- 4 点击提交，完成小程序信息填写
- 5 在`设置`菜单的`开发设置`子菜单中，找到 **AppId**，此时就可以创建游戏模板了

### 学习官方打飞机示例

- 1 `dataBus`：用来管理游戏中的一些公共或全局数据
- 2 `Sprite`：游戏精灵，游戏中的每个角色实际上都是一个精灵
- 3 将精灵图片的宽度和高度（绘制在游戏中的）保存在一个常量中
- 4 使用面向对象方式来组织代码

## 运行环境

- JavaScript常见的宿主环境有：浏览器、Node.js
  - 宿主环境：运行JavaScript的环境
- 小游戏是一个不同于浏览器的运行环境，没有DOM，提供的是 wx API。通过 wx API，开发者可以调用 Native 提供的绘制、音视频、网络、文件等能力。
- 问题：会不会因此增加太多学习成本？ -----------为了减少前端开发人员的不适感，微信官方提供了一个适配器来减少学习成本，让前端开发人员更容易上手
- ![运行环境](https://developers.weixin.qq.com/minigame/dev/tutorial/images/framework-2.png)

## 小游戏 Adapter

- Adapter（适配器）是对基于浏览器环境的游戏引擎在小游戏运行环境下的一层适配层，使游戏引擎在调用 DOM API 和访问 DOM 属性时不会产生错误
- 在小游戏中，模拟浏览器环境下的DOM API，目的：屏蔽小游戏带来的新API的差异，让熟悉前端（JS）开发人员更容易上手把玩
  - 比如：创建图片
  - 前端：`new Image()`
  - 小游戏：`wx.createImage()`
- 注意：官方提供的`weapp-adapter`对浏览器环境的模拟远不完整，只针对游戏引擎可能访问的属性和调用的方法进行了模拟
- [Adapter](https://developers.weixin.qq.com/minigame/dev/tutorial/base/adapter.html)

## 技术支持

- ES6、canvas、模块化

## 模块化支持

- 小游戏提供了 CommonJS 风格的模块 API
- 注意：不支持 `index.js` 省略
  - 有一个js文件在 test/index.js ，在小游戏中：`require('test/index.js')`
- 注意：当用加载本地的图片、音频、视频资源时，必须写从代码包根目录开始的绝对路径。不能使用想对路径！！！

## 资源支持说明

- 目前两个平台完全支持的音频格式有 mp3、aac、wav。其他格式存在系统差异，不保证支持。
- 首次调用创建canvas，是显示在屏幕上的画布，之后调用创建的都是离屏画布

## RenderingContext - 渲染上下文支持说明

- 不支持的 2d 属性和接口
  - `isPointInPath`
  - globalCompositeOperation 不支持以下值： source-in source-out destination-atop lighter copy。如果使用，不会报错，但是将得到与预期不符的结果。

## FlappyBird 游戏框架搭建

### 分析游戏框架结构

- 概念：游戏场景
- FlappyBird游戏中，包含了4个场景
- 游戏对象：提供了游戏`主循环`，游戏是一停不停的在循环的，这个循环用来绘制游戏中的场景以及每个场景中角色

## 游戏目录结构职责描述

```html
./audio                                    // 音乐
./images                                   // 图片
./js
├── base                                   // 定义游戏开发基础类
│   ├── scene.js                           // 游戏场景类
│   └── sprite.js                          // 游戏基本元素精灵类
├── libs
│   └── weapp-adapter.js                   // 小游戏适配器
├── music
│   └── index.js                           // 音乐管理类
├── roles                                  // 所有场景中的角色
│   ├── start                              // 第一个场景：游戏开始
│   ├── getready                           // 第二个场景：准备游戏
│   ├── running                            // 第三个场景：游戏运行
│   └── gameover                           // 第四个场景：游戏结束
├── scenes                                 // 所有场景
│   ├── index.js                           // 场景管理器
│   ├── start.js                           // 场景：游戏开始
│   ├── getready.js                        // 场景：准备游戏
│   ├── running.js                         // 场景：游戏运行
│   └── gameover.js                        // 场景：游戏结束
├── config.js                              // 游戏资源配置文件
├── databus.js                             // 游戏状态、共享资源管理器
└── flappybird.js                          // 游戏入口主函数
game.js                                    // 小游戏启动入口
```

### flappybird.js 作用

- 1 加载游戏资源
- 2 控制游戏时间
- 3 开启游戏主循环，渲染游戏场景
- 4 绑定游戏事件：只触发当前场景事件

### 加载游戏资源

- 监听所有资源（图片和音频）的`load`事件，统计已加载完成的资源数量，比较已加载完成的资源数量与总资源数。如果相同，表示所有资源加载完成。
- 资源加载失败处理：监听资源的`error`事件，可以重新加载该资源
- 说明：`load`事件是小游戏提供的 adapter 提供的

### databus.js 作用

- 1 提供：游戏资源、屏幕宽高等多次使用的数据
- 2 控制游戏状态（gameover、score等）

### scenes/index.js 场景管理器

- 1 管理控制游戏中的所有场景
- 2 提供渲染场景、切换场景、触发事件方法

### gameover场景

- 说明：gameover场景中包含了running场景中的所有角色，并且gameover场景中天空、陆地、管道的位置需要与running场景中的游戏结束时的位置保持一致。因此，可以复用running场景中的所有角色
- 为了通用性，我们给 `Scene` 类，添加一个空的`initRoles`方法，并且在切换场景时调用该方法。如果场景需要复用上一个场景中的角色，就在自己的场景对象中实现`initRoles`方法

### 事件处理

- 说明：canvas整体是一个对象，所以，如果需要给canvas中的某个具体的角色绑定事件需要自己处理
- 给canvas中特定角色绑定事件的原理：
  - 1 得到这个角色的坐标（startX/startY/endX/endY）
  - 2 判断点击处坐标是不是在角色坐标内部

```js
// 获取点击处坐标
const clientX = e.touches[0].clientX
const clientY = e.touches[0].clientY
this.roles.forEach(role => {
  if (clientX >= role.x && clientX <= (role.x + role.width) && clientY >= role.y && clientY <= (role.y + role.height)) {
    role.click()
  }
})
```

### 碰撞检测

- 小鸟与管道碰撞处理思路：
  - 1 取小鸟的中心点
  - 2 获取所有管道的上下左右四个点
  - 3 判断小鸟中心点是否在管道内
  - 4 如果在说明碰撞
  - 5 如果感觉不精确，可以将小鸟抽象成一个正方形取4个点，分别与管道的坐标进行判断
- 简单的碰撞原理：将要碰撞的两个物体抽象出一些点，检测这些点是否被包含
- [资料 - 精确的像素碰撞检测](https://blog.csdn.net/nzb329/article/details/52054252/)

### 音乐

### 积分

## 小游戏官方示例

```text
提供一个 frame，实现累加记录总帧数，通过 (frame % 30 === 0) 实现控制时间间隔
frame时间间隔为：1000 / 60，因此：frame % 30 === 0 就是 0.5s
```

## 总结

### 技术点

- 1 canvas 的基础知识
- 2 ES6及其更新的JS语法
- 3 小游戏的基础知识（写项目代码的时候，没有涉及很多，原因是：小程序提供的 adapter 已经将小游戏中的常用API做了封装，这就减少了前端开发人员上手的难度。因为 adapter 就是用来适配前端的。所以，只要加载了这个文件，那么开发小游戏，就跟开发web页面中的canvas一样了~）
- 4 adapter中提供了什么功能

### 注意点

- 小游戏中的canvvas与web中的canvas的不同之处
  - 比如：isPointInPath这个方法在 微信开发者工具的模拟器中有效，但是，在上线后在手机中运行无效！！！
- 应该过一遍小游戏的开发文档，熟悉下小游戏的开发模式

### 编码

- 整个游戏的代码，全部才有`面向对象`的方式
- 在复杂的项目中，面向对象的优势才能够体现出来！
- 总代码量：1100行左右（加注释的）
