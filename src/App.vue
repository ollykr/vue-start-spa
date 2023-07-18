<!-- Note : Pages is a data we want dynamically load -->
<!-- Chapter 5, lesson 2 - writing global event bus. Emitted components events are not bubbled -->
<!-- In other words, emitted events are not automatically captured by parent components or higher-level components unless explicitly handled. -->
<!--  it is listeneď to only by an immediate component, not by a parent ???-->
<!-- To make emitted events accessible to higher-level components, you need to explicitly listen for and handle those events in each component within the hierarchy. This allows for more explicit and controlled communication between components. -->
<!-- Before Vue 3 we used global event bus for that ,it enables us to listent to events GLOBALLY -->
<!--  It can emit events from any components and pass them on to any other components -->
<template>
  <!-- listen to nav-link-click -->
 <navbar
  			:pages="pages"
  			:active-page="activePage"
  		>
 </navbar>
 <!-- v-if - to see if the pages array is not empty -->
 <!-- if it is true, than page viewer gets output into a document , otherwise it won't be in a document at all-->
 <!-- v-show does the same thing as v-if but only with css -->
 <!-- v-show is still in the document , even though it is hidden by css - kind of like opacity while v-if is kind of display: block/none -->
 <page-viewer
 v-if="pages.length > 0"
 :page="pages[activePage]"
 ></page-viewer>


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
