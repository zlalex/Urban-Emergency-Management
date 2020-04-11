<template>
	<top-bar class="doc-topbar">
		<template #topbar-left>
			<div class="ue-topbar-left ue-fl">
				<div class="ue-search-form ue-align-center">
					<input placeholder="智能搜索" v-model="searchForm" type="text" />
					<span @click="search">
						<ue-icon iconName="search"></ue-icon>
					</span>
				</div>
			</div>
		</template>

		<template #topbar-title>
			<h1 class="ue-align-center ue-index-title">{{title}}</h1>
		</template>
	</top-bar>
</template>

<script>
import TopBar from '@/components/widget/index-topbar';
export default {
    components: {
        TopBar
    },
    props: {
        title: String
    },
    data() {
        return {
            searchForm: ''
        };
    },
    methods: {
        search() {}
    }
};
</script>

<style lang="stylus">
.doc-topbar {
    height: 60px;
    background: rgb(0, 102, 153);
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #069;
	.ue-search-form{
		margin-top: 14px;
		color: #444;
	}
}
</style>