<template>
    <div class="ue-default-layout">
		<index-topbar />
        <router-view />
		<ue-map/>
	</div>
</template>
<script>
export default {
    name: 'ue-default-layout'
};
</script>