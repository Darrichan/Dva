import React from "react";
import { Link } from "dva/router";
import  Child  from "../components/Child";

class userPage extends React.Component {
  render() {
    return (
      <div>
        <div>我是用户页</div>
        <Link to={"/index/213"}>首页</Link>
        <Child/>
      </div>
    );
  }
}
export default userPage;
