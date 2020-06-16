<template>
  <section-group class="component-factory" :title="title">
    <echart-section
      v-if="finish"
      class="component-factory-canvas"
      :canvas-options="factoryCanvasOptions"
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

const factoryCanvasOptions = {
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
    factoryCanvasOptions
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
          this.factoryCanvasOptions.xAxis[0].data = xAxis;
          this.factoryCanvasOptions.series[0].data = data;
          this.finish = true
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>