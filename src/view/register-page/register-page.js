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
        hrSubmit(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
            }
          });
        },
        finderSubmit(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              let url='/api/user/register'
              let param = {
                email: this.hrInfo.email,
                phone: this.hrInfo.phone,
                password: this.hrInfo.password,
                username: this.hrInfo.username,
                birthday:'2018-12-11',
                sex:1,
                address:'jsjhsj',
                company:"da"
              };
              this.post(url,param).then(res=>{
                router.go({
                  path:'/login'
                })
              })
            }
          });
        }
      }
}