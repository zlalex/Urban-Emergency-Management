<template>
  <section-group class="component-accident-response" :title="title" @titleClick="handleTitleClick">
    <ul class="component-accident-response__list">
      <li
        v-for="(report,i) in tableData"
        :key="i"
        class="component-accident-response__item"
        @click="handleReportItemClick"
      >
        <span class="component-accident-response__date">{{report.date}}</span>
        <span class="component-accident-response__report" :title="report.report">{{report.report}}</span>
      </li>
    </ul>
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";
import { accidentResponseAsync } from "@/api/index";

export default {
  components: {
    SectionGroup
  },
  data: () => ({
    title: "接报信息",
    tableData: []
  }),
  mounted() {
    this.getAccidentResponseAsync();
  },
  methods: {
    getAccidentResponseAsync() {
      accidentResponseAsync().then(({ status, data }) => {
        if (status) {
          this.tableData = data.data;
        }
      });
    },
    handleReportItemClick() {
      this.$GoRoute("/dispose");
    },
    handleTitleClick() {}
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-accident-response {
  .component-accident-response__list {
    max-width: 200px;
    max-height: 145px;
    overflow: auto;
  }
  .component-accident-response__item {
    display: flex;
    padding: 5px 0;
    line-height: 24px;
    align-items: center;
    cursor: pointer;
    > span:last-child {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 130px;
    }
    &:nth-of-type(2n) {
      > span {
        color: $cyan2;
        background-color: $bgColor2;
      }
    }
  }
  .component-accident-response__date {
    padding: 0px 5px;
    margin-right: 2px;
  }
}
</style>