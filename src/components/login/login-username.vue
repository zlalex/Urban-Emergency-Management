<template>
  <login-form class="login-username" @submit="submitAsync" />
</template>

<script>
import LoginForm from "@/components/forms/login-form";
import setToken from "@/utils/setToken";

export default {
  name: "login-username",
  components: {
    LoginForm
  },
  methods: {
    submitAsync(data) {
      console.log(data, "loginData");
      setToken();
      this.$GoRoute("/");
    }
  }
};
</script>

<style lang="scss">
</style>