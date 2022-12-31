<template>
  <div>
    <div style="position:relative; margin-bottom: 30px">
        <navVisaVue/>
    </div>
<VisaInfosVue/>

<CountriesVue/>
  </div>
</template>

<script>
import navVisaVue from '../components/navbars/navVisa.vue';
import CountriesVue from '../components/Countries.vue';
import VisaInfosVue from '../components/continents/VisaInfos.vue';
export default {
  name: "Visas",
  data() {
    return {
  
    };
  },
  components: {
    navVisaVue,
    CountriesVue,
    VisaInfosVue, 
  },
  watch: {},
  created() 
  {
    this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {
    
    checkIfIsLogged () {
      let token = localStorage.getItem('password')
      //localStorage.getItem('access-token')
      if (token) {
        return true
      } else {
        return false
      }
    },
  },
};
</script>
