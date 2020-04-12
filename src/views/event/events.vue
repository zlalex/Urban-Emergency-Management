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
				</el-step >
                <el-step title="事件处理">
					<template #title>
						<p class="ue-pointer" @click="showEventHandle(true)">事件处理</p>
					</template>
				</el-step>
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
	methods:{
		showEventHandle(sign){
			this.$BUS.$emit('SHOW_EVENT_HANDLE', sign)
		}
	},
    mounted() {
		this.$BUS.$emit('INIT_EVENT')
	},
	destroyed(){
		this.$BUS.$off('INIT_EVENT')
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