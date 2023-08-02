<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default {
    created() {
        this.page = this.$pages.getSinglePage(this.$route.params.index);
        // first param - what params to whatc and second param is when the params to watch
        this.$watch(() => this.$route.params, (newParams, prevParams) => {
            this.page = this.$pages.getSinglePage(newParams.index);
        });
    },
    data() {
        return {
            page: null
        };
    },
    // set up a watcher to watch page params changing to display specific page accordingly (Home, About etc)
    watch: {

    }
}
</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>