<script >
//importo axios
import axios from 'axios';

export default {
  data() {
    return {

      projects: [],

      apiLink: [],
      
      apiLink: [],
      apiPage: 1,

      baseApiUrl: 'http://127.0.0.1:8000/api',

      loader: true,
      
    }

  },

  mounted() {
    this.apiCall();
  },

  methods: {
    apiCall(){
      this.loader = true;
      axios.get( this.baseApiUrl + '/project', {
        params:{
          page: this.apiPage
        }
      }).then(res => {
        if(res.data.succes){
          this.loader = false;

        }
        this.projects = res.data.results.data;
        
        //salvo i link
        this.links = res.data.results.links;
      })
    }
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
