<template>
  <div>
    <div class="indexContain">
      <div class="cardBox">
        <el-carousel trigger="click" height="400px" style="position: sticky;">
          <el-carousel-item v-for="(item, key) in crouselImg" :key="key">
            <img :src="item.img" class="boxImg">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- <div class="division">
      <h3>热门企业</h3>
      <h3 style="color: #888;font-weight: 400">--- Hot ---</h3>
    </div>
    <div class="cardContain">
      <div class="wrapper-card">
        <div class="card" v-for="(item, key) in companyList" :key="key">
          <img :src="item.avatar" class="image" @click="getCompanyDetail(item.id)">
        </div>
      </div>
    </div> -->
    <div class="division">
      <h3>热门职位</h3>
      <h3 style="color: #888;font-weight: 400">--- JOBS ---</h3>
    </div>
    <div class="newsContain">
      <div class="temp">
        <div class="newsItem" v-for="(item, key) in jobList" :key="key" @click="jobDetail(item.id)">
          <div class="picContain" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
              <span class="itemPic">{{item.company}}</span>
              <span class="back">{{item.time}}</span>
            </div>
          </div>
          <div>
            <p>{{item.title}}</p>
            <p style="margin-top:25px">{{item.discription}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="aboutus">
      <div id="aboutusInfo">
        <h2>关于我们</h2>
        <p>面向互联网求职招聘，提供更多的实习和工作机会</p>
        <p>即刻起，点赞你的生活，从这一份工作开始。</p>
      </div>
    </div>
    <div class="division">
      <h3>联系我们</h3>
      <h3 style="color: #888;font-weight: 400">--- CONTACT ---</h3>
    </div>
    <div class="footer">
      <a href="https://github.com/gethubDemo"><img src="../../assets/github4.png"><span>https://github.com/gethubDemo</span></a>
      <a href="https://github.com/Merlynr"><img src="../../assets/github4.png"><span>https://github.com/Merlynr</span></a>
    </div>
    <!-- <test @getmess='get' :mess="mess"></test> -->
  </div>
</template>

<script>
  import {
    pageIntro
  } from './page-intro.js'

  export default {
    mixins: [pageIntro],
  }
</script>

<style>
  @import "../../css/index.css";
  @import "../../assets/Animate/animate.min.css";

  body {
    background: #ededed;
  }

  .myMenu {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .indexContain {
    width: 100%;
    height: 100%;
    border: 1px solid #ededed;
    background: #fff;
  }

  .cardContain {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .newsContain {
    padding-top: 1px;
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .picContain {
    margin-right: 10px;
    perspective: 1000px;
  }

  .picContain:hover .flipper,
  .picContain.hover .flipper {
    transform: rotateY(180deg);
  }

  .picContain,
  .itemPic,
  .back {
    width: 80px;
    height: 80px;
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .newsItem {
    display: flex;
    justify-content: flex-start;
    width: 1200px;
    margin: auto;
    height: 114px;
    text-align: left;
    color: #5a5a5a;
    font-weight: 500;
    padding-top: 15px;
    border-bottom: 1px solid #ededed;
  }

  .itemPic,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    background: #cc0000;
    text-align: center;
    color: white;
    font-weight: 500;
    line-height: 80px;
    white-space: nowrap;
  }

  .itemPic {
    z-index: 2;
  }

  .back {
    transform: rotateY(180deg);
  }

  .footer {
    width: 100%;
    height: 100px;
    background: black;
    padding-top: 20px
  }

  .footer a {
    color: white;
    text-decoration: none;
  }

  .aboutus {
    width: 100%;
    height: 500px;
    background: url("https://raw.githubusercontent.com/gethubDemo/demo-pic/2018-12-16/pic/9381131-fd2872c9d933b2de.jpg") no-repeat;
    background-size: 100% 100%;
    filter: grayscale(70%);
    opacity: 0.7;
    color: white;
    font-weight: 600;
    padding-top: 60px;
  }

  .aboutus p {
    margin-top: 30px;
    font-size: 18px;
  }

  #aboutusInfo {
    margin-top: 80px;
    animation-delay: 1s
  }

  .cardBox {
    position: relative;
    width: 1200px;
    margin: 20px auto 30px auto;
    box-shadow: 0 10px 15px #888;
    border-radius: 6px;
  }

  .wrapper-card {
    width: 1200px;
    height: 1000px;
    margin: 30px auto auto auto;
    padding-top: 30px;
  }

  .wrapper-card .card {
    color: #07111B;
    font-size: 16px;
    width: 336px;
    height: 243px;
    float: left;
    margin: 30px;
    border-radius: 6px;
  }

  .wrapper-card .card:hover {
    transform: translateY(-5px);
    transition: 3ms;
    box-shadow: 5px 5px 10px #888;
  }

  .wrapper-card .image {
    border-radius: 6px 6px 0 0;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    border-radius: 6px;
  }

  .boxImg {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  .division {
    width: 100%;
    margin: 30px auto;
    text-align: center;
    padding-left: 10px;
    color: #5a5a5a;
  }

  .footer img {
    width: 25px;
    height: 25px;
    margin-right: 10px
  }

  .footer span {
    margin-right: 20px;
  }
</style>