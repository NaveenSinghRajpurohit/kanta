import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import store from "../store";

function refresh_token(failedRequest) {
  return new Promise((resolve, reject) => {
    axios
      .post(store.getters.refresh_token_url)
      .then((tokenRefreshResponse) => {
        var token = tokenRefreshResponse.data.token;
        localStorage.setItem("token", token);
        setAuthHeaders();
        failedRequest.response.config.headers["Authorization"] =
          "Bearer " + token;
        failedRequest.response.config.headers["Accept"] = "application/json";
        resolve();
      })
      .catch((err) => {
        store.dispatch("logout").then(() => {
          window.location = "/login";
        });
      });
  });
}

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) => refresh_token(failedRequest);

// Instantiate the interceptor (you can chain it as it returns the axios instance)
var new_axios = createAuthRefreshInterceptor(axios, refreshAuthLogic);

function setAuthHeaders() {
  var token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    };
  }
}
setAuthHeaders();

window.axios = new_axios;

export default new_axios;
