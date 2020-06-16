<template>
  <section-group class="component-safe" :title="title">
    <echart-section class="component-safe-canvas" canvas-name="safe" width="200" />
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
    title: "安全风险"
  })
};
</script>

<style lang="scss">
.component-safe {
}
</style>