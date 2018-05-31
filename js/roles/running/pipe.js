import Sprite from '../../base/sprite'

// 导入管道的配置
import config from '../../config'
import databus from '../../databus'

const pipeList = []
const pipeConfig = config.gameInfo.pipe

for (let i = 0; i < 3; i++) {
  const pipeSprite = new Sprite({
    img: 'pipe_top',
    bottomImg: 'pipe_bottom',
    ...pipeConfig,
    x: databus.screenWidth + i * (pipeConfig.width + pipeConfig.horizontalGap),
    // 下管道坐标
    bottomY: 0,
    // 是否积分
    scoreMark: false,

    init() {
      // 初始化管道对象的坐标
      this.x = databus.screenWidth + i * (pipeConfig.width + pipeConfig.horizontalGap)
      this.y = pipeConfig.y
      this.bottomY = 0

      // 在角色创建的时候，就随机生成管道的坐标
      this.setPipeY()
      // 重置用于碰撞检测的管道坐标对象
      this.setPosition()
      this.scoreMark = false
    },

    /**
     * 记录管道坐标
     */
    setPosition() {
      // 上管道坐标
      const position = {
        startX: this.x,
        startY: this.y,
        endX: this.x + this.width,
        endY: this.y + this.height
      }

      this.position = {
        top: position,
        bottom: {...position, startY: this.bottomY, endY: this.bottomY + this.height}
      }
    },

    /**
     * 用来设置管道的Y坐标
     */
    setPipeY() {
      // 随机生成上管道的高度
      // 生成一个 [150, 350) 之间的随机高度
      const randomHeight = Math.random() * 200 + 150
      // 上管道的y坐标
      this.y = randomHeight - this.height
      // 下管道的y坐标
      this.bottomY = randomHeight + this.verticalGap
    },

    /**
     * 更新管道的位置
     */
    update() {
      this.x += this.speed

      if (this.x < -(this.width + this.horizontalGap)) {
        this.x += (this.width + this.horizontalGap) * 3
        // 重新更新管道的Y坐标
        this.setPipeY()
        // 重新设置当前管道没有积分
        this.scoreMark = false
      }

      // 记录管道坐标
      this.setPosition()
    },

    /**
     * 管道自己的绘制方法，用来绘制上下管道
     * @param {object} ctx 绘制上下文
     */
    render(ctx) {
      ctx.drawImage(databus.resources.images[this.img], this.x, this.y, this.width, this.height)
      ctx.drawImage(databus.resources.images[this.bottomImg], this.x, this.bottomY, this.width, this.height)
    }
  })

  pipeList.push(pipeSprite)
}

export default pipeList