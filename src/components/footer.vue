<template>
<div>
      <!---start-footer---->
      <div class="footer">
        <div class="wrap">
          <div class="footer-grid">
            <h3>Adresse</h3>
            <div class="address">
              <ul>
                <li>Nous sommes situés en France.
                  </li>
                <li>4 Rue de la république 69001 Lyon.</li>
                <li>France.</li>
              </ul>
            </div>
          </div>
          <div class="footer-grid twitts">
            <h3>Adresse E-Mail</h3>
            <p>
              ivisas.affaire@gmail.com
            </p>
            <!-- <span>10 minutes ago...</span> -->
            <p>
              Contact@visas-affaires.com
            </p>
            <!-- <span>15 minutes ago...</span> -->
          </div>
         
          <div class="footer-grid">
            <h3>Nous Sommes Ouvert</h3>
            <p>
              Du Lundi au VendrediDe 9h à 17h
            </p>
            <p>
               <span>IVISAS-AFFAIRES </span> 
              vous propose un service complet billet d'avion, hotel, 
              chauffeur, guide touriste professionnel. une offre est 
              actuellement ouverte, profitez-en.            
            </p>
          </div>
          <div class="footer-grid center-grid">
            <h3>Contactez-Nous Au</h3>
            <ul>
              <li><a href="#">Tel: +33753630510</a></li>
              <li><a href="#">Tel: 0753630510</a></li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="copy-right">
        <p>Design by <a href="http://w3layouts.com/"> MbahgiMets-group</a></p>
      </div>
</div>
</template>

<script>

export default {
  name: "footer",
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer{
	padding:30px 0px;

    background: linear-gradient(217deg, #3d3d3d, #363636),
            linear-gradient(127deg, #0f0a0a,  #070303 70.71%),
            linear-gradient(336deg, #3d3d3d,  #363636 70.71%);

}

.copy-right{
	text-align:center;
	padding:10px 0px;
    background: linear-gradient(217deg, #2e2e2e, #282828),
}
</style>
