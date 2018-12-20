<template>
  <div>
    <div v-if="!isShow">
      <el-card class="jobcard" style="height: 200px;">
        <img src='../../../assets/images.png' class="avatar">
        <div class="introduce">
          <p class="title">{{company.title}}</p>
          <!-- <p>{{company.discription}}</p> -->
          <p>{{company.address}}<span>|</span>{{company.number}}<span>|</span>{{company.type}}</p>
        </div>
        <el-button class="jobbtn" @click="goBack">返回</el-button>
        <el-button class="jobbtn" @click="sendResume()">投递简历</el-button>
      </el-card>
      <el-card class="jobcard">
        <div class="jobintroduce">职位介绍</div>
        <div class="jobcontent">
          <p>{{company.discription}}</p>
        </div>
        <div class="jobintroduce">联系hr</div>
        <div class="hrinfo">
          <span><i class="el-icon-news"></i>{{hr.username}}</span>
          <a :href="`mailto:${hr.email}`"><span><i class="el-icon-message"></i>{{hr.email}}</span></a>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {
    jobInfo
  } from './job-info.js'
  export default {
    mixins: [jobInfo]
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  div .jobcard {
    width: 1000px;
    margin: 20px auto auto auto;
  }

  .avatar {
    float: left;
    width: 126px;
    height: 110px;
  }

  .title {
    font-size: 21px;
  }

  .introduce {
    margin-left: 140px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .introduce p {
    margin: 8px;
  }

  p span {
    margin: 14px;
  }

  .jobintroduce {
    border-left: 5px solid #888;
    text-align: left;
    padding-left: 8px;
  }

  .jobcontent {
    height: 100px;
    margin: 15px auto 15px auto;
    text-align: left;
  }

  .hrinfo {
    margin: 14px auto 42px auto;
    float: left;
  }

  .hrinfo span {
    margin-right: 14px
  }

  .jobbtn {
    float: right;
    margin-bottom: 20px;
  }
</style>