<template>
  <dispose-section class="component-knowledge" title="天然气(甲烷)安全技术知识">
    <div class="component-knowledge__info">
      <span>消防措施</span>
      <span
        class="component-knowledge__button component-knowledge__blank"
        @click="$GoRoute('/library/chemical')"
      >详细信息</span>
    </div>
    <p class="component-knowledge__item" v-for="(item, i) in knowledges" :key="i">
      <span class="component-knowledge__item-label">{{item.label}}：</span>
      <span class="component-knowledge__item-value" v-if="item.value">{{item.value}}</span>
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
    knowledges: [
      {
        label: "灭火剂",
        value: "用雾状水、泡沫、二氧化碳、干粉灭火"
      },
      {
        label: "注意事项",
        value: "切断气源，若不能切断气源, 则不允许熄灭泄漏处的火焰。"
      },
      {
        label: "防护措施",
        value:
          "消防人员必须佩戴空 呼吸器、穿全身防火防毒服,在上风向灭火。尽可能将容器从火场移至空旷处。喷水保持火场容器..."
      },
      {
        label: "泄漏应急处置措施",
        value:
          "消除所有点火源。根据气体扩散的影响区域划定警戒区,无关人员从侧风、上风向撤离至安全区。建议应急处理人员戴正压自给式呼..."
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-knowledge {
  .component-knowledge__button {
    padding: 0 5px;
    color: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
  }
  .component-knowledge__info {
    display: flex;
    justify-content: space-between;
  }
  .component-knowledge__blank {
    text-decoration: none;
  }
  .component-knowledge__item {
    font-size: 12px;
    line-height: 20px;
  }
  .component-knowledge__item-label{
    color: $gold3;
  }
}
</style>