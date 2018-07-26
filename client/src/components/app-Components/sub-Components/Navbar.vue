<template>
  <nav class="navbar bg-light navbar-light">
    <a class="navbar-brand" @click="navigateTo('/app')">ZeFaF App</a>
    <ul class="navbar-nav d-inline">
      <li class="nav-item nav-link d-inline mr-3" @click="navigateTo('/app/checkout')">checkout</li>
      <li class="nav-item nav-link d-inline" @click="navigateTo('/app/logout')">logout</li>
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

