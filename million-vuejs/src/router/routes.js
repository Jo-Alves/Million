import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../components/app-home"
import FI from './../components/templates/fundo-imobiliario/app-fundo-imobiliario.vue'
import FI_Novo from './../components/templates/fundo-imobiliario/app-fundo-imobiliario-novo.vue'
import Cliente from './../components/templates/clientes/app-clientes.vue'
import ClienteNovo from './../components/templates/clientes/app-clientes-novo.vue'
import CDB from './../components/templates/cdb/app-cdb.vue'
import CDB_Novo from './../components/templates/cdb/app-cdb-novo.vue'
import Acao from './../components/templates/acoes/app-acao.vue'
import AcaoNovo from './../components/templates/acoes/app-acao-novo.vue'
import Tesouro from './../components/templates/tesouro/app-tesouro.vue'
import TesouroNovo from './../components/templates/tesouro/app-tesouro-novo.vue'

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/acoes", component: Acao },
    { path: "/acoes/novo", component: AcaoNovo },
    { path: "/clientes", component: Cliente },
    { path: "/clientes/novo", component: ClienteNovo },
    { path: "/cdb", component: CDB },
    { path: "/cdb/novo", component: CDB_Novo },
    { path: "/fundo-imobiliario", component: FI },
    { path: "/fundo-imobiliario/novo", component: FI_Novo },
    { path: "/tesouro", component: Tesouro },
    { path: "/tesouro/novo", component: TesouroNovo },
    { path: "/acoes/:id", component: AcaoNovo }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router; 

