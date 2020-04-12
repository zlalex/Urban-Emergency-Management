<template>
    <div class="ue-product-doc">
        <doc-topbar class="ue-product-doc-topbar" title="生产企业档案" />
        <product-doc-content />
    </div>
</template>
<script>
import DocTopbar from '@/components/widget/doc-topbar';
import ProductDocContent from './product-doc-components/product-doc-content';
export default {
    name: 'ue-product-doc',
    components: {
        DocTopbar,
        ProductDocContent
    },
    mounted() {}
};
</script>
<style lang="stylus">
.ue-product-doc {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .ue-product-doc-topbar {
        height: 60px;
    }

    .product-doc-content {
        flex: 1;
        padding-top: 60px;
    }

    .product-doc-content-left, .product-doc-content-right {
        flex: 1;
        height: 100%;
    }
}
</style>