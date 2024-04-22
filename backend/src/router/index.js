import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import RequestPasswordReset from "../views/RequestPasswordReset.vue";
import ResetPassword from "../views/ResetPassword.vue";


const routes=[

    {
        path: '/',
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
        component: Contact
        //component: () => import('../store/views/Contact.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/requestpasswordreset',
        name:'RequestPasswordReset',
        component:RequestPasswordReset,
        //component: () => import('../store/views/Register.vue')
    },
    {
        path:'/resetpassword/:token',
        name:'ResetPassword',
        component:ResetPassword
    },
    {
        path:'/test',
        component:()=>import('../views/Test.vue')
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;