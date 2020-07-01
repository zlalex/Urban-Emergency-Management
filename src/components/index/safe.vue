<template>
  <section-group class="component-safe" :title="title" @titleClick="handleTitleClick">
    <echart-section
      v-if="finish"
      class="component-safe-chart"
      canvas-name="safe"
      width="200"
      :canvas-options="safeChartOptions"
    />
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import EchartSection from "@/components/echart/echart-section";
import { safetyAsync } from "@/api/index";

const safeChartOptions = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: "安全风险",
      type: "pie",
      radius: "60%",
      center: ["50%", "50%"],
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};

export default {
  components: {
    SectionGroup,
    EchartSection
  },
  data: () => ({
    safeChartOptions,
    title: "安全风险",
    finish: false
  }),
  mounted() {
    this.getSafetyStatusAsync();
  },
  methods: {
    getSafetyStatusAsync() {
      safetyAsync().then(res => {
        const { status } = res;
        if (status) {
          const { data } = res.data;
          this.safeChartOptions.series[0].data = data;
          this.finish = true;
        }
      });
    },
    handleTitleClick() {
      this.$EventBus.$emit("CHANGE_INDEX_CATEGORY", "safeLelve");
    }
  }
};
</script>

<style lang="scss">
</style>