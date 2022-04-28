// miniprogram/pages/editUserList/location/location.js
const app=getApp()
const db=wx.cloud.database()
Page({


  data: {
isLocation:true
  },

  onReady: function () {
this.setData({
  isLocation:app.userInfo.isLoccation
})
  },
  switch1Change(event){
let value=event.detail.value;
db.collection('users').doc(app.userInfo._id).update({
  data:{
    isLocation:value
  }
}).then((res)=>{

})

  }
})