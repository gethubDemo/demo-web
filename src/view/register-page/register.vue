<template>
    <div  style="width:600px; margin:0 auto">
         <el-card class="box-card" >
                
                <div  style="margin-bottom: 40px; margin-top:40px;"><h3>注册</h3></div>

    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
            <el-input v-model.number="ruleForm2.phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="ruleForm2.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
         </el-form-item>
         
    </el-form>
    <i class="el-icon-back"   @click="back" style="float:left">返回</i>
    <i class="el-icon-share"   @click="goLogin" style="float:right">已有账号？直接登录</i>
    </el-card>
    </div>
</template>
<script>
import {registerPage} from './register.js'
export default {
   mixins:[registerPage]
}
</script>
