<template>
  <section id="body">
    <app-navbar></app-navbar>
    <h3>Wedding Halls</h3> <hr/>
    <section id="search">
      <input class="mr-2 ml-2" style="width:50%" type="text" placeholder="governorate" v-model="req.governorate" @keyup.enter="search">
      <!-- <input class="mr-2" type="text" placeholder="sort" v-model="sort"> ## we will add it after -->
      <button @click="search" class="btn btn-info">search</button>
    </section> <hr/>

    <section id="halls">
      <div class="card mt-4" style="width: 18rem;" v-for="doc in res.weddingHalls" :key="doc._id" @click="slctItem(doc)">
        <img class="card-img-top" style="height: 250px" :src="'http://localhost:5000/uploads/weddingHalls/main/' +  doc.info.ImgsName[0]" alt="Card image cap">
          <h5 class="ml-2 mt-1">{{ doc.info.name }}</h5>
          <h6 class="ml-2 mt-1">{{ doc.info.address }}</h6>
      </div>
    </section>
  </section>
</template>

<script>
import AppNavbar from '../sub-Components/Navbar'
import AppSidebar from '../sub-Components/Sidebar'
import NUserServices from '../../../services/NUserServices'

export default {
  components: {
    AppNavbar,
    AppSidebar
  },
  data () {
    return {
      req: {
        governorate: null
      },
      res: {
        weddingHalls: null
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },

    async search() {
      const areAllFieldsFilledIn = Object.keys(this.req).every(key => !!this.req[key])
      if (!areAllFieldsFilledIn) {
        console.log('fill all the require fields')
        return
      }

      let res = (await NUserServices.getWeddingHalls(this.req.governorate)).data
      this.res.weddingHalls = res
      this.$store.state.Nuser.CachData = res
    },

    slctItem(item) {
      this.$store.dispatch('CachData', item)
      console.log(this.$store.state.Nuser.CachData)
      this.navigateTo({path:'/details/:id', params: {id: item._id}})
    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body{
  height: 2000px
}
h5{
  opacity: 0.7;
}
#halls {
  width: 90%;
  margin: 0 auto
}

#halls div {
  cursor: pointer;
  transition: 0.7s
}

#halls div:hover{
  opacity: .8;
}

.card{
  float: left;
  margin-right: 20px
}

.card:hover{
  opacity: 0.7;
  box-shadow: 10px 10px 10px #888
}
</style>
