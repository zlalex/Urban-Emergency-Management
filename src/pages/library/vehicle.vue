<template>
  <div class="page-library-vechicle">
    <library-section>
      <div class="page-library-vechicle__flex">
        <div>
          <p>品牌：中国重汽●斯太尔M5G</p>
          <p>类型：罐式货车</p>
          <p>车身颜色：红色</p>
          <p>车轴数：4</p>
          <p>总重量：5.17吨</p>
          <p>罐体容积：28.9m³</p>
          <p>核定载质量：19.5吨</p>
          <p>车辆外廓(长×宽×高)：11990×2500×3450,3730</p>
          <p>发动机号码：D10.34-40</p>
          <p>车辆识别代码：LZZ5ELND68W339696ZZ3257N3647B</p>
          <p>货物类型：</p>
          <p class="page-library-vechicle__images">
            <span>
              <img src="images/img-u409.png" alt />
            </span>
            <span>
              <img src="images/img-u410.jpg" alt />
            </span>
            <span>
              <img src="images/img-u411.jpg" alt />
            </span>
          </p>
        </div>
        <div class="page-library-vechicle__image">
          <img src="images/img-u168.jpg" alt />
        </div>
      </div>
    </library-section>

    <library-section>
      <b>车辆轨迹</b>
      <el-table :data="tableData" border>
        <el-table-column prop="cartNo" label="车牌号" width="90"></el-table-column>
        <el-table-column prop="content" label="运输品" width="100"></el-table-column>
        <el-table-column prop="driver" label="驾驶员" width="70"></el-table-column>
        <el-table-column prop="accompany" label="押运员" width="70"></el-table-column>
        <el-table-column prop="company" label="收货地址"></el-table-column>
        <el-table-column prop="source" label="发货地址"></el-table-column>
      </el-table>
    </library-section>

    <library-section class="page-library-vechicle__map">
      <baidu-map />
    </library-section>
  </div>
</template>

<script>
import LibrarySection from "@/components/library/library-section";
import BaiduMap from "@/components/map/baidu-map";
export default {
  components: {
    LibrarySection,
    BaiduMap
  },
  data: () => ({
    tableData: [
      {
        source: "上海市闵行区外环以外",
        cartNo: "沪BG4517",
        content: "液氨26.3",
        driver: "王明玉",
        accompany: "李保国",
        company: "上海中海物流公司"
      },
      {
        source: "上海市闵行区外环以外",
        cartNo: "沪BD2625",
        content: "天然气34.5",
        driver: "吴文博",
        accompany: "张国庆",
        company: "上海尹鑫物流有限公司"
      },
      {
        source: "上海市闵行区外环以外",
        cartNo: "沪BG4517",
        content: "原油",
        driver: "王晓峰",
        accompany: "孙大伟",
        company: "上海聚焦运输有限公司"
      },
      {
        source: "上海市闵行区外环以外",
        cartNo: "沪BG4817",
        content: "汽油",
        driver: "王峰",
        accompany: "孙伟",
        company: "南京聚焦运输有限公司"
      },
      {
        source: "上海市闵行区外环以外",
        cartNo: "沪BG4517",
        content: "汽油",
        driver: "赵宝发",
        accompany: "周尚文",
        company: "上海众宁运输有限公司"
      }
    ]
  })
};
</script>

<style lang="scss">
.page-library-vechicle {
  .page-library-vechicle__flex {
    display: flex;
    justify-content: space-between;
    > div {
      flex: 1;
    }
    .page-library-vechicle__image {
      flex: inherit;
      width: 30%;
      img {
        width: 100%;
      }
    }
  }
  .page-library-vechicle__images {
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
  .page-library-vechicle__map {
    height: 500px;
  }
}
</style>