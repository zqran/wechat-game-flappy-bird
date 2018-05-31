// 导入角色的基类
import Sprite from '../../base/sprite'
// 导入小鸟的基础配置
import config from '../../config'

// 导入图片资源
import databus from '../../databus'

export default new Sprite({
  img: 'birds',
  ...config.gameInfo.bird,

  // 小鸟的加速度
  a: 9.8,
  // 速度
  speed: 0,

  // 因为小鸟图片的绘制方式与其他角色绘制方式不同
  // 因此，Sprite基类中提供的render方法，已经无法正确渲染小鸟了。怎么解决这个问题？？？

  // 解决思路：给小鸟添加自己的render方法，让自己的render来决定如何渲染
  render(ctx, delta) {
    // console.log('bird render')

    // 小鸟下落，我们采用 匀加速直线运动
    // S = V * t + 1/2 * a * t * t
    // V = v0 + a * t

    this.speed = this.speed + this.a * delta
    this.y += (this.speed * delta + 1/2 * this.a * delta * delta) * 30

    if (this.y >= 220) {
      this.speed = -4.5
    }

    // console.log('速度：', this.speed)

    const img = databus.resources.images[this.img]
    ctx.drawImage(img, 
      0, 0, this.width, this.height,
      this.x, this.y, this.width, this.height)
  }
})