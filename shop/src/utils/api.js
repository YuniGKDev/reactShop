import axios from 'axios';

// 상황따라 주소 다름
const LOCAL_BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
//const PROD_BACKEND = process.env.REACT_APP_PROD_BACKEND;
//const BACKEND_PROXY = process.env.REACT_APP_BACKEND_PROXY;

const api = axios.create({
  baseURL: `${LOCAL_BACKEND}/api`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    request.headers.authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
return response;
}, function (error) {
  console.log("RESPONSE ERROR", error);
  return Promise.reject(error);
});

export default api;