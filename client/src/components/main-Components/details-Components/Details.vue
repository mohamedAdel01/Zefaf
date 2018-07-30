<template>
  <section>
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <h1 class="mx-auto" style="width: 450px">Details page for {{ res[0].sort }}</h1>
    <div class="details">
        <h2 style="grid-column:1/5;grid-row:1/2">{{res[0].mainInfo}}</h2>
        <img src="../../../assets/zefaf.jpg" style="grid-column:5/9;grid-row:1/2;width:680px"/>
        <div class="all-info" style="grid-column:6/8;grid-row:2/3" v-for="data in res[0].subData" :key="data.id"><!--here we will make v-for every info-->
          <h4>{{data.header}}</h4>
          <p>{{data.subInfo}}</p>
        </div>
        <div class="contacting" style="grid-column:6/8;grid-row:3/4"><!--here we will make v-for every info-->
          <h4>to contact to {{res[0].header}}</h4>
          <p>{{res[0].userInfo.email}}</p>
          <p>{{res[0].userInfo.phone}}</p>
        </div>
    </div>
  </section>
</template>

<script>
import AppNavbar from '../sub-Components/Navbar'
import AppSidebar from '../sub-Components/Sidebar'
import weddingDataServices from '../../../services/weddingDataServices'

export default {
  components: {
    AppNavbar,
    AppSidebar
  },
  data () {
    return {
      req: {
        sort: 'accessories' // this will be the return from query string
      },
      res: null
    }
  },
  async created() {
    // this will change after design it's database
    this.res = (await weddingDataServices.show(this.req.sort)).data
    console.log(this.res)
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
