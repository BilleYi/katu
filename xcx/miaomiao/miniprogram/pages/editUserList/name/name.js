// miniprogram/pages/editUserList/name/name.js
const app=getApp()
const db=wx.cloud.database()
let usersInfo=null
Page({
  data: {
nickName:''
  },
  onReady: function () {
this.setData({
  nickName:app.userInfo.nickName
})
  },
  handleName(event){
let value=event.detail.value;
  this.setData({
    nickName:value
  })
  },
  handleBtn(){
    this.updateNickName();
  },
  updateNickName(){
    
    wx.showLoading({
      title: '更新中',
    })
    db.collection('users').doc(app.userInfo._id).update({
      data:{
        nickName:this.data.nickName
      }
    }).then((res)=>{
wx.hideLoading(),
wx.showToast({
  title: '更新成功',
})
    }),
    app.userInfo.nickName=this.data.nickName
  },
  handleweixinBtn(){
     wx.getUserProfile({
      desc: '用于完善会员资料', 
      success:res=>{      
      usersInfo=res.userInfo;
      if(usersInfo){
this.setData({
  nickName:usersInfo.nickName
},()=>{
 
  this.updateNickName();
})
      }
      }
     })
   
  }

  
  

})