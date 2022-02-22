<template>
    <form @submit.prevent="loginUser">
        
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary" />
                </template>
                Login Your Account!
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input 
            class="col"
            outlined 
            v-model="login.email" 
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
            v-model="login.password" 
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
                label="Login" />
        </div>
        <div>
            <span class="text-subtitle2">Don't have an account?</span> 
            <q-btn flat to="/register" color="primary" label="Register" />
        </div>
    </form>
</template>

<script>

import axios from 'axios';

export default {
   
    data() {
        return {
            login: {
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

        async loginUser() {

            if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
                try {
                    let response = await axios.post("http://localhost:3000/user/login", this.login);
                    let token = response.data.token;
                    localStorage.setItem("jwt", token);
                    if (token) {
                    console.log("Success", "Login Successful", "success");
                    this.$store.state.isLoggedIn = token
                    console.log(this.$store.state.isLoggedIn);
                    this.$router.push("/");
                    }
                } catch (err) {
                    console.log("Error", "Something Went Wrong", "error");
                    console.log(err.response);
                }
            }
        }
    },
    
}
</script>