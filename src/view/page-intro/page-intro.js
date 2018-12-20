import test from '../test'
export const pageIntro={
    data () {
        return {
          mess: '',
          crouselImg: [
            {img: 'https://raw.githubusercontent.com/gethubDemo/demo-pic/2018-12-16/pic/3C4A275077015CBF398443CC21774709.png'},
            {img: 'https://raw.githubusercontent.com/gethubDemo/demo-pic/2018-12-16/pic/C35273E2AAA17DBA580304E05DF22155.png'},
            {img: 'https://raw.githubusercontent.com/gethubDemo/demo-pic/2018-12-16/pic/C60F54D6D175ABAF3E9A33F0FDE867FC.png'},
            {img: 'https://raw.githubusercontent.com/gethubDemo/demo-pic/2018-12-16/pic/FDBBBD21A98136E3054ADDD432A5020C.png'}
          ],
          activeIndex2: '1',
          currentDate: '完美',
          company: '',
          companyList: [],
          jobList: []
        }
      },
      mounted () {
        // window.addEventListener('scroll', this.handler)
        // this.getCompany()
        this.getJob()
      },
      methods: {
        get(mess) {
          this.mess = mess;
        },
        // handler() {
        //   let info = document.getElementById('aboutusInfo') || null
        //   let card = document.getElementsByClassName('temp')[0] || null
        //   if (info === null || card === null) {
        //       return;
        //   }
        //   else if (document.documentElement.scrollTop > 1000) {
        //      card.classList.add('animated')
        //      card.classList.add('bounceInLeft')
        //      info.classList.add('animated')
        //      info.classList.add('bounceInLeft')
        //   } else {
        //     info.classList.remove('animated')
        //     info.classList.remove('bounceInLeft')
        //     card.classList.remove('animated')
        //     card.classList.remove('bounceInLeft')
        //   }
        // },
        jobDetail (id) {
          localStorage.setItem('jobId', id)
          this.$router.push({path: 'jobInfo'})
        },
        getJob () {
          let url='/api/job/list';
          let param={
            page:0
          }
         this.post(url,param).then(res=>{
           this.jobList=res.data.content
         })
        },
        getCompany () {
          // fetch.getCompany().then(res => {
          //   if (res.status === 200) {
          //     this.companyList = res.data.data.companyList
          //     console.log('res', res)
          //   }
          // })
        },
        getCompanyDetail (id) {
          localStorage.setItem('companyId', id)
          this.$router.push({name: 'companyDetail'})
        }
      },
      // components: {
      //   test: test
      // }
}