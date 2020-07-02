<template>
  <div class="component-baidu-map">
    <div id="container"></div>
  </div>
</template>

<script>
import position from "@/config/shanghai-position";

let mapTimer = null;
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

const messageMap = {
  factoryType: {
    title: "上海荣建化工厂",
    message:
      "法人：沈蓉; 员工：1268人; 许可范围：含易燃溶剂的合成树脂、油漆、辅助材料、涂料等制品。"
  },
  safeLelve: {
    title: "上海华鑫油品供应有限公司",
    message: "法人：高培忠; 员工：87人; 经营许可：乙醇,原油等"
  },
  chemicalType: {
    title: "上海中海物流公司-沪BG4517",
    message:
      "驾驶人：李琦，13623567896; 押运人：王国忠，18635427659; 货物类型：易燃、易爆; 货物名称：乙炔;`"
  }
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
      pointMap: {},
      currentMapType: ""
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
      this.$EventBus.$on("CHANGE_MAP_VEHICLE_MONITOR", length => {
        this.changeMapVehicleMonitor(length);
      });
      this.$EventBus.$on(
        "CHANGE_INDEX_TYPE_AND_CATEGORY",
        this.changeIndexTypeAndCategory
      );

      this.$EventBus.$on("VEHICLE_WHEEL_PATH", this.renderVehicleWheelPath);
    },
    changeMapVehicleMonitor(length, key = "车辆监控") {
      this.map.clearOverlays();
      if (!this.pointMap[key]) {
        this.pointMap[key] = randomPosition(length);
      }
      key === "车辆监控" && (this.currentMapType = "");
      this.renderPointInBaiduMap("vehicle", key);
    },
    changeIndexTypeAndCategory({ value, type }) {
      const key = value;
      this.currentMapType = type;
      if (key && type !== "chemicalType" && !this.pointMap[key]) {
        this.pointMap[key] = randomPosition();
      } else if (type === "chemicalType") {
        // 非车辆监控
        this.changeMapVehicleMonitor(6, key);
        return;
      }
      this.map.clearOverlays();
      this.renderPointInBaiduMap("point", key);
    },
    renderPointInBaiduMap(type, key) {
      const BaiduMap = this.BaiduMap;
      this.$nextTick(() => {
        this.pointMap[key] &&
          this.pointMap[key].length &&
          this.pointMap[key].forEach((item, i) => {
            const { x, y } = item;
            const point = new BaiduMap.Point(x, y);
            this.addMapMarker(point, type, i);
          });
      });
    },
    addMapMarker(point, type, index) {
      const BaiduMap = this.BaiduMap;
      const map = this.map;
      const iconOptions = {};

      if (type === "vehicle") {
        iconOptions.icon = new BaiduMap.Icon(
          "./images/img-car.png",
          new BaiduMap.Size(40, 40)
        );
      }

      // 先画图标再设置图标动画
      const marker = new BaiduMap.Marker(point, iconOptions);
      map.addOverlay(marker);
      !iconOptions.icon && index === 2 && marker.setAnimation(2);

      // 点击 point 显示详细信息
      const tipMessage = this.currentMapType
        ? messageMap[this.currentMapType]
        : {};
      const options = {
        title: tipMessage.title,
        width: 200,
        height: 100
      };
      const tips = new BaiduMap.InfoWindow(tipMessage.message, options);

      marker.addEventListener("click", () => {
        if (this.currentMapType) {
          map.openInfoWindow(tips, point);
        } else if (type === "vehicle") {
          this.renderVehicleWheelPath(index);
        }
      });
    },
    renderVehicleWheelPath(index) {
      if (!this.pointMap["车辆监控"]) {
        return;
      }

      this.map.clearOverlays();
      const BaiduMap = this.BaiduMap;
      const map = this.map;
      const startPoint = this.pointMap["车辆监控"][index];
      const startX = startPoint.x;
      const startY = startPoint.y;
      const endX = startX + Math.random() / 100;
      const endY = startY + Math.random() / 100;
      const vehicleStart = new BaiduMap.Point(startX, startY);
      const vehicleEnd = new BaiduMap.Point(endX, endY);
      const vehicleIcon = new BaiduMap.Icon(
        "./images/img-car.png",
        new BaiduMap.Size(40, 40)
      );
      const vehicleDrivingRoute = new BaiduMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: true }
      });

      vehicleDrivingRoute.search(vehicleStart, vehicleEnd); // 获得路径
      const vehicleIconMoving = function() {
        const driving = new BaiduMap.DrivingRoute(map);
        driving.search(vehicleStart, vehicleEnd);
        driving.setSearchCompleteCallback(function() {
          const vehicledrivingPaths = driving
            .getResults()
            .getPlan(0)
            .getRoute(0)
            .getPath(); // 获得所有运动路径
          const paths = vehicledrivingPaths.length; // 获得有几个点
          const marker = new BaiduMap.Marker(vehicledrivingPaths[0], {
            icon: vehicleIcon
          });
          function resetMarkerPoint(i) {
            marker.setPosition(vehicledrivingPaths[i]);
            if (i < paths) {
              setTimeout(() => {
                i++;
                resetMarkerPoint(i);
              }, 100);
            }
          }

          map.addOverlay(marker);
          setTimeout(() => {
            resetMarkerPoint(0);
          }, 100);
        });
      };

      // 延迟1s运动
      mapTimer && clearTimeout(mapTimer);
      mapTimer = setTimeout(() => {
        vehicleIconMoving();
      }, 1e3);
    },
    renderBaiduMap() {
      if (this.isDispose) {
        this.renderDisposeMap();
        return;
      }
      this.renderIndexMap();
    },
    renderIndexMap() {
      const zoom = this.map.getZoom();
      this.renderEmptyMap(zoom < 10 ? 12 : zoom);
    },
    renderDisposeMap() {
      const zoom = this.map.getZoom();
      this.renderEmptyMap(zoom < 10 ? 12 : zoom, true);
    },
    renderEmptyMap(zoom, type) {
      if (!this.map) {
        return;
      }
      const { x, y } = this.position;
      const BaiduMap = this.BaiduMap;
      const map = this.map;

      map.clearOverlays && map.clearOverlays();
      map.centerAndZoom(new BaiduMap.Point(x, y), zoom);

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