<template>
    <index-section class="event-left-section">
        <el-timeline :reverse="reverse" v-if="false">
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
            >{{activity.content}}</el-timeline-item>
        </el-timeline>

        <template v-else>
            <index-echarts-tpl title="知识档案">
                <div class="ue-flex" style="padding: 0 10px;">
                    <p class="font-bold">图谱分析</p>
                    <p class="ue-button ue-btn-small ue-btn-outline">历史事件</p>
                </div>
                <el-table border stripe :data="mapData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="80"></el-table-column>
                    <el-table-column prop="address" label="地址" width="auto"></el-table-column>
                    <el-table-column label="方案" width="70" align="right">
                        <p class="ue-button ue-btn-small ue-btn-outline">处置方案</p>
                    </el-table-column>
                </el-table>
            </index-echarts-tpl>

            <index-echarts-tpl title="天然气(甲烷)安全技术知识">
                <div class="ue-flex">
                    <p class="font-bold">消防措施:</p>
                    <p class="ue-button ue-btn-small ue-btn-outline">详细信息</p>
                </div>
                <p>
                    <span class="font-gold">灭火剂：</span>
                    <span>用雾状水、泡沫、二氧化碳、干粉灭火</span>
                </p>
                <p>
                    <span class="font-gold">注意事项：</span>
                    <span>切断气源，若不能切断气源, 则不允许熄灭泄漏处的火焰。</span>
                </p>
                <p>
                    <span class="font-gold">防护措施：</span>
                    <span>消防人员必须佩戴空 呼吸器、穿全身防火防毒服,在上风向灭火。尽可能将容器从火场移至空旷处。喷水保持火场容器...</span>
                </p>
				<br>
                <p class="font-bold">泄漏应急处置措施：</p>
                <p>消除所有点火源。根据气体扩散的影响区域划定警戒区,无关人员从侧风、上风向撤离至安全区。建议应急处理人员戴正压自给式呼...</p>
            </index-echarts-tpl>

            <index-echarts-tpl title="处置专家">
                <el-table border :data="masterData" style="width: 100%">
                    <el-table-column prop="name" label="姓名" width="60"></el-table-column>
                    <el-table-column prop="phoneNo" label="手机号码" width="90"></el-table-column>
                    <el-table-column prop="role" label="角色" width="60"></el-table-column>
                    <el-table-column prop="company" label="公司" width="auto"></el-table-column>
                </el-table>
            </index-echarts-tpl>

            <index-echarts-tpl title="运输车辆:沪A23212">
                <div class="ue-flex">
                    <p class="font-bold">运输车辆：沪BG4517</p>
                    <p class="ue-button ue-btn-small ue-btn-outline">详细信息</p>
                </div>
                <p>
                    <span class="font-gold">所属单位：</span>上海中海物流公司
                </p>
                <p>
                    <span class="font-gold">驾驶人：</span>王明玉 13867539850
                </p>
                <p>
                    <span class="font-gold">押运人：</span>李保国 13987603854
                </p>
                <p>
                    <span class="font-gold">发货地址：</span>上海市闵行区通运路300号
                </p>
                <p>
                    <span class="font-gold">收货地址：</span>上海市金山区大宝路20号
                </p>
            </index-echarts-tpl>
        </template>
    </index-section>
</template>
<script>
export default {
    data: () => ({
        reverse: true,
        masterData: [
            {
                phoneNo: '18117239098',
                name: '吴文博',
                role: '总工程师',
                company: '上海尹鑫物流有限公司'
            },
            {
                phoneNo: '18117239098',
                name: '文新',
                role: '助理',
                company: '上海尹鑫物流有限公司'
            }
        ],
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
        ],
        mapData: [
            {
                date: '2019/10/23',
                address: '上海市浦东新区虹梅路发生交通意外事故'
            },
            {
                date: '2019/10/21',
                address: '上海市浦东新区虹梅路发生交通意外事故'
            },
            {
                date: '2019/08/16',
                address: '上海市浦东新区虹梅路发生交通意外事故.....'
            },
            {
                date: '2019/03/08',
                address: '上海市浦东新区虹梅路发生交通意外事故.....'
            }
        ]
    })
};
</script>