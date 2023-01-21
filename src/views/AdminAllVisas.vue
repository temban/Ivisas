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
      <div class="form_wrapper">
        <div class="title_container">
          <img src="@/assets/visa.png" />
          <h2>FICHE DE DEMANDE DE VISA</h2>
        </div>

        <div class="">
          <form>
            <div class="row clearfix">
              <div class="col_half">
                <div class="title_container1">
                  <h6>Nom:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    v-model="firstName"
                  />
                </div>
              </div>
              <div class="col_half">
                <div class="title_container1">
                  <h6>Prénom:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Prénom"
                    readonly
                    v-model="lastName"
                  />
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col_half p2">
                <div class="title_container1">
                  <h6>Sexe:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Sexe"
                    v-model="sex"
                  />
                </div>
              </div>
              <div class="col_half p2">
                <div class="title_container1">
                  <h6>Lieu de naissance:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Lieu de naissance"
                    readonly
                    v-model="birthCountry"
                  />
                </div>
              </div>
              <div class="col_half p2">
                <div class="title_container1">
                  <h6>Date de naissance:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Date de naissance"
                    readonly
                    v-model="birthday"
                  />
                </div>
              </div>
            </div>
            <div class="title_container1">
              <h6>Nom et prénom du père:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Nom et prénom du père"
                readonly
                v-model="fatherName"
              />
            </div>
            <div class="title_container1">
              <h6>Nom et prénom du mère:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Nom et prénom du mère"
                readonly
                v-model="motherName"
              />
            </div>
            <div class="title_container1">
              <h6>Nationalité d'origine:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Nationalité d'origine"
                readonly
                v-model="currentCountry"
              />
            </div>
            <div class="title_container1">
              <h6>Nationalité actuelle:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Nationalité actuelle"
                required
                v-model="currentCountry"
              />
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <h4>Situation de famille:</h4>
              </div>
              <div class="col_half left">
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="Célibataire"
                    name="familyStatus1"
                    id="familyStatus1"
                    v-model="familyStatus"
                    readonly
                  />
                  <label for="familyStatus1">Célibataire</label>
                  <input
                    type="radio"
                    value="Marié(e)"
                    name="familyStatus2"
                    id="familyStatus2"
                    v-model="familyStatus"
                    readonly
                  />
                  <label for="familyStatus2">Marié(e)</label>
                  <input
                    type="radio"
                    value="Divorcé(e)"
                    name="familyStatus3"
                    id="familyStatus3"
                    v-model="familyStatus"
                    readonly
                  />
                  <label for="familyStatus3">Divorcé(e)</label>
                  <input
                    type="radio"
                    value="Veuf(ve)"
                    name="familyStatus4"
                    id="familyStatus4"
                    v-model="familyStatus"
                    readonly
                  />
                  <label for="familyStatus4">Veuf(ve)</label>
                </div>
              </div>
            </div>

            <div class="title_container1">
              <h6>Nom et Prénom du conjoint:</h6>
            </div>
            <div class="input_field space">
              <input
                type="text"
                name="email"
                placeholder="Nom et Prénom du conjoint"
                readonly
                v-model="partnerName"
              />
            </div>

            <div class="row clearfix">
                  <div class="col_half">
                  <h4>Nature du document du voyage:</h4>
                  </div>
                  <div class="col_half1">
                  
                <div class="input_field checkbox_option">
                  <input value="Passport ordinaire" type="radio" name="documentType" id="rd5" v-model="documentType"/>
                  <label for="rd5">Passport ordinaire</label>
                  <input value="Passport diplomatique" type="radio" name="documentType" id="rd6"  v-model="documentType"/>
                  <label for="rd6">Passport diplomatique</label>
                  <input value="Passport de service" type="radio" name="documentType" id="rd7"  v-model="documentType"/>
                  <label for="rd7">Passport de service</label>
                  
                </div>
                  </div>
                  <div class="col_half input_field checkbox_option">
                   
                   <input value="Passport de service: " type="radio" name="radiogroup1" id="rd8" />
                 <label class="laS" for="rd8">Passport de service(priser la nature) :</label>
                 <div class="input_field">
                 <input type="text" name="email" placeholder="Passport de service(priser la nature) "  v-model="documentType"/>
               </div>  
               </div>
                  
                </div>

            <div class="title_container1">
              <h6>Numéro du passeport:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Numéro du passeport"
                readonly
                v-model="passportNumber"
              />
            </div>

            <div class="row clearfix">
              <div class="col_half">
                <div class="title_container1">
                  <h6>Date de délivrance:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Date de délivrance"
                    v-model="deliveredDate"
                  />
                </div>
              </div>
              <div class="col_half">
                <div class="title_container1">
                  <h6>Lieu de délivrance:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Lieu de délivrance"
                    readonly
                    v-model="lieuDelivrance"
                  />
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <div class="input_field">
                  <div class="title_container1">
                    <h6>Valide jusqu'au:</h6>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Valide jusqu'au"
                    v-model="expiredDate"
                  />
                </div>
              </div>
              <div class="col_half">
                <div class="title_container1">
                  <h6>Autorité Ayant délivré ce document:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Autorité Ayant délivré ce document"
                    readonly
                    v-model="approvedBy"
                  />
                </div>
              </div>
            </div>

            <div class="row clearfix">
              <div class="col_half">
                <div class="title_container1">
                  <h6>Votre adresse exacte en France:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre adresse exacte en France"
                    readonly
                    v-model="adress"
                  />
                </div>
              </div>
              <div class="col_half">
                <div class="title_container1">
                  <h6>Votre numéro de téléphone:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre numéro de téléphone"
                    readonly
                    v-model="phone"
                  />
                </div>
              </div>
            </div>

            <div class="row clearfix">
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Email:</h6>
          </div>
                    <div class="input_field">
                      <input type="text" name="email" 
                      placeholder=" Email " 
                       v-model="email"/>

                    </div>
                  </div>
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Profession:</h6>
          </div>
                    <div class="input_field">
                      <input
                    type="text"
                    name="name"
                    placeholder="Profession"
                     v-model="profession"
                  />
                    </div>
                  </div>
                </div>

            <div class="row clearfix">
              <div class="col_half">
                <div class="title_container1">
                  <h6>Nom de l'employeur:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom de l'employeur"
                    readonly
                    v-model="employer"
                  />
                </div>
              </div>
              <div class="col_half">
                <div class="title_container1">
                  <h6>Adresse de l'employeur:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Adresse de l'employeur"
                    readonly
                    v-model="employerAdress"
                  />
                </div>
              </div>
            </div>

            <div class="title_container1">
              <h6>Ville d'entrées au Cameroun:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Ville d'entrées au Cameroun"
                readonly
                v-model="inputTown"
              />
            </div>

            <div class="row clearfix">
              <div class="col_half">
                <div class="title_container1">
                  <h6>Personne de contact au Cameroun pendant le séjour:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Personne de contact au Cameroun pendant le séjour"
                    readonly
                    v-model="host"
                  />
                </div>
              </div>
              <div class="col_half">
                <div class="title_container1">
                  <h6>Adresse au Cameroun pendant le séjour:</h6>
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Adresse au Cameroun pendant le séjour"
                    readonly
                    v-model="hostAddress"
                  />
                </div>
              </div>
            </div>
            <div class="title_container1">
              <h6>Motif du séjour:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Motif du séjour"
                readonly
                v-model="travelReason"
              />
            </div>
            <div class="title_container1">
              <h6>Durée du séjour au Cameroun du et au:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Motif du séjour"
                readonly
                v-model="durationOfStay"
              />
            </div>

            <div class="title_container1">
              <h6>Nombre d'entrées et sorties:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Nombre d'entrées et sorties"
                readonly
                v-model="numberOfInputOutput"
              />
            </div>

            <div class="row clearfix">
              <div class="col_half">
                <h4>Nature du visa sollicité:</h4>
              </div>
              <div class="col_half1 left">
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="Transit"
                    name="visaNature"
                    id="rd10"
                    v-model="visaNature"
                  />
                  <label for="rd10">Transit</label>
                  <input
                    type="radio"
                    value="Tourisme"
                    name="visaNature"
                    id="rd20"
                    v-model="visaNature"
                  />
                  <label for="rd20">Tourisme</label>
                  <input
                    type="radio"
                    value="Temporaire"
                    name="visaNature"
                    id="rd30"
                    v-model="visaNature"
                  />
                  <label for="rd30">Temporaire</label>
                  <input
                    type="radio"
                    value="Long séjour"
                    name="visaNature"
                    id="rd40"
                    v-model="visaNature"
                  />
                  <label for="rd40">Long séjour</label>
                </div>
              </div>
            </div>
            <div class="title_container1">
              <h6>Pays de destination après séjour au Cameroun:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Pays de destination après séjour au Cameroun"
                readonly
                v-model="destinationCountry"
              />
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <h4>
                  En cas de transit: ete-vous titulaire d'une autorisation
                  dentrée dans le pays de destination?
                </h4>
              </div>
              <div class="col_half">
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="OUI"
                    name="radiogroup1"
                    id="rd100"
                    v-model="question"
                  />
                  <label for="rd100">OUI</label>
                  <input
                    type="radio"
                    value="NON"
                    name="radiogroup1"
                    id="rd200"
                    v-model="question"
                  />
                  <label for="rd200">NON</label>
                </div>
              </div>
            </div>
            <div class="title_container1">
              <h6>Moyen de transport utilisé:</h6>
            </div>
            <div class="input_field">
              <input
                type="text"
                name="name"
                placeholder="Moyen de transport utilisé"
                readonly
                v-model="travelMode"
              />
            </div>
          </form>
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
                <ul class="navbar-nav">
                    <li class="nav-item" style="cursor:pointer">
                        <a class="nav-link" @click="singout()">
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
                        
                 
                        <li class="nav-item">
                            <a class="nav-link active">Demandes des visas</a>
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
                        <h5 class="mb-0">Tous les visas</h5>
                    </div>
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
                            <tbody  v-for="visa in allVisas" :key="visa.id">
                                <tr >
                                    <td>
                                        <a class="text-heading font-semibold" href="#">
                                            {{ visa.firstName + " " + visa.lastName }}
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            {{ visa.sendedDate }}
                                        </a>
                                    </td>
                                    <td>
                                        <span v-if="visa.rejected" class="badge badge-lg badge-dot  mx-6">
                                            <i class="bg-danger"></i>
                                        </span>
                                        <span v-else class="badge badge-lg badge-dot mx-6">
                                            <i class="bg-warning"></i>
                                        </span>
                                    </td>


                                    <td class="text-end">
                                        <a  v-if="!visa.rejected"  @click="rejectedVisa(visa.id, visa.email)" class="btn btn-sm btn-danger mr-2">Rejeter</a>
                                        <a v-else  class="btn btn-sm btn-neutral mr-2">Rejeté</a>

                                        <button v-if="!visa.view" 
                                        v-b-modal.modal-xl
                                        variant="primary"
                                        @click="viewVisa(visa.id)" type="button" class="btn btn-sm btn-square btn-warning text-danger-hover">
                                            <i class="bi bi-eye"></i>
                                        </button>
                                        <button v-else 
                                        v-b-modal.modal-xl
                                        variant="primary"
                                        @click="viewVisa(visa.id)" type="button" class="btn btn-sm btn-square btn-success text-danger-hover">
                                            <i class="bi bi-eye"></i>
                                        </button>

                                        <!-- <button type="button" 
                                        @click="deleteVisa(visa)"
                                        class="btn btn-sm btn-square btn-neutral text-danger-hover ml-2">
                                            <i class="bi bi-trash"></i>
                                        </button> -->
                                    </td>

                                    <!-- <td class="text-end">
                                        <a href="#" class="btn btn-sm btn-neutral" @click="viewVisa(visa.id)">View</a>
                                        <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td> -->
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
            loading:false,
            allVisas:[],
            visas: [],
      visasa: [],
      firstName: "",
      durationOfStay: "",
      lastName: "",
      sex: "",
      birthday: "",
      fatherName: "",
      motherName: "",
      birthCountry: "",
      currentCountry: "",
      familyStatus: "",
      partnerName: "",
      documentType: "",
      passportNumber: "",
      deliveredDate: "",
      expiredDate: "",
      approvedBy: "",
      adress: "",
      phone: "",
      email: "",
      profession: "",
      employer: "",
      employerAdress: "",
      inputTown: "",
      host: "",
      hostAddress: "",
      travelReason: "",
      durationOfStay1: "",
      durationOfStay2: "",
      numberOfInputOutput: "",
      visaNature: "",
      destinationCountry: "",
      question: "",
      travelMode: "",
      lieuDelivrance: "",
      sendedDate: "",
      new: [],
      myArray: [],
        };
      },
      watch: {},
      created() {
        var axios = require('axios').default;
var config = {
  method: 'get',
  url: this.$url+'/orders/visas',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};
axios(config)
.then((response)=> {
  console.log(JSON.stringify(response.data));
  this.allVisas = response.data;
})
.catch(function (error) {
  console.log(error);
});


      },
      methods: {
        viewVisa(id) {
      var axios = require("axios").default;

      var config = {
        method: "get",
        url: this.$url + "/order/visa?id=" + id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          (this.firstName = response.data.firstName),
            (this.lastName = response.data.lastName),
            (this.sex = response.data.sex),
            (this.birthday = response.data.birthday),
            (this.fatherName = response.data.fatherName),
            (this.motherName = response.data.motherName),
            (this.birthCountry = response.data.birthCountry),
            (this.currentCountry = response.data.currentCountry),
            (this.familyStatus = response.data.familyStatus),
            (this.partnerName = response.data.partnerName),
            (this.documentType = response.data.documentType),
            (this.passportNumber = response.data.passportNumber),
            (this.deliveredDate = response.data.deliveredDate),
            (this.expiredDate = response.data.expiredDate),
            (this.approvedBy = response.data.approvedBy),
            (this.adress = response.data.adress),
            (this.phone = response.data.phone),
            (this.email = response.data.email),
            (this.profession = response.data.profession),
            (this.employer = response.data.employer),
            (this.employerAdress = response.data.employerAdress),
            (this.inputTown = response.data.inputTown),
            (this.host = response.data.host),
            (this.travelReason = response.data.travelReason),
            (this.hostAddress = response.data.hostAddress),
            (this.hostAddress = response.data.hostAddress),
            (this.durationOfStay = response.data.durationOfStay),
            (this.numberOfInputOutput = response.data.numberOfInputOutput),
            (this.visaNature = response.data.visaNature),
            (this.destinationCountry = response.data.destinationCountry),
            (this.question = response.data.question),
            (this.travelMode = response.data.travelMode),
            (this.sendedDate = response.data.sendedDate);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    onClose() {
      window.location.reload();
    },
    deleteVisa(visa) {
        
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
            this.loading = true;
          var axios = require("axios").default;
          // var data = JSON.stringify({
          //   "id": visa.id,
          //   "firstName": visa.firstName,
          //   "lastName": visa.lastName,
          //   "sex": visa.sex,
          //   "birthday": visa.birthday,
          //   "birthPlace": visa.birthPlace,
          //   "fatherName": visa.fatherName,
          //   "motherName": visa.motherName,
          //   "birthCountry": visa.birthCountry,
          //   "currentCountry": visa.currentCountry,
          //   "familyStatus": visa.familyStatus,
          //   "partnerName": visa.partnerName,
          //   "documentType": visa.documentType,
          //   "passportNumber": visa.passportNumber,
          //   "deliveredDate": visa.deliveredDate,
          //   "expiredDate": visa.expiredDate,
          //   "approvedBy": visa.approvedBy,
          //   "adress": visa.adress,
          //   "phone": visa.phone,
          //   "email": visa.email,
          //   "profession": visa.profession,
          //   "employer": visa.employer,
          //   "employerAdress": visa.employerAdress,
          //   "inputTown": visa.inputTown,
          //   "host": visa.host,
          //   "hostAddress": visa.hostAddress,
          //   "travelReason": visa.travelReason,
          //   "durationOfStay": visa.durationOfStay,
          //   "numberOfInputOutput": visa.numberOfInputOutput,
          //   "visaNature": visa.visaNature,
          //   "destinationCountry": visa.destinationCountry,
          //   "question": visa.question,
          //   "travelMode": visa.travelMode,
          //   "sendedDate": visa.sendedDate,
          //   "rejected": visa.rejected,
          //   "view": visa.view
          // });

          var config = {
            method: "delete",
            url: this.$url + "/delete/order/visa",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
            data: visa,
          };

          axios(config)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Succès",
                text: "Ce visa a été supprimé",
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
    rejectedVisa(id, email){


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
  url: this.$url +'/visa/rejected?id='+id+'&email=' + email,
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
                text: "Ce visa a été Rejeté",
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



        }
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



$yellow: #f5ba1a;
  $black: #000000;
  $grey: #cccccc;

.form_wrapper {
    background: #fff;
    max-width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin: 1% auto 0;
    position: relative;
    z-index: 1;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: none;
    transition: none;
    -webkit-animation: expand 0.8s 0.6s ease-out forwards;
    animation: expand 0.8s 0.6s ease-out forwards;
    opacity: 0;
    h2 {
      font-size: 1.5em;
      line-height: 1.5em;
      margin: 0;
      font-weight: 700;
    }
    .title_container {
      text-align: center;
      padding-bottom: 15px;
    }
    .title_container1 {
      text-align: left;
    }
    h3 {
      font-size: 1.1em;
      font-weight: normal;
      line-height: 1.5em;
      margin: 0;
    }
    label {
      font-size: 12px;
    }
    .row {
      margin: 10px -15px;
      > div {
        padding: 0 15px;
        box-sizing: border-box;
      }
    }
    .col_half {
      width: 50%;
      float: left;
    }
  
   .p2{
      width: 33.3%;
      float: left;
    }
   .visNature{
      width: 70.7%;
      float: left;
   }
 
    .input_field {
      position: relative;
      margin-bottom: 20px;
      -webkit-animation: bounce 0.6s ease-out;
      animation: bounce 0.6s ease-out;
      > span {
        position: absolute;
        left: 0;
        top: 0;
        color: #333;
        height: 100%;
        border-right: 1px solid $grey;
        text-align: center;
        width: 30px;
        > i {
          padding-top: 10px;
        }
      }
    }
    .space {

    margin-bottom: 5rem;
  }
    .textarea_field {
      > span {
        > i {
          padding-top: 10px;
        }
      }
    }
    input {
      &[type="text"],
      &[type="email"],
      &[type="text"] {
        width: 100%;
        padding: 8px 10px 9px 35px;
        height: 35px;
        border: 1px solid $grey;
        box-sizing: border-box;
        outline: none;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
      &[type="text"]:hover,
      &[type="email"]:hover,
      &[type="text"]:hover {
        background: #fafafa;
      }
      &[type="text"]:focus,
      &[type="email"]:focus,
      &[type="text"]:focus {
        -webkit-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
        -moz-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
        box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
        border: 1px solid $yellow;
        background: #fafafa;
      }
      &[type="submit"] {
        background: $yellow;
        height: 35px;
        line-height: 35px;
        width: 100%;
        border: none;
        outline: none;
        cursor: pointer;
        color: #fff;
        font-size: 1.1em;
        margin-bottom: 10px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: darken($yellow, 7%);
        }
        &:focus {
          background: darken($yellow, 7%);
        }
      }
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
  }
  .form_container {
    .row {
      .col_half.last {
        border-left: 1px solid $grey;
      }
    }
  }
  h4{
    margin-top: 1rem;
    font-weight: 400;
  }
  .checkbox_option {
    label {
        font-size: 1rem;
      margin-right: 2em;
      margin-top: 1rem;
      position: relative;
      &:before {
        content: "";
        display: inline-block;
        width: 1.3em;
        height: 1em;
        margin-right: 0.5em;
        vertical-align: -2px;
        border: 2px solid $grey;
        padding: 0.12em;
        background-color: transparent;
        background-clip: content-box;
        transition: all 0.2s ease;
      }
      &:after {
        border-right: 2px solid $black;
        border-top: 2px solid $black;
        content: "";
        height: 20px;
        left: 2px;
        position: absolute;
        top: 13px;
        transform: scaleX(-1) rotate(135deg);
        transform-origin: left top;
        width: 10px;
        display: none;
      }
    }
    input {
      &:hover + label:before {
        border-color: $black;
      }
      &:checked + label {
        &:before {
          border-color: $black;
        }
        &:after {
          -moz-animation: check 0.8s ease 0s running;
          -webkit-animation: check 0.8s ease 0s running;
          animation: check 0.8s ease 0s running;
          display: block;
          width: 8px;
          height: 17px;
          border-color: $black;
        }
      }
    }
  }
  .left{
    margin-left: -20rem;
  }
  .radio_option {
    label {
      margin-right: 1em;
      &:before {
        content: "";
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        margin-right: 0.5em;
        border-radius: 100%;
        vertical-align: -3px;
        border: 2px solid $grey;
        padding: 0.15em;
        background-color: transparent;
        background-clip: content-box;
        transition: all 0.2s ease;
      }
    }
    input {
      &:hover + label:before {
        border-color: $black;
      }
      &:checked + label:before {
        background-color: $black;
        border-color: $black;
      }
    }
  }
  .select_option {
    position: relative;
    width: 100%;
    select {
      display: inline-block;
      width: 100%;
      height: 35px;
      padding: 0px 15px;
      cursor: pointer;
      color: #7b7b7b;
      border: 1px solid $grey;
      border-radius: 0;
      background: #fff;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      transition: all 0.2s ease;
      &::-ms-expand {
        display: none;
      }
      &:hover,
      &:focus {
        color: $black;
        background: #fafafa;
        border-color: $black;
        outline: none;
      }
    }
  }
  .select_arrow {
    position: absolute;
    top: calc(50% - 4px);
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-width: 8px 5px 0 5px;
    border-style: solid;
    border-color: #7b7b7b transparent transparent transparent;
  }
  
  .select_option select {
    &:hover + .select_arrow,
    &:focus + .select_arrow {
      border-top-color: $black;
    }
  }
  .credit {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 15px;
    color: $yellow;
    a {
      color: darken($yellow, 7%);
    }
  }
  @-webkit-keyframes check {
    0% {
      height: 0;
      width: 0;
    }
    25% {
      height: 0;
      width: 7px;
    }
    50% {
      height: 20px;
      width: 7px;
    }
  }
  
  @keyframes check {
    0% {
      height: 0;
      width: 0;
    }
    25% {
      height: 0;
      width: 7px;
    }
    50% {
      height: 20px;
      width: 7px;
    }
  }
  
  @-webkit-keyframes expand {
    0% {
      -webkit-transform: scale3d(1, 0, 1);
      opacity: 0;
    }
    25% {
      -webkit-transform: scale3d(1, 1.2, 1);
    }
    50% {
      -webkit-transform: scale3d(1, 0.85, 1);
    }
    75% {
      -webkit-transform: scale3d(1, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
  
  @keyframes expand {
    0% {
      -webkit-transform: scale3d(1, 0, 1);
      transform: scale3d(1, 0, 1);
      opacity: 0;
    }
    25% {
      -webkit-transform: scale3d(1, 1.2, 1);
      transform: scale3d(1, 1.2, 1);
    }
    50% {
      -webkit-transform: scale3d(1, 0.85, 1);
      transform: scale3d(1, 0.85, 1);
    }
    75% {
      -webkit-transform: scale3d(1, 1.05, 1);
      transform: scale3d(1, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
  
  @-webkit-keyframes bounce {
    0% {
      -webkit-transform: translate3d(0, -25px, 0);
      opacity: 0;
    }
    25% {
      -webkit-transform: translate3d(0, 10px, 0);
    }
    50% {
      -webkit-transform: translate3d(0, -6px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 2px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes bounce {
    0% {
      -webkit-transform: translate3d(0, -25px, 0);
      transform: translate3d(0, -25px, 0);
      opacity: 0;
    }
    25% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    50% {
      -webkit-transform: translate3d(0, -6px, 0);
      transform: translate3d(0, -6px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 2px, 0);
      transform: translate3d(0, 2px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @media (min-width: 1454px) {
    .col_half1 {
      width:60%;
      float: left;
      margin-left: -15rem;
    }
    .visNatureMarg{
    margin-left: -14rem;
    margin-top: 0.2rem;
   }

  
  }
  @media (max-width: 1439px) {
    .left{
    margin-left: -10rem;
  }
  .visNatureMarg{
    margin-left: 0rem;
    margin-top: -0.7rem;
   }
   
  }

  @media (max-width: 1000px) {
    .left{
    margin-left: -1rem;
  }
  .visNatureMarg{
    margin-left: 0rem;
    margin-top: 0.7rem;
   }

  
  }

  @media (max-width: 750px) {
    .left{
    margin-left: 1rem;
  }
  .visNatureMarg{
    margin-left: 0rem;
    margin-top: 0.7rem;
   }

  }

  @media (max-width: 630px) {
    .col_half1{
      margin-bottom: -1.5rem;
    }
    .visNatureMarg{
      margin-top: -0.7rem;
   }
    .form_wrapper {
      .col_half {
        width: 100%;
        float: none;
      }
    }
    .bottom_row {
      .col_half {
        width: 50%;
        float: left;
      }
    }
    .form_container {
      .row {
        .col_half.last {
          border-left: none;
        }
      }
    }
    .remember_me {
      padding-bottom: 20px;
    }
    .left{
    margin-left: 0rem;
  }
    .checkbox_option {
    label {
        font-size: 1rem;
      margin-right: 2em;
      position: relative;
      &:before {
        content: "";
        display: inline-block;
        width: 1.3em;
        height: 1em;
        margin-right: 0.5em;
        vertical-align: -2px;
        border: 2px solid $grey;
        padding: 0.12em;
        background-color: transparent;
        background-clip: content-box;
        transition: all 0.2s ease;
      }
      &:after {
        border-right: 2px solid $black;
        border-top: 2px solid $black;
        content: "";
        height: 20px;
        left: 2px;
        position: absolute;
        top: 7px;
        transform: scaleX(-1) rotate(135deg);
        transform-origin: left top;
        width: 7px;
        display: none;
      }
    }
    input {
      &:hover + label:before {
        border-color: $black;
      }
      &:checked + label {
        &:before {
          border-color: $black;
        }
        &:after {
          -moz-animation: check 0.8s ease 0s running;
          -webkit-animation: check 0.8s ease 0s running;
          animation: check 0.8s ease 0s running;
          display: block;
          width: 7px;
          height: 20px;
          border-color: $black;
        }
      }
    }
  }
  }
  .flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 50px;
  height: 50px;
  background-color: #333;
  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
}
.square:hover{
  opacity: 0.8;
}
.rectangle{
  background-color: #333;
  margin: 10px 0;
  padding: 20px;
  width: 175px;
  color: #FAFAFA;
}
.img-absolute{
  position: absolute;
  left: 50%;
  top: 0;
  width: 56%;
}
.btn-download{
  display: inline-block;
  text-decoration: none;
  background-color: salmon;
  color: #FAFAFA;
  padding: 10px 62px;
  margin: 10px auto;
}
.btn-download:hover{
  opacity: 0.8;
}



    </style>
    