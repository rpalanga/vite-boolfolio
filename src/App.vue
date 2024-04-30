<script>
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
    apiCall() {
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
  <div class="container py-5 ">
    Progetto di gruppo
    <ul>
      <li v-for="project in projects">
        {{ project.name }}

      </li>
      <li v-for="project in projects">
        {{ project.type.description }}

      </li>
    </ul>


  </div>
  <div class="container ">
    <nav>
      <ul class="d-flex gap-2 text-white">
        
        <li v-for="apiLink in apiLinks" v-html="link.label" @click="changePage(link.label)"
          :class="link.label == apiPage ? 'active' : ''">

        </li>
      </ul>
    </nav>
  </div>

</template>

<style lang="scss">
nav {
  ul {

    list-style-type: none;

    li {

      padding: 8px;

      text-decoration: none;
      color: white;

      transition: all .3s ease;

      cursor: pointer;

      &:hover,
      &.active {
        background-color: rgba(255, 255, 255, 0.4);
        color: white;
      }

    }
  }
}
  </style>
