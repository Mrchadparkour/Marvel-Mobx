import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import MarvelStore from "./MarvelStore"
import MarvelList from "./MarvelList"

const app = document.getElementById("app")

ReactDOM.render(<MarvelList store={MarvelStore} />, app)
