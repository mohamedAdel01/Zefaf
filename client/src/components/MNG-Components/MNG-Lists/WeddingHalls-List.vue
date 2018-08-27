<template>
  <div style="height:3000px">
    <h1 class="mx-auto mt-2" style="width: 600px">wedding halls list page content</h1>
    <form style="width: 500px; margin: 10px auto" @submit.prevent="sendReq"><hr/>

<!-- ===================== { MAIN-INFO } ======================== -->
      <section class="main-info">
        <h4>main-info</h4>
        <input class="form-control" type="text" placeholder="name" v-model="req.info.name"/>
        <input class="form-control" type="text" placeholder="governorate" v-model="req.info.governorate"/>
        <input class="form-control" type="text" placeholder="city" v-model="req.info.city"/>
        <input class="form-control" type="text" placeholder="address" v-model="req.info.address"/>
        <input class="form-control" type="number" placeholder="max range of people" v-model="req.info.NOPeople"/>
        <input class="form-control" type="number" placeholder="price for rent the wedding hall empty" v-model="req.info.priceRent"/>
        <textarea class="form-control" placeholder="type some information" v-model="req.info.detail"></textarea>

        <div class="clearfix"></div>
        <div class="mt-2 mb-3 border border-info">
          <p>select some picture </p>
          <input class="pics" type="file" name="file" multiple @change="showMainIMGS($event)"/>
          <div class="showimg">
            <img :src="img" v-for="(img , index) in showImgs.mainIMGS" :key="index"/>
          </div>
        </div>
        <div id="map"></div><hr/>
      </section>

<!-- ===================== { SERVICE-INFO } ======================== -->
      <section class="sub-services">
        <h4>services-prices</h4>

<!-- ===== { Dj } ===== -->

        <div class="service-prices">
          <p class="mr-5">Dj-music:</p>
          <input type="checkbox" id="Dj" v-model="visibility.Dj">
          <label for="checkbox">available: {{ visibility.Dj }}</label><br/>

          <div v-if="visibility.Dj" class="service-options" id="Dj">
            <div>{{req.services.Dj}}</div>
            <img :src="img" v-for="(img, index) in showImgs.Dj" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'Dj')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('Dj')">add</button>
            <button @click.prevent="undo('Dj')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { flint } ===== -->

        <div class="service-prices">
          <p class="mr-5">the flint:</p>
          <input type="checkbox" id="flint" v-model="visibility.flint">
          <label for="checkbox">available: {{ visibility.flint }}</label><br/>

          <div v-if="visibility.flint" class="service-options" id="flint">
            <div>{{req.services.flint}}</div>
            <img :src="img" v-for="(img, index) in showImgs.flint" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'flint')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('flint')">add</button>
            <button @click.prevent="undo('flint')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { video team } ===== -->

        <div class="service-prices">
          <p class="mr-5">video team:</p>
          <input type="checkbox" id="videoTeam" v-model="visibility.videoTeam">
          <label for="checkbox">available: {{ visibility.videoTeam }}</label><br/>

          <div v-if="visibility.videoTeam" class="service-options" id="videoTeam">
            <div>{{req.services.videoTeam}}</div>
            <img :src="img" v-for="(img, index) in showImgs.videoTeam" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'videoTeam')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('videoTeam')">add</button>
            <button @click.prevent="undo('videoTeam')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { chairs } ===== -->

        <div class="service-prices">
          <p class="mr-5">chairs:</p>
          <input type="checkbox" id="chairs" v-model="visibility.chairs">
          <label for="checkbox">available: {{ visibility.chairs }}</label><br/>

          <div v-if="visibility.chairs" class="service-options" id="chairs">
            <div>{{req.services.chairs}}</div>
            <img :src="img" v-for="(img, index) in showImgs.chairs" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'chairs')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('chairs')">add</button>
            <button @click.prevent="undo('chairs')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { tables } ===== -->

        <div class="service-prices">
          <p class="mr-5">tables:</p>
          <input type="checkbox" id="tables" v-model="visibility.tables">
          <label for="checkbox">available: {{ visibility.tables }}</label><br/>

          <div v-if="visibility.tables" class="service-options" id="tables">
            <div>{{req.services.tables}}</div>
            <img :src="img" v-for="(img, index) in showImgs.tables" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'tables')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('tables')">add</button>
            <button @click.prevent="undo('tables')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { shows } ===== -->

        <div class="service-prices">
          <p class="mr-5">shows:</p>
          <input type="checkbox" id="shows" v-model="visibility.shows">
          <label for="checkbox">available: {{ visibility.shows }}</label><br/>

          <div v-if="visibility.shows" class="service-options" id="shows">
            <div>{{req.services.shows}}</div>
            <img :src="img" v-for="(img, index) in showImgs.shows" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'shows')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('shows')">add</button>
            <button @click.prevent="undo('shows')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { drinks } ===== -->

        <div class="service-prices">
          <p class="mr-5">drinks:</p>
          <input type="checkbox" id="drinks" v-model="visibility.drinks">
          <label for="checkbox">available: {{ visibility.drinks }}</label><br/>

          <div v-if="visibility.drinks" class="service-options" id="drinks">
            <div>{{req.services.drinks}}</div>
            <img :src="img" v-for="(img, index) in showImgs.drinks" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'drinks')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('drinks')">add</button>
            <button @click.prevent="undo('drinks')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { buffet } ===== -->

        <div class="service-prices">
          <p class="mr-5">buffet:</p>
          <input type="checkbox" id="buffet" v-model="visibility.buffet">
          <label for="checkbox">available: {{ visibility.buffet }}</label><br/>

          <div v-if="visibility.buffet" class="service-options" id="buffet">
            <div>{{req.services.buffet}}</div>
            <img :src="img" v-for="(img, index) in showImgs.buffet" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'buffet')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('buffet')">add</button>
            <button @click.prevent="undo('buffet')">undo</button>
          </div>
        </div><hr/>

