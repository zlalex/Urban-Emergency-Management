<template>
  <dispose-section class="component-resources" title="应急资源">
    <div class="component-resources__item" v-for="(item, i) in resourcesData" :key="i">
      <p>{{item.title}}</p>
      <p v-for="(text, j) in item.data" :key="j">{{text}}</p>
    </div>
  </dispose-section>
</template>

<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  },
  data: () => ({
    resourcesData: [
      {
        title: "一、防护用品",
        data: [
          "1、消防（防火服、头盔、手套、面具、消防靴、绝缘地毯、橡胶雨衣、胶鞋、防毒口罩、全面具、滤毒盒等）40套。",
          "2、通用（安全帽（盔）、安全鞋、水靴、呼吸面具等）10套。"
        ]
      },
      {
        title: "二、生命救助",
        data: [
          "1、通用（担架（车）、保温毯、氧气机（瓶、袋））10套。",
          "2、外伤（止血绷带，骨折固定托架（板）、快速止血粉、消毒药水、强酸强碱洗消剂等）10套。"
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
.component-resources {
  .component-resources__item {
    margin-bottom: 10px;
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>