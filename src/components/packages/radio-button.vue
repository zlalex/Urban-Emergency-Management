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
