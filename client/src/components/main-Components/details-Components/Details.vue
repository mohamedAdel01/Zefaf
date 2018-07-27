<template>
  <section>
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <h1 class="mx-auto" style="width: 450px">Details page content</h1>
    <div class="details">
        <h2 style="grid-column:1/5;grid-row:1/2">main info about image</h2>
        <img src="../../../assets/zefaf.jpg" style="grid-column:5/9;grid-row:1/2;width:680px"/>
        <div class="all-info" style="grid-column:6/8;grid-row:2/3"><!--here we will make v-for every info-->
          <h4>title of info</h4>
          <p>the info detail</p>
        </div>
        <div class="contacting" style="grid-column:6/8;grid-row:3/4"><!--here we will make v-for every info-->
          <h4>here will show how to client to contact with user</h4>
          <p>phone</p>
          <p>email</p>
        </div>
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
.details{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr)
}
</style>
