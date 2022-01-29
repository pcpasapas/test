import { createApp } from 'vue'
import App from '../App.vue'
import router from './router/index.js'
import store from './store/index.js'


const OrdiChoisi = {}


const app = createApp(App).use(router)

app.config.devtools = true
app.use(router)
app.use(store)
app.mount("#app")