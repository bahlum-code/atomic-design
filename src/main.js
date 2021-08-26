import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";

createApp(App).use(store).use(router).mount('#app')
