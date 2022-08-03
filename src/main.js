import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {i18n} from './plugins/i18n'
import router from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import YmapPlugin from 'vue-yandex-maps'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const settings = {
  apiKey: '04500e36-676d-43ed-b704-536f41441a8e',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(YmapPlugin, settings)


new Vue({
  i18n,
  render: h => h(App),
  el: '#app',
  router,
})
