<template>
  <div class="package-radio-button">
    <span
      v-for="(el, i) in data"
      :key="i"
      @click="handleChange(el)"
      class="package-radio-button__item"
      :class="{
        active: value === el.value
      }"
    >{{el.name}}</span>
  </div>
</template>

<script>
export default {
  name: "radio-button",
  props: {
    data: Array,
    value: [Number, String]
  },
  methods: {
    handleChange(el) {
      this.$emit("input", el.value);
      if (el.value !== this.value) {
        this.$emit("radioChange", el);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.package-radio-button {
  display: flex;
  font-size: 14px;
  line-height: 36px;
  color: $basicThird;
  text-align: center;
  background-color: #fff;
  .package-radio-button__item {
    flex: 1;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: $basicThird;
    }
  }
}
</style>