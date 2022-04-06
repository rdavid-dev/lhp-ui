import auth from "@/routes/modules/auth"
import errors from "@/routes/modules/error"
import notes from "@/routes/modules/notes"

export default [
    ...auth,
    {
        path: '/',
        name: 'Default',
        redirect: {
            name: 'notes.list'
        },
        component: () => import("@/views/Layouts/Default.vue" /* webpackChunkName: "Views/Notes/Edit" */),
        children: [
            ...notes,
        ],
        meta: {
            auth: true
        }
    },
    ...errors,
    {
        path: '/:pathMatch(.*)*',
        beforeEnter: (to, from, next) => {
            next({ name: 'Error 404', replace: true})
        }
    }
]