<template>
    <div class="ue-login">
        <button @click="loginAction">登录</button>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ue-login',
    methods: {
        ...mapActions(['loginAction']),
    },
    computed: {
        ...mapGetters(['getterUserToken'])
    },
    watch: {
        getterUserToken(val) {
            val && this.$goRoute('/')
        }
    }
};
</script>