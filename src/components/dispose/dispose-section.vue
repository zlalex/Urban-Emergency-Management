<template>
  <div class="component-dispose-section">
    <h3 class="util-align-center" v-if="title">{{title}}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss">
.component-dispose-section{
  font-size: 12px;
  line-height: 20px;
}
</style>