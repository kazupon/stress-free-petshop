<template>
  <div class="home">
    <ProductGrid style="width: 60vw;" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductGrid from '@/components/ProductGrid'

export default {
  name: 'Home',
  components: {
    ProductGrid,
  },
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
