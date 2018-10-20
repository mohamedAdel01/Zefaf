<template>
  <section>
    <app-navbar></app-navbar>
    <div>
      <h1 class="mb-2 mt-2">This is a preview for your items</h1>
      <ul class="nav nav-tabs" >
        <li class="nav-item" v-for="item in list" :key="item.id" @click="getData(item)">
          <a class="nav-link">{{item.name}}</a>
        </li>
      </ul>
      <button class="fixed btn btn-info">Edit</button>
    </div>

    <div class="num" v-for="(value, index) in res" :key="index" v-if="res">
      <button @click="nestItem(index)">{{ index }}</button>
    </div>
    <div class="clearfix"></div>

    <div id="selections" class="jumbotron" v-if="nestedItem">
      <div class="mb-2">
        <label>wedding hall rent</label>
        <input class="form-control" type="number" :value="nestedItem.info.priceRent" readonly/>
        <span>Pounds</span>
      </div><hr />

      <div class="mb-2">
        <div v-for="(values, key) in nestedItem.services" :key="key">
          <h3>choose {{ key }}</h3>
            <div class="card mt-4" style="width: 18rem;" v-for="value in values" :key="value._id">
              <img class="card-img-top" style="height: 250px" :src="'http://localhost:5000/uploads/weddingHalls/' + key + '/' +  value.imgID" alt="Card image cap">
              <h5 class="ml-2 mt-1">{{ value.name }}</h5>
              <h6 class="ml-2 mt-1">Price: {{ value.price }}</h6>
            </div>
            <div class="clearfix"></div><hr />
          </div>
      </div>

    </div>

  </section>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'
import MNGServices from '../../services/MNG-Services'
import ClientServices from '../../services/Clients-Services'

export default {
  components: {
    AppNavbar
  },
  data () {
    return {
      auth: null,
      list: null,
      res: null,
      nestedItem: null
    }
  },
  methods: {
    async getData(item) {
      if (this.res) return
      let req = {
        email: this.auth.user,
        dbName: item.dbName
      }

      let res = (await ClientServices.getData(req)).data
      this.res = res
      console.log(res)
    },

    nestItem(i) {
      this.nestedItem = this.res[i]
    }
  },
  async created() {
    // this is not Powered enough we should use TOKEN
    let isUserLoggedIn = this.$store.state.Client.info.isUserLoggedIn
    if(isUserLoggedIn === false) {
        return this.$router.push('/clients/login')
      }

    this.auth = this.$store.state.Client.info
    let res = (await MNGServices.getServicesItems()).data
    this.list = res
  }
}
</script>

<style scoped>
.num{
  float: left;
}

.card {
  float: left;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 5px 5px 5px #888
}

.fixed{
  width: 170px;
  position: fixed;
  bottom: 0.5%;
  right: 0.5%;
  z-index: 1;
}
</style>
