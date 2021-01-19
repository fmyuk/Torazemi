import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "Torahack"
    return (
      <>
        <Article
          title={"React の使い方"}
          order={3}
          isPublished={true}
          author={authorName}
        />
        <Article title={"JSX の使い方"} />
        <Article title={"環境構築してみよう"} />
      </>
    );
  }
}

export default Blog;
