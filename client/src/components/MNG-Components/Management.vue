<template>
  <div>
    <app-navbar></app-navbar>
    <div>
      <ul class="nav nav-tabs" >
        <li class="nav-item" v-for="item in list" :key="item.id" @click="navigateTo(item.route)">
          <a class="nav-link">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'
import MNGServices from '../../services/MNG-Services'

export default {
  components: {
    AppNavbar
  },
  data () {
    return {
      list: []
    }
  },
  methods:{
    navigateTo(route) {
      this.$router.push(`/mng/management/${route}`)
    }
  },
  async created() {
    let isUserLoggedIn = this.$store.state.MNG.isUserLoggedIn
    if(isUserLoggedIn === false) {
        return this.$router.push('/mng/login')
      }

    let servicesList = (await MNGServices.getServicesItems()).data
    this.list = servicesList

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
