export default {
  "GET /api/mockData": (req, res) => {
    console.log("mockData", req, res);
    res.send({
      msg: "登录成功",
    });
  },
};
