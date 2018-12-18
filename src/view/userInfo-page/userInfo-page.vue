<template>
  <div>
    <div class="wrapper">
      <el-card class="box-card">
        <div>
          <el-upload class="avatar-uploader" action="http://personfilter.clairezyw.com/user/avatar" name="avatar"
            :headers="head" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" class="avatar">
            <img v-else class="img" :src="setDefault">
          </el-upload>
          <span class="username">{{list ? list.nickname : ''}}</span>
        </div>
      </el-card>
      <el-tabs type="border-card" tabPosition="left" style="width:1000px;height: 1000px;margin: 14px auto auto auto;position: sticky">
        <el-tab-pane>
          <span slot="label">个人信息<i class="el-icon-arrow-right"></i></span>
          <user :list="list" :imageUrl="imageUrl" class="user"></user>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">我的简历<i class="el-icon-arrow-right"></i></span>
          <my-resume></my-resume>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">投递记录<i class="el-icon-arrow-right"></i></span>
          <delivery></delivery>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">设置<i class="el-icon-arrow-right"></i></span>
          <setting></setting>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  /* eslint-disable indent */
import {userInfoPage} from './userInfo-page.js'
  export default {
    mixins:[userInfoPage]
  }
</script>

<style>
  html * {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .box-card {
    width: 1000px;
    margin: 14px auto auto auto;
  }

  .img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  .el-card .username {
    float: left;
    margin-left: 14px;
    font-size: 21px;
  }

  .avatar-uploader {
    float: left;
  }

  .avatar-uploader .el-upload {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-bottom: 14px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }
</style>