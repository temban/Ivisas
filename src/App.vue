<template>
  <div id="app" class="app" >
    <!-- <Navbar/> -->
<div>  <router-view/></div>
  
    <!-- <b-container>
    </b-container> -->

    <div> <footerVue/></div>
   
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue"
import footerVue from "./components/footer.vue";
export default {
  name: "App",
  components: {
    // Navbar
    footerVue,
  },
  data() {
    return {
      isLogged: this.checkIfIsLogged(),
    }
  },
  created() {  
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
}
</script>
