import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueWriter from 'vue-writer'
import './assets/sass/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueWriter)
app.mount('#app')
