<template>
  <div class="card">
    <slot/>
    <div class="card-footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  padding: 2rem 1rem 1rem;
  color: black;
  background-color: white;
  border: 1px solid #414cb2;
  font-size: 1.2rem;
  text-align: left;
  height: 300px;
  border-radius: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-footer {
  font-size: 1rem;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
