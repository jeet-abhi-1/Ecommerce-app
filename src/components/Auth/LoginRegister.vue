<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
            <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
            </template>
                {{ tab | titleCase }} Your Account!
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input 
            class="col"
            outlined 
            v-model="formData.email" 
            :rules="[ val => isValidEmailAddress(val) || 'Please enter valid email address']"
            lazy-rules
            label="Email" 
            ref="email"
            stack-label />
        </div>
        <div class="row q-mb-md">
            <q-input 
            class="col"
            type="password"
            outlined 
            v-model="formData.password" 
            :rules="[ val => val.length >= 8 || 'Please use minimum 8 characters']"
            lazy-rules
            label="Password" 
            ref="password"
            stack-label />
        </div>
        <div class="row">
            <q-space/>
            <q-btn 
                type="submit"
                color="primary" 
                :label="tab" />
        </div>
    </form>
</template>

<script>
export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {

        isValidEmailAddress(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(email).toLowerCase())    
        },

        submitForm() {

            if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
                if(this.tab == 'login') {
                    console.log('Login the user.')
                }
                else {
                    console.log('Register the user.')
                }
            }
        }
    },
    filters: {
            titleCase(value) {
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
}
</script>