import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 0
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  togglePlusOrder = () => {
    this.setState({
      order: this.state.order + 1
    })
  };

  toggleMinusOrder = () => {
    this.setState({
      order: this.state.order - 1
    })
  };

  toggleResetOrder = () => {
    this.setState({
      order: 0
    })
  }

  render() {
    return (
      <>
        <Article
          title={"React の使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          order={this.state.order}
          togglePlusOrder={() => this.togglePlusOrder()}
          toggleMinusOrder={() => this.toggleMinusOrder()}
          toggleResetOrder={() => this.toggleResetOrder()}
        />
      </>
    );
  }
}

export default Blog;
