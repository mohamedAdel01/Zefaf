<template>
  <div>
    <app-navbar></app-navbar>
    <h1 class="mx-auto mt-5 jumbotron" style="width: 450px">application page content</h1>

    <button @click="logout">logout</button>
  </div>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'

export default {
  components: {
    AppNavbar
  },
  data () {
    return {
    }
  },
  methods: {
    logout() {
      try{
        this.$store.dispatch('MNGLogout')
        this.$router.push('/MNG/login')

      } catch (error) {
        console.log(error)
      }

    }
  }
}
</script>
