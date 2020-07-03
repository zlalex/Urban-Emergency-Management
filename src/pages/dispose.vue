<template>
  <div class="page-dispose">
    <layout-aside-left class="page-dispose-aside">
      <layout-section>
        <dispose-accident />
        <dispose-scene />
      </layout-section>

      <layout-section class="page-dispose-aside__auto" v-show="!showTimelineAndTask">
        <dispose-accident-history />
        <dispose-knowledge />
        <dispose-expert />
        <dispose-accident-vehicle />
      </layout-section>

      <layout-section class="page-dispose-aside__auto" v-show="showTimelineAndTask">
        <dispose-timeline v-show="showTimeline && !showTaskMessage" />
        <dispose-task-message v-show="showTaskMessage" />
      </layout-section>
    </layout-aside-left>

    <layout-aside-right>
      <layout-section>
        <dispose-nearby v-show="!showChat" />
        <dispose-chat v-show="showChat" />
      </layout-section>

      <layout-section class="page-dispose-aside__auto">
        <dispose-ambient v-show="!showVideo" />
        <dispose-resources v-show="!showVideo" />
        <dispose-accident-video v-show="showVideo" />
      </layout-section>
    </layout-aside-right>

    <dispose-process class="page-dispose-process" />

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="400px"
      :before-close="handleDialogClose"
    >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="单位" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="address" label="地址" width="auto"></el-table-column>
      </el-table>
      <div class="util-align-center" slot="footer">
        <span class="util-cursor-pointer" @click="changeShowChat">信息发布</span>
      </div>
    </el-dialog>
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
import DisposeTimeline from "@/components/dispose/timeline";
import DisposeTaskMessage from "@/components/dispose/task-message";
import DisposeProcess from "@/components/dispose/process";
import DisposeAccidentVideo from "@/components/dispose/accident-video";

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
    DisposeResources,
    DisposeTimeline,
    DisposeTaskMessage,
    DisposeProcess,
    DisposeAccidentVideo
  },
  data: () => ({
    showTimeline: false,
    showTaskMessage: false,
    showChat: false,
    showVideo: false,
    dialogVisible: false,
    tableData: [
      {
        date: "市公安局",
        name: "王大陆",
        address: "13476549807"
      },
      {
        date: "市民防办",
        name: "赵国忠",
        address: "13398705789"
      },
      {
        date: "市应急救援总队",
        name: "钱大宝",
        address: "13115648709"
      },
      {
        date: "市环保局",
        name: "孙宝国",
        address: "13198509860"
      }
    ]
  }),
  computed: {
    showTimelineAndTask() {
      return this.showTimeline || this.showTaskMessage;
    }
  },
  mounted() {
    this.initEventBusListener();
  },
  methods: {
    initEventBusListener() {
      this.$EventBus.$on("CHANGE_SHOW_CHAT", this.showDialog);
      this.$EventBus.$on("DISPOSE_TIMELINE_CHANGE", i => {
        switch (i) {
          case 5:
            this.changeShowTaskMessage();
            break;
          default:
            this.changeShowVideo();
            this.changeShowTimeline();
        }
      });
    },
    changeShowTimeline() {
      this.showTimeline = !this.showTimeline;
      if (this.showTimeline && this.showTaskMessage) {
        this.changeShowTaskMessage();
      }
    },
    changeShowTaskMessage() {
      this.showTaskMessage = !this.showTaskMessage;
      if (this.showTimeline && this.showTaskMessage) {
        this.changeShowTimeline();
      }
    },
    changeShowChat() {
      this.showChat = true;
      this.dialogVisible = false;
    },
    changeShowVideo() {
      this.showVideo = !this.showVideo;
    },
    handleDialogClose() {
      this.showDialog();
    },
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
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
  .page-dispose-process {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
  }
  .el-dialog {
    background-color: $bgColor1;
    border: solid 1px $cyan1;
    color: $cyan1;
    .el-table,
    .el-table::before,
    tr,
    td,
    th {
      color: $cyan1;
      background-color: transparent;
      border-bottom-color: transparent;
    }
    .el-dialog__body {
      color: $cyan1;
    }
    .el-dialog__header,
    .el-table__header {
      display: none;
    }
  }
}
</style>