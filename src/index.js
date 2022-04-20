import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store"
import "./utils/http"
import APP from "./App"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <APP />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
