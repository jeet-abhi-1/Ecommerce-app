<template>
    <div>
        <div v-if="!addToCart" class="q-pa-md row items-start q-gutter-md">
            <div>
                <div class="wrap-class ">
                    <img :src="product.image">
                </div>
            </div>

            <q-card class="col-xs-5 q-mx-xl info-box"> 
                <q-card-section class="bg-primary text-white">
                    <div class="text-h6">{{ product.title }}</div>
                    <div class="text-subtitle1">$ {{ product.price }}</div>
                </q-card-section>

                <div class="q-pa-md">
                    <div class="text-md">Choose size</div>
                    <div class="q-gutter-sm">
                    <q-radio v-model="size" val="7" label="7" />
                    <q-radio v-model="size" val="8" label="8" />
                    <q-radio v-model="size" val="9" label="9" />
                    <q-radio v-model="size" val="10" label="10" />
                    </div>
                </div>
                <div class="q-pa-md">
                    <div class="text-lg">Description : </div>
                    <p>{{ product.description}}</p>
                </div>
            
            <q-separator />

                <q-card-actions align="right">
                    <q-btn to="/nike-products" color="white" text-color="primary" label="Back" />
                    <q-btn @click="proceedPayment" color="primary" label="Add to Cart"/>
                </q-card-actions>
            </q-card>

            <q-dialog
                v-model="alert"
                >
                <q-card style="width: 300px">
                    <q-card-section>
                    <div class="text-h6">Size</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                    Pleae select size to proceed.
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

        </div>

        <div v-else-if="!proceedToPaymentPage">
            <div class="row q-mx-xl">
                <div class="q-pa-md items-start q-gutter-md col-xs-3">
                    <div class="wrap-class-cart">
                        <img :src="product.image">
                    </div>

                    <q-card-section class="bg-primary text-white">
                        <div class="text-h7">{{ product.title }}</div>
                        <div class="text-subtitle2">$ {{ product.price }}</div>
                        <div class="text-caption">{{ product.description }}</div>
                    </q-card-section>
                </div> 
                
                <q-separator color="primary" vertical inset />

            <div class="q-mx-auto" style="max-width: 600px">
                <q-form class="form-class col-xs-5">
                    <div class="text-subtitle1">Add Delivery Address</div>
                    <q-input class="q-mb-sm" outlined label="Address" />
                    <q-input class="q-mb-sm" outlined label="Landmark" />
                    <q-input class="q-mb-sm" outlined label="City" />
                    <q-input class="q-mb-sm" outlined label="State" />
                    <q-input class="q-mb-sm" outlined label="Pincode" />
                </q-form>
                <q-card-actions align="right">
                    <q-btn to="/" color="white" text-color="primary" label="Back" />
                    <q-btn color="primary" @click="proceedToPaymentPage = !proceedToPaymentPage" label="Next"/>
                </q-card-actions>
            </div>
                
            </div>
        </div>

        <div v-else>
            <div class="row q-mx-xl">
                <div class="q-pa-md items-start q-gutter-md col-xs-3">
                    <div class="wrap-class-cart flex-center">
                        <img :src="product.image">
                    </div>

                    <q-card-section class="bg-primary text-white">
                        <div class="text-h7">{{ product.title }}</div>
                        <div class="text-subtitle2">$ {{ product.price }}</div>
                        <div class="text-caption">{{ product.description }}</div>
                    </q-card-section>
                </div> 
                
                <q-separator color="primary" vertical inset />
            
            <div class="q-pa-md q-mx-auto">
                <div class="q-gutter-sm column">
                <q-radio v-model="shape" val="UPI" label="UPI" />
                <q-radio v-model="shape" val="card" label="Credit/Debit Card" />
                <q-radio v-model="shape" val="phonepe" label="Phonepe" />
                <q-radio v-model="shape" val="wallets" label="Other wallet" />
                </div>
                <q-card-actions align="right">
                    <q-btn to="/" color="white" text-color="primary" label="Back" />
                    <q-btn to="/orderPlaced" color="primary" label="Pay"/>
                </q-card-actions>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            alert: false,
            proceedToPayment: false,
            proceedToPaymentPage: false,
            size: '',
            shape: '',
            product: {},
            addToCart: false
        }
    },
    
    methods: {
            proceedPayment() {
                if(this.size.length === 0) {
                    this.alert = true
                   return this.addToCart = false
                }
                return this.addToCart = true
            }
        },    

    async created() {
        const data = await this.$http.get(`https://fakestoreapi.com/products/${ this.id }`)
        console.log(data)
        this.product = data.body
    },
}
</script>

<style lang="scss" scoped>

.wrap-class {
    word-wrap: break-word;
    max-width: 200px;
    max-height: 273px;
    
}

.wrap-class-cart img {
    max-width: 180px;
    max-height: 230px;
}

.wrap-class img {
    width: 400px;
    height: 350px;
}

.info-box {
    margin-left: 20rem;
}

    
</style>