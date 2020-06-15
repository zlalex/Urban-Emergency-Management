<template>
  <div class="component-section-group">
    <h3 v-if="title" class="component-section-group__header" @click="handleTitleClick">{{title}}</h3>
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
  },
  methods: {
    handleTitleClick() {
      this.$emit("titleClick");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-section-group {
  padding: 0 10px 10px;
  .component-section-group__header {
    margin-bottom: 5px;
    font-size: $h3;
    line-height: 16px;
    font-weight: normal;
    cursor: pointer;
  }
}
</style>