<template>
  <div class="component-layout-topbar util-absolute">
    <div class="component-layout-topbar__left util-absolute">
      <p>{{weather}}</p>
    </div>
    <h1 class="component-layout-topbar__center util-align-center">城市危化品全生命周期 - 智能监控{{title}}系统</h1>
    <div class="component-layout-topbar__right util-absolute">
      <el-dropdown>
        <el-avatar
          class="component-layout-topbar__avatar"
          size="medium"
          src="images/img-avatar.png"
        ></el-avatar>
        <el-dropdown-menu class="component-layout-topbar__dropdown" slot="dropdown">
          <el-dropdown-item
            class="component-layout-topbar__member-item"
            v-for="(member,i) in members"
            :key="i"
          >
            <p class="component-layout-topbar__member-text">
              <span>{{member.name}}</span>
              <span>{{member.value}}</span>
            </p>
          </el-dropdown-item>
          <el-dropdown-item class="component-layout-topbar__member-item">
            <p class="component-layout-topbar__logout" @click="handleLogout">退出</p>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <p class="component-layout-topbar__more">更多应用</p>
        <el-dropdown-menu class="component-layout-topbar__dropdown" slot="dropdown">
          <el-dropdown-item
            class="component-layout-topbar__member-item"
            v-for="(system,i) in systems"
            :key="i"
          >
            <p @click="$GoRoute(system.path)">{{system.name}}</p>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import removeToken from "@/utils/removeToken";

export default {
  data: () => ({
    weather: "上海: 多云 14℃ 风向：西北 风力：2级 风速：2.5M/S",
    members: [
      {
        name: "用户名",
        value: "管理员"
      },
      {
        name: "所属部门",
        value: "应急管理局科技规划处"
      },
      {
        name: "权限",
        value: "高级用户"
      }
    ],
    systems: [
      {
        name: "风险监测预警系统",
        path: "/"
      },
      {
        name: "企业信息管理系统",
        path: "/"
      },
      {
        name: "危化品信息管理系统",
        path: "/"
      },
      {
        name: "危化品事故处置系统",
        path: "/dispose"
      }
    ]
  }),
  computed: {
    isDispose() {
      if (this.$route.path === "/dispose") {
        return true;
      }
      return false;
    },
    title() {
      return this.isDispose ? "处置" : "预警";
    }
  },
  methods: {
    handleLogout() {
      removeToken();
      setTimeout(() => {
        location.reload();
      }, 0);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-layout-topbar {
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  z-index: 1;
  background-color: $bgColor1;
  border-bottom: 1px solid $cyan1;
  .component-layout-topbar__left,
  .component-layout-topbar__right {
    top: 0;
  }
  .component-layout-topbar__left {
    left: 0;
    padding: 0 20px;
  }
  .component-layout-topbar__right {
    right: 0;
    display: flex;
    padding: 10px 0;
  }
  .el-dropdown {
    color: #fff;
    margin-right: 20px;
    height: 40px;
  }
  .component-layout-topbar__more {
    line-height: 40px;
  }
}

.component-layout-topbar__dropdown.el-dropdown-menu {
  background-color: $bgColor1;
  border: 1px solid $blue2;
  overflow: hidden;
  .component-layout-topbar__member-item {
    color: #fff;
    line-height: 40px;
    &:hover {
      color: #fff;
      background-color: $bgColor2;
    }
  }
  .component-layout-topbar__member-text {
    span:first-child {
      float: left;
      width: 66px;
      padding-right: 10px;
      color: $cyan2;
      text-align: justify;
      text-align-last: justify;
    }
  }
  .component-layout-topbar__logout {
    text-indent: 66px;
  }
  .popper__arrow {
    display: none;
  }
}
</style>