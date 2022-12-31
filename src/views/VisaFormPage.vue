<template>
    <div>
<navVisaVue/>
<VisaFromVue/>
    </div>
    </template>
    
    <script>
    import navVisaVue from '../components/navbars/navVisa.vue';
    import VisaFromVue from '../components/VisaForm.vue';
    export default {
      name: "form1",
      data() {
        return {};
      },
      components:{
        navVisaVue,
        VisaFromVue
      },
      watch: {},
      created() {
        
      },
      methods: {},
    };
    </script>
    
    <style lang="scss" scoped>

    </style>
    