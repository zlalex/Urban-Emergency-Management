<template>
    <index-section class="ue-index-leftbottom"
		title="道路运输">
        <index-echarts-tpl
			title="在途运输车总量"
			:echartsOptions="carCountOpt"
			canvasName="carCount" />
		<br>
        <index-echarts-tpl title="重点车辆监控信息">
            <el-table :data="tableData" style="width: 100%" @row-click="handleCarClick">
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
const carCountOpt = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: grid,
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
export default {
    name: 'ue-index-leftbottom',
    data() {
        return {
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
            ],
            carCountOpt
        };
	},
	methods:{
		handleCarClick(){
			this.$BUS.$emit('CAR_MOVE_START')
		}
	}
};
</script>
<style lang="stylus">
.ue-index-leftbottom {
    left: 10px;
    bottom: 20px;
}
</style>