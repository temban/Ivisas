<template>
    <!----start-header----->
    <div >
     <navAboutVue/>
     <AboutUsOneVue/>
  
    </div>
    <!----End-header----->
  </template>
  
  <script>
  // import $ from 'jquery';
  import AboutUsOneVue from '../components/AboutUsOne.vue';
  import navAboutVue from '../components/navbars/navAbout.vue';
  export default {
    name: "AboutUs",
    data() {
      return {};
    },
    components: {
        navAboutVue, 
        AboutUsOneVue
  },
    watch: {},
    created() {


    },
    methods: {},
  };
  </script>
  <style lang="scss" scoped> 
  
</style>
  
