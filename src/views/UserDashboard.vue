<template>
  <div>
    <!-- Banner -->
    <!-- <a href="https://webpixels.io/components?ref=codepen" class="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style="z-index: 1000;">
  <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
</a> -->
    <div
      v-if="loading"
      style="
        background: rgba(0, 0, 0, 0.3);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
      "
    >
      <div class="ring">Loading</div>
    </div>
    <!-- Dashboard -->
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <!-- Vertical Navbar -->
      <nav
        class="navbar show navbar-vertical navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
        id="navbarVertical"
      >
        <div class="container-fluid">
          <!-- Toggler -->
          <button
            class="navbar-toggler ms-n2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapse"
            aria-controls="sidebarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Brand -->
          <a class="navbar-logo py-lg-2 mb-lg-5 px-lg-12 me-0" href="/">
            <img src="@/assets/logo-jpg.png" alt="..." />
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
                <a class="nav-link" href="/">
                  <i class="bi bi-house"></i>Accueil
                </a>
              </li>
              <router-link class="nav-item" to="/UserDashboard">
                <li>
                  <a class="nav-link">
                    <i class="bi bi-house"></i> Tableau de bord
                  </a>
                </li>
              </router-link>
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
              <button
                type="button"
                class="nav-link"
                @click="singout()"
                style="cursor: pointer; max-width: 100%"
              >
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
                <li class="nav-item">
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
                        <span
                          class="h6 font-semibold text-muted text-sm d-block mb-2"
                          >Mes Devis</span
                        >
                        <span class="h2 font-bold mb-0">{{  this.allDevis}}</span>
                      </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-primary text-white text-lg rounded-circle"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                      <span
                        class="badge badge-pill bg-soft-success text-success me-2"
                      >
                        <i class="bi bi-arrow-up me-1"></i>{{ allDevis/100 }} %
                      </span>
                      <span class="text-nowrap text-xs text-muted"
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card shadow border-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <span
                          class="h6 font-semibold text-muted text-sm d-block mb-2"
                          >Devis Rejete</span
                        >
                        <span v-if="allDevisR === null" class="h2 font-bold mb-0">{{this.allDevisR  }}</span>
                        <span v-else class="h2 font-bold mb-0">0</span>
  
                    </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-danger text-white text-lg rounded-circle"
                        >
                          <i class="bi bi-trash"></i>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                      <span
                        class="badge badge-pill bg-soft-success text-success me-2"
                      >
                        <i class="bi bi-arrow-up me-1"></i> {{ allDevisR/100 }} %
                      </span>
                      <span class="text-nowrap text-xs text-muted"
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card shadow border-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <span
                          class="h6 font-semibold text-muted text-sm d-block mb-2"
                          >Mes Visas</span
                        >
                        <span class="h2 font-bold mb-0">{{ allVisa }}</span>
                      </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-info text-white text-lg rounded-circle"
                        >
                          <i class="fa fa-plane" style="font-size:25px"></i>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                      <span
                        class="badge badge-pill bg-soft-success text-success me-2"
                      >
                        <i class="bi bi-arrow-up me-1"></i>{{ allVisa/100 }} %
                      </span>
                      <span class="text-nowrap text-xs text-muted"
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12">
                <div class="card shadow border-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <span
                          class="h6 font-semibold text-muted text-sm d-block mb-2"
                          >Visas Rejete</span
                        >
                        <span v-if="allVisaR === null" class="h2 font-bold mb-0">{{ allVisaR }}</span>
                        <span v-else class="h2 font-bold mb-0">0</span>
 
                    </div>
                      <div class="col-auto">
                        <div
                          class="icon icon-shape bg-danger text-white text-lg rounded-circle"
                        >
                          <i class="bi bi-trash"></i>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                      <span
                        class="badge badge-pill bg-soft-success text-success me-2"
                      >
                        <i class="bi bi-arrow-up me-1"></i>{{ allVisaR/100 }} %
                      </span>
                      <span class="text-nowrap text-xs text-muted"
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-0 mb-1 z-depth-3">
              <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                  <div class="col-md-3 border-right">
                    <div
                      class="d-flex flex-column align-items-center text-center p-3 py-5"
                    >
                      <div v-if="profileImage === null" class="avatar-upload">
                        <div class="avatar-edit">
                          <input
                            type="file"
                            id="imageUpload"
                            @change="handleFileUpload($event)"
                            accept=".png, .jpg, .jpeg"
                          />
                          <label for="imageUpload"></label>
                        </div>
                        <div class="avatar-preview">
                          <img
                            src="@/assets/logo-png.png"
                            class="rounded-circle img-fluid"
                            style="
                              border-radius: 160px;
                              image-resolution: 3000000dpi;
                              background-color: #000;
                              background-position: center;
                              background-size: cover;
                              background-repeat: no-repeat;
                              max-width: 100%;
                              max-height: 100%;
                              height: 180px;
                              width: 180px;
                            "
                          />
                        </div>
                      </div>

                      <div v-else class="avatar-upload">
                        <div class="avatar-edit">
                          <input
                            type="file"
                            id="imageUpload"
                            @change="handleFileUpload($event)"
                            accept=".png, .jpg, .jpeg"
                          />

                          <label for="imageUpload"></label>
                        </div>
                        <div class="avatar-preview">
                          <a
                            :href="pic"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              :src="pic"
                              style="
                                border-radius: 160px;
                                image-resolution: 30dpi;
                                background-position: center;
                                background-size: cover;
                                background-repeat: no-repeat;
                                max-width: 100%;
                                max-height: 100%;
                                height: 192px;
                                width: 192px;
                              "
                            />
                          </a>
                        </div>
                      </div>

                      <span class="font-weight-bold mt-3">
                        {{ this.useremail }}</span
                      ><span class="text-black-50"></span><span> </span>
                    </div>
                  </div>
                  <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <h4 class="text-right">Paramètres de profil</h4>
                      </div>
                      <div class="row mt-3">
                        <div style="display: none">
                          <label class="labels">id</label
                          ><input
                            v-model="id"
                            type="text"
                            class="search-box"
                            placeholder="Full name"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Nom</label
                          ><input
                            v-model="name"
                            type="text"
                            class="search-box"
                            placeholder="Full name"
                            value=""
                          />
                        </div>
                        <div class="col-md-12 mt-3">
                          <label class="labels">Numéro de portable</label
                          ><input
                            v-model="tel"
                            type="text"
                            class="search-box"
                            placeholder="enter phone number"
                            value=""
                          />
                        </div>
                        <div class="col-md-12 mt-3">
                          <label class="labels">Email</label
                          ><input
                            v-model="useremail"
                            type="text"
                            class="search-box"
                            placeholder="enter email"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="mt-5 text-center">
                        <button
                          @click="profileUpdate()"
                          class="btn btn-warning profile-button"
                          type="button"
                        >
                          Enregistrer le profil
                          <div
                            class="spinner-border text-light spinner-border-sm"
                            role="status"
                            v-if="profileUpdateSpinner"
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="p-3 py-0">
                      <div
                        class="d-flex justify-content-between align-items-center my-4"
                      >
                        <h4 class="text-right">Changer le mot de passe</h4>
                      </div>
                      <!-- <span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span> -->
                      <div class="col-md-12">
                        <label class="labels">Ancien mot de passe</label
                        ><input
                          v-model="oldPassword"
                          type="text"
                          class="search-box"
                          placeholder="Enter Old Password"
                          value=""
                        />
                      </div>
                      <div class="col-md-12 mt-3">
                        <label class="labels">Nouveau mot de passe</label
                        ><input
                          v-model="newPassword"
                          type="text"
                          class="search-box"
                          placeholder="Enter new password"
                          value=""
                        />
                      </div>
                      <div class="col-md-12 mt-3">
                        <label class="labels"
                          >Confirmer nouveau mot de passe</label
                        ><input
                          v-model="confirmNewPassword"
                          type="text"
                          class="search-box"
                          placeholder="Confirm new password"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="mt-5 text-center">
                      <button
                        @click="passwordReset()"
                        class="btn btn-warning profile-button"
                        type="button"
                      >
                        Envoyer
                        <div
                          class="spinner-border text-light spinner-border-sm"
                          role="status"
                          v-if="passwordResetSpinner"
                        >
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
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
      allUsers: [],
      name: "",
      tel: "",
      useremail: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      $url: this.$url,
      passwordResetSpinner: false,
      profileUpdateSpinner: false,
      roleId: "",
      roleName: "",
      profileImage: "",
      pic: "",
      file: "",
      loading: false,
      icon:"",
      all: [],
      devis:[],
      child1:[],
      child:[],
      allDevis:'',
      allDevisR:'',
      allVisa:'',
      allVisaR:'',
    };
  },
  watch: {},
  created() {
    var axios = require("axios").default;
    var config = {
      method: "get",
      url: this.$url + "/profile",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    };

    axios(config)
      .then((res) => {
        this.id = res.data.id;
        this.name = res.data.name;
        this.tel = res.data.phone;
        this.useremail = res.data.email;
        this.profileImage = res.data.profileImage;
        this.pic = this.$url + "/" + this.profileImage;
        // this.roleId =  res.data.roleDaos.id;
        // this.roleName =  res.data.roleDaos.name;

        this.all.push(res.data);
        let a = [];
        let b = [];
        for (let i = 0; i < this.all.length; i++) {
          this.child = this.all[i].orderDevisDaos;
          this.allDevis = this.child.length;
          for (let j = 0; j < this.child.length; j++) {
            if(this.child[j].rejected === true){
                // console.log("childdddddddd",this.child[j]);
                a.push(this.child[j])
                this.allDevisR =a.length;
            }
           
          }
        }

        for (let i = 0; i < this.all.length; i++) {
          this.child1 = this.all[i].orderVisas;
          this.allVisa = this.child1.length;
          for (let j = 0; j < this.child1.length; j++) {
            if(this.child1[j].rejected === true){
                console.log("childdddddddd",this.child1[j]);
                b.push(this.child1[j])
                this.allVisaR =b.length;
            }
           
          }
        }
        console.log("child1111111111111",  this.allVisa, this.allVisaR );

    //   this.devis  = [...this.all, ...this.child];

      
    //       console.log("devissssssssss",this.all, this.child.length);






        this.currenUser = res.data.id;
        window.onbeforeunload = () => {
          localStorage.removeItem("isAuth");
        };
        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
      .catch(function (error) {
        console.log(error);
        // localStorage.clear();
        // window.location.href = "/";
      });
  },
  methods: {
    handleFileUpload(e) {
      this.loading = true;
      this.icon = e.target.files[0];

      var axios = require("axios").default;
      var FormData = require("form-data");
      var data = new FormData();
      data.append("file", this.icon);

      var config = {
        method: "put",
        url: this.$url + "/upload/profile/image",
        headers: {
          "Content-Type": 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.location.reload();
        this.loading = false;

        })
        .catch((error) => {
          Swal.fire("Échec !", "Quelque chose s'est mal passé !", "error").then(
            () => {
              // Go to page after successfully login
              window.location.reload();
            }
          );
          console.log(error);
        });
    },

    profileUpdate() {
      if (this.name === "" || this.useremail === "" || this.tel === "") {
        Swal.fire({
          title: "Attention",
          text: "vous devez remplir toutes les champs",
          type: "warning",
        });
      } else {
        this.profileUpdateSpinner = true;
        var axios = require("axios").default;
        var data = JSON.stringify({
          id: this.id,
          name: this.name,
          phone: this.tel,
          email: this.useremail,
        });

        var config = {
          method: "put",
          url: this.$url + "/update/user",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            Swal.fire({
              icon: "success",
              title: "Succès",
              text: "Votre profil a été réinitialisé",
            }).then(() => {
              // Go to page after successfully login
              window.location.reload();
            });
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire(
              "Échec !",
              "Quelque chose s'est mal passé !",
              "error"
            ).then(() => {
              // Go to page after successfully login
              window.location.reload();
            });
          });
      }
    },

    passwordReset() {
      if (
        this.oldPassword === "" ||
        this.newPassword === "" ||
        this.confirmNewPassword === ""
      ) {
        Swal.fire({
          icon: "warning",
          title: "Attention",
          text: "vous devez remplir toutes les champs",
          type: "warning",
        });
      } else if (this.confirmNewPassword !== this.newPassword) {
        Swal.fire({
          icon: "warning",
          title: "Attention",
          text: "Les mots de passe ne correspond pas",
          type: "warning",
        });
      } else {
        this.passwordResetSpinner = true;
        var axios = require("axios").default;
        var config = {
          method: "get",
          url:
            this.$url +
            "/user/update/" +
            this.oldPassword +
            "/" +
            this.newPassword +
            "/password",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            Swal.fire({
              icon: "success",
              title: "Succès",
              text: "Votre mot de passe a été réinitialisé",
            }).then(() => {
              // Go to page after successfully login
              window.location.reload();
            });
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
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot?#iefix)
      format("embedded-opentype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff2)
      format("woff2"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff)
      format("woff"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.ttf)
      format("truetype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.svg#wf)
      format("svg");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot?#iefix)
      format("embedded-opentype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff2)
      format("woff2"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff)
      format("woff"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.ttf)
      format("truetype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.svg#wf)
      format("svg");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot?#iefix)
      format("embedded-opentype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff2)
      format("woff2"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff)
      format("woff"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.ttf)
      format("truetype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.svg#wf)
      format("svg");
  font-weight: 700;
  font-style: normal;
}

.search-box {
  font-size: 18px;
  padding: 0.5rem 1rem;
  border: 1px solid #c1c1c1;
  background-color: white;
  width: 22.8em;
  border-radius: 10px;
  transition: 0.2s;
}

.search-box:hover {
  border-color: #aaaaaa;
}

.search-box:focus-within {
  border-color: rgb(42, 42, 42);
  box-shadow: 0 0 0 3px rgb(180, 231, 250);
}

input {
  font-family: Proxima Nova;
  letter-spacing: -0.2px;
  font-size: 18px;
  border: none;
  max-width: 100%;
  color: #000000;
}

button:hover {
  cursor: pointer;
}

input:focus {
  outline: none;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

.clear:not(:valid) ~ .search-clear {
  display: none;
}

.form-control:focus {
  box-shadow: none;
  border-color: goldenrod;
}

.profile-button {
  background: rgb(220, 189, 13);
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: goldenrod;
}

.profile-button:focus {
  background: goldenrod;
  box-shadow: none;
}

.profile-button:active {
  background: goldenrod;
  box-shadow: none;
}

.back:hover {
  color: goldenrod;
  cursor: pointer;
}

.labels {
  font-size: 1.2rem;
}

.add-experience:hover {
  background: goldenrod;
  color: #fff;
  cursor: pointer;
  border: solid 1px goldenrod;
}

.avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
  .avatar-edit {
    position: absolute;
    right: 15px;
    z-index: 1;
    top: -1.8rem;
    input {
      display: none;
      + label {
        display: inline-block;
        width: 34px;
        height: 34px;
        margin-bottom: 0;
        border-radius: 100%;
        background: #e7e6e6;
        border: 1px solid transparent;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        font-weight: normal;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: #f1f1f1;
          border-color: #d6d6d6;
        }
        &:after {
          content: "\f030";
          font-family: "FontAwesome";
          color: black;
          position: absolute;
          top: 5px;
          left: 0;
          right: 0;
          text-align: center;
          margin: auto;
        }
      }
    }
  }
  .avatar-preview {
    width: 192px;
    height: 192px;
    position: relative;
    border-radius: 100%;
    border: 6px solid #f8f8f8;
    margin-top: -40px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    > div {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
