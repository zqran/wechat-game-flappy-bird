/**
 * 这是游戏场景管理器
 * 作用：
 *  1 管理游戏中所有的场景
 *  2 渲染场景
 *  3 切换场景
 *  4 处理当前场景的事件
 */

// 导入第一个场景
import start from './start'
import getready from './getready'
import running from './running'
import gameover from './gameover'

export default {
  // 游戏场景集合
  scenesList: {
    start,
    getready,
    running,
    gameover
  },

  // 当前场景名称：默认值为 start
  currentSceneName: 'start',
  // currentSceneName: 'getready',
  // currentSceneName: 'running',

  /**
   * 触发当前场景的事件
   * @param {object} e 事件对象
   */
  click(e) {
    this.scenesList[this.currentSceneName].click(e)
  },

  /**
   * 渲染场景
   */
  render(ctx, delta) {
    // 根据当前场景的名称，获取到当前场景
    // 并且渲染当前场景
    // console.log('场景管理器已经渲染')
    this.scenesList[this.currentSceneName].render(ctx, delta)
  },

  /**
   * 切换场景
   */
  changeScene(sceneName) {
    // 切换场景的时候，决定是否复用上一个场景中的角色
    // 我们要提供一个通用的方式，而不是为了解决问题采用硬编码（写死，不灵活）
    // sceneName 表示要切换到哪个场景
    // currentSceneName 赋值前表示上一个场景
    this.scenesList[sceneName].initRoles(this.scenesList[this.currentSceneName].roles)

    // 调用场景的初始化方法，用来初始化当前场景中所有角色的起始位置
    this.scenesList[sceneName].init()

    // 切换场景
    this.currentSceneName = sceneName
  }
}