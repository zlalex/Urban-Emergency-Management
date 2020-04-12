<template>
    <div class="ue-business">
        <doc-topbar class="ue-business-topbar" title="危化品档案"/>
		<business-content/>
    </div>
</template>
<script>
import DocTopbar from '@/components/widget/doc-topbar';
import BusinessContent from './business-components/business-content'
export default {
    name: 'ue-business',
    components: {
		DocTopbar,
		BusinessContent
    },
    mounted() {}
};
</script>
<style lang="stylus">
.ue-business{
	position relative
	z-index 3
	width 100%
	height 100%
	display flex
	flex-direction column
	.ue-business-topbar{
		height 60px
	}
	.business-content{
		flex 1
		padding-top 60px
	}
	.business-content-left,
	.business-content-right{
		flex 1
		height 100%
	}
}
</style>