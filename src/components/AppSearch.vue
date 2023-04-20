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
    <div class="search">
        <input @keyup.enter="$emit('search')" v-model.trim="store.currentSearch" type="text" placeholder="Find your next Show">
        <button @click="$emit('search')">GO!</button>
    </div>
</template>


<style scoped lang="scss">

.search{
    border: 5px solid red;
}

input {
    border: none;
    background: none;
    color: white;

    // &:focus-visible{

    // }
}   

button{
    background-color: red;
    border: none;
}
</style>