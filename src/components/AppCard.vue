<script>
export default {
    name: "AppCard",
    props: {
        card: Object,
    },
};
</script>


<template>
    <div class="card text-center ">
        <!-- <img :src="`${store.imgUrl}${element.poster_path}`" alt=""> -->
            <!-- <img src="../assets/img/logo.jpg" alt=""> -->
        <p>{{ card.title }}</p>
        <p>{{ card.original_title }}</p>
        <p>{{ card.original_language }}</p>
        <p>{{ card.vote_average }}</p>
    </div>
</template>


<style scoped lang="scss">
.card {
    height: 300px;
    width: 200px;
    background-color: greenyellow;
}
</style>
