<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light" slot="navbar">
    <a class="navbar-brand" @click="navigateTo('/')">ZeFaF</a>
    <ul class="navbar-nav">
      <li class="nav-item nav-link" @click="navigateTo('/')">Home</li>
      <li class="nav-item nav-link" @click="navigateTo('/register')">Register</li>
      <li class="nav-item nav-link" @click="navigateTo('/login')">Login</li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
