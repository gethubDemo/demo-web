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
            username: '',
            sex: '',
            address: '',
            birthday: '',
            endTime: '',
            education: '',
            school: '',
            email: '',
            // intentionJob: ''
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
        this.getUserInfo()
      },
      components: {
        user: Info,
        // myResume: Resume, 简历
        delivery: Delivery,
        setting: Setting,
      },
      methods: {
        getUserInfo () {
          let userId = localStorage.getItem('userId')
          let urlS='/api/user/findById'
          this.get(urlS,{
            id:userId
          }).then(res=>{
            this.list=res.data
            this.list.sex=res.data.sex==1?'男':'女'
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