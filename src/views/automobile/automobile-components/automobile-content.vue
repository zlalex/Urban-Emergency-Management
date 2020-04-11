<template>
	<doc-content-section class="automobile-content">
		<template #doc-left>
			<div class="automobile-content-left automobile-content-info">
				<div class="automobile-message">

				</div>
				<div class="ue-rel automobile-content-map">
					<ue-map/>
				</div>
			</div>
		</template>

		<template #doc-right>
			<div class="automobile-content-right ue-rel">
			</div>
		</template>
	</doc-content-section>
</template>
<script>
import DocContentSection from '@/components/widget/doc-content-section'
export default {
	components:{
		DocContentSection
	}
}
</script>
<style lang="stylus">
.automobile-content-info{
	display flex
	flex-direction column
	.automobile-message,
	.automobile-content-map{
		flex 1
	}
}
</style>