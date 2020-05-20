<template>
  <login-form class="login-username" @submit="submitAsync" />
</template>

<script>
import LoginForm from "@/components/forms/login-form";

export default {
  name: "login-username",
  components: {
    LoginForm
  },
  methods: {
    submitAsync() {
      this.$GoRoute("/");
    }
  }
};
</script>

<style lang="scss">
</style>