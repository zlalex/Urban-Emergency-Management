<template>
  <div class="component-baidu-map">
    <div class="map-container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  data() {
    return {
      BaiduMap: window.BMap,
      map: new window.BMap("map-container")
    };
  },
  computed: {},
  methods: {
    init() {}
  }
};
</script>

<style lang="scss">
</style>