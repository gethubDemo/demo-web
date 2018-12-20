<template>
  <div>
    <el-collapse>
      <el-collapse-item title="修改密码" name="2" class="set">
        <el-form :model="passForm" status-icon :rules="passwordrules" ref="passForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="密码" prop="pass" class="settinginput">
            <el-input type="password" v-model="passForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkpass" class="settinginput">
            <el-input type="password" v-model="passForm.checkpass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" @click="changePass('passForm')">确定</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>/* eslint-disable indent */
  export default {
    data () {
      var checkpass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入正确的密码'))
        } else if (value !== this.passForm.password) {
          return callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }
      var confirmPass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请再次输入正确的密码'))
        } else {
          callback()
        }
      }
      return {
        passForm: {
          password: '',
          checkpass: ''
        },
        passwordrules: {
          password: [{validator: checkpass, trigger: 'blur'}],
          checkpass: [{validator: confirmPass, trigger: 'blur'}]
        }
      }
    },
    methods: {
      changePass (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // this.checkpass()
            console.log(this.passForm)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }

  }
</script>

<style>
  .demo-ruleForm {
    margin-top: 20px
  }

  .set {
    margin-top: 21px;
    font-size: 14px;
    color: #909399
  }

  .btn {
    position: relative;
    top: -62px;
    left: 225px;
  }

  .settinginput {
    width: 75%
  }
</style>


