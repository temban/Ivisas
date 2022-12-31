<template>
    <div style="position: relative; background-color: red; max-width: 100%;">
  
      <div  style="position:relative;background: linear-gradient(#a2a2a2, #e2e0e0); margin-top: -30px;">
        <section class="programs">
          <a href="#">
            <div class="content" style="  overflow: hidden;
  position: relative;">
              <h1>Option billet d'avion</h1>
              <p style="font-size:1.2rem">
                Notre équipe vous compare les meilleurs choix aux meilleurs prix des billets d'avions pour vous proposer des billets d'avion abordable, en partenariat avec plusieurs agences de voyage aérien, nos équipes expérimentées vous établissent les meilleurs propositions.


              </p>
              <!-- <ul>
                <li>
                  <i class="fa fa-clock-o"></i
                  ><span>Duration: 25 - 30 minutes</span>
                </li>
                <li>
                  <i class="fa fa-globe"></i><span>Type: Helicopter Tours</span>
                </li>
              </ul> -->
            </div>
          </a>
          <img src="@/assets/img/p4.png" />
        </section>
  
        <section class="programs">
          <a href="#">
            <div class="content" style="  overflow: hidden;
  position: relative;">
              <h1>Option chauffeur</h1>
              <p style="font-size:1rem">
                Nous sommes une plateforme de location de véhicules en ligne qui met en relation les propriétaires de voitures avec les locataires. Nous sommes une entreprise familiale, dirigée par ma sœur et son mari. Nous proposons des locations de voitures aux personnes au Royaume-Uni et à l'étranger. Nous avons une flotte de plus de 30 000 voitures et nous pouvons louer ces voitures à des particuliers. Nous fournissons également une application mobile qui permet aux gens de louer leur voiture en ligne.
              </p>
              <!-- <ul>
                <li>
                  <i class="fa fa-clock-o"></i><span>Duration: 7 hours</span>
                </li>
                <li>
                  <i class="fa fa-globe"></i><span>Type: Exclusive Tours</span>
                </li>
              </ul> -->
            </div>
          </a>
          <img src="@/assets/img/se4.png" />
        </section>
  
        <section class="programs">
          <a href="#">
            <div class="content" style="  overflow: hidden;
  position: relative;">
              <h1>Option hebergement</h1>
              <p style="font-size:1.2rem">
                Nous nous engageons à fournir le meilleur service possible et à faire en sorte que nos clients vivent leurs passions et le meilleur séjour possible. Nos équipes de logement s'occupent de vous trouver un logement sur mesure selon vos envies, que vous soyez en famille, avec des amis, vos proches, nous avons la solution.
              </p>
              <!-- <ul>
                <li>
                  <i class="fa fa-clock-o"></i><span>Duration: 8 hours</span>
                </li>
                <li>
                  <i class="fa fa-globe"></i
                  ><span>Type: Scuba & Snorkelling</span>
                </li>
              </ul> -->
            </div>
          </a>
          <img src="@/assets/img/p2.png" />
        </section>

        <section class="programs">
          <a href="#">
            <div class="content" style="  overflow: hidden;
  position: relative;">
              <h1 >Option guide</h1>
              <p style="font-size:1rem">
                Nous offrons une variété de visites adaptées à votre budget et à la période de l'année. Nous avons conçu notre itinéraire pour offrir quelque chose pour tout le monde et répondre à tous les groupes d'âge avec lesquels vous souhaitez réserver ! Du classique 2 mile autour du virage à une boucle de 5 mile de l'ensemble du parcours, nous proposerons une activité amusante et éducative à faire pour vos enfants, pendant que vous y êtes.


              </p>
              <!-- <ul>
                <li>
                  <i class="fa fa-clock-o"></i><span>Duration: 8 hours</span>
                </li>
                <li>
                  <i class="fa fa-globe"></i
                  ><span>Type: Scuba & Snorkelling</span>
                </li>
              </ul> -->
            </div>
          </a>
          <img src="@/assets/img/tour.png" />
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SejourInfo",
    data() {
      return {};
    },
    components: {
    },
    watch: {},
    created() {},
    methods: {},
  };
  </script>
  
  <style lang="scss" scoped>
  /** === === GOOGLE FONTS === === */
  
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);
  @import url(https://fonts.googleapis.com/css?family=Dosis:400,500,600,700);
  @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);
  
  /** === === RESETS === === */
  
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  
  figure {
    margin: 0;
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section {
    display: block;
  }
  
  audio[controls],
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }
  
  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  
  a:hover {
    text-decoration: none !important;
  }
  
  a.no-action-link {
    cursor: default;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    line-height: inherit;
    cursor: pointer;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  strong,
  b {
    font-weight: bold;
    line-height: inherit;
  }
  
  small {
    font-size: 60%;
    line-height: inherit;
  }
  
  code {
    font-weight: bold;
    background: #ffff99;
  }
  
  ul,
  ol {
    margin-bottom: 17px;
    list-style-position: inside;
  }
  
 
  body {
	font-family: 'Open Sans',Verdana,Geneva,sans-serif;
  line-height: 1.250em;
	height: 100%;
}

  h1 {
    font-size: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    margin: 15px auto;
    width: 500px;
    height: 30px;
  }
  .container1 {
    position: relative;
   padding: 20px;
   height: auto;
  }
  
  section {
    margin-top: -1rem;
    position: relative;
    height: 100%;
    height: 450px;

  }
  
  section img {
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    padding: 0;
    height: 100%;
  }
  
  section a {
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6) none;
    display: block;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  
  section a:hover {
    background: rgba(0, 0, 0, 0.761);
    text-decoration: none;
  }
  
  h2 {
    font-family: "Dosis", sans-serif;
    font-size: 0.875em;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  h3 {
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.2em;
    width: 90%;
  }
  
  p {
    font-size: 0.875em;  }
  
  ul {
    display: none;
  }
  
  div.content {
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;
  }
  
  div.content h3 {
    margin: 5px 0 20px 0;
  }
  
  @media screen and (min-width: 40.5em) {
    p {
      display: none;
    }
  
    section.programs {
        margin-right: -0px;
        margin-bottom: 3rem;
        display:inline-table;
      width: 25%;
      overflow: hidden;
  position: relative;
      border-left: 1px solid #000;
    }
  
    div.content {
      padding-top: 80px;
    }
  
    div.content h3 {
      margin: 5px 0 100px 0;
    }
  }
  
  @media screen and (min-width: 62em) {
    .container {
      width: 75%;
      height: 400px;
      margin: 0 auto;
    }
  
    h3 {
      font-size: 1.25em;
    }
  
    p {
      display: block;
      font-weight: 300;
      line-height: 1.4em;
      font-size: 0.875em;
    }
  
    div.content {
        overflow: hidden;
  position: relative;
      padding-top: 50px;
      padding-top: 130px;
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      -o-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }
  
    div.content h3 {
      margin-bottom: 10px;
    }
  
    div.content p {
      margin-top: 20px;
      color: rgba(0, 0, 0, 0);
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      -o-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }
  
    div.content h3 {
      margin-bottom: 10px;
      font-size: 1.4em;
      line-height: 1.3em;
    }
  
    div.content ul {
      margin-top: 10px;
      display: block;
      padding-left: 5px;
      color: rgba(0, 0, 0, 0);
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      -o-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }
  
    div.content ul li {
      list-style: none;
      font-size: 0.875em;
      margin-bottom: 5px;
    }
  
    div.content ul li span {
      margin-left: 5px;
    }
  
    section a:hover div.content p {
      margin-top: 0;
      color: #ffffff;
    }
  
    section a:hover div.content ul {
      margin-top: 0;
      color: rgba(255, 255, 255, 0.5);
    }
  
    section a:hover div.content {
      padding-top: 50px;
    }
  
    h2 {
      font-size: 1em;
    }
  }
  
  @media screen and (min-width: 100em) and (min-height: 50em) {
    section.programs div.content {
      padding-top: 220px;
    }
  
    section.programs div.content h3 {
      margin-bottom: 15px;
    }
  
    section.programs div.content ul {
      margin-top: 15px;
      display: block;
    }
  
    section.programs div.content ul li {
      font-size: 0.875em;
    }
  
    section.programs asection a:hover div.content {
      padding-top: 60px;
    }
  
    section.programs asection a:hover div.content p {
      margin-top: 0;
      color: #ffffff;
    }
  }
  </style>
  