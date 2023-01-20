<template>
    <div>
<!-- Banner -->
<!-- <a href="https://webpixels.io/components?ref=codepen" class="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style="z-index: 1000;">
    <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
</a> -->




<!-- Dashboard -->
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <nav class="navbar show navbar-vertical navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
            <!-- Toggler -->
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Brand -->
              <!-- Brand -->
              <a class="navbar-logo py-lg-2 mb-lg-5 px-lg-12 me-0" href="/">
              <img src="@/assets/logo-jpg.png" alt="...">
          </a>
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
               
                      <li class="nav-item">
                      <a class="nav-link " href="/">
                          <i class="bi bi-house"></i>Accueil
                      </a>
                  </li>
                  <router-link class="nav-item" to="/UserDashboard">
                      <li >
                      <a class="nav-link">
                          <i class="bi bi-house"></i> Tableau de bord
                      </a>
                  </li>
                  </router-link >                
                  <router-link to="/UserAllDevis" class="nav-item">
                <li>
                  <a class="nav-link">
                    <i class="bi bi-pencil-square"></i> Mes Demandes des devis
                    <!-- <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> -->
                  </a>
                </li>
              </router-link>
              <router-link class="nav-item" to="/UserAllVisas">
                <li>
                  <a class="nav-link">
                    <i class="fa fa-plane" style="font-size: 20px;"></i>  Mes Demandes des visas
                  </a>
                </li>
              </router-link>
           <!-- <router-link to="/Sejour">
               <li class="nav-item">
               <a class="nav-link active">
                   <i class="bi bi-house"></i> Sejour
               </a>
           </li>
           </router-link >
           <router-link to="/Visas">
               <li class="nav-item">
               <a class="nav-link active">
                   <i class="bi bi-house"></i> Visa
               </a>
           </li>
           </router-link > -->
          
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
                <ul class="navbar-nav">
                      <button type="button" class="nav-link" @click="singout()" style="cursor: pointer; max-width: 100%;">
                          <i class="bi bi-box-arrow-left"></i> Logout
                      </button>
              </ul>
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
                            <h1 class="h2 mb-0 ls-tight">Mes Demandes des visas</h1>
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
                    <ul class="nav nav-tabs mt-4 overflow-x border-0 ">
                        <router-link to="/UserDashboard"><li class="nav-item ">
                            <a  class="nav-link">Tableau de bord</a>
                        </li>
                    </router-link>
                        <li class="nav-item mx-4">
                            <a  class="nav-link active">Mes Demandes des visas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <!-- Main -->
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
                <!-- Card stats -->
              <UserAllVisaVue/>

            </div>
        </main>
    </div>
</div>
    </div>
    </template>
    
    <script>
    import UserAllVisaVue from '../components/UserAllVisa.vue';
    export default {
      name: "UserAllVisas",
      data() {
        return {
            allUsers:[],
            
        };
      },
      components:{
        UserAllVisaVue,
      },
      watch: {},
      created() {

      },
      methods: {
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

    </style>
    