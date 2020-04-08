<template>
    <div class="ue-index-section">
        <div class="ue-section-head">
            <p class="ue-justify-dot">{{title || '自定义模块标题'}}</p>
        </div>
        <div class="ue-section-centent ue-justify-dot">
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    name: 'index-section',
    props: {
        title: String
    }
};
</script>
<style lang="stylus">
.ue-index-section{
	.el-timeline {
		padding 10px 0
	}
}
</style>