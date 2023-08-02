<template>
    <!-- the only component that needs to listen to click custom emit is app.vue , the top component-->
    <!-- $bus is a propeerty created in app.vue to use emit globally from any component -->

    <li>
  <router-link
                :to="`/${index}`"
                class="nav-link"
                :class="activeClasses"
                aria-current="page"

                :title="`This link goes to the ${page.link.text} page`"
            >{{ page.link.text }}</router-link >
        <!-- <a
       class="nav-link"
       :class="{ active: activePage == index }"
       aria-current="page"
       :href="page.link.url"
       :title="`This link goes to the ${page.link.text} page`"
       @click.prevent="$bus.$emit('navbarLinkActivated', index)">
       {{ page.link.text }}
    </a> -->
    </li>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
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