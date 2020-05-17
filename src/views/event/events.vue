<template>
    <div class="ue-event">
        <div class="ue-layout-left">
            <event-layout-left />
            <event-layout-left-bottom />
        </div>

        <div class="ue-layout-right">
            <event-layout-right />
        </div>

        <div class="ue-abs ue-event-bottom">
            <div class="ue-flex">
                <p class="font-bold" style="color:#fff; font-size: 20px;">上海市处置危险化学品事故应急预案</p>
                <span class="ue-button ue-btn-blue ue-btn-default" @click="showDialog">启动3级响应</span>
            </div>

            <el-steps :space="200" :active="3" finish-status="success">
                <el-step>
                    <template #title>
                        <p class="ue-pointer" @click="showEventHandle(false)">事件接报</p>
                    </template>
                </el-step>
                <el-step title="先期处置">
                    <template #title>
                        <p class="ue-pointer" @click="showEventHandle(false)">先期处置</p>
                    </template>
                </el-step>
                <el-step title="事件处理">
                    <template #title>
                        <p class="ue-pointer" @click="showEventHandle(true)">事件处理</p>
                    </template>
                </el-step>
            </el-steps>
        </div>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="350px" :before-close="handleClose">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="100"></el-table-column>
                <el-table-column prop="name" label="姓名" width="100"></el-table-column>
                <el-table-column prop="address" label="地址" width="auto"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <span class="ue-button ue-btn-blue ue-btn-default" @click="sendMessage">信息发布</span>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import eventLayoutLeft from './event-components/event-layout-left';
import eventLayoutLeftBottom from './event-components/event-layout-left-bottom';
import eventLayoutRight from './event-components/event-layout-right';
export default {
    name: 'ue-event',
    components: {
        eventLayoutLeft,
        eventLayoutLeftBottom,
        eventLayoutRight
    },
    data() {
        return {
            dialogVisible: false,
            tableData: [
                {
                    date: '市公安局',
                    name: '王大陆',
                    address: '13476549807'
                },
                {
                    date: '市民防办',
                    name: '赵国忠',
                    address: '13398705789'
                },
                {
                    date: '市应急救援总队',
                    name: '钱大宝',
                    address: '13115648709'
                },
                {
                    date: '市环保局',
                    name: '孙宝国',
                    address: '13198509860'
                },
            ]
        };
    },
    methods: {
        showEventHandle(sign) {
            this.$BUS.$emit('SHOW_EVENT_HANDLE', sign);
        },
        showDialog() {
            this.dialogVisible = !this.dialogVisible;
		},
		sendMessage(){
			window.open('./chat.html')
		},
        handleClose() {
            this.showDialog();
        }
    },
    mounted() {
        this.$BUS.$emit('INIT_EVENT');
    },
    destroyed() {
        this.$BUS.$off('INIT_EVENT');
    }
};
</script>
<style lang="stylus">
.ue-event{
	.el-dialog{
		.el-dialog__header{
			display none
		}
		.el-dialog__body,
		.el-dialog__footer{
			padding 10px
		}
		.el-dialog__footer{
			text-align center
		}
		background rgba(0,102,153,0.6)
	}
}
.ue-event-bottom {
    z-index: 2;
    bottom: 20px;
    padding: 10px;
    margin: 0 520px;
    width: calc(100% - 1050px);
    background: rgba(0, 102, 153, 0.6);
    border: 1px solid #069;
}
</style>