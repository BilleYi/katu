// miniprogram/pages/editUserList/signature/signature.js
const app=getApp()
const db=wx.cloud.database()
Page({

  data: {
    signature:''
  },

  onReady: function () {
    this.setData({
      signature:app.userInfo.signature
           
    })
  },
  handleText(event){
let value=event.detail.value;
this.setData({
  signature:value
})
  },
  handleBtn(){
this.updateSignature();
  },
  updateSignature(){
   
    wx.showLoading({
      title: '更新中',
    })
  
db.collection('users').doc(app.userInfo._id).update({
data:{
  signature:this.data.signature
}
}).then((res)=>{
  
wx.hideLoading();
wx.showToast({
  title: '更新成功', 
})
app.userInfo.signature=this.data.signature;
})


  }

})