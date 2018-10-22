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
      <button class="fixed btn btn-info" @click="showEditWindow=!showEditWindow" v-if="nestedItem">Edit</button>
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

    <div id="editList" v-if="showEditWindow">
    <!-- MAIN INFO -->
      <div class="info">
        <span class="close mr-3" @click="showEditWindow=!showEditWindow">X</span>
        <button class="btn btn-primary undo" @click="undo">undo everything</button>
        <button class="btn btn-warning confirm" @click="confirm">Confirm</button>
          <h3>Edit your {{editedItem.info.name}}</h3>
          <label>name</label>
          <input class="form-control" type="text" placeholder="name" v-model="editedItem.info.name"/>
          <label>email</label>
          <input class="form-control" type="email" placeholder="email" v-model="editedItem.info.email" readonly/>
          <label>governorate</label>
          <input class="form-control" type="text" placeholder="governorate" v-model="editedItem.info.governorate"/>
          <label>city</label>
          <input class="form-control" type="text" placeholder="city" v-model="editedItem.info.city"/>
          <label>address</label>
          <input class="form-control" type="text" placeholder="address" v-model="editedItem.info.address"/>
          <label>max range of people</label>
          <input class="form-control" type="number" placeholder="max range of people" v-model="editedItem.info.NOPeople"/>
          <label>price of one hour</label>
          <input class="form-control" type="number" placeholder="price of one hour" v-model="editedItem.info.hourPrice"/>
          <label>price for rent the wedding hall empty</label>
          <input class="form-control" type="number" placeholder="price for rent the wedding hall empty" v-model="editedItem.info.priceRent"/>
          <label>type some information</label>
          <textarea class="form-control" placeholder="type some information" v-model="editedItem.info.detail"></textarea>
      </div>
      <div class="services">
        <div class="mb-2">
          <div v-for="(values, key) in editedItem.services" :key="key">
            <h3>choose {{ key }}</h3>
              <div class="card mt-4" style="width: 18rem;" v-for="(value, index) in values" :key="value._id">
                <img class="card-img-top" style="height: 250px" :src="'http://localhost:5000/uploads/weddingHalls/' + key + '/' +  value.imgID" alt="Card image cap">
                <label>Name</label>
                <input class="form-control" type="text" placeholder="name" v-model="value.name"/>
                <label>Price</label>
                <input class="form-control" type="number" placeholder="Price" v-model="value.price"/>
                <button class="btn btn-danger" @click="DltItem(key, index)">Delete Item</button>
              </div>
              <div id="pattern" class="card mt-4" style="width: 18rem;">
                <img :id="key" class="card-img-top" style="height: 190px" src="" alt="Card image cap">
                <input type="file" @change="showIMG($event, key)"/>
                <label>Name</label>
                <input class="form-control" type="text" placeholder="name"/>
                <label>Price</label>
                <input class="form-control" type="number" placeholder="price"/>
                <button class="btn btn-success" @click="addItem(key)">Add Item</button>
              </div>
              <div class="clearfix"></div><hr />
            </div>
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
      dbName: null,
      auth: null,
      list: null,
      res: null,
      nestedItem: null,
      editedItem: null,
      showEditWindow: false
    }
  },
  methods: {
    async getData(item) {
      if (this.res) return // this need to modified
      let req = {
        email: this.auth.user,
        dbName: item.dbName
      }

      let res = (await ClientServices.getData(req)).data
      this.res = res
      this.dbName = item.dbName
    },

    nestItem(i) {
      this.nestedItem = this.res[i]
      this.editedItem = JSON.parse(JSON.stringify(this.res[i]))
    },

    async addItem(key) {
      let file = $('#pattern input[type="file"]').prop('files')[0]
      let obj = {
        imgID: 'empty',
        name: $('#pattern input[type="text"]').val(),
        price: $('#pattern input[type="number"]').val()
      }

      const areAllFieldsFilledIn = Object.keys(obj).every(key => !!obj[key])
      if (!areAllFieldsFilledIn) {
        console.log('fill all the require fields')
        return
      }

      if (file) {
        let res = await this.saveIMG(file,key)
        obj.imgID = res[0].filename
      }

      this.editedItem.services[key].push(obj)

      $('#pattern input[type="text"]').val(''),
      $('#pattern input[type="number"]').val('')
      $('#pattern #'+ key).attr("src", '')
      $('#pattern input[type="file"]').val('')
    },

    DltItem(key, index) {
      this.editedItem.services[key].splice(index, 1)
    },

    undo() {
      this.editedItem =JSON.parse(JSON.stringify(this.nestedItem))

      // ADD THE FUNCTION TO REMOVE IMGS THAT NEVER CONFIRMED ON IT.
    },

    async confirm() {
      let req ={
        email: this.auth.user,
        dbName: this.dbName,
        dbID: this.editedItem._id,
        Data: this.editedItem
      }

      let res = (await ClientServices.updateData(req)).data
        console.log(res)
      if (res) {
        location.reload()
      }

    },

    // SHOW IMGS
    async showIMG(e, key) {
      let file = await e.target.files[0]
      if(!file) {
        $('#pattern #'+ key).attr("src", '')
        return
      }

      let picReader = new FileReader()
      picReader.onload = (event) => {
        var picFile = event.target.result
        $('#pattern #'+ key).attr("src", picFile)
      }
      picReader.readAsDataURL(file)
    },

    // SAVE IMG
    async saveIMG(file, key) {
      const fd = new FormData()
      fd.append('imagesfile', file)
      let res = (await MNGServices.saveImages(fd, 'weddingHalls', key, this.auth.token)).data
      // console.log(res)
      return res
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
  box-shadow: 5px 5px 5px #888;
  color: black
}

.fixed{
  width: 170px;
  position: fixed;
  bottom: 0.5%;
  right: 0.5%;
  z-index: 1;
}

.undo{
  width: 170px;
  position: fixed;
  bottom: 0.5%;
  right: 18.5%;
  z-index: 1;
}

.confirm{
  width: 170px;
  position: fixed;
  bottom: 0.5%;
  right: 36.5%;
  z-index: 1;
}

#editList {
  position: absolute;
  width: 100%;
  min-height: 200%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
}

#editList .close{
  position: fixed;
  top: 0;
  right: 0;
  color: skyblue;
  font-size: 50px;
}

#editList input,
#editList textarea{
  max-width: 60%;
  margin: 0 auto 20px auto;
  color: rgb(10, 10, 110);
  font-size: 20px
}

#editList label{
  margin-left: 20%;
  font-size: 20px
}
</style>
