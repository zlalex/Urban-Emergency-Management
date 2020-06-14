<template>
  <div id="app">
    <template v-if="hasBaiduMap">
      <layout-default>
        <router-view />
      </layout-default>
    </template>

    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import LayoutDefault from '@/components/layout/layout-default'

const hasBaiduMapPath = ["/", "/dispose"];

export default {
  components: {
    LayoutDefault
  },
  computed: {
    hasBaiduMap() {
      const path = this.$route.path;
      if (hasBaiduMapPath.includes(path)) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>