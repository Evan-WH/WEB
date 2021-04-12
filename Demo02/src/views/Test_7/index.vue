<template>
  <div>
    <div class="title">
      <el-form
        :inline="true"
        label-width="65px"
        ref="message"
        :model="queryParams"
      >
        <!-- 时间 -->
        <el-form-item label="时间：" prop="time">
          <!-- <el-date-picker type="date" placeholder="选择查询时间" format="yyyy年MM月dd日"v-model="queryParams.timevalue"></el-date-picker> -->
          <el-date-picker
            style="width: 100%"
            v-model="startTime"
            type="date"
            @change="set_time"
            placeholder="选择开始时间"
            format="yyyy年MM月dd日"
          />
        </el-form-item>
        <!-- 周次 -->
        <el-form-item label="周次：" prop="weeks">
          <el-select
            v-model="queryParams.weeksvalue"
            clearable
            placeholder="周次"
            style="width: 80px"
          >
            <el-option
              v-for="item in weeks"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 部门 -->
        <el-form-item label="部门：" prop="section">
          <el-select
            v-model="queryParams.sectionvalue"
            clearable
            placeholder="请选择部门"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <!-- 姓名 -->
        <el-form-item label="姓名：" prop="name">
          <el-input
            style="width: 225px"
            placeholder="请输入姓名"
            v-model="queryParams.userName"
            @keyup.enter.native="handleQuery"
          ></el-input>
        </el-form-item>
        <!-- 查询 -->
        <el-button
          licon="el-icon-search"
          type="success"
          style="width: 100px"
          class="search"
          @click="handleQuery"
          >查询</el-button
        >
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table
      v-loading="loading"
      :data="personList"
      border
      height="370"
      :model="queryParams"
    >
      <el-table-column prop="uid" label="序号" width="80px" />
      <el-table-column prop="jid" label="工号" />
      <el-table-column prop="section" label="部门" width="140px" />
      <el-table-column prop="uname" label="姓名" />
      <!-- 值班情况 -->
      <template v-for="(col, index) in base_title">
        <el-table-column :prop="col.prop" :label="col.label" width="100%">
            <template slot-scope="scope">
                  <span>1</span>
            </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <el-button type="success" style="width: 15%" @click="keep()"
        >保存</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      startTime: "",
      base_title: "",
      loading: false,
      personList: [],
      total: 0,
      // 数据
      queryParams: {
        // 查询
        timevalue: "",
        weeksvalue: "",
        optionsvalue: "",
        name: "",
        // 表格
        uid: undefined,
        jid: undefined,
        section: undefined,
        uname: undefined,
        
      },
      personList:[{
            uid:1,
            jid:1023456,
            section:"大数据物联网学院",
            uname:"小伍",
        }]
    };
  },
  //------------------------------------------------1---------------------------------------------
//   created() {
//     this.getList();
//   },
  mounted() {
    let that = this;
    that.getdatatime();
    that.set_time2();
  },
  methods: {
    set_time() {
      let that = this;
      console.info(that.startTime);
      that.change_days();
    },
     set_time2() {
      let that = this;
      console.info(that.startTime);
      that.change_days2();
    },
    // 保存按钮
    keep() {
      this.$message({
        message: "保存失败",
        type: "warning",
      });
    },
    getdatatime() {
      this.startTime = new Date();
    },
    // 查询按钮
    handleQuery() {
      this.getList();
      this.$message({
        message: "查询成功",
        type: "success",
      });
    },
    // 周次
    weeks() {},
    // 部门
    options() {},
    // 查询值班人员列表
    // getList() {
    //   this.loading = true;
    //   listPerson(this.queryParams).then((response) => {
    //     this.personList = response.rows;
    //     this.total = response.total;
    //     this.loading = false;
    //     console.log(response);
    //   });
    // },
    /**
     * @change_days
     * @params no
     */
    change_days() {
      let that = this;
      that.base_title = [];
      that.base_title_future = [];
      let Max_length = 7;
      for (let i = 0; i < Max_length; i++) {
        let param = {
          label: that.getDay(i),
          prop: that.getDay(i),
        };
        that.base_title.push(param);
      }
      console.info(that.base_title);
    },
    change_days2() {
      let that = this;
      that.base_title = [];
      that.base_title_future = [];
      let Max_length = 7;
      for (let i = 0; i < Max_length; i++) {
        let param = {
          label: that.getDay2(i),
          prop: that.getDay2(i),
        };
        that.base_title.push(param);
      }
      console.info(that.base_title);
    },
    /**
     * @getDay 获取日期
     * @params day 天数
     */
    getDay2(day) {
      let that = this;
      let curr_data = new Date();
      let target_day_milliseconds = "";
      that.startTime
        ? (target_day_milliseconds =
            that.startTime.getTime() + 1000 * 60 * 60 * 24 * day)
        : (target_day_milliseconds =
            curr_data.getTime() + 1000 * 60 * 60 * 24 * day); //判断时间是不是存在的
      curr_data.setTime(target_day_milliseconds);
      var weekday = new Array();
      weekday[-1] = "星期日";
      weekday[0] = "星期一";
      weekday[1] = "星期二";
      weekday[2] = "星期三";
      weekday[3] = "星期四";
      weekday[4] = "星期五";
      weekday[5] = "星期六";
      let tWeek = weekday[curr_data.getUTCDay()-1];
      let tYear = curr_data.getFullYear();
      let tMonth = curr_data.getMonth();
      let tDate = curr_data.getDate();
      tMonth = that.doHandleMonth(tMonth + 1);
      tDate = that.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate + tWeek;
    },
    getDay(day) {
      let that = this;
      let curr_data = new Date();
      let target_day_milliseconds = "";
      that.startTime
        ? (target_day_milliseconds =
            that.startTime.getTime() + 1000 * 60 * 60 * 24 * day)
        : (target_day_milliseconds =
            curr_data.getTime() + 1000 * 60 * 60 * 24 * day); //判断时间是不是存在的
      curr_data.setTime(target_day_milliseconds);
      var weekday = new Array();
      weekday[0] = "星期一";
      weekday[1] = "星期二";
      weekday[2] = "星期三";
      weekday[3] = "星期四";
      weekday[4] = "星期五";
      weekday[5] = "星期六";
      weekday[6] = "星期日";
      let tWeek = weekday[curr_data.getUTCDay()];
      let tYear = curr_data.getFullYear();
      let tMonth = curr_data.getMonth();
      let tDate = curr_data.getDate();
      tMonth = that.doHandleMonth(tMonth + 1);
      tDate = that.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate + tWeek;
    },
    doHandleMonth(month) {
      let m = month;
      if (month.toString().length === 1) {
        m = "0" + month;
      }
      return m;
    },
  },
};
</script>

<style>
.title {
  margin: 20px 30px 5px;
}
.search {
  float: right;
}
.footer {
  text-align: center;
}
.el-table .el-table__header-wrapper th,
.el-table .el-table__fixed-header-wrapper th {
  word-break: break-word;
  background-color: #dfe8ef5b;
  color: #515a6e;
  font-size: 10px;
  text-align: center;
}
.el-table tr > td {
  text-align: center;
  background-color: #ffffff;
}
</style>
