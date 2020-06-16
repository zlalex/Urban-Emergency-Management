<template>
  <section-group class="component-accident-response" :title="title">
    <echart-section
      class="component-accident-response-canvas"
      canvas-name="accident-response"
      width="200"
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
    title: "接报信息"
  })
};
</script>