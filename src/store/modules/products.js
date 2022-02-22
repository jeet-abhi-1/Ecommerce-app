import axios from 'axios'

const state = {
    products: [],
    product: {}
}

const getters = {
    allProducts: (state) => state.products,
    singleProduct: (state) => state.product
}

const actions = {

    async fetchProducts({ commit }) {
        const res = await axios.get('http://localhost:3000/admin/products')
        commit('setProducts',res.data)
        console.log(res.data)
    },

    async getSingleProduct({ commit }, product_id) {
        const res = await axios.get(`http://localhost:3000/admin/products/cart/${ product_id }`)
        commit('setProduct', res.data)
        console.log(product_id)
        console.log(res.data)
    }
} 

const mutations = {
    setProducts: (state, products) => (state.products = products),

    setProduct: (state, product) => (state.product = product),
}

export default {
    state,
    getters,
    actions,
    mutations  
}