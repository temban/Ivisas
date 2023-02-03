<template>
    <div>
      <router-link to="/UserAllDevis" ><img class="back" src="@/assets/back.gif"/></router-link> 
<VisaFromVue/>
    </div>
    </template>
    
    <script>
    import VisaFromVue from '../components/VisaForm.vue';
    export default {
      name: "form1",
      data() {
        return {};
      },
      components:{
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
    