<template>
  <div class="Login">
    <b-card bg-variant="light">
      <b-row>
        <b-col>
          <b-form-input v-model="email" placeholder="Email"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-input
            v-model="password"
            type="password"
            placeholder="Password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
           <b-button variant="danger">Sign In</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
