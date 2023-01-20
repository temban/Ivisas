<template>
  <div style="position: relative">
    <div
      class="container group"
      style="
        background: linear-gradient(#e2e0e0, #fff);
        border-radius: 30px 30px 0 0;
        margin-bottom: 20px;
      "
    >
      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Carte d’identité consulaire </span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">
          *Formulaire à remplir(fournir avec le devis).<br />
          *2 photos.<br />
          *Photocopie de l’acte de naissance.<br />
          *Photocopie du passeport en cours.<br />
        </p>


        <div id="login-alert" class="fxm-content banner">
  <!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
    <div class="alert-content" data-children-count="1">
      <input id="collapsible" class="toggle" type="checkbox">
      <label for="collapsible" class="lbl-toggle">Plus d'info</label>
      <div class="collapsible-content" style="z-index:40">
        <div class="content-inner">
         <p style="font-size:1.1rem; text-align:left;">*Justificatif d’emploi ou certificat de scolarité.<br />
          *Justificatif de domicile.</p>

        </div>
      </div>
  </div>

</div>

<router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>


        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Attestation de coutume</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">

          *Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail<br />
*Photocopie d’une pièce d’identité des deux parents<br />

        </p>


        <div id="login-alert" class="fxm-content banner">
  <!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
    <!-- <div class="alert-content" data-children-count="1">
      <input id="collapsible1" class="toggle" type="checkbox">
      <label for="collapsible1" class="lbl-toggle">Plus d'info</label>
      <div class="collapsible1-content" style="z-index:40">
        <div class="content-inner">
         <p style="font-size:1.1rem; text-align:left;">*Photocopie d’un justificatif de domicile<br /></p>

        </div>
      </div>
  </div> -->

</div> <router-link to="/DevisFormePage">
  <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
</router-link>
      </div>


      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">D’un certificat de coutume</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">

          *Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail;<br />
*Photocopie du passeport<br />


        </p>


        <div id="login-alert" class="fxm-content banner">
  <!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
    <div class="alert-content" data-children-count="1">
      <input id="collapsible2" class="toggle" type="checkbox">
      <label for="collapsible2" class="lbl-toggle">Plus d'info</label>
      <div class="collapsible2-content" style="z-index:40">
        <div class="content-inner">
         <p style="font-size:1.1rem; text-align:left;">*Déclaration sur l’honneur ou de non-mariage dument remplie datée et signée ( à fournir avec le
devis)<br />
*Un jugement de divorce (original et photocopie), ou acte de décès du conjoint,<br />

*L’original de l’acte de (naissance, de mariage ou de décès)<br />
*Photocopie d’une pièce d’identité du conjoint<br />
*Photocopie de titre de séjour<br />
*Photocopie d’un justificatif de domicile<br /></p>

        </div>
      </div>
  </div>

</div>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Certificat de célibat</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">

*Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail;<br />
*Photocopie du passeport<br />


</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible4" class="toggle" type="checkbox">
<label for="collapsible4" class="lbl-toggle">Plus d'info</label>
<div class="collapsible4-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">*Déclaration sur l’honneur ou de non-mariage dument remplie datée et signée ( à fournir avec le
devis)<br />
*Un jugement de divorce (original et photocopie), ou acte de décès du conjoint,<br />

*L’original de l’acte de (naissance, de mariage ou de décès)<br />
*Photocopie d’une pièce d’identité du conjoint<br />
*Photocopie de titre de séjour<br />
*Photocopie d’un justificatif de domicile<br /></p>

</div>
</div>
</div>

</div>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Extrait d'acte de naissance</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">

*Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail;<br />
*Photocopie du passeport<br />


</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible5" class="toggle" type="checkbox">
<label for="collapsible5" class="lbl-toggle">Plus d'info</label>
<div class="collapsible5-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">*Déclaration sur l’honneur ou de non-mariage dument remplie datée et signée ( à fournir avec le
devis)<br />
*Un jugement de divorce (original et photocopie), ou acte de décès du conjoint,<br />

*L’original de l’acte de (naissance, de mariage ou de décès)<br />
*Photocopie d’une pièce d’identité du conjoint<br />
*Photocopie de titre de séjour<br />
*Photocopie d’un justificatif de domicile<br /></p>

</div>
</div>
</div>

</div>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">D’un certificat de vie
</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">

          *Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail<br />
*Photocopie d’un justificatif de domicile<br />
</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible6" class="toggle" type="checkbox">
<label for="collapsible6" class="lbl-toggle">Plus d'info</label>
<div class="collapsible6-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  *Original de l’acte naissance ou de la carte nationale d’identité<br />
*L’original du passeport et du titre de séjour en France<br /></p>

</div>
</div>
</div>

</div>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">D’un certificat de nationalité
</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">
*Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail<br />
*Photocopie d’une pièce d’identité<br />
</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible7" class="toggle" type="checkbox">
<label for="collapsible7" class="lbl-toggle">Plus d'info</label>
<div class="collapsible7-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  *Photocopie d’un justificatif de domicile<br />
*L’original de l’acte de naissance<br /></p>

</div>
</div>
</div>

</div>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Extrait d’acte de naissance.
</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">
          
          *Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail<br />
*Photocopie d’une pièce d’identité<br />

</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible9" class="toggle" type="checkbox">
<label for="collapsible9" class="lbl-toggle">Plus d'info</label>
<div class="collapsible9-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  *L’original de l’acte de (naissance, de mariage ou de décès)<br />
*Photocopie d’un justificatif de domicile<br />
*Pour la délivrance d’une fiche familiale d’état civil, produire le livret de famille ou l’original de l’acte
de mariage accompagné des actes de naissances des enfants<br /></p>

</div>
</div>
</div>

</div>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      
      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">D’une copie d’acte de mariage</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">
          
          *Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail<br />
*Photocopie d’une pièce d’identité<br />
</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible10" class="toggle" type="checkbox">
<label for="collapsible10" class="lbl-toggle">Plus d'info</label>
<div class="collapsible10-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  *L’original de l’acte de (naissance, de mariage ou de décès)<br />
*Photocopie d’un justificatif de domicile<br />
*Pour la délivrance d’une fiche familiale d’état civil, produire le livret de famille ou l’original de l’acte
de mariage accompagné des actes de naissances des enfants<br /></p>

</div>
</div>
</div>

</div>

<router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Transfert de corps</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">
*Une demande de transfert de corps de la part des pompes funèbres<br />
*Attestation de non contagion<br />
*Procès-verbal de mise en bière<br />




</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible12" class="toggle" type="checkbox">
<label for="collapsible12" class="lbl-toggle">Plus d'info</label>
<div class="collapsible12-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  *Certificat de décès<br />
*Un extrait d’acte de décès<br />
*Un procès-verbal de transfert de corps<br />
*Une autorisation de transport de corps<br />
*Photocopie du passeport du défunt<br />
*Un permis d’inhumer<br /></p>

</div>
</div>
</div>

</div>

<router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Transcription de l’acte de naissance d’un enfant</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700;">
*Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),...
<br />



