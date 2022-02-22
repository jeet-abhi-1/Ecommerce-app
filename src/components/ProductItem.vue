<template>
    <div class="product-items">
        <router-link class="routerLink" :to="'/cart/' + product._id" exact>
            <q-card class="my-card flex-center rounded-borders q-px-md q-mx-sm no-pointer-events"> 
                <div class="justify-center q-gutter-md row items-start">
                    <q-img 
                        :src="product.image"
                        style="max-width: 200px; height: 337px;" 
                        class="product-image"
                        :ratio=" 4/3"
                    />
                </div>


                    <div class=" justify-between product-content text-primary">
                    <q-item-section class="cursor-pointer">
                            <q-item-label class="text-subtitle2">{{ product.title }}</q-item-label> <br>
                            <q-item-label caption>${{ product.price }}</q-item-label>
                    </q-item-section>
                    </div>  

            </q-card> 
                    <div class="">
                        <q-btn to="/" flat round class="btn-cart" color="primary" icon="shopping_cart" />
                    </div>
        </router-link>     
    
                
    </div>       
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

.btn-cart {
    position: relative;
    left: 10rem;
    bottom: 3rem;

}

.product-image {
    max-width: 250px;
    max-height: 125px;
}

.product-content {
    width: 11rem !important;
    line-height: 6px;
    padding: 0.4rem 0;
}
    
.product-items {
    display: flex;
    flex-wrap: wrap;
}


</style>