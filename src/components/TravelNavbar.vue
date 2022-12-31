<template>
  <!----start-header----->
  <div class="header">
    <div class="wrap">
      <div class="top-header">
        <div class="logo">
            <a href="index.html"
            >
          <img src="@/assets/logo-png.png" title="logo" style=""
          /></a>
          
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
            <li ><a href="index.html">Accueil</a></li>
            <li class="active"><router-link  to="/Visas" exact> visa </router-link></li>
            <li><router-link to="/" > sejour </router-link></li>
            <li><router-link to="/"> Spécial Cameroun </router-link></li>
            <li><router-link to="/"> À propos de nous </router-link></li>
            <li><router-link to="/"> Contactez nous </router-link></li>
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
        <div class="clear"></div>
      </div>
      <!---End-top-nav---->
    </div>
  </div>
  <!----End-header----->
</template>

<script>

export default {
  name: "TravelNavbar",
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {},
};
</script>

<style></style>
