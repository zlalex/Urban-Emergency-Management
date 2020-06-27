<!-- 临时对话框 -->
<template>
  <dispose-section class="component-chat" title="现场对话">
    <div class="container">
      <div class="main" ref="main">
        <!-- 系统管理员消息 -->
        <div class="lineBox">
          <img src="images/img-operation.jpg" alt class="imgWhite" />
          <img src="images/img-plice.jpg" alt class="imgBlue" />
          <p
            class="textM textWhite"
          >2020年3月2日10时21分许接110报警，合庆地区周祝公路琥珀路口，发生罐式货车侧翻，现场发现天然气泄漏，未发现人员伤亡。根据《上海市处置危险化学品事故应急预案》，认定本次事故为一般事故，立即启动Ⅳ级响应。</p>
        </div>

        <div class="lineBox">
          <img src="images/img-operation.jpg" alt class="imgWhite" />
          <img src="images/img-plice.jpg" alt class="imgBlue" />
          <p class="textM textWhite">现将本次事故处置相关各协同单位任务通知如下：</p>
        </div>

        <div class="lineBox">
          <img src="images/img-operation.jpg" alt class="imgWhite" />
          <img src="images/img-plice.jpg" alt class="imgBlue" />
          <p class="textM textWhite">
            致：上海市公安局
            <br />1、配合、协调事发地所在区政府、有关职能部门和专业处置力量做好危险化学品事故和不明危险化学品事件的现场救援工作；
            <br />2、对危险化学品事故现场区域及周边道路进行交通管制, 禁止无关车辆进入危险区域,保障救援道路畅通；
            <br />3、疏散危险区域及可能受危害区域内的人员和重要物资；
            <br />4、对事故现场和人员疏散区域实施警戒和治安管理；
            <br />5、对本次危险化学品道路运输事故进行调查处理。
            <br />关联知识档案：
            <br />1、周边区域
            <br />
            <img src="images/position.png" class="position" width="300px" alt />
            <br />
            <img src="images/table.png" width="300px" alt />
            <br />2、周边路况信息
            <br />
            <img src="images/map.png" width="300px" alt />
          </p>
        </div>

        <!-- 现场消息 -->
        <div class="lineBox" v-for="(message, i) in messageChat" :key="i">
          <img
            :src="!message.from ? 'images/img-plice.jpg' : 'images/img-operation.jpg'"
            alt
            :class="[!message.from ? 'imgBlue' : 'imgWhite']"
          />
          <p class="textM" :class="[!message.from ? 'textBlue' : 'textWhite']">{{message.txt}}</p>
        </div>
      </div>

      <!-- 输入框 -->
      <div class="inputBox">
        <img
          :src="!onOff?'images/img-plice.jpg':'images/img-operation.jpg'"
          @click="onOff=!onOff"
          alt
          class="img1"
        />
        <div class="textBox">
          <input v-model="textValue" @keyup.enter="sendMessage" type="text" id="text" />
        </div>
        <input type="button" @click="sendMessage" value="发送" id="btn" />
      </div>
    </div>
  </dispose-section>
</template>

<script>
import DisposeSection from "@/components/dispose/dispose-section";

export default {
  components: {
    DisposeSection
  },

  data() {
    return {
      messageChat: [],
      message: [
        "已接收任务，正在调度闵行区公安分局进行处置。",
        "调度闵行区公安分局合庆镇交警大队出警5人，现处置人员已到达事故地点，带队组长：李大伟，13765498076。",
        "调度闵行区合庆镇消防大队全部消防员15人，现已到达事故地点，队长：王大陆，18646793487。",
        "合庆镇10人已到达事故地点，组长：钱国庆，13876498796",
        "事故处6人和1名处置专家已到达事故地点，组长：李大庄，13765498076。专家：赵卫国，13542879650",
        "报告指挥中心，现场事故处置已完成。"
      ],
      messageIndex: 0,
      onOff: false,
      textValue: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const position = document.querySelector(".position");
      const currentOffsetTop = position.offsetTop;
      const parentOffsetTop = position.parentElement.parentElement.offsetTop;
      document.querySelector(".main").scrollTop =
        parentOffsetTop + currentOffsetTop;
    },
    sendMessage() {
      if (!this.textValue) {
        this.defaultMessage();
        return;
      }
      this.messageChat.push({
        txt: this.textValue,
        from: this.onOff
      });
      this.textValue = "";
      this.$nextTick(() => {
        this.$refs.main.scrollTop = this.$refs.main.scrollHeight;
      });
    },
    defaultMessage() {
      if (this.messageIndex > 5) {
        return;
      }
      let index = this.messageIndex;
      this.textValue = this.message[index];
      this.messageIndex = ++index;
      this.$EventBus.$emit("HANDLE_EVENT", {
        index,
        message: this.textValue
      });
      this.sendMessage();
    }
  }
};
</script>

<style lang="scss">
.component-chat {
  @keyframes text {
    0% {
      top: 50px;
      opacity: 0;
    }

    100% {
      top: 0;
      opacity: 1;
    }
  }

  .container {
    position: relative;
    height: 300px;
    margin: 10px auto;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  .main {
    overflow: auto;
    border-bottom: 40px solid #fff;
    padding: 10px;
    width: 100%;
    height: 100%;
  }

  .lineBox {
    overflow: hidden;
    min-height: 40px;
    clear: both;
    position: relative;
  }

  .imgWhite {
    position: absolute;

    left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .imgBlue {
    position: absolute;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .textWhite {
    float: left;
    min-height: 40px;
    margin-left: 60px;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 10px 10px;
    display: inline-block;
    position: relative;
    border-radius: 6px;
    color: #333;
    background-color: #ffffff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  }

  .textWhite:before {
    display: block;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -6px;
    top: 14px;
    border-top: solid 6px transparent;
    border-right: 6px solid #fff;
    border-bottom: solid 6px transparent;
  }

  .textBlue {
    min-height: 40px;
    position: relative;
    float: right;
    margin-left: 10px;
    margin-right: 60px;
    margin-bottom: 15px;
    padding: 10px 10px;
    display: inline-block;
    border-radius: 6px;
    background-color: #2970ff;
    box-shadow: 0 5px 15px 0 rgba(41, 75, 255, 0.3);
    color: #fff;
  }

  .textBlue:before {
    display: block;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: -6px;
    top: 14px;
    border-top: solid 6px transparent;
    border-left: 6px solid #2970ff;
    border-bottom: solid 6px transparent;
  }

  .inputBox {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: #ffffff;
  }

  .img1 {
    float: left;
    margin: 5px;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
  }

  .textBox {
    display: inline-block;
    line-height: 40px;
    right: 60px;
    left: 40px;
    position: absolute;
  }

  #text {
    display: inline-block;
    font-size: 14px;
    padding: 0 0 0 10px;
    width: 100%;
    height: 30px;
    border-radius: 6px;
    border: 1px solid #e1e1e1;
  }

  #btn {
    cursor: pointer;
    font-size: 14px;
    margin: 5px;
    display: inline-block;
    vertical-align: middle;
    float: right;
    height: 30px;
    box-sizing: border-box;
    width: 50px;
    border-radius: 6px;
    border: 1px solid #e1e1e1;
    background-color: #fff;
    outline: none;
  }

  #btn:hover {
    color: #fff;
    background-color: #2970ff;
  }

  #btn:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) inset;
    background-color: #3668ff;
  }
}
</style>