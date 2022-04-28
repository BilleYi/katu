// miniprogram/pages/near/near.js
const app=getApp()
const db=wx.cloud.database()
const _=db.command
Page({

 data:{
  longitude:'',
  latitude:'',
  markers:[]
 },


getLocation(){
  wx.getLocation({
    type: 'gcj02',
    success:(res)=>{
      const latitude = res.latitude
      const longitude = res.longitude
     this.setData({
       latitude,
       longitude
     })
     this.getNear()
    }
   })
},
getNear(){
  
    db.collection('users').where({
      location: _.geoNear({
        geometry: db.Geo.Point(this.data.longitude, this.data.latitude),
        minDistance: 0,
        maxDistance: 5000,
      }),
      isLocation:true
  
    }).field({
      userPhoto:true,
      longitude:true,
      latitude:true
    }).get().then((res)=>{
      
   let data=res.data
   let result=[]
   if(data.length){
    for(let i=0;i<data.length;i++){
      result.push({
        iconPath:data[i].userPhoto,
        latitude:data[i].latitude,
        longitude:data[i].longitude,
        id:data[i]._id,
        width:30,
        height:30
      })
     
         }
         this.setData({
           markers:result
         })
   }
 
    })
  },
onShow: function () {
  this.getLocation()
},
onReady:function(){
  this.getLocation()
}


})