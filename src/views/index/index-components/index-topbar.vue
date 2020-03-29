<template>
    <div class="ue-index-topbar ue-clearfix">
        <div class="ue-topbar-left ue-fl">
            <p>上海 14℃</p>
        </div>

        <div class="ue-topbar-right ue-fr">
            <div class="ue-fl avatar">杨</div>
            <div class="ue-fl">更多应用</div>
        </div>

        <p class="ue-align-center ue-index-title">城市危化品全生命周期智能监控处置系统</p>
    </div>
</template>
<script>
export default {
    name: 'ue-index-topbar'
};
</script>
<style lang="stylus">
.ue-index-topbar {
    height: 60px;
    background: rgba(0, 102, 153, 0.4);
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
	border-bottom: 1px solid #006699;
    .ue-topbar-left, .ue-topbar-right {
        padding: 0 15px;
		font-size: 18px;
    }
	.avatar{
		margin: 15px;
		width: 30px;
		height 30px;
		font-size: 14px;
		line-height 26px;
		border-radius: 15px;
		text-align: center;
		border: 2px solid #006699;
	}
}
</style>