<template>
  <div class="page-login">
    <div class="page-login-content">
      <h1>城市危化品全生命周期智能监控处置系统</h1>

      <radio-button :data="loginTypes" v-model="loginType"/>
      <div class="page-login-content__type" :is="loginSection"></div>
    </div>
  </div>
</template>

<script>
import LoginPki from "@/components/login/login-pki";
import LoginQrcode from "@/components/login/login-qrcode";
import LoginUsername from "@/components/login/login-username";

export default {
  components: {
    LoginPki,
    LoginQrcode,
    LoginUsername
  },
  data: () => ({
    loginTypes: [
      { name: "二维码登录", value: "LoginQrcode" },
      { name: "PKI 登录", value: "LoginPki" },
      { name: "用户名/密码登录", value: "LoginUsername" }
    ],
    loginType: "LoginQrcode"
  }),
  computed: {
    loginSection() {
      return this.loginType;
    }
  }
};
</script>

<style lang="scss">
.page-login{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	h1{
		position: absolute;
		top: -32px;
		line-height: 32px;
		word-break: keep-all;
	}
	.page-login-content{
		position: relative;
		top: -100px;
		width: 400px;
	}
}
</style>