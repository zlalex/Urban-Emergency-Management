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
            if (store && store.user && !store.user.token) {
                this.$goRoute('/login');
            } else {
                this.RENDER_STATE(store);
            }
        }
    }
};
</script>