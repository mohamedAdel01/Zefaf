<template>
  <div>
    <app-navbar></app-navbar>
    <h1 class="mx-auto mt-5 jumbotron" style="width: 450px">Home page content</h1>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
