import axios from "axios";
import store from "@/store/";

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
    console.log(store.state.github);
    return Promise.reject(error);
  }
);

export { $axios };
