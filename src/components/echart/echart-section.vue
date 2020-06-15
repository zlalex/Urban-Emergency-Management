<template>
  <canvas class="component-echart-section" v-if="canvasName"></canvas>
</template>
<script>
export default {
  props: {
    canvasName: String
  }
};
</script>