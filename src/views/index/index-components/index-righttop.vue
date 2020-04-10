<template>
    <index-section title="重大危险源">
        <index-echarts-tpl
            title="重大危险源监测数据"
            canvasName="dangerDatas"
            :echartsOptions="dangerDatas"
        />
        <br />

        <index-echarts-tpl title="重大危险源数字巡检">
            <div class="ue-index-imgwrap">
                <img src="@/assets/img-u237.jpg" alt />
                <img src="@/assets/img-u238.jpg" alt />
                <img src="@/assets/img-u239.jpg" alt />
            </div>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
const week = ['松江区', '青浦区', '奉贤区', '杨浦区', '闵行区', '宝山区', '嘉定区'];
const grid = {
    left: '0',
    right: '0',
    bottom: '0',
    top: '10px',
    containLabel: true
};
const xColor = {
    show: true,
	interval: 0,
    textStyle: {
        color: '#fff', //更改坐标轴文字颜色
        fontSize: 12 //更改坐标轴文字大小
    }
};
const dangerDatas = {
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
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: grid,
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
export default {
    name: 'ue-index-righttop',
    data() {
        return {
            dangerDatas
        };
    }
};
</script>
