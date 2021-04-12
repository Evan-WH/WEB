<template>
  <div id="app">
    <el-tabs type="border-card">
      <el-tab-pane label="我的订单">我的订单</el-tab-pane>
      <el-tab-pane label="常用联系人">
        <span>常用联系人</span>
        <el-divider></el-divider>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="person" label="默认联系人">
            <input type="checkbox" v-model="checkbox" />
          </el-table-column>
          <el-table-column prop="name" label="联系人姓名"></el-table-column>
          <el-table-column prop="num" label="联系人电话"> </el-table-column>
          <el-table-column prop="address" label="联系人地址"> </el-table-column>
          <el-table-column prop="use" label="操作"> </el-table-column>
        </el-table>
        <!-- 表单 -->
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="姓名:" prop="name">
            <el-input
              type="text"
              v-model="ruleForm.name"
              autocomplete="off"
              style="width: 500px"
            />
          </el-form-item>
          <el-form-item label="电话:" prop="num">
            <el-input
              type="text"
              v-model="ruleForm.num"
              autocomplete="off"
              style="width: 500px"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址:" prop="address">
            <el-input
              type="text"
              v-model="ruleForm.address"
              autocomplete="off"
              style="width: 500px"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="我的收藏">
        <span>个人收藏</span>
        <el-divider></el-divider>
        <el-table :data="tableData2" >
          <el-table-column prop="name" label="商品名称" width="600px" >
            <el-image :src="src" style="width:100px;vertical-align:middle;"></el-image>
            <span>寻真水果 山东莱阳丰水梨黄金梨子 2.5kg新鲜水果</span>
          </el-table-column>
          <el-table-column prop="outprice" label="市场价格"></el-table-column>
          <el-table-column prop="inprice" label="店内价格"> </el-table-column>
          <el-table-column prop="use2" label="操作"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="个人设置">个人设置</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    var checkaddress = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("地址不为空"));
      } else {
        callback();
      }
    };
    var checkname = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var checknum = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入电话号码"));
      } else {
        callback();
      }
    };
    return {
      src:require("../../img/img_4.jpg"),
      checkbox: "",
      tableData: [
        {
          num: "15086728307",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          num: "15086728307",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
      ],
        tableData2: [
        {
          name: "1",
          outprice: "￥48.0",
          inprice: "￥25.0",
          use2:"删除收藏 查看商品",
        },
        {
          name: "2",
          outprice: "￥48.0",
          inprice: "￥25.0",
        },
      ],
      ruleForm: {
        name: "",
        num: "",
        address: "",
      },
      rules: {
        name: [{ validator: checkname, trigger: "blur" }],
        num: [{ validator: checknum, trigger: "blur" }],
        address: [{ validator: checkaddress, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.el-table .cell {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-right: 10px;
  text-align: left;
}
</style>