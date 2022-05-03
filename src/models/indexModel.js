import { fetchCnode } from "../services/example";
export default {
  namespace: "indexModel",
  state: {
    name: "zhangsan",
    CnodeData:[],
  },
  //同步
  reducers: {
    setName(state, payload) {
      // console.log(23);
      let _state = JSON.parse(JSON.stringify(state));
      _state.name = payload.data.name;
      return _state;
    },
    setCnodeData(state,payload){
      let _state = JSON.parse(JSON.stringify(state));
      _state.CnodeData = payload.data
      return _state
    },
    subscriptionsTest(state,payload){
      console.log('subscriptions函数触发')
      return{

      }
    }
  },
  //异步
  effects: {
    *setNameAsync({ payload }, { put, call }) {
      yield put({
        type:"setName",
        data:{
          name:'超人强'
        }
      })
    },
    // 异步调用接口
    *CnodeAsync({ payload }, { put, call }) {
      let res = yield call(fetchCnode)
      const {success,data} = res.data;
      if(success){
        yield put({
          type:"setCnodeData",
          data
        })
      }
    },
  },
  //订阅  
  subscriptions: {
    haha({ history, dispatch }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname }) => {
        if (pathname === '/user') {
          console.log('用户页面')
          dispatch({
            type:"subscriptionsTest",
            data:{
              user:'xuesong',
              age:'18',
            }
          })
        }
      });
    },
  },
};
