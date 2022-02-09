<template>
    <div padding class="row justify-center">
         <q-form
            class="q-gutter-md q-mt-lg"
            >
            <q-input
                input-class="q-pr-xl"
                filled
                v-model="username"
                label="Username"
                lazy-rules
            />

            <q-input
                input-class="q-pr-xl"
                filled
                v-model="password"
                label="Password"
                :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>
      <div>
        <q-btn label="Login" color="primary"/>
      </div>
    </q-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            isPwd: true,
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss">

// .q-field__native {
//     padding: 0 3rem;
// }
    
</style>