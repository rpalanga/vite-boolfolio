<script >
//importo axios
import axios from 'axios';

export default {
  data() {
    return {

      projects : [],
       
       // creo link ai avri endpoiint dell'api per vedere le pagine dei posts
      links : [],
 
      //creo una variabile per le pagine
      page: [],
 
       //variabile per il loading
       isLoading : true,
 
       // salvo l'indirizzo principale in una variabile
      baseApiUrl : 'http://127.0.0.1:8000/api',

      loader: true,
      
    }

  },

  mounted() {
    this.apiCall();
  },

  methods: {
    apiCall() {
      console.log(this.baseApiUrl);

    axios.get(this.baseApiUrl + '/projects' , {
      params: {
        page: this.page
      }
      }).then(res => {
        console.log(res);
        // salvo il posts
        this.projects = res.data.results.data;
        
        //salvo i link
        this.links = res.data.results.links;
      })
    },
    changePage(numberPage){
    //console.log(numberPage)

    this.page = numberPage;

    //una volta che ho lo stesso numero della pagina rifaccio la chimta api
    this.apiCall();
    },
  },
    
  
      

}
</script>

<template>
<div class="container py-5">
  <h1>Progetto di : Roberto, Luca & Gian Marco</h1>
</div>
<div class="container py-5">
  <ul>
    <li v-for="project in projects">
      {{ project.title }}
    </li>
  </ul>
</div>
</template>

<style >

</style>
