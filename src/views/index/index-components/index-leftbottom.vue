<template>
    <index-section title="道路运输" class="ue-index-layout">
        <index-echarts-tpl :echartsOptions="carCountOpt" canvasName="carCount" width="400">
            <template #title>
                <h2 class="ue-echarts-title" @click="showCompany('cart')">在途运输车总量：298</h2>
            </template>
        </index-echarts-tpl>
        <br />
        <index-echarts-tpl title="重点车辆监控信息">
            <el-table
                border
                stripe
                :data="tableData"
                style="width: 100%"
                @row-click="handleCarClick"
            >
                <el-table-column prop="cartNo" label="车牌号" width="90"></el-table-column>
                <el-table-column prop="content" label="运输品" width="70"></el-table-column>
                <el-table-column prop="driver" label="驾驶员" width="60"></el-table-column>
                <el-table-column prop="accompany" label="押运员" width="60"></el-table-column>
                <el-table-column prop="company" label="运输公司"></el-table-column>
            </el-table>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
const xData = [
    '浦东新区',
    '宝山区',
    '嘉定区',
    '闵行区',
    '松江区',
    '青浦区',
    '奉贤区',
    '金山区'
];

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

const carCountOpt = {
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
            data: xData, // req data
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
            data: [55, 33, 22, 46, 25, 18, 35, 66] //req data
        }
    ]
};
import { mapMutations } from 'vuex';
import { indexCarsCount } from '@/api';
export default {
    name: 'ue-index-leftbottom',
    data() {
        return {
            tableData: [],
            carCountOpt
        };
    },
    methods: {
        ...mapMutations(['SET_INDEX_BOTTOM_TYPE']),
        handleCarClick() {
            this.$BUS.$emit('CAR_MOVE_START');
        },
        getIndexCarsCount() {
            indexCarsCount().then(res => {
                this.tableData = res.data.data;
            });
        },
        showCompany(type) {
            this.$BUS.$emit('SHOW_COMPANY', type);
            this.SET_INDEX_BOTTOM_TYPE(type);
        }
    },
    mounted() {
        this.getIndexCarsCount();
    }
};
</script>