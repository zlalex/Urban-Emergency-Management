<template>
  <section-group class="component-chemical-monitor" :title="title">
    <echart-section
      v-if="finish"
      class="component-chemical-monitor-chart"
      canvas-name="chemical-monitor"
      width="400"
      :canvas-options="chemicalMonitorChartOption"
    />
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import EchartSection from "@/components/echart/echart-section";
import { chemicalMonitorAsync } from "@/api";
import { grid, xColor, color, shadowTooltip } from "@/echarts/echart-option";

const chemicalMonitorChartOption = {
  color: color,
  tooltip: shadowTooltip,
  grid: grid,
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
    title: "危化品监测",
    chemicalMonitorChartOption,
    finish: false
  }),
  mounted() {
    this.getChemicalMonitorAsync();
  },
  methods: {
    getChemicalMonitorAsync() {
      chemicalMonitorAsync().then(({ status, data }) => {
        if (status) {
          this.chemicalMonitorChartOption.xAxis[0].data = data.axis;
          this.chemicalMonitorChartOption.series[0].data = data.data;
          this.finish = true;
        }
      });
    }
  }
};
</script>