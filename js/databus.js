/**
 * 1 提供公共的数据
 * 2 提供游戏状态（gameover、score）
 */
export default {
  // 游戏资源
  resources: {
    images: {},
    audios: {}
  },

  // 手机屏幕的高度和宽度
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,

  // 游戏是否结束
  gameover: false,
  // 游戏积分
  score: 0,
  bestScore: 0
}