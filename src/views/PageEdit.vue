<template>
    edit {{ route.params.index}}
</template>
<!-- get params for edit view -->
<script setup>
// import useRoute function
import { useRoute } from "vue-router";
const route = useRoute();

</script>