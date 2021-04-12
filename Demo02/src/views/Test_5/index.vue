<template>
  <div>
    <!-- 左侧 -->
    <header>{{ text }}</header>
    <aside id="left">
      <el-carousel height="330px">
        <el-carousel-item v-for="item in 4" :key="item" >
          <el-image :src="src" ></el-image>
        </el-carousel-item>
      </el-carousel>
    </aside>
    <!-- 中间 -->
    <section>
      <div>
        <span style="text-decoration: line-through;color:rgb(150, 150, 150);">市场价:￥52.0</span>
        <span> ￥39.0</span>
        <i class="el-icon-star-on" style="float:right;margin-right:20px"></i>
      </div>
      <el-divider></el-divider>
      <div style="height: 100px"><span>商品简介：</span></div>
      <el-divider></el-divider>
      <div style="margin-left: 80px">
        <span>购买数量：</span>
        <el-input-number v-model="num" :min="1" :max="10" label="描述文字" />
      </div>
      <div style="margin-left: 120px; margin-top: 30px">
        <el-button type="warning">加入购物车</el-button>
        <el-button type="danger">立即购买</el-button>
      </div>
    </section>
    <!-- 右侧 -->
    <aside id="right">
        <div>热销商品</div>
        <span>--------------------------------------------------</span>
        <div id="one">
            <el-image style="width:100px; height:80px; float:left" :src="src"></el-image>
            <span style="color:red">{{text}}</span>
            <div> ￥39.0</div>
            <div style="text-decoration: line-through;color:rgb(150, 150, 150);">市场价:￥52.0</div>
        </div>
        <div id="two">
            <el-image style="width:100px; height:80px; float:left" :src="src"></el-image>
            <span style="color:red">{{text}}</span>
            <div> ￥39.0</div>
            <div style="text-decoration: line-through;color:rgb(150, 150, 150);">市场价:￥52.0</div>
        </div>
        <div id="three">
            <el-image style="width:100px; height:80px; float:left" :src="src"></el-image>
            <span style="color:red">{{text}}</span>
            <div> ￥39.0</div>
            <div style="text-decoration: line-through;color:rgb(150, 150, 150);">市场价:￥52.0</div>
        </div>
    </aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num:1,
      src:require("../../img/img_4.jpg"),
      text: "展卉 四川凉山会理石榴精挑6个装 单果300-400g 自营水果",
    };
  },
};
</script>
<style>
header {
  font-size: 25px;
  text-align: left;
  height: 40px;
  width: 1260px;
  font-family: 宋体;
  background-color: rgba(199, 202, 202, 0.123);
}
#left {
  margin-top: 50px;
  float: left;
  display: block;
  width: 450px;
  border: 1px solid rgba(214, 212, 212, 0.671);
}
section {
  margin-top: 50px;
  float: left;
  width: 440px;
  height: 300px;
}
#right {
  margin-top: 50px;
  float: left;
  width: 355px;
  height: 300px;
  /* border: 1px solid; */
  /* background-color: rgba(199, 202, 202, 0.74); */
}
</style>
