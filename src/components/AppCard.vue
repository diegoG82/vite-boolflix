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

    computed:{

        setvote (){
            return parseInt(this.card.vote_average / 2)
        }

    },
};

</script>


<template>
    <div class="card text-center ">
        <img :src="`${store.imgUrl}${card.poster_path}`" alt="">
        <h2 v-if="!card.poster_path">IMAGE NOT AVAILABLE</h2>

        <ul class="d-flex">
            <li>TITLE: {{ card.title }}</li>
            <li> OG TITLE:{{ card.original_title }}</li>
            <li> LANGUAGE: <span :class="`fi fi-${card.original_language}`"></span></li>
            <li> RATING:{{ setvote }}</li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
.card {
    height: 600px;
    width: 250px;
    border: 5px solid black;
    background-color: black;
    color: white;

    img {
        height: 350px;
    }

    ul {
        flex-direction: column;
        text-align: center;
        padding: 1rem;  
    }

    li {

        list-style: none;
        display: flex;
        font-size: 1rem;
        justify-content: center;

    }


  
}
</style>
