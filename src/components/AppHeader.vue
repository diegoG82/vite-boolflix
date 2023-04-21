<script>
import { store } from '../store.js'
import AppSearch from './AppSearch.vue';
import axios from "axios";

export default {
    name: 'AppHeader',

    components: {
        AppSearch,
    },
    data() {
        return {
            store,
        }
    },

    methods: {
        handleSearch() {
            console.log("handleSearch");
            const params = {
                api_key: this.store.apiKey,
                query: this.store.currentSearch
            }
            if (this.store.currentSearch) {
                this.getFilms(params);
                this.getSeries(params);
            } else {
                console.log(error);
            }
            this.store.currentSearch = "";
        },

        getFilms(params) {
            axios
                .get(this.store.apiFilms, { params })

                .then((resp) => {
                    console.log(resp);
                    this.store.filmsArray = resp.data.results;
                })
        },
        getSeries(params) {
            axios
                .get(this.store.apiSeries, { params })
                .then((resp) => {
                    console.log(resp);
                    this.store.seriesArray = resp.data.results;
                })

        }


    }





}

</script>

<template>
    <div class="main-container">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="header-title">
                <h1>Boolflix</h1>

            </div>
            <div class="header-search">
                <AppSearch @search="handleSearch" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.main-container {
    background-color: black;


    .header-title {
        width: 50%;


        h1 {
            color: red;
            line-height: 100px;
        }

    }

    
}
</style>