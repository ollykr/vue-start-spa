
<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- This is a component whose only purpose is to display a single link -->
                    <!-- We chain "activated" event but emit something else to app.vue higher up -->
                    <navbar-link
                    v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                    :page="page"
                    :index="index"
                    :isActive ="activePage === index"
                    @acivated="$emit('activated')"

                    ></navbar-link>
            </ul>
            <form action="" class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">
                    Toggle Navbar
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
export default {
    components: {
        NavbarLink,
    },
    // the created() method is used to perform an action immediately after the component is created.
    created() {
        this.getThemeSetting();
    },
    // to filter page creating/published data
    computed: {
        publishedPages() {
            // return an array that only has published versions via filter() method
            // if it is true, than this elemenţin the array will be in a new filtered array
            return this.pages.filter(p => p.published);

}
    },
    props: ["pages", "activePage"],
    data() {
        return {
            theme: "light",
        };
    },
    methods: {
        changeTheme() {
            let theme = "light";
            if (this.theme == "light") {
                theme = "dark";
            }
            this.theme = theme;
            this.storeThemeSetting();
        },
        // Load data here as it is specific to this component, it saves users' settings re: navbar theme to a localStorage
        storeThemeSetting() {
            // the key is "theme", the data/value is whatever is inside the "this.theme"
localStorage.setItem('theme', this.theme)
        },
                getThemeSetting() {
                    let theme = localStorage.getItem('theme');
                    // Checking if the value exists in a localStorage
                    if (theme) {
                        this.theme = theme;
                    }
        }

    },
}
</script>