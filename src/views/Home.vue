<template>
  <div class="app-container">
    <b-container class="login-form-container" v-if="!isLogin">
      <b-row>
        <b-col>Ch</b-col>
        <b-col>2 of 3</b-col>
        <b-col class="login-form">
          <b-tabs align="center">
            <b-tab active>
              <template #title> Sign In </template>
              <login />
            </b-tab>
            <b-tab lazy>
              <template #title> Sign Up </template>
              <register />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="dashboard" v-else>
      <b-row>
        <b-col>Logged</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Login,
    Register,
  },
  computed: {
    ...mapGetters(["isLogin"]),
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  .login-form-container {
    margin-top: 10rem;
    .login-form {
      background: #42b983;
    }
    .row {
      height: 65vh !important;
    }
  }
}
</style>