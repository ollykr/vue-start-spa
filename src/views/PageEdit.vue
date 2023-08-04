<template>
    edit {{ props.index}}
</template>
<!-- get params for edit view -->
<script setup>
// Define props to set params with built-in defineProps function

const props = defineProps(['index']);
</script>