<template>
    <div class="ue-align-center echart-graph">
        <canvas width="300" height="300" ref="echart-graph"></canvas>
    </div>
</template>
<script>
import graph from './graph.data'
export default {
    data() {
        return {
            echartsOptions: {
                tooltip: {},
                animation: false,
                series: [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'force',
                        data: graph.nodes,
                        links: graph.links,
                        categories: [
                            {
                                name: 'class 1'
                            }
                        ],
                        roam: true,
                        label: {
                            position: 'right'
                        },
                        force: {
                            repulsion: 100
                        }
                    }
                ]
            }
        };
    },
    mounted() {
        const elem = this.$refs['echart-graph'];
        this.myChart = elem ? this.$echarts.init(elem) : null;
        this.echartsOptions && this.renderEcharts();
    },
    methods: {
        renderEcharts() {
            const myChart = this.myChart;
            myChart.setOption(this.echartsOptions);
        }
    }
};
</script>