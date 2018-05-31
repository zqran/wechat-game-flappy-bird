// 导入场景
import Scene from '../base/scene'

// 导入当前场景中的角色：
import skyList from '../roles/running/sky'
import landList from '../roles/running/land'
import bird from '../roles/running/bird'
import pipeList from '../roles/running/pipe'
import score from '../roles/running/score'

// 导入数据管理器
import databus from '../databus'
// 导入场景管理器
import sceneManger from '../scenes/index'
// 导入乐音管理器
import music from '../music/index'

/**
 * 创建running场景
 */
export default new Scene({
  // 当前场景角色列表：
  roles: [
    // 注意：角色添加的顺序问题，先添加进来的会被渲染在最下面
    ...skyList,
    ...pipeList,
    ...landList,
    score,
    bird
  ],

  // 因为小鸟经常会用到，所以，直接添加到当前场景对象中，方便操作
  bird,
  land: landList[0],

  /**
   * 初始化当前场景中的所有角色的坐标
   */
  init() {
    console.log('初始化角色坐标')
    this.roles.forEach(role => {
      role.init()
    })
  },
  
  /**
   * 检测传进来的小鸟坐标 与 管道坐标 有没有重合，重合就说明碰撞了
   * @param {object} bird 小鸟
   * @param {object} pipe 管道
   */
  isCollisionWith(bird, pipe) {
    if (bird.x >= pipe.startX && bird.x <= pipe.endX && bird.y >= pipe.startY && bird.y <= pipe.endY) {
      return true
    }

    return false
  },

  // 碰撞检测
  collisionDetection() {
    // 思路：遍历所有的管道对象，判断小鸟的中心点坐标在不在管道内
    return pipeList.some(pipe => {
      return this.isCollisionWith(this.bird, pipe.position.top) || this.isCollisionWith(this.bird, pipe.position.bottom)
    })
  },

  /**
   * 判断小鸟是否触地
   */
  isLanded() {
    return this.bird.y >= this.land.y
  },

  /**
   * 游戏积分
   */
  setScore() {
    pipeList.forEach(pipe => {
      if (!pipe.scoreMark && this.bird.x >= (pipe.x + pipe.width)) {
        pipe.scoreMark = true
        databus.score += 1

        music.playPoint()
      }
    })
  },

  /**
   * 每次重新绘制游戏，都需要进行操作
   */
  update() {
    let isCollision = false
    let isLanded = false
    
    if (!databus.gameover) {
      // 游戏没有停止
      // 是否与管道碰撞
      isCollision = this.collisionDetection()
      // 积分
      this.setScore()
    }
    
    // 是否触底
    isLanded = this.isLanded()
    // 如果小鸟与管道碰撞，那么，小鸟落地后，再出现gameover
    // 如果小鸟与陆地碰撞，那么，直接出现gameover
    if (isCollision) {
      // 说明发生碰撞
      databus.gameover = true

      music.playDie()
    }

    if (isLanded) {
      if (!databus.gameover) {
        music.playDie()
      }
      
      databus.gameover = true

      // 记录最高分
      databus.bestScore = databus.score > databus.bestScore ? databus.score : databus.bestScore

      // 切换场景，并且设置游戏没有结束
      sceneManger.changeScene('gameover')
      music.playSwooshing()
    }
  },

  // 进行碰撞检测
  // 问题：什么时候进行碰撞检测？？？ 游戏每重新绘制一次，就检测一次
  // 问题：检测的代码写在哪？？？

  /**
   * 用来让小鸟随着点击跳动起来
   */
  click() {
    music.playWing()
    this.bird.speed = -6
  }
})