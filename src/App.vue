<template>
  <div id="app" class="app" >
    <!-- <Navbar/> -->
<div>  <router-view/></div>
  
 

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
      $url:  this.$url,
      all:[],
      child:[],
      child2:[],
      myArray: []
      
    }
  },
  created() {  
    this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  mounted(){
    let url1 = this.$url;
    function refreshtoken() { 

var axios = require('axios').default;

var config = {
  method: 'get',
  url:  url1+'/refreshToken',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  const temp = response.data;
     const refreshtoken = Object.values(temp)[0];
      const accesstoken = Object.values(temp)[1];
  // console.log(JSON.stringify(accesstoken));
  // console.log(JSON.stringify(refreshtoken));

localStorage.setItem('refresh-token', refreshtoken);
localStorage.setItem('access-token', accesstoken);
  console.log('Fresh-Token!');
})
.catch(function (error) {
  console.log(error);
//   localStorage.clear();
//window.location.reload();
});
}setInterval(refreshtoken, 500000);



var axios = require('axios').default;
var config = {
  method: 'get',
  url: this.$url+'/profile',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
};

axios(config)
.then((res) => {

  // console.log(JSON.stringify(res.data));


  this.myArray.push(res.data);

localStorage.setItem('infoUser',JSON.stringify(res.data))          
localStorage.setItem('userId', res.data.id);
localStorage.setItem('Name', res.data.name);
localStorage.setItem('tel', res.data.phone);
localStorage.setItem('email', res.data.email);
localStorage.setItem('authorized', res.data.authorized)
localStorage.setItem("profileImage", res.data.profileImage)


this.currenUser = res.data.id;
window.onbeforeunload = () => {
  localStorage.removeItem('isAuth');
}
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
.catch(function (error) {
  console.log(error);
//  localStorage.clear()
// window.location.href = "/"
});
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
