import React from "react";

const Article = (props) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "公開";
  } else {
    publishState = "非公開";
  }
  return (
    <div>
      <h2>{props.title}</h2>
      {props.order ? (<p>{props.order}です</p>) : null}
      {props.author ? (<p>著者：{props.author}</p>) : null}
      {props.isPublished ? <p>{publishState}</p> : null}
    </div>
  )
}

export default Article;
