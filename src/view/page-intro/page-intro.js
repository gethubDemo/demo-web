export const pageIntro={
    data(){
        return{
            searchContent:null,
            menuOpt:null,
            menuChoice:[{
                name:"公司",
                value:0
            },{
                name:"职位",
                value:1
            }],
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    created() {
        // this.test()
    },
    methods: {
        queryOptions(){
            console.log(this.searchContent)
            console.log(this.menuOpt)
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
    },
    mounted() {
        
    },
}