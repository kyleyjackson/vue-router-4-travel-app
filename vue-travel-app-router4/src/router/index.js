import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    { //Dynamic routing
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('../views/DestinationShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)})
    },
    {
        path: '/destination/:id/:slug/:experienceSlug',
        name: 'experience.show',
        component: () => import('../views/ExperienceShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)})
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'nav-active-link' // Replacing the current link active class with one of our own 
})

export default router