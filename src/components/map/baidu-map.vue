<template>
  <div class="component-baidu-map">
    <div id="container"></div>
  </div>
</template>

<script>
import position from "@/config/shanghai-position";

export default {
  name: "baidu-map",
  mounted() {
    this.init();
    this.eventBusListener();
  },
  data() {
    return {
      BaiduMap: null,
      map: null,
      position: position[0]
    };
  },
  computed: {
    isDispose() {
      if (this.$route.path === "/dispose") {
        return true;
      }
      return false;
    }
  },
  watch: {
    isDispose() {
      this.renderBaiduMap();
    }
  },
  methods: {
    init() {
      if (!window.BMap) {
        return;
      }

      const BaiduMap = (this.BaiduMap = window.BMap);
      this.map = new BaiduMap.Map("container");
      // 鼠标滚动缩放
      this.map.enableScrollWheelZoom(true);
      this.renderBaiduMap();
    },
    eventBusListener() {},
    renderBaiduMap() {
      if (this.isDispose) {
        this.renderDisposeMap();
        return;
      }
      this.renderIndexMap();
    },
    renderIndexMap() {
      this.renderEmptyMap();
    },
    renderDisposeMap() {
      this.renderEmptyMap(true);
    },
    renderEmptyMap(type) {
      if (!this.map) {
        return;
      }
      const { x, y } = this.position;
      const BaiduMap = this.BaiduMap;
      const map = this.map;

      map.clearOverlays && map.clearOverlays();
      map.centerAndZoom(new BaiduMap.Point(x, y), 14);
      type
        ? map.setMapStyle({ style: "dark" })
        : map.setMapStyle({ style: "normal" });
    }
  }
};
</script>

<style lang="scss">
.component-baidu-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  #container {
    height: 100%;
  }
}
</style>