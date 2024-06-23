<template>
  <h1>LIVROS</h1>
</template>

<script>

export default{

    created(){
      axios
      .get("https://livraria-api-linux.altislabtech.com.br/api/disponiveis")
      .then((value)=> {
        console.log(value)
      })
    }

}
</script>