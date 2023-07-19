<template>
    <div class="container">
        <h1 class="emphasize">Page Title</h1>
        <p>content</p>
    </div>
</template>

<script>
export default {
    props: {
        page: {
            // since the type is an Object, we have to write a function
            type: Object,
            default(rawProps) {
                return {
                    pageTitle: '',
                    content: '',
                };
            }
        }
    }
 			}
</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>