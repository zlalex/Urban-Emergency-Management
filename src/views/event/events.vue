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
            <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
        </div>
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
        return {};
    },
    mounted() {
        console.log(1);
    }
};
</script>
<style lang="stylus">
.ue-event-bottom {
	z-index 2
    bottom: 20px;
	padding: 10px;
    margin: 0 420px;
    width: calc(100% - 850px);
    background: rgba(0,102,153,0.6);
	border 1px solid #069
}
</style>