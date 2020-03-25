<template>
	<div class="ue-layer-section">
		<div class="ue-section-head">
			<p class="ue-justify-dot">{{title || '自定义模块标题'}}</p>
		</div>
		<div class="ue-section-centent ue-justify-dot">
			<slot />
		</div>
	</div>
</template>
<script>
export default {
	name: 'ue-layer-section',
	props: {
		title: String
	}
}
</script>