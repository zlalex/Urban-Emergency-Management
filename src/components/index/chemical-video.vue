<template>
  <section-group class="component-chemical-video" :title="title">
    <ul class="component-chemical-video__images">
      <li v-for="(item, i) in images" :key="i" @click="handleVideoClick">
        <img :src="`/images/${item}`" alt />
      </li>
    </ul>
  </section-group>
</template>

<script>
import SectionGroup from "@/components/layout/section-group";

export default {
  components: {
    SectionGroup
  },
  data: () => ({
    title: "危化品监控视频",
    images: ["img-u240.jpg", "img-u240.jpg", "img-u240.jpg"]
  }),
  methods: {
    handleVideoClick() {
      console.log("handleVideoClick");
    }
  }
};
</script>

<style lang="scss">
.component-chemical-video {
  .component-chemical-video__images {
    display: flex;
    li {
      width: 130px;
      height: 130px;
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>