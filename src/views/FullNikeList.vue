<template>
    <div class="q-mb-xl custom-class">
        <div 
            v-for="(data, index) in shoesInfo" :key="index"
            class="q-pa-md flex row items-start q-gutter-md">
            <q-card class="my-card flex-center">
                <img :src="data.image" style="max-width: 200px; height:200px" >

                <q-card-section class="flex flex-wrap">
                    <div class="text-h6">Our Changing Planet</div>
                    <!-- <div class="text-subtitle2">by John Doe</div> -->
                </q-card-section>

                <q-card-section class="q-pt-none">
                    ${{ data.price }}
                </q-card-section>
            </q-card>
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

    
</style>