<template>
    <index-section title="安全生产" class="ue-index-lefttop">
        <index-echarts-tpl
            v-if="showDangerCompany"
            title="危化品企业总量：227家"
            canvasName="dangerCompany"
            :echartsOptions="dangerCompanyOpt"
        />
        <br />
        <div class="ue-clearfix">
            <index-echarts-tpl
                v-if="showDangerRisk"
                class="ue-fl"
                style="width: 50%;"
                title="安全风险态势分析"
                canvasName="dangerRisk"
                width="160"
                height="160"
                :echartsOptions="dangerRiskOpt"
            />
            <index-echarts-tpl class="ue-fl" style="width: 50%;" title="接报信息">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="70"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
            </index-echarts-tpl>
        </div>
    </index-section>
</template>
<script>
const grid = {
    left: '0',
    right: '0',
    bottom: '0',
    top: '5px',
    height: '95%',
    width: '100%',
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
            data: [], // req data
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
            data: [] //req data
        }
    ]
};

const dangerRiskOpt = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    grid: {
        left: '40%',
        right: '40%',
        bottom: '10%',
        top: '10%',
        height: '100%',
        width: '100%'
	},

    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },

    series: [
        {
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    position: 'inner',
                    show: false
                }
            },
			data: [], // req data
        }
    ]
};
import { indexDangerBusiness, indexSafeStaus, indexResponse } from '@/api';
export default {
    name: 'ue-index-lefttop',
    data() {
        return {
            dangerCompanyOpt,
            dangerRiskOpt,
            tableData: [],
            showDangerCompany: false,
            showDangerRisk: false
        };
    },
    methods: {
        indexDangerBusiness() {
            indexDangerBusiness().then(res => {
                this.dangerCompanyOpt.xAxis[0].data = res.data.xAxis;
                this.dangerCompanyOpt.series[0].data = res.data.data;
                this.showDangerCompany = true;
            });
        },
        indexSafeStaus() {
            indexSafeStaus().then(res => {
				this.dangerRiskOpt.legend.data = res.data.legend
                this.dangerRiskOpt.series[0].data = res.data.data;
                this.showDangerRisk = true;
            });
        },
        indexResponse() {
            indexResponse().then(res => {
                this.tableData = res.data.data;
            });
        }
    },
    mounted() {
        this.indexDangerBusiness();
        this.indexSafeStaus();
        this.indexResponse();
    }
};
</script>
<style lang="stylus">
.ue-echarts-title {
    font-size: 12px;
    text-align: left;
    margin-bottom: 10px;
}
</style>