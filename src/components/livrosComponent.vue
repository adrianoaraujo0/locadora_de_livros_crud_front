<template>
  <TableComponent title_table="Livros" :titles="this.titlesLivros" :livros="this.livros"/>


</template>

<script>

  import TableComponent from './tableComponent.vue'

  export default{

    data(){
      return {
        titlesLivros:["Nome","Lançamento","Autor", "Editora", "Algueis"],
        livros: []
      }
    },
    components:{
      TableComponent
    },

      methods:{
        getBooks(){
          this.axios
            .get("https://livraria-api-linux.altislabtech.com.br/api/disponiveis")
            .then((value)=> {
              console.log(value.data)
              this.livros = [...value.data]
            })
        }
      },
      created(){
        this.getBooks();
      }

}
</script>