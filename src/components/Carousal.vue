<template>
    <div class="q-px-lg rounded" >
       <q-carousel 
            class="bg-accent custom-corousal-class rounded-borders text-black-5"
            animated
            height="35vh"
            v-model="corousal"
            infinite
            autoplay
            navigation
            padding
            control-type="flat"
            control-color="dark"
            >
                <q-carousel-slide name="nike" class="column no-wrap flex-center">
                    <div class="text-h2">
                        Nike
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="adidas" class="column no-wrap flex-center">
                    <div class="text-h2">
                        Adidas
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="jordan" class="column no-wrap flex-center">
                    <div class="text-h2">
                        Jordan
                    </div>
                </q-carousel-slide>
       </q-carousel>
       <!-- <div class="row justify-center">
           <q-btn-toggle
                glossy
                v-model="corousal"
                :options="[
                { label: 1, value: 'nike'},
                { label: 2, value: 'adidas'},
                { label: 3, value: 'jordan'}
                ]"
           />
       </div> -->
    </div>
</template>

<script>

export default {
  data() {
      return {
          corousal: 'nike'
      }
  }
}
</script>

<style lang="scss" scoped>

.rounded-borders {
    border-radius: 2rem;
}

</style>