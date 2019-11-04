//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isPlayingMusic:false,
  },
  bgm: null,
  music_url:'/res/youdiantian.mp3',
  music_coverImgUrl: '/images/poster.jpg',
  //背景音频播放
  onReady:function(){
    this.bgm=wx.getBackgroundAudioManager()
    this.bgm.title='marray me'
    this.bgm.epname='wedding'
    this.bgm.singer='singer'
    this.bgm.coverImgUrl=this.music_coverImgUrl
    this.bgm.onCanplay(()=>{
      this.bgm.pause()
    })
    this.bgm.src=this.music_url
  },
  //播放器的单击事件
  play: function (e) {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 一键拨打电话功能
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '13700000000',
    })
  },
  callBride: function () {
    wx.makePhoneCall({
      phoneNumber: '15600000000',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
