<template>
  <div>
    <el-tabs type="border-card" tabPosition="left" style="width:1000px;height: 1000px;" class="hr">
    <el-tab-pane>
    <span slot="label">职位管理<i class="el-icon-arrow-right"></i></span>
   <manage-job></manage-job>
  </el-tab-pane>
   <el-tab-pane>
    <span slot="label">投递记录<i class="el-icon-arrow-right"></i></span>
   <receive></receive>
  </el-tab-pane>
   <el-tab-pane >
    <span slot="label">设置<i class="el-icon-arrow-right"></i></span>
   <setting></setting>
  </el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
import {hrInfoPage} from './hrInfo-page.js'
export default {
  mixins:[hrInfoPage]
}
</script>

<style>
.hr {
   margin: 20px auto auto auto;
}
</style>
