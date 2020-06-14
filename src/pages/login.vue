<template>
  <div class="page-login">
    <div class="page-login-content">
      <h1 class="page-login-content__title">城市危化品全生命周期智能监控处置系统</h1>
      <radio-button :data="loginTypes" v-model="loginType" />
      <div class="page-login-content__type">
        <div @login="goRoute" :is="loginSection"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginPki from "@/components/login/pki";
import LoginQrcode from "@/components/login/qrcode";
import LoginUsername from "@/components/login/username";
import setToken from "@/utils/setToken";

export default {
  components: {
    LoginPki,
    LoginQrcode,
    LoginUsername
  },
  data: () => ({
    loginTypes: [
      { name: "二维码", value: "LoginQrcode" },
      { name: "PKI", value: "LoginPki" },
      { name: "用户名/密码", value: "LoginUsername" }
    ],
    loginType: "LoginUsername"
  }),
  computed: {
    loginSection() {
      return this.loginType;
    }
  },
  methods: {
    goRoute(token = "") {
      token ? setToken(token) : setToken();
      this.$GoRoute("/");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.page-login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/img-sign-in.png");
  background-size: cover;
  .page-login-content__title {
    position: absolute;
    top: -64px;
    left: -45px;
    font-size: $h1;
    line-height: 32px;
    color: #fff;
    word-break: keep-all;
  }
  .page-login-content {
    position: relative;
    top: -100px;
    width: 342px;
  }
  .page-login-content__type {
    height: 200px;
    padding: 20px;
    background-color: #fff;
  }
}
</style>