
// import fetch from '../api/fetch'

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
          fetch
            .getJobDetail(jobId)
            .then(res => {
              if (res.status === 200) {
                if (res.data.data === null) {
                  this.isShow = true
                }
                if (res.data.success === true) {
                  this.company = res.data.data.company
                  this.hr = res.data.data.hr
                  this.recruit = res.data.data.recruit
                  this.recruitId = this.recruit.id
                  this.title = this.recruit.title
                }
              }
            })
            .catch(e => {
              console.log(e)
            })
        },
        sendResume () {
          let body = {
            recruitId: this.recruitId,
            title: this.title
          }
          fetch.deliveryReusme(body).then(res => {
            if (res.status === 200) {
              this.$message({
                message: res.data.data,
                type: 'success'
              })
            }
          }).catch(e => {
            console.log(e)
          })
        }
      },
}