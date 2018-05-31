import Sprite from '../../base/sprite'

// 导入天空的配置
import config from '../../config'

export default new Sprite({
  img: 'sky',
  ...config.gameInfo.sky
})