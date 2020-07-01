<template>
  <section-group class="component-vehicle-monitor" :title="title" @titleClick="handleTitleClick">
    <ul class="component-vehicle-monitor__list">
      <li v-for="(monitor, i) in tableData" :key="i" class="component-vehicle-monitor__item">
        <span class="component-vehicle-monitor__numeric">{{monitor.numeric}}</span>
        <span class="component-vehicle-monitor__datum">{{monitor.datum}}</span>
        <span class="component-vehicle-monitor__datum">{{monitor.driver}}</span>
        <span class="component-vehicle-monitor__datum">{{monitor.fellow}}</span>
        <span
          class="component-vehicle-monitor__datum util-cursor-pointer"
          :title="monitor.company"
          @click="handleMonitorItemClick"
        >{{monitor.company}}</span>
      </li>
    </ul>
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import { vehicleMonitorAsync } from "@/api/index";

export default {
  components: {
    SectionGroup
  },
  data: () => ({
    title: "车辆监控",
    tableData: []
  }),
  mounted() {
    this.getVehicleMonitorAsync();
  },
  methods: {
    getVehicleMonitorAsync() {
      vehicleMonitorAsync().then(({ status, data }) => {
        if (status) {
          this.tableData = data.data;
        }
      });
    },
    handleMonitorItemClick() {
      this.$EventBus.$emit('VEHICLE_WHEEL_PATH')
    },
    handleTitleClick() {
      this.$EventBus.$emit("CHANGE_MAP_VEHICLE_MONITOR");
      this.$EventBus.$emit("CHANGE_INDEX_CATEGORY", "");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-vehicle-monitor {
  line-height: 20px;
  .component-vehicle-monitor__item {
    display: flex;
    padding: 5px 0;
    &:nth-of-type(2n) {
      > span {
        color: $cyan2;
        background-color: $bgColor2;
      }
    }
    span {
      padding: 2px 5px;
    }
  }
  .component-vehicle-monitor__numeric {
    margin-right: 2px;
    & + .component-vehicle-monitor__datum {
      width: 70px;
    }
  }
  .component-vehicle-monitor__datum {
    margin-right: 2px;
    width: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:last-child {
      width: auto;
      flex: 1;
    }
  }
}
</style>