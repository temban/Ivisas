<template>
  <!----start-header----->
  <div class="header">
    <div class="wrap">
      <div class="top-header">
        <div class="logo" style="max-width: 25%; position: relative">
          <a href="/">
            <img src="@/assets/img/b2.png" title="logo"
          /></a>
        </div>

        <div class="social-icons">
          <ul v-if="isLogged === false">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100088504264307" target="_blank"
                ><img src="@/assets/images/facebook.png" title="facebook"
              /></a>
            </li>
            <li>
              <a href="https://twitter.com/IVISASaffaires?t=4-VPWV8JUqMzEAZq9WHf8Q&s=09" target="_blank"
                ><img  src="@/assets/images/twitter.png" title="twitter"
              /></a>
            </li>
            <li>
              <a  href="https://www.instagram.com/invites/contact/?i=1wt17ccjw3i2v&utm_content=pysezdx" target="_blank"
                ><img src="@/assets/images/instagram.png" title="google pluse"
              /></a>
            </li>
          </ul>



          <div v-if="isLogged === true">
            <b-dropdown
            id="dropdown-dropleft"
            dropleft
              size="lg"
              variant="link"
              toggle-class="text-decoration-none dropleft"
              no-caret
            >
              <template #button-content>
                <div
                  style="
                    max-width: 100%;
                    max-height: 100%;
                    height: 50px;
                    width: 50px;
                    z-index: 3;
                  "
                >
                  <i
                    class="fa fa-caret-down"
                  ></i>

                  <div class="placeholder">
                    <span class="placeholder-text">{{ first + second }}</span>
                  </div>
                </div>
              </template>
              <div class="drop">
                <b-dropdown-item href="/userDashboard"
                  >Mon Espace</b-dropdown-item
                >
                <b-dropdown-item @click="singout"
                  >Se déconnecter</b-dropdown-item
                >
              </div>
            </b-dropdown>
          </div>
          </div>
          <div class="clear"></div>
        </div>
        <!---start-top-nav---->
        <div class="top-nav" >
          <div class="top-nav-left">
            <ul>
                <li><router-link  to="/"> Accueil </router-link></li>
              <li><router-link  to="/Visas"> visa </router-link></li>
              <li class="active"><router-link  to="/Sejour" > sejour </router-link></li>
              <li ><router-link to="/SpecialCameroun"> Spécial Cameroun </router-link></li>
              <li ><router-link to="/AboutUs"> À propos de nous </router-link></li>
              <li><router-link to="/ContactUs"> Contactez nous </router-link></li>
              <div class="clear"></div>
            </ul>
          </div>
 
          <div class="top-nav-right">
            <div class="telephone" v-if="isLogged === true">
              <span
                ><i class="phone_img"
                  ><img src="@/assets/images/phone.png" alt=""
                /></i>
                TEL</span
              ><span class="number">075-363-0510</span>
            </div>
          </div>
          <li v-if="isLogged === false"><router-link to="/Register">  <div class="top-nav-right">
          <div class="telephone">
            <span
              ><i class="phone_img"
                ><img src="@/assets/user.png" alt=""
              /></i>
              </span
            ><span class="number">Espace Client</span>
          </div>
        </div> </router-link></li>
      

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
      first:"",
        second:"",
      isLogged: this.checkIfIsLogged(),
    };
  },
  watch: {},
  created() {
    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
    var all = localStorage.getItem("Name");
      var f =  all.substring(0, all.indexOf(' ')); 
      var s =  all.substring(all.indexOf(' ') + 1)
      this.first = f[0];
      this.second = s[0];
  },
  methods: {
    singout() {
            localStorage.removeItem("access-token");
            this.isLogged = this.checkIfIsLogged();
            localStorage.clear();
            window.location.href = "/";
        },
        checkIfIsLogged() {
            let token = localStorage.getItem("access-token");
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
:root {
  --avatar-size: 18rem;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.placeholder {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  float: right;
  border-radius: 50%;
  background: goldenrod;
  transition: 0.5s;
}
.placeholder-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: sans-serif;
  font-size: 30px;
}
.fa-caret-down{
  font-size: 25px;
                      position: absolute;
                      z-index: 2;
                      top: 45px;
                      bottom: 0;
                      left: 0px;
                      right: 60px;
  }
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
  .fa-caret-down{
    font-size: 25px;
                      position: absolute;
                      z-index: 2;
                      top: 35px;
                      bottom: 0;
                      left: 0px;
                      right: 40px;
  }
  .drop{
  max-width: 50%;
  margin-right: 2rem;
}
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

  .placeholder {
    position: relative;
    display: inline-block;
    height: 44px;
    width: 45px;
    border-radius: 50%;
    background: goldenrod;
    transition: 0.5s;
  }
  .placeholder-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: sans-serif;
    font-size: 22px;
  }
}
@media screen and (max-width: 500px) {
  .phone_img img {
    max-width: 70%;
  }

  img {
    max-width: 260%;
    border-radius: 0px;
  }
}
</style>
