<template>
  <div class="main">
    <form class="mx-auto mt-5 jumbotron" @submit.prevent="upload">
      <input type="file" name="file" id="file" accept="image/*" @change="handleData"/>
      <input type="submit"/>
    </form>
    <div class="img" v-for="(file, index) in data" :key="file.id">
      <img @click="rotate(index)" :src="'http://localhost:5000/image/' + file.filename"  style="width: 200px; height: 200px; float: left; margin-left: 10px" alt=""/>
    </div>
  </div>
</template>

<script>
import AppNavbar from './sub-Components/Navbar'
import axios from 'axios'
// import FormData from 'form-data'

export default {
  components: {
    AppNavbar
  },
  data () {
    return {
      selectedFile: null,
      data: null,
      rotateAngle: 0
    }
  },
  methods: {
    async handleData(event) {
      this.selectedFile = await event.target.files[0]
      console.log(this.selectedFile)
    },
    rotate(i) {
      this.rotateAngle += 90
      $('img').eq(i).css({
        "transform": `rotate(${this.rotateAngle}deg)`
      })
    },
    upload() {
      let fd = new FormData()
      fd.append('file', this.selectedFile)

      axios.post('http://localhost:5000/additem', fd, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })
      .then( (response) => {
        console.log(response.data)
      })
      .catch( (error) => {
        console.log(error)
      })
    }
  },
  created() {
    axios.get('http://localhost:5000/additem').then((response) => {
      this.data = response.data
      console.log(this.data)
    }).catch((error) => {
      console.log(error.response)
    })
  }
}
</script>

<style scoped>
</style>
