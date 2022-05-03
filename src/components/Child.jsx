// 子组件
import React, { Fragment } from "react";
import {withRouter}from 'dva/router'
class Child extends React.Component {
  handleButtonClick() {
      this.props.history.push(`/index/123`)
  }
  render() {
    return (
      <Fragment>
        <div>通用组件</div>
        <button onClick={() => this.handleButtonClick()}>跳转首页按钮</button>
      </Fragment>
    );
  }
}
export default withRouter(Child);
