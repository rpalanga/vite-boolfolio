
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
       console.log(this.$route)
        axios.get(this.baseApiUrl + '/projects/11').then(res=> {

            console.log(res.data.project);
            this.post = res.data.project;
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