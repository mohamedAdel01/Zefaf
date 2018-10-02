<!--THIS PAGE MAYBE DELETED AFTER-->
<template>
  <section v-if="loaded">
    <app-navbar></app-navbar>
    <div class="jumbotron text-center">
      <h3>Welcome in <span>{{ data.info.name }}</span></h3>
      <h4>address: <span>{{ data.info.address }}</span></h4>

    </div>
<!-- this will shown as a slider AFTER -->
    <p class="text-center">{{ data.info.detail }}</p>
    <div id="carousel" v-for="img in data.info.ImgsName" :key="img">
      <img :src="'https://mk-zefaf.herokuapp.com/uploads/weddingHalls/main/' + img" alt="Wedding Halls">
    </div>
    <div class="clearfix"></div>
    <div id="selections" class="jumbotron">
      <h3>choose what you need only</h3>

      <div class="mb-2">
        <label>wedding hall rent</label>
        <input class="form-control" type="number" :value="data.info.priceRent" readonly/>
        <span>Pounds</span>
      </div><hr />

      <div class="mb-2">
        <h3>choose DJ</h3>
        <div class="card mt-4" style="width: 18rem;" v-for="doc in data.services.Dj" :key="doc._id" @click="slctItem(doc)">
          <img class="card-img-top" style="height: 250px" :src="'https://mk-zefaf.herokuapp.com/uploads/weddingHalls/Dj/' +  doc.imgID" alt="Card image cap">
          <h5 class="ml-2 mt-1">{{ doc.name }}</h5>
          <h6 class="ml-2 mt-1">{{ doc.price }}</h6>
        </div>
      </div><hr />

      <div class="mb-2">
        <h3>choose DJ</h3>
        <div class="card mt-4" style="width: 18rem;" v-for="doc in data.services.Dj" :key="doc._id" @click="slctItem(doc)">
          <img class="card-img-top" style="height: 250px" :src="'https://mk-zefaf.herokuapp.com/uploads/weddingHalls/Dj/' +  doc.imgID" alt="Card image cap">
          <h5 class="ml-2 mt-1">{{ doc.name }}</h5>
          <h6 class="ml-2 mt-1">{{ doc.price }}</h6>
        </div>
      </div><hr />


    </div>

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
      data: [],
      loaded: false
    }
  },
  async created() {
    // this will change after design it's database
    this.data = await this.$store.state.Nuser.CachData
    this.loaded = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 span,
p,
h4 span{
  color: blueviolet;
  text-transform: uppercase
}

#carousel{
  width: 70%;
  margin: 0 auto
}

#carousel img{
  width: 300px;
  height: 250px;
  float: left;
}

#selections label{
  display: block
}

#selections input{
  width: 50%;
  display: inline-block;
}
</style>
