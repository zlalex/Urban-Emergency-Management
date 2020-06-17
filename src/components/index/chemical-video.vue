<template>
  <section-group class="component-chemical-video" :title="title">
    <echart-section
      class="component-chemical-video-chart"
      canvas-name="chemical-video"
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
    title: "危化品监控视频"
  })
};
</script>