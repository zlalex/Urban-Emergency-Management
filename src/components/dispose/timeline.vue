<template>
  <dispose-section class="component-timeline" title="事故处置任务进度">
    <el-timeline reverse>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
  </dispose-section>
</template>

<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  },
  data: () => ({
    activities: [
      {
        content:
          "司机、押运员未受伤，已自行根据《道路运输安全卡》进行初期事故处置。",
        timestamp: "10:24"
      },
      {
        content: "在事故发生地点周边放置隔离桩、“危险化学品”警示标志。",
        timestamp: "10:24"
      },
      {
        content: "通过电话拨打110，将事故详细情况上报。",
        timestamp: "10:24"
      },
      {
        content: "司机、押运员穿戴个人防护服、佩戴安全帽、穿戴反光背心。",
        timestamp: "10:24"
      },
      {
        content: "使用便携式防漏围堰设立“临时围堰”。",
        timestamp: "10:30"
      },
      {
        content: "使用堵漏垫对周边下水道进行封堵。",
        timestamp: "10:30"
      }
    ],
    nextActivities: [
      {
        content:
          "已调度事发地区所在的闵行区政府，闵行区公安分局，合庆镇交警大队等有关职能部门赶赴现场",
        timestamp: "10:30"
      },
      {
        content: "闵行区公安分局，合庆镇交警大队出警5人已到达现场",
        timestamp: "10:40"
      },
      {
        content:
          "合庆镇交警大队对事故现场区域及周边道路进行交通管制，并设置警戒线，禁止无关车辆进入危险区域",
        timestamp: ""
      },
      {
        content: "疏散危险区域及可能受危害区域的人员和重要物质",
        timestamp: ""
      }
    ]
  }),
  mounted() {
    this.$EventBus.$on("DISPOSE_STEP_MESSAGE", this.renderNextTimeline);
  },
  methods: {
    renderNextTimeline({ index }) {
      if (index <= 1 || index > 5) {
        return;
      }
      index = index - 2;
      const next = this.nextActivities[index];
      this.activities.push(next);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-timeline {
  .el-timeline {
    margin: 10px 0;
  }
  .el-timeline-item__content,
  .el-timeline-item__timestamp {
    font-size: 12px;
    line-height: 20px;
    color: $cyan3;
  }
}
</style>