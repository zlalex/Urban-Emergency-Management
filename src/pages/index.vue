<template>
  <div class="page-index">
    <layout-aside-left>
      <layout-section title="安全生产">
        <index-factory />
        <div class="util-flex">
          <index-safe class="page-index-safe" />
          <index-accident-response class="page-index-accident-response" />
        </div>
      </layout-section>
      <layout-section class="page-index-section__auto" title="道路运输">
        <index-vehicle />
        <index-vehicle-monitor />
      </layout-section>
    </layout-aside-left>

    <div class="page-index-search">
      <input type="text" class="page-index-search__input" />
      <i class="page-index-search__icon el-icon-search"></i>
    </div>

    <div class="page-index-category">
      <basic-button
        class="page-index-category__item"
        :class="categoryItemColor"
        v-for="(item, i) in currentType"
        @click.native.stop="handleCategoryClick"
        :key="i"
      >{{item}}</basic-button>
    </div>

    <layout-aside-right>
      <layout-section title="重大危险源">
        <index-source-monitor />
        <index-source-tour />
      </layout-section>
      <layout-section class="page-index-section__auto" title="重点化工工艺">
        <index-chemical-monitor />
        <index-chemical-video />
      </layout-section>
    </layout-aside-right>
  </div>
</template>

<script>
import LayoutAsideLeft from "@/components/layout/layout-aside-left";
import LayoutAsideRight from "@/components/layout/layout-aside-right";
import LayoutSection from "@/components/layout/layout-section";
import IndexFactory from "@/components/index/factory";
import IndexSafe from "@/components/index/safe";
import IndexAccidentResponse from "@/components/index/accident-response";
import IndexVehicle from "@/components/index/vehicle";
import IndexVehicleMonitor from "@/components/index/vehicle-monitor";
import IndexSourceMonitor from "@/components/index/source-monitor";
import IndexSourceTour from "@/components/index/source-tour";
import IndexChemicalMonitor from "@/components/index/chemical-monitor";
import IndexChemicalVideo from "@/components/index/chemical-video";

/*
  危化品企业 factory
  安全风险 safe
  接报信息 accident response
  运输车 vehicle
  车辆监控 vehicle monitor
  危险源监控 source monitor
  巡检 source tour
  化工品监测 chemical monitor
  视频监测 chemical video
*/

export default {
  components: {
    LayoutAsideLeft,
    LayoutAsideRight,
    LayoutSection,
    IndexFactory,
    IndexSafe,
    IndexAccidentResponse,
    IndexVehicle,
    IndexVehicleMonitor,
    IndexSourceMonitor,
    IndexSourceTour,
    IndexChemicalMonitor,
    IndexChemicalVideo
  },
  data: () => ({
    factoryType: ["生产企业", "经营企业", "运输企业", "仓储企业", "使用企业"],
    safeLelve: ["一级风险", "二级风险", "三级风险", "四级风险"],
    chemicalType: ["腐蚀", "易燃", "易爆"],
    current: "factoryType"
  }),
  computed: {
    currentType() {
      switch (this.current) {
        case "factoryType":
          return this.factoryType;
        case "safeLelve":
          return this.factoryType;
        case "chemicalType":
          return this.factoryType;
      }
      return [];
    },
    categoryItemColor() {
      switch (this.current) {
        case "safeLelve":
          return "safe";
        case "chemicalType":
          return "chemical";
      }
      return "factory";
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.page-index {
  .page-index-section__auto {
    flex: auto;
    overflow: auto;
  }
  .page-index-accident-response,
  .page-index-safe {
    padding: 0 0 10px 0;
  }
  .page-index-accident-response {
    flex: auto;
  }
  .page-index-safe {
    padding-left: 10px;
    padding-right: 10px;
  }
  .page-index-category {
    position: absolute;
    z-index: 2;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
  .page-index-category__item {
    padding: 6px 10px;
    margin-right: 10px;
    color: #fff;
    border-radius: 2px;
    &.factory {
      background-color: $blue3;
      box-shadow: 0 0 4px 0px $blue2;
    }
    &.chemical {
      background-color: $gold1;
      box-shadow: 0 0 4px 0px $gold1;
    }
    &.safe {
      background-color: $green1;
      box-shadow: 0 0 4px 0px $green1;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .page-index-search {
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    display: flex;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 5px #e1e1e1;
    .page-index-search__input {
      width: 360px;
      height: 36px;
      padding-left: 10px;
      line-height: 36px;
      border: 0 none;
      border-right: 1px solid #e1e1e1;
      outline: none;
    }
    .page-index-search__icon {
      padding: 0 6px;
      color: #e1e1e1;
      font-size: 24px;
      line-height: 36px;
      cursor: pointer;
    }
  }
}
</style>