<template>
 <navbar
  			:pages="pages"
  			:active-page="activePage"
  			:nav-link-click="(index) => activePage = index"
  		>
 </navbar>
 <page-viewer :page="pages[activePage]"
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
    // Data option
    data() {
      // The code below initialises our data only, it is not setting the data to be reactive, etc
      return {
        // Initialise click event from Home page (activePage with index 0 is our Home page link)
        activePage: 0,
        pages: [
          {
            link: { text: "Home", url: "index.html" },
            pageTitle: "Home Page",
            content: "This is the Home page",
          },
          {
            link: { text: "About", url: "about.html" },
            pageTitle: "About Page",
            content: "This is the About page",
          },
          {
            link: { text: "Contact", url: "contact.html" },
            pageTitle: "Contact Page",
            content: "This is the Contact page",
          },
        ],
      };
    },
  }

</script>
