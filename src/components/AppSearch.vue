<script>
import { store } from '../store';

export default {
    name: "Appsearch",



    data() {
        return {
            store
        }
    },
    emits: ["search"]

}

</script>
<template>
    <!-- <div class="search">
            <input @keyup.enter="$emit('search')" v-model.trim="store.currentSearch" type="text" placeholder="Find your next Show">
            <button @click="$emit('search')">GO!</button>
        </div> -->

    <div class="input-group mb-3">
        <input @keyup.enter="$emit('search')" v-model.trim="store.currentSearch" type="text" class="form-control"
            placeholder="Find your next show" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button @click="$emit('search')" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
</template>


<style scoped lang="scss">


input {
    border: none;

    color: white;

    
}

button {
    background-color: red;
    border: none;
}
</style>