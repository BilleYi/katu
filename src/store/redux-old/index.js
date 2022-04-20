import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const loadState = () => {
  try {
    // 也可以容错一下不支持sessionStorage的情况下，用其他本地存储
    const serializedState = sessionStorage.getItem("state")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    // ... 错误处理
    return undefined
  }
}

// redux开发者工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  // 创建store
  reducer,
  loadState(),
  enhancer
)

export default store
