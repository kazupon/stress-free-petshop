<template>
  <div class="stepper">
    <button @click="updateValue(value - 1)">-</button>
    <span>{{ value }}</span>
    <button @click="updateValue(value + 1)">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: { default: 0 }
  },
  emits: {
    'update:value': (newValue) => {
      return newValue > -1
    }
  },
  methods: {
    updateValue(newValue) {
      if (newValue < 0) return
      this.$emit('update:value', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.stepper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 120px;
  min-width: 120px;
  height: min-content;
  max-height: 30px;
  padding: 5px;
  background: white;
  border: 1px solid #414cb2;
  color: #414cb2;
  font-weight: bolder;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
}

button {
  background: #414cb2;
  outline: 0;
  font-size: 18px;
  color: white;
  font-weight: bolder;
  border: 1px solid #414cb2;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;

  justify-content: center;

  &:hover {
    border: 3px solid #414cb2;
    cursor: pointer;
    opacity: 0.9;
  }
}
</style>
