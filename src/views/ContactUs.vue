<template>
    <!----start-header----->
    <div >
<navContactVue/>
<div class="contain" style="
        background: linear-gradient(#e2e0e0a8, #e2e0e07f);
        border-radius: 30px 30px 0 0;
      ">

  <section class="contact_info_sec">
 
 <div class="row">
   <div class="col-md-3">
     <div class="contact-info">
       <div class="contact-info-item">
         <div class="contact-info-icon">
           <i class="fas fa-map-marked"></i>
         </div>
         <div class="contact-info-text">
           <h2>address</h2>
           <span>-4 Rue de la république 69001 Lyon</span> 
           <span>-France</span> 
         </div>
       </div>            
     </div>          
   </div>     
   
   
   <div class="col-md-3">
     <div class="contact-info">
       <div class="contact-info-item">
         <div class="contact-info-icon">
           <i class="fas fa-envelope"></i>
         </div>
         <div class="contact-info-text">
           <h2>E-mail</h2>
           <span>ivisas.affaire@gmail.com</span> 
           <span>Contact@visas-affaires.com</span>
         </div>
       </div>            
     </div>                
   </div>                
   <div class="col-md-3">
     <div class="contact-info">
       <div class="contact-info-item">
         <div class="contact-info-icon">
           <i class="fas fa-clock"></i>
         </div>
         <div class="contact-info-text">
           <h2>Nous sommes ouvert</h2>
           <span>Du Lundi au Vendredi</span>
           <span>De 9h à 17h</span>
         </div>
       </div>            
     </div>          
   </div> 
   <div class="col-md-3">
     <div class="contact-info">
       <div class="contact-info-item">
         <div class="contact-info-icon">
           <i class="fas fa-phone"></i>
         </div>
         <div class="contact-info-text">
           <h2>Contactez-nous au</h2>
           <span>Tel: 0753630510</span>
           <span>Tel: +33753630510</span>
         </div>
       </div>            
     </div>          
   </div>            
 </div>
 <div class="row">
   <div class="col" style="backgrounde-color:red">
    
      

<div class="contact-box">
<div class="contact-links">
 <h2>Suivez-nous sur les réseaux sociaux</h2>
 <div class="links">
   <div class="link">
     <a href="https://www.facebook.com/profile.php?id=100088504264307" target="_blank"><i class="fa fa-facebook-f" style="font-size:48px;"></i></a>
   </div>
   <div class="link">
     <a href="https://www.instagram.com/invites/contact/?i=1wt17ccjw3i2v&utm_content=pysezdx" target="_blank"><i class="fa fa-instagram" style="font-size:48px;"></i></a>
   </div>
   <div class="link">
     <a href="https://twitter.com/IVISASaffaires?t=4-VPWV8JUqMzEAZq9WHf8Q&s=09" target="_blank"><i class="fa fa-twitter" style="font-size:48px;"></i></a>
   </div>
   <div class="link">
     <a></a>
   </div>
 </div>
</div>
<div class="contact-form-wrapper">
 <form>
  <h4 style="font-size:1.4rem; text-align:center; margin-bottom: 1rem; position: relative;">Suggestion?</h4>
   <div class="form-item">
     <input type="text" name="sender" required v-model="senderName">
     <label>Nom:</label>
   </div>
   <div class="form-item">
     <input type="text" name="email" required v-model="senderEmail">
     <label>Email:</label>
   </div>
   <div class="form-item">
     <textarea class="" name="message" required v-model="message"></textarea>
     <label>Message:</label>
   </div>
   <button  v-if="isLogged === true" class="submit-btn" type="button" @click="sendMsg()">Envoyer <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
            <span class="sr-only">Loading...</span></div></button>  

   <button  v-if="isLogged === false" class="submit-btn" type="button" @click="Login()">S'identifier <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
            <span class="sr-only">Loading...</span></div></button>  
 </form>
</div>
</div>

    
     
   </div>
   <div class="col-md-4" >        
     <div class="contact-page-map" >
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.0957961625513!2d4.835618698425277!3d45.76308954743812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea560cd8b52d%3A0x95a6a820421042c1!2sRue%20de%20la%20R%C3%A9publique%2C%20Lyon%2C%20France!5e0!3m2!1sfr!2scm!4v1672069565505!5m2!1sfr!2scm"  width="100%" height="450" frameborder="0" loading="lazy" style="border:0" allowfullscreen></iframe>
     </div>          
   </div>        
 </div>

</section>
</div>

  
    </div>
    <!----End-header----->
  </template>
  
  <script>
  import navContactVue from '../components/navbars/navContact.vue';
  import Swal from 'sweetalert2'
  export default {
    name: "ContactUs",
    data() {
      return {
        message: "",
  senderName:"",
  senderEmail: "",
  formSpinner: false,
  isLogged: this.checkIfIsLogged(),
      };
    },
    components: {
        navContactVue
  },
    watch: {},
    created() { this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
  },
    methods: {
      Login(){
        Swal.fire({
            icon: "warning",
   title: 'Attention',
   text: 'pour envoyer un message vous devez vous indentifier!',
   type: 'warning',
}).then(() => {
            // Go to page after successfully login
window.location.href="/Register"          });
      },
      sendMsg(){
      if( this.senderName ==="" || this.senderEmail ==="" || this.message ===""){
        Swal.fire({
            icon: "warning",
   title: 'Attention',
   text: 'vous devez remplir toutes les champs',
   type: 'warning',
}).then(() => {
            // Go to page after successfully login
            this.formSpinner = false;
          });
      }
      else{
        this.formSpinner = true;
        var axios = require('axios').default;
var data = JSON.stringify({
  "message": this.message,
  "senderName": this.senderName,
  "senderEmail": this.senderEmail
});

var config = {
  method: 'post',
  url: this.$url+'/post/suggestion',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  Swal.fire({
      icon: "success",
     title: 'Succès',
     text: 'Message envoyé avec succès',
  }).then(() => {
            // Go to page after successfully login
            this.formSpinner = false;
          });
})
.catch( (error) => {
  console.log(error);
  Swal.fire("Échec !", "Quelque chose s'est mal passé !", "error").then(() => {
                        this.formSpinner = false;
  
            // Go to page after successfully login
          });
});
      }
     
      

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
        section {
            padding: 20px 0;
            min-height: 100vh;
            
        }
.contact-info {
  display: inline-block;
  width: 100%;
  text-align: center;
      margin-bottom: 10px;
}
.contact-info-icon {
margin-bottom: 15px;
}
.contact-info-item {
  background: #071c34;
  padding: 30px 0px;
}
.contact-page-sec .contact-page-form h2 {
  color: #071c34;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 700;
}
.contain{
  margin-left: 3rem;
  margin-right: 3rem;
}
.contact-page-form .col-md-6.col-sm-6.col-xs-12 {
  padding-left: 0;
}  
.contact-page-form.contact-form input {
  margin-bottom: 5px;
}  
.contact-page-form.contact-form textarea {
  height: 110px;
}
.contact-page-form.contact-form input[type="submit"] {
  background: #071c34;
  width: 150px;
  border-color: #071c34;
}
.contact-info-icon i {
  font-size: 48px;
  color: #fda40b;
}
.contact-info-text p{margin-bottom:0px;}
.contact-info-text h2 {
  color: #fff;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact-info-text span {
  color: #999999;
  font-size: 16px;
  // font-weight: ;
  display: inline-block;
  width: 100%;
}

.contact-page-form input {
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #f9f9f9;
  margin-bottom: 20px;
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;
}

.contact-page-form .message-input {
display: inline-block;
width: 100%;
padding-left: 0;
}
.single-input-field textarea {
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #f9f9f9;
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  border-radius: 4px;
}
.single-input-fieldsbtn input[type="submit"] {
  background: #fda40b none repeat scroll 0 0;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 10px 0;
  text-transform: capitalize;
  width: 150px;
  margin-top: 20px;
  font-size: 16px;
}
.single-input-fieldsbtn input[type="submit"]:hover{background:#071c34;transition: all 0.4s ease-in-out 0s;border-color:#071c34}
.single-input-field  h4 {
  color: #464646;
  text-transform: capitalize;
  font-size: 14px;
}
.contact-page-form {
  display: inline-block;
  width: 100%;
  margin-top: 30px;
}

.contact-page-map {
  margin-top: 36px;
  margin-left: -2rem;
}
.contact-page-form form {
    padding: 20px 15px 0;
}



@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
}




.contact-box {
  width: clamp(100px, 90%, 1000px);
  margin: 37px 0;
  display: flex;
  flex-wrap: wrap;
 
  
}

.contact-links, .contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
}


.contact-links {
  background-color: #1f2e43;
  background:
    radial-gradient(
      circle at 55% 92%, #000000bb 0 12%, transparent 12.2%
    ), 
    radial-gradient(
      circle at 94% 72%, #000000c2 0 10%, transparent 10.2%
    ), 
    radial-gradient(
      circle at 20% max(78%, 350px), #000000de 0 7%, transparent 7.2%
    ), 
    radial-gradient(
      circle at 0% 0%, #000000e1 0 40%, transparent 40.2%
    ), 
    goldenrod;
  border-radius: 10px 0 0 10px;
  
}

.contact-form-wrapper {
  background-color: #ffffff8f;
  border-radius: 0 10px 10px 0;
}


h2 {
  font-family: 'Arimo', sans-serif;
  color: #fff;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  font-size: 2.5rem;
  transform: scale(.95, 1);
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
}

.link {
  margin: 10px;
  cursor: pointer;
}

i {
  width: 45px;
  height: 45px;
  filter: 
    hue-rotate(220deg)
    drop-shadow(2px 4px 4px #0006);
  transition: 0.2s;
  user-select: none;
}

i:hover {
  transform: scale(1.1, 1.1);
}

i:active {
  transform: scale(1.1, 1.1);
  filter: 
    hue-rotate(220deg)
    drop-shadow(2px 4px 4px #222)
    sepia(0.3);
}

.form-item {
  position: relative;
}

label, input, textarea {
  font-family: 'Poppins', sans-serif;
}

label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}

input, textarea {
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
}

input:focus+label, 
input:valid+label, 
textarea:focus+label, 
textarea:valid+label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: #777;
  top: -20px;
  transition: all .225s ease;
}

.submit-btn {
  background-color: goldenrod;
  filter: drop-shadow(2px 2px 3px #0003);
  color: #fff;
  font-family: "Poppins",sans-serif;
  font-size: clamp(16px, 1.6vw, 18px);
  display: block;
  padding: 12px 20px;
  margin: 2px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}

.submit-btn:hover {
  transform: scale(1.1, 1.1);
}

.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}

@media only screen and (max-width: 800px) {
  h2 {
    font-size: clamp(40px, 10vw, 60px);
  }
}

@media only screen and (max-width: 400px) {
  h2 {
    font-size: clamp(30px, 12vw, 60px);
  }
  
  .links {
    padding-top: 30px;
  }
  
  i {
    width: 38px;
    height: 38px;
  }
}

/* MOBILES */
@media (max-width: 630px) {
.contact-box{
  max-width: 100%;
  margin: 0px 0px;
  width: clamp(100px, 90%, 1000px);
  display:inline-table;
  flex-wrap: wrap;

}
.contact-links, .contact-form-wrapper {
  // background-color: red;
  width: 100%;
  padding: 8% 5% 10% 5%;
}
.contact-links {
  width: 22.3rem;
  border-radius: 10px 10px 0 0;

}
.contact-form-wrapper {
  background-color: #ffffff8f;
  border-radius: 0 0 10px 10px;
}

.contact-page-map {
  margin-top: 36px;
  margin-left: 0px;
}
.contain{
  margin-left: 0rem;
  margin-right: 0rem;
}
h2 {
  font-family: 'Arimo', sans-serif;
  color: #fff;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  transform: scale(.95, 1);
}
}
</style>
  