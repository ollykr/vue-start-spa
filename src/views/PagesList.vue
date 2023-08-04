<template>
    <p>{{counter}}</p>
    <!-- "click" is a method here -->
    <button @click.prevent="click">Click</button>
</template>



<!-- Compositions API - more convenient especially for larger projects -->
<!-- // loads before components -->

<script setup>
import { ref, reactive } from "vue";

let counter = ref(0); // {value: 0}

function click() {
    counter.value++;
}

// without ref, the below code works (see via console.log) but it doesn't get reflected on a page , i.e click the button, nothing happens - it uses simple vars, it is NOT reactive. Behind the scenes Vue doesn't know "counter" value is being changed
// let counter = 0;

// function click() {
//     counter++;
//     console.log(counter);
// }
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