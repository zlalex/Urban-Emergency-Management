<template>
    <div class="Urban-Emergency-Management">
        <router-view />
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { getSessionStorage } from '@/utils';
export default {
    name: 'app',
    mounted() {
        this.initPage();
    },
    computed: {
        ...mapGetters(['getterUserToken'])
    },
    methods: {
        ...mapMutations(['RENDER_STATE']),

        initPage() {
            const store = getSessionStorage();
            const current = this.$route.path;
			const token = store && store.user ? store.user.token : '';

            if (!token && current !== '/login') {
                this.$goRoute('/login');
            } else {
                this.RENDER_STATE(store);
            }
        }
    }
};
</script>