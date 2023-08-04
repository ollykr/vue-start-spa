<template>
    <p>{{data.counter}}</p>
    <!-- "click" is a method here -->
    <button @click.prevent="click">Click</button>
</template>



<!-- Compositions API - more convenient especially for larger projects -->
<!-- // loads before components -->
<!-- Second way -->
<script setup>
import { ref, reactive } from "vue";
// anything considered an object you can use reactive of
const data = reactive({ counter: 0 });

// How to get pages list into the component
// we use options API to get pages list - this.page = this.$pages.getSinglePage(this.$route.params.index); the pages are accesses via global property set in main.js, it is not the best way, it was aan escape hatch for Vue3 to compensate for the property used to built in in Vue2.  - but here is composition API

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