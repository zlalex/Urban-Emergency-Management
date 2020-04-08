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
                <el-table-column prop="cartNo" label="车牌号" width="80"></el-table-column>
                <el-table-column prop="content" label="运输品" width="70"></el-table-column>
                <el-table-column prop="driver" label="驾驶员" width="70"></el-table-column>
                <el-table-column prop="accompany" label="押运员" width="70"></el-table-column>
                <el-table-column prop="company" label="运输公司"></el-table-column>
            </el-table>
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
//
import { indexCarsCount } from '@/api';
export default {
    name: 'ue-index-leftbottom',
    data() {
        return {
            tableData: [],
            carCountOpt
        };
	},
	methods:{
		handleCarClick(){
			this.$BUS.$emit('CAR_MOVE_START')
		},
		getIndexCarsCount(){
			indexCarsCount().then(res=>{
				console.log(res)
				this.tableData = res.data.data
			})
		}
	},
	mounted(){
		this.getIndexCarsCount()
	}
};
</script>
<style lang="stylus">
.ue-index-leftbottom {
    left: 10px;
    bottom: 20px;
}
</style>