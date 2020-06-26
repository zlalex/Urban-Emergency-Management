<template>
  <dispose-section title="知识档案" class="component-accident-history">
    <div class="component-accident-history__discovery">
      <span>图谱分析</span>
      <a
        class="component-accident-history__blank component-accident-history__button"
        href="http://whp-home.discovery.tianrang.com/relational_canvas/WHPSG0002"
        target="_blank"
      >历史事件</a>
    </div>
    <p
      v-for="(history, i) in accidentHistoryData"
      :key="i"
      class="component-accident-history__item"
    >
      <span class="component-accident-history__item-time">{{history.time}}</span>
      <span class="component-accident-history__item-value">{{history.value}}</span>
      <span class="component-accident-history__button">处置方案</span>
    </p>
  </dispose-section>
</template>
<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  },
  data: () => ({
    accidentHistoryData: [
      {
        time: "2019/10/23",
        value: "上海市浦东新区虹梅路发生交通意外事故"
      },
      {
        time: "2019/10/21",
        value: "上海市浦东新区虹梅路发生交通意外事故"
      },
      {
        time: "2019/03/08",
        value: "上海市浦东新区虹梅路发生交通意外事故......"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-accident-history {
  font-size: 12px;
  line-height: 20px;
  .component-accident-history__discovery {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .component-accident-history__blank {
    color: #fff;
    text-decoration: none;
  }
  .component-accident-history__button {
    padding: 0 5px;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
  }
  .component-accident-history__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 20px;
  }
  .component-accident-history__item-time {
    width: 64px;
  }
  .component-accident-history__item-value {
    width: 240px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>