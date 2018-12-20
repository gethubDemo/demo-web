
export const jobInfo={
    data () {
        return {
          company: [],
          hr: [],
          recruit: [],
          recruitId: 0,
          title: '',
          isShow: false
        }
      },
      mounted () {
        this.getJobDetail()
      },
      methods: {
        getJobDetail () {
          let jobId = localStorage.getItem('jobId')
          let url='/api/job/query'
          this.get(url,{
            id:jobId
          }).then(res=>{
            this.company=res
          })
          let urlS='/api/job/IdQueryUser'
          this.get(urlS,{
            id:jobId
          }).then(res=>{
            this.hr=res.data.tUserByUserId
          })
        },
        sendResume () {
          let param = {
            jobId:localStorage.getItem('jobId'),
            userId:localStorage.getItem('userId')
          }
          let url='/api/jobApplicant/add'
          this.get(url,param).then(res=>{
            this.$alert('请求成功', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push({path: '/'})
              }
            });
          })
        },
        goBack(){
          this.$router.push({
            path:'/'
          })
        }
      },
}