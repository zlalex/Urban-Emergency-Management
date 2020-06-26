<template>
  <dispose-section title="事件信息" class="component-accident">
    <p class="component-accident__item" v-for="(item, i) in accidents" :key="i">
      <span class="component-accident__label">{{item.label}}：</span>
      <span class="component-accident__value" v-if="item.value">{{item.value}}</span>
      <span class="component-accident__time" v-else>{{time}}</span>
    </p>
  </dispose-section>
</template>

<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  },
  computed: {
    min() {
      const min = Math.floor(this.count / 60);
      return min < 60 ? min : min % 60;
    },
    second() {
      return this.count % 60;
    },
    hour() {
      return Math.floor(this.count / 3600);
    },
    time() {
      return `${this.hour} 时 ${this.min} 分 ${this.second} 秒`;
    }
  },
  data: () => ({
    count: 0,
    accidents: [
      {
        label: "接报时间",
        value: "2020年3月2日10:24"
      },
      {
        label: "事件类型",
        value: "危险化学品事件"
      },
      {
        label: "持续时间",
        value: ""
      },
      {
        label: "事件描述",
        value:
          "2020年3月2日10时21分许接110报警，合庆地区周祝公路琥珀路口，发生罐式货车侧翻，现场发现天然气泄漏，未发现人员伤亡。"
      }
    ]
  }),
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1e3);
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-accident {
  .component-accident__item {
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
  }
  .component-accident__value{
    font-size: 12px;
  }
  .component-accident__label {
    font-size: 12px;
    color: $gold3;
  }
  .component-accident__time {
    font-size: $h1;
    color: $red3;
    font-weight: 700;
  }
}
</style>