import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { FortAw } from '@fortawesome/vue-fontawesome'
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { library } from '@fortawesome/fontawesome-svg-core'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faArrowLeft,
  faArrowUp,
  faArrowRight,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft, faArrowUp, faArrowRight, faArrowDown)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
