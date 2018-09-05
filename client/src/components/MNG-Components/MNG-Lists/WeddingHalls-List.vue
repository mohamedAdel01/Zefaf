<template>
  <div style="height:3000px">
    <h1 class="mx-auto mt-2" style="width: 600px">wedding halls list page content</h1><hr/>
    <form @submit.prevent="sendReq">

<!-- ===================== { MAIN-INFO } ======================== -->
      <section id="main-info">
        <h4>main-info</h4>
        <input class="form-control" type="text" placeholder="name" v-model="req.info.name"/>
        <input class="form-control" type="text" placeholder="governorate" v-model="req.info.governorate"/>
        <input class="form-control" type="text" placeholder="city" v-model="req.info.city"/>
        <input class="form-control" type="text" placeholder="address" v-model="req.info.address"/>
        <input class="form-control" type="number" placeholder="max range of people" v-model="req.info.NOPeople"/>
        <input class="form-control" type="number" placeholder="price of one hour" v-model="req.info.hourPrice"/>
        <input class="form-control" type="number" placeholder="price for rent the wedding hall empty" v-model="req.info.priceRent"/>
        <textarea class="form-control" placeholder="type some information" v-model="req.info.detail"></textarea>

        <div class="clearfix"></div>
      <!-- MAIN IMGS FOR THE WEDDING HALL -->
        <div class="mt-2 mb-3 border border-info">
          <h5>select some picture </h5>
          <div class="showimg">
            <img :src="img" v-for="(img , index) in showImgs.mainIMGS" :key="index"/>
          </div>
          <input class="pics" type="file" name="file" multiple @change="showMainIMGS($event)"/>
        </div><hr/>
      </section>

<!-- ===================== { SERVICE-INFO } ======================== -->
      <section class="sub-services">
        <h4>services-prices</h4>

      <!-- ===== { songer } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">songer:</h5>
          <input type="checkbox" v-model="visibility.songer">
          <label for="checkbox">available: {{ visibility.songer }}</label><br/>

          <div v-if="visibility.songer" class="service-options" id="songer">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'songer')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('songer')">add</button>
            <button @click.prevent="undo('songer')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { Dj } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">Dj-music:</h5>
          <input type="checkbox" v-model="visibility.Dj">
          <label for="checkbox">available: {{ visibility.Dj }}</label><br/>

          <div v-if="visibility.Dj" class="service-options" id="Dj">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'Dj')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('Dj')">add</button>
            <button @click.prevent="undo('Dj')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { flint } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">the flint:</h5>
          <input type="checkbox" v-model="visibility.flint">
          <label for="checkbox">available: {{ visibility.flint }}</label><br/>

          <div v-if="visibility.flint" class="service-options" id="flint">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'flint')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('flint')">add</button>
            <button @click.prevent="undo('flint')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { video team } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">video team:</h5>
          <input type="checkbox" v-model="visibility.videoTeam">
          <label for="checkbox">available: {{ visibility.videoTeam }}</label><br/>

          <div v-if="visibility.videoTeam" class="service-options" id="videoTeam">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'videoTeam')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('videoTeam')">add</button>
            <button @click.prevent="undo('videoTeam')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { chairs } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">chairs:</h5>
          <input type="checkbox" v-model="visibility.chairs">
          <label for="checkbox">available: {{ visibility.chairs }}</label><br/>

          <div v-if="visibility.chairs" class="service-options" id="chairs">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'chairs')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('chairs')">add</button>
            <button @click.prevent="undo('chairs')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { tables } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">tables:</h5>
          <input type="checkbox" v-model="visibility.tables">
          <label for="checkbox">available: {{ visibility.tables }}</label><br/>

          <div v-if="visibility.tables" class="service-options" id="tables">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'tables')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('tables')">add</button>
            <button @click.prevent="undo('tables')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { shows } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">shows:</h5>
          <input type="checkbox" v-model="visibility.shows">
          <label for="checkbox">available: {{ visibility.shows }}</label><br/>

          <div v-if="visibility.shows" class="service-options" id="shows">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'shows')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('shows')">add</button>
            <button @click.prevent="undo('shows')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { drinks } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">drinks:</h5>
          <input type="checkbox"  v-model="visibility.drinks">
          <label for="checkbox">available: {{ visibility.drinks }}</label><br/>

          <div v-if="visibility.drinks" class="service-options" id="drinks">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'drinks')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('drinks')">add</button>
            <button @click.prevent="undo('drinks')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { buffet } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">buffet:</h5>
          <input type="checkbox" v-model="visibility.buffet">
          <label for="checkbox">available: {{ visibility.buffet }}</label><br/>

          <div v-if="visibility.buffet" class="service-options" id="buffet">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'buffet')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('buffet')">add</button>
            <button @click.prevent="undo('buffet')">undo</button>
          </div>
        </div><hr/>

      <!-- ===== { setMenu } ===== -->

        <div class="service-prices">
          <h5 class="mr-5">setMenu:</h5>
          <input type="checkbox" v-model="visibility.setMenu">
          <label for="checkbox">available: {{ visibility.setMenu }}</label><br/>

          <div v-if="visibility.setMenu" class="service-options" id="setMenu">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'setMenu')"/><br/>
            <span>name: </span><input class="form-control" type="text"/><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button @click.prevent="add('setMenu')">add</button>
            <button @click.prevent="undo('setMenu')">undo</button>
          </div>
        </div><hr/>

