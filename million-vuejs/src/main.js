import Vue from 'vue'
import App from './App.vue'
import Home from './components/app-home.vue'
import Clientes from './components/app-clientes.vue'
import FI from './components/app-fundo-imobiliario.vue'
import CDB from './components/app-cdb.vue'
import Acao from './components/app-acao.vue'
import Tesouro from './components/app-tesouro.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: "/", component: Home},
  {path: "/clientes", component: Clientes},
  {path: "/fundo-imobiliario", component: FI},
  {path: "/cdb", component: CDB},
  {path: "/acoes", component: Acao},
  {path: "/tesouro", component: Tesouro},
]

const router = new VueRouter({
  routes: routes,
  mode: "history",
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
