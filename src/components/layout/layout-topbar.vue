<template>
  <div class="layout-topbar">
    <div class="layout-topbar-left">
      <slot name="left" />
    </div>
    <div class="layout-topbar-title">
      <slot name="title" />
    </div>
    <div class="layout-topbar-right">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.layout-topbar,
.layout-topbar-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.layout-topbar {
  .layout-topbar-right {
  }
}
</style>