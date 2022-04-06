import { post, get } from "@/core/apis"

class AuthService {
    login(user) {
        return post('authenticate', user)
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data))
                return response.data
            });
    }

    logout() {
        return get('logout').then(response => {
            localStorage.removeItem('user')
            return response
        })
    }
}

export default new AuthService()