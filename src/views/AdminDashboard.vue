<template>
    <div>
        <div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>


    <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ this.name }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <!-- End name input -->
                  <div style="height: 500px;width:500px">
                    <img :src="pic" style="
                      image-resolution: 3000000dpi;  background-color: #000;
                      background-position: center; 
                      background-size: cover;
                      background-repeat: no-repeat;
                       max-width: 99.5%; 
                        max-height: 100%;
                        height: 500px;width:500px">
                  </div>
   
                </div>
              </div>
            </div>
          </div>
<!-- Banner -->
<!-- <a href="https://webpixels.io/components?ref=codepen" class="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style="z-index: 1000;">
    <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
</a> -->

<!-- Dashboard -->
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <nav class="navbar show navbar-vertical  navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
            <!-- Toggler -->
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Brand -->
            <router-link to="/AdminDashboard" >
                <a class="navbar-logo py-lg-2 mb-lg-5 px-lg-12 me-0" href="#">
                <img src="@/assets/logo-jpg.png" alt="...">
            </a>
            </router-link>
            <!-- User menu (mobile) -->
            <!-- <div class="navbar-user d-lg-none"> -->
                <!-- Dropdown -->
                <!-- <div class="dropdown"> -->
                    <!-- Toggle -->
                    <!-- <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="avatar-parent-child">
                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle">
                            <span class="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a> -->
                    <!-- Menu -->
                    <!-- <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                        <a href="#" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">Settings</a>
                        <a href="#" class="dropdown-item">Billing</a>
                        <hr class="dropdown-divider">
                        <a href="#" class="dropdown-item">Logout</a>
                    </div> -->
                <!-- </div>
            </div> -->
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidebarCollapse">
                <!-- Navigation -->
                <ul class="navbar-nav">
                    
                    <router-link to="/AdminDashboard">
                        <li class="nav-item">
                        <a class="nav-link active">
                            <i class="bi bi-house"></i> Tableau de bord
                        </a>
                    </li>
                    </router-link >

                    <router-link to="/AdminAllDevis" >
                        <li >
                        <a class="nav-link" >
                            <i class="bi bi-pencil-square"></i> Demandes des devis
                            <!-- <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> -->
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/AdminAllVisas">
                        <li class="nav-item">
                        <a class="nav-link" >
                            <i class="fa fa-plane" style="font-size: 20px;"></i> Demandes des visas
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/Suggestions" >
                        <li >
                        <a class="nav-link" >
                            <i class="bi bi-chat"></i> Suggestions
                            <!-- <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> -->
                        </a>
                    </li>
                    </router-link>
                    
                   
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-bookmarks"></i> Collections
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-people"></i> Users
                        </a>
                    </li> -->
                </ul>
                <!-- Divider -->
           
                <!-- Push content down -->
                <div class="mt-auto"></div>
                <!-- User (md) -->
                <div class="navbar-nav">
                    <div class="nav-item" style="cursor:pointer">
                        <div class="nav-link"  @click="singout()">
                            <i class="bi bi-box-arrow-left"></i> Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <div class="flex-grow-1 overflow-y-lg-auto">
        <!-- Header -->
        <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                            <!-- Title -->
                            <h1 class="h2 mb-0 ls-tight">Tableau de bord</h1>
                        </div>
                        <!-- Actions -->
                        <!-- <div class="col-sm-6 col-12 text-sm-end">
                            <div class="mx-n1">
                                <a href="#" class="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                    <span class=" pe-2">
                                        <i class="bi bi-pencil"></i>
                                    </span>
                                    <span>Edit</span>
                                </a>
                                <a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
                                    <span class=" pe-2">
                                        <i class="bi bi-plus"></i>
                                    </span>
                                    <span>Create</span>
                                </a>
                            </div>
                        </div> -->
                    </div>
                    <!-- Nav -->
                    <ul class="nav nav-tabs mt-4 overflow-x border-0">
                        <li class="nav-item ">
                            <a class="nav-link active">Tableau de bord</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <!-- Main -->
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
                <!-- Card stats -->
                <div class="row g-6 mb-6">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Utilisateurs</span>
                                        <span class="h3 font-bold mb-0">{{ userCount }}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-black text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>{{ userCount/100 }}%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Demands des visas</span>
                                        <span class="h3 font-bold mb-0">{{visaCount}}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i class="fa fa-plane" style="font-size: 23px; margin-top:5px"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>{{visaCount/100}}%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Dmandes des devis</span>
                                        <span class="h3 font-bold mb-0">{{ deviCount }}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-pencil-square"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>{{ deviCount/100 }}%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Demandes rejetées</span>
                                        <span class="h3 font-bold mb-0">{{ visaCountR + deviCountR }}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-danger text-white text-lg rounded-circle">
                                            <i class="bi bi-trash"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>{{ (visaCountR + deviCountR/100) }}%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow border-0 mb-7">
                    <div class="card-header" >
                        <div> 
                            <h5 class="mb-0">Tous les utilisateurs</h5>

                        </div>
                        <div class="ml-auto">
                          <form class="search-box" >
                            <input v-model="userInput" name="q" size="35" type="text"
                              placeholder="Rechercher un utilisateur par e-mail " />
                          </form>
                      </div>
                    </div>
                    
                    <div class="table-responsive">
                        <div v-if="this.alert.display" class="alert" >
                      {{ alert.message }}
                    </div>
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr class="thead-light1">
                                    <th scope="col">Nom</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Numero</th>
                                    <th scope="col">Autorisation</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody  v-for="user in allUsers" :key="user">
                                <tr class="tr" >
                                    <td class="mx-0">
                                        <div style="display:flex;">
                                            <div v-if="user.profileImage === null" style="margin-top: -10px; margin-right: 10px; position: relative;"><a  style="border-radius:40px;text-transform: uppercase"
                                  class="btn btn-circle btn-primary text-white"
                                  >{{ user.name[0]
                                  }}</a></div> 
