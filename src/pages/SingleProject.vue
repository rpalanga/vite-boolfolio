<script>


import axios from 'axios';

export default {
    name : 'SingleProject',

    data() {
        return {

            post : null,

            baseApiUrl: 'http://127.0.0.1:8000/api',
        } 
    },

    mounted() {
       // console.log(this.$route.params.id);
       // this.postId = this.$route.params.id;
       this.postSLug = this.$route.params.slug;
        axios.get(this.baseApiUrl + '/projects/' + this.postSlug).then(res=> {

           // console.log(res.data.project);

           if(res.data.success){
            // se c'è il post
               this.post = res.data.project;
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
    v-if="post"
    class="container"> 
       <h1> {{post.name}}</h1>
       <p> {{post.description}}</p>


    </div>
    
</template>

<style lang="sass" scoped>

</style>