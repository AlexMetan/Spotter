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

export const spotAPI = {
    getOrders(userId){
        return instance.post('spot/orders.php',{userId})
    },
    getOrderDetails(userId, orderId){
        return instance.post('spot/order-details.php',{userId, orderId});
    },
    newOrder(key, userId, price, amount){
        return instance.post('spot/add-order.php', {key, userId, price, amount})
    }
}

export const userAPI = {
    getBalance(userId, token){
        return instance.post('user/get-balance.php', {userId, token});
    },
    changeBalance(userId, token, amount, type, isDeposit){
        return instance.post('user/change-balance.php', {userId, token, amount, type, isDeposit});
    }
}