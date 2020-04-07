<template>
    <div class="ue-event">
        <div class="ue-layout-left">
			<event-layout-left />
        </div>

        <div class="ue-layout-right">
			<event-layout-right />
		</div>

        <div class="ue-abs" style="bottom: 0;">
            <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
        </div>
    </div>
</template>
<script>
import eventLayoutLeft from './event-components/event-layout-left'
import eventLayoutRight from './event-components/event-layout-left'
export default {
	name: 'ue-event',
	components: {
		eventLayoutLeft,
		eventLayoutRight
	},
    data() {
        return {
        };
    },
    mounted() {
        console.log(1);
    }
};
</script>