<!-- ===================== { CALENDER } ======================== -->
      <div class="bookedDays">
        <h4>select all days that allready booked</h4>

        <input class= "d-block" type="date">
        <button class="mt-3 btn btn-warning" @click.prevent="addDate">add date</button>
        <button class="mt-3 btn btn-danger" @click.prevent="undoDate">undo date</button>
      </div>

      </section>
      <button class="btn btn-info btn-block mt-5" @click.prevent="saveAllImgs">Save all images</button>
      <input type="submit" class="btn btn-success btn-block"/>
    </form>

<!-- ===================== { ALL CHOOOSEN SERVICES } ======================== -->
    <div id="showData">
      <h4>the existed services</h4><hr/>
      <div class="collection">
        <h5>songer</h5>
        <div class="">{{req.services.songer}}</div>
        <img :src="img" v-for="(img, index) in showImgs.songer" :key="index"/>
      </div>
      <div class="collection">
        <h5>Dj</h5>
        <div class="">{{req.services.Dj}}</div>
        <img :src="img" v-for="(img, index) in showImgs.Dj" :key="index"/>
      </div>
      <div class="collection">
        <h5>flint</h5>
        <div class="">{{req.services.flint}}</div>
        <img :src="img" v-for="(img, index) in showImgs.flint" :key="index"/>
      </div>
      <div class="collection">
        <h5>videoTeam</h5>
        <div class="">{{req.services.videoTeam}}</div>
        <img :src="img" v-for="(img, index) in showImgs.videoTeam" :key="index"/>
      </div>
      <div class="collection">
        <h5>chairs</h5>
        <div class="">{{req.services.chairs}}</div>
        <img :src="img" v-for="(img, index) in showImgs.chairs" :key="index"/>
      </div>
      <div class="collection">
        <h5>tables</h5>
        <div class="">{{req.services.tables}}</div>
        <img :src="img" v-for="(img, index) in showImgs.tables" :key="index"/>
      </div>
      <div class="collection">
        <h5>shows</h5>
        <div class="">{{req.services.shows}}</div>
        <img :src="img" v-for="(img, index) in showImgs.shows" :key="index"/>
      </div>
      <div class="collection">
        <h5>drinks</h5>
        <div class="">{{req.services.drinks}}</div>
        <img :src="img" v-for="(img, index) in showImgs.drinks" :key="index"/>
      </div>
      <div class="collection">
        <h5>buffet</h5>
        <div class="">{{req.services.buffet}}</div>
        <img :src="img" v-for="(img, index) in showImgs.buffet" :key="index"/>
      </div>
      <div class="collection">
        <h5>setMenu</h5>
        <div class="">{{req.services.setMenu}}</div>
        <img :src="img" v-for="(img, index) in showImgs.setMenu" :key="index"/>
      </div>
      <div class="collection">
        <h5>select all days that allready booked</h5>
        <span class="ml-2 d-block" v-for="(date, index) in req.dates" :key="index">{{index + 1}}) {{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MNGServices from '../../../services/MNG-Services'

export default {
  data () {
    return {
      Token: null,
      showImgs: {
        selectedIMG: null,
        mainIMGS: [],
        songer: [],
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

// =================={ PREREQ }========================
      preReq: {
        info: {
          imgSelected: [],
          numOfFiles: null
        },
        services: {
          songer: '',
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

// =================={ VISIBILITY }========================
      visibility: {
        songer: false,
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

// =================={ REQ }========================
      req: {
        info: {
          name: null,
          governorate: null,
          city: null,
          address: null,
          NOPeople: null,
          hourPrice: null,
          priceRent: null,
          detail: null,
          ImgsName: []
        },
        services: {
          songer: [],
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
        dates:[]
      }
    }
  },
  methods: {
// ================{ ADDING SERVICES }================
    add(sort) {
      var obj= {
        imgID: this.preReq.services[sort],
        name: $(`#${sort} input:nth-of-type(2)`).val(),
        price: $(`#${sort} input:nth-of-type(3)`).val()
      }

      if (obj.imgID.length === 0) {
        obj.imgID = 'empty'
      }

      this.error = null
      const areAllFieldsFilledIn = Object.keys(obj).every(key => !!obj[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill the INPUTS correctly!!' //will show as notification
        alert(this.error)
        return
      }

      if(obj.price <= 0) {
        this.error = 'please fill the PRICE correctly!!' //will show as notification
        alert(this.error)
        return
      }

      this.showImgs[sort].push(this.showImgs.selectedIMG)
      this.req.services[sort].push(obj)

      this.preReq.services[sort] = ''
      $(`#${sort} input:nth-of-type(2)`).val('')
      $(`#${sort} input:nth-of-type(3)`).val('')

    },

// ================{ UNDO SERVICES }================
    undo(sort) {
      this.req.services[sort].pop()
      this.showImgs[sort].pop()
    },

// ================{ ADD DATE }================
    addDate() {
      var date = $('input[type="date"]').val()
      if (date == '') {return}
      this.req.dates.push(date)
    },

// ================{ UNDO DATE }================
    undoDate() {
      this.req.dates.pop()
    },

// ================{ SHOW MAIN IMGS }================
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

// ================{ SHOW SERVICES IMGS }================
async showServiceIMG(e, sort) {
    this.showImgs.selectedIMG = null
    var file = await e.target.files
    console.log(file)
    this.preReq.services[sort] = file
    // console.log(this.preReq)

    var picReader = new FileReader()
    picReader.onload = (event) => {
      var picFile = event.target
      this.showImgs.selectedIMG = picFile.result
    }
      picReader.readAsDataURL(file[0])
  },

// ================{ SAVE MAIN IMGS }================
  async saveMainIMGS() {
    const fd = new FormData()
    for (let i = 0; i < this.preReq.info.numOfFiles; i++) {
      fd.append('imagesfile', this.preReq.info.imgSelected[0][i])
    }
    let res = (await MNGServices.saveImages(fd, 'weddingHalls', 'main', this.Token)).data
    // console.log(res)
    res.map((img) => {
      this.req.info.ImgsName.push(img.filename)
    })
  },

// ================{ SAVE SERVICES IMGS }================
async saveServicesIMGS() {
  Object.keys(this.req.services).map(async (key) => {
    const fd = new FormData()

    for (let i = 0; i < this.req.services[key].length; i++) {
      fd.append('imagesfile', this.req.services[key][i].imgID[0])
    }
    let res = (await MNGServices.saveImages(fd, 'weddingHalls', key, this.Token)).data

    res.map((img) => {
      this.req.services[key].forEach((single) => {
        if (single.imgID[0].name == img.originalname) {
         single.imgID = img.filename
        }
      })
    })

  })
},

// ================{ GET ALL IMAGES NAME FROM DB }================
async saveAllImgs() {
// DELETE EMPTY ARRAY IN SERVICES OBJ
    Object.keys(this.req.services).filter(key => {
      if(this.req.services[key].length === 0) {
        delete this.req.services[key]
      }
    })

    try {
  // SEND MAIN IMAGES TO BACK-END
        await this.saveMainIMGS()

  // SAVE SERVICES IMAGES TO BACK-END
        await this.saveServicesIMGS()
        console.log('done')

    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  },

// ================{ SEND REQ }================
async sendReq() {
  // CHECK INFO FIELDS IN REQ OBJ
    const areAllFieldsFilledIn = Object.keys(this.req.info).every(key => !!this.req.info[key])
    if (!areAllFieldsFilledIn) {
      console.log('fill all the require fields')
      return
    }

      try {
      // SEND ALL REQ TO BACK-END
        let DataRes = (await MNGServices.addMember(this.req, 'MNG-WeddingHalls-Member', this.Token)).data

        console.log(DataRes)

      } catch (error) {
        console.log(error.response)
      }
    }

  },
    mounted() {
      this.Token = this.$store.state.MNG.token
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  width: 550px;
  margin: 0 20px;
  float: left;
  padding: 10px;
  border: 2px solid #ddd;
}

#showData {
  width: 550px;
  margin: 0 20px;
  float: left;
  border: 2px solid #ddd;
  padding: 10px
}

.collection {
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 5px 5px 5px #999;
  margin-bottom: 10px
}

img{
  width: 100px;
  height: 100px;
  border: 4px solid #777;
  margin: 5px 4px;
  border-radius: 5px
}

#main-info input{
  margin: 10px 0
}

</style>
