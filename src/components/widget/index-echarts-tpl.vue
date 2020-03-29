<template>
	<div class="ue-echarts-tpl">
		<p class="ue-echarts-title">{{title}}</p>
		<canvas v-if="canvasName" class="ue-echarts" :ref="canvasName"></canvas>
		<slot v-else />
	</div>
</template>
<script>
export default {
	name: 'index-echarts-tpl',
	props:{
		title: String,
		canvasName: String,
		echartsOptions: Object
	},
	data() {
		return {
			myChart: null
		}
	},
	mounted(){
		try{
			const elem = this.$refs[this.canvasName]
			this.myChart = elem ? this.$echarts.init(elem) : null
			this.echartsOptions && this.renderEcharts()
		}catch(e){}
	},
	methods: {
		renderEcharts(){
			this.myChart.setOption(this.echartsOptions)
		}
	}
}
</script>