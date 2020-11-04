<template>
  <nav>
    <router-link to="/" class="title"><h1>The Pet Shop 🐾</h1></router-link>
    <div class="cart">
      <span>{{ t('items', numberOfItems) }}</span>
      <span>{{ n(total, 'currency') }}</span>
      <router-link to="/cart">
        🛒
      </router-link>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

const { mapGetters } = createNamespacedHelpers('cart')
export default {
  computed: {
    ...mapGetters(['numberOfItems', 'cart', 'total'])
  },
  setup() {
    return {
      ...useI18n()
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: flex-end;
}
.title {
  text-decoration: unset;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  line-height: 100%;

  * { margin: 0; }
}

.cart {
  * + * { margin-left: 20px;}
}
</style>
