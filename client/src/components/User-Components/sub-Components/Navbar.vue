<template>
  <nav class="navbar bg-light navbar-light">
    <a class="navbar-brand" @click="navigateTo('/')">ZeFaF</a>
    <ul class="navbar-nav d-inline">
      <li class="nav-item nav-link d-inline mr-3" @click="navigateTo('/')">Home</li>
      <li class="nav-item nav-link d-inline mr-3" @click="navigateTo('/register')">Register</li>
      <li class="nav-item nav-link d-inline mr-3" @click="navigateTo('/login')">Login</li>
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
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>
