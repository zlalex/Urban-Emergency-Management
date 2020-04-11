<template>
	<doc-content-section class="danger-content">
		<template #doc-left>
			<div class="danger-content-left">

			</div>
		</template>

		<template #doc-right>
			<div class="danger-content-right ue-rel">
				<ue-map/>
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