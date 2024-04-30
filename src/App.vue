<script >
//importo axios
import axios from 'axios';

export default {
  data() {
    return {

      projects: [],

      apiLink: [],

      apiPage: [],

      baseApiUrl: 'http://127.0.0.1:8000/api',

      loader: true,
      
    }

  },

  mounted() {
   this.apiCall()
    
  },

  methods: {
    apiCall(){
      this.loader = true;
      axios.get(this.baseApiUrl + '/projects', {
        params:{
          page: this.apiPage
        }
      }).then(res => {
        // if(res.data.success){
        //   this.loader = false;

        // }
        console.log(res)
        this.projects = res.data.results.data;
        this.apiLink = res.data.results.links;
      })
    }
  },
  changePage(numberPage){
    //console.log(numberPage)

    this.apiPage = numberPage;

    //una volta che ho lo stesso numero della pagina rifaccio la chimta api
    this.apiCall();
    },



  

}
</script>

<template>
<div class="container py-5 display-2 ">
  Progetto di gruppo
  <ul>
    <li v-for="project in projects">
      {{ project.name }}
      
    </li>
  </ul>

  
</div>
</template>

<style >

</style>
