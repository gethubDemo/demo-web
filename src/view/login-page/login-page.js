import Cookies from 'js-cookie'
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
              let param={
                username:this.loginInfo.username,
                password:this.loginInfo.password
              }
              let url='/api/user/login'
              this.post(url,param).then(res=>{
                var storage=window.localStorage
                // storage['username']=res.data.token
                storage.setItem("username",res.data.token)
                localStorage.setItem('userId', res.data.userId)
                // console.log(res.data.userId)
                // let token = window.localStorage.getItem('token')
                // let token =res.data.token
                // console.log("TOKEN"+token)
                this.$router.push({
                  path:"/"
                })
              })
            }
          })
        }
      }
}