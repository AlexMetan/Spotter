import * as axios from "axios"

const instance = axios.create({
    baseURL: 'http://spotter-api.alexdev.pl/api/'
})

export const authAPI = {
    login(login, password){
        return instance.post('auth/login.php',{login, password});
    },
    registration(login, password){
        return instance.post('auth/registration.php',{login, password});
    },
    authMe(userId, token){
        return instance.post('auth/auth.php',{userId, token});
    }
}
