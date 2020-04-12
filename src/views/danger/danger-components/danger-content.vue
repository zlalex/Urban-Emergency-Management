<template>
    <doc-content-section class="danger-content">
        <template #doc-left>
            <div class="danger-content-left">
                <p class="doc-content-title">甲烷（沼气）</p>
                <doc-context-card class="danger-card">
                    <p>英文名：methane（marsh gas）</p>
                    <p>用途：用作燃料和用于炭黑、氢、乙炔、甲醛等的制造</p>
                    <div class="ue-flex">
                        <div class="img-wrap">
                            <img src="@/assets/img-u348.png" alt />
                        </div>
                        <div class="img-wrap">
                            <img src="@/assets/img-u349.png" alt />
                        </div>
                    </div>
                </doc-context-card>

				<p class="doc-content-title">防范措施</p>

                <div class="danger-info-wrap">
                    <div class="danger-info-section danger-card">
                        <p class="font-bold">事故响应</p>
                        <p>漏气着火：切勿灭火，除非漏气能够安全地制止。如果没有危险，消除一切点火源。</p>
                        <p>健康伤害：空气中甲烷浓度过高，能使人窒息。当空气中甲烷 达25%~30%时，可引起 头痛、头晕、乏力、注意力不集 中、呼吸和心跳加速、共济失调。若不及时脱离，可致窒息死亡。皮肤接触液化气体可致冻伤。</p>
                        <p>预防措施：远离热源、火花、明火、热表面，禁止吸烟。</p>
                        <p>安全储存：防日晒，存放在通风良好的地方。</p>
                    </div>

                    <div class="danger-info-section danger-card">
                        <p class="font-bold">消防措施</p>
                        <p>灭火剂：用雾状水、泡沫、二氧化碳、干粉灭火。</p>
                        <p>特别危险性：与五氧化溴、氯气、次氯酸、三氟化氮、液氧、二氟化氧及其他强氧化剂接触发生剧烈反应。燃烧生成有害的一氧化碳。</p>
                        <p>灭火注意事项：切断气源。若不能切断气源， 则不允许熄灭泄漏处的火焰。</p>
                        <p>防护措施：消防人员必须佩戴空气 呼吸器、穿全身防火防毒服,在上风向灭火。尽可能将容器从火场移至空旷处。喷水保持火场容器冷却, 直至灭火结束。</p>
                    </div>

                    <div class="danger-info-section danger-card">
                        <p class="font-bold">泄漏应急处置</p>
                        <p>作业人员防护措施、防护装备和应急处置程序：消除所有点火源。根据气体扩散的影响区域划定警戒区,无关人员从侧风、上风向撤离至安全区。建议应急处理人员戴正压自给式呼吸器,穿防静电服。作业时使用的所有设备应接地。尽可能切断泄漏源。若可能翻转容器,使之逸出气体而非液体。喷雾状水抑制蒸气或改变蒸气云流向,避免水流接触泄漏物。禁止用水直接冲击泄漏物或泄漏源。</p>
                        <p>环境保护措施：防止气体通过下水道、通风系统和有限空间扩散。隔离泄漏区直至气体散尽</p>
                    </div>
                </div>

                <p class="doc-content-title">运输信息</p>
                <div class="danger-info-wrap">
                    <div class="danger-info-section danger-card">
                        <p class="font-bold">注意事项</p>
                        <p>采用钢瓶运输时必须戴好钢瓶上的安全帽。钢瓶一般平放,并应将瓶口朝同一方向,不可交叉;高度不得超过车辆的防护栏板,并用三角木垫卡 牢,防止滚动。运输时运输车辆应配备相应品种和数 量的消防器材。装运该物品的车辆排气管必须配备阻 火装置,禁止使用易产生火花的机械设备和工具装 卸。严禁与氧化剂等混装混运。夏季应早晚运输,防 止日光曝晒。中途停留时应远离火种、热源。公路运 输时要按规定路线行驶,勿在居民区和人口稠密区停 留。铁路运输时要禁止溜放。</p>
                    </div>

                    <div class="danger-info-section danger-card">
                        <p class="font-bold">包装标志</p>
                        <div class="ue-flex">
                            <div class="img-wrap">
                                <img src="@/assets/img-u350.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #doc-right>
            <div class="danger-content-right ue-rel">
                <echart-graph />
            </div>
        </template>
    </doc-content-section>
</template>
<script>
import DocContentSection from '@/components/widget/doc-content-section';
import EchartGraph from '../../../components/widget/echart-graph';
import DocContextCard from '../../../components/widget/doc-context-card';
export default {
    components: {
        DocContentSection,
        EchartGraph,
        DocContextCard
    },
    data() {
        return {};
    }
};
</script>
<style lang="stylus">
.danger-content {
    .danger-card {
        position: relative;
        padding: 10px;
        border: 1px solid #EBEEF5;
        border-left: 0 none;

        p {
            font-size: 14px;
            line-height: 24px;
        }
    }
	.danger-info-section{
		border-bottom: 0 none;
	}

    .ue-flex {
        height: 100px;

        .img-wrap {
            flex: 1;
            height: 100%;
            text-align: center;

            img {
                width: auto;
            }
        }
    }

    .img-wrap {
        font-size: 0;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>