<template>
  <section-group class="component-factory" :title="title">
    <echart-section class="component-factory-canvas" canvas-name="factory" width="400" />
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
    title: "危化品企业总量：227家"
  })
};
</script>

<style lang="scss">
</style>