<!-- ===== { setMenu } ===== -->

        <div class="service-prices">
          <p class="mr-5">setMenu:</p>
          <input type="checkbox" id="setMenu" v-model="visibility.setMenu">
          <label for="checkbox">available: {{ visibility.setMenu }}</label><br/>

          <div v-if="visibility.setMenu" class="service-options" id="setMenu">
            <div>{{req.services.setMenu}}</div>
            <img :src="img" v-for="(img, index) in showImgs.setMenu" :key="index"/>
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'setMenu')"/><br/>
            <span>type: </span><input type="text"/><br/>
            <span>price: </span><input type="number"/> pounds<br/>
            <button @click.prevent="add('setMenu')">add</button>
            <button @click.prevent="undo('setMenu')">undo</button>
          </div>
        </div><hr/>

<!-- ===================== { CALENDER } ======================== -->
        <h4>select all days that allready booked</h4>
        <div>
          <span class="ml-2" v-for="(date, index) in req.services.dates" :key="index">{{ date }}</span>
        </div>

        <select>
          <option :value="days" v-for="(days, index) in calendar.days" :key="index">{{ days }}</option>
        </select>
        <select>
          <option :value="months" v-for="(months, index) in calendar.months" :key="index">{{ months }}</option>
        </select>
        <select>
          <option :value="years" v-for="(years, index) in calendar.years" :key="index">{{ years }}</option>
        </select>
      </section>
      <button class="mt-3 btn btn-warning" @click="addDate">add date</button>
      <button class="mt-3 btn btn-danger" @click="undoDate">undo date</button>
      <input type="submit" class="btn btn-success btn-block"/>
    </form>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MNGServices from '../../../services/MNG-Services'

