<template>
  <div id="app">
    <el-tabs type="border-card" style="float: left">
      <el-tab-pane label="我的购物车">
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="name" label="商品名称" width="500px">
            <el-image
              :src="src"
              style="width: 100px; vertical-align: middle"
            ></el-image>
            <span>寻真水果 山东莱阳丰水梨黄金梨子 2.5kg新鲜水果</span>
          </el-table-column>
          <el-table-column prop="num" label="数量"></el-table-column>
          <el-table-column prop="price" label="合计价格"> </el-table-column>
          <el-table-column prop="user" label="">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData2)"
                type="text"
                size="small"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-button style="float: right" type="danger">清空购物车</el-button>
      <el-button style="float: right" type="success">更新购物车</el-button>
    </el-tabs>

    <div id="right">
      <span>商品总价:￥52.0</span>
      <span style="color: rgb(150, 150, 150); float: right">￥654.0</span>
      <br>
      <span>物流费用：</span>
      <span style="color: rgb(150, 150, 150); float: right">包邮</span>
      <el-divider></el-divider>
      <div>
        <span>合计金额</span>
        <span style="color: rgb(48, 47, 47); float: right">￥654.0</span>
      </div>
      <el-divider></el-divider>
      <div>
        <el-button type="warning" style="float: right">立即支付</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: require("../../img/img_4.jpg"),
      tableData2: [
        {
          name: 1,
          num: "1",
          price: "￥180.0",
        },
        {
          name: 1,
          num: "1",
          price: "￥180.0",
        },
        {
          name: 1,
          num: "1",
          price: "￥180.0",
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
};
</script>
<style>
#right {
  /* background-color: rgb(48, 47, 47); */
  height: 485px;
}
</style>