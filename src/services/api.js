import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = undefined;
  }
}

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    axios[method](path, data)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err?.response?.data?.error));
  });
}
