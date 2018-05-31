/**
 * 游戏主对象
 * 作用：
 *  1 加载游戏中所有的资源：音乐和图片
 *  2 等到资源加载完成，开启游戏主循环，游戏开始
 *  3 控制游戏时间
 */

// 导入游戏配置文件
// 包含了所有的游戏资源
import config from './config'
// 导入databus
import databus from './databus'
// 导入游戏场景管理器
import sceneManager from './scenes/index'

// 获取到绘制上下文
const ctx = canvas.getContext('2d')

export default class FlappyBird {
  constructor() {

    // 提供游戏时间
    // 时间间隔 = 当前帧的时间 - 上一帧的时间
    this.delta = 0
    this.curFrameTime = new Date() - 0
    this.lastFrameTime = new Date() - 0

    // 解决this指向问题：
    this.render = this.render.bind(this)

    // 调用start方法，开始游戏
    this.start()
  }

  start() {
    // 加载游戏资源
    this
      .loadResources()
      .then(() => {
        // 在此处，就可以开始游戏了
        // console.log('加载完成的游戏资源：', databus.resources)

        this.curFrameTime = new Date() - 0
        this.lastFrameTime = new Date() - 0

        window.requestAnimationFrame(this.render)

        // 绑定事件
        // 整个游戏中有两种事件分类：
        // 1 点击场景中的某个角色来触发事件
        // 2 点击整个场景来触发事件
        canvas.addEventListener('touchstart', (e) => {
          // console.log('事件绑定')
          // 触发当前场景中的事件，具体做什么事情，由每个场景说了算
          sceneManager.click(e)
        })
      })
  }

  /**
   * 游戏主循环，用来渲染游戏
   */
  render() {
    // 获取时间间隔
    this.curFrameTime = new Date() - 0
    // delta的单位是：秒（s）
    this.delta = (this.curFrameTime - this.lastFrameTime) / 1000
    this.lastFrameTime = this.curFrameTime

    // console.log('render')
    // 游戏渲染要做什么事情？？？
    // 1 渲染当前场景 
    //   细节：拿到当前场景，然后，调用当前场景的渲染方法，渲染游戏中的所有角色

    // 渲染流程：
    // 1 主循环调用 场景管理器中的render方法
    // 2 场景管理器调用当前场景的render方法
    // 3 当前场景调用场景中每个角色的render方法
    // 4 每个自己通过render方法渲染自己到页面中
    sceneManager.render(ctx, this.delta)

    window.requestAnimationFrame(this.render)
  }

  /**
   * 加载游戏资源
   */
  loadResources() {
    // 加载所有的图片和音乐
    // 当所有的资源加载完毕后，才能开始游戏
    // config.resources.IMG_NAME_LIST
    // config.resources.MUSIC_NAME_LIST

    // 思路：
    // 每加载完成一个游戏资源，就记录这个数量。
    // 当记录加载完成数量，与游戏资源总数量相同，就说明游戏资源加载完成了

    // 为什么要将所有的资源放到一个数组中？？？
    // 因为我们要等到所有的资源加载完成，放到一个数组中，方便我们判断资源有没有加载完成
    const resourcesList = [
      ...config.resources.IMG_NAME_LIST, 
      ...config.resources.MUSIC_NAME_LIST
    ]
    let resource = null
    // 加载完成的游戏资源数量
    let loadedCount = 0

    return new Promise((resolve, reject) => {
      resourcesList.forEach(resName => {
        if (resName.endsWith('.png')) {
          // 图片资源
          resource = new Image()
          // 注意：图片路径必须是绝对路径
          resource.src = `images/${resName}`
          // 添加到图片资源中
          databus.resources.images[resName.slice(0, -4)] = resource
        } else if (resName.endsWith('.mp3')) {
          // 音乐资源
          resource = new Audio()
          resource.src = `audio/${resName}`
          databus.resources.audios[resName.slice(0, -4)] = resource
        }
  
        // 监听资源加载完成的事件：
        resource.addEventListener('load', () => {
          loadedCount++
  
          if (loadedCount === resourcesList.length) {
            // 此时，就说明所有的游戏资源加载完成了
            // console.log('资源加载完成', loadedCount)
            resolve()
          }
        })
        
        // 游戏资源加载失败
        // 思路： 哪个资源加载失败了，就重新加载哪个资源
        resource.addEventListener('error', () => {
          reject()
        })
      })
    })
    
  }
}