<div v-else  class="avatar avatar-xs" style="margin-top: -10px; margin-right: 10px; position: relative;">
    <img alt="..." v-bind:src="$url+ '/' +  user.profileImage" v-on:click="viewImg(user.profileImage)" data-target="#exampleModal" style="width:60px; height:40px;cursor:pointer"
                                  data-toggle="modal">
</div>
  <div>
    <span class="text-heading font-semibold"  href="#"  v-on:click="viewImg(user.profileImage)" data-target="#exampleModal" style="cursor:pointer"
                                  data-toggle="modal">
                                            {{ user.name}}
                                        </span>
  </div>
                                        </div>
               

                                    </td>
                                    <td>
                                        <a class="text-heading font-semibold" href="#">
                                            {{ user.email }}
                                        </a>
                                    </td>
                                    <td>
                                        <span class="badge badge-lg badge-dot">
                                            {{ user.phone }}
                                        </span>
                                    </td>

                                    <td>


<a v-if="!user.authorized" @click="authorize(user)" class="btn btn-sm btn-warning mx-6">Autoriser
       </a>
    
    <a v-else type="button" class="btn mx-12 btn-sm btn-square btn-success text-danger-hover">
    <i class="bi bi-hand-thumbs-up"></i>
</a>
</td>
                                    <td class="text-end ">
                                        
                                        
                                           

                                        <button @click="userDevis(user.id)" class="btn btn-sm btn-neutral">Demande de devis</button>
                                        <button type="button" @click="userVisa(user.id)" class="btn btn-sm btn-neutral mx-3">Demande de visa</button>
                                        
                                      
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
    </div>
    </template>
    
    <script>
    import Swal from "sweetalert2";
    export default {
      name: "AdminAllUsers",
      data() {
        return {
            pic:"",
            $url: this.$url,
            allUsers:[],
            loading: false,
            users:[],
            deviRejecteted:[],
            visaRejecteted:[],
            allRejected:[],
            userCount:"",
            visaCount:"",
            deviCount:"",
            visaCountR:"",
            deviCountR:"",
            alert: {
          display: false,
          message: "",
          
        },
        userInput: "",
        };
      },
   
      created() {
        var axios = require('axios').default;
        var config2 = {
  method: 'get',
  url: this.$url+'/orders/visas',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};
axios(config2)  
.then((response)=> {
//   console.log(response.data.length);
  this.visaCount = response.data.length;
let e = response.data;
let a = [];
  for(let i=0; i<e.length; i++){
    

    if(e[i].rejected === true){
        a.push(e[i]);

    }
   this.visaRejecteted = a;
  }
  this.visaCountR = this.visaRejecteted.length
      console.log("visa", this.visaCountR)

})
.catch(function (error) {
  console.log(error);
});

        var config1 = {
  method: 'get',
  url: this.$url+'/devis',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};
axios(config1)
.then((response)=> {
//   console.log(response.data);
  this.deviCount = response.data.length;

  let e = response.data;
  let a = [];
  for(let i=0; i<e.length; i++){
    

    if(e[i].rejected === true){
        a.push(e[i]);

    }
    this.deviRejecteted =a;
  }
  this.deviCountR = this.deviRejecteted.length

       console.log("devis", this.deviCountR)

})
.catch(function (error) {
  console.log(error);
});

var config = {
  method: 'get',
  url: this.$url+'/users',
  headers: { 
    'Content-Type': 'application/json', 
  }
};

axios(config)
.then((response)=> {
//   console.log(JSON.stringify(response.data));

  for(let i=0; i<response.data.length; i++){
    if(response.data[i].email != "ivisas.affaire@gmail.com"){
        this.allUsers.push(response.data[i])
    }
  }
 this.users =  this.allUsers;
 this.userCount = response.data.length
})
.catch(function (error) {
  console.log(error);
});


      },
      watch: {
      userInput(word) {
        if (word.length > 0) {
          this.allUsers = this.users.filter((element) =>
            element.email.includes(word)
          );
          if (this.allUsers.length === 0) {
            this.alert.message = "l'adresse mail n'existe pas";
            this.alert.display = true;
            console.log("Introuvable!");
          } else {
            this.alert.message = "";
            this.alert.display = false;
          }
        } else {
            this.allUsers = this.users;
        }
      }
    },
      methods: {

        viewImg(img){
         this.pic = this.$url +"/"+ img;
        },
        authorize(user) {
            
            
      Swal.fire({
        title: "Êtes-vous sûr?",
        text: "Êtes-vous sûr de vouloir autoriser cet utilisateur!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui",
      }).then((result) => {
        
        if (result.isConfirmed) {
            this.loading = true;
          var axios = require("axios").default;
          var config = {
            method: "put",
            url: this.$url + "/user/authorize",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
            data: user,
          };

          axios(config)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Succès",
                text: "L'utilisateur a été autorisé",
              }).then(() => {
                // Go to page after successfully login
                window.location.reload();
                this.loading = false;
              });
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              Swal.fire(
                "Échec !",
                "Quelque chose s'est mal passé !",
                "error"
              ).then(() => {
                // Go to page after successfully login
                window.location.reload();
              });
              console.log(error);
            });
        }
      });
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
    userVisa(id){

localStorage.setItem('adminUserVisasDevis', id)          
this.$router.push('/AdminParticularUserVisa')

      },

        userDevis(id){

  localStorage.setItem('adminUserVisasDevis', id)          
  this.$router.push('/AdminParticularUserDevis')

        }
      },
    };
    </script>
    
    <style lang="scss" scoped>
