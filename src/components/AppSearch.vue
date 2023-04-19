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

    <div>
        <input @keyup.enter="$emit('search')" v-model.trim="store.currentSearch" type="text" placeholder="Search">
    </div>
    

</template>
<style scoped lang="scss"></style>