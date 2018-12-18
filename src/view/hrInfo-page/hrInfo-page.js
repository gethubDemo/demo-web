import receive from '../../components/getResume'
import setting from '../../components/setting'
import manageJob from '../../components/manageJob'
export const hrInfoPage={
    data () {
        return {
          hrRefresh: 0
        }
      },
      components: {
        receive,
        setting,
        manageJob
      },
      mounted () {
        this.hrRefresh = this.$route.params.hrRefresh !== undefined ? this.$route.params.hrRefresh : 0
      },
      watch: {
        hrRefresh () {
          location.reload()
        }
      }
}