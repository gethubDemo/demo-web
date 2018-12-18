export const loginPage={
    data() {
        var validUsername = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'))
          } else {
            callback()
          }
        }
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'))
          } else {
            callback()
          }
        }
        return {
          loginInfo: {
            password: '',
            username: ''
          },
          rules2: {
            username: [{
              validator: validUsername,
              trigger: 'blur'
            }],
            password: [{
              validator: validatePass,
              trigger: 'blur'
            }]
          }
        }
      },
      mounted() {
        this.addAnimation()
      },
      methods: {
        addAnimation() {
          let form = document.getElementsByClassName('registerForm')[0];
          form.classList.add('animated')
          form.classList.add('bounceInDown')
        },
        backIndex() {
          this.$router.go(-1)
        },
        toRegister() {
          this.$router.push({
            name: 'register'
          })
        },
        submitForm(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              fetch
                .userLogin(this.loginInfo)
                .then(res => {
                  if (res.status === 200) {
                    if (res.data.success === true) {
                      localStorage.setItem('token', res.data.data.token)
                      localStorage.setItem('companyId', res.data.data.companyId)
                      localStorage.setItem('role', res.data.data.role)
                      sessionStorage.setItem('userId', res.data.data.userId)
                      if (res.data.data.role === 2) {
                        this.$router.push({
                          name: 'userInfo',
                          params: {
                            refresh: 1
                          }
                        })
                      } else {
                        this.$router.push({
                          name: 'hrView',
                          params: {
                            hrRefresh: 2
                          }
                        })
                      }
                    } else {
                      this.$message({
                        message: '用户名或密码错误',
                        type: 'warning'
                      })
                    }
                  }
                })
                .catch(e => {
                  console.log(e)
                })
            }
          })
        }
      }
}