<template>
    <div>  
        <div v-if="productInfo.length < 1" class="q-my-xl row justify-center">
            <p>Please wait</p>
            <q-spinner-dots
            width="100vw"
            class="justify-center q-my-auto" 
            color="primary"
            size="1rem"
        />
        </div>
        <div v-else class="overflow-auto hide-scrollbar q-ma-xl" style="height: 100vh">
            <div 
                class="q-pa-xl q-mb-xl bg-accent row items-start q-col-gutter-xl q-col-gutter-y-md"
                
                >
                <ProductItem 
                    class="col-3"
                    v-for="(data, index) in productInfo" :key="index"
                    :product="data"/>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import ProductItem from '../components/ProductItem.vue';

export default {
    data() {
        return {
            productInfo: []
        }
    },
    components: {
        ProductItem
    },
    async mounted() {
            const res = await axios.get('https://fakestoreapi.com/products/')
            console.log(res)
            this.productInfo = res.data
        }
}
</script>

<style lang="scss" scoped>



.routerLink{
    text-decoration: none;
}

.wrap-class {
    word-wrap: break-word;
    max-width: 200px;
    max-height: 273px;
}

.wrap-class img {
    width: 200px;
    height: 200px;
}

.text-h6 {
    font-size: .85rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0.0125em;
}

.product-content {
    border: 2px solid black;
}
    
</style>