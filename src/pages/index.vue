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
  }
};
</script>

<style lang="scss">
.page-index {
  .page-index-section__auto {
    flex: auto;
    overflow: auto;
  }
  .page-index-accident-response,
  .page-index-safe {
    padding: 0 0 10px 0;
  }
  .page-index-accident-response{
    flex: auto;
  }
  .page-index-safe {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>