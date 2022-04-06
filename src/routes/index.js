import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules"

const baseURL = "/lhp"

const router = createRouter({
    history: createWebHistory(baseURL),
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = JSON.parse(localStorage.getItem('user'))
    console.log(to)
    if(to.meta.auth && !loggedIn) {
       next('/login')
    } else {
       if(['Login','Register'].includes(to.name) && loggedIn) {
        next('/');
       } else {
        next();
       }
    }
})

export default router