<template>
    <div class="ue-right-layer">
        <ue-layer-section title="重大危险源">
            <p class="ue-section-item-title">重大危险源监测数据</p>
            <canvas class="ue-echarts" ref="echart1"></canvas>

            <p class="ue-section-item-title">重大危险源数字巡检</p>
            <div class="ue-layer-img">
				<img src="@/assets/img-u237.jpg" alt="">
				<img src="@/assets/img-u238.jpg" alt="">
				<img src="@/assets/img-u239.jpg" alt="">
			</div>
        </ue-layer-section>

        <ue-layer-section title="重点化工工艺">
            <p class="ue-section-item-title">重点化工工艺监测数据</p>
            <canvas class="ue-echarts" ref="echart2"></canvas>

            <p class="ue-section-item-title">重点化工工艺监测视频</p>
            <div class="ue-layer-img">
				<img src="@/assets/img-u240.jpg" alt="">
				<img src="@/assets/img-u240.jpg" alt="">
				<img src="@/assets/img-u240.jpg" alt="">
			</div>
        </ue-layer-section>
    </div>
</template>
<script>
const xColor =  {
	show: true,
	textStyle: {
		color: '#fff', //更改坐标轴文字颜色
		fontSize: 12 //更改坐标轴文字大小
	}
}
const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
export default {
    name: 'ue-layer-right',
    mounted() {
        this.renderEcharts1();
        this.renderEcharts2();
    },
    methods: {
        renderEcharts1() {
            const myChart = this.$echarts.init(this.$refs.echart1);
            const option = {
                title: {
                    text: '堆叠区域图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: [
                        '邮件营销',
                        '联盟广告',
                        '视频广告',
                        '直接访问',
                        '搜索引擎'
                    ]
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: week,
                        axisLabel: xColor
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: xColor
                    }
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {},
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            myChart.setOption(option);
        },
        renderEcharts2() {
            const myChart = this.$echarts.init(this.$refs.echart2);
            const option = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: week,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: xColor
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: xColor
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            };
            myChart.setOption(option);
		}
    }
};
</script>