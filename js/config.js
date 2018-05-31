import databus from './databus'
const screenWidth = databus.screenWidth
const screenHeight = databus.screenHeight

// 游戏图片资源名称集合
const IMG_NAME_LIST = [
  'sky.png',
  'land.png',
  'pipe_top.png',
  'pipe_bottom.png',
  'birds.png',
  'gameover.png',
  'replay.png',
  'tap.png',
  'getready.png',
  'flappybird.png'
]

// 游戏音乐资源名称集合
const MUSIC_NAME_LIST = [
  'wing.mp3',
  'point.mp3',
  'hit.mp3',
  'die.mp3',
  'swooshing.mp3'
]

// bird
const BIRD_WIDTH = 150
const BIRD_HEIGHT = 45
const BIRD_X = 80
const BIRD_Y = 200

// 天空
const SKY_WIDTH = 800
const SKY_HEIGHT = window.innerHeight

// 陆地
const LAND_WIDTH = 336
const LAND_HEIGHT = 112

// 管道
const PIPE_WIDTH = 52
const PIPE_HEIGHT = 420

// flappybird标题
const FLAPPYBIRD_Y = 100
const FLAPPYBIRD_WIDTH = 254
const FLAPPYBIRD_HEIGHT = 73

// replay
const REPLAY_Y = 400
const REPLAY_WIDTH = 153
const REPLAY_HEIGHT = 88

// getready
const GETREADY_Y = 200
const GETREADY_WIDTH = 268
const GETREADY_HEIGHT = 84

// tap
const TAP_Y = 350
const TAP_WIDTH = 152
const TAP_HEIGHT = 143

// gameover
const GAMEOVER_Y = 150
const GAMEOVER_WIDTH = 273
const GAMEOVER_HEIGHT = 64

// 游戏速度
const SPEED = -2

const config = {
  // 游戏资源集合
  resources: {
    IMG_NAME_LIST,
    MUSIC_NAME_LIST,
  },
  
  // // 游戏信息：所有精灵的坐标和宽高
  gameInfo: {
    // 游戏速度
    speed: SPEED,
    
    bird: {
      x: BIRD_X,
      y: BIRD_Y,
      width: BIRD_WIDTH / 3,
      height: BIRD_HEIGHT,
      speed: 0
    },
    sky: {
      x: 0,
      y: 0,
      width: SKY_WIDTH,
      height: SKY_HEIGHT,
      speed: SPEED
    },
    land: {
      x: 0,
      y: screenHeight - LAND_HEIGHT,
      width: LAND_WIDTH,
      height: LAND_HEIGHT,
      speed: SPEED
    },
    pipe: {
      x: 0,
      y: 0,
      width: PIPE_WIDTH,
      height: PIPE_HEIGHT,
      speed: SPEED,
      horizontalGap: 130,
      verticalGap: 150
    },
    flappybird: {
      x: (screenWidth - FLAPPYBIRD_WIDTH) / 2,
      y: FLAPPYBIRD_Y,
      width: FLAPPYBIRD_WIDTH,
      height: FLAPPYBIRD_HEIGHT
    },
    replay: {
      x: (screenWidth - REPLAY_WIDTH) / 2,
      y: REPLAY_Y,
      width: REPLAY_WIDTH,
      height: REPLAY_HEIGHT
    },
    getready: {
      x: (screenWidth - GETREADY_WIDTH) / 2,
      y: GETREADY_Y,
      width: GETREADY_WIDTH,
      height: GETREADY_HEIGHT
    },
    tap: {
      x: (screenWidth - TAP_WIDTH) / 2,
      y: TAP_Y,
      width: TAP_WIDTH,
      height: TAP_HEIGHT
    },
    gameover: {
      x: (screenWidth - GAMEOVER_WIDTH) / 2,
      y: GAMEOVER_Y,
      width: GAMEOVER_WIDTH,
      height: GAMEOVER_HEIGHT
    },
    // 分数
    curScore: {
      y: 80,
      font: 'bolder 32px "微软雅黑"',
      fillStyle: '#fff'
    },
    // 游戏结束后显示的分数和最高分：
    score: {
      scoreY: 280,
      bestY: 320,
      font: 'bolder 32px "微软雅黑"',
      fillStyle: '#fff'
    }
  }
}

export default config
