<template>
  <nav class="navbar bg-light navbar-light">
    <a class="navbar-brand" @click="navigateTo('/clients/application')">ZeFaF App</a>
    <ul class="navbar-nav d-inline">
      <li class="nav-item nav-link d-inline" @click="logout">logout</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logout() {
      try{
        this.$store.dispatch('ClientsLogout')
        this.$router.push('/clients/login')

      } catch (error) {
        console.log(error)
      }

    },
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

