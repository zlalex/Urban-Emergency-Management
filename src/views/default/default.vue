<template>
    <div class="ue-default-layout">
		<index-topbar>
			<template #topbar-left>
				<div class="ue-topbar-left ue-fl">
					<p>上海: 多云 14℃ 风向：西北 风力：2级 风速：2.5M/S</p>
				</div>
			</template>
			<template #topbar-title>
				<h1 class="ue-align-center ue-index-title">城市危化品全生命周期智能监控处置系统</h1>
			</template>
		</index-topbar>
        <router-view />
		<ue-map/>
	</div>
</template>
<script>
export default {
    name: 'ue-default-layout'
};
</script>