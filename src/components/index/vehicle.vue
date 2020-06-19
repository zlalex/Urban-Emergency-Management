<template>
  <section-group class="component-vehicle" :title="title">
    <echart-section
      v-if="finish"
      class="component-vehicle-chart"
      canvas-name="vehicle"
      :canvas-options="vehicleChartOptions"
      width="400"
    />
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import EchartSection from "@/components/echart/echart-section";
import { grid, xColor, color, shadowTooltip } from "@/echarts/echart-option";
import { vehicleAsync } from "@/api/index";

const vehicleChartOptions = {
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
    title: "运输车辆",
    finish: false,
    vehicleChartOptions
  }),
  mounted() {
    this.getVehicleAsync();
  },
  methods: {
    getVehicleAsync() {
      vehicleAsync().then(res => {
        const { status } = res;
        if (status) {
          const { xAxis, data } = res.data;
          this.vehicleChartOptions.xAxis[0].data = xAxis;
          this.vehicleChartOptions.series[0].data = data;
          this.finish = true;
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>