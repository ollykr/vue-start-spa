<template>
    <!-- the only component that needs to listen to click custom emit is app.vue , the top component-->
    <!-- $bus is a propeerty created in app.vue to use emit globally from any component -->

    <li>
        <!-- use Vue build-in active-class prop on a route link -->
  <router-link
                :to="`/${index}`"
                class="nav-link"
                active-class="active"
                aria-current="page"

                :title="`This link goes to the ${page.link.text} page`"
            >{{ page.link.text }}</router-link >
    </li>
</template>

<script>
export default {
    props: ['page', 'index'],
}
</script>
