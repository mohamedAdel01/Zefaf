<template>
  <div>
    <app-navbar></app-navbar>
    <div class="jumbotron form-group">
      <h1 class="mx-auto mt-5" style="width: 450px">Register page content</h1>
      <form class="mx-auto mt-5" style="width: 450px" @submit.prevent="register">
        <label>Email</label>
        <input class="form-control" type="email" placeholder="Email" v-model="req.email"/>
        <label>password</label>
        <input class="form-control" type="password" placeholder="password" v-model="req.password"/>
        <p v-if="this.error" class="text-light bg-danger text-center font-weight-bold mt-1">please fill all the require fields</p>
        <button type="submit" class="btn btn-primary mt-3 btn-lg btn-block">Submit</button>
      </form>
    </div>

  </div>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'
import authServices from '../../services/authServices'

export default {
  components: {
    AppNavbar
  },
  data () {
    return {
      req: {
        email: null,
        password: null
      },
      error: false
    }
  },
  methods: {
    async register() {
      this.error = false
      const areAllFieldsFilledIn = Object.keys(this.req).every(key => !!this.req[key])
      if (!areAllFieldsFilledIn) {
        this.error = true
        return
      }

      try {
       const res = await authServices.register(this.req)
       console.log(res.data)

      } catch(error) {
        console.log(error)
        console.log(error.response.data)

      }
    }
  }
}
</script>
