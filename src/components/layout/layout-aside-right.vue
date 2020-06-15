<template>
  <layout-aside class="component-layout-aside-right">
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
.component-layout-aside-right {
  right: 0;
}
</style>