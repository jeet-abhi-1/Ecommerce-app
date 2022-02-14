<template>
        <router-link class="routerLink" :to="'/cart/' + product.id" exact>
            <q-card class="my-card flex-center rounded-borders q-px-md q-mx-sm no-pointer-events"> 
                <div class="justify-center q-gutter-md row items-start">
                    <q-img 
                        :src="product.image"
                        style="max-width: 300px; height: 337px;" 
                        class="product-image"
                        :ratio=" 4/3"
                    />
                </div>

                <div class="product-content text-primary">
                    <q-card-section class=" cursor-pointer">
                            <div class="text-subtitle2">{{ product.category }}</div>
                            <div class="text-subtitle2">${{ product.price }}</div>
                        </q-card-section>
                </div>
            </q-card>
            
        </router-link>        
</template>

<script>
export default {
    props: ['product'],
    data(){
        return {
            
        }
    }
}
</script>
    

<style lang="scss">

.product-image {
    max-width: 250px;
    max-height: 125px;
}

.product-content {
    width: 11rem;
}
    
</style>