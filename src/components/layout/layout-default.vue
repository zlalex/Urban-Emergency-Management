<template>
  <div class="component-layout-default">
    <layout-topbar />
    <router-view />
    <baidu-map />
  </div>
</template>

<script>
import BaiduMap from "@/components/map/baidu-map";
import LayoutTopbar from "@/components/layout/layout-topbar";

export default {
  name: "layout-default",
  components: {
    BaiduMap,
    LayoutTopbar
  }
};
</script>

<style lang="scss">
.component-layout-default {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>