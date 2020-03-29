<template>
	<div class="ue-index">
		<ue-index-topbar />

		<div class="ue-index-left">
			<ue-index-lefttop />
			<ue-index-leftbottom />
		</div>

		<div class="ue-index-right">
			<ue-index-righttop />
			<ue-index-rightbottom />
		</div>

		<div class="ue-index-center">
			<ue-index-centertop />
		</div>

		<ue-index-operate />
		<ue-map/>
	</div>
</template>
<script>
import ueIndexTopbar from './index-components/index-topbar'
import ueIndexLefttop from './index-components/index-lefttop'
import ueIndexLeftbottom from './index-components/index-leftbottom'
import ueIndexRighttop from './index-components/index-righttop'
import ueIndexRightbottom from './index-components/index-rightbottom'
import ueIndexCentertop from './index-components/index-centertop'
import ueIndexOperate from './index-components/index-centerbottom'
export default {
	name: 'ue-index',
	components:{
		ueIndexTopbar,
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