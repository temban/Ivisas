<template>
    <div  class="container "
      style=" position: relative;
        background: linear-gradient(#e2e0e0, #fff);
        border-radius: 30px 30px 30px 30px;
        margin-bottom: 20px;
      ">
      <section class="about-section">
            <div class="container">
                <div class="row">                
                    <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div class="inner-column">
                            <div class="sec-title">
                                <h2>Découvrez qui nous sommes!</h2>
                            </div>
                            <div class="text">
                                Notre histoire démarre par notre désir de découverte, convaincus du pouvoir unique de chaque culture, Nous sommes passionnés de voyage, d'aventure, des gens incroyables à voir dans chaque coin du bout de la terre. Sur cette conviction,  a réuni un ensemble de passionnés d'experts, uniquement pour vous donnez un séjour sur mesure. Nous travaillons en étroite collaboration avec nos partenaires, pour vous assurez un voyage de qualité.

Notre objectif est de fournir un service de haute qualité à nos clients. Nous avons une équipe de professionnels hautement qualifiés et expérimentés dans le domaine du voyage. Nous nous engageons à fournir les meilleurs résultats et à fournir les meilleurs services de qualité au meilleur prix. Notre équipe 
dévouée s'engage à fournir les meilleurs services à nos clients et s'efforcera toujours d'offrir un service de haute qualité.                          </div>
                          <router-link to="/ContactUs">   <div class="btn-box">
                                <a href="#" class="theme-btn btn-style-one">Contactez-nous </a>
                            </div></router-link>
                        </div>
                    </div>
    
                    <!-- Image Column -->
                    <div class="image-column col-lg-6 col-sm-10">
                        <div class="inner-column wow fadeInLeft">
                            <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src="@/assets/img/about.png" alt=""></a></figure>
                         
                        </div>
                    </div>
                  
                </div>
             
            </div>
        </section>
    </div>
    </template>
    
    <script>
    
    export default {
      name: "AboutUsTwo",
      data() {
        return {};
      },
      watch: {},
      created() {},
      methods: {},
    };
    </script>
    
    <style lang="scss" scoped>
         
        
         a,
        a:active,
        a:focus {
            color: #6f6f6f;
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
        section {
            padding: 60px 0;
           /* min-height: 100vh;*/
        }

.sec-title{
  position:relative;
  z-index: 1;
}

.sec-title .title{
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #c5993b;
  font-weight: 500;
}

.sec-title h2{
  position: relative;
  display: block;
  font-size:40px;
  line-height: 1.28em;
  color: #544727;
  text-shadow: 3px 3px 6px #f6ce5d ;  font-weight: 600;
}

.sec-title h2:before{
  position:absolute;
  content:'';
  left:0px;
  bottom:0px;
  width:50px;
  height:3px;
  background-color:#d1d2d6;
}

.sec-title .text{
  position: relative;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
}

.sec-title.light h2{
  color: #ffffff;
}

.sec-title.text-center h2:before{
  left:50%;
  margin-left: -25px;
}

.list-style-one{
  position:relative;
}

.list-style-one li{
  position:relative;
  font-size:16px;
  line-height:26px;
  color: #222222;
  font-weight:400;
  padding-left:35px;
  margin-bottom: 12px;
}

.list-style-one li:before {
    content: "\f058";
    position: absolute;
    left: 0;
    top: 0px;
    display: block;
    font-size: 18px;
    padding: 0px;
    color: #ff2222;
    font-weight: 600;
    -moz-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1.6;
    font-family: "Font Awesome 5 Free";
}

.list-style-one li a:hover{
  color: #c5993b;
}

.btn-style-one{
  position: relative;
  display: inline-block;
  font-size: 17px;
  line-height: 30px;
  color: #000000;
  padding: 10px 30px;
  font-weight: 600;
  overflow: hidden;
  border-radius: 10px;
  letter-spacing: 0.02em;
  background-color: #c5993b;
  
}

.btn-style-one:hover{
  background-color: #000000;
  color: #ffffff;
}
.about-section{
  position: relative;
  padding: 120px 0 70px;
  padding-bottom: 0px;
}

.about-section .sec-title{
  margin-bottom: 45px;
}

.about-section .content-column{
  position: relative;
  margin-bottom: 50px;
}

.about-section .content-column .inner-column{
  position: relative;
  padding-left: 30px;
}

.about-section .text{
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
}

.about-section .list-style-one{
  margin-bottom: 45px;
}

.about-section .btn-box{
  position: relative;
}

.about-section .btn-box a{
  padding: 15px 50px;
}

.about-section .image-column{
  position: relative;
}

.about-section .image-column .text-layer{
    position: absolute;
    right: -110px;
    top: 50%;
    font-size: 325px;
    line-height: 1em;
    color: #ffffff;
    margin-top: -175px;
    font-weight: 500;
}

.about-section .image-column .inner-column{
  position: relative;
  padding-left: 80px;
  padding-bottom: 0px;
}
.about-section .image-column .inner-column .author-desc{
    position: absolute;
    bottom: 16px;
    z-index: 1;
    background: orange;
    padding: 10px 15px;
    left: 96px;
    width: calc(100% - 152px);
    border-radius: 50px;
}
.about-section .image-column .inner-column .author-desc h2{
    font-size: 21px;
    letter-spacing: 1px;
    text-align: center;
    color: #fff;
  margin: 0;
}
.about-section .image-column .inner-column .author-desc span{
    font-size: 16px;
    letter-spacing: 6px;
    text-align: center;
    color: #fff;
  display: block;
  font-weight: 400;
}
.about-section .image-column .inner-column:before{
    content: '';
    position: absolute;
    width: calc(60% + 80px);
    height: calc(100% + 160px);
    top: -80px;
    left: -3px;
    background: transparent;
    z-index: 0;
    border: 44px solid #d3a43e;
    border-radius:  0 6rem 6rem 0;

}

.about-section .image-column .image-1{
  position: relative;
}
.about-section .image-column .image-2{
  position: absolute;
  left: 0;
  bottom: 0;
}

.about-section .image-column .image-2 img,
.about-section .image-column .image-1 img{
  box-shadow: 0 30px 50px rgba(8,13,62,.15);
      border-radius: 46px;
      height: 33rem;
}

.about-section .image-column .video-link{
  position: absolute;
  left: 70px;
  top: 170px;
}

.about-section .image-column .video-link .link{
  position: relative;
  display: block;
  font-size: 22px;
  color: #191e34;
  font-weight: 400;
  text-align: center;
  height: 100px;
  width: 100px;
  line-height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 30px 50px rgba(8,13,62,.15);
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.about-section .image-column .video-link .link:hover{
  background-color: #191e34;
  color: #fff }



  /* MOBILES */
@media (max-width: 630px) {
    .about-section .image-column .inner-column:before{
    content: '';
    position: absolute;
    width: calc(50% + 80px);
    height: calc(100% + 110px);
    left: -3px;
    background: transparent;
    z-index: 0;
    border: 24px solid #d3a43e;
    border-radius:  0 3rem 3rem 0;
}



.about-section .image-column .image-2 img,
.about-section .image-column .image-1 img{
  box-shadow: 0 30px 50px rgba(8,13,62,.15);
      border-radius: 46px;
      height: 20rem;
      margin-left: -2rem;
      width: 35rem;
      
}
.image-1 a img{
  position: relative;
  margin-top: -3rem;
  height: 1px;
}
.about-section .content-column{
  position: relative;
  margin-bottom: 50px;
}

.about-section .content-column .inner-column{
  position: relative;
  padding-left: 10px;
  padding-top: 2.5rem;
}

}
    </style>
    