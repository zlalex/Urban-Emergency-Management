<template>
    <div class="ue-index-topbar ue-clearfix">
		<slot name="topbar-left"/>
        <div class="ue-topbar-right ue-fr">
            <div class="ue-fl">
                <el-dropdown style="width: 60px;height: 60px;">
                    <el-avatar class="avatar" size="medium" src="/img/img-avatar.png"></el-avatar>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <div class="ue-dropdown-col">
                                <span>用户名</span>
                                <span>管理员</span>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div class="ue-dropdown-col">
                                <span>所属部门</span>
                                <span>应急管理局科技规划处</span>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div class="ue-dropdown-col">
                                <span>权限</span>
                                <span>高级用户</span>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
							<div class="ue-txt__center" @click="goRoute('/login')">退出</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <div class="ue-fl">
                <el-dropdown>
                    <span class="ue-dropdown-link">更多应用</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <span @click="goRoute('/')">风险监测预警系统</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <span>企业信息管理系统</span>
						</el-dropdown-item>
                        <el-dropdown-item>
                            <span>危化品信息管理系统</span>
						</el-dropdown-item>
                        <el-dropdown-item>
                            <span @click="goRoute('/event')">危化品事故处置系统</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
		<slot name="topbar-title"/>
    </div>
</template>
<script>
export default {
    name: 'index-topbar',
    methods: {
		goRoute(path){
			path !== this.$route.path && this.$router.push(path)
		}
	}
};
</script>
<style lang="stylus">
.ue-dropdown-col {
    overflow: hidden;

    span {
        float: left;

        &:first-child {
            width: 65px;
            padding-right: 5px;
            color: #66b1ff;
            text-align: justify;
            text-align-last: justify;
        }
    }
}
.ue-txt__center{
	text-align: center;
}
.ue-index-topbar {
    height: 60px;
    background: rgba(0, 102, 153, 0.6);
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
    border-bottom: 1px solid #006699;

    .ue-topbar-left, .ue-topbar-right {
        padding: 0 15px;
        font-size: 18px;
    }

    .avatar {
        margin: 15px;
        width: 30px;
        height: 30px;
    }

    .ue-dropdown-link {
        color: #fff;
    }
}
</style>