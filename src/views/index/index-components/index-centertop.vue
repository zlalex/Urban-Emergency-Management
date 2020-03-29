<template>
	<div class="ue-search-form ue-align-center">
		<input v-model="searchForm" type="text" />
		<span @click="search">
			<ue-icon iconName="search"></ue-icon>
		</span>
	</div>
</template>
<script>
export default {
    name: 'ue-index-centertop',
    data() {
        return {
            searchForm: ''
        };
    },
    methods: {
        // 地图搜索
        search() {}
    }
};
</script>