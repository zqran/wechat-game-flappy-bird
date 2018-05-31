import Scene from '../base/scene'

// 导入当前场景的角色
import gameover from '../roles/gameover/gameover'
import replay from '../roles/gameover/replay'
import score from '../roles/gameover/score'

export default new Scene({
  roles: [
    gameover,
    replay,
    score
  ],

  /**
   * 复用上一个场景中的角色
   */
  initRoles(roles) {
    this.roles = [...roles, ...this.roles]
  }
})