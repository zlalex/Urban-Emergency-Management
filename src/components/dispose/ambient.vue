<template>
  <dispose-section class="component-ambient" title="环境影响预测">
    <p class="component-ambient__item">
      <span>大气环境影响：较大</span>
      <span>水环境影响：较小</span>
    </p>
    <p class="component-ambient__item">
      <span>土壤环境影响：较小</span>
      <span>噪声环境影响：较小</span>
    </p>
    <div class="component-ambient__image">
      <img src="images/img-3d.png" alt />
    </div>
  </dispose-section>
</template>

<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  }
};
</script>

<style lang="scss">
.component-ambient {
  .component-ambient__item {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      line-height: 20px;
    }
  }
  .component-ambient__image {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>