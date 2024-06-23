<template>
  <Livros />
</template>

<script>
import Livros from './components/livrosComponent.vue'

export default {
  name: 'App',
  components: {
    Livros
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
