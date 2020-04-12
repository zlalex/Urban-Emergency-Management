<template>
    <doc-content-section class="business-content">
        <template #doc-left>
            <div class="business-content-left">
                <p class="doc-content-title">上海中海物流公司</p>
                <doc-context-card class="business-card">
					<div style="width: 50%;">
						<p>许可证号：沪浦310115020314</p>
						<p>企业法人：郑大国，13865490876</p>
						<p>企业地址：浦东金桥金明村金明路1216号</p>
						<p>经营范围：</p>
						<p>第二类(易燃气体)、第二类(非易燃无毒气体)、第三类(易燃液体)、第四类(易燃固体)、第五类(氧化性物质)、第五类(有机过氧化物)、第六类(毒性物质)、第八类(腐蚀性物质(强腐蚀性))、第八类(腐蚀性物质(弱腐蚀性))。</p>
					</div>
					<div class="business-imgcard img-wrap ue-abs">
						<img src="@/assets/img-u508.jpg" alt="">
					</div>
                </doc-context-card>
                <p class="doc-content-title">运输车辆</p>
                <el-table :data="tableData" border>
                    <el-table-column prop="cartNo" label="车牌号" width="90"></el-table-column>
                    <el-table-column prop="content" label="车辆类型" width="100"></el-table-column>
                    <el-table-column prop="driver" label="车辆品牌" width="200"></el-table-column>
                    <el-table-column prop="accompany" label="总质量" width="70"></el-table-column>
                    <el-table-column prop="company" label="核定载质量"></el-table-column>
                    <el-table-column prop="source" label="容积"></el-table-column>
                </el-table>
                <p class="doc-content-title">运输人员</p>
                <el-table :data="tableData2" border>
                    <el-table-column prop="cartNo" label="姓名" width="90"></el-table-column>
                    <el-table-column prop="content" label="性别" width="100"></el-table-column>
                    <el-table-column prop="driver" label="年龄" width="70"></el-table-column>
                    <el-table-column prop="accompany" label="岗位" width="70"></el-table-column>
                    <el-table-column prop="company" label="从业资格证号码"></el-table-column>
                    <el-table-column prop="source" label="从业资格证类型"></el-table-column>
                </el-table>
            </div>
        </template>

        <template #doc-right>
            <div class="business-content-right ue-rel">
                <echart-graph />
            </div>
        </template>
    </doc-content-section>
</template>
<script>
import DocContentSection from '@/components/widget/doc-content-section';
import EchartGraph from '@/components/widget/echart-graph';
import DocContextCard from '@/components/widget/doc-context-card';
export default {
    components: {
        DocContentSection,
        EchartGraph,
        DocContextCard
    },
    data() {
        return {
            tableData: new Array(5).fill({
                cartNo: '沪BG4517',
                content: '罐式货车',
                driver: '重汽斯太尔M5G',
                accompany: '5.17吨',
                company: '19.5吨',
                source: '28.9m³'
            }),
            tableData2: new Array(5).fill({
                cartNo: '李保国',
                content: '男',
                driver: '34',
                accompany: '驾驶员',
                company: '2010298734671253879',
                source: '危险货物运输驾驶员'
            })
        };
    }
};
</script>
<style lang="stylus">
.business-content {
    .business-card {
        position: relative;
        padding: 10px;
        border: 1px solid #EBEEF5;
        border-left: 0 none;

        p {
            font-size: 14px;
            line-height: 24px;
        }
    }

    .business-imgcard {
        right: 0;
        top: 0;
        width: 35%;
        max-height: 220px;
        font-size: 0;
    }
}
</style>