<template>
<div> 

  <div class="va-carrousel-section" >
    <div class="va-whitewrap">
        <div id="va_containerAsia">
            <button class="deals-scroll-leftAsia deals-paddle">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                    class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                    </path>
                </svg>
            </button>

            <div class="va-carrousel-flexboxAsia" >
               
               
                <div class="Card2 ph1" v-for="(item, index) in africanCountries" :key="index"> 
                    
                    <img class="va-thumbnail" 
                    :src="item.flags.png">
                    <div style="position: absolute; 
            top: 3rem; left:0px;     background-color:#ffffff5d;width:18rem;">
                        <h3  style="font-size:1.8rem; font-weight: 700; margin-left: 0.9rem;">
                            {{ item.translations.fr }}
        </h3>
          
                    </div>
                    
                    <h2 class="title" style="z-index:50">{{ item.translations.fr }}</h2>
  <div class="overlay">
    <h2 class="title">{{ item.translations.fr }}</h2>


   <router-link to="/register"  class="link" v-if="isLogged === false">S'identifier</router-link> 
   <div  @click="devisForm(item.translations.fr)" > 
            <router-link to="/DevisFormePage" class="link" v-if="isLogged === true">Devis</router-link>
        </div>

  </div>
                   </div>
            </div>

            <button class="deals-scroll-rightAsia deals-paddle">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                    class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                    </path>
                </svg>
            </button>
        </div>


    </div>

</div>
</div>
  </template>
  
  <script>
// import $ from 'jquery';


  export default { 
    name: "NAmerica",
    data() {
      return {
        slidedivs: 3,
        africanCountries:[],
        isLogged : this.checkIfIsLogged()
      };
    },
    components: {
    },
    watch: {},
    created() {
        var axios = require("axios").default;

var config = {
  method: "get",
  url:'https://restcountries.com/v2/region/Asia',
  headers: {
    "Content-Type": "application/json",
  },
};

axios(config)
  .then((res) => {
 this.africanCountries=res.data;
console.log("Asia",  this.africanCountries)
  })
  .catch(function (error) {
    console.log(error);
  });

    },
    mounted() {
      this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
      var isAnimatingAsia = false;

function scrollLeftAnimate(elem, unit) {

    if (!elem || isAnimatingAsia) {
        //if element not found / if animating, do not execute slide
        return;
    }

    var time = 300; // animation duration in MS, the smaller the faster.
    var from = elem.scrollLeft; // to continue the frame posistion
    var aframe =
        10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
    isAnimatingAsia = true; //if animating prevent double trigger animation

    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            elem.scrollLeft = ((step * unit) + from);
            if (step === 1) {
                clearInterval(timer);
                isAnimatingAsia = false;
            }
        }, aframe);
}



