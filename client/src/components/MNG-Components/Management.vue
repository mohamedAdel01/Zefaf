<template>
  <div>
    <app-navbar></app-navbar>
    <div class="jumbotron">
      <h1>add package</h1>
      <form>
        <select>
          <option value=""></option>
        </select>
      </form>
    </div>
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
  created() {
    let isUserLoggedIn = this.$store.state.MNG.isUserLoggedIn
    if(isUserLoggedIn === false) {
        this.$router.push('/mng/login') // this will route to the page to add new data
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
