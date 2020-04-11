<template>
	<div class="ue-index-operate">
		<template v-if="type === 'company'">
			<span class="ue-button ue-btn-default" @click="changeCompany">生产企业</span>
			<span class="ue-button ue-btn-default" @click="changeCompany">经营企业</span>
			<span class="ue-button ue-btn-default" @click="changeCompany">运输企业</span>
			<span class="ue-button ue-btn-default" @click="changeCompany">仓储企业</span>
			<span class="ue-button ue-btn-default" @click="changeCompany">使用企业</span>
		</template>

		<template v-if="type === 'safe'">
			<span class="ue-button ue-btn-default ue-btn-blue" @click="changeCompany">一级风险</span>
			<span class="ue-button ue-btn-default ue-btn-blue" @click="changeCompany">二级风险</span>
			<span class="ue-button ue-btn-default ue-btn-blue" @click="changeCompany">三级风险</span>
			<span class="ue-button ue-btn-default ue-btn-blue" @click="changeCompany">四级风险</span>
		</template>

		<template v-if="type === 'cart'">
			<span class="ue-button ue-btn-default ue-btn-red" @click="changeCompany">腐蚀</span>
			<span class="ue-button ue-btn-default ue-btn-red" @click="changeCompany">易燃</span>
			<span class="ue-button ue-btn-default ue-btn-red" @click="changeCompany">易爆</span>
		</template>
	</div>
</template>
<script>
export default {
	name: 'ue-index-operate',
	methods:{
		changeCompany(){
			this.$BUS.$emit('CHANGE_MAP_POINT')
		}
	},
	data(){
		return{
			type: ''
		}
	},
	mounted() {
		this.$BUS.$on('SHOW_COMPANY', (val)=>{
			this.type = val
			this.$nextTick(()=>{
				this.$BUS.$emit('CHANGE_MAP_POINT')
			})
		})
	}
}
</script>