</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible11" class="toggle" type="checkbox">
<label for="collapsible11" class="lbl-toggle">Plus d'info</label>
<div class="collapsible11-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  adresse, numéro de téléphone et mail.<br />
*Photocopie du livret de famille.<br />
  *Photocopie de la pièce d’identité des deux parents<br />
*Copie intégrale de l’acte de naissance de l’enfant datant de moins de 3 mois<br />
*Photocopie d’un justificatif de domicile<br />
*Justificatif de la profession des parents<br />
*L’original du passeport et du titre de séjour en France<br /></p>

</div>
</div>
</div>

</div>

<router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>
      

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Copie integrale d'acte de naissance</span></h2>
        <p style="font-size: 1.1rem; text-align:left; font-weight: 700; width: 15.6rem;">
*Une demande manuscrite adressée à Mr le Consul portant mention de vos nom(s), prénom(s),
adresse, numéro de téléphone et mail.<br />


</p>


<div id="login-alert" class="fxm-content banner">
<!--div id="login-alert" class="fxm-content banner" style="display: none;"-->
<div class="alert-content" data-children-count="1">
<input id="collapsible3" class="toggle" type="checkbox">
<label for="collapsible3" class="lbl-toggle">Plus d'info</label>
<div class="collapsible3-content" style="z-index:40">
<div class="content-inner">
<p style="font-size:1.1rem; text-align:left;">
  *L’original de l’acte de (naissance, de mariage ou de décès)<br />
*Photocopie d’une pièce d’identité<br />
*Photocopie d’un justificatif de domicile<br />
*Pour la délivrance d’une fiche familiale d’état civil, produire le livret de famille ou l’original de l’acte
de mariage accompagné des actes de naissances des enfants<br /></p>

</div>
</div>
</div>

</div>

