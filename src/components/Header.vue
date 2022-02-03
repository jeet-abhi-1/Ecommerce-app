<template>
    <div>
        <nav id="navbar" class="row" elevated  position="top">
            <div class="logo">
                <span class="q-mx-sm">☰</span>
                <span>The Ninja Market</span>
            </div>
            <input type="text" class="q-mx-xl q-px-lg rounded-borders text-body2 " placeholder="Search" />
        </nav> 
        <q-tabs
            class=" product-bar bg-indigo-1 text-black-5 shadow-2 q-py-md q-mb-lg">
            <router-link class="routerLink" to="/" exact><q-tab name="nike" label="Nike"/></router-link>
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



</style>