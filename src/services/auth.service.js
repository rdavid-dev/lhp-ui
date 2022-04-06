import { post } from "@/core/apis"

class AuthService {
    login(user) {
        return post('authenticate', user)
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data))
                return response.data
            });
    }
}

export default new AuthService()