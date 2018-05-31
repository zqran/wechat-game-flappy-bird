// 导入databus
import databus from '../databus'

/**
 * 这是精灵类
 * 作用：用来创建所有的游戏精灵（角色）
 * 这个类中应该提供所有游戏精灵的一些公共的属性或方法
 * 精灵特有的属性或方法应该放在精灵对象自身
 */
export default class Sprite {
  constructor(config) {
    // // 图片
    // this.img = config.img
    // // 位置
    // this.x = config.x
    // this.y = config.y
    // // 宽高
    // this.width = config.width
    // this.height = config.height

    // 使用 for-in 循环，来遍历传进来的config参数
    // 将config参数中的所有属性，添加给this
    // 注意：如果 config 中也提供了一个 render，那么会覆盖原来的render
    for (var k in config) {
      this[k] = config[k]
    }

    this.init()
  }

  /**
   * 精灵的单击事件
   */
  click() {}

  /**
   * 初始化游戏角色的时候，执行的操作
   */
  init() {}

  /**
   * 如果角色会动，那么应该在角色中自己实现动的方式
   * 如果角色不会动，直接使用这个方法即可
   */
  update() {}

  // 渲染自己的方法
  render(ctx) {
    ctx.drawImage(databus.resources.images[this.img], this.x, this.y, this.width, this.height)
  }
}