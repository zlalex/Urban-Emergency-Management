<template>
  <dispose-section class="component-accident-vehicle" title="运输车辆">
    <div class="component-accident-vehicle__title">
      <span>运输车辆:沪A23212</span>
      <span class="component-accident-vehicle__button">详细信息</span>
    </div>
    <p v-for="(item, i) in vehicleData" :key="i" class="component-accident-vehicle__item">
      <span class="component-accident-vehicle__item-label">{{item.label}}:</span>
      <span class="component-accident-vehicle__item-value">{{item.value}}</span>
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
    vehicleData: [
      {
        label: "所属单位",
        value: "上海中海物流公司"
      },
      {
        label: "驾驶人",
        value: "王明玉 13867539850"
      },
      {
        label: "押运人",
        value: "李保国 13987603854"
      },
      {
        label: "发货地址",
        value: "上海市闵行区通运路300号"
      },
      {
        label: "收货地址",
        value: "上海市金山区大宝路20号"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-accident-vehicle {
  .component-accident-vehicle__title {
    display: flex;
    justify-content: space-between;
  }
  .component-accident-vehicle__button {
    padding: 0 5px;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    cursor: pointer;
  }
  .component-accident-vehicle__item {
    display: flex;
    span {
      font-size: 12px;
      line-height: 20px;
    }
  }
  .component-accident-vehicle__item-label{
    width: 60px;
    color: $gold3;
  }
}
</style>