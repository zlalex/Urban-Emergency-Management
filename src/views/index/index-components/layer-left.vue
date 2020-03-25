<template>
    <div class="ue-left-layer">
        <ue-layer-section title="安全生产">
            <!-- ue-section-item-title && ue-echarts 拆模块 -->
            <p class="ue-section-item-title">危化品企业总量：227家</p>
            <canvas class="ue-echarts" ref="echart1"></canvas>

            <div class="ue-clearfix">
                <div class="ue-fl ue-section-item">
                    <!-- ue-section-item-title && ue-echarts 拆模块 -->
                    <p class="ue-section-item-title">安全风险态势分析</p>
                    <canvas class="ue-echarts" ref="echart2"></canvas>
                </div>

                <div class="ue-fl ue-section-item">
                    <!-- ue-section-item-title && ue-row-tablewrap 拆模块 -->
                    <p class="ue-section-item-title">接报信息</p>
                    <div class="ue-row-tablewrap">
                        <table class="ue-row-table">
                            <tr v-for="el in 3" :key="el" class="ue-row-tr">
                                <td class="ue-row-td">2020.3.2</td>
                                <td class="ue-row-td">
                                    <div class="ue-cell">10时21分，合庆地区周祝公路琥珀路口，发生天燃气泄漏，无人员伤亡。</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </ue-layer-section>

        <ue-layer-section title="道路运输">
            <!-- ue-section-item-title && ue-echarts 拆模块 -->
            <p class="ue-section-item-title">在途运输车总量</p>
            <canvas class="ue-echarts" ref="echart3"></canvas>

            <!-- ue-section-item-title && ue-row-tablewrap 拆模块 -->
            <p class="ue-section-item-title">重点车辆监控信息</p>
            <div class="ue-row-tablewrap">
                <table class="ue-row-table">
                    <tr v-for="el in 3" :key="el" class="ue-row-tr">
                        <td>
                            <div class="ue-cell">沪BG4517</div>
                        </td>
                        <td>
                            <div class="ue-cell">原油</div>
                        </td>
                        <td>
                            <div class="ue-cell">驾驶员：王晓峰</div>
                        </td>
                        <td>
                            <div class="ue-cell">押运员：孙大伟</div>
                        </td>
                        <td>
                            <div class="ue-cell">上海聚焦运输有限公司</div>
                        </td>
                    </tr>
                </table>
            </div>
        </ue-layer-section>
    </div>
</template>
<script>
const xColor = {
    show: true,
    textStyle: {
        color: '#fff', //更改坐标轴文字颜色
        fontSize: 12 //更改坐标轴文字大小
    }
};

const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export default {
    name: 'ue-layer-left',
    mounted() {
        this.renderEcharts1();
        this.renderEcharts2();
        this.renderEcharts3();
    },
    methods: {
        renderEcharts1() {
            const myChart = this.$echarts.init(this.$refs.echart1);
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
        },

        renderEcharts2() {
            const myChart = this.$echarts.init(this.$refs.echart2);
            const option = {
                title: {
                    text: '天气情况统计',
                    subtext: '虚构数据',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    bottom: 10,
                    left: 'center',
                    data: ['西凉', '益州', '兖州', '荆州', '幽州']
                },
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            { value: 1548, name: '幽州' },
                            { value: 535, name: '荆州' },
                            { value: 510, name: '兖州' },
                            { value: 634, name: '益州' },
                            { value: 735, name: '西凉' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            myChart.setOption(option);
        },

        renderEcharts3() {
            const myChart = this.$echarts.init(this.$refs.echart3);
            const option = {
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
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
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: xColor,
                    data: week
                },
                yAxis: {
                    type: 'value',
                    axisLabel: xColor
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            myChart.setOption(option);
        }
    }
};
</script>