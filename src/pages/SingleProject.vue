<script>


import axios from 'axios';

export default {
    name : 'SingleProject',

    data() {
        return {

            project : null,
            projectSlug: '',

            baseApiUrl: 'http://127.0.0.1:8000/api',
        } 
    },

    mounted() {
       // console.log(this.$route.params.id);
       // this.postId = this.$route.params.id;
       this.projectSlug = this.$route.params.slug;

       console.log('chiamata api:', this.baseApiUrl + '/projects/' + this.projectSlug)
        axios.get(this.baseApiUrl + '/projects/' + this.projectSlug).then(res=> {

           // console.log(res.data.project);

           if(res.data.success){
            // se c'è il post
               this.project = res.data.project;
           } else {
            // torno alla pagina iniziale
            this.$router.push({ name: 'home' })
           }
        });
    },

    methods:{

    },
}

</script>

<template>

    <div 
    v-if="project"
    class="container d-flex justify-content-center"> 
       
       <div class="card col-12 my-4" style="width: 500px;height: 550px;">
        <img :src=" 'http://localhost:8000/storage/'  + project.image " class=" card-img-top object-fit-cover" style="height: 300px; object-position: top; " alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ project.name }} </h5>
          <p class="card-text">{{ project.description }}</p>
           
        </div>
      </div>


    </div>
    
</template>

<style lang="sass" scoped>

</style>