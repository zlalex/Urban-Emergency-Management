<template>
  <div class="page-dispose">
    <layout-aside-left class="page-dispose-aside">
      <layout-section>
        <dispose-accident />
        <dispose-scene />
      </layout-section>

      <layout-section class="page-dispose-aside__auto">
        <dispose-accident-history />
        <dispose-knowledge />
        <dispose-expert />
        <dispose-accident-vehicle />
      </layout-section>
    </layout-aside-left>

    <layout-aside-right>
      <layout-section>
        <dispose-nearby />
        <dispose-chat />
      </layout-section>

      <layout-section class="page-dispose-aside__auto">
        <dispose-ambient />
        <dispose-resources />
      </layout-section>
    </layout-aside-right>
  </div>
</template>

<script>
import LayoutAsideLeft from "@/components/layout/layout-aside-left";
import LayoutAsideRight from "@/components/layout/layout-aside-right";
import LayoutSection from "@/components/layout/layout-section";
import DisposeAccident from "@/components/dispose/accident";
import DisposeScene from "@/components/dispose/scene";
import DisposeKnowledge from "@/components/dispose/knowledge";
import DisposeAccidentHistory from "@/components/dispose/accident-history";
import DisposeExpert from "@/components/dispose/expert";
import DisposeAccidentVehicle from "@/components/dispose/accident-vehicle";
import DisposeNearby from "@/components/dispose/nearby";
import DisposeChat from "@/components/dispose/chat";
import DisposeAmbient from "@/components/dispose/ambient";
import DisposeResources from "@/components/dispose/resources";

/*
  事件信息 accident
  现场信息 scene
  知识库 knowledge
  历史事件 accident history
  处置专家 expert
  事故车辆 accident vehicle
  处置进度 process
  处置事件线 timeline
  周边一公里 nearby
  对话 chat
  自然资源 ambient
  资源 resource
*/
export default {
  components: {
    LayoutAsideLeft,
    LayoutAsideRight,
    LayoutSection,
    DisposeAccident,
    DisposeScene,
    DisposeKnowledge,
    DisposeAccidentHistory,
    DisposeExpert,
    DisposeAccidentVehicle,
    DisposeNearby,
    DisposeChat,
    DisposeAmbient,
    DisposeResources
  }
};
</script>

<style lang="scss">
.page-dispose {
  .component-layout-section {
    padding: 5px 10px;
  }
  .component-dispose-section {
    position: relative;
    padding: 5px;
    margin-bottom: 10px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -6px;
      width: 25px;
      height: 25px;
      border-left: 2px solid rgba(119, 200, 241, 0.65);
      border-top: 2px solid rgba(119, 200, 241, 0.65);
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: -6px;
      width: 25px;
      height: 25px;
      border-right: 2px solid rgba(119, 200, 241, 0.65);
      border-bottom: 2px solid rgba(119, 200, 241, 0.65);
    }

    &:nth-child(2n) {
      &::after {
        content: "";
        left: inherit;
        right: -6px;
        border-bottom: 0 none;
        border-left: 0 none;
        border-right: 2px solid rgba(119, 200, 241, 0.65);
        border-top: 2px solid rgba(119, 200, 241, 0.65);
      }

      &::before {
        content: "";
        right: inherit;
        left: -6px;
        border-top: 0 none;
        border-right: 0 none;
        border-left: 2px solid rgba(119, 200, 241, 0.65);
        border-bottom: 2px solid rgba(119, 200, 241, 0.65);
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .page-dispose-aside__auto {
    flex: auto;
    overflow: auto;
  }
}
</style>