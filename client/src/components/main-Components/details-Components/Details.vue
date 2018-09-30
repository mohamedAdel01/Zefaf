<!--THIS PAGE MAYBE DELETED AFTER-->
<template>
  <section>
    <app-navbar></app-navbar>
    {{ data }}
  </section>
</template>

<script>
import AppNavbar from '../sub-Components/Navbar'


export default {
  components: {
    AppNavbar
  },
  data () {
    return {
      data: []
    }
  },
  async created() {
    // this will change after design it's database
    this.data = this.$store.state.Nuser.CachData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
