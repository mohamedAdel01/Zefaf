<template>
  <div style="height:1000px">
    <h1 class="mx-auto mt-2" style="width: 600px">Wedding Suits list page content</h1><hr/>
    <form @submit="sendReq()">
      <h4>main info</h4>
      <section id="main-info">
        <input class="form-control" type="text" placeholder="name" v-model="req.info.name"/>
        <input class="form-control" type="text" placeholder="governorate" v-model="req.info.governorate"/>
        <input class="form-control" type="text" placeholder="city" v-model="req.info.city"/>
        <input class="form-control" type="text" placeholder="address" v-model="req.info.address"/>
      </section><hr/>

      <section id="service-info">
        <h4>services and prices</h4>
        <div>
          <h5>Suits:</h5>
          <input type="checkbox" v-model="visibility.Suits">
          <label for="checkbox">available: {{ visibility.Suits }}</label><br/>

          <div v-if="visibility.Suits" class="service-options" id="Suits">
            <span>image for Suits: </span><input type="file" @change="showServiceIMG($event, 'Suits')"/><br/>
            <span class="d-block">choose available colors for this suit: </span>
            <div class="pikedColors mb-3">
              <span class="piked" v-for="(color,index) in pickedColor" :key="index" :style="{background: color}" @click="deleteColor(index)"></span>
              <div class="clearfix"></div>
            </div>
            <div class="colors">
              <div class="color" v-for="(color,index) in colors" :key="index" @click="addColor(color)">
                <span :style="{background: color}"></span>
                <span class="ml-2">{{color}}</span>
                <div class="clearfix"></div>
              </div>
            </div>

            <div id="pieces">
              <div>{{ smallPieces }}</div>
              <input type="text" placeholder="name of Piece">
              <input type="number" placeholder="price of piece">
              <button @click.prevent="addPiece">add</button>
              <button @click.prevent="undoPiece">undo</button>
            </div>

            <div id="2inp">
              <span>details for Suits: </span><textarea class="form-control" placeholder="details for Suits"></textarea><br/>
              <span>size: </span><input class="form-control" type="text" placeholder="Size"/><br/>
              <span>price: </span><input class="form-control" type="number" placeholder="price"/><br/>
              <button class="btn btn-success" @click.prevent="addItem('Suits')">add</button>
              <button class="btn btn-danger" @click.prevent="undoItem('Suits')">undo</button>
            </div>
          </div><hr/>
        </div>
      </section>
       <button class="btn btn-info btn-block mt-5" @click.prevent="saveServicesIMGS">Save all images</button>
      <input class="btn btn-success btn-block mt-5" type="submit"/>
    </form>

    <div id="showData">
      <h4>the existed services</h4><hr/>
      <div class="collection">
        <h5>Suits</h5>
        <div class="">{{req.services.Suits}}</div>
        <img :src="img" v-for="(img, index) in showImgs.Suits" :key="index"/>
        <span class="piked" v-for="(color,index) in req.services.colors" :key="index" :style="{background: color}"></span>
      </div>
    </div>
  </div>
</template>

<script>
import MNGServices from '../../../services/MNG-Services'

export default {
  data () {
    return {
      colors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],
      pickedColor: [],
      showImgs: {
        selectedIMG: null,
        Suits: []
      },
      error: null,

// ================{ SAMLL PIECES }===================
      smallPieces:[],

// =================={ PREREQ }========================
      preReq: {
        info: {
        },
        services: {
          Suits: []
        }
      },

// =================={ VISIBILITY }========================
      visibility: {
        Suits: false
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
          Suits: []
        }
      }

    }
  },
  methods: {
// ================{ ADDING SERVICES }================
    addItem(sort) {
      var obj= {
        imgID: this.preReq.services[sort],
        colors: this.pickedColor,
        pieces: this.smallPieces,
        details: $(`#2inp textarea`).val(),
        size: $(`#2inp input:nth-of-type(1)`).val(),
        price: $(`#2inp input:nth-of-type(2)`).val()
      }

      console.log(obj)
      if (obj.imgID.length === 0) {
        obj.imgID = 'empty'
      }

      this.error = null
      const areAllFieldsFilledIn = Object.keys(obj).every(key => !!obj[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill the INPUTS!!' //will show as notification
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
      this.pickedColor = []
      this.smallPieces = []
      $(`#2inp input:nth-of-type(1)`).val('')
      $(`#2inp input:nth-of-type(2)`).val('')
      $(`#2inp textarea`).val('')
      console.log(this.req)

    },

// ================{ UNDO SERVICES }================
    undoItem(sort) {
      this.req.services[sort].pop()
      this.showImgs[sort].pop()
    },

// ================{ ADDING COLOR }================
    addColor(color) {
      this.pickedColor.push(color)
    },

// ================{ DELETE COLOR }================
    deleteColor(index) {
      this.pickedColor.splice(index, 1);
    },

// ================{ ADDING SAMLL PIECES }===================
    addPiece() {
      var obj = {
        piece: $('#pieces input:nth-of-type(1)').val(),
        price: $('#pieces input:nth-of-type(2)').val()
      }

      this.error = null
      const areAllFieldsFilledIn = Object.keys(obj).every(key => !!obj[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill the INPUTS correctly!!' //will show as notification
        alert(this.error)
        return
      }

      this.smallPieces.push(obj)

    $('#pieces input:nth-of-type(1)').val(''),
    $('#pieces input:nth-of-type(2)').val('')

    },

// ================{ UNDO SAMLL PIECES }===================
    undoPiece() {
      this.smallPieces.pop()
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
        let res = (await MNGServices.saveImages(fd, 'suits', key)).data

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
        let DataRes = (await MNGServices.addMember(this.req, 'MNG-Suits-Member')).data

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
  border-radius: 5px;
}

#main-info input{
  margin: 10px 0
}

.colors{
  width: 250px;
  height: 200px;
  overflow: scroll;
  cursor: pointer;
  overflow-x: hidden;
  border: 5px solid #ccc
}

.colors .color:hover{
  background: rgba(0,0,0,0.2)
}

.colors span:nth-of-type(1),
.piked{
  width: 25px;
  height: 25px;
  border: 2px solid #555;
  margin: 3px;
  float: left;
}

.pikedColors{
  border: 3px solid #ccc
}
</style>

