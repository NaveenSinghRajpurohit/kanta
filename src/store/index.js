import Vue from "vue";
import Vuex from "vuex";
import api_store from "./modules/api_store";
import login_store from "./modules/login_store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    api_store,
    login_store,
  },
});
