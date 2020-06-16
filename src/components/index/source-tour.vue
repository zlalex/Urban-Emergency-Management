<template>
  <section-group class="component-source-tour" :title="title">
    <echart-section class="component-source-tour-canvas" canvas-name="source-tour" width="400" />
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
    title: "危险源"
  })
};
</script>
