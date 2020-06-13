<template>
  <el-form class="component-login-form" ref="loginForm" :model="loginForm" label-width="55px">
    <el-form-item label="用户名">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" @keyup.native.enter="submitAsync" v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <basic-button class="component-login-form__submit-button" @click.native.stop="submitAsync">登 录</basic-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitAsync() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-login-form {
  margin-top: 20px;
  .el-form-item {
    margin-bottom: 20px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  .el-form-item__label,
  .el-form-item__content,
  .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
  .component-login-form__submit-button {
    width: 100%;
    color: #fff;
    line-height: 30px;
    background-color: $basicThird;
  }
}
</style>