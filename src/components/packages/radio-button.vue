<template>
  <div class="radio-button">
    <span
      v-for="(el, i) in data"
      :key="i"
      @click="handleChange(el)"
      class="radio-button-item"
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
.radio-button{
	display: flex;
	.radio-button-item{
		flex: 1;
		text-align: center;
		line-height: 24px;
	}
}
</style>