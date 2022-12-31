<template>
    <div>
    
  <section>
    <div class="container">
      <div class="user signinBx">
        <div class="imgBx"><img src="@/assets/slide4.png" alt="" /></div>
        <div class="formBx">
            <router-link to="/" class="back con" ><img src="@/assets/back.png"/></router-link> 
          <form action="" onsubmit="return false;">
            <h2>S'identifier</h2>
            <input type="text" name="" placeholder="Username" v-model="usermail"/>
            <input type="password" name="" placeholder="Password"  v-model="password"/>
            <input type="button" name="" value="Login" @click="login()"/>
            <p class="signup">
                Vous n'avez pas de compte ?
          <a href="#" @click="toggleForm()">S'inscrire.</a>
            </p>
          </form>
        </div>
      </div>
      <div class="user signupBx">
        <div class="formBx">
            <router-link to="/" class="back" ><img src="@/assets/back.png"/></router-link> 
          <form action="" onsubmit="return false;">
            <h2>Créer un compte</h2>
            <input type="text" name="" placeholder="Nom et prénom" v-model="name"/>
            <input type="email" name="" placeholder="Adresse e-mail" v-model="usermail"/>
            <input type="email" name="" placeholder="Numéro de téléphone" v-model="tel"/>
            <input type="password" name="" placeholder="Créer un mot de passe" v-model="password"/>
            <input type="password" name="" placeholder="Confirmez le mot de passe" v-model="confirmPassword"/>
            <input type="button" name="" value="Sign Up" @click="login()"/>
            <p class="signup">
                Vous avez déjà un compte ?
              <a href="#" @click="toggleForm()">S'identifier.</a>
            </p>
          </form>
        </div>
        <div class="imgBx"><img src="@/assets/img/about.png" alt="" /></div>
      </div>
    </div>
  </section>

    </div>
    </template>
    
    <script>
