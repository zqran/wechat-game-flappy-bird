// 导入精灵类
import Sprite from '../../base/sprite'

// 导入游戏配置文件
import config from '../../config'

/**
 * 这是 getready 场景中的标题角色
 */
export default new Sprite({
  img: 'getready',
  ...config.gameInfo.getready
})