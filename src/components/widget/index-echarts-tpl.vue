<template>
    <div class="ue-echarts-tpl">
        <p class="ue-echarts-title" v-if="title">{{title}}</p>
		<slot name="title" v-else />
        <canvas :width="width" :height="height" v-if="canvasName" class="ue-echarts" :ref="canvasName"></canvas>
        <slot v-else />
    </div>
</template>
<script>
export default {
    name: 'index-echarts-tpl',
    props: {
        title: String,
        canvasName: String,
		echartsOptions: Object,
		width: String,
		height: String,
    },
    data() {
        return {
            myChart: null
        };
    },
    mounted() {
        try {
            const elem = this.$refs[this.canvasName];
            this.myChart = elem ? this.$echarts.init(elem) : null;
            this.echartsOptions && this.renderEcharts();
        } catch (e) {}
    },
    methods: {
        renderEcharts() {
			let index = 0;
			const myChart = this.myChart
			const series = this.echartsOptions.series[0]

			myChart.setOption(this.echartsOptions);
            setInterval(()=> {
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: index
                });
                ++index
                if (index > series.data.length) {
                    index = 0;
                }
            }, 1e3);
        }
    }
};
</script>
<style lang="stylus">
.ue-echarts-tpl{
	p{
		font-size: 12px;
		font-weight: 400;
	}
}
</style>