export default {
  data () {
    return {
      dates: {
        date: []
      },
      showImgs: {
        test: null,
        mainIMGS: [],
        Dj: [],
        flint: [],
        videoTeam: [],
        chairs: [],
        tables: [],
        shows: [],
        drinks: [],
        buffet: [],
        setMenu: []
      },
      error: null,

// ==========================================
      preReq: {
        info: {
          imgSelected: [],
          numOfFiles: null
        },
        services: {
          Dj: '',
          flint: '',
          videoTeam: '',
          chairs: '',
          tables: '',
          shows: '',
          drinks: '',
          buffet: '',
          setMenu: ''
        }
      },

// ==========================================
      visibility: {
        Dj: false,
        flint: false,
        videoTeam: false,
        chairs: false,
        tables: false,
        shows: false,
        drinks: false,
        buffet: false,
        setMenu: false
      },

// ==========================================
      req: {
        info: {
          name: null,
          governorate: null,
          city: null,
          address: null,
          NOPeople: null,
          priceRent: null,
          detail: null,
          ImgsName: []
        },
        services: {
          Dj: [],
          flint: [],
          videoTeam: [],
          chairs: [],
          tables: [],
          shows: [],
          drinks: [],
          buffet: [],
          setMenu: [],
          dates: []
        }
      }
    }
  },
  methods: {

    add(sort) {
      var obj= {
        imgID: this.preReq.services[sort],
        type: $(`#${sort} input:nth-of-type(2)`).val(),
        price: $(`#${sort} input:nth-of-type(3)`).val()
      }

      if (obj.imgID.length === 0) {
        obj.imgID = 'empty'
      }

      this.error = null
      const areAllFieldsFilledIn = Object.keys(obj).every(key => !!obj[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill the inputs correctly!!' //will show as notification
        alert(this.error)
        return
      }

      if(obj.price <= 0) {
        this.error = 'please fill the price correctly!!' //will show as notification
        alert(this.error)
        return
      }

      this.showImgs[sort].push(this.showImgs.test)
      this.req.services[sort].push(obj)
      // console.log(this.req)
    },

// ================================================
    undo(sort) {
      this.req.services[sort].pop()
      this.showImgs[sort].pop()
    },

// =================================================
    addDate() {
      var obj = {
        d: $('select:nth-of-type(1)').val(),
        m: $('select:nth-of-type(2)').val(),
        y: $('select:nth-of-type(3)').val()
      }

      const areAllFieldsFilledIn = Object.keys(obj).every(key => !!obj[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill the inputs correctly!!' //will show as notification
        alert(this.error)
        return
      }

      this.req.services.dates.push(obj)
    },

    // ===============================
    undoDate() {
      this.req.services.dates.pop()
    },

// ==================================================
async showMainIMGS(e) {
      this.preReq.info.imgSelected = []
      this.showImgs.mainIMGS = []

      var files = await e.target.files
      var numOfFiles = files.length
      this.preReq.info.numOfFiles = numOfFiles

      this.preReq.info.imgSelected.push(files)
      // console.log(this.preReq.info.imgSelected)

      for(let i = 0; i < numOfFiles; i++) {
        var file = files[i]
        var picReader = new FileReader()
        picReader.onload = (event) => {
          var picFile = event.target
          this.showImgs.mainIMGS.push(picFile.result)
        }
        picReader.readAsDataURL(file)
      }
    },

//====================================================
async showServiceIMG(e, sort) {
    this.showImgs.test = null
    var file = await e.target.files
    console.log(file)
    this.preReq.services[sort] = file
    // console.log(this.preReq)

    var picReader = new FileReader()
    picReader.onload = (event) => {
      var picFile = event.target
      this.showImgs.test = picFile.result
    }
      picReader.readAsDataURL(file[0])
  },

// =====================================================
  async saveMainIMGS() {
    const fd = new FormData()
    for (let i = 0; i < this.preReq.info.numOfFiles; i++) {
      fd.append('imagesfile', this.preReq.info.imgSelected[0][i])
    }
    let res = (await MNGServices.saveImages(fd, 'weddingHalls', 'main')).data
    // console.log(res)
    res.map((img) => {
      this.req.info.ImgsName.push(img.filename)
    })
  },

// ====================================================
async saveServicesIMGS() {
  Object.keys(this.req.services).map(async (key) => {
    const fd = new FormData()

    for (let i = 0; i < this.req.services[key].length; i++) {
      fd.append('imagesfile', this.req.services[key][i].imgID[0])
    }
    let res = (await MNGServices.saveImages(fd, 'weddingHalls', key)).data

    res.map((img) => {
      this.req.services[key].forEach((single) => {
        if (single.imgID[0].name == img.originalname) {
          single.imgID = img.filename
        }
      })
    })

  })
},


// =====================================================
async sendReq() {
// CHECK INFO FIELDS IN REQ OBJ
    const areAllFieldsFilledIn = Object.keys(this.req.info).every(key => !!this.req.info[key])
    if (!areAllFieldsFilledIn) {
      // console.log('fill all the require fields')
      return
    }

// DELETE EMPTY ARRAY IN SERVICES OBJ
      Object.keys(this.req.services).filter(key => {
        if(this.req.services[key].length === 0) {
          delete this.req.services[key]
        }
      })

      try {

// SEND MAIN IMAGES TO BACK-END
      this.saveMainIMGS()

// SAVE SERVICES IMAGES TO BACK-END
      this.saveServicesIMGS()

// SEND ALL REQ TO BACK-END
      console.log(this.req)

// SEND ALL REQ DATA TO BACK-END


      } catch (error) {
        // console.log(error.response)
      }
    }
  },
  computed: {
    calendar() {
      var date = {
        days: [],
        months: [],
        years: []
      }

      for(let d = 1; d < 32; d++) {
        date.days.push(d)
      }
      for(let m = 1; m < 13; m++) {
        date.months.push(m)
      }
      for(let y = 2018; y < 2040; y++) {
        date.years.push(y)
      }

      return date
    }
  },

  mounted() {
  // CONFIGURATION FOR THE MAPBOX
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1lZDAwMSIsImEiOiJjamt1MGk5MHUwMXgwM3BxazN3cXU5M2RtIn0.JfdQvIy0cRbQOanBaL2nww';
    new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [26.8206, 30.8025],
        zoom: 3
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 100px;
  height: 100px;
  border: 3px solid #777;
  margin: 5px 4px;
  border-radius: 5px
}

input{
  margin: 5px 0
}

.service-prices input{
  margin: 5px 10px
}

#map {
  width: 100%;
  height: 350px;
}
</style>
