import React, { useState } from "react";
import LikeButton from "./LikeButton";

// const Article = (props) => {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <label htmlFor="check">公開状態：</label>
//       <input type="checkbox" id="check" checked={props.isPublished} onClick={() => props.toggle()} />
//       <br />
//       <button onClick={() => props.togglePlusOrder()}>+</button>
//       <button onClick={() => props.toggleMinusOrder()}>-</button>
//       <button onClick={() => props.toggleResetOrder()}>reset</button>
//       <p>{props.order}</p>
//       <br />
//       <LikeButton count={props.count} />
//     </div>
//   )
// }

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" id="check" checked={isPublished} onClick={() => togglePublished(!isPublished)} />
      <LikeButton />
    </div>
  )
}

export default Article;
