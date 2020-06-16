<template>
  <section-group class="component-source-monitor" :title="title">
    <echart-section
      class="component-source-monitor-canvas"
      canvas-name="source-monitor"
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
    title: "危险源监控"
  })
};
</script>

<style lang="scss">
</style>