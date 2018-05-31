// 导入音乐资源
import databus from '../databus'
const audios = databus.resources.audios

export default {
  /**
   * 播放嗖嗖声
   */
  playSwooshing() {
    audios.swooshing.currentTime = 0
    audios.swooshing.play()
  },
  /**
   * 播放小鸟飞动声音
   */
  playWing() {
    audios.wing.currentTime = 0
    audios.wing.play()
  },
  /**
   * 播放积分声
   */
  playPoint() {
    audios.point.currentTime = 0
    audios.point.play()
  },
  /**
   * 播放小鸟碰撞后的死亡声
   */
  playDie() {
    audios.hit.currentTime = 0
    audios.hit.play()
    
    audios.die.currentTime = 0
    audios.die.play()
  }
}