<template>
    <!----start-header----->
    <div>


      
     <div class="feat bg-gray pt-5 pb-5" >
    <div class="container" >
      <div class="row">


<AboutUsTwoVue/>
<div class="section-head col-sm-12">
          <h2><span>CE QUE NOUS FAISONS</span></h2>
          <h3>IVISAS-AFFAIRES, spécialiste dans la gestion de visa, facilite
l’obtention de visas en ligne et met à la disposition de sa
clientèle de nombreux autres services tels que : la
réservation des billets d’avions, d’hôtels ou encore de
véhicules pour vos différents déplacements, etc.
Grace à son service Spécial Cameroun, IVISAS-AFFAIRES
facilite à sa clientèle l’obtention d’attestation de droit
coutumier, le certificat de célibat, le transfert de corps, et le
dédouanement.
.</h3>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><img src="@/assets/logo-jpg.png"/></span>
            <h6>Notre objectif</h6>
            <p>Nous sommes une equipe de jeune dynamique, investis dans notre travail pour vous faciliter les demarches liés au demande de Visas.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><img src="@/assets/logo-jpg.png"/></span>
            <h6>Demande de visa</h6>
            <p>IVISAS-AFFAIRES prend plaisir à s'occuper de vous, avec son équipe d'experts en traitement de Visas, de votre séjour ou encore le suivi de vos dossiers.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><img src="@/assets/logo-jpg.png"/></span>
            <h6>Autres services</h6>
            <p>IVISAS-AFFAIRES vous propose un service complet 
billet d'avion, 
hotel, 
chauffeur, 
guide touriste professionnel. 
une offre est actuellement ouverte, profitez-en.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
    <!----End-header----->
  </template>
  
  <script>
  // import $ from 'jquery';
  import AboutUsTwoVue from './AboutUsTwo.vue';
  export default {
    name: "AboutUsOne",
    data() {
      return {};
    },
    components: {
      AboutUsTwoVue
  },
    watch: {},
    created() {


    },
    methods: {},
  };
  </script>
  <style lang="scss" scoped> 
        h1,
        h4,
        h5,
        h6 {}
        a,
        a:hover,
        a:focus,
        a:active {
            text-decoration: none;
            outline: none;
        }
        h2 {
  background: linear-gradient(
    to bottom,
    #f6d58e 22%,
    #d7a842 24%,
    #ffe1a2 26%,
    #f7ce75 27%,
    #ffecb3 40%,
    #ddbd78 78%

  );
  text-shadow: 3px 3px 6px #6d5921 ;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  position: relative;
  margin: 0;
  font-size: 2.8em;
  font-weight: 700;
  margin: 0 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  padding:0;
  line-height: 1;
  letter-spacing:0.3px;
  text-align:center;
  text-transform:none;
  margin-bottom:30px;
}
h3 {
color: #ffe3a6;
  text-shadow: 3px 3px 6px #0c0c0c;
  -webkit-background-clip: text;
  position: relative;
  margin: 0;
  font-size: 1.2em;
  font-weight: 700;
  margin: 0 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  padding:0;
  line-height: 1;
  letter-spacing:0.3px;
  text-align:center;
  text-transform:none;
}
        a,
        a:active,
        a:focus {
            color: #333;
            text-decoration: none;
            transition-timing-function: ease-in-out;
            -ms-transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -webkit-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            transition-duration: .2s;
            -ms-transition-duration: .2s;
            -moz-transition-duration: .2s;
            -webkit-transition-duration: .2s;
            -o-transition-duration: .2s;
        }
        
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        img {
    max-width: 100%;
    height: auto;
}
span, a, a:hover {
    display: inline-block;
    text-decoration: none;
    color: inherit;
}
.section-head {
  margin-bottom: 60px;
  margin-top: 60px;
}
.section-head h4 {
  position: relative;
  padding:0;
  color:#c89f45;
  line-height: 1;
  letter-spacing:0.3px;
  font-size: 34px;
  font-weight: 700;  
  text-align:center;
  text-transform:none;
  argin-top:20px;
  margin-bottom:20px;
}
.section-head h4:before {
  content: '';
  width: 60px;
  height: 3px;
  background: #c89f45;
  position: absolute;
  left: 0px;
  bottom: -10px;
  right:0;  
  margin:0 auto;
}
.section-head h4 span {
  font-weight: 700;
  padding-bottom: 5px;
  color:#2f2f2f
}
p.service_text{
  color:#cccccc !important;
  font-size:16px;
  line-height:28px;
  text-align:center;    
}
.section-head p, p.awesome_line{
  color:#818181;
  font-size:16px;
  line-height:28px;
  text-align:center;  
}

