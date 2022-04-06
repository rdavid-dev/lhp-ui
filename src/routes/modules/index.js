import auth from "@/routes/modules/auth"
import errors from "@/routes/modules/error"
import notes from "@/routes/modules/notes"

export default [
    ...auth,
    ...notes,
    ...errors,
    {
        path: '/:pathMatch(.*)*',
        beforeEnter: (to, from, next) => {
            next({ name: 'Error 404', replace: true})
        }
    }
]