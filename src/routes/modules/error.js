export default [
    {
        path: "/505",
        name: "Error 505",
        component: () => import("@/views/Errors/Index.vue" /* webpackChunkName: "Pages/Erros/Error505" */)
    },
    {
        path: "/404",
        name: "Error 404",
        component: () => import("@/views/Errors/NotFound.vue" /* webpackChunkName: "Pages/Erros/Error404" */)
    }
]