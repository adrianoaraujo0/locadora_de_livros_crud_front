<template>

  <h1> {{  this.title_table }} </h1>

  <table>
    <thead>
      <tr>
        <th v-for="(title, index) in this.titles" :key="index"> {{ title }} </th>
      </tr>
    </thead>
    <tbody>
        <!-- <tr>
            <td v-for="teste in [1,2,3]" :key="teste"> {{ teste }}</td>
        </tr> -->
        <tr v-for="(livro, index) in this.livros" :key="index">
            <td> {{livro.nome}} </td>
            <td> {{livro.lancamento}}</td>
            <td> {{livro.autor}}</td>
            <td> {{livro.editora.nome}}</td>
            <td> {{livro.totalalugado}}</td>
            <!-- <td v-for="(value, index) in livro" :key="index"> {{ value }} </td> -->
        </tr>
    </tbody>
  </table>

</template>

<script>

    export default{
        props:{
            title_table: String,
            titles: {
                type: Array, 
                required: true
            },
            livros: {
                type: Array,
                required: true
            }

        }
    }

</script>


<style>


    table{
        border-collapse: collapse;
        border: 2px solid rgb(140 140 140);
        font-family: sans-serif;
        font-size: 0.8rem;
        letter-spacing: 1px;    
        
    }

    th,
    td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 60px;
    }

    td:last-of-type {
    text-align: center;
    }

    th{
        font-size: 25px;
    }

</style>