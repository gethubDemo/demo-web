export const loginPage={
    data() {
        return {
          form: {
            name: null,
            password: null
            
          }
        }
      },
      methods: {
        onSubmit() {
          console.log(this.form)
        }


      },
    method:{

    }
}