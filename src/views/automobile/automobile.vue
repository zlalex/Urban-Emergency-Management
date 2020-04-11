<template>
    <div class="ue-automobile">
        <doc-topbar class="ue-automobile-topbar" title="车辆档案页"/>
		<automobile-content/>
    </div>
</template>
<script>
import DocTopbar from '@/components/widget/doc-topbar';
import AutomobileContent from './automobile-components/automobile-content'
export default {
    name: 'ue-automobile',
    components: {
		DocTopbar,
		AutomobileContent
    },
    mounted() {}
};
</script>
<style lang="stylus">
.ue-automobile{
	position relative
	z-index 3
	width 100%
	height 100%
	display flex
	flex-direction column
	.ue-automobile-topbar{
		height 60px
	}
	.automobile-content{
		flex 1
		padding-top 60px
	}
	.automobile-content-left,
	.automobile-content-right{
		flex 1
		height 100%
	}
}
</style>