import axios from "axios";

// TODO: Declare an env for this
axios.defaults.baseURL = process.env.API_BASE_URL;

axios.interceptors.request.use(async function (config) {
  if (config?.headers) {
    config.headers.Accept = "application/json";
  }
  return config;
});

export default axios;
