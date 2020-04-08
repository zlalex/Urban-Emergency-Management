<template>
	<index-section class="ue-index-leftbottom" title="周边一公里">
		<el-table :data="[]" style="width: 100%">
			<el-table-column prop="date" label="日期" width="70"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column prop="address" label="方案"></el-table-column>
		</el-table>
		<p>环境影响预测</p>
		<p>大气环境影响：较大</p>
		<p>水环境影响：较小</p>
		<p>土壤环境影响：较小</p>
		<p>噪声环境影响：较小</p>

        <index-echarts-tpl title="应急资源">
			<p>一、防护用品</p>
			<p>1、消防（防火服、头盔、手套、面具、消防靴、绝缘地毯、橡胶雨衣、胶鞋、防毒口罩、全面具、滤毒盒等）40套。</p>
			<p>2、通用（安全帽（盔）、安全鞋、水靴、呼吸面具等）10套。</p>
			<p>二、生命救助</p>
			<p>1、通用（担架（车）、保温毯、氧气机（瓶、袋））10套。</p>
			<p>2、外伤（止血绷带，骨折固定托架（板）、快速止血粉、消毒药水、强酸强碱洗消剂等）10套。</p>
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
	data(){
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
		}
	}
}
</script>
<style lang="stylus">
.ue-index-leftbottom{
	p{
		text-align: left;
	}
}
</style>