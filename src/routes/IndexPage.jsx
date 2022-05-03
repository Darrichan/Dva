import React from "react";
import { connect } from "dva";
import { registerMock } from "../services/example";
class indexPage extends React.Component {
  handlerSetName = () => {
    this.props.dispatch({
      type: "indexModel/setName",
      data: {
        name: "猪猪侠",
      },
    });
  };
  handlerSetNameAsync = () => {
    this.props.dispatch({
      type: "indexModel/setNameAsync",
      data: {
        name: "猪猪侠",
      },
    });
  };
  handlerCnodeAsync = () => {
    this.props.dispatch({
      type: "indexModel/CnodeAsync",
    });
  };
  handlerUserPage = () => {
    this.props.history.push("/user");
  };
  async componentDidMount() {
    let res = await registerMock();
    console.log(res);
  }
  render() {
    const { CnodeData } = this.props;
    const CnodeDataList = CnodeData?.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
    return (
      <div>
        我是首页
        <p>{this.props.name}</p>
        <p>
          <button onClick={this.handlerSetName}>setName</button>
          <button onClick={this.handlerSetNameAsync}>setNameAsync</button>
          <button onClick={this.handlerCnodeAsync}>CnodeAsync</button>
          <button onClick={this.handlerUserPage}>前往用户页面</button>
          {CnodeDataList}
        </p>
      </div>
    );
  }
}
const masStateToProps = (state) => {
  return {
    msg: "我爱北京天安门",
    name: state.indexModel.name,
    CnodeData: state.indexModel.CnodeData,
  };
};

export default connect(masStateToProps)(indexPage);
