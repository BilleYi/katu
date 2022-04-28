// miniprogram/pages/editUserList/head/head.js
const app=getApp()
const db=wx.cloud.database()
let usersInfo=null
Page({


  data: {
userPhoto:''
  },


  onReady: function () {
this.setData({
  userPhoto:app.userInfo.userPhoto
})
  },
  handleimage(){
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success:(res)=>{
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        this.setData({
          userPhoto:tempFilePaths
        })
      }
      
    })
  },
  handleBtn(){
 wx.showLoading({
   title: '更新中'
  
 })
    db.collection('users').doc(app.userInfo._id).update({
      data:{
        userPhoto:this.data.userPhoto
      }    
    }).then((res)=>{
    
wx.hideLoading(),
wx.showToast({
  title: '更新成功'
})
app.userInfo.userPhoto=this.data.userPhoto;
    })
  },
  handleweixin(){
    wx.getUserProfile({
      desc: '用于完善会员资料', 
      success:res=>{
        usersInfo=res.userInfo;
        if(usersInfo){
this.setData({
  userPhoto:usersInfo.avatarUrl
},()=>{
  wx.showToast({
    title: '更新成功'
  })
  db.collection('users').doc(app.userInfo._id).update({
    data:{
      userPhoto:usersInfo.avatarUrl
    }    
  }).then((res)=>{
  
wx.hideLoading(),
wx.showToast({
title: '更新成功'
})
app.userInfo.userPhoto=usersInfo.avatarUrl;
  })

})
        }
      }
    })
  }

})