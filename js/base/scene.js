/**
 * 场景类
 */

import databus from '../databus'

export default class Scene {
  constructor(config) {
    // 游戏中所有的精灵（角色）
    // roles 是一个数组
    // this.roles = config.roles

    // 为了传递进来的所有配置，都能覆盖到，我们遍历config
    for (let k in config) {
      this[k] = config[k]
    }
  }

  /**
   * 用来初始化当前场景中的所有角色坐标
   */
  init() {}

  /**
   * 如果下一个场景需要复用上一个场景中的角色，
   * 就在自己的场景对象中实现这个方法
   */
  initRoles(roles) {}

  /**
   * 因为每个场景都有自己的事件，因此，我们在基类中添加单击事件
   */
  click(e) {
    // 遍历当前场景中的所有角色，分别触发每个角色中绑定的事件
    // 如果角色绑定了事件，那么，这个事件就会触发

    // 点击处的坐标
    const clientX = e.touches[0].clientX
    const clientY = e.touches[0].clientY

    this.roles.forEach(role => {
      if (clientX >= role.x && clientX <= (role.x + role.width) && clientY >= role.y && clientY <= (role.y + role.height)) {
        role.click()
      }
    })
  }

  update() {}

  /**
   * 渲染当前场景
   * 遍历当前场景中所有的角色对象，分别调用每个角色的渲染自己的方法
   */
  render(ctx, delta) {
    this.roles.forEach(role => {
      role.render(ctx, delta)

      if (!databus.gameover) {
        role.update()
      }
    })

    this.update()
  }
}