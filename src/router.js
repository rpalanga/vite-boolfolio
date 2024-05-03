import { createRouter, createWebHistory } from 'vue-router';


// importo tutti i componenti che verranno utilizzati come pagina
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue';
import ContactUs from './pages/ContactUs.vue';


const router = createRouter({
    history: createWebHistory(),

    // questo array conterrà tutte le rotte della nostra applicazione
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        }, 
        // {
        //      path:  '/projects/:id',
        //      name: 'single-project',
        //      component: SingleProject
        //  },
         {
            path:  '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path:  '/contact-us',
            name: 'contact-us',
            component: ContactUs
        },
    ]

})

export { router };