import Swal from 'sweetalert2'
    export default {
      name: "Admin",
      data() {
        return {
            name:"",
            tel:"",
            usermail:"",
            password:"",
            confirmPassword:"",

        };
      },
      watch: {},
      created() {

      },
      methods: {

         toggleForm (){
  const container = document.querySelector('.container');
  container.classList.toggle('active');
}, 


login(event){
if( this.usermail==='' || this.password==='') {
        Swal.fire({
   title: 'Warning',
   text: 'Fill all inputs',
   type: 'warning',
   showCancelButton: true,
   cancelButtonText: 'Some text for cancel button'
})
 }else{
    this.login = true;
      event.preventDefault();
      var axios = require("axios");

      var qs = require("qs");
      var data = qs.stringify({
        useremail: this.useremail,
        password: this.password,
      });
      var config = {
        method: "post",
        url: this.$url+"/login",
        data: data,
      };

      axios(config)
        .then(function (response) {
          const temp = response.data;
          const refreshtoken = Object.values(temp)[0];
          const accesstoken = Object.values(temp)[1];
          localStorage.setItem("refresh-token", refreshtoken);
          localStorage.setItem("access-token", accesstoken);

          var config0 = { 
            method: "get",
            url: "https://192.168.16.120:3000/profile",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          };

          axios(config0)
            .then((res) => {
              let a = res.data;
              if (a.email == "ivisas.affaire@gmail.com") {
                window.location.href = "/Admin";
              } else {
                console.log(a);
                window.location.href = "/";
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$bus.$emit("logged", "User logged");
        })
        .catch(function (error) {
          if (error.response.status === 500) {
            Swal.fire(
              "Échec de la connexion!",
              "Veuillez vérifier vos informations d'identification !",
              "error"
            );
          }
          if (error.response.status === 401) {
            Swal.fire("Échec de la connexion !", "L'utilisateur n'existe pas !", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Échec !", "Quelque chose s'est mal passé !", "error");
          }
          console.log(error);
        });

 }

},

register(){
    if(this.password != this.confirmPassword){
        Swal.fire({
   title: 'Warning',
   text: "Password doesn't match",
   type: 'warning',
   showCancelButton: true,
   cancelButtonText: 'Some text for cancel button'
})
    }else if( this.name==='' || this.tel==='' || this.usermail==='' || this.password==='' || this.confirmPassword==='') {
        Swal.fire({
   title: 'Warning',
   text: 'Fill all inputs',
   type: 'warning',
   showCancelButton: true,
   cancelButtonText: 'Some text for cancel button'
})
    }else{
this.loginOn = true;
      let onLogin =()=>{
       event.preventDefault();
      var axios = require("axios");

      var qs = require("qs");
      var data = qs.stringify({
        useremail: this.useremail,
        password: this.password,
      });
      var config = {
        method: "post",
        url: this.$url+"/login",
        data: data,
      };

      axios(config)
        .then(function (response) {
          const temp = response.data;
          const refreshtoken = Object.values(temp)[0];
          const accesstoken = Object.values(temp)[1];
          localStorage.setItem("refresh-token", refreshtoken);
          localStorage.setItem("access-token", accesstoken);

          var config0 = { 
            method: "get",
            url: "https://192.168.16.120:3000/profile",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          };

          axios(config0)
            .then((res) => {
              let a = res.data;
              if (a.email == "ivisas.affaire@gmail.com") {
                window.location.href = "/Admin";
              } else {
                console.log(a);
                window.location.href = "/";
                //window.location.reload()
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$bus.$emit("logged", "User logged");
        })
        .catch(function (error) {
          if (error.response.status === 500) {
            Swal.fire(
              "Échec de la connexion!",
              "Veuillez vérifier vos informations d'identification !",
              "error"
            );
          }
          if (error.response.status === 401) {
            Swal.fire("Échec de la connexion !", "L'utilisateur n'existe pas !", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Échec !", "Quelque chose s'est mal passé !", "error");
          }
          console.log(error);
        }); 
      }

      var axios = require("axios");
      var data = JSON.stringify({
        "name": this.name,
        "phone": this.tel,
        "profileimgage": "",
        "email": this.useremail,
        "password": this.password,
      });

      var config = {
        method: "post",
        url: this.$url+"/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
               if (response.status === 200) {
            onLogin();
          }
            this.loading = false;
           this.load = true;
          console.log(JSON.stringify(response));
          
            
          //window.location.href = "/";
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 500) {
            Swal.fire("Échec de l'enregistrement !", "L'utilisateur existe déjà !", "error");
          }
          if (error.response.status === 404) {
            Swal.fire("Échec !", "Quelque chose s'est mal passé !", "error");
          }
        });
        


}
    }

      },
    };
    </script>
    
    <style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.back{
    width: 3rem;
    cursor: pointer;
    position: relative;
    margin-top: -27rem;
    margin-left: -2rem;
}
section {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

section .container {
  position: relative;
  max-width:69%;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #ff0;
  transition: 0.5s;
}

section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}

section .container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

section .container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}

section .container .user .formBx form input[type='submit'] {
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

section .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

section .container .user .formBx form .signup a {
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}

section .container .signupBx {
  pointer-events: none;
}

section .container.active .signupBx {
  pointer-events: initial;
}

section .container .signupBx .formBx {
  left: 100%;
}

section .container.active .signupBx .formBx {
  left: 0;
}

section .container .signupBx .imgBx {
  left: -100%;
}

section .container.active .signupBx .imgBx {
  left: 0%;
}

section .container .signinBx .formBx {
  left: 0%;
}

section .container.active .signinBx .formBx {
  left: 100%;
}

section .container .signinBx .imgBx {
  left: 0%;
}

section .container.active .signinBx .imgBx {
  left: -100%;
}

@media (max-width: 991px) {
  section .container {
    max-width: 400px;
  }

  section .container .imgBx {
    display: none;
  }

  section .container .user .formBx {
    width: 100%;
  }
  .back{
    width: 15.5rem;
    cursor: pointer;
    position: relative;
    margin-top: -27rem;
    margin-left: -2rem;
}
.con{
    width: 6.5rem;
    cursor: pointer;
    position: relative;
    margin-top: -27rem;
    margin-left: -2rem;
}
}

    </style>
    