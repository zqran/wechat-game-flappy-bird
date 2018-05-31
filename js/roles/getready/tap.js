// 导入游戏角色基类
import Sprite from '../../base/sprite'

// 导入游戏配置
import config from '../../config'

// 导出创建好的角色
export default new Sprite({
  // 资源名称
  img: 'tap',
  ...config.gameInfo.tap
})