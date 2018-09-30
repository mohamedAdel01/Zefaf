<template>
  <div>
    <app-navbar></app-navbar>
    <!-- <app-sidebar></app-sidebar> -->
    <h1 class="mx-auto mb-4" style="width: 450px">Welcome in ZeFaF</h1>

    <section>
      <div id="service" v-for="doc in services" :key="doc.id">
        <button class="mb-3 btn btn-info btn-lg btn-block" @click="navigateTo(doc.route)">{{ doc.name }}</button>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'
import AppSidebar from './sub-Components/Sidebar'
import MNGServices from '../../services/MNG-Services'

export default {
  components: {
    AppNavbar,
    AppSidebar
  },
  data () {
    return {
      services: []
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    var res = (await MNGServices.getServicesItems()).data
    this.services = res
    console.log(res)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#service{
  width: 75%;
  margin: 0 auto
}
</style>
