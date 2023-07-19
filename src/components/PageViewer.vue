<template>
    <div class="container">
        <h1 class="emphasize">Page Title</h1>
        <p>{{$route.params.index}}</p>
    </div>
</template>

<script>
export default {
    created() {
        // this.$route is the router currently been handled by this page viewer component
        // params is the object that contains all the router's params inside router's path
        // right now we have just one param - an index
        // use console.log to see params in a browser console
        // console.log(this.$route.params);
}
 			}
</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>