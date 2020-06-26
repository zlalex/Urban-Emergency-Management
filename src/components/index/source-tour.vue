<template>
  <section-group class="component-source-tour" :title="title">
    <ul class="component-source-tour__images">
      <li v-for="(item, i) in images" :key="i" @click="handleImageClick">
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
    title: "危险源",
    images: ["img-u237.jpg", "img-u238.jpg", "img-u239.jpg"]
  }),
  methods: {
    handleImageClick() {
      console.log("handleImageClick");
    }
  }
};
</script>

<style lang="scss">
.component-source-tour {
  .component-source-tour__images {
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