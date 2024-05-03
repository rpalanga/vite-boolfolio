<script>

// importo axios
import axios from 'axios';

export default {
  name: 'HomePage',
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

    // this.links = this.links.forEach(link => {
    //   console.log(links)
    //   // return link.label.includes(';')
    // })


    console.log(this.projects)

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

        // rimuoviamo i link relativi next e prev
        this.links = this.links.filter(link => {
          //console.log(link)
          // i link relativi contengono un html special char che contiene la stringa "aquo"
          return !link.label.includes('aquo')
        })


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
  <div id="my-container" class="p-0 m-0">

    <div class="container py-5 d-flex gap-3 justify-content-center" >

      <div class="card col-2 p-0" style="width: 18rem;" v-for="project in projects">
        <img :src=" 'http://localhost:8000/storage/'  + project.image " class=" card-img-top object-fit-cover" style="height: 300px; object-position: top; " alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ project.name }} </h5>
          <p class="card-text">{{ project.description }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
        class="btn btn-outline-info btn-outline"> Mostra</router-link>
        </div>
      </div>

      


    </div>

    <div class="container ">
      <nav>
        <ul class="d-flex gap-2 m-0 p-0">
          <li v-for="link in links" v-html="link.label" @click="changePage(link.label)" class="mb-4"
            :class="link.label == page ? 'active' : ''">

          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
#my-container{
  background-image: url("./back-image/ruvim-noga-pazM9TQJ2Ck-unsplash.jpg");
  background-position: center;
  object-fit: cover;
  
  

  
}
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
