<template>
    <doc-content-section class="product-doc-content">
            <div class="product-doc-content-left">
                <p class="doc-content-title">上海荣建化工厂</p>
                <doc-context-card class="product-doc-card">
                    <p class="font-bold">企业基本信息</p>
					<p>企业分类：XXX</p>
					<p>机构代码：...</p>
                </doc-context-card>
                <doc-context-card class="product-doc-card">
                    <p class="font-bold">危化品许可范围</p>
					<p>树脂，油漆...</p>
                </doc-context-card>
                <doc-context-card class="product-doc-card">
                    <p class="font-bold">企业规划信息</p>
					<p class="map-3d">3D地图</p>
                </doc-context-card>
            </div>
    </doc-content-section>
</template>
<script>
import DocContentSection from '@/components/widget/doc-content-section';
import DocContextCard from '../../../components/widget/doc-context-card';
export default {
    components: {
        DocContentSection,
        DocContextCard
    },
    data() {
        return {};
    }
};
</script>
<style lang="stylus">
.product-doc-content {
    .product-doc-card {
        position: relative;
        padding: 10px;
        border-top: 1px solid #EBEEF5;
        p {
            font-size: 14px;
            line-height: 24px;
        }
		.map-3d{
			text-align center
			margin: 10px;
			padding 100px 10px
			border: 1px solid #EBEEF5;
		}
    }
}
</style>