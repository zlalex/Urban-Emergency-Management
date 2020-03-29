<template>
    <index-section title="安全生产" class="ue-index-lefttop">
        <index-echarts-tpl
            title="危化品企业总量：227家"
            canvasName="dangerCompany"
            :echartsOptions="dangerCompanyOpt"
        />
        <br />
        <index-echarts-tpl
            title="安全风险态势分析"
            canvasName="dangerRisk"
            :echartsOptions="dangerRiskOpt"
        />
        <br />
        <index-echarts-tpl title="接报信息">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="100"></el-table-column>
                <el-table-column prop="name" label="姓名" width="80"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
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
const dangerCompanyOpt = {
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
            data: [100, 200, 300, 400, 300, 500, 900]
        }
    ]
};

const dangerRiskOpt = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州', '兖州', '荆州', '幽州']
    },

    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '10px'
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
export default {
    name: 'ue-index-lefttop',
    data() {
        return {
            dangerCompanyOpt,
            dangerRiskOpt,
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    }
};
</script>
<style lang="stylus">
.ue-echarts-title {
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
}
</style>