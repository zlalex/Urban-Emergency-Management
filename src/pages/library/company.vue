<template>
  <div class="page-library-company">
    <library-section>
      <div class="page-library-company__flex">
        <div>
          <p>许可证号：沪浦310115020314</p>
          <p>企业法人：郑大国，13865490876</p>
          <p>企业地址：浦东金桥金明村金明路1216号</p>
          <p>经营范围：第二类(易燃气体)、第二类(非易燃无毒气体)、第三类(易燃液体)、第四类(易燃固体)、第五类(氧化性物质)、第五类(有机过氧化物)、第六类(毒性物质)、第八类(腐蚀性物质(强腐蚀性))、第八类(腐蚀性物质(弱腐蚀性))。</p>
        </div>
        <div class="page-library-company__image">
          <img src="images/img-u508.jpg" alt />
        </div>
      </div>
    </library-section>

    <library-section>
      <h2>运输车辆</h2>
    </library-section>

    <library-section>
      <el-table :data="tableData" border>
        <el-table-column prop="cartNo" label="车牌号" width="90"></el-table-column>
        <el-table-column prop="content" label="车辆类型" width="100"></el-table-column>
        <el-table-column prop="driver" label="车辆品牌" width="200"></el-table-column>
        <el-table-column prop="accompany" label="总质量" width="70"></el-table-column>
        <el-table-column prop="company" label="核定载质量"></el-table-column>
        <el-table-column prop="source" label="容积"></el-table-column>
      </el-table>
    </library-section>

    <library-section>
      <h2>运输人员</h2>
    </library-section>

    <library-section>
      <el-table :data="tableData2" border>
        <el-table-column prop="cartNo" label="姓名" width="90"></el-table-column>
        <el-table-column prop="content" label="性别" width="100"></el-table-column>
        <el-table-column prop="driver" label="年龄" width="70"></el-table-column>
        <el-table-column prop="accompany" label="岗位" width="70"></el-table-column>
        <el-table-column prop="company" label="从业资格证号码"></el-table-column>
        <el-table-column prop="source" label="从业资格证类型"></el-table-column>
      </el-table>
    </library-section>
  </div>
</template>

<script>
import LibrarySection from "@/components/library/library-section";
export default {
  components: {
    LibrarySection
  },
  data: () => ({
    tableData: new Array(5).fill({
      cartNo: "沪BG4517",
      content: "罐式货车",
      driver: "重汽斯太尔M5G",
      accompany: "5.17吨",
      company: "19.5吨",
      source: "28.9m³"
    }),
    tableData2: new Array(5).fill({
      cartNo: "李保国",
      content: "男",
      driver: "34",
      accompany: "驾驶员",
      company: "2010298734671253879",
      source: "危险货物运输驾驶员"
    })
  })
};
</script>

<style lang="scss">
.page-library-company {
  .page-library-company__flex {
    display: flex;
    justify-content: space-between;
    > div {
      flex: 1;
    }
    .page-library-company__image {
      flex: inherit;
      width: 30%;
      height: 150px;
      img {
        height: 100%;
        margin: 0 auto;
      }
    }
  }
  .page-library-company__images {
    height: 60px;
    justify-content: start;
    span {
      flex: inherit;
      width: 10%;
    }
    span,
    img {
      height: 100%;
    }

    img {
      margin: 0 auto;
    }
  }
}
</style>