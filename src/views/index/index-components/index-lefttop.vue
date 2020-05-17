<template>
    <index-section title="安全生产" class="ue-index-layout">
        <index-echarts-tpl
            v-if="showDangerCompany"
            title
            canvasName="dangerCompany"
            :echartsOptions="dangerCompanyOpt"
			width="400px"
        >
            <template #title>
                <h2 class="ue-echarts-title" @click="showCompany('company')">危化品企业总量：227家</h2>
            </template>
        </index-echarts-tpl>
        <br />

        <div class="ue-clearfix">
            <index-echarts-tpl
                v-if="showDangerRisk"
                class="ue-fl"
                style="width: 50%;"
                canvasName="dangerRisk"
                width="160"
                height="160"
                :echartsOptions="dangerRiskOpt"
            >
                <template #title>
                    <h2 class="ue-echarts-title" @click="showCompany('safe')">安全风险态势分析</h2>
                </template>
            </index-echarts-tpl>

            <index-echarts-tpl class="ue-fl" style="width: 50%;" title="接报信息">
                <el-table border stripe :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="70"></el-table-column>
                    <el-table-column prop="address" label="地址">
                        <template slot-scope="scope">
                            <span
                                class="ue-pointer"
                                @click="goRoute('/event')"
                            >{{scope.row.address}}</span>
                        </template>
                    </el-table-column>
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
        left: '0',
        right: '0',
        bottom: '0',
        top: '5px',
        height: '95%',
        width: '100%',
        containLabel: true
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: [' 一级', '二级', '三级', '四级']
    },

    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    show: false
                }
            },
            data: [] // req data
        }
    ]
};

import { mapMutations } from 'vuex';
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
        ...mapMutations(['SET_INDEX_BOTTOM_TYPE']),
        indexDangerBusiness() {
            indexDangerBusiness().then(res => {
                this.dangerCompanyOpt.xAxis[0].data = res.data.xAxis;
                this.dangerCompanyOpt.series[0].data = res.data.data;
                this.showDangerCompany = true;
            });
        },
        indexSafeStaus() {
            indexSafeStaus().then(res => {
                this.dangerRiskOpt.legend.data = res.data.legend;
                this.dangerRiskOpt.series[0].data = res.data.data;
                this.showDangerRisk = true;
            });
        },
        indexResponse() {
            indexResponse().then(res => {
                this.tableData = res.data.data;
            });
        },

        goRoute(path) {
            path !== this.$route.path && this.$router.push(path);
        },

        showCompany(type) {
            this.$BUS.$emit('SHOW_COMPANY', type);
            this.SET_INDEX_BOTTOM_TYPE(type);
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
.ue-index-layout {
    .ue-echarts-title {
        text-align: left;
        font-weight: bold;
        margin-bottom: 10px;
    }
}
</style>