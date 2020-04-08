<template>
    <index-section class="event-left-section">
        <index-echarts-tpl title="事件信息">
            <p>接报时间：2020年3月2日10:24</p>
            <p>事件类型：危险化学品事件</p>
            <p>持续时间：1小时20分</p>
            <p>事件描述：2020年3月2日10时21分许接110报警，合庆地区周祝公路琥珀路口，发生罐式货车侧翻，现场发现天然气泄漏，未发现人员伤亡。</p>
        </index-echarts-tpl>

        <index-echarts-tpl title="现场灾情">
			<span class="ue-button ue-btn-default">扩散:10公里</span>
			<span class="ue-button ue-btn-default">疏散:350户</span>
			<span class="ue-button ue-btn-default">救治:6人</span>
			<span class="ue-button ue-btn-default">伤亡:0人</span>
        </index-echarts-tpl>

        <index-echarts-tpl title="知识档案">
			<p>图谱分析</p>
			<p>历史事件</p>
			<el-table :data="[]" style="width: 100%">
				<el-table-column prop="date" label="日期" width="70"></el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
				<el-table-column prop="address" label="方案"></el-table-column>
			</el-table>
        </index-echarts-tpl>

        <index-echarts-tpl title="天然气(甲烷)安全技术知识">
			<p>详细信息</p>
			<p>消防措施：</p>
			<p>灭火剂：用雾状水、泡沫、二氧化碳、干粉灭火</p>
			<p>注意事项：切断气源，若不能切断气源, 则不允许熄灭泄漏处的火焰。</p>
			<p>防护措施：消防人员必须佩戴空 呼吸器、穿全身防火防毒服,在上风向灭火。尽可能将容器从火场移至空旷处。喷水保持火场容器冷却, 直至灭火结束。</p>
			<p>泄漏应急处置措施：</p>
			<p>消除所有点火源。根据气体扩散的影响区域划定警戒区,无关人员从侧风、上风向撤离至安全区。建议应急处理人员戴正压自给式呼吸器,穿防静电服。作业时使用的 所有设备应接地。尽可能切断泄漏源。若可能翻转容 器,使之逸出气体而非液体。喷雾状水抑制蒸气或改 变蒸气云流向,避免水流接触泄漏物。禁止用水直接 冲击泄漏物或泄漏源。</p>
        </index-echarts-tpl>

        <index-echarts-tpl title="泄漏应急处置措施">
			<p>泄漏应急处置措施：</p>
			<p>消除所有点火源。根据气体扩散的影响区域划定警戒区,无关人员从侧风、上风向撤离至安全区。建议应急处理人员戴正压自给式呼吸器,穿防静电服。作业时使用的 所有设备应接地。尽可能切断泄漏源。若可能翻转容 器,使之逸出气体而非液体。喷雾状水抑制蒸气或改 变蒸气云流向,避免水流接触泄漏物。禁止用水直接 冲击泄漏物或泄漏源。</p>
        </index-echarts-tpl>

        <index-echarts-tpl title="处置专家">
			<p>详细信息</p>
			<el-table :data="[]" style="width: 100%">
				<el-table-column prop="date" label="姓名" width="70"></el-table-column>
				<el-table-column prop="address" label="手机号码"></el-table-column>
				<el-table-column prop="address" label="角色"></el-table-column>
				<el-table-column prop="address" label="公司"></el-table-column>
			</el-table>
        </index-echarts-tpl>

        <index-echarts-tpl title="运输车辆:沪A23212">
			<p>详细信息</p>
			<p>所属单位：上海中海物流公司</p>
			<p>驾驶人：王明玉 13867539850</p>
			<p>押运人：李保国 13987603854</p>
			<p>发货地址：上海市闵行区通运路300号</p>
			<p>收货地址：上海市金山区大宝路20号</p>
        </index-echarts-tpl>

        <el-timeline :reverse="reverse" v-if="false">
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
            >{{activity.content}}</el-timeline-item>
        </el-timeline>
    </index-section>
</template>
<script>
export default {
    data() {
        return {
            reverse: true,
            activities: [
                {
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                },
                {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                },
                {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }
            ]
        };
    }
};
</script>
<style lang="stylus">
.ue-layout-left{
	.event-left-section p{
		text-align: left;
	}
}
</style>
