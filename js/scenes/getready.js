// 导入场景
import Scene from '../base/scene'

// 导入当前场景中的角色：
import getready from '../roles/getready/getready'
import tap from '../roles/getready/tap'
import sky from '../roles/getready/sky'
import landList from '../roles/getready/land'
import bird from '../roles/getready/bird'

// 导入场景管理器
import sceneManger from '../scenes/index'
// 导入乐音管理器
import music from '../music/index'

/**
 * 创建getready场景
 */
export default new Scene({
  // 当前场景角色列表：
  roles: [
    // 注意：角色添加的顺序问题，先添加进来的会被渲染在最下面
    sky,
    getready,
    tap,
    ...landList,
    bird
  ],
  
  /**
   * 因为当前整个场景点击后，都能够进入到下一个场景，
   * 因此，我们直接给当前的实例对象添加click，那么，将来触发的单击事件就是当前添加的了
   */
  click() {
    // 播放音乐
    music.playWing()
    // 切换到游戏中场景
    sceneManger.changeScene('running')
  }
})