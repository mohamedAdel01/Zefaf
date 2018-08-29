<template>
  <div style="height:1000px">
    <h1 class="mx-auto mt-2" style="width: 600px">Photographers list page content</h1><hr/>
    <form @submit="sendReq()">
      <h4>main info</h4>
      <section id="main-info">
        <input class="form-control" type="text" placeholder="name" v-model="req.info.name"/>
        <input class="form-control" type="text" placeholder="governorate" v-model="req.info.governorate"/>
        <input class="form-control" type="text" placeholder="city" v-model="req.info.city"/>
        <input class="form-control" type="text" placeholder="address" v-model="req.info.address"/>

        <!-- MAIN IMGS FOR THE WEDDING HALL -->
        <div class="mt-2 mb-3 border border-info">
          <h5>select some picture </h5>
          <div class="showimg">
            <img :src="img" v-for="(img , index) in showImgs.mainIMGS" :key="index"/>
          </div>
          <input class="pics" type="file" name="file" multiple @change="showMainIMGS($event)"/>
        </div>
      </section><hr/>

      <section id="service-info">
        <h4>Services and Prices</h4>

        <div class="service-prices">
          <h5 class="mr-5">photo Session:</h5>
          <input type="checkbox" v-model="visibility.photoSession">
          <label for="checkbox">available: {{ visibility.photoSession }}</label><br/>

          <div v-if="visibility.photoSession" class="service-options" id="photoSession">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'photoSession')"/><br/>
            <span>details: </span><textarea class="form-control" placeholder="type all details"></textarea><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button class="btn btn-success" @click.prevent="addItem('photoSession')">add</button>
            <button class="btn btn-danger" @click.prevent="undoItem('photoSession')">undo</button>
          </div>
        </div><hr/>

        <div class="service-prices">
          <h5 class="mr-5">wedding offers:</h5>
          <input type="checkbox" v-model="visibility.weddingOffers">
          <label for="checkbox">available: {{ visibility.weddingOffers }}</label><br/>

          <div v-if="visibility.weddingOffers" class="service-options" id="weddingOffers">
            <span>image: </span><input type="file" @change="showServiceIMG($event, 'weddingOffers')"/><br/>
            <span>details: </span><textarea class="form-control" placeholder="type all details"></textarea><br/>
            <span>price: </span><input class="form-control" type="number"/><br/>
            <button class="btn btn-success" @click.prevent="addItem('weddingOffers')">add</button>
            <button class="btn btn-danger" @click.prevent="undoItem('weddingOffers')">undo</button>
          </div>
        </div><hr/>

          <div class="bookedDays">
            <h4>select all days that allready booked</h4>

            <input class= "d-block" type="date">
            <button class="mt-3 btn btn-warning" @click.prevent="addDate">add date</button>
            <button class="mt-3 btn btn-danger" @click.prevent="undoDate">undo date</button>
          </div>
      </section>
       <button class="btn btn-info btn-block mt-5" @click.prevent="saveAllImgs">Save all images</button>
      <input class="btn btn-success btn-block mt-5" type="submit"/>
    </form>

    <div id="showData">
      <h4>the existed services</h4><hr/>
      <div class="collection">
        <h5>Photo Session</h5>
        <div class="">{{req.services.photoSession}}</div>
        <img :src="img" v-for="(img, index) in showImgs.photoSession" :key="index"/>
      </div>

      <div class="collection">
        <h5>Wedding Offers</h5>
        <div class="">{{req.services.weddingOffers}}</div>
        <img :src="img" v-for="(img, index) in showImgs.weddingOffers" :key="index"/>
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
       showImgs: {
        selectedIMG: null,
        mainIMGS: [],
        photoSession: [],
        weddingOffers: []
      },
      error: null,

// =================={ PREREQ }========================
      preReq: {
        info: {
          imgSelected: [],
          numOfFiles: null
        },
        services: {
          photoSession: [],
          weddingOffers: []
        }
      },

// =================={ VISIBILITY }========================
      visibility: {
        photoSession: false,
        weddingOffers: false
      },

// =================={ REQ }========================
      req: {
        info: {
          name: null,
          governorate: null,
          city: null,
          address: null,
          ImgsName: []
        },
        services: {
          photoSession: [],
          weddingOffers: []
        },
        dates:[]
      }

    }
  },
  methods: {
// ================{ ADDING SERVICES }================
    addItem(sort) {
      var obj= {
        imgID: this.preReq.services[sort],
        details: $(`#${sort} textarea`).val(),
        price: $(`#${sort} input:nth-of-type(2)`).val()
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
      $(`#${sort} textarea`).val('')
      $(`#${sort} input:nth-of-type(2)`).val('')

    },

// ================{ UNDO SERVICES }================
    undoItem(sort) {
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
      this.preReq.services[sort] = file

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
    let res = (await MNGServices.saveImages(fd, 'Photographers', 'main')).data
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
        let res = (await MNGServices.saveImages(fd, 'Photographers', key)).data

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
        let DataRes = (await MNGServices.addMember(this.req, 'MNG-Photographers-Member')).data

        console.log(DataRes)

      } catch (error) {
        console.log(error.response)
      }
    }

  }
}
</script>

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
