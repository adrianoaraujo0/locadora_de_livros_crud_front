<template>

  <div class="header-btn">
    <button class="btn-style"> Usuários </button>
    <button class="btn-style"> Livros </button>
    <button class="btn-style"> Editoras </button>
    <button class="btn-style"> Alugueis </button>
  </div>
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

  .header-btn{
    display: flex;
    flex-direction: row;
    background-color: rgb(62, 62, 116);
    justify-content: center;
  }
  
  .btn-style{
    padding: 20px 50px;
    background-color: rgb(62, 62, 116);
    color: white;
    font-size: 20px;
    border: none;
  }


</style>
