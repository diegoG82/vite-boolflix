<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';
export default {
    name: "AppCard",
    props: ["card"],

    components: {
        LangFlag,
    },

    data() {
        return {
            store,
        }
    },

    computed: {

        setvote() {
            return Math.ceil(this.card.vote_average / 2)
        }

    },
};

</script>


<template>
    <div class="card text-center ">
        <img :src="`${store.imgUrl}${card.poster_path}`" alt="">
        <h2 v-if="!card.poster_path"><img src="../assets/img/notavailable.jpg" alt=""></h2>



        <ul class="card-info d-flex">
            <!-- Condizionale con v-if e v-else per il titolo della serie -->
            <li v-if="card.title">TITLE: {{ card.title }}</li>
            <li v-else>NAME:{{ card.name }}</li>
            <!-- Condizionale su una riga per il titolo og della serie -->
            <li> OG TITLE:{{ card.original_title ? card.original_title : card.original_name }}</li>
            <li> LANGUAGE: <lang-flag :iso="`${card.original_language}`" /></li>
            <li> RATING: <span v-for="i in store.stars">
                    <i :class="[(i <= setvote) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                </span> </li>
            <li>OVERWIEW:{{ card.overview }}</li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
.card {
    height: 400px;
    background-color: black;
    color: white;
    padding:5px;

    
    .card-info {
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        padding: 0;
        opacity: 0;
        background-color: black;
        height: 400px;
        overflow-y: auto;

        &:hover {   
            opacity: 1;
        }

    }

    li {
        list-style: none;
        display: flex;
        font-size: 0.7rem;
        justify-content: center;
    }

}
</style>
