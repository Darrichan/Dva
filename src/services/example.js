import request from "../utils/request";
const proxy = "/apis";
export function query() {
  return request("/api/users");
}

export function fetchCnode() {
  return request(proxy + "/api/v1/topics");
}

export function registerMock(){
  return request("/api/mockData")
}