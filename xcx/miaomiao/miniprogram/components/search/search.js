// components/search/search.js
const db=wx.cloud.database()
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  }, 
   options: {
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的初始数据
   */
  data: {
isFocus:false,
historyList:[],
searchContent:'',
searchList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
handleFocus(){
  wx.getStorage({
    key: 'searchHistory',
    success: (res)=> {
      this.setData({
        historyList:res.data
      })
    }
  })
  this.setData({
    isFocus:true
  })
},
handleCancel(){
  this.setData({
    isFocus:false,
    searchContent:''
  })
},
handleFirm(ev){
  let value=ev.detail.value
  let cloneHistoryList=[...this.data.historyList];
  cloneHistoryList.unshift(value);
wx.setStorage({
  key: 'searchHistory',
  data: [...new Set(cloneHistoryList)]
  
})
this.changeSearchList(value)
 },
 handleHistoryDelete(){
  wx.removeStorage({
    key: 'searchHistory',
    success: (res)=> {
      this.setData({
        historyList:[]
      })
    }
  })
 },
 changeSearchList(value){
   console.log(value)
db.collection('users').where({
  nickName: db.RegExp({
    regexp: value,
    options: 'i',
  })
}).field({
  userPhoto:true,
  nickName:true
}).get().then((res)=>{
console.log(res)
this.setData({
  searchList:res.data
})
})
 },
 handleHistoryItemDel(ev){
let value=ev.target.dataset.text;
this.changeSearchList(value)
 }

  }
})
