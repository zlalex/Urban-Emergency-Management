<template>
  <section-group class="component-chemical-monitor" :title="title">
    <echart-section
      class="component-chemical-monitor-canvas"
      canvas-name="chemical-monitor"
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
    title: "危化品监测"
  })
};
</script>