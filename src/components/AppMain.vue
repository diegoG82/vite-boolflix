<script>

import { store } from '../store';

export default {
    name: "AppMain",

    data() {
        return {
            store
        }
    },

}

</script>

<template>
    <div class="card" v-for="element in store.filmsArray" :key="element.id" >{{ element.title }}</div>

</template>

<style scoped lang="scss" >
.card{
    border :1px solid black;
}
</style>