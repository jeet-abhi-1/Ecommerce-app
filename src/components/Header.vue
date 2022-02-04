<template>
    <div>
        <nav id="navbar" class="row" elevated  position="top">
            <div class="logo">
                <span class="q-mx-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </span>
                <span class="q-mb-md">The Ninja Market</span>
            </div>
            <input type="text" class="q-mx-xl q-px-lg rounded-borders text-body2 " placeholder="Search" />
        </nav> 
        <q-tabs
        switch-indicator
            class=" product-bar bg-indigo-1 text-black-5 shadow-2 q-py-md q-mb-lg">
            <router-link class="routerLink" to="/" exact><a><q-tab name="nike" label="Nike"/></a></router-link>
            <router-link class="routerLink" to="/adidas" exact><q-tab name="adidas" label="Adidas"/></router-link>
            <router-link class="routerLink" to="/puma" exact><q-tab name="puma" label="Puma"/></router-link>
        </q-tabs>
        
    </div>
</template>

<style lang="scss" scoped>

#navbar {
    background: #0995e7;
    padding: 0.3rem;
}

#navbar input {
    outline: none;
}

.logo {
    color: white;
}

.product-bar li {
    list-style: none;
}

.routerLink {
    text-decoration: none;
}



.q-mb-md {
    vertical-align: 7px;
    margin-left: 16px;
}

</style>