<template>

    <div  style="width:600px; margin:0 auto">
    <el-card class="box-card" >
      <el-form ref="form" :model="form" label-width="80px">
        <div  style="margin-bottom: 40px; margin-top:40px;">
           <el-form-item label="用户名">
              <el-input v-model="form.name" ></el-input>
           </el-form-item>
             <el-form-item label="密码" style="margin-bottom: 40px; margin-top:40px;">
                 <el-input  type="password" v-model="form.password"></el-input>
             </el-form-item>
        </div>
        <center>
        <el-form-item >
             <el-button type="primary" @click="onSubmit">登录</el-button>
         </el-form-item>
        </center>
      <div>
         <router-link to="#">
         <i class="el-icon-back"   style="float:left ; color :gray">返回</i>
         </router-link>
         <router-link to="/register">
         <i class="el-icon-share"  style="float:right; color :gray">没有账号？直接注册</i>
         </router-link>
      </div>
      </el-form>
    </el-card>

    
    </div>
</template>
<script>
import {loginPage} from './login.js'
export default {
   mixins:[loginPage]
   
}
</script>

