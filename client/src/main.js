// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mapboxgl from 'mapbox-gl'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import {store} from './store/store.js'
import messages from './local/languageData'
Vue.config.productionTip = false

Vue.use(VueI18n)


// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ar', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

// CONFIGURATION FOR THE MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1lZDAwMSIsImEiOiJjamt1MGk5MHUwMXgwM3BxazN3cXU5M2RtIn0.JfdQvIy0cRbQOanBaL2nww';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [26.8206, 30.8025],
    zoom: 3,
})
