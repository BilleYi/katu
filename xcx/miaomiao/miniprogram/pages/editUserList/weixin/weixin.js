// miniprogram/pages/editUserList/weixin/weixin.js
const app=getApp()
const db=wx.cloud.database()
Page({

  data: {
weixinNumber:''
  },
 
  onReady: function () {
this.setData({
  weixinNumber:app.userInfo.weixinNumber
})
  },
  handleweixin(event){
let value=event.detail.value;
this.setData({
  weixinNumber:value
})
  },
  handleBtn(){
    this.updateweixin();
  },
  updateweixin(){
    wx.showLoading({
      title: '更新中',
    })
db.collection('users').doc(app.userInfo._id).update({
  data:{
    weixinNumber:this.data.weixinNumber
  }
}).then((res)=>{
   wx.hideLoading(),
   wx.showToast({
     title: '更新成功',
   })
 app.userInfo.weixinNumber=this.data.weixinNumber
})

  }
})