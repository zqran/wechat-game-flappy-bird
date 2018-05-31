// 导入角色的基类
import Sprite from '../../base/sprite'
// 导入小鸟的基础配置
import config from '../../config'

// 导入图片资源
import databus from '../../databus'

const bird = config.gameInfo.bird

const MAX_HEIGHT = databus.screenHeight - config.gameInfo.land.height

// 最大旋转角度
const MAX_ANGLE = 90
const MAX_SPEED = 12
// 问题：当 速度为 6的时候，角度是多少？？
// 当前速度 / 最大速度 = 当前角度 / 最大角度
// 当前角度 = 当前速度 / 最大速度 * 最大角度

export default new Sprite({
  img: 'birds',
  ...bird,

  // 小鸟的加速度
  a: 9.8,
  // 速度
  speed: 0,

  init() {
    this.x = bird.x
    this.y = bird.y
    this.speed = 0
  },

  // 解决思路：给小鸟添加自己的render方法，让自己的render来决定如何渲染
  render(ctx, delta) {

    this.speed = this.speed + this.a * delta
    this.y += (this.speed * delta + 1/2 * this.a * delta * delta) * 30

    if (this.y >= (MAX_HEIGHT)) {
      this.y = MAX_HEIGHT
    }

    ctx.save()

    // 进行小鸟的旋转，但是需要先平移
    // 也就是：先平移再旋转
    ctx.translate(this.x, this.y)
    // 根据当前速度计算当前旋转角度
    let curAngle = this.speed / MAX_SPEED * MAX_ANGLE
    if (curAngle > MAX_ANGLE) {
      curAngle = MAX_ANGLE
    }
    // rotate的参数是弧度
    ctx.rotate(curAngle / 180 * Math.PI)

    const img = databus.resources.images[this.img]
    ctx.drawImage(img, 
      0, 0, this.width, this.height,
      -1/2 * this.width, -1/2 * this.height, this.width, this.height)
    
    ctx.restore()
  }
})