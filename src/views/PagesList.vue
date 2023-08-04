<template>
<h4>Pages</h4>
<div class="text-end"><router-link to="pages/create"
    class="btn btn-primary btn-sm">New Page</router-link></div>
<table class="table table-striped table-hover">
<thead>
    <tr><th>Title</th><th>Link Text</th><th>Is Published</th></tr>
</thead>
<tbody><tr v-for="(page, index) in $pages.getAllPages()"
    :key="index"
    >
<td>{{ page.pageTitle }}</td>
<td>{{ page.link.text }}</td>
<!-- Use 'yes/no' labels instead of true/false displayed -->
<td>{{ page.published ? 'yes' : 'no' }}</td>
    </tr>
</tbody>
</table>
</template>



<!-- Compositions API - more convenient especially for larger projects -->
<!-- // loads before components -->
<!-- Second way -->
<script setup>
import { ref, reactive, inject } from "vue";
// anything considered an object you can use reactive of
const data = reactive({ counter: 0 });

// How to get pages list into the component
// we use options API to get pages list - this.page = this.$pages.getSinglePage(this.$route.params.index); the pages are accesses via global property set in main.js, it is not the best way, it was an escape hatch for Vue3 to compensate for the property used to built in in Vue2.  - but here is composition API. We use "inject" to get pages list here
const $pages = inject('$pages');
function click() {
    // counter.value++;
    data.counter++;
}
</script>

<!-- <script>

Options API
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        click() {
            this.counter++;
}
    }
}
</script> -->