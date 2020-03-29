<template>
    <div class="ue-login-username ue-login-item">
        <div class="ue-form-item">
            <span class="ue-form-label">用户名</span>
            <input class="ue-input" v-model="username" type="text" />
        </div>
        <div class="ue-form-item">
            <span class="ue-form-label">密码</span>
            <input class="ue-input" v-model="password" type="password" />
        </div>
        <div class="ue-form-item">
            <button class="ue-button ue-btn-default ue-btn-large" @click="handleClick">登录</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'uername',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
		// 需要完善登录框表单校验
        handleClick() {
            this.password && this.username && this.$emit('submit');
        }
    }
};
</script>