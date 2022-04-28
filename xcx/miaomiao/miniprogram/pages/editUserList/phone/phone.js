const app=getApp()
const db=wx.cloud.database()
Page({

  data: {
    phoneNumber:''
  },
  onReady: function () {
this.setData({
  phoneNumber:app.userInfo.phoneNumber
})
  },
  handleNumber(event){
  let value=event.detail.value;
 this.setData({
  phoneNumber:value
 })
  },
  handleBtn(){
    this.editPhone();
  },
  editPhone(){
    wx.showLoading({
      title: '更新中',
    })
   console.log(this.data.phoneNumber)
    db.collection('users').doc(app.userInfo._id).update({
      data:{
        phoneNumber:this.data.phoneNumber
      }
    }).then((res)=>{
      
     wx.hideLoading(),
    wx.showToast({
      title: '更新成功',
    })
    app.userInfo.phoneNumber=this.data.phoneNumber
    })
  }

})