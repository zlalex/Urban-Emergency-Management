<template>
  <div class="component-baidu-map">
    <div id="container"></div>
  </div>
</template>

<script>
import position from "@/config/shanghai-position";

const ZhaBei = position[7];
const randomPosition = (length = 6) => {
  const result = [];
  for (let i = 0, len = length; i < len; i++) {
    result.push({
      x: ZhaBei.x + Math.random() / 10,
      y: ZhaBei.y + Math.random() / 10
    });
  }
  return result;
};

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
      position: position[0],
      pointMap: {}
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
    eventBusListener() {
      this.$EventBus.$on(
        "CHANGE_MAP_VEHICLE_MONITOR",
        this.changeMapVehicleMonitor
      );
      this.$EventBus.$on(
        "CHANGE_INDEX_TYPE_AND_CATEGORY",
        this.changeIndexTypeAndCategory
      );
    },
    changeMapVehicleMonitor() {
      const key = "车辆监控";
      if (!this.pointMap[key]) {
        this.pointMap[key] = randomPosition();
      }
      this.renderPointInBaiduMap("vehicle", key);
    },
    changeIndexTypeAndCategory({ value }) {
      const key = value;
      if (key && !this.pointMap[key]) {
        this.pointMap[key] = randomPosition();
      }
      this.renderPointInBaiduMap("point", key);
    },
    renderPointInBaiduMap(type, key) {
      const BaiduMap = this.BaiduMap;
      this.map.clearOverlays();
      this.$nextTick(() => {
        this.pointMap[key] &&
          this.pointMap[key].length &&
          this.pointMap[key].forEach((item, i) => {
            const { x, y } = item;
            const point = new BaiduMap.Point(x, y);
            this.addMapMarker(point, type, i === 2);
          });
      });
    },
    addMapMarker(point, type, animate) {
      const BaiduMap = this.BaiduMap;
      const map = this.map;
      const iconOptions = {};

      if (type === "vehicle") {
        iconOptions.icon = new BaiduMap.Icon(
          "./images/img-car.png",
          new BaiduMap.Size(40, 40)
        );
        console.log(iconOptions.icon);
      }

      const marker = iconOptions.icon
        ? new BaiduMap.Marker(point, iconOptions)
        : new BaiduMap.Marker(point);
      !iconOptions.icon && animate && marker.setAnimation(2);
      map.addOverlay(marker);
    },
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
      map.centerAndZoom(new BaiduMap.Point(x, y), 12);
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