.extra-text {
    font-size:34px;
    font-weight: 700;
    color:#2f2f2f;
    margin-bottom: 25px;
    position:relative;
    text-transform: none;
}
.extra-text::before {
    content: '';
    width: 60px;
    height: 3px;
    background: #c89f45;
    position: absolute;
    left: 0px;
    bottom: -10px;
    right: 0;
    margin: 0 auto;
}
.extra-text span {
    font-weight: 700;
    color:#c89f45;
}
.item {
    background: #fff;
    text-align: center;
    padding: 30px 25px;
    -webkit-box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);
    box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    border:5px solid rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;
    -webkit-transition: all .5s ease 0;
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}
.item:hover{
    background:#c89f45;
    box-shadow:0 8px 20px 0px rgba(0, 0, 0, 0.2);
    -webkit-transition: all .5s ease 0;
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}
.item:hover .item, .item:hover span.icon{
    background:#fff;
    border-radius:10px;
    -webkit-transition: all .5s ease 0;
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}
.item:hover h6, .item:hover p{
    color:#fff;
    -webkit-transition: all .5s ease 0;
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}
.item .icon {
    font-size: 40px;
    margin-bottom:25px;
    color: #c89f45;   
    width: 90px;
    height: 90px;
    line-height: 96px;
    border-radius: 50px;
}
.item .feature_box_col_one{
    color:#c89f45
}
.item .feature_box_col_two{
    background:rgba(255, 77, 28, 0.15);
    color:#c89f45
}
.item .feature_box_col_three{
    background:rgba(0, 147, 38, 0.15);
    color:#c89f45
}
.item .feature_box_col_four{
    background:rgba(0, 108, 255, 0.15);
    color:#c89f45
}
.item .feature_box_col_five{
    background:rgba(146, 39, 255, 0.15);
    color:#c89f45
}
.item .feature_box_col_six{
    background:rgba(23, 39, 246, 0.15);
    color:#c89f45
}
.item p{
    font-size:15px;
    line-height:26px;
}
.item h6 {
  font-weight: 700;
    margin-bottom:20px;
    color:#2f2f2f;
    font-size: 1.5rem;
}
.mission p {
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 28px;
    font-weight: 500;
}
.mission i {
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #c89f45;
    border-radius: 50%;
    color: #fff;
    font-size: 25px;
}
.mission .small-text {
    margin-left: 10px;
    font-size: 13px;
    color: #666;
}
.skills {
    padding-top:0px;
}
.skills .prog-item {
    margin-bottom: 25px;
}
.skills .prog-item:last-child {
    margin-bottom: 0;
}
.skills .prog-item p {
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 10px;
}
.skills .prog-item .skills-progress {
    width: 100%;
    height: 10px;
    background: #e0e0e0;
    border-radius:20px;
    position: relative;
}
.skills .prog-item .skills-progress span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #c89f45;
    width: 10%;
    border-radius: 10px;
    -webkit-transition: all 1s;
    transition: all 1s;
}
.skills .prog-item .skills-progress span:after {
    content: attr(data-value);
    position: absolute;
    top: -5px;
    right: 0;
    font-size: 10px;
    font-weight:600;    
    color: #fff;
    background:rgba(0, 0, 0, 0.9);
    padding: 3px 7px;
    border-radius: 30px;
}



  /* MOBILES */
  @media (max-width: 630px) {
    h2 {
  background: linear-gradient(
    to bottom,
    #bca064 22%,
    #d7a842 24%,
    #f7c75d 26%,
    #f7ce75 27%,
    #4d411d 40%,
    #ceae6b 78%

  );
  text-shadow: 3px 3px 6px #90896c ;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  position: relative;
  margin: 0;
  font-size: 2.8em;
  font-weight: 700;
  margin: 0 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  padding:0;
  line-height: 1;
  letter-spacing:0.3px;
  text-align:center;
  text-transform:none;
  margin-top:-40px;
  margin-bottom:20px;
}

}
</style>
  
