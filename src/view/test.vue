<!--<template>
  <div>
      <span style="color:#cc0000;">Object.prototype.toString.call(arr) === "[object Array]";</span>
    <el-row>
      <el-button @click="test">默认按钮</el-button>
      <el-button type="primary" @click="foo()">主要按钮</el-button>
      <el-button type="success" @click="test2()">成功按钮</el-button>
      <el-button type="info" @click="test3()">信息按钮</el-button>
      <el-button type="warning" @click="test4()">警告按钮</el-button>
      <el-button type="danger" id='redButton' @click='isArrayF()'>危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        string:"aa",
        num:12,
        isCollapse: true,
        obj:{
          k1:'v1'
        },
        arr:[1,2]
      };
    },
    methods: {
      test() {
        let url="/api/list"
        console.log(url)
        this.$get(url).then(response => {
          // success callback
        }).catch(error => {
          console.log(error);
        });
      },

      async foo() {
        console.log('start')
        var a = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(1);
          }, 2000);
        });
        console.log(a + "==>2s");
        try {
          var b = await new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(0);
            }, 1000);
          })
        } catch (error) {
          console.log(error + '==>1s');
        }
        var sleep = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('sleep');
          }, 2000);
        })
        console.log(sleep + '==>2s');
        var c = await 3;
        console.log(c + '==>0s');
      },

      test2() {
        let then = {
          then: function (resolve, reject) {
            resolve(42);
          }
        }
        let p = Promise.resolve(then);
        p.then(value => {
          console.log(value)
        })
      },
      test3() {
        setTimeout(function () {
          console.log('three');
        }, 0);
        
        setTimeout(function () {
          console.log('four');
        }, 1000);

        Promise.resolve().then(function () {
          console.log('two');
        });
        console.log('one');
      },
      test4(){
        // const f=()=>{
        //   console.log('now')
        // }
        // Promise.resolve().then(f)
        // console.log("next")
        // const f=()=>{
        //   console.log("now")
        // }
        // (async ()=>f())();
        // (async ()=>f())();
        // console.log("next")
        // const f=()=>console.log('now');
        // // (
        // //   ()=>new Promise(resolve=>resolve(f()))
        // // )();
        // Promise.try(f)
        // console.log('next')
        function f(id){
          return database.users.get({id:userId}).then(function(user){
            return user.name;
          })
        }
      },
      isArrayF(){
          this.$get('/api/v2/movie/top250',{})
        .then((response) => {
          console.log(response)
        })
      //  if(Array.isArray){
      //    console.log(Array.isArray)
      //    console.log(Array.isArray(this.obj))
      //    console.log(Array.isArray(this.arr))
      //   //  if
      //    console.log(Object.prototype.toString.call(this.obj))
      //   //  console.log(Array.isArray(this.arr))
      //   console.log(typeof(this.obj))
      //   console.log(typeof(this.arr))
      //   console.log(typeof(this.obj))
      //  }
      // console.log(this.string+"==>"+typeof(this.string))
      // console.log(this.num+"==>"+typeof(this.num))
      // console.log(this.isCollapse+"==>"+typeof(this.isCollapse))
      // console.log(this.obj+"==>"+typeof(this.obj))
      // console.log(this.arr+"==>"+typeof(this.arr))

      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>