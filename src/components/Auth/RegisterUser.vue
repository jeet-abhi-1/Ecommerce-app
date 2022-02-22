<template>
    <form @submit.prevent="registerUser">
        <div>
            <p v-if="error" class="text-red">Register Failed : {{ error.message }}</p>
        </div>
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
            <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
            </template>
                Register Your Account!
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input 
            class="col"
            outlined 
            v-model="register.name" 
            :rules="[ val => !!val || 'Please enter your name']"
            lazy-rules
            label="Name" 
            ref="name"
            stack-label />
        </div>
        <div class="row q-mb-md">
            <q-input 
            class="col"
            outlined 
            v-model="register.email" 
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
            v-model="register.password" 
            :rules="[ val => val.length >= 8 || 'Please use minimum 8 characters']"
            
            label="Password" 
            ref="password"
            stack-label />
        </div>
        <div class="row">
            <q-space/>
            <q-btn 
                type="submit"
                color="primary" 
                label="Register" />
        </div>

        <div>
            <span class="text-subtitle2">Already have account?</span> 
            <q-btn flat to="/login" color="primary" label="Login" class="" />
        </div>
        
    </form>
</template>

<script>

import axios from 'axios'

export default {
    
    data() {
        return {
            register: {
                name: '',
                email: '',
                password: '',
                role: 'customer'
            },
            error: '',
        }
    },
    methods: {

        isValidEmailAddress(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(email).toLowerCase())    
        },

        async registerUser() {
            if(!this.$refs.name.hasError && !this.$refs.email.hasError && !this.$refs.password.hasError) {    
                    try {
                        const response = await axios.post('http://localhost:3000/user/register', this.register)
                        console.log(response)
                        this.$router.push('/login')
                    } catch (error) {
                        this.error = error
                        console.log(error)
                    }
            }
        },
    },
}
</script>