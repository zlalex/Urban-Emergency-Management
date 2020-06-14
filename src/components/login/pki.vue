<template>
  <div class="component-pki">
    <basic-button class="component-pki-button" @click.native.stop="pkiLogin">PKI登录</basic-button>
  </div>
</template>

<script>
export default {
  methods: {
    pkiLogin() {
      this.$emit("login");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-pki {
  text-align: center;
  line-height: 160px;
  .component-pki-button {
    width: 114px;
    line-height: 30px;
    color: #fff;
    background-color: $blue2;
  }
}
</style>