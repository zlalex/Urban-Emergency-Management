<template>
    <div class="ue-danger">
        <doc-topbar class="ue-danger-topbar" title="危化品档案"/>
		<danger-content/>
    </div>
</template>
<script>
import DocTopbar from '@/components/widget/doc-topbar';
import DangerContent from './danger-components/danger-content'
export default {
    name: 'ue-danger',
    components: {
		DocTopbar,
		DangerContent
    },
    mounted() {}
};
</script>
<style lang="stylus">
.ue-danger{
	position relative
	z-index 3
	width 100%
	height 100%
	display flex
	flex-direction column
	.ue-danger-topbar{
		height 60px
	}
	.danger-content{
		flex 1
		padding-top 60px
	}
	.danger-content-left,
	.danger-content-right{
		flex 1
		height 100%
	}
}
</style>