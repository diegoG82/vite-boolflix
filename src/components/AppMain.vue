<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    name: "AppMain",

    components: {
        AppCard,
    },

    data() {
        return {
            store
        }
    },

}

</script>

<template>
    <div class="container">
        <h2>MOVIES</h2>
        <div class="column row-cols-5 lg">

            <div class="col " v-for="element in store.filmsArray">

                <AppCard :card="element" />
            </div>

        </div>

    </div>


    <div class="container"> 
        <h2>SERIES</h2>
        <div class="column row-cols-5 lg">

            <div class="col  " v-for="element in store.seriesArray">

                <AppCard :card="element" />
            </div>

        </div>

    </div>
</template>


<style scoped lang="scss" >
h2 {
    color: red;
}


.column {

    height: 400px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    .col {
        height: 400px;
    }
}
</style>