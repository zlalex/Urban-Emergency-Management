<template>
  <div class="component-layout-aside">
    <slot />
  </div>
</template>

<style lang="scss">
.component-layout-aside {
  position: absolute;
  top: 70px;
  z-index: 1;
  width: 420px;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  color: #fff;
  overflow: auto;
}
</style>