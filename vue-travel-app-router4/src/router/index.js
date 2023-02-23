import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/brazil',
        name: 'Brazil',
        component: () => import('../views/Brazil.vue')
    },

    {
        path: '/panama',
        name: 'Panama',
        component: () => import('../views/Panama.vue')
    },

    {
        path: '/hawaii',
        name: 'Hawaii',
        component: () => import('../views/Hawaii.vue')
    },

    {
        path: '/jamaica',
        name: 'Jamaica',
        component: () => import('../views/Jamaica.vue')
    },
    { //Dynamic routing
        path: '/destination/:id',
        component: () => import('../views/DestinationShow.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'nav-active-link' // Replacing the current link active class with one of our own 
})

export default router