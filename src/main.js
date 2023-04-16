import axios from 'axios'
import { createPinia } from "pinia"
import { createApp } from "vue"
import VueAxios from 'vue-axios'

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount("#app")
