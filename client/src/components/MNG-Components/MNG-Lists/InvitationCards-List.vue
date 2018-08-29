<template>
  <div style="height:1000px">
    <h1 class="mx-auto mt-2" style="width: 600px">Invitaion Cards list page content</h1><hr/>
    <form @submit="sendReq()">
      <h4>main info</h4>
      <section id="main-info">
        <input class="form-control" type="text" placeholder="name" v-model="req.info.name"/>
        <input class="form-control" type="text" placeholder="governorate" v-model="req.info.governorate"/>
        <input class="form-control" type="text" placeholder="city" v-model="req.info.city"/>
        <input class="form-control" type="text" placeholder="address" v-model="req.info.address"/>
      </section><hr/>

      <section id="service-info">
        <div>
          <h5>Invitaion Cards:</h5>
          <input type="checkbox" v-model="visibility.InvitaionCards">
          <label for="checkbox">available: {{visibility.InvitaionCards}}</label><br/>

          <div v-if="visibility.InvitaionCards" class="service-options" id="InvitaionCards">
            <span>image for car: </span><input type="file" @change="showServiceIMG($event, 'InvitaionCards')"/><br/>
            <span>sort of car: </span><input class="form-control" type="text" placeholder="sort of car"/><br/>
            <span>price: </span><input class="form-control" type="number" placeholder="price"/><br/>
            <button class="btn btn-success" @click.prevent="addItem('InvitaionCards')">add</button>
            <button class="btn btn-danger" @click.prevent="undoItem('InvitaionCards')">undo</button>
          </div><hr/>
          <div class="bookedDays">
            <h4>select all days that allready booked</h4>

            <input class= "d-block" type="date">
            <button class="mt-3 btn btn-warning" @click.prevent="addDate">add date</button>
            <button class="mt-3 btn btn-danger" @click.prevent="undoDate">undo date</button>
          </div>
        </div>
      </section>
       <button class="btn btn-info btn-block mt-5" @click.prevent="saveServicesIMGS">Save all images</button>
      <input class="btn btn-success btn-block mt-5" type="submit"/>
    </form>

    <div id="showData">
      <h4>the existed services</h4><hr/>
      <div class="collection">
        <h5>Invitaion Cards</h5>
        <div class="">{{req.services.InvitaionCards}}</div>
        <img :src="img" v-for="(img, index) in showImgs.InvitaionCards" :key="index"/>
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
        InvitaionCards: []
      },
      error: null,

// =================={ PREREQ }========================
      preReq: {
        info: {
        },
        services: {
          InvitaionCards: []
        }
      },

// =================={ VISIBILITY }========================
      visibility: {
        InvitaionCards: false
      },

// =================={ REQ }========================
      req: {
        info: {
          name: null,
          governorate: null,
          city: null,
          address: null
        },
        services: {
          InvitaionCards: []
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

// ================{ SAVE SERVICES IMGS }================
async saveServicesIMGS() {
      Object.keys(this.req.services).map(async (key) => {
        const fd = new FormData()

        for (let i = 0; i < this.req.services[key].length; i++) {
          fd.append('imagesfile', this.req.services[key][i].imgID[0])
        }
        let res = (await MNGServices.saveImages(fd, 'InvitaionCards', key)).data

        res.map((img) => {
          this.req.services[key].forEach((single) => {
            if (single.imgID[0].name == img.originalname) {
            single.imgID = img.filename
            }
          })
        })

      })
      console.log('done')
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
        let DataRes = (await MNGServices.addMember(this.req, 'MNG-InvitationCards-Member')).data

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

