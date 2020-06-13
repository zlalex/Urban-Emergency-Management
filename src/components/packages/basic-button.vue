<template>
  <button class="package-basic-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'basic-button'
}
</script>

<style lang="scss">
@import "@/styles/_variable";
.package-basic-button {
  padding: 3px 6px;
  font-size: $h3;
  text-align: center;
  border: 0 none;
  background-color: #fff;
  cursor: pointer;
}
</style>