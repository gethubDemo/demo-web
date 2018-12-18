export const registerPage={
    data() {
        var checkCode = (rule, value, callback) => {
          if (!value) {
            return callback(new Error("请输入验证码"));
          } else {
            callback();
          }
        };
        var checkPhone = (rule, value, callback) => {
          if (!value) {
            return callback(new Error("请输入手机号"));
          } else {
            callback();
          }
        };
        var checkEmail = (rule, value, callback) => {
          if (!value) {
            return callback(new Error("请输入邮箱"));
          } else {
            callback();
          }
        };
        var validUsername = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请输入用户名"));
          } else {
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请输入密码"));
          } else {
            if (this.hrInfo.checkPass !== "") {
              this.$refs.hrInfo.validateField("checkPass");
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请再次输入密码"));
          } else if (value !== this.hrInfo.password) {
            callback(new Error("两次输入密码不一致!"));
          } else {
            callback();
          }
        };
        return {
          isRegister: false,
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
            code: ""
          },
          hrrules: {
            code: [{ validator: checkCode, trigger: "blur" }],
            username: [{ validator: validUsername, trigger: "blur" }],
            password: [{ validator: validatePass, trigger: "blur" }],
            checkPass: [{ validator: validatePass2, trigger: "blur" }],
            phone: [{ validator: checkPhone, trigger: "blur" }],
            email: [{ validator: checkEmail, trigger: "blur" }]
          }
        };
      },
      mounted() {
        this.addHrRegister();
      },
      methods: {
        addHrRegister() {
          let form = document.getElementsByClassName("userForm")[0];
          form.classList.add("animated");
          form.classList.add("bounceInDown");
        },
        toLogin() {
          this.$router.push({ path: "login" });
        },
        backIndex() {
          this.$router.go(-1)
        },
        sendCode() {
          const TIME_COUNT = 60;
          fetch
            .getCode(this.hrInfo.phone)
            .then(res => {
              if (res.status === 200) {
                this.confirmCode = res.data.data;
              }
            })
            .catch(e => {
              console.log(e);
            });
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
                this.msg = this.count + "s后发送";
                if (this.count === 0) {
                  this.msg = "发送验证码";
                }
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000);
          }
        },
        hrSubmit(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
            }
          });
        },
        finderSubmit(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              let res = {
                email: this.hrInfo.email,
                phone: this.hrInfo.phone,
                password: this.hrInfo.password,
                username: this.hrInfo.username
              };
              fetch
                .userRegister(res)
                .then(res => {
                  if (res.status == 200) {
                    console.log("验证码", this.confirmCode, this.hrInfo.code);
                    if (this.confirmCode == this.hrInfo.code) {
                      this.$message({
                        message: "注册成功",
                        type: "success"
                      });
                      this.$router.push({ name: "login" });
                    } else if (res.data.code == 1004) {
                      this.$message({
                        message: res.data.msg,
                        type: "warning"
                      });
                    } else {
                      this.$message({
                        message: "验证码错误",
                        type: "warning"
                      });
                    }
                  }
                })
                .catch(e => {
                  this.$message({
                    message: "注册失败",
                    type: "warning"
                  });
                });
            }
          });
        }
      }
}