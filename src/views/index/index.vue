<template>
	<div class="ue-index">
		<div class="ue-layout-left">
			<ue-index-lefttop />
			<ue-index-leftbottom />
		</div>

		<div class="ue-layout-right">
			<ue-index-righttop />
			<ue-index-rightbottom />
		</div>

		<div class="ue-layout-center">
			<ue-index-centertop />
		</div>

		<ue-index-operate />
	</div>
</template>
<script>
import ueIndexLefttop from './index-components/index-lefttop'
import ueIndexLeftbottom from './index-components/index-leftbottom'
import ueIndexRighttop from './index-components/index-righttop'
import ueIndexRightbottom from './index-components/index-rightbottom'
import ueIndexCentertop from './index-components/index-centertop'
import ueIndexOperate from './index-components/index-centerbottom'
export default {
	name: 'ue-index',
	components:{
		ueIndexLefttop,
		ueIndexLeftbottom,
		ueIndexRighttop,
		ueIndexRightbottom,
		ueIndexCentertop,
		ueIndexOperate
	},
	mounted() {

	}
}
</script>
<style lang="stylus">
</style>