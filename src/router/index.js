import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    /*{ path: '/', name: 'Home', component: VisualizarGastosComponent },
    { path: '/crearGasto', name: 'CrearGastoComponent', component: CrearGastoComponent },
    { path: '/visualizarGastos', name: 'VisualizarGastosComponent', component: VisualizarGastosComponent },
    { path: '/multipleChoice', name: 'MultipleChoiceComponent', component: MultipleChoiceComponent }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


