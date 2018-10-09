<!--THIS PAGE MAYBE DELETED AFTER-->
<template>
  <section v-if="loaded">
    <app-navbar></app-navbar>
    <div class="jumbotron">
      <h3 class="text-center">Welcome in <span>{{ nestedItem.info.name }}</span></h3>
      <h4>address: <span>{{ nestedItem.info.address }}</span></h4>
      <button class="btn btn-info fixed" @click="showCheckList=!showCheckList">checkList</button>
    </div>

<!-- this will shown as a slider AFTER && and try to make this page render for all the our service-->
    <p class="text-center">{{ nestedItem.info.detail }}</p>
    <div id="carousel" v-for="img in nestedItem.info.ImgsName" :key="img">
      <img :src="'http://localhost:5000/uploads/weddingHalls/main/' + img" alt="Wedding Halls">
    </div>
    <div class="clearfix"></div>

<!-- =================== ALL SERVICES ==================== -->
    <div id="selections" class="jumbotron">
      <h3>choose what you need only</h3>
      <div class="mb-2">
        <label>wedding hall rent</label>
        <input class="form-control" type="number" :value="nestedItem.info.priceRent" readonly/>
        <span>Pounds</span>
      </div><hr />

      <div class="mb-2">
        <div v-for="(values, key) in nestedItem.services" :key="key">
          <h3>choose {{ key }}</h3>
            <div class="card mt-4" style="width: 18rem;" v-for="value in values" :key="value._id">
              <img class="card-img-top" style="height: 250px" :src="'http://localhost:5000/uploads/weddingHalls/'+ key + '/' +  value.imgID" alt="Card image cap">
              <h5 class="ml-2 mt-1">{{ value.name }}</h5>
              <h6 class="ml-2 mt-1">Price: {{ value.price }}</h6>
                <label v-if="value.Q != 'empty'">quantity OR hours</label>
                <input v-if="value.Q != 'empty'" class="form-control" type="number" v-model="value.Q"/>
              <button class="btn btn-success" @click="slctItem(key, value)">Add Item</button>
            </div>
            <div class="clearfix"></div><hr />
          </div>
      </div>

    </div>

    <div id="checkList" v-if="showCheckList">
      <span class="close mr-3" @click="showCheckList=!showCheckList">X</span>
      <div class="mt-5" v-for="(values, key) in checkList" :key="key">
        <h2>{{ key }}</h2>
        <table class="table .table-dark">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="value in values" :key="value._id">
              <th>{{ value.name }}</th>
              <th>{{ value.price }}</th>
              <th>{{ value.Q }}</th>
            </tr>
          </tbody>
        </table>
        <!-- <div v-for="(values, key) in checkList" :key="key">
          <div v-for="value in values" >
            {{value.name}}
          </div>
        </div> -->
      </div>
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
      checkList: {
        priceRent: null,
        Dj: null,
        flint: null,
        tables: null,
        chairs: null,
        videoTeam: null,
        shows: [],
        songer: [],
        buffet: [],
        setMenu: [],
        drinks: []
      },
      nestedItem: [],
      showCheckList: false,
      loaded: false
    }
  },
  methods: {
    slctItem(key,item) {
      if(item.Q == 0) {
        console.log('fill the quantity')
        return
      }

      // this.checkList.priceRent = this.nestedItem.info.priceRent
      switch (key) {
        case 'Dj':
        case 'flint':
        case 'tables':
        case 'chairs':
        case 'videoTeam':
            this.checkList[key] = [item]
          break;

        default:
            this.checkList[key].push(item)
          break;
      }
      console.log(this.checkList)
    }
  },
  async created() {
    this.nestedItem = await this.$store.state.Nuser.CachData
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

.card {
  float: left;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 5px 5px 5px #888

}

.btn:hover{
  opacity: 0.8;
  box-shadow: 10px 10px 10px #888
}

#checkList {
  position: absolute;
  width: 100%;
  min-height: 200%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white
}

#checkList .close{
  color: red;
  font-size: 50px;
}

.fixed{
  width: 170px;
  position: fixed;
  bottom: 0.5%;
  right: 0.5%;
  z-index: 1;
}


</style>
