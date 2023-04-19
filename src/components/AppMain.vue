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
        <div class="row row-cols-5 lg">

            <div class="col mt-2 mb-2 " v-for="element in store.filmsArray">

                <AppCard :card="element" />
            </div>

        </div>

    </div>
</template>


<style scoped lang="scss" ></style>