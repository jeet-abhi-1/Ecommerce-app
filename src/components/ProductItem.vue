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
                    <q-card-section class="flex flex-wrap cursor-pointer">
                            <div class="text-h6">{{ product.category }}</div>
                        </q-card-section>
                    <q-card-section class="q-pt-none">
                        ${{ product.price }}
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