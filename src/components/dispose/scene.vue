<template>
  <dispose-section class="component-scene" title="现场灾情">
    <div class="component-scene__wrapper">
      <basic-button
        class="component-scene__item"
        :class="returnSceneColor(item)"
        v-for="(item, i) in scenes"
        :key="i"
      >{{item.value}}</basic-button>
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
    scenes: [
      {
        type: "1",
        value: "扩散:10公里"
      },
      {
        type: "2",
        value: "疏散:350户"
      },
      {
        type: "3",
        value: "救治:6人"
      },
      {
        type: "4",
        value: "伤亡:0人"
      }
    ]
  }),
  methods: {
    returnSceneColor(item) {
      switch (item.type) {
        case "1":
          return "component-scene__red";
        case "2":
          return "component-scene__blue";
        case "3":
          return "component-scene__green";
        case "4":
          return "component-scene__gray";
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-scene {
  .component-scene__wrapper {
    display: flex;
    padding: 5px 0;
  }
  .component-scene__item {
    flex-grow: 1;
    margin-right: 10px;
    padding: 5px 0;
    color: #fff;
    border-radius: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
  .component-scene__red {
    background-color: $red1;
  }
  .component-scene__blue {
    background-color: $blue1;
  }
  .component-scene__green {
    background-color: $green1;
  }
  .component-scene__gray {
    background-color: $gray;
  }
}
</style>