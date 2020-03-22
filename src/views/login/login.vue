<template>
    <div class="ue-login">
		<div class="ue-fixed-center ue-login-box">
			<ue-radio-button
				v-model="type"
				:data="[
					{name: '二维码登录', value: '2'},
					{name: 'PKI 登录', value: '1'},
					{name: '用户名/密码登录', value: '0'}
				]"
			/>
			<div :is="loginComponent"></div>
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
        ...mapActions(['loginAction'])
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