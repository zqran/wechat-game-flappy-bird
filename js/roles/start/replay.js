// 导入游戏角色基类
import Sprite from '../../base/sprite'

// 导入游戏配置
import config from '../../config'
// 导入场景管理器
import sceneManager from '../../scenes/index'
// 导入音乐管理对象
import music from '../../music/index'

// 导出创建好的角色
export default new Sprite({
  // 资源名称
  img: 'replay',
  ...config.gameInfo.replay,

  /**
   * 角色自己的单击事件，想让哪个角色触发事件，就给这个角色添加自己的click事件即可
   */
  click() {
    // console.log('点击了replay按钮')
    // 播放声音
    music.playSwooshing()
    // 切换到 ready 场景
    sceneManager.changeScene('getready')
  }
})