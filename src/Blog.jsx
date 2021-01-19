import React from "react";
import Article from "./Article";
// import * as FooBar from "./components/FooBar";
// import Hoge from "./components/Hoge";

// class Blog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPublished: false,
//       order: 0,
//       count: 0
//     }
//   }

//   componentDidMount() {
//     // ボタンがクリックされたらいいねをカウントアップする
//     document.getElementById("counter").addEventListener("click", this.countUp)
//   }

//   componentDidUpdate() {
//     if (this.state.count >= 10) {
//       this.setState({ count: 0 })
//     }
//   }

//   componentWillUnmount() {
//     document.getElementById("counter").removeEventListener("click", this.countUp)
//   }

//   // 公開状態を反転させる関数
//   togglePublished = () => {
//     this.setState({
//       isPublished: !this.state.isPublished
//     })
//   };

//   togglePlusOrder = () => {
//     this.setState({
//       order: this.state.order + 1
//     })
//   };

//   // 自作
//   toggleMinusOrder = () => {
//     this.setState({
//       order: this.state.order - 1
//     })
//   };

//   // 自作
//   toggleResetOrder = () => {
//     this.setState({
//       order: 0
//     })
//   }

//   countUp = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <>
//         <Article
//           title={"React の使い方"}
//           isPublished={this.state.isPublished}
//           toggle={() => this.togglePublished()}
//           order={this.state.order}
//           togglePlusOrder={() => this.togglePlusOrder()}
//           toggleMinusOrder={() => this.toggleMinusOrder()}
//           toggleResetOrder={() => this.toggleResetOrder()}
//           count={this.state.count}
//         />
//         <FooBar.Foo />
//         <FooBar.Bar />
//         <Hoge />
//       </>
//     );
//   }
// }

const Blog = () => {
  return (
    <>
      <Article
        title={"React の使い方"}
      />
    </>
  )
}

export default Blog;
