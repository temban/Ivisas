<template>
    <div>
        <body>

                        
<div class="header__logo">
  <a href="/" class="sign__logo2-img">  </a>  
</div>

<div class="main" style="margin-top: 30px">
<a  href="/" style="   height: 55px; z-index: 100;position:absolute;;
           width: 55px;">
      <img
         style="
         position:absolute;
           border-radius: 70px;
           height: 35px;
           width: 35px;
           margin-top: 30px;
           left: 10px; 
         " 
         src="@/assets/back.png"
       />
</a>            
<input type="checkbox" id="chk" aria-hidden="true" />

<div class="signup">
<form>
<h3>
Entrez simplement votre<br> 
e-mail et nous ferons le reste
</h3>
<formgroup>
<input type="text" id="email" name="email" v-model="email"/>
<label for="email"><br>E-mail</label>
<span>Entrer votre Email</span>
</formgroup>


<button id="login-btn" type="button" @click="forgotPassword()">Envoyer  <div class="spinner-border text-light spinner-border-sm" role="status" v-if="login">
<span class="sr-only">Loading...</span></div></button>
<p>Vous souvenez-vous ?  <a href="/Register">
<span style="font-size:large; color: orangered;"> S'identifier ?</span>
</a></p>
<p style="font-size:larger">Assurez-vous que l'e-mail saisi est celui du compte que vous essayez de récupérer!</p>
</form>
</div>
</div>
</body>
      
    </div>
    </template>
    
    <script>
    import Swal from "sweetalert2";
    export default {
      name: "RestPassword",
      data() {
        return { email:"",
        login: false,
    };
      },
      watch: {},
      created() {},
      methods: {
        forgotPassword() {
        if(document.getElementById("email").value==0){
           Swal.fire("Échec !", "Entrez votre e-mail !", "warning");
        }
        else{
this.login = true;
var axios = require('axios');

var config = {
  method: 'put',
  url: this.$url+'/reset/password?emailAddress='+ this.email,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  Swal.fire("Succès !", "Vous allez recevoir un nouveau mot de passe par e-mail !","warning");
})
.catch(function (error) {
    Swal.fire("Échec !", "", "warning");
    window.location.reload()
  console.log(error);
});

        }
      },
      },
    };
    </script>
    
    <style lang="scss" scoped>
 
 .columns {
    width: 50%;
  }
  body {
    margin: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    font-family:  "Times New Roman", Times, serif;
    background: linear-gradient(to bottom, #388bff, #388bff, #fff, #fff);
  }
  .main {
    width: 600px;
    height: 560px;
    position: relative;
    background: rgb(0, 187, 255);
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
      no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px rgba(35, 19, 7, 0.444);
  }
  #chk {
    display: none;
  }
  
  .signup {
    position: relative;
    width: 100%;
    height: 100%;
  }
  label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 20px 60px 60px 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  /* label1 {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 20px 60px 60px 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  } */
  input {
    font-size: 20px;
    width: 90%;
    height: 40px;
    background: #fff;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: 2px solid black;
    outline: 19px;
    border-radius: 5px;
  }
  .button1 {
    width: 60%;
    height: 40px;
    padding: 10px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #ff922b;
    font-size: 1em;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  .button1:hover {
    background: #ff7300;
  }
  .button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #00a6ff;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  .button:hover {
    background: #0176cf;
  }
  .iti__flag-container{
      z-index:9;
  }
  .login {
    
    height: 760px;
    background: linear-gradient(to bottom, #f8961e, rgb(246, 205, 167));
  
    /*background: rgb(255, 154, 60);*/
    border-radius: 60% / 10%;
    transform: translateY(-105px);
    transition: 0.8s ease-in-out;
  }
  .login label {
    color: #0274ff;
    transform: scale(0.6);
  }
  
  #chk:checked ~ .login {
    transform: translateY(-510px);
  }
  #chk:checked ~ .login label {
    transform: scale(1);
  } 
  #chk:checked ~ .signup label {
    transform: scale(0.6);
  }
  .column_left {
    float: left;
    width: 50%;
    padding-left: 20px;
  }
  .column_right {
    float: left;
    width: 50%;
    padding-right: 20px;
  }
  
  .sign__logo2-img  {
    background:url('~@/assets/logo-jpg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    height: 170%;
    width: 200%; 
    margin-top: -35px;
    margin-bottom: 65px;
    margin-left: -90px;
    position: relative;
}
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .phone{
     margin-right:7px;
     margin-top:12px; 
  }
  .green{
    box-shadow: inset 0 0 5px green;
    box-shadow: 0 0 10px green;
  }
  .red{
    box-shadow: inset 0 0 5px red;
    box-shadow:  0 0 10px red;
  }
  
  .progress {
      height: 5px !important;
      
  }
  .progress-bar-danger {
      background-color: #e90f10;
  }
  .progress-bar-warning{
      background-color: #3d2b02;
  }
  .progress-bar-success{
      background-color: #02b502;
  }
  *, *:before, *:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}




