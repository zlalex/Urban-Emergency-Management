<template>
  <dispose-section class="component-expert" title="处置专家">
    <p v-for="(item,i) in expertData" :key="i" class="component-expert__table-data">
      <span>{{item.name}}</span>
      <span>{{item.phoneNo}}</span>
      <span>{{item.role}}</span>
      <span>{{item.company}}</span>
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
    expertData: [
      {
        name: "吴文博",
        role: "总工程师",
        phoneNo: "18117239098",
        company: "上海尹鑫物流有限公司"
      },
      {
        name: "文新",
        role: "助理",
        phoneNo: "18117239098",
        company: "上海尹鑫物流有限公司"
      }
    ]
  })
};
</script>

<style lang="scss">
.component-expert {
  .component-expert__table-data {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>