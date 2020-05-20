<template>
  <div class="echart-section">
    <p v-if="title">{{title}}</p>
    <slot v-else name="title" />
    <canvas v-if="canvasName"></canvas>
    <slot v-else />
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    canvasName: String,
    width: String,
    height: String,
    options: Object
  }
};
</script>