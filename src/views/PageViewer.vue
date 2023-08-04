<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default {
    // define a prop for params watcher
    props: ['index'],
    // to access /view/pages
    inject: ['$pages'],

    created() {
        this.page = this.$pages.getSinglePage(this.$route.params.index);
        // First way of setting up a watcher - programmatically
        // first param - what params to whatc and second param is when the params to watch
        // this.$watch(() => this.$route.params, (newParams, prevParams) => {
        //     this.page = this.$pages.getSinglePage(newParams.index);
        // });
        // another (more traditional) way to set a watcher is via props
    },
    data() {
        return {
            page: null
        };
    },
    // set up a watcher to watch page params changing to display specific page accordingly (Home, About etc)
    watch: {
        index(newIndex, oldIndex) {
            // set a page with a given index
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }
}
</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>