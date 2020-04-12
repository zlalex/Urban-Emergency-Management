<template>
    <doc-content-section class="automobile-content">
        <template #doc-left>
            <div class="automobile-content-left automobile-content-info">
                <div class="automobile-message">
					<p class="doc-content-title">沪BG4517 上海中海物流公司</p>
                    <doc-context-card class="automobile-card">
                        <p>品牌：中国重汽●斯太尔M5G</p>
                        <p>类型：罐式货车</p>
                        <p>车身颜色：红色</p>
                        <p>车轴数：4</p>
                        <p>总重量：5.17吨</p>
                        <p>罐体容积：28.9m³</p>
                        <p>核定载质量：19.5吨</p>
                        <p>车辆外廓(长×宽×高)：11990×2500×3450,3730</p>
                        <p>发动机号码：D10.34-40</p>
                        <p>车辆识别代码：LZZ5ELND68W339696ZZ3257N3647B</p>
                        <p>货物类型：</p>
						<div class="automobile-imgcard img-wrap ue-abs">
							<img src="@/assets/img-u168.jpg" alt="">
						</div>
						<div class="ue-flex">
							<div class="img-wrap">
								<img src="@/assets/img-u409.png" alt="">
							</div>
							<div class="img-wrap">
								<img src="@/assets/img-u410.jpg" alt="">
							</div>
							<div class="img-wrap">
								<img src="@/assets/img-u411.jpg" alt="">
							</div>
						</div>
                    </doc-context-card>

                    <p class="doc-content-title">车辆轨迹</p>
                    <el-table :data="tableData" border>
                        <el-table-column prop="cartNo" label="车牌号" width="90"></el-table-column>
                        <el-table-column prop="content" label="运输品" width="100"></el-table-column>
                        <el-table-column prop="driver" label="驾驶员" width="70"></el-table-column>
                        <el-table-column prop="accompany" label="押运员" width="70"></el-table-column>
                        <el-table-column prop="company" label="收货地址"></el-table-column>
                        <el-table-column prop="source" label="发货地址"></el-table-column>
                    </el-table>
                </div>
                <div class="ue-rel automobile-content-map">
                    <ue-map />
                </div>
            </div>
        </template>

        <template #doc-right>
            <div class="automobile-content-right ue-rel">
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
        DocContextCard,
        DocContentSection,
        EchartGraph
    },
    data() {
        return {
            tableData: [
                {
                    source: '上海市闵行区外环以外',
                    cartNo: '沪BG4517',
                    content: '液氨26.3',
                    driver: '王明玉',
                    accompany: '李保国',
                    company: '上海中海物流公司'
                },
                {
                    source: '上海市闵行区外环以外',
                    cartNo: '沪BD2625',
                    content: '天然气34.5',
                    driver: '吴文博',
                    accompany: '张国庆',
                    company: '上海尹鑫物流有限公司'
                },
                {
                    source: '上海市闵行区外环以外',
                    cartNo: '沪BG4517',
                    content: '原油',
                    driver: '王晓峰',
                    accompany: '孙大伟',
                    company: '上海聚焦运输有限公司'
                },
                {
                    source: '上海市闵行区外环以外',
                    cartNo: '沪BG4817',
                    content: '汽油',
                    driver: '王峰',
                    accompany: '孙伟',
                    company: '南京聚焦运输有限公司'
                },
                {
                    source: '上海市闵行区外环以外',
                    cartNo: '沪BG4517',
                    content: '汽油',
                    driver: '赵宝发',
                    accompany: '周尚文',
                    company: '上海众宁运输有限公司'
                }
            ]
        };
    }
};
</script>
<style lang="stylus">
.automobile-content-info {
    display: flex;
    flex-direction: column;

    .automobile-message, .automobile-content-map {
        flex: 1;
    }
	.automobile-card{
		position relative
		padding 10px
		border: 1px solid #EBEEF5 ;
		border-left 0 none
		p{
			font-size 14px;
			line-height 24px;
		}
	}
	.automobile-imgcard{
		right 0
		top 0
		width: 35%;
		max-height: 220px;
		font-size 0
	}
	.ue-flex{
		height 100px
		.img-wrap{
			flex: 1;
			height 100%
			text-align: center;
			img{
				width auto
			}
		}
	}
	.img-wrap{
		font-size 0
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.doc-content-title {
	padding 10px
	font-weight bold
	font-size 24px
	color #2693ff
	border-right : 1px solid #EBEEF5 ;
}
</style>