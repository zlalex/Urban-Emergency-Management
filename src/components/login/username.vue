<template>
  <div class="component-username">
    <login-form class="component-username-form" @submit="loginFormSubmit" />
  </div>
</template>

<script>
import LoginForm from "@/components/forms/login-form";

export default {
  components: {
    LoginForm
  },
  methods: {
    loginFormSubmit() {
      this.$emit("login");
    }
  }
};
</script>

<style lang="scss">
</style>