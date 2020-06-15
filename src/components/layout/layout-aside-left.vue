<template>
  <layout-aside class="component-layout-aside-left">
    <slot />
  </layout-aside>
</template>

<script>
import LayoutAside from "@/components/layout/layout-aside";

export default {
  components: {
    LayoutAside
  }
};
</script>

<style lang="scss">
.component-layout-aside-left {
  left: 0;
}
</style>