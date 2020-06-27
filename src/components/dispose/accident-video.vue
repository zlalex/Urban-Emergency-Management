<template>
  <dispose-section title="现场视频" class="component-accident-video">
    <video src="videos/step3.mp4" controls></video>
  </dispose-section>
</template>

<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  }
};
</script>

<style lang="scss">
.component-accident-video {
  video {
    display: block;
    margin: 10px 0;
    width: 100%;
  }
}
</style>