function initDealCarrousel(dealCarrouselID) {
    var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexboxAsia");
    var cardOutterWidth;
    var maxCarrouselScroll;

    function updateUpaCarrouselInfo() {
        cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .Card2").offsetWidth; //you can define how far the scroll
        maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .Card2").length *
                cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexboxAsia")
            .clientWidth;
    }

    document.querySelector("#" + dealCarrouselID + " .deals-scroll-leftAsia").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info
            if (target.scrollLeft > 0) {
                scrollLeftAnimate(target, -cardOutterWidth * 1.11);
            }
        }
    );

    document.querySelector("#" + dealCarrouselID + " .deals-scroll-rightAsia").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info 
            if (target.scrollLeft < maxCarrouselScroll) {
                scrollLeftAnimate(target, cardOutterWidth * 1.11);
            }
        }
    );
}
// Initiate the container with ID
initDealCarrousel('va_containerAsia'); //carrousel ID
    },
    methods: {
      devisForm(country){
   localStorage.setItem("selected_country", country)
            },
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
 <style lang="scss" scoped>
html{
    font-family: Roboto, Arial, Helvetica, sans-serif;
    padding:0;
    margin:0;
    color:white;
  }
  
  *{
    box-sizing: border-box;
  }
  
  body{
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
  }


  *{margin:0px;padding:0px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-family: 'Roboto';}

body{text-align:center;background:#F5F5F5;padding:2em 0px;}


.Card2{
  position: relative;
  display: inline-block;
  width: 300px;
  height: 300px;
  margin: 1em;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  -moz-transition: 0.5s;-o-transition: 0.5s;-webkit-transition: 0.5s;transition: 0.5s;
}
.Card2.ph1{background: url('//cs622627.vk.me/v622627615/26cdb/sBCCzAw79Cw.jpg') center no-repeat ;background-size: cover;}
.Card2.ph2{background: url('//cs622627.vk.me/v622627615/26ce5/L2xeil9_uqg.jpg') center no-repeat;background-size: cover;}

.Card2 .overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1em;
  top: 0;
  z-index: 5;
  color: #fff;
  -moz-transition: 0.5s;-o-transition: 0.5s;-webkit-transition: 0.5s;transition: 0.5s;
}

.Card2 .overlay h2{
  position: relative;
  margin: 2em 0px;
  top: -200px;
  -moz-transition: 0.5s;-o-transition: 0.5s;-webkit-transition: 0.5s;transition: 0.5s;
}

.Card2 .overlay a{
  position: relative;
  width: 60%;
  top: 200px;
  padding: 0.5em 2em;
  border: 2px solid #fff;
  text-decoration: none;
  color:#FFFFFF;
  border-radius: 3px;
  -moz-transition: 0.5s;-o-transition: 0.5s;-webkit-transition: 0.5s;transition: 0.5s;
}
.Card2 a:hover{background: #fff;color:#5c5c5c; z-index: 1;}

.Card2:hover .overlay{background: rgba(92, 92, 92, 0.8);}
.Card2:hover h2{top: 0px;}
.Card2:hover a{top: 0px;}








  
  .link-plain,
      .link-plain:hover,
      .link-plain:active,
      .link-plain:visited {
          text-decoration: none;
      }
  
      .link-plain-f,
      .link-plain-f:hover,
      .link-plain-f:active,
      .link-plain-f:focus,
      .link-plain-f:visited {
          color: initial;
          text-decoration: none !important;
      }
  
      .div-center {
          display: inline-block;
          width: 100%;
          text-align: center;
      }
      #va_containerAsia {
          position: relative;
          max-width: 100%;
          margin: auto;
      }
  
      .va-thumbnail {
        position: relative;
        max-width: 110%;
        max-height: auto;
        margin-left: -1rem;
        background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                      max-height: 100%;
                      height:300px; width: 300px;
      }
  
      .va-title {
          margin-top: 0px;
          margin-bottom: 10px;
          font-weight: 700;
      }
  
      .va-carrousel-flexboxAsia {
  
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
      }
  
      .va-carrousel-flexboxAsia .Card2 {
          flex: 0 0 auto;
          padding-left: 15px;
      }
  
      .va-carrousel-flexboxAsia .Card2:last-child {
          margin-right: 15px;
      }
  
      .va-carrousel-flexboxAsia .Card2:last-child::after {
          content: ' ';
          display: inline-block;
      }
  
      .Card2 {
          cursor: pointer;
          user-select: none;
          outline: none;
          position: relative;
  display: inline-block;
  width: 18rem;
  height: 200px;
  padding:0px;
  margin: 1em  0.5rem 1rem  0.5rem;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.834);
  overflow: hidden;
  -moz-transition: 0.5s;-o-transition: 0.5s;-webkit-transition: 1s;transition: 0.5s;
      }
  
      .Card2:hover {
        background: rgba(92, 92, 92, 0.8);
          user-select: none;
          outline: none;
      }
  
      .Card2 a {
          display: block;
      }
  
    //   @media (min-width: 768px) {
    //       .Card2 {
    //           width: 30rem;
    //       }
    //   }
  
      .va-carrousel,
      .va-carrousel-flexboxAsia {
          width: 100%;
          -webkit-overflow-scrolling: touch;
      }
  
      .va-carrousel::-webkit-scrollbar,
      .va-carrousel-flexboxAsia::-webkit-scrollbar {
          display: none;
      }
  
      .va-carrousel-title {
          display: inline-block;
  
          color: white;
          font-weight: 700;
          padding-bottom: 8px;
  
          margin-bottom: 18px;
      }
  
      .va-title {
          margin-top: 8px;
          font-size: 11px;
          max-height: 3em;
          overflow: hidden;
          color: white;
          font-weight: 700;
      }
  
      @media (min-width: 768px) {
          .va-title {
              font-size: 13px;
          }
      }
  
      .va-start-from {
          font-size: 9px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
      }
  
      .va-points {
          font-size: 12px;
          font-weight: 700;
          display: inline-block;
          color: white;
      }
  
      .deals-paddle {
          height: 38px;
          width: 38px;
          color: white;
          background-color: #00000089;
          border-radius: 50%;
          border: 0px solid;
          margin: auto;
          position: absolute;
  
          display: flex;
          justify-content: center;
          align-items: center;
        cursor:pointer;
      }
  
      .deals-paddle:focus {
          outline: none;
      }
  
      .deals-paddle:active {
          border-style: solid;
          outline: none;
          user-select: none;
      }
  
      .deals-paddle svg {
          width: 1.5rem;
      }
  
  
      .deals-scroll-leftAsia {
        z-index: 40;
          top: 0;
          left: 5px;
          bottom: 0;
          height: 4.2rem;
        width: 4.2rem;
      }
  
      .deals-scroll-rightAsia {
        height: 4.2rem;
        width: 4.2rem;
        z-index: 40;
          top: 0;
          bottom: 0;
          right: 5px;
      }
  
      .va-carrousel-section {
          font-family: "Roboto";
          padding: 0px;
          position: relative;
      
      }
      


      .va-whitewrap {
  /*         background-color: white; */
          padding-top: 15px;
          margin-top: 15px;
      }
  
      .va-seeall {
          display: block;
          font-size: 18px;
          font-weight: 700;
          border-top: 1px solid #DDDDDD;
          text-align: center;
          padding: 10px;
      }
  
      @media (max-width: 950px) {
}

/* MOBILES */
@media (max-width: 630px) {
    .va-carrousel-section {
          position: relative;
          width: 20.5rem;
          margin: auto;
      }
      .deals-paddle svg {
          width: 1rem;
      }
  
      .deals-scroll-rightAsia{
        height: 3rem;
        width: 3rem;
        margin-top: 21rem;
        margin-right: 6rem;
      }
      .deals-scroll-leftAsia{
        height: 3rem;
        width: 3rem;
        margin-top: 21rem;
        margin-left: 6rem;
      }
      .Card2 {
          cursor: pointer;
          user-select: none;
          outline: none;
          position: relative;
  display: inline-block;
  padding: -10px;
  width: 300px;
  height: 300px;
  margin: 1em;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.834);
  overflow: hidden;
  -moz-transition: 0.5s;-o-transition: 0.5s;-webkit-transition: 1s;transition: 0.5s;
      }
  
  }
</style>
  