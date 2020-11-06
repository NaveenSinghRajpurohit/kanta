<template>
  <div class="Register">
    <b-card bg-variant="light">
      <b-row>
        <b-col>
          <b-form-input v-model="name" placeholder="Name"></b-form-input>
        </b-col>
      </b-row>
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
          <b-form-input
            v-model="repassword"
            type="password"
            placeholder="Re-enter password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-checkbox
            id="checkbox-1"
            v-model="agree"
            name="checkbox-1"
          >
            I accept the terms and use
          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
           <b-button variant="danger">Sign Up</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Register",
   data() {
    return {
      name: "",
      email: "",
      password: "",
      repassword: "",
      agree: true
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
