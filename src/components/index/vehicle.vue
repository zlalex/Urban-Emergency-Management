<template>
  <section-group class="component-vehicle" :title="title">
    <echart-section class="component-vehicle-canvas" canvas-name="vehicle" width="400" />
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
    title: "运输车辆"
  })
};
</script>

<style lang="scss">
</style>