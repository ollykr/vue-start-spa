<template>
    <a
       class="nav-link"
       :class="{ active: activePage == index }"
       aria-current="page"
       :href="page.link.url"
       :title="`This link goes to the ${page.link.text} page`">
       {{ page.link.text }}
    </a>
</template>

<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        // We want to apply multiple css classes with a navbar link
        activeClasses() {
            return {
                // List of classes applied - we can bind those classes whenever we need CSS classes
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    }

}
</script>
<!-- It is NOT scoped to this component only as it seems  -->
<!-- By default it is not scoped , we have to define it as scoped -->
<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>