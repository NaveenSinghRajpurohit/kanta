import axios from "@/utils/axios_new";
import Vue from "vue";

export default {
  state: {
    loginStatus: false,
    login_success_message: "",
    login_fail_message: "",
    login_in_progress: false,
  },
  mutations: {
    AUTH_START(state) {
      localStorage.removeItem("token");
      axios.defaults.headers = {};
      state.login_success_message = "";
      state.login_fail_message = "";
      state.login_in_progress = true;
    },
    AUTH_SUCCESS(state, token) {
      localStorage.setItem("token", token);
      axios.defaults.headers = {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      };
      state.login_success_message = "";
      state.login_fail_message = "";
    },
    LOGOUT(state) {
      localStorage.removeItem("token");
      axios.defaults.headers = {};
      state.login_success_message = "";
      state.login_fail_message = "";
      state.login_in_progress = false;
    },
    SET_LOGIN_SUCCESS_MESSAGE(state, message) {
      state.login_success_message = message;
    },
    SET_LOGIN_FAILURE_MESSAGE(state, message) {
      state.login_fail_message = message;
    },
    SET_LOGIN_IN_PROGRESS(state) {
      state.login_in_progress = true;
    },
    UNSET_LOGIN_IN_PROGRESS(state) {
      state.login_in_progress = false;
    },
  },
  actions: {
    login({ dispatch, commit, state, getters }, user) {
      function process_error(e, reject) {
        commit("UNSET_LOGIN_IN_PROGRESS");
        if (e == null) {
         
          dispatch("logout").then(() => {
            commit("SET_LOGIN_FAILURE_MESSAGE", "Server Error");
          });
        } else {
          let resp = e.response;
          switch (resp.status) {
            case 500:
            case 400:
              commit("SET_LOGIN_FAILURE_MESSAGE", resp.data.error);
              break;
            case 401:
              dispatch("logout");
              break;
            default:
              commit("SET_LOGIN_FAILURE_MESSAGE", resp.data.error);
              dispatch("logout");
              break;
          }
        }
        reject();
      }

      return new Promise((resolve, reject) => {
        commit("AUTH_START");
        axios({ url: getters.login_url, data: user, method: "POST" })
          .then((resp) => {
            commit("AUTH_SUCCESS", resp.data.token);
            dispatch("initialLoad")
              .then(() => {
                Vue.router.push({ name: "home" });
                resolve();
              })
              .catch((e) => process_error(null, reject));
          })
          .catch((e) => process_error(e, reject));
      });
    },

    logout({ dispatch, commit, state, getters }) {
      return new Promise((resolve, reject) => {
        commit("INITIAL_LOAD_RESET");
        commit("LOGOUT");
        axios.post(getters.logout_url);
        resolve();
      });
    },
  },
  getters: {
    login_success_message: (state) => state.login_success_message,
    login_fail_message: (state) => state.login_fail_message,
    login_in_progress: (state) => state.login_in_progress,
    isLogin: (state) => state.loginStatus
  },
};
