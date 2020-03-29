<template>
    <index-section class="ue-index-rightbottom" title="重点化工工艺">
        <index-echarts-tpl
            title="重点化工工艺监测数据"
            canvasName="craftDatas"
            :echartsOptions="craftDatasOpt"
        />
		<br>

        <index-echarts-tpl title="重点化工工艺监测视频">
            <div class="ue-index-imgwrap">
                <img src="@/assets/img-u240.jpg" alt />
                <img src="@/assets/img-u240.jpg" alt />
                <img src="@/assets/img-u240.jpg" alt />
            </div>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const grid = {
    left: '0',
    right: '0',
    bottom: '0',
    top: '10px',
    containLabel: true
};
const xColor = {
    show: true,
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
export default {
    name: 'ue-index-rightbottom',
    data() {
        return {
            craftDatasOpt
        };
    }
};
</script>
<style lang="stylus">
.ue-index-rightbottom {
    right: 10px;
    bottom: 20px;
}
</style>