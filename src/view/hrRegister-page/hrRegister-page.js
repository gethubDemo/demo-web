export const hrRegisterPage={
    data() {
        var checkCode = (rule, value, callback) => {
          if (!value) {
            return callback(new Error("请输入验证码"))
          } else {
            callback()
          }
        }
        var checkPhone = (rule, value, callback) => {
          if (!value) {
            return callback(new Error("请输入手机号"))
          } else {
            callback()
          }
        }
        var checkEmail = (rule, value, callback) => {
          if (!value) {
            return callback(new Error("请输入邮箱"))
          } else {
            callback()
          }
        }
        var validUsername = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请输入用户名"))
          } else {
            callback()
          }
        }
        var validatePass = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请输入密码"))
          } else {
            if (this.hrInfo.checkPass !== "") {
              this.$refs.hrInfo.validateField("checkPass")
            }
            callback()
          }
        }
        var validatePass2 = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请再次输入密码"))
          } else if (value !== this.hrInfo.password) {
            callback(new Error("两次输入密码不一致!"))
          } else {
            callback()
          }
        }
        return {
          msg: "发送验证码",
          count: "",
          timer: null,
          show: true,
          confirmCode: "",
          options: [],
          hrInfo: {
            password: "",
            checkPass: "",
            phone: "",
            username: "",
            email: "",
            company: "",
            code: ""
          },
          hrrules: {
            code: [{validator: checkCode, trigger: "blur"}],
            username: [{validator: validUsername, trigger: "blur"}],
            password: [{validator: validatePass, trigger: "blur"}],
            checkPass: [{validator: validatePass2, trigger: "blur"}],
            phone: [{validator: checkPhone, trigger: "blur"}],
            email: [{validator: checkEmail, trigger: "blur"}]
          }
        }
      },
      mounted() {
        this.getCompany()
        this.addAnimation()
      },
      methods: {
        addAnimation() {
          let form = document.getElementsByClassName('hrForm')[0]
          form.classList.add('animated')
          form.classList.add('bounceInDown')
        },
        backIndex () {
          this.$router.push({path: '/'})
        },
        sendCode() {
          const TIME_COUNT = 60
          fetch
            .getCode(this.hrInfo.phone)
            .then(res => {
              if (res.status === 200) {
                if (res.data.success === true) {
                  this.confirmCode = res.data.data
                }
              }
            })
            .catch(e => {
              console.log(e)
            })
          if (!this.timer) {
            this.count = TIME_COUNT
            this.show = false
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
                this.msg = this.count + "s后发送"
                if (this.count === 0) {
                  this.msg = '发送验证码'
                }
              } else {
                this.show = true
                clearInterval(this.timer)
                this.timer = null
              }
            }, 1000)
          }
        },
        hrSubmit(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              let result = {
                companyId: this.hrInfo.company,
                email: this.hrInfo.email,
                password: this.hrInfo.password,
                phone: this.hrInfo.phone,
                username: this.hrInfo.username
              }
              fetch.hrRegister(result).then(res => {
                if (res.status == 200) {
                  if (this.confirmCode == this.hrInfo.code) {
                    this.$message({
                      message: "注册成功",
                      type: "success"
                    })
                    this.$router.push({name: "login"})
                  } else if(res.data.code == 1004) {
                     this.$message({
                      message: res.data.msg,
                      type: "warning"
                    })
                  }
                  else{
                    this.$message({
                      message: "验证码错误",
                      type: "warning"
                    })
                  }
                }
                else {
                  this.$message({
                    message: res.data.msg,
                    type: "warning"
                  })
                }
              }).catch(e => {
                console.log(e)
              })
            }
          })
        },
        getCompany() {
          fetch
            .getCompany()
            .then(res => {
              for (let item of res.data.data.companyList) {
                this.options.push({value: item.id, label: item.name})
              }
            })
            .catch(e => {
              console.log(e)
            })
        },
        toLogin() {
          this.$router.push({name: "login"})
        }
      }
}