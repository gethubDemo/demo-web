<template>
  <div class="wrapper">
    <div v-if="show" class="nofind">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524746733938&di=9ae24b5205e97c2876b48d3ff26f1c23&imgtype=0&src=http%3A%2F%2Fwww.snlfjx.com%2Fforum%2FSkin%2Fimgs%2Fno-data.png" style="margin: 0 auto">
      <p>暂时没有发布的职位哦，快去发布吧</p>
    </div>
    <el-card  v-for="(item, key) in joblist" :key="key" class="mycard" v-if="!show">
      <p class="myflex">{{item.title}}</p>
      <el-button class="delbtn" @click="deletejob(item.id)">删除职位</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      joblist: [],
      count: 0,
      show: false
    }
  },
  mounted () {
    this.checkJob()
  },

  methods: {
    checkJob () {
      let url='/api/job/IdQuery'
      let userId=localStorage.getItem('userId')
      this.get(url,{id:userId}).then(res=>{
        this.joblist=res.data
      })
    },
    deletejob (id) {
      let url='/api/job/delete'
      this.get(url,{id:id}).then(res=>{
        this.$router.push({
          path:'/'
        })
      })
    }
  }
}
</script>

<style>

.mycard {
  border-left: 5px solid #888;
  height: 100px;
  margin-bottom: 14px;
}
.myflex {
  float: left;
}
.delbtn {
  float: right;
}
</style>
