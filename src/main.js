import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/css/index.css'
import 'animate.css';
import 'font-awesome/css/font-awesome.css'
const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
