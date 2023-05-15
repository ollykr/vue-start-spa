<!-- Note : Pages is a data we want dynamically load -->
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
 <!-- v-show is still in the document , even though it is hidden by css - kind of lik eopacity while v-if is kind of display: block/none -->
 <page-viewer
 v-if="pages.length > 0"
 :page="pages[activePage]"
 ></page-viewer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';

export default
  {
    // Use PageViewer component
    components: {
      Navbar,
      PageViewer
    },
    // Lifecycle events
    // 'created' option or "hook"
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

      }
    }
  }

</script>
