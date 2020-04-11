<template>
    <div class="doc-content-section">
        <slot name="doc-left" />
        <slot name="doc-right" />
    </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.doc-content-section {
    display: flex;
}
</style>
