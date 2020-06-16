<template>
  <div class="component-layout-section">
    <h2 v-if="title" class="component-layout-section__header util-align-center">{{title}}</h2>
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
@import "@/styles/_variable";
.component-layout-section {
  margin-bottom: 10px;
  background-color: $bgColor1;
  border: solid 1px $cyan1;
  .component-layout-section__header {
    font-size: 16px;
    line-height: 36px;
  }
}
</style>