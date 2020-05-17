<template>
    <index-section title="重点化工工艺" class="ue-index-layout">
        <index-echarts-tpl
            title="重点化工工艺监测数据"
            canvasName="craftDatas"
            :echartsOptions="craftDatasOpt"
			width="400"
        />
        <br />

        <index-echarts-tpl title="重点化工工艺监测视频"
			width="400">
            <div class="ue-index-imgwrap">
                <img src="@/assets/img-u240.jpg" alt />
                <img src="@/assets/img-u240.jpg" alt />
                <img src="@/assets/img-u240.jpg" alt />
            </div>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
const xData = [
    // '光气及光气化工艺',
    '氟化工艺',
    '磺化工艺',
    // '电解工艺（氯碱）',
    '加氢工艺',
    '聚合工艺',
    '氯化工艺',
    '重氮化工艺'
];
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
const craftDatasOpt = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: grid,
    xAxis: [
        {
            type: 'category',
            data: xData,
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
            type: 'bar',
            barWidth: '60%',
            data: [ 15, 28, 34, 15, 16, 43]
        }
    ]
};
export default {
    name: 'ue-index-rightbottom',
    data() {
        return {
            craftDatasOpt
        };
    }
};
</script>