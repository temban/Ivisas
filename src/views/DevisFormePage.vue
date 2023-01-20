<template>
    <div>
       <navSCVue/> 
<DevisFormVue/>
    </div>
    </template>
    
    <script>
    import navSCVue from '../components/navbars/neutralNavBar.vue';
    import DevisFormVue from '../components/DevisForm.vue';
    export default {
      name: "DevisFormPage",
      data() {
        return {};
      },
      components:{
        DevisFormVue,
        navSCVue
      },
      watch: {},
      created() {},
      methods: {},
    };
    </script>
    
    <style lang="scss" scoped>

    </style>
    