<template>
    <index-section class="ue-index-leftbottom">
        <template #title>
            <h2 class="ue-align-center">周边一公里</h2>
        </template>
        <el-table border stripe :data="positionData" style="width: 100%">
            <el-table-column prop="type" label="种类" width="60"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="address" label="地点"></el-table-column>
            <el-table-column prop="count" label="人力" width="40"></el-table-column>
            <el-table-column prop="current" label="值班"></el-table-column>
        </el-table>

		<br>

		<index-echarts-tpl title="环境影响预测">
            <div class="ue-flex">
                <p>大气环境影响：较大</p>
                <p>水环境影响：较小</p>
            </div>
            <div class="ue-flex">
                <p>土壤环境影响：较小</p>
                <p>噪声环境影响：较小</p>
            </div>
			<div style="width: 100%; height: 200px; line-height: 300px; border: 1px solid #069;">
				环境监控图
			</div>
		</index-echarts-tpl>

		<br>

		<index-echarts-tpl v-if="showHandleStep" title="现场视频">
			<div>
				<video src=""></video>
			</div>
		</index-echarts-tpl>

        <index-echarts-tpl v-else title="应急资源" style="text-align: left; font-size: 12px; ">
            <p class="font-bold font-gold">一、防护用品</p>
            <p>1、消防（防火服、头盔、手套、面具、消防靴、绝缘地毯、橡胶雨衣、胶鞋、防毒口罩、全面具、滤毒盒等）40套。</p>
            <p>2、通用（安全帽（盔）、安全鞋、水靴、呼吸面具等）10套。</p>
			<br>
            <p class="font-bold font-gold">二、生命救助</p>
            <p>1、通用（担架（车）、保温毯、氧气机（瓶、袋））10套。</p>
            <p>2、外伤（止血绷带，骨折固定托架（板）、快速止血粉、消毒药水、强酸强碱洗消剂等）10套。</p>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
export default {
    data() {
        return {
			showHandleStep: false,
            positionData: [
                {
                    type: '派出所',
                    name: '当路派出所',
                    address: '天平路59号',
                    count: '25人',
                    current: '王保国 13654398706'
                },
                {
                    type: '派出所',
                    name: '多路派出所',
                    address: '天平路59号',
                    count: '5人',
                    current: '王保国 13654398706'
                },
                {
                    type: '派出所',
                    name: '分路派出所',
                    address: '天平路59号',
                    count: '10人',
                    current: '王保国 13654398706'
                },
                {
                    type: '派出所',
                    name: '平路派出所',
                    address: '平路59号',
                    count: '7人',
                    current: '王国 13654398706'
                },
                {
                    type: '派出所',
                    name: '天路派出所',
                    address: '天平路9号',
                    count: '4人',
                    current: '保国 13454398706'
                }
            ]
        };
	},
	mounted(){
		this.$BUS.$on('SHOW_EVENT_HANDLE', (val)=>{
			this.showHandleStep = val
		})
	}
};
</script>