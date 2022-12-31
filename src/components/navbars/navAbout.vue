<template>
    <!----start-header----->
    <div class="header">
      <div class="wrap">
        <div class="top-header">
          <div class="logo" style="max-width:25%; position:relative;">
              <a href="index.html"
              >
              <img src="@/assets/img/b2.png" title="logo"           /></a>
            
          </div>
          <div class="social-icons">
            <ul>
              <li>
                <a href="#"
                  ><img src="@/assets/images/facebook.png" title="facebook"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/twitter.png" title="twitter"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/google.png" title="google pluse"
                /></a>
              </li> 
            </ul>
          </div>
          <div class="clear"></div>
        </div>
        <!---start-top-nav---->
        <div class="top-nav">
          <div class="top-nav-left">
            <ul>
                <li><router-link  to="/"> Accueil </router-link></li>
              <li><router-link  to="/Visas"> visa </router-link></li>
              <li><router-link  to="/Sejour" > sejour </router-link></li>
              <li ><router-link to="/SpecialCameroun"> Spécial Cameroun </router-link></li>
              <li class="active"><router-link to="/AboutUs"> À propos de nous </router-link></li>
              <li><router-link to="/ContactUs"> Contactez nous </router-link></li>
              <div class="clear"></div>
            </ul>
          </div>

          <div class="top-nav-right">
            <div class="telephone">
              <span
                ><i class="phone_img"
                  ><img src="@/assets/images/phone.png" alt=""
                /></i>
                TEL</span
              ><span class="number">075-363-0510</span>
            </div>
          </div>
          
        <div class="top-nav-right">
          <div class="telephone">
            <span
              ><i class="phone_img"
                ><img src="@/assets/user.png" alt=""
              /></i>
              </span
            ><span class="number">Espace Client</span>
          </div>
        </div>

        <div class="clear"></div>
      </div>
      <!---End-top-nav---->
    </div>
  </div>
  <!----End-header----->
</template>

<script>
export default {
  name: "navHome",
  data() {
    return {
      isLogged: this.checkIfIsLogged(),
    };
  },
  watch: {},
  created() {
    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
  },
  methods: {
    checkIfIsLogged() {
      let token = localStorage.getItem("password");
      //localStorage.getItem('access-token')
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>

button {
  height: 50px;
  width: 100px;
  border-radius: 4px;
  background-color: white;
  outline: none;
  margin: 5px;
  transition: 0.2s;
  cursor: pointer;
}
button#cancel-button {
  color: red;
  border: 1px solid red;
}
button#cancel-button:hover {
  background-color: darkorange;
  color: white;
}
@media screen and (max-width: 1150px) {
  img {
    max-width: 300%;
    border-radius: 18px;
  }
}
@media screen and (max-width: 840px) {
  img {
    max-width: 290%;
  }
}
@media screen and (max-width: 790px) {
  img {
    max-width: 280%;
  }
}
@media screen and (max-width: 630px) {
  .login {
    display: flex;
  }
  img {
    max-width: 270%;
  }
  .logo {
    margin-top: 10px;
  }
  .logo img {
    border-radius: 10px;
  }
  .social-icons ul li a img {
    width: 2rem;
    margin-top: 1rem;
  }
  .social-icons {
    float: right;
    height: 3rem;
    width: 6rem;
    margin: 15px 0;
  }
}
@media screen and (max-width: 500px) {
  .phone_img img{
    max-width: 70%;
}

  img {
    max-width: 260%;
    border-radius: 0px;
  }
}
</style>
  