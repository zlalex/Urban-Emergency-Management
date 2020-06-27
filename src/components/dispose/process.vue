<template>
  <section class="component-process">
    <p class="component-process__handle">
      <span>上海市处置危险化学品事故应急预案</span>
      <span class="component-process__handle-button">启动3级响应</span>
    </p>
    <div class="component-process__videos">
      <div class="component-process__videos-item" v-for="(step, i) in stepData" :key="i">
        <video :src="`videos/step${step.url}.mp4`" controls></video>
      </div>
    </div>
    <el-steps :space="150" :active="stepData.length" finish-status="success">
      <el-step v-for="(step, i) in stepData " :key="i">
        <template #title>
          <p class="ue-pointer" @click="showEventHandle(i)">{{step.message}}</p>
        </template>
      </el-step>
    </el-steps>
  </section>
</template>

<script>
export default {
  data: () => ({
    stepData: [
      {
        url: "1",
        message: "事件接报"
      },
      {
        url: "2",
        message: "先期处置"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/styles/_variable";
.component-process {
  padding: 10px;
  width: calc(100% - 880px);
  background-color: $bgColor1;
  border: solid 1px $cyan1;

  .component-process__handle {
    display: flex;
    justify-content: space-between;
    color: $cyan3;
    span {
      font-size: 12px;
      line-height: 20px;
    }
  }
  .component-process__handle-button {
    padding: 0 5px;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    color: #fff;
  }
  .component-process__videos {
    display: flex;
    justify-content: start;
    padding: 10px 0;
  }
  .component-process__videos-item {
    flex-basis: 150px;
    margin-right: 10px;
    video{
      display: block;
      width: 100%;
      height: 100%;
    }
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>