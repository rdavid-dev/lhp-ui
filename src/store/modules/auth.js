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
            
        }
    }
}