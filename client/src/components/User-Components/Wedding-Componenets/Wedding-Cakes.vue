<template>
  <section>
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <h1>Wedding cakes</h1> <hr/>
    <div class="card mt-4" style="width: 18rem;">
      <img class="card-img-top" src="../../../assets/zefaf.jpg" alt="Card image cap">
        <h5 class="ml-2 mt-1">Card title</h5>
    </div>
  </section>
</template>

<script>
import AppNavbar from '../sub-Components/Navbar'
import AppSidebar from '../sub-Components/Sidebar'

export default {
  components: {
    AppNavbar,
    AppSidebar
  },
  data () {
    return {
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5{
  opacity: 0.7;
}
</style>
