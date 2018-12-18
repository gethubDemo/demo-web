<template>
  <div class="container">
    <div class="registerForm">
      <h3>登录leader招聘</h3>
      <el-form :model="loginInfo" status-icon :rules="rules2" ref="loginInfo" label-width="100px" class="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginInfo.username" auto-complete="off" class="loginInput"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginInfo.password" auto-complete="off" class="loginInput"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: -2rem;" class="loginBtn" @click="submitForm('loginInfo')">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="footer-tip">
        <i class="el-icon-back" @click="backIndex">返回</i>
        <span class="toRegister">没有账号？<span @click="toRegister">直接注册</span></span>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable indent */

  // import fetch from '../api/fetch'
    import {loginPage} from './login-page.js'
  export default {
    mixins:[loginPage]
  }
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
    width: 100%;
    border: 1px solid #ededed;
    background: url("../../assets/bgimg.jpg") no-repeat;
    background-size: 100% 100%;
    min-height: 1000px;
  }

  .registerForm {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid #ededed;
    width: 450px;
    height: 320px;
    margin: 250px auto 250px auto;
    box-shadow: 0px 5px 8px #888;
    border-radius: 8px;
  }

  .registerForm h3 {
    margin-top: 25px;
    color: #5a5a5a;
  }

  .loginForm {
    position: relative;
    top: 14px;
    left: -14px;
    padding: 14px;
  }

  .toRegister {
    color: #5a5a5a;
    font-size: 14px;
  }

  .toRegister span {
    color: #5a5a5a;
    cursor: pointer;
  }

  .loginInput {
    width: 100%;
  }

  .el-icon-back {
    font-size: 14px;
    color: #5a5a5a;
    cursor: pointer;
  }

  .footer-tip {
    margin: auto 30px auto 40px;
    display: flex;
    justify-content: space-between;
  }
</style>