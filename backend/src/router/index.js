import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../store/views/Dashboard.vue";
import About from "../store/views/About.vue";
import Contact from "../store/views/Contact.vue";
import Login from "../store/views/Login.vue";


const routes=[

    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/about',
        name: 'about',
        component:About
        //component: () => import('../store/views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        import: Contact
        //component: () => import('../store/views/Contact.vue')
    },
    {
        path: '/login',
        name: 'login',
        import: Login
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;