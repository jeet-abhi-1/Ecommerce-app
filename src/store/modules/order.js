import axios from 'axios'

// import router from "../../router/index"

const state = {

}

const getters = {

}

const actions = {
    async placeOrder( address) {
        let token = localStorage.getItem('jwt')

        const headers = {
            "Authorization": "Bearer " + token,
        };

        await axios.post("http://localhost:3000/order/place-order", address, { headers })

        // try {
        //     const rawResponse = await fetch(`http://localhost:3000/order/place-order`, {
        //         method: 'POST',
        //         headers: {
        //             'Authorization': "Bearer " + token,
        //             'Content-Type' : 'application/json'
        //         },
        //         address
        //     });
        //     const order = await rawResponse.json();
        //     if (order) {
        //         commit('orderPlaced', order)
        //         router.push('/orderPlaced')
        //     }
        //     console.log("Your order : ", order);
        // } catch (error) {
        //     console.log('Error', error.message)
        // }
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}