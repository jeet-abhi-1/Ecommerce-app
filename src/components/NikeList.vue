<template>
    <div>
        <Carousal/>

        <div>
        <div class="flex justify-between q-my-md q-px-lg text-body1 text-primary">
            <span>Deals of the day</span>
            <router-link class="routerLink" to="/nike-products" exact><span class="text-primary cursor-pointer">See all</span></router-link>
        </div>
        <div class="q-px-lg rounded">
            <!-- <p v-for="(data, index) in shoesInfo" :key="index">
                <img :src=" data.image " alt="">
                {{ data.category }}
            </p> -->
            Nike list horizontal
        </div>
    </div>
    </div>
</template>

<script>

import Carousal from './Carousal.vue'
export default {
    components: {
        Carousal,

    }
}
</script>

<style lang="scss" scoped>

.routerLink {
    text-decoration: none;
}

</style>