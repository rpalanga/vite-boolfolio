<script>

// importo axios
import axios from 'axios';

export default {
    name:'HomePage',
  data() {

    return {

      projects: [],

      // creo link ai avri endpoiint dell'api per vedere le pagine dei posts
      links: [],

      //creo una variabile per le pagine
      page: [],

      //variabile per il loading
      isLoading: true,

      // salvo l'indirizzo principale in una variabile
      baseApiUrl: 'http://127.0.0.1:8000/api',
    }

  },

  mounted() {

    /*  console.log(this.baseApiUrl);

    axios.get(this.baseApiUrl + '/projects' , {
      params: {
        page:2
      }
      }).then(res => {
        console.log(res);
        // salvo il projects
        this.projects = res.data.results.data;

        //salvo i link
        this.links = res.data.results.links;
      }) */
    // racchiudo tutta la chiamata api 
    //richaimando la funzione dhe ho scritto nei methods
    this.apicall();
  },

  methods: {
    apicall() {
      console.log(this.baseApiUrl);

      axios.get(this.baseApiUrl + '/projects', {
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
    changePage(numberPage) {
      console.log(numberPage)

      this.page = numberPage;

      //una volta che ho lo stesso numero della pagina rifaccio la chimta api
      this.apicall();
    },
  },
}
</script>
<template>
  <div class="container py-5">
    

    <ul>
      <li v-for="project in projects">
        {{ project.name }} 
        <router-link :to="{ name: 'single-project', params : {slug:project.slug }}" class="btn btn-outline-info btn-outline"> Mostra</router-link>

      </li>
    </ul>
  </div>

  <div class="container ">
    <nav>
      <ul class="d-flex gap-2">
        <li 
        v-for="link in links" 
        v-html="link.label" 
        @click="changePage(link.label)" 
        class="mb-4"
        :class="link.label == page ? 'active' : ''" >

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
