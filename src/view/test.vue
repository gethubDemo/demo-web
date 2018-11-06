<template>
  <div>
    <el-row>
      <el-button @click="test()">默认按钮</el-button>
      <el-button type="primary" @click="foo()">主要按钮</el-button>
      <el-button type="success" @click="test2()">成功按钮</el-button>
      <el-button type="info" @click="test3()">信息按钮</el-button>
      <el-button type="warning" @click="test4()">警告按钮</el-button>
      <el-button type="danger" id='redButton'>危险按钮</el-button>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      test() {
        // const promise=new Promise(function(resolve,reject){
        //   // console.log('Promise');
        //   reject(3);
        // })
        // promise.then((value) => {console.log(value)}, (value) => {console.log(value)}).finally(() => {})
        // .then((value)=>{
        //   console.log(value);
        // }).catch((error)=>{
        //   console.log(error);
        // })
        // .finally((value)=>{
        //   console.log(value)
        // })

        // 等同于
        // promise
        //   .then(
        //     result => {
        //       // 语句
        //       return result;
        //     },
        //     error => {
        //       // 语句
        //       throw error;
        //     }
        //   );
        let url = '/api/test';
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('get', url);
          xhr.onload = () => resolve(xhr.responseText);
          xhr.onerror = () => reject(xhr.statusText);
          xhr.send();
        }).then((value) => {
          console.log(value);
        }, (value) => {
          console.log(value);
        }).catch(err => {
          console.log("error" + err);
        })
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