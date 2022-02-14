<template>
    <div>
        <Carousal/>

        <div class="flex justify-between q-my-sm q-px-lg text-body1 text-primary">
            <span>Deals of the day</span>
            <router-link 
                style="text-decoration: none;" 
                to="/products" 
                exact>
                <span class="text-primary cursor-pointer">See all</span>
            </router-link>
        </div>
        <div v-if="productInfo.length < 1">
            <div v-if="productInfo.length < 1" class="q-my-xl">
                <q-spinner-hourglass
                width="100vw"
                class="justify-center q-my-auto" 
                color="primary"
                size="4em"
                />
            </div>
        </div>

        <div v-else class="items-center q-pa-lg q-mx-lg q-mb-lg bg-info rounded-borders overflow-auto hide-scrollbar">
            <div class="row q-mr-md no-wrap">
                
                <ProductItem
                    style="height: 160px"
                    v-for="(data, index) in productInfo" :key="index"
                    :product="data"
                 />
            </div>            
        </div>
    </div>
   
</template>

<script>

import Carousal from '../components/Carousal.vue'
import ProductItem from '../components/ProductItem.vue'
import axios from 'axios'
export default {
    
    data() {
        return {
            productInfo: []
        }
    },
    components: {
        Carousal,
        ProductItem
    },
    async created() {
            const res = await axios.get('https://fakestoreapi.com/products/')
            console.log(res)
            this.productInfo = res.data
        }
}
</script>

<style lang="scss" scoped>

.routerLink {
    text-decoration: none;
}

.rounded-borders {
    border-radius: 16px;
}

</style>