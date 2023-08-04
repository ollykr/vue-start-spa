<template>
  <!-- data is now centralized so <navbar> can load the data itself -->
 <navbar>
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

export default
  {
    // Use PageViewer component
    components: {
      Navbar,
    },
    // Lifecycle events
    methods: {
      pageCreated(pageObj) {
        // Add page object (whatever typed in createPage component's fields) to pages array to display those in a navbar
        this.pages.push(pageObj);
      }
    }
  }

</script>
