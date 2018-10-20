<template>
  <section>
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <h1 class="d-inline">Accessories</h1>
    <button class="btn btn-warning" @click="addItem">add your item</button><hr/>
    <div class="card mt-4" style="width: 18rem;" @click="getItem" v-for="data in res" :key="data.id">
      <img class="card-img-top" src="../../../assets/zefaf.jpg" alt="Card image cap">
        <h5 class="ml-2 mt-1">{{data.header}}</h5>
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
        sort: 'accessories'
      },
      res: null
    }
  },
  methods: {
    addItem() {
      this.$router.push('/addItem')
      console.log('addItem')
    },
    getItem() {
      this.$router.push('/details')
      console.log('getItem');
    }
  },
  async created() {
    this.res = (await weddingDataServices.show(this.req.sort)).data
    console.log(this.res)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5{
  opacity: 0.7;
}
button{
  float: right;
  margin: 10px 20px 0 0
}
</style>
