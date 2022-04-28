// pages/index/index.js
const db=wx.cloud.database()
Page({

  data: {
imgurls:[
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0198ff55c4790b32f8755e66585796.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645347539&t=fbb21f06e8435d726afaa2d435928926', 
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645347539&t=52b8d1070ad1b472f3a9c6a80f27c51a', 
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010d4f582ec1bca84a0d304f14e1b9.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645347539&t=7b4e4bddd535127438a3a7958808bf16'
 
],
ListDate:{},
current:'time'
  },

  
  onReady: function (options) {
   this.getListData()
  },
  handleLinks(e){
let id=e.target.dataset.id;
wx.cloud.callFunction({
  name:'update',
  data:{
    collection:'users',
    doc:id,
    data:"{links:_.inc(1) }"
  }
}).then((res)=>{
let updated=res.result.stats.updated
if(updated){
let cloneListdata=[...this.data.ListDate]
for(let i=0;i<cloneListdata.length;i++){
if(cloneListdata[i]._id==id){
cloneListdata[i].links++;
}
}
this.setData({
  ListDate:cloneListdata
})
}

})
  },
  handleCurrent(e){
let current=e.currentTarget.dataset.current
if(current==this.data.current){
return false;
}
this.setData({
  current:current
},()=>{
  this.getListData();
});
  },
  getListData(){
    db.collection('users').field({
      userPhoto:true,
      nickName:true,
      links:true
    })
    .orderBy(this.data.current,'desc')
    .get().then((res)=>{
          this.setData({
            ListDate:res.data
          })
    })
  },
  handleDetail(ev){
let id=ev.target.dataset.id
wx.navigateTo({
  url: '../detail/detail?userId='+id
})
  }

  
})