<template>
  <div class="container">
    <div class="userForm">
      <h3>注册leader直聘</h3>
      <el-form :model="hrInfo" status-icon :rules="hrrules" ref="hrInfo" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="hrInfo.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="hrInfo.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="hrInfo.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="hrInfo.phone"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model.number="hrInfo.code" style="width: 200px;padding-right: 10px;"></el-input>
          <el-button  @click="sendCode">
            {{this.msg}}
          </el-button>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="hrInfo.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: -2.2rem" @click="finderSubmit('hrInfo')">注册</el-button>
        </el-form-item>
      </el-form>
      <div class="footer-tip2">
      <i class="el-icon-back" @click="backIndex">返回</i>
      <span class="toLogin">已有账号？<span @click="toLogin">直接登录</span></span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable indent */

// import fetch from "../api/fetch";
import {registerPage} from './register-page.js'
export default {
  mixins:[registerPage]
};
</script>

<style>
@import "../../assets/Animate/animate.min.css";

html * {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.container {
  border: 1px solid #ededed;
  width: 100%;
  background: url("../../assets/bgimg.jpg") no-repeat;
  background-size: 100% 100%;
  min-height: 1000px;
}

.userForm {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #ededed;
  width: 450px;
  height: 580px;
  margin: 150px auto 150px auto;
  box-shadow: 0px 5px 8px #888;
  border-radius: 8px;
}

.userForm h3 {
  color: #888;
  margin-top: 25px;
}

.demo-ruleForm {
  position: relative;
  top: 14px;
  left: -14px;
  padding: 14px;
}

.toLogin {
  color: #5a5a5a;
  font-size: 14px;
}

.toLogin span {
  color: #5a5a5a;
  cursor: pointer;
}

.el-icon-back {
  font-size: 14px;
  color: #5a5a5a;
  cursor: pointer;
}
.footer-tip2 {
  margin: auto 30px auto 40px;
  display: flex;
  justify-content: space-between;
}
</style>


