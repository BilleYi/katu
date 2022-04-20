import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// createAsyncThunk创建一个异步的action，这个方法被触发的时候会有三个状态
// pending(进行中) fulfilled(成功) rejected(失败)

// 发起网络请求获取数据
const loadMoviesAPI = () => axios.get("/pages/3").then((res) => res.data)

// 这个action是可以直接调用的，用来处理异步操作获取数据
export const loadData = createAsyncThunk("movie/loadData", async () => {
  const res = await loadMoviesAPI()
  return res // 此处的返回结果会在 .fulfilled中作为payload的值
})

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    list: [],
    isLoading: true,
  },

  // 可以额外的触发其他slice中的数据关联改变
  extraReducers: {
    [loadData.fulfilled](state, { payload }) {
      console.log(payload)
      state.list = payload.data.list
      state.isLoading = !state.isLoading
    },
    [loadData.rejected](state, err) {
      console.log(err)
    },
    [loadData.pending]() {
      console.log("进行中")
    },
  },
})

export default movieSlice.reducer
