<template>
  <div class="page-library">
    <layout-menu class="page-library-menu" :is-collapse="isCollapse" :style="toggleCollapse.width" />
    <div class="page-library-content">
      <div class="page-library-content__top">
        <div class="page-library__menu-collapse">
          <i @click="isCollapse=!isCollapse" :class="toggleCollapse.class"></i>
        </div>
      </div>
      <div class="page-library-breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <span @click="$goRoute(breadcrumd.path)">{{breadcrumd.name}}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="page-library-content__inner">
        <div class="page-library-content__title">
          <h2>{{libraryTitle}}</h2>
          <basic-button @click.native.stop="showDialog">关联实体</basic-button>
        </div>
        <router-view />
      </div>
    </div>

    <el-dialog title="关联实体" :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
      <div class="dialog-content">
        <div class="dialog-content-left">
          <b class="dialog-content-left__title">实体类型</b>
          <ul class="dialog-content-list">
            <li class="active">{{breadcrumdName}}</li>
          </ul>
        </div>
        <div class="dialog-content-right">
          <el-table :data="tableData[breadcrumdName]" style="width: 100%">
            <el-table-column prop="id" label="序号" width="100"></el-table-column>
            <el-table-column prop="name" :label="breadcrumdName" width="auto"></el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import LayoutMenu from "@/components/layout/layout-menu";

export default {
  components: {
    LayoutMenu
  },
  data: () => ({
    isCollapse: false,
    dialogVisible: false,
    tableData: {
      生产企业: [
        {
          id: "1",
          name: "上海荣建化工厂"
        },
        {
          id: "2",
          name: "上海东大化工有限公司"
        },
        {
          id: "3",
          name: "上海华谊涂料有限公司"
        }
      ],
      危化品: [
        {
          id: "1",
          name: "氨"
        },
        {
          id: "2",
          name: "苯酚"
        },
        {
          id: "3",
          name: "氯苯"
        }
      ],
      企业名称: [
        {
          id: "1",
          name: "上海荣建化工厂"
        },
        {
          id: "3",
          name: "上海华谊涂料有限公司"
        }
      ],
      运输企业: [
        {
          id: "1",
          name: "上海荣建化工运输有限公司"
        },
        {
          id: "2",
          name: "上海东大化工运输有限公司"
        },
        {
          id: "3",
          name: "上海华谊涂料运输有限公司"
        }
      ]
    }
  }),
  computed: {
    toggleCollapse() {
      return {
        width: {
          width: !this.isCollapse ? "180px" : "63px"
        },
        class: !this.isCollapse ? "el-icon-s-fold" : "el-icon-s-unfold"
      };
    },
    breadcrumd() {
      switch (this.$route.path) {
        case "/library/chemical":
          return {
            path: "/library/chemical",
            name: "危化品档案"
          };
        case "/library/company":
          return {
            path: "/library/company",
            name: "企业档案"
          };
        case "/library/factory":
          return {
            path: "/library/factory",
            name: "生产企业档案"
          };
        case "/library/vehicle":
          return {
            path: "/library/vehicle",
            name: "车辆档案"
          };
      }
      return {
        path: "/library/chemical",
        name: "危化品档案"
      };
    },
    breadcrumdName() {
      switch (this.breadcrumd.name) {
        case "危化品档案":
          return "危化品";
        case "生产企业档案":
          return "生产企业";
        case "企业档案":
          return "企业名称";
        case "车辆档案":
          return "运输企业";
      }
      return "";
    },
    libraryTitle() {
      switch (this.breadcrumd.name) {
        case "危化品档案":
          return "甲烷（沼气）";
        case "生产企业档案":
          return "上海荣建化工厂";
        case "企业档案":
          return "上海中海物流公司";
        case "车辆档案":
          return "沪BG4517 上海中海物流公司";
      }
      return "";
    }
  },
  methods: {
    showDialog() {
      console.log(1);
      this.dialogVisible = !this.dialogVisible;
    },
    handleClose() {
      this.showDialog();
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.page-library {
  display: flex;
  height: 100%;
  overflow: hidden;
  .page-library-menu {
    height: 100%;
    transition: all 0.5s;
  }
  .el-menu {
    height: 100%;
    border-right: 0 none;
  }
  .page-library-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #f5f5f5;
  }
  .page-library-content__top {
    display: flex;
    padding: 18px 0;
    font-size: 20px;
    line-height: 20px;
    background: $bgColor;
  }
  .page-library__menu-collapse {
    width: 40px;
    padding: 0 10px;
    color: #fff;
    text-align: center;
  }
  .page-library-breadcrumb .el-breadcrumb {
    padding: 10px;
    line-height: 20px;
    .el-breadcrumb__inner.is-link {
      color: $blue3;
    }
  }
  .page-library-content__inner {
    flex: auto;
    margin: 0 10px 10px;
    padding: 10px;
    background: #fff;
    overflow: auto;
  }
  .page-library-content__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #f5f5f5;
  }
  .package-basic-button {
    color: #fff;
    background-color: $bgColor;
    border-radius: 2px;
  }

  .dialog-content {
    display: flex;

    .dialog-content-left {
      width: 150px;
      margin-right: 30px;
      border-radius: 4px;
      border: 1px solid #ebeef5;

      li {
        line-height: 36px;
        text-indent: 10px;
        font-size: 12px;
      }

      .active {
        border-left: 4px solid #409efd;
        background: #409efd4f;
      }
    }

    .dialog-content-left__title {
      display: block;
      padding: 12px;
      line-height: 23px;
      border-bottom: 1px solid #ebeef5;
    }

    .dialog-content-right {
      flex: 1;
    }
  }
  .el-table td, .el-table th{
    padding: 5px 0;
  }
  .el-table .cell{
    font-size: 12px;
  }
}
</style>