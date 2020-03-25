<template>
	<div class="ue-index-layer ue-abs">
		<p class="ue-align-center ue-index-title ue-abs">城市危化品全生命周期智能监控处置系统</p>
		<div class="ue-layer-content ue-clearfix" >
			<div class="ue-layer-left ue-fl">
				<ue-layer-left />
			</div>
			<div class="ue-layer-right ue-fr">
				<ue-layer-right />
			</div>
			<div class="ue-layer-center">
				<ue-layer-center />
			</div>
		</div>
	</div>
</template>
<script>
import ueLayerLeft from './layer-left'
import ueLayerRight from './layer-right'
import ueLayerCenter from './layer-center'
export default {
	name: 'ue-index-layer',
	components:{
		ueLayerLeft,
		ueLayerRight,
		ueLayerCenter
	}
}
</script>