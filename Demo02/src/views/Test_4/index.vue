<template>
  <div>
    <el-date-picker
      style="width: 15%"
      v-model="startTime"
      type="date"
      @change="set_time"
      placeholder="选择开始时间"
      format="yyyy年MM月dd日"
    />
    <el-table
      border
      size="mini"
      :cell-style="{ textAlign: 'center' }"
      :data="tableData"
      height="250"
      style="width: 100%"
    >
      <el-table-column prop="uid" label="序号" width="80" />
      <el-table-column prop="jid" label="工号" width="80" />
      <el-table-column prop="section" label="部门" width="80" />
      <el-table-column prop="uname" label="姓名" width="80" />
      <template v-for="(col, index) in base_title">
        <el-table-column :prop="col.prop" :label="col.label"> </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      startTime: "",
      base_title: "",
    };
  },
  mounted() {
    let that = this;
    that.change_days();
    that.getdatatime();
  },
  methods: {
    getdatatime() {
      this.startTime = new Date();
    },
    /**
     * @set_time
     * @params
     */
    set_time() {
      let that = this;
      console.info(that.startTime);
      that.change_days();
    },
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
    /**
     * @getDay 获取日期
     * @params day 天数
     */
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
      return tWeek + "  " + tYear + "-" + tMonth + "-" + tDate;
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
</style>