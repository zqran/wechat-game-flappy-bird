import Sprite from '../../base/sprite'

import config from '../../config'
import databus from '../../databus'

const score = config.gameInfo.curScore

export default new Sprite({
  /**
   * 绘制分数
   * @param {object} ctx 绘制上下文
   */
  render(ctx) {
    const scoreText = databus.score

    ctx.font = score.font
    ctx.fillStyle = score.fillStyle
    const scoreWidth = ctx.measureText(scoreText).width
    ctx.fillText(scoreText, (databus.screenWidth - scoreWidth) / 2, score.y)
  }
})