<router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

   



      <!-- <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Laissez-passer</span></h2>
        <p style="font-size: 1.1rem">
          Timbres fiscaux officiels à remettre au Consulat + commissions de
          traitement.
        </p>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div>

      <div class="grid-1-5">
        <div class="mt-1 mb-1">
          <img
            src="@/assets/logo-jpg.png"
            class="rounded-circle img-fluid"
            style="
              border-radius: 60px;
              image-resolution: 3000000dpi;
              background-color: #000;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              max-width: 100%;
              max-height: 100%;
              height: 100px;
              width: 100px;
            "
          />
        </div>
        <h2><span class="fs-10">Dossier passeport</span></h2>
        <p style="font-size: 1.1rem">
          Timbres fiscaux officiels à remettre au Consulat + commissions de
          traitement.
        </p>
        <router-link to="/DevisFormePage">
  <a href="" @click="cmr()" class="button">Devis</a>
</router-link>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialCameroonPricing",
  data() {
    return {};
  },
  components: {},
  watch: {},
  created() {},
  methods: {
    cmr(){
      localStorage.setItem('selected_country', 'Cameroun')
    }
  },
};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);

*,
*:before,
*:after {
  box-sizing: inherit;
}

.container {
  width: 100%;
  max-width: 99%;
}
.group:after {
  content: "";
  display: flex;

  clear: both;
}
.grid-1-5 {
  margin: 0.2rem;
  margin-top: 20px;
  border: 2px solid #00000080;
  height: 25.5rem;
  max-width: 19.5%;
  padding: 1.25em;
  position: relative;
  border-radius: 10px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  background-size: 100%;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 1);
  background: url("~@/assets/img/gorld-card.png");
  // background:linear-gradient( rgba(0, 0, 0, 0.583), rgba(0, 0, 0, 0) ), url("~@/assets/img/gorld-card.png");

  @media screen and (min-width: 700px) {
    & {
      float: left;
      width: 50%;
    }
    &:nth-child(odd) {
      clear: left;
    }
  }

  @media screen and (min-width: 800px) {
    & {
      width: 33.3333333%;
    }
    &:nth-child(3n + 1) {
      clear: left;
    }
    &:nth-child(odd) {
      clear: none;
    }
  }

  @media screen and (min-width: 1120px) {
    & {
      width: 20%;
    }
    &:nth-child(odd),
    &:nth-child(3n + 1) {
      clear: none;
    }
  }
}

/* TABLETS */
@media (max-width: 950px) {
}

/* MOBILES */
@media (max-width: 630px) {
  .grid-1-5 {
    max-width: 100%;
  }
}


h2 {
  background: linear-gradient(
    to bottom,
    #ffe6b1 22%,
    #ffce63 24%,
    #ffe1a2 26%,
    #f7ce75 27%,
    #ffecb3 40%,
    #f6e0b0 78%
  );
  text-shadow: 3px 3px 6px #564202;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin: 0;
  font-size: 1.8em;
  font-weight: 700;
  margin: 0 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
}

h2:after {
  background: none;
  content: attr(data-heading);
  left: 0;
  top: 0;
  z-index: -1;
  position: absolute;
  text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f,
    5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);
}
.grid-1-5:hover {
  background-color: #e6c610;
  border-top: 2px solid #ec7a37;
  border-bottom: 2px solid #ff4f69;
  box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 1);
  transform: scale(1.025);
  z-index: 2;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: rgb(246, 125, 53);
    top: -2px;
    bottom: -2px;
    width: 2px;
  }

  &:before {
    left: -2px;
  }
  &:after {
    right: -2px;
  }

  & .button {
    background-color: rgb(41, 38, 35);
  }
}
h2,
h3,
p,
ul {
  margin: 0;
}

h3 {
  font-size: 1.5em;
  letter-spacing: 0.0625em;
  margin: 0 0 0.3333333333333333em;
}
p {
  font-size: 0.875em;
}
p,
ul {
  margin: 0 0 1.5em;
}
ul {
  color: #d4af37;
  font-size: 0.75em;
  list-style-type: none;
  padding: 0;

  li {
    margin: 0 0 0.8333333333333333em;
  }
}
.button {
  background-color: #0f0e0e00;
  border-radius: 5px;
  color: #f0cc7f;
  text-shadow: 3px 3px 6px #000000;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.75em 1.5em;
  position: absolute;
  bottom: 0.2em;
  left: 32%;
  text-decoration: none;
  width: 100px;
  height: 2.7rem;
}

sup,
.small {
  font-size: 0.6125em;
}










