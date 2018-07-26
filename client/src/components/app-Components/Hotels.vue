<template>
  <div>
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <h1 class="mx-auto mt-5 jumbotron" style="width: 450px">hotels page content</h1>
  </div>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'
import AppSidebar from './sub-Components/Sidebar'

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
