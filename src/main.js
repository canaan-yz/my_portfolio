import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";

import './style.css'

import App from './App.vue'
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import Resume from "./pages/Resume.vue";
import Contact from "./pages/Contact.vue";


// Routes Config
const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/resume', component: Resume },
  { path: '/contact', component: Contact }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
