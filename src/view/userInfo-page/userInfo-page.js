// import fetch from '../api/fetch'
import Info from '../../components/userInfo'
import Resume from '../../components/resume'
import Delivery from '../../components/delivery'
import Setting from '../../components/setting'
export const userInfoPage={
    data () {
        return {
          activeIndex2: '1',
          btnText: '取消',
          list: {
            nickname: '',
            sex: '',
            address: '',
            introduce: '',
            endTime: '',
            education: '',
            school: '',
            intentionCompany: '',
            intentionJob: ''
          },
          imageUrl: '',
          head: {},
          refresh: 0
        }
      },
      computed: {
        setDefault () {
          return this.list.avatar ? this.list.avatar : 'https://upload-images.jianshu.io/upload_images/9381131-a48cdb07b37dcff1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
        }
      },
      mounted () {
        this.head = {
          ContentType: 'application/json',
          Authorization: 'Basic ' + localStorage.getItem('token')
        }
        // this.getUserInfo()
        this.refresh = this.$route.params.refresh !== undefined ? this.$route.params.refresh : 0
      },
      watch: {
        refresh () {
          location.reload()
        }
      },
      components: {
        user: Info,
        myResume: Resume,
        delivery: Delivery,
        setting: Setting,
      },
      methods: {
        getUserInfo () {
          fetch
            .getUserInfo()
            .then(res => {
              this.list = res.data.data !== null ? res.data.data : this.list
            })
            .catch(err => {
              console.log(err)
            })
        },
        handleAvatarSuccess (res, file) {
          this.imageUrl = URL.createObjectURL(file.raw)
        },
        beforeAvatarUpload (file) {
          const isJPG = file.type === 'image/jpeg'
          const isLt2M = file.size / 1024 / 1024 < 2
  
          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!')
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!')
          }
          return isJPG && isLt2M
        }
      }
}