<template>
  <section-group class="component-vehicle-monitor" :title="title">
    <echart-section
      class="component-vehicle-monitor-chart"
      canvas-name="vehicle-monitor"
      width="400"
    />
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import EchartSection from "@/components/echart/echart-section";

export default {
  components: {
    SectionGroup,
    EchartSection
  },
  data: () => ({
    title: "车辆监控"
  })
};
</script>

<style lang="scss">
</style>