/* Webpixels CSS */
/* Utility and component-centric Design System based on Bootstrap for fast, responsive UI development */
/* URL: https://github.com/webpixels/css */

@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0);

/* Bootstrap Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot?#iefix) format("embedded-opentype"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff2) format("woff2"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff) format("woff"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.ttf) format("truetype"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.svg#wf) format("svg");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot?#iefix) format("embedded-opentype"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff2) format("woff2"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff) format("woff"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.ttf) format("truetype"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.svg#wf) format("svg");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot?#iefix) format("embedded-opentype"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff2) format("woff2"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff) format("woff"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.ttf) format("truetype"),url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.svg#wf) format("svg");
  font-weight: 700;
  font-style: normal;
}
.card-header{
    display: flex;

}

.thead-light1 th{
    
    font-size: 0.9rem;
}
.tr td{
    
    font-size: 1rem;
    
}
.tr span{
    text-transform: capitalize;
}

.search-box {
   
  font-size: 18px;
  padding: 0.5rem 1rem;
  border: 1px solid #C1C1C1;
  background-color: white;
  border-radius: 10px;
  transition: .2s
}

.search-box:hover {
  border-color: #AAAAAA;
}

.search-box:focus-within {
  border-color: #FF0080;
  box-shadow: 0 0 0 5px rgba(255, 0, 128, 0.40);
}

input {
  font-family: Proxima Nova;
  letter-spacing: -0.2px;
  font-size: 18px;
  border: none;
  max-width: 100%;
  color: #323232;
}

button:hover {
  cursor: pointer;
}

input:focus {
  outline: none;
}

input[type='search']::-webkit-search-cancel-button {
	-webkit-appearance: none;	
}

.clear:not(:valid) ~ .search-clear {
	display: none;
}
.alert {
    padding: 10px 14px 10px 14px;
    background-color: #f2f2f2;
    color: red;
    font-size: 20px;
    font-weight: 200px;
    position: relative;
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    .card-header{
       
    display:block;
}
.search-box {
    margin-top: 1rem;
   font-size: 18px;
   padding: 0.5rem 1rem;
   border: 1px solid #C1C1C1;
   background-color: white;
   border-radius: 10px;
   transition: .2s
 }
  }
    </style>
    