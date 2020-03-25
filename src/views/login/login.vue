<template>
    <div class="ue-login">
        <div class="ue-fixed-center ue-login-box">
			<p class="ue-login-title ue-abs">城市危化品全生命周期智能监控处置系统</p>
            <ue-radio-button
                v-model="type"
                :data="[
					{name: '二维码登录', value: '2'},
					{name: 'PKI 登录', value: '1'},
					{name: '用户名/密码登录', value: '0'}
				]"
            />
            <div class="ue-login-form">
                <div :is="loginComponent" @submit="handleSubmit"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import username from './login-components/username';
import qrcode from './login-components/qrcode';
import pki from './login-components/pki';
export default {
    name: 'ue-login',

    data() {
        return {
            type: '2'
        };
    },

    components: {
        username,
        qrcode,
        pki
    },

    methods: {
        ...mapActions(['loginAction']),
        handleSubmit() {
            this.loginAction();
        }
    },

    computed: {
        ...mapGetters(['getterUserToken']),

        loginComponent() {
            let result = '';
            switch (this.type) {
                case '2':
                    result = 'qrcode';
                    break;
                case '1':
                    result = 'pki';
                    break;
                case '0':
                    result = 'username';
                    break;
            }
            return result;
        }
    },

    watch: {
        getterUserToken(val) {
            val && this.$goRoute('/');
        }
    }
};
</script>