<script>
import axios from 'axios';

export default {
    name: 'ContactForm',

    data() {
        return {
            formData: {
                name: '',
                adress: '',
                message: '',


            }

        }
    },
    mounted() {

    },
    methods: {
        keepInTouch() {
            axios.post('http://127.0.0.1:8000/api/new-contact' + this.formData).then(res =>
                console.log('Vediamo che ne esce:', res)
            )
        }
    }

}
</script>

<template>

    <form @submit.prevent="keepInTouch()">

        <div class="mb-3">
            <label for="name" class="form-label">Inserisci il Tuo Nome</label>
            <input type="text" class="form-control" id="name" name="name" v-model="formData.name" required>
        </div>

        <div class="mb-3">
            <label for="address" class="form-label">Inserisci il tuo indirizzo mail</label>
            <input type="email" class="form-control" id="address" name="address" aria-describedby="emailHelp"
                v-model="formData.address" required>
            <div id="emailHelp" class="form-text">Non condivideremo i tuoi dati</div>
        </div>

        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Inserisci il tuo messaggio" id="message" name="message"
                style="height: 200px" v-model="formData.message"></textarea>
            <label for="message">Inserisci un messaggio</label>
        </div>


        <button type="submit" class="btn btn-primary">Invia</button>


    </form>



</template>

<style lang="scss" scoped>
</style>