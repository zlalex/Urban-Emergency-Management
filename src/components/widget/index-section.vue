<template>
    <div class="ue-index-section">
        <div class="ue-section-head">
            <p class="ue-justify-dot" v-if="title">{{title}}</p>
            <slot name="title" v-else />
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
	.ue-justify-dot{
		font-size: 14px;
	}
	.el-timeline {
		padding 10px 0
	}
}
</style>