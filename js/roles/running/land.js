import Sprite from '../../base/sprite'

// 导入陆地的配置
import config from '../../config'

// 存储陆地角色的集合
const landList = []

for (let i = 0; i < 3; i++) {
  const landSprite = new Sprite({
    img: 'land',
    ...config.gameInfo.land,
    x: i * config.gameInfo.land.width,
    init() {
      this.x = i * config.gameInfo.land.width
    },
    update() {
      this.x += this.speed

      if (this.x <= -this.width) {
        this.x += this.width * 3
      }
    }
  })

  landList.push(landSprite)
}

export default landList