<template>
  <div>
    <div class="jumbotron form-group">
      <h1 class="mx-auto mt-5" style="width: 450px">MNG LOGIN page content</h1>
      <form class="mx-auto mt-5" style="width: 450px" @submit.prevent="MNGlogin">
        <label>email</label>
        <input class="form-control" type="email" placeholder="Email" v-model="req.email"/>
        <label>password</label>
        <input class="form-control" type="password" placeholder="Password" v-model="req.password"/>
        <button type="submit" class="btn btn-primary mt-3 btn-lg btn-block">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import MNGServices from '../../services/MNG-Services'

export default {
  data () {
    return {
      req: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async MNGlogin() {
      this.error = false
      const areAllFieldsFilledIn = Object.keys(this.req).every(key => !!this.req[key])
      if (!areAllFieldsFilledIn) {
        this.error = true
        return
      }

      // CHECK LOGIN BEFORE
      let isUserLoggedIn = this.$store.state.MNG.isUserLoggedIn
      if(isUserLoggedIn === true) {
          alert('you are logged in before')
          return
        }

      try {
          const res = await MNGServices.MNGlogin(this.req)
          this.$store.dispatch('MNGLogIn', res.data)
          this.$router.push('/mng/management') // this will route to the page to add new data

      } catch(error) {
          console.log(error)
          console.log(error.response.data)
      }

    }
  },
  created() {
    let isUserLoggedIn = this.$store.state.MNG.isUserLoggedIn
      if(isUserLoggedIn === true) {
          this.$store.dispatch('MNGLogout')
          this.$router.push('/') // this will route to the page to add new data
        }
  }
}
</script>
