<script>
import { store } from '../store.js'
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: "AppCard",
    props: ["card"],

    data() {
        return {
            store,
        }
    },

    computed: {

        setvote() {
            return parseInt(this.card.vote_average / 2)
        }

    },
};

</script>


<template>
    <div class="card text-center ">
        <img :src="`${store.imgUrl}${card.poster_path}`" alt="">
        <h2 v-if="!card.poster_path"><img src="../assets/img/notavailable.jpg" alt=""></h2>

        <ul class="card-info d-flex">
            <li>TITLE: {{ card.title }}</li>
            <li> OG TITLE:{{ card.original_title }}</li>
            <li> LANGUAGE: <span :class="`fi fi-${card.original_language}`"></span></li>
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
    width: 250px;
    background-color: black;
    color: white;

    img {
        height: 400px;
    }

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
