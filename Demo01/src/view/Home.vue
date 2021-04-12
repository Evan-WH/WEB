<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="50px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>商品管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/ProductList">商品列表</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/ProductInfo">商品信息</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

       <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
          <el-dropdown-item><router-link to="/Loginout">退出</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>伍皓</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
      <!-- <el-table :data="users">
        <el-table-column prop="uid" label="用户ID" width="140">
        </el-table-column>
        <el-table-column prop="uname" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="age" label="年龄">
        </el-table-column>
      </el-table> -->
    </el-main>
  </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            users:[]
        }
    },
    // method:{
    //   Loginout:function(){
    //     this.$router.push("/Loginout")
    //   }
    // },
    created(){
      
        //axios内部的then内的this是当前a'xio's对象。而不是当前vue对象，因此把当前vue对象用vm指明，这样不会与this冲突
       var vm=this
       this.axios({
            method:'get',
            url:'https://mock.mengxuegu.com/mock/60268b8bd95f5e0d603048fb/vuedemo/users'
        })
        .then(function(resp){
           vm.users= resp.data.users
        })
    }
};
</script>

<style>
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>