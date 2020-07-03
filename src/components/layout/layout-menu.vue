<template>
  <div class="layout-menu">
    <P class="layout-menu-logo util-align-center">LOGO</P>
    <el-menu
      :default-active="currentPath"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#006698"
      text-color="#fff"
      active-text-color="#029bbb"
    >
      <el-menu-item
        v-for="(menu, i) in menuItems"
        :key="i"
        :index="menu.path"
        @click="$GoRoute(menu.path)"
      >
        <i class="layout-menu-icon" :class="[menu.icon]"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    menuItems: [
      {
        icon: "el-icon-warning-outline",
        name: "危化品档案",
        path: "/library/chemical"
      },
      {
        icon: "el-icon-office-building",
        name: "企业档案",
        path: "/library/company"
      },
      {
        icon: "el-icon-odometer",
        name: "生产企业档案",
        path: "/library/factory"
      },
      {
        icon: "el-icon-truck",
        name: "车辆档案",
        path: "/library/vehicle"
      }
    ]
  }),
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.layout-menu {
  .layout-menu-icon {
    margin-right: 5px;
    font-size: 16px;
    color: #fff;
  }
  .layout-menu-logo {
    line-height: 56px;
  }
}
</style>