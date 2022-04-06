import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules"

const baseURL = "/lhp"

const router = createRouter({
    history: createWebHistory(baseURL),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.auth) {
       next('/login')
    } else {
       next();
    }
})

export default router