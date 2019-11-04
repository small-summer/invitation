// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://127.0.0.1:3000/xx.mp4',
    danmuList:[
      {text:'第1s出现的弹幕',color:'#ff0000',time:1},
      {text: '第3s出现的弹幕', color: '#ff00ff', time:3}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  videoContext:null,
  inputValue:'',
  onReady: function () {
    this.videoContext=wx.createVideoContext('myVideo')
    const TxvContext=requirePlugin('tencentvideo')
    var txvContext=TxvContext.getTxvContext('txv1')
    txvContext.play()
    txvContext.pause()
  },
  bindInputBlur:function(e){
    this.inputValue=e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],//视频选择的来源，相册和相机
      maxDuration:60,
      camera:'back',//前置&后置摄像头
      success:res=>{
        this.setData({
          src:res.tempFilePath
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})