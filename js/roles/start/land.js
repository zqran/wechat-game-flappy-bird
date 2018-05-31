import Sprite from '../../base/sprite'

// 导入陆地的配置
import config from '../../config'

// 存储陆地角色的集合
const landList = []

for (var i = 0; i < 2; i++) {
  const landSprite = new Sprite({
    img: 'land',
    ...config.gameInfo.land,
    x: i * config.gameInfo.land.width
  })

  landList.push(landSprite)
}

export default landList