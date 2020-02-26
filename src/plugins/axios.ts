import axios from "axios";

const $axios = axios.create();

$axios.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  response => response,
  error => {
    // TODO: propertyを全て表示させる
    return Promise.reject(error);
  }
);

export { $axios };
