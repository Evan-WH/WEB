<template>
  <div class="login">
    <el-form ref="loginForm" class="login-form"  :style="backgroundDiv" >
        <el-form-item prop="">
       <span style="float:right; width:40%;">用户注册</span>
      </el-form-item>
        <!-- 手机号码 -->
      <el-form-item prop="customerTel">
        <el-input  type="text"  placeholder="手机号码" v-model="num1"></el-input>
      </el-form-item>
        <!-- 验证码 -->
      <el-form-item prop="">
        <el-input type="text" placeholder="请输入手机验证码" v-model="num2"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="">
        <el-input type="password" placeholder="密码" v-model="pwd1"></el-input>
      </el-form-item>
      <!-- 确认密码 -->
       <el-form-item prop="">
        <el-input type="password" placeholder="确认密码" v-model="pwd2"></el-input>
      </el-form-item>
        <!--发送手机验证码  -->
      <el-form-item >
        <el-button  size="medium" type="primary" style="width:130px; margin-left:380px" >
          <span @click="add()" >发送手机验证码</span>
        </el-button>
         <el-button  size="medium" type="danger" style="width:70px; float: right" >
          <span @click="zc()">注册</span>
        </el-button>
      </el-form-item>
      <el-form-item style="width:76%; ">
        <el-button  size="mini" type="danger" style="width:100px; float: right" >
          <span>立即登陆</span>
        </el-button>
      </el-form-item>
      <!--  底部  -->
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
          num1:"",
          num2:"",
          pwd1:"",
          pwd2:"",
        //   背景
          backgroundDiv: {
          backgroundImage: "url(" + require("../img/img_1.jpg") + ")",
          backgroundRepeat: "repeat-y",
          backgroundSize: "55%  100%",
        },
    }
},
  methods:{
        // 手机号规则--正则
      add(){
 		if(!/^1[34578]\d{9}$/.test(this.num1)){
 			this.$message.error('请输入11位手机号码！');
		}else{
			this.$message.success('验证码发送成功！');
            }
        },
        // 6-12位密码正则
      zc(){
		if(!/^[A-Za-z0-9]{6,12}$/.test(this.pwd1)){
            this.$message.error('密码必须由 6-12位字母、数字组成!');
            return;
        }
         if(this.pwd1!==this.pwd2){
            this.$message.error('两次密码不相同');
        }
        else{
			this.$message.success('注册成功');
            }
        }
    }
};
</script>

<style>
   .el-input{
    width: 250px;
    float: right;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #ffffff;
    background-size: cover;
  }
  
  .login-form {
    margin: 5% ;
    height: 390px;
    width: 50%;
    border: rgba(175, 175, 175, 0.74) solid 1px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgb(175, 175, 175);
    padding: 10px 30px 20px 20px;

  }
</style>