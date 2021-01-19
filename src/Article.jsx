import React from "react";

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={props.isPublished} onClick={() => props.toggle()} />
      <br />
      <button onClick={() => props.togglePlusOrder()}>+</button>
      <button onClick={() => props.toggleMinusOrder()}>-</button>
      <button onClick={() => props.toggleResetOrder()}>reset</button>
      <p>{props.order}</p>
    </div>
  )
}

export default Article;
