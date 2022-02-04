<template>
    <div class="q-mb-xl custom-class">
        <div 
            v-for="(data, index) in shoesInfo" :key="index"
            class="q-pa-md flex row items-start q-gutter-md">
            <router-link class="routerLink" v-bind:to="'/cart/' + data.id" exact>
            <q-card class="my-card flex-center cursor-pointer rounded-borders">
                <div class="wrap-class ">
                    <img :src="data.image">
                </div>
                <div class="product-content text-primary">
                    <q-card-section class="flex flex-wrap">
                            <div class="text-h6">{{ data.category }}</div>
                        </q-card-section>
                    <q-card-section class="q-pt-none">
                        ${{ data.price }}
                    </q-card-section>
                </div>
            </q-card>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shoesInfo: []
        }
    },
    async beforeCreate() {
            const res = await this.$http.get('https://fakestoreapi.com/products/')
            const data = await res.json()
            console.log(data)
            const resultArray = []
            for(let key in data) resultArray.push(data[key])
            this.shoesInfo = resultArray
            console.log(this.shoesInfo)
        }
}
</script>

<style lang="scss" scoped>

.custom-class {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: grey;
    margin: 1rem;
}

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