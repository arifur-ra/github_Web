import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import React from "react"
import "./WebTool.css"

const ChildWebTool = ({ count, title, onClickHandler }) => {
  return (
    <div className="child">
      <span className="span">{count}</span>
      <h2>{title}</h2>
      <button onClick={onClickHandler}>
        Vote <ThumbUpIcon />
      </button>
    </div>
  )
}

export default ChildWebTool
