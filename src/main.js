import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.use(VueAxios, axios)
.mount('#app')
