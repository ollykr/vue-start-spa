<!-- Note : Pages is a data we want dynamically load -->
<!-- Chapter 4, lesson 3: Loading Data -->
<!-- To decide how to load a data. Criterias: 1. Is it going to be used in multiple components or 2. in a single component -->
<!-- Chapter 4 , Lesson 6 - if Published checkbox is checked, the added page is displayed in a navbar -->
<template>
 <navbar
  			:pages="pages"
  			:active-page="activePage"
  			:nav-link-click="(index) => activePage = index"
  		>
 </navbar>
 <!-- v-if - to see if the pages array is not empty -->
 <!-- if it is true, than page viewer gets output into a document , otherwise it won't be in a document at all-->
 <!-- v-show does the same thing as v-if but only with css -->
 <!-- v-show is still in the document , even though it is hidden by css - kind of like opacity while v-if is kind of display: block/none -->
 <!-- <page-viewer
 v-if="pages.length > 0"
 :page="pages[activePage]"
 ></page-viewer>
-->

<!-- Create a new page object inside another component -->
<!-- "pageCreated" is a method -->
<create-page
@page-created="pageCreated"
></create-page>

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
