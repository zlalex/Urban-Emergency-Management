<template>
  <dispose-section class="component-nearby" title="周边一公里">
    <p v-for="(item, i) in nearbyData" :key="i" class="component-nearby__item">
      <span class="component-nearby__item-label" :title="item.type" >{{item.type}}</span>
      <span class="component-nearby__item-name" :title="item.name" >{{item.name}}</span>
      <span class="component-nearby__item-address" :title="item.address" >{{item.address}}</span>
      <span class="component-nearby__item-count" :title="item.count" >{{item.count}}</span>
      <span class="component-nearby__item-current" :title="item.current" >{{item.current}}</span>
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
    nearbyData: [
      {
        type: "派出所",
        name: "天平路派出所",
        address: "天平路59号",
        count: "警力：15人",
        current: "值班领导：王保国，13654398706"
      },
      {
        type: "消防队",
        name: "闵行消防支队",
        address: "天平路39号",
        count: "消防员：32人",
        current: "值班领导：李文文，13453786549"
      },
      {
        type: "消防队",
        name: "合庆消防大队",
        address: "天平路70号",
        count: "消防员：13人",
        current: "值班领导：赵宝玉，13786743987"
      },
      {
        type: "医院",
        name: "合庆镇人民医院",
        address: "永嘉路239号",
        count: "医护人员：39人",
        current: "可用床位：25床"
      },
      {
        type: "避难所",
        name: "胜利公园",
        address: "华安路329号",
        count: "面积：14万平方米",
        current: "容纳人数：7万"
      },
      {
        type: "居民",
        name: "300户",
        address: "",
        count: "",
        current: ""
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-nearby {
  .component-nearby__item {
    display: flex;
    span {
      padding: 0 2px;
      margin-right: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
      overflow: hidden;
    }

    &:nth-of-type(2n) {
      > span {
        color: $cyan2;
        background-color: $bgColor2;
      }
    }
  }
  .component-nearby__item-label,
  .component-nearby__item-name {
    width: 50px;
  }
  .component-nearby__item-address {
    width: 72px;
  }
  .component-nearby__item-count {
    width: 65px;
  }
  .component-nearby__item-current {
    width: 120px;
  }
}
</style>