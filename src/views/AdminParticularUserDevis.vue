<template>
    <div>
        <div v-if="loading" style="background:rgba(0,0,0,0.3);height:100vh;width:100vw;position:fixed;top:0;left:0;z-index: 100;"> 
         <div class="ring">Loading</div>
    </div>
<!-- Banner -->
<!-- <a href="https://webpixels.io/components?ref=codepen" class="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style="z-index: 1000;">
    <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
</a> -->
<b-modal id="modal-xl" size="xl" @close="onClose" @ok="onClose" @cancel="onClose">
       
       <div class="row">
         <div class="col-md-3 border-right">
           <div
             class="d-flex flex-column align-items-center text-center p-3 py-5"
           >
             <img
               class="rounded-circle mt-5"
               width="150px"
               src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
             /><span class="font-weight-bold">{{ this.name}}</span
             ><span class="text-black-50">{{this.email}}</span
             ><span> </span>
           </div>
         </div>
         <div class="col-md-5 border-right">
           <div class="p-3 py-5">
             <div class="d-flex justify-content-between align-items-center mb-3">
               <h4 class="text-right">Une demande de devis</h4>
             </div>
             <div class="row mt-2">
               <div class="col-md-6">
                 <label class="labels">Nom [nom de famille] :</label
                 ><input
                   v-model="familyName"
                   type="text"
                   class="form-control"
                   placeholder="Nom [nom de famille]"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Nom(s) de naissance :</label
                 ><input
                   v-model="birthName"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Nom(s) de naissance "
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Nom(s) de naissance :</label
                 ><input
                   v-model="lastName"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Prénom(s)"
                 />
               </div>
             </div>
             <div class="row mt-3">
               <div class="col-md-12">
                 <label class="labels">Date de naissance :</label
                 ><input
                   v-model="birthday"
                   type="date"
                   class="form-control"
                   placeholder="Date de naissance "
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Lieu de naissance :</label
                 ><input
                   v-model="birthplace"
                   type="text"
                   class="form-control"
                   placeholder="Lieu de naissance"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Nationalité actuelle:</label
                 ><input
                   v-model="currentNationality"
                   type="text"
                   class="form-control"
                   placeholder="Nationalité actuelle"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels"
                   >Nationalité à la naissance, si différente :</label
                 ><input
                   v-model="birthNationality"
                   type="text"
                   class="form-control"
                   placeholder="Nationalité à la naissance, si différente"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Autre(s) nationalité(s) :</label
                 ><input
                   v-model="anotherNationality"
                   type="text"
                   class="form-control"
                   placeholder="Autre(s) nationalité(s) :"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Sexe</label>
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Masculin"
                     name="sexe"
                     id="3sex"
                     v-model="sex"
                   />
                   <label for="3sex">Masculin</label>
                   <input
                     type="radio"
                     value="Féminin"
                     name="sexe"
                     id="4sex"
                     v-model="sex"
                   />
                   <label for="4sex">Féminin</label>
                 </div>
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Etat Civil :</label>
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Célibataire"
                     name="familyStatus"
                     id="1s"
                     v-model="civilStatus"
                   />
                   <label for="1s">Célibataire</label>
 
                   <input
                     type="radio"
                     value="Marié(e)"
                     name="familyStatus"
                     id="2s"
                     v-model="civilStatus"
                   />
                   <label for="2s">Marié(e)</label>
 
                   <input
                     type="radio"
                     value="Divorcé(e)"
                     name="familyStatus"
                     id="3s"
                     v-model="civilStatus"
                   />
                   <label for="3s">Divorcé(e)</label>
 
                   <input
                     type="radio"
                     value="Veuf(ve)"
                     name="familyStatus"
                     id="4s"
                     v-model="civilStatus"
                   />
                   <label for="4s">Veuf(ve)</label>
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Séparé(e)"
                     name="familyStatus"
                     id="5s"
                     v-model="civilStatus"
                   />
                   <label for="5s">Séparé(e)</label>
 
                   <input
                     type="radio"
                     value="Autre"
                     name="familyStatus"
                     id="6s"
                     v-model="civilStatus"
                   />
                   <label for="6s">Autre</label>
                 </div>
               </div>
 
               <div class="col-md-12">
                 <label class="labels"
                   >Autorité parentale (pour les mineurs)/tuteur légal ( nom,
                   prénom, adresse (si différente de celle du demandeur), numéro
                   de téléphone, adresse électronique et nationalité: </label
                 ><input
                   v-model="parentalAuthority"
                   type="text"
                   class="form-control"
                   placeholder="Autorité parentale"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels"
                   >Numéro national d’identité, le cas échéant :</label
                 ><input
                   v-model="cniNumber"
                   type="text"
                   class="form-control"
                   placeholder="Numéro national d’identité, le cas échéant"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Type de document de voyage :</label>
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Passeport ordinaire"
                     name="travelDocumentType"
                     id="1pass"
                     v-model="travelDocumentType"
                   />
                   <label for="1pass">Passeport ordinaire</label>
 
                   <input
                     type="radio"
                     value="Passeport officie"
                     name="travelDocumentType"
                     id="2pass"
                     v-model="travelDocumentType"
                   />
                   <label for="2pass">Passeport officie</label>
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Passeport diplomatique"
                     name="travelDocumentType"
                     id="3pass"
                     v-model="travelDocumentType"
                   />
                   <label for="3pass">Passeport diplomatique</label>
 
                   <input
                     type="radio"
                     value="Passeport spécial"
                     name="travelDocumentType"
                     id="4pass"
                     v-model="travelDocumentType"
                   />
                   <label for="4pass">Passeport spécial</label>
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Séparé(e)"
                     name="travelDocumentType"
                     id="5pass"
                     v-model="travelDocumentType"
                   />
                   <label for="5pass">Passeport de service</label>
 
                   <input
                     type="radio"
                     value="Autre document de voyage"
                     name="travelDocumentType"
                     id="6pass"
                     v-model="travelDocumentType"
                   />
                   <label for="6pass">Autre document de voyage</label>
                 </div>
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Numéro du document de voyage :</label
                 ><input
                   v-model="travelDocumentNumber"
                   type="text"
                   class="form-control"
                   placeholder="Numéro du document de voyage"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Date de délivrance :</label
                 ><input
                   v-model="deliveredBy"
                   type="date"
                   class="form-control"
                   placeholder="Date de délivrance"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Date d’expiration :</label
                 ><input
                   v-model="expiredDate"
                   type="date"
                   class="form-control"
                   placeholder="Date d’expiration"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Délivré par (pays) :</label
                 ><input
                   v-model="homeAddress"
                   type="text"
                   class="form-control"
                   placeholder="Délivré par (pays)"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Adresse électronique du demandeur :</label
                 ><input
                   v-model="applicantEmailAddress"
                   type="text"
                   class="form-control"
                   placeholder="Adresse électronique du demandeur"
                   value=""
                 />
               </div>
            
             </div>
           
           </div>
         </div>
         <div class="col-md-4">
           <div class="p-3 py-5">
            
             <div class="col-md-12">
                 <label class="labels">N° de téléphone :</label
                 ><input
                   v-model="phoneNumber"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="N° de téléphone"
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels"
                   >Résidence dans un pays autre que celui de la nationalité
                   actuelle:</label
                 >
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Oui"
                     name="Résidence"
                     id="oui"
                     v-model="anotherHome"
                   />
                   <label for="oui">Oui</label>
                   <input
                     type="radio"
                     value="Non"
                     name="Résidence"
                     id="non"
                     v-model="anotherHome"
                   />
                   <label for="non">Non</label>
                 </div>
               </div>
 
               <div class="col-md-12">
                 <label class="labels"
                   >Autorisation de séjour ou équivalent N° :</label
                 ><input
                   v-model="residencePermitNumber"
                   type="text"
                   class="form-control"
                   placeholder="Autorisation de séjour ou équivalent N°"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Date d’expiration:</label
                 ><input
                   v-model="residencePermitExpirationDate"
                   type="date"
                   class="form-control"
                   value=""
                   placeholder="Date d’expiration"
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Profession actuelle :</label
                 ><input
                   v-model="profession"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Profession actuelle "
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Type de document de voyage :</label>
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Tourisme"
                     name="travelReason"
                     id="Tourisme"
                     v-model="travelReason"
                   />
                   <label for="Tourisme">Tourisme</label>
                   <input
                     type="radio"
                     value="Visite officielle "
                     name="travelReason"
                     id="o"
                     v-model="travelReason"
                   />
                   <label for="o">Visite officielle </label>
 
 
                  
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Sports"
                     name="travelReason"
                     id="Sports"
                     v-model="travelReason"
                   />
                   <label for="Sports">Sports</label>
 
                   <input
                     type="radio"
                     value="Transit aéroportuaire"
                     name="travelReason"
                     id="Transit"
                     v-model="travelReason"
                   />
                   <label for="Transit">Transit aéroportuaire</label>
                 </div>
               </div>
 
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input
                     type="radio"
                     value="Raisons médicales"
                     name="travelReason"
                     id="raison"
                     v-model="travelReason"
                   />
                   <label for="raison">Raisons médicales</label>
 
 
                   <input
                     type="radio"
                     value="Affaires"
                     name="travelReason"
                     id="Affaires"
                     v-model="travelReason"
                   />
                   <label for="Affaires">Affaires </label>
 
                  
                 </div>
               </div>
 
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                     <input
                     type="radio"
                     value="Études"
                     name="travelReason"
                     id="Études"
                     v-model="travelReason"
                   />
                   <label for="Études">Études</label>
 
                   <input
                     type="radio"
                     value="Culture"
                     name="travelReason"
                     id="Culture"
                     v-model="travelReason"
                   />
                   <label for="Culture">Culture</label>
 
                  
                 </div>
               </div>
 
               
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
 
                   <input
                     type="radio"
                     value="Visite à la famille ou à des amis"
                     name="travelReason"
                     id="visit"
                     v-model="travelReason"
                   />
                   <label for="visit">Visite à la famille ou à des amis</label>
                 </div>
               </div>
 
                   
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
 
                   <input
                     type="radio"
                     value="- "
                     name="travelReason"
                     id="autre"
                     v-model="travelReason"
                   />
                   <label for="autre">Autre (à préciser)</label>
 
                 <input
                 v-model="travelReason"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="préciser le type de document de voyage"
                 />
                 </div>
               </div>
 
              
             
           </div>
         </div>
       </div>
    
</b-modal>
<!-- Dashboard -->
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
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
            
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidebarCollapse">
                <!-- Navigation -->
                <ul class="navbar-nav">
                    <router-link to="/AdminDashboard">
                        <li class="nav-item">
                        <a class="nav-link">
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
                <ul class="navbar-nav">
                    <li class="nav-item" style="cursor:pointer">
                        <a class="nav-link"  @click="singout()">
                            <i class="bi bi-box-arrow-left"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <!-- Header -->
        <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                            <!-- Title -->
                            <h1 class="h2 mb-0 ls-tight">Demandes des visas</h1>
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
                        
                    <router-link to="/AdminDashboard"><li class="nav-item ">
                            <a  class="nav-link">Tableau de bord</a>
                        </li>
                    </router-link>
                    <router-link to="/AdminAllDevis" class="nav-item"><li >
                            <a class="nav-link ">Demandes des devis</a>
                        </li>
                    </router-link>

                        <li class="nav-item">
                            <a class="nav-link active">Demandes des devis</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a href="#" class="nav-link font-regular">Particular user name</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </header>
        <!-- Main -->
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
                <!-- Card stats -->
                <!-- <div class="row g-6 mb-6">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                                        <span class="h3 font-bold mb-0">$750.90</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                                        <span class="h3 font-bold mb-0">215</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>30%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                        <span class="h3 font-bold mb-0">1.400</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-clock-history"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>-5%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                        <span class="h3 font-bold mb-0">95%</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i class="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>10%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="card shadow border-0 mb-7">
                    <div class="card-header">
                        <h3 class="mb-0">{{ this.name }}</h3> 
                        <!-- <b-button 
            variant="primary" 
            v-b-modal.payment-modal
          >
            Proceed To Payment
            <i class="ml-1 fas fa-credit-card"></i>
          </b-button> -->
                    </div>
                    <PaymentModal :visible="showPaymentModal" />
                    <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Date d'envoi</th>
                                    <th scope="col">Statut de rejet</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody  v-for="devi in devis" :key="devi.id">
                                <tr >
                                    <td>
                                        <a class="text-heading font-semibold" href="#">
                                            {{ devi.familyName+ " " +devi.lastName }}
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            {{ devi.sendedDate }}
                                        </a>
                                    </td>
                                    <td>
                                        <span v-if="devi.rejected" class="badge badge-lg badge-dot mx-6">
                                            <i class="bg-danger"></i>
                                        </span>
                                        <span v-else class="badge badge-lg badge-dot mx-6">
                                            <i class="bg-warning"></i>
                                        </span>
                                    </td>

                                   
                                    <td class="text-end">
                                        <a  v-if="!devi.rejected"  @click="rejectedDevi(devi.id, devi.applicantEmailAddress)" class="btn btn-sm btn-danger mr-2">Rejeter</a>
                                        <a v-else  class="btn btn-sm btn-neutral mr-2">Rejeté</a>

                                        <button v-if="!devi.view" 
                                        v-b-modal.modal-xl
                                        variant="primary"
                                        @click="viewDevis(devi.id)" type="button" class="btn btn-sm btn-square btn-warning text-danger-hover">
                                            <i class="bi bi-eye"></i>
                                        </button>
                                        <button v-else 
                                        v-b-modal.modal-xl
                                        variant="primary"
                                        @click="viewDevis(devi.id)" type="button" class="btn btn-sm btn-square btn-success text-danger-hover">
                                            <i class="bi bi-eye"></i>
                                        </button>

                                        <!-- <button type="button" 
                                        @click="deleteDevi(devi)"
                                        class="btn btn-sm btn-square btn-neutral text-danger-hover ml-2">
                                            <i class="bi bi-trash"></i>
                                        </button> -->
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
          import Swal from 'sweetalert2'
    import PaymentModal from "@/components/modals/PaymentModal.vue"
    export default {
      name: "AdminAllUsers",
      data() {
        return {
            devis:[],
            name:"",
            loading:false,   
            id:"",
        familyName: "",
        birthName: "",
        lastName: "",
        birthday: "",
        birthplace: "",
        currentNationality: "",
        birthNationality: "",
        anotherNationality: "",
        sex: "",
        civilStatus: "",
        parentalAuthority: "",
        cniNumber: "",
        travelDocumentType: "",
        travelDocumentNumber: "",
        expiredDate: "",
        deliveredBy: "",
        homeAddress: "",
        applicantEmailAddress: "",
        phoneNumber: "",
        anotherHome: "",
        residencePermitNumber: "",
        residencePermitExpirationDate: "",
        profession: "",
        travelReason: "",
        currentdate: "",
        rejected: false,
        view: false,
        };
      },
      components:{
        PaymentModal,
      },
      watch: {},
      created() {

        var axios = require('axios').default;

var config = {
  method: 'get',
  url: this.$url+'/user/id?userId='+ localStorage.getItem("adminUserVisasDevis"),
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};

axios(config)
.then((response) => {
 
  this.devis = response.data.orderDevisDaos
  console.log(this.devis);
//   let visas = JSON.stringify(response.data);
//         this.name = visas.name
// for (let j = 0; j < visas.orderDevisDaos.length; j++) {
//  
//   console.log("cart----------------------------",this.visas.firstName);
// }   
})
.catch(function (error) {
  console.log(error);
//    localStorage.clear()
// window.location.href = "/"
});


      },
      methods: {

        viewDevis(id) {
      var axios = require('axios').default;

var config = {
  method: 'get',
  url: this.$url+'/id/devis?id='+ id,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};

axios(config)
.then((res) => {
  this.id = res.data.id,
   this.familyName = res.data.familyName,
      this.birthName = res.data.birthName,
      this.lastName = res.data.lastName,
      this.birthday = res.data.birthday,
      this.birthplace = res.data.birthplace,
      this.currentNationality = res.data.currentNationality,
      this.birthNationality = res.data.birthNationality,
      this.anotherNationality = res.data.anotherNationality,
      this.sex = res.data.sex,
      this.civilStatus = res.data.civilStatus,
      this.parentalAuthority = res.data.parentalAuthority,
      this.cniNumber = res.data.cniNumber,
      this.travelDocumentType = res.data.travelDocumentType,
      this.travelDocumentNumber = res.data.travelDocumentNumber,
      this.expiredDate = res.data.expiredDate,
      this.deliveredBy = res.data.deliveredBy,
      this.homeAddress = res.data.homeAddress,
      this.applicantEmailAddress = res.data.applicantEmailAddress,
      this.phoneNumber = res.data.phoneNumber,
      this.anotherHome = res.data.anotherHome,
      this.residencePermitNumber = res.data.residencePermitNumber,
      this.residencePermitExpirationDate = res.data.residencePermitExpirationDate,
      this.profession = res.data.profession,
      this.travelReason = res.data.travelReason,
      this.currentdate = res.data.currentdate, 
  console.log(res.data.data);
})
.catch(function (error) {
  console.log(error);
});

    },
    onClose() {
      window.location.reload();
    },
    deleteDevi(devi) {
      Swal.fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimer!",
      }).then((result) => {
        if (result.isConfirmed) {
          var axios = require("axios").default;
          var config = {
            method: "delete",
            url: this.$url + "/devis",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
            data: devi,
          };

          axios(config)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Succès",
                text: "Ce devis a été supprimé",
              }).then(() => {
                // Go to page after successfully login
                window.location.reload();
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
                // window.location.reload();
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
        rejectedDevi(id, email){


Swal.fire({
title: "Êtes-vous sûr?",
text: "Vous ne pourrez pas revenir en arrière !",
icon: "warning",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Oui",
}).then((result) => {
if (result.isConfirmed) {
this.loading = true;

var axios = require('axios').default;

var config = {
method: 'get',
url: this.$url +'/devis/rejected?id='+id+'&email=' + email,
headers: { 
'Content-Type': 'application/json', 
Authorization: "Bearer " + localStorage.getItem("access-token"),
}
};

axios(config)
.then((response) => {
console.log(JSON.stringify(response.data));
Swal.fire({
    icon: "success",
    title: "Succès",
    text: "Ce devis a été Rejeté",
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
});



},

      },
    };
    </script>
    
    <style lang="scss" scoped>
/* Webpixels CSS */
/* Utility and component-centric Design System based on Bootstrap for fast, responsive UI development */
/* URL: https://github.com/webpixels/css */

@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);

/* Bootstrap Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");


.input_field {
    position: relative;
    margin-bottom: 10px;
  }
  input {
    &[type="checkbox"],
    &[type="radio"] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
  
  .checkbox_option {
    label {
      font-size: 1rem;
      margin-right: 2em;
      margin-top: 0rem; 
      position: relative;
      &:before {
        content: "";
        display: inline-block;
        width: 1.3em;
        height: 1em;
        margin-right: 0em;
        vertical-align: -2px;
        border: 2px solid grey;
        padding: 0.12em;
        background-color: transparent;
        background-clip: content-box;
        transition: all 0.2s ease;
      }
      &:after {
        border-right: 2px solid black;
        border-top: 2px solid black;
        content: "";
        height: 20px;
        left: 2px;
        position: absolute;
        top: 12px;
        transform: scaleX(-1) rotate(135deg);
        transform-origin: left top;
        width: 7px;
        display: none;
      }
    }
    input {
      &:hover + label:before {
        border-color: black;
      }
      &:checked + label {
        &:before {
          border-color: black;
        }
        &:after {
          -moz-animation: check 0.8s ease 0s running;
          -webkit-animation: check 0.8s ease 0s running;
          animation: check 0.8s ease 0s running;
          display: block;
          width: 7px;
          height: 20px;
          border-color: black;
        }
      }
    }
  }
  
  .form-control:focus {
    box-shadow: none;
    border-color: gold;
  }
  
  .profile-button {
    background:gold;
    box-shadow:3px 3px 5px rgba(0, 0, 0, 0.841);
    border: none;
    color: black;
    max-width: 100%;
    width: 20rem  
  }
  
  .profile-button:hover {
    background: goldenrod;
    color: whitesmoke;
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
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .add-experience:hover {
    background: goldenrod;
    color: #fff;
    cursor: pointer;
    border: solid 1px goldenrod;
  }

    </style>
    