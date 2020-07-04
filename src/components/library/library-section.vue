<template>
  <div class="component-library-section">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.component-library-section {
  position: relative;
  padding: 12px 0;
  color: #444;
  line-height: 36px;
  border-bottom: 1px solid #f5f5f5;
  b {
    font-size: 14px;
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: 12px;
    b {
      font-size: 12px;
    }
    span {
      flex: 1;
    }
  }
  img{
    display: block;
  }
}
</style>