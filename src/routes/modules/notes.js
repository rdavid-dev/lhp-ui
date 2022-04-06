export default [
    {
        path: "/notes",
        name: "notes.list",
        component: () => import("@/views/Notes/Index.vue" /* webpackChunkName: "Views/Notes/Index" */),
        meta: {
            auth: true
        }
    },
    {
        path: "/notes/:id/edit",
        name: "Notes Edit",
        component: () => import("@/views/Notes/Edit.vue" /* webpackChunkName: "Views/Notes/Edit" */),
        meta: {
            auth: true
        }
    }
]