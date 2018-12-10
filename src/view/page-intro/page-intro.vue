<template>
  <el-container style="margin-top:-60px;">
    <el-header>
      <el-card shadow="always">
        <el-row :gutter="24">
            <el-col :span="5">.
          </el-col>
          <el-col :span="2">.
            图片
          </el-col>
          <el-col :span="10">
            <el-input placeholder="请输入内容" v-model="searchContent">
              <el-select v-model="menuOpt" slot="prepend" placeholder="请选择">
                <el-option v-for="(item,key) in menuChoice" :key="key" :label="item.name" :value="item.value"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search" @click="queryOptions"></el-button>
            </el-input>
          </el-col>
          <el-col :span="3">
            二维码
          </el-col>
        </el-row>
      </el-card>
    </el-header>
    <el-main>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="margin:10px 25% 0;">
        <el-menu-item index="1" class="menu-nav">主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title" class="menu-nav">职位类型</template>
          <el-menu-item index="2-1">金融</el-menu-item>
          <el-menu-item index="2-2">房地产</el-menu-item>
          <el-menu-item index="2-3">贸易</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">互联网IT</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" class="menu-nav">北京青鸟</el-menu-item>
        <el-menu-item index="4" class="menu-nav">智联评测</el-menu-item>
        <el-menu-item index="5" class="menu-nav">求职奇葩事</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-main>
  </el-container>
</template>
<script>
  import {
    pageIntro
  } from './page-intro.js'
  export default {
    mixins: [pageIntro]
  }
</script>
<style>
.menu-nav{
    margin: 0 20px;
}
</style>
