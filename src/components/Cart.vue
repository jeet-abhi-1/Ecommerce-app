<template>
  <div>
    <div class="text-center text-grey-5 text-h5">
      Shopping Cart
      <q-icon size="lg" color="primary" name="shopping_bag" />
    </div>
    <div v-if="cartItems.length < 1" class="text-h6 text-center q-mt-xl">
      <div>Cart is Empty..!</div>
      <div>
        <q-btn size="lg" to="/products" label="Go Shopping" color="primary" />
      </div>
    </div>
    <div v-else class="q-pa-xl q-mx-xl overflow-auto">
      <q-markup-table class="q-mx-xl">
        <thead>
          <tr>
            <th class="text-left">
              <q-btn color="white" flat text-color="black" label="Title" />
            </th>
            <th class="text-center">
              <q-btn color="white" flat text-color="black" label="Price" />
            </th>
            <th class="text-center">
              <q-btn color="white" flat text-color="black" label="Remove" />
            </th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in cartItems" :key="index">
          <tr>
            <td class="text-left text-h6">{{ item.title }}</td>

            <td class="text-center text-h6">{{ item.price }}</td>

            <td class="text-center text-h6">
              <q-btn
                @click="removeProduct(item._id)"
                flat
                text-color="red"
                icon="delete_forever"
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <q-bar class="q-mx-xl q-mt-sm">
        <div class="col text-right rounded-borders">
          Total : <q-icon name="currency_rupee" /> {{ totalPrice }}
        </div>
      </q-bar>
      <div class="q-mx-xl text-h6 text-right q-my-sm">
        <q-btn to="/select-payment" color="primary" label="Continue" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  created() {
    this.fetchCartItems();
  },

  methods: {
    ...mapActions(["fetchCartItems", "removeFromCart"]),

    async removeProduct(id) {
      this.removeFromCart(id);
    },
  },
  computed: {
    ...mapGetters({
      cartItems: "allItems",
      totalPrice: "priceTotal",
    }),
  },
};
</script>

<style lang="scss" scoped>
.q-pa-xl {
  padding: 2rem 20rem;
}
</style>