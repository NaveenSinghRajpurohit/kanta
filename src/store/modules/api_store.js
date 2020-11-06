import Vue from "vue";
import axios from "@/utils/axios_new";

export default {
  state: {
    api_root: process.env.VUE_APP_API_ENDPOINT,
  },
  actions: {},

  getters: {
    api_root_url: (state) => state.api_root,
    login_url: (state, getters) => `${state.api_root}/login`,
    logout_url: (state, getters) => `${state.api_root}/logout`,
    refresh_token_url: (state, getters) => `${state.api_root}/refresh`,
    forgot_pass_url: (state, getters) => `${state.api_root}/forgot_password`,
  },
};
