import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./features/loginSlice"
import movieSlice from "./features/movieSlice"

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    loginInfo: loginSlice,
    movie: movieSlice,
  },
})
