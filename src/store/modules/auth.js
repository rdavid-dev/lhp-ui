import AuthService from "@/services/auth.service"

export default {
    namespaced: true,
    state: {
        user: null,
        loggedIn: false,
        test: 1
    },
    getters: {
        getTest: (state) => state.test
    },
    mutations: {
        LOGIN(state, user) {
            state.user = user.user
            state.loggedIn = true
        },
        LOGOUT(state) {
            state.user = null
            state.loggedIn = false
        }
    },
    actions: {
        login({commit}, user) {
            return AuthService.login(user)
                .then(user => {
                    commit('LOGIN', user)
                    return Promise.resolve(user)
                },
                error => {
                    return Promise.reject(error);
                }
            )
        },
        logout({commit}) {
            return AuthService.logout()
                .then(response => {
                    commit('LOGOUT')
                    return Promise.resolve(response)
                },
                error => {
                    return Promise.reject(error);
                }
            )
        }
    }
}