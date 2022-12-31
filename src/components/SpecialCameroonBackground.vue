<template>
    <div  style="overflow: hidden;">

    
    <div class="jumbotron" style="margin-bottom:4rem">  
      <div class="container">
       <div class="col-md-7 col-md-offset-1 jumbotron">
         <span style="margin-top:-75px; margin-bottom: 40px;font-size: 3rem; font-weight: 700; color: aliceblue;">Spécial Cameroun.</span>
         <p class="lead" style="margin-top:25px; font-size: 2.2rem;font-weight: 600"><strong>&nbsp; Constitution de dossier.</strong></p>
         <hr>
           <p class="lead main-jumbotron-text">Nous préparons vos dossiers et suivons vos démarches au Consulat Camerounais</p>
        </div> <!-- class="col-md-6" -->
     </div> 
   </div>  


        
    </div>
  </template>
  
  <script>
  import $ from 'jquery';
  export default {
    name: "Home",
    components: {
    },
    mounted(){
        $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

  var options = {
    placement: "left", // top, bottom, left, right, auto
    delay: { "show": 300, "hide": 200 },
  };
  $('[data-toggle="tooltip"]').tooltip(options);

    }
  };
  </script>
  <style lang="scss" scoped>

  
@mixin media($breakpoint) {
    @media (max-width: $breakpoint) {
        @content;
    }
}

@mixin media-min($breakpoint) {
    @media (min-width: $breakpoint) {
        @content;
    }
}

