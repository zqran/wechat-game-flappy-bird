import Sprite from '../../base/sprite'

// 导入天空的配置
import config from '../../config'

const skyList = []

for (let i = 0; i < 2; i++) {
  const skySprite = new Sprite({
    img: 'sky',
    ...config.gameInfo.sky,
    x: i * config.gameInfo.sky.width,
    init() {
      this.x = i * config.gameInfo.sky.width
    },
    update() {
      // console.log('天空update')
      // 天空自己实现update方法，用来更新自己的x坐标
      this.x += this.speed

      if (this.x <= -this.width) {
        this.x += this.width * 2
      }
    }
  })

  skyList.push(skySprite)
}

export default skyList