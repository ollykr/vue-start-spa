<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
                    <!-- This is a component whose only purpose is to display a single link -->
                    <navbar-link
                    :page="page"
                    :isActive ="activePage === index"
                    @click.prevent="navLinkClick(index)"
                    ></navbar-link>
                    <!-- <a class="nav-link" :class="{active: activePage == index}" aria-current="page" :href="page.link.url"
                        :title="`This link goes to the ${page.link.text} page`"
                        @click.prevent="navLinkClick(index)">{{page.link.text}}
                    </a> -->
                </li>
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
    props: ["pages", "activePage", "navLinkClick"],
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