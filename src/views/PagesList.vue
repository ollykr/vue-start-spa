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