.fxm-content.banner {
display: none;
}
label{
  text-shadow: 3px 3px 6px #000000;
  -webkit-background-clip: text;
  position: relative;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
}
.fxm-content .alert {
  margin: 0 auto;
  width: 60%;
}
.fxm-content .alert-content {
  display: inline-block;
  color: #fff !important;
  font-size: 15px;
  font-family: sans-serif;
  text-align: left;
  line-height: 24px;
}
.fxm-content .alert-content p {
  color: #fff;
  float: left;
  margin-right: 10px;
}
.fxm-content .alert-content p.headline {
  margin-left: 10px;
}
.fxm-content .alert-content .content-inner p {
  margin: 0 0 5px;
}
.fxm-content .alert-content input[type="checkbox"] {
  display: none;
}
.fxm-content .alert-content .lbl-toggle {
  float: left;
  cursor: pointer;
  background-color: #0f0e0e00;
  border-radius: 5px;
  color: #f0cc7f;
  text-shadow: 3px 3px 6px #000000;
  font-size: 1.1rem;
  font-weight: 700;
  position: absolute;
  bottom: -1em;
  left: 5%;
  text-decoration: none;
  width: 300px;
  height: 2.7rem;
}
.fxm-content .alert-content .lbl-toggle::after {
  content: " ";
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 7px solid #f0cc7f;
  vertical-align: middle;
  margin-left: 0.7rem;
  transform: translateY(-2px);
  transition: transform 0.2s ease-out;
}



 //part 3==================================================================
 .fxm-content .alert-content .collapsible-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}
.fxm-content .alert-content .collapsible1-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible2-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible3-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible4-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}
.fxm-content .alert-content .collapsible5-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible6-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}


.fxm-content .alert-content .collapsible7-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}
.fxm-content .alert-content .collapsible8-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible9-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible10-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}
.fxm-content .alert-content .collapsible11-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

.fxm-content .alert-content .collapsible12-content {
  max-height: 0;
  overflow: hidden;
  clear: both;
  transition: max-height 0.25s ease-in-out;
}

 //part 3==================================================================




 //part 2==================================================================
 .fxm-content .alert-content .collapsible-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible1-content a {
  color: #e8e8e8;
}


.fxm-content .alert-content .collapsible2-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible3-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible4-content a {
  color: #e8e8e8;
}


.fxm-content .alert-content .collapsible5-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible6-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible7-content a {
  color: #e8e8e8;
}


.fxm-content .alert-content .collapsible8-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible9-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible10-content a {
  color: #e8e8e8;
}


.fxm-content .alert-content .collapsible11-content a {
  color: #e8e8e8;
}

.fxm-content .alert-content .collapsible12-content a {
  color: #e8e8e8;
}

 //part 2==================================================================





  //part 1==================================================================
  .fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
  + .collapsible-content {
      margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible1-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible2-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible2-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible3-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible4-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible5-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible6-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible7-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible8-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible9-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible10-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible11-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible12-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
 //part 1==================================================================



.fxm-content .alert-content .toggle:checked + .lbl-toggle::after {
  transform: rotate(90deg) translateX(-3px);
}
@media (min-width: 320px) and (max-width: 1024px) {
  .fxm-content .alert-content .collapsible-content {
    margin-top: 20px;
  }
  .fxm-content .alert {
    width: 80%;
  }
  .fxm-content .alert-content .lbl-toggle {
    float: none;
    clear: both;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
}


@media (max-width: 630px) {
  .tm-slideshow-description {
    border-radius: 0rem;
  }

.fxm-content .alert-content .lbl-toggle {

  float: left;


  background-color: #0f0e0e00;
  border-radius: 5px;
  color: #f0cc7f;
  text-shadow: 3px 3px 6px #000000;
  font-size: 1.1rem;
  font-weight: 700;
  position: absolute;
  bottom: -0.3em;
  left: 5%;
  text-decoration: none;
  width: 300px;
  height: 2.7rem;
}




  //part 1==================================================================
  .fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
  + .collapsible-content {
      margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible1-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible2-content {
    margin-top: 1.7rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible2-content {
    margin-top: 3rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible3-content {
    margin-top:4.35rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible4-content {
    margin-top: 5.16rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible5-content {
    margin-top: 3rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible6-content {
    margin-top: 3.8rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible7-content {
    margin-top: 3rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible8-content {
    margin-top: 3rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible9-content {
    margin-top: 3rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible10-content {
    margin-top: 3rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible11-content {
    margin-top: 3.6rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}

.fxm-content
  .alert-content
  .toggle:checked
  + .lbl-toggle
+ .collapsible12-content {
    margin-top: 6.49rem;
  background-color: #696969;
  max-height: 350px;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
 //part 1==================================================================


}
</style>
