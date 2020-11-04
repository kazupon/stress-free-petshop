<template>
  <section v-if="product">
    <h2>Product Details</h2>
    <h3>{{ product.name }}</h3>
    <p data-testid="product-count">
      {{ productsInCartForId(product.id).quantity }}
    </p>
  </section>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: {
    productId: { required: true, type: [Number, String] }
  },
  async setup(props) {
    const { dispatch, getters } = useStore()
    const product = await dispatch('products/getProduct', props.productId)
    return {
      product,
      productsInCartForId: getters['cart/productsInCartForId']
    }
  }
}
</script>

<style scoped>
section {
  text-align: left;
}
</style>
