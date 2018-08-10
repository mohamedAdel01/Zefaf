<template>
  <nav class="navbar bg-light navbar-light">
    <a class="navbar-brand" @click="navigateTo('/')">ZeFaF App</a>
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
        this.$store.dispatch('MNGLogout')
        this.$router.push('/mng/login')

      } catch (error) {
        console.log(error)
      }

    }

  }
}
</script>
