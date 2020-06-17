<template>
  <section-group class="component-factory" :title="title">
    <echart-section
      v-if="finish"
      class="component-factory-chart"
      :canvas-options="factoryChartOptions"
      canvas-name="factory"
      width="400"
    />
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import EchartSection from "@/components/echart/echart-section";
import { grid, xColor, color, shadowTooltip } from "@/echarts/echart-option";
import { factoryAsync } from "@/api/index";

const factoryChartOptions = {
  color,
  grid,
  tooltip: shadowTooltip,
  xAxis: [
    {
      type: "category",
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: xColor
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: xColor
    }
  ],
  series: [
    {
      type: "bar",
      barWidth: "50%",
      data: []
    }
  ]
};

export default {
  components: {
    SectionGroup,
    EchartSection
  },
  data: () => ({
    title: "危化品企业总量：227家",
    finish: false,
    factoryChartOptions
  }),
  mounted() {
    this.getFactoryAsync();
  },
  methods: {
    getFactoryAsync() {
      factoryAsync().then(res => {
        const { status } = res;
        if (status) {
          const { xAxis, data } = res.data;
          this.factoryChartOptions.xAxis[0].data = xAxis;
          this.factoryChartOptions.series[0].data = data;
          this.finish = true
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>