<template>
  <section-group class="component-source-monitor" :title="title">
    <echart-section
      v-if="finish"
      class="component-source-monitor-chart"
      canvas-name="source-monitor"
      width="400"
      :canvas-options="sourceMonitorChartOptions"
    />
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import EchartSection from "@/components/echart/echart-section";
import { grid, xColor } from "@/echarts/echart-option";
import { sourceMonitorAsync } from "@/api";

const sourceMonitorChartOptions = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: grid,
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [],
      axisLabel: xColor
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: xColor
    }
  ],
  series: []
};

export default {
  components: {
    SectionGroup,
    EchartSection
  },
  data: () => ({
    title: "危险源监控",
    sourceMonitorChartOptions,
    finish: false
  }),
  mounted() {
    this.getSourceMonitor();
  },
  methods: {
    getSourceMonitor() {
      sourceMonitorAsync().then(({ status, data }) => {
        if (status) {
          this.sourceMonitorChartOptions.xAxis[0].data = data.axis;
          this.sourceMonitorChartOptions.series = data.data;
          this.finish = true
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>