@mixin media-height($breakpoint) {
    @media (max-height: $breakpoint) {
        @content;
    }
}
  html {
    height: 100%;
    box-sizing: border-box;
  }
  
  
  /* ----------------------------
      Header / Jumbotron Styles 
  -------------------------------*/
  
  .navbar {
    margin-bottom: 0 !important;
  }
  
  
  .jumbotron {
    background-image: url("~@/assets/img/flag1.png");
    background-size:       cover;
    background-position: 50%; 
    box-shadow: inset -140px 0px 90px 0px rgba(229, 222, 81, 0.723);
    height: 300px;

    }

  ul {
    font-size: 16px;
  }
  
  .form-inline {
    float: right;
    margin:  8px;
  }
  
  /* ------------------*/
  
  h1 {
    padding-top: 40px;
    font-family: 'Playfair Display' !important;
    font-weight: 700  !important;
    font-size:   70px !important;
    font-style:           italic;
  }
  
  .col-md-7.jumbotron {
    box-shadow: inset 0px -210px 191px -31px #FFFFFF;
  }
  
  p.main-jumbotron-text {
    margin-top:  26px;
    font-size:   18px;
    font-weight:  500 !important;
    line-height:  1.4; 
    margin-left: 10px;
  }
  
  
  h1, h2, p, .btn .btn-lg {
    color: #14120C !important;
  }
  
  hr {
    border-color: #14120C !important;
  }
  
  
  input.form-control.mr-sm-2 {
    border-radius: 20px;
    width: 200px;
    margin: 0 20px 0 20px;
    text-align: center;
  }
  
  
  
  /* ----------------------------
     Main Body Styles 
  -------------------------------*/
  
  
  h3 {
    display: inline-block;
    padding: 50px 43px 30px 43px; 
  }
  
  .glyphicon.glyphicon-menu-right {
      font-size:     18px;
      padding-right: 10px;
  }
  
  /*
  .row {
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAALElEQVQYV2NkwAKm7bw+kxFdHCSY5a6ZjiIBEwQphksgC8Il0AXBEtgEQRIAUfYWxlQQD4AAAAAASUVORK5CYII=) repeat;
  }
  
  */
  
  .col-lg-6 p {
    font-size:   18px;
    text-align:  left;
    padding: 0 43px 12px 43px;
    line-height:  1.6;
  }
  
  .col-lg-6.left, 
  .col-lg-6.right {
    padding-left:   48px;
    padding-bottom: 40px;
    height: 100%;
  }  
  
  .glyphicon-search {
    padding-right: 6px;
  }
  
  .glyphicon-time, 
  .glyphicon-briefcase, 
  .glyphicon-map-marker,
  .glyphicon-globe {
     font-size:      25px;
     padding-right:  10px;
     vertical-align: bottom;
     padding-left:   48px;
     margin-top: 11px;
     color: #163554;
  }
  
  .requirements-list {
     margin: 20px 0px;
  }
  
  .schedule {
    margin-bottom: 15px;
  }
  
  .tooltip {
    width: 100px;
  }
  
  .radio-inline {
    margin-left: 41px;
  }
  
  .first-form-question {
     margin-left: 25px ;
  }
  
  
  /*--------------------------
       Button Styles 
  -----------------------------*/
  
  .btn-search {
    border: 1px solid;
    margin: 0px !important;
  }
  
  .btn-group {
    margin: 10px 0px 0px 43px;
  }
  
  .btn-sample,
  .btn-custom { 
    color: #FFF; 
    background-color: #65C9D8; 
    margin: 20px 0px 0px 43px;
  } 
  
  .btn-custom {
    background-color: #45A5CC; 
  }
  
   
  .btn-custom:hover,
  .btn-custom:active {
    color: #FFF !important; 
    background-color: #3B73A0; 
    border-color: #FFFFFF; 
  }
  
  .btn-sample:hover, 
  .btn-sample:active { 
    color: #FFF !important; 
    background-color: #C6AD2B; 
    border-color: #FFFFFF; 
  } 
  
  .btn-sample:active, 
  .btn-sample.active, 
  .open .dropdown-toggle.btn-sample { 
    background-image: none; 
  } 
   
  .btn-sample.disabled, 
  .btn-sample[disabled], 
  fieldset[disabled] .btn-sample, 
  .btn-sample.disabled:hover, 
  .btn-sample[disabled]:hover, 
  fieldset[disabled] .btn-sample:hover, 
  .btn-sample.disabled:focus, 
  .btn-sample[disabled]:focus, 
  fieldset[disabled] .btn-sample:focus, 
  .btn-sample.disabled:active, 
  .btn-sample[disabled]:active, 
  fieldset[disabled] .btn-sample:active, 
  .btn-sample.disabled.active, 
  .btn-sample[disabled].active, 
  fieldset[disabled] .btn-sample.active { 
    background-color: #97BAD8; 
    border-color: #FFFFFF; 
  } 
   
  .btn-sample .badge { 
    color: #97BAD8; 
    background-color: #F7F7F7; 
  }
  
  .footer {
    height: 50px;
    background-color:    #45A5CC;
    text-align:           center;
    border-top-left-radius:  6px;
    border-top-right-radius: 6px;
  }
  
  /*---------------------------
        Media Queries 
  ---------------------------*/
  
  
  
  @media screen and (max-width: 767px) {
    
  input.form-control.mr-sm-2 {
      width: 100%;
      margin: 0 0 1vh 0;
  }
    
  .btn-search {
      width: 100%;
  }

  span{
    font-size: 1.9rem !important; 

  }
     
  p {
      font-size: 1rem !important; 
  }
    
  h3 {
      display: inline-block;
      padding: 50px 15px 30px 0px; 
  }
    
  .col-lg-6 p {
      font-size:   16px;
      text-align:  left;
      padding: 0 !important;
      margin: 0 !important;
      line-height:  1.4em;
   }
    
  .glyphicon-time, 
  .glyphicon-briefcase, 
  .glyphicon-map-marker,
  .glyphicon-globe {
       font-size:      25px;
       padding-right:  10px;
       vertical-align: bottom;
       padding-left:   15px;
       margin-top: 11px;
       color: #163554;
   }
  
   h4.experience-sentence {
      line-height: 1.6;
   }
   
    .indent {
      text-indent: 50px;
   } 
    
  }
  
  </style>
    