h2, img {
  text-align: center;
  color: white;
  font-weight: 10;
  text-shadow: 0px 1px rgba(0, 0, 0, 0.3);
}
h3{
    
  text-align: center;
  height: 70px;
  color:black;
  font-size: 1.5em;
  line-height: 130%;
 margin-top: 40px;
}

form { 
  width: 100%;
  overflow: hidden;
  height:100%;
  background-color: #fefefe00;
  padding: 21px 13px;
  border-radius: 21px;
  -webkit-box-shadow: 0px 5px 34px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 5px 34px rgba(0, 0, 0, 0.1);
}

formgroup {
  position: relative;
  width: 100%;
  justify-content: center;
  display: block;
  margin-top: 3em;
  font-size: 1em;
}
formgroup input {
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #888888;
  padding: 8px 0;
  font-size: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  outline: none;
  opacity: 0.7;
  font-weight: 400;
}
formgroup input:focus {
  opacity: 1;
  border-bottom: 2px solid #f74d14;
  color: #f77a14;
}
formgroup label {
  position: absolute;
  font-size: 1.2em;
  top: -1.5em;
  left: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0.7;
  color: #888888;
  text-transform: uppercase;
}
formgroup span {
  position: absolute;
  top: -1.5em;
  left: -400px;
  opacity: 0;
  color: #333333;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1em;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
formgroup input:focus + label {
  left: 500px;
  opacity: 0;
}
formgroup input:focus ~ span {
  left: 0;
  opacity: 1;
}

.forgot {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  margin-top: 21px;
  opacity: 0.8;
}

#login-btn {
  border: none;
  color: #FEFEFE;
  padding: 0.8em 0;
  font-size: 1em;
  font-weight: 300;
  width: 100%;
  border-radius: 55px;
  -webkit-box-shadow: 0px 3px 21px rgba(255, 100, 0, 0.7);
          box-shadow: 0px 3px 21px rgba(255, 100, 0, 0.7);
  background: -webkit-gradient(linear, left top, right top, from(#F98340), to(#F71442));
  background: linear-gradient(to right, #F98340, #f45474);
  background-size: 100%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}

.social {
  margin-top: 1.8em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.social button {
  width: 50%;
  margin: 0 8px;
  padding: 10px 0;
  font-size: 0.9em;
  border: none;
  border-radius: 34px;
  -webkit-box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.social #facebook {
  background: #1F4788;
  background: -webkit-gradient(linear, left top, right top, from(#4B77BE), to(#1F4788));
  background: linear-gradient(to right, #4B77BE, #1F4788);
  background-size: 100%;
}
.social #google {
  background: #FEFEFE;
  background: -webkit-gradient(linear, left top, right top, from(#FEFEFE), to(#f1f1f1));
  background: linear-gradient(to right, #FEFEFE, #f1f1f1);
  background-size: 100%;
  color: #F71442;
}

p {
    margin-top: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
}
p a {

  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

/***** For Tablets *******/
@media screen and (min-width: 480px) {
  .container-center {
    width: 70%;
  }

  #login-btn {
    padding: 0.8em 0;
    font-size: 1.2em;
  }
}
/***** For Desktop Monitors *******/
@media screen and (min-width: 768px) {
  .container-center {
    width: 500px;
  }
}
    </style>
    