<!-- Note : Pages is a data we want dynamically load -->
<!-- Chapter 6, lesson 1 - Vue Router is going to router URLs to components -->
<template>
 <navbar
  			:pages="pages"
  			:active-page="activePage"
  		>
 </navbar>

<!-- Placeholder whenever router navigates user to a page, it gets displayed here -->
<router-view></router-view>
  <!-- Router now loads these 2 components  //-->
<!-- <page-viewer
 v-if="pages.length > 0"
 :page="pages[activePage]"
 ></page-viewer>

 <create-page
@page-created="pageCreated"
></create-page> -->

</template>
<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default
  {
    // Use PageViewer component
    components: {
      Navbar,
      PageViewer,
      CreatePage
    },
    // Lifecycle events
    // 'created' option or "hook"
    // We loaded components in a 'created' hook because we want to load data as soon as possible before components loaded as the data used in multiple components
    created() {
      this.getPages();

      // listen to navbar link activated event
      // set activePage value to whatever the index is
      this.$bus.$on('navbarLinkActivated', (index) => {
        this.activePage = index;
      });
    },
    // Data option
    data() {
      // The code below initialises our data only, it is not setting the data to be reactive, etc
      return {
        // Initialise click event from Home page (activePage with index 0 is our Home page link)
        activePage: 0,
        pages: []
      };
    },
    methods: {
      // Catching an information or a data ('pages') from a server
      // res as a Response
      async getPages() {
        let res = await fetch('pages.json')
        // Parse the data into JS Object
        let data = await res.json();

        this.pages = data;

      },
      pageCreated(pageObj) {
        // Add page object (whatever typed in createPage component's fields) to pages array to display those in a navbar
        this.pages.push(pageObj);
      }
    }
  }

</script>
