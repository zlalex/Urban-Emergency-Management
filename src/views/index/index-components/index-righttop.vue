<template>
    <index-section title="重大危险源" class="ue-index-layout">
        <index-echarts-tpl
            title="重大危险源监测数据"
            canvasName="dangerDatas"
            :echartsOptions="dangerDatas"
			width="400"
        />
        <br />

        <index-echarts-tpl title="重大危险源数字巡检"
			width="400">
            <div class="ue-index-imgwrap">
                <img @click="goRoute('/product')" src="@/assets/img-u237.jpg" alt />
                <img @click="goRoute('/product')" src="@/assets/img-u238.jpg" alt />
                <img @click="goRoute('/product')" src="@/assets/img-u239.jpg" alt />
            </div>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
const week = ['生产装置', '罐区', '仓库'];
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
        data: ['一级', '二级', '三级', '四级']
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
            name: '一级',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [5, 15, 20]
        },
        {
            name: '二级',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [10, 45, 140]
        },
        {
            name: '三级',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [20, 80, 180]
        },
        {
            name: '四级',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [15, 80, 185]
        }
    ]
};
export default {
    name: 'ue-index-righttop',
    data() {
        return {
            dangerDatas
        };
    },
    methods: {
        goRoute(path) {
            path !== this.$route.path && this.$router.push(path);
        }
    }
};
</script>
