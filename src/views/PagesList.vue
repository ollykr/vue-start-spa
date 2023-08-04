<template>
    <p>{{counter}}</p>
    <!-- "click" is a method here -->
    <button @click.prevent="click">Click</button>
</template>

<script>
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
</script>