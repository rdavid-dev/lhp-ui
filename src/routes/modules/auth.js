export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue" /* webpackChunkName: "Views/Login" */)
    },
    {   
        path: '/register',
        name: 'Register',
        component: () => import("@/views/Register.vue" /* webpackChunkName: "Views/Register" */)
    }
]