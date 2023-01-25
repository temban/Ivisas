<template>
    <div>
        <neutralNavBar/>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
            <img v-if="UprofileImage === 'null'"
              class="rounded-circle mt-5"
              width="150px"
              src="@/assets/u.png"  
            />
            <img v-else
              class="rounded-circle mt-5"
              v-bind:src="profile" style="border-radius: 160px;
                              image-resolution: 3000000dpi;
                              background-color: #000;
                              background-position: center;
                              background-size: cover;
                              background-repeat: no-repeat;
                              max-width: 100%;
                              max-height: 100%; 
                              height: 180px;
                              width: 180px;"
            />
  
            <span class="font-weight-bold">{{ this.Uname}}</span
              ><span class="text-black-50">{{this.Uemail}}</span
              ><span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Demande de l'utilisateur</h4>
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
          <div class="col-md-4">
            <div class="p-3 py-5">
                <h4 class="text-right">Partie réservée à l’administration</h4>
                <div class="col-md-12">
                  <label class="labels">Date de la demande :</label
                  ><input
                    v-model="requestDate"
                    type="date"
                    class="form-control"
                    placeholder="Date de la demande "
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Numéro de la demande :</label
                  ><input
                    v-model="requestNumber"
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Numéro de la demande "
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Demande introduite :</label>
                  <div class="input_field checkbox_option">
                    <input
                      type="radio"
                      value="Auprès de VA"
                      name="requestMade"
                      id="VA"
                      v-model="requestMade"
                    />
                    <label for="VA">Auprès de VA</label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input_field checkbox_option">
  
                    <input
                      type="radio"
                      value="- "
                      name="requestMade"
                      id="autre1"
                      v-model="requestMade"
                    />
                    <label for="autre1">Autre (à préciser)</label>
  
                  <input
                  v-model="requestMade"
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="préciser le type de document de voyage"
                  />
                  </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Responsable du dossier :</label
                  ><input
                    v-model="personInCharge"
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Responsable du dossier"
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Documents justificatifs :</label>
                  <div class="input_field checkbox_option">
                    <input
                      type="radio"
                      value="Complet"
                      name="supportDocument"
                      id="Complet"
                      v-model="supportDocument"
                    />
                    <label for="Complet">Complet</label>

                    <input
                      type="radio"
                      value="Incomplet"
                      name="supportDocument"
                      id="Incomplet"
                      v-model="supportDocument"
                    />
                    <label for="Incomplet">Incomplet</label>

                    <input
                      type="radio"
                      value="En attente"
                      name="travelReason"
                      id="attente"
                      v-model="supportDocument"
                    />
                    <label for="attente">En attente</label>

                  </div>
                </div>
                <!-- <div class="col-md-12">
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
                </div> -->

                <div class="col-md-12">
                  <label class="labels">Décision concernant le visas :</label>
                  <div class="input_field checkbox_option">
                    <input
                      type="radio"
                      value="Délivré"
                      name="visaDecision"
                      id="Délivré"
                      v-model="visaDecision"
                    />
                    <label for="Délivré">Délivré</label>

                    <input
                      type="radio"
                      value="En cours"
                      name="visaDecision"
                      id="En-cours"
                      v-model="visaDecision"
                    />
                    <label for="En-cours">En cours</label>

                    <input
                      type="radio"
                      value="Refusé"
                      name="visaDecision"
                      id="Refusé"
                      v-model="visaDecision"
                    />
                    <label for="Refusé">Refusé</label>

                  </div>
                </div>

<div class="row">
    <div class="col-md-6">
                  <label class="labels">Valable du :</label
                  ><input
                    v-model="validFrom"
                    type="date"
                    class="form-control"
                    placeholder="Date de délivrance"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Au :</label
                  ><input
                    v-model="validTo"
                    type="date"
                    class="form-control"
                    placeholder="Date d’expiration"
                    value=""
                  />
                </div>
</div>
               



                <div class="col-md-12">
                  <label class="labels">Nombre d’entrées :</label>
                  <div class="input_field checkbox_option">
                    <input
                      type="radio"
                      value="1"
                      name="numberInputs"
                      id="1"
                      v-model="numberInputs"
                    />
                    <label for="1">1</label>

                    <input
                      type="radio"
                      value="2"
                      name="numberInputs"
                      id="2"
                      v-model="numberInputs"
                    />
                    <label for="2">2</label>

                    <input
                      type="radio"
                      value="Multiples"
                      name="numberInputs"
                      id="Multiples"
                      v-model="numberInputs"
                    />
                    <label for="Multiples">Multiples</label>

                  </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Nombres de jours :</label
                  ><input
                    v-model="phoneNumber"
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Nombres de jours"
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Nombre d’entrées :</label>
                  <div class="input_field checkbox_option">
                    <input
                      type="radio"
                      value="Espèces"
                      name="paymentMethod"
                      id="Espèces"
                      v-model="paymentMethod"
                    />
                    <label for="Espèces">Espèces</label>

                    <input
                      type="radio"
                      value="Carte bleue"
                      name="paymentMethod"
                      id="Carte"
                      v-model="paymentMethod"
                    />
                    <label for="Carte"> Carte bleue</label>

                    <input
                      type="radio"
                      value="Chèques de bancaire"
                      name="paymentMethod"
                      id="Chèques"
                      v-model="paymentMethod"
                    />
                    <label for="Chèques">Chèques de bancaire</label>

                  </div>
                </div>

                <div class="mt-5 text-center">
                <button class="btn profile-button" type="button" @click="adminAvis()">
                  Envoyer <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
            <span class="sr-only">Loading...</span></div>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import neutralNavBar from '../components/navbars/neutralNavBar.vue';
      import Swal from 'sweetalert2'
  export default {
    name: "footer",
    data() {
      return {
        UprofileImage: localStorage.getItem("pUserPhoto"),
        profile: this.$url+'/'+localStorage.getItem("pUserPhoto"),
          Uemail: localStorage.getItem("pUserEmail"),
          Uname: localStorage.getItem("pUserName"),
          formSpinner: false,
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
        sendedDate:"",
        destinationCountry:"",
        rejected: "",
        view: "",
              roleDaos:[],
              orderDevisDaos: [],
              orderVisas:[],
              suggestionDaos:[],
              orderDevis:[],
              user:[],
              authorized:"",
              email:"",
              id:"", 
              name:"",
              password:"",
              phone:"",
              profileImage:"",
              requestDate: "",
    requestNumber: "",
    requestMade: "",
    personInCharge: "",
    supportDocument: "",
    visaDecision: "",
    validFrom: "",
    validTo: "",
    numberInputs: "",
    numberDay: "",
    paymentMethod: ""

              
      };
    },
    watch: {},
    components:{
        neutralNavBar
    },
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
.then((res) => {
    this.user.push(res.data);
           localStorage.setItem("pUserPhoto", res.data.profileImage);
          localStorage.setItem("pUserName", res.data.name);
          localStorage.setItem("pUserEmail", res.data.email);
        //   console.log("alllll", res.data);
//   this.authorized =  res.data.authorized;
//   this.email = res.data.email;
//   this.id = res.data.id;
//   this.name = res.data.name;
//   this.password = res.data.password;
//   this.phone = res.data.phone
//   this.profileImage = res.data.profileImage;

//   this.orderDevisDaos.push(res.data.orderDevisDaos);
//   this.orderVisas.push(res.data.orderVisas)
//   this.suggestionDaos.push(res.data.suggestionDaos)
//   this.roleDaos.push(res.data.roleDaos)
//   console.log("yyyyyyyyy", this.roleDaos);


//         for (let i = 0; i < this.myArray.length; i++) {
//           this.child = this.myArray[i].orderDevisDaos;
//           for (let j = 0; j < this.child.length; j++) {
//             // console.log("childdddddddd",this.child[j]);
//           }

//           this.child2 = this.myArray[i].orderDevisDaos;
//           for (let j = 0; j < this.child2.length; j++) {
//             // console.log("child1111111111111",this.child2[j]);
//           }
//         }

})
.catch(function (error) {
  console.log(error);
//    localStorage.clear()
// window.location.href = "/"
});


var config1 = {
  method: 'get',
  url: this.$url+'/id/devis?id='+ localStorage.getItem("adminDeviId"),
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  }
};

axios(config1)
.then((res) => {
    this.orderDevis.push(res.data)
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
      this.sendedDate = res.data.sendedDate,
      this.destinationCountry =  res.data.destinationCountry
      this.rejected = res.data.rejected,
        this.view = res.data.view,
  console.log(res.data.data);
})
.catch(function (error) {
  console.log(error);
});



    },
    methods: {
  
      p(){
          
          this.formSpinner = true;
          Swal.fire({
      icon: "success",
     title: 'Succès',
     text: 'Votre demande de visa a été envoyée avec succès',
  }).then(() => {
            // Go to page after successfully login
            this.formSpinner = false;
          });
      },
  
  
      adminAvis(){
          this.formSpinner = true;
      var axios = require("axios").default;
      var data = JSON.stringify({
  "orderDevis": this.orderDevis,
  "user": this.user,
  "adminDevis": {
    "id": this.id,
    "requestDate": this.requestDate,
    "requestNumber": this.requestNumber,
    "requestMade":this.requestMade,
    "personInCharge": this.personInCharge,
    "supportDocument": this.supportDocument,
    "visaDecision": this.visaDecision,
    "validFrom": this.validFrom,
    "validTo":this.validTo,
    "numberInputs": this.numberInputs,
    "numberDay": this.numberDay,
    "paymentMethod": this.paymentMethod,
  }
});
      var config = {
        method: "post",
        url: this.$url+"/admin/devis",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access-token')
        },
        data: data,
      };
  
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          Swal.fire({
      icon: "success",
     title: 'Succès',
     text: 'Mise à jour réussie',
  }).then(() => {
            // Go to page after successfully login
            // this.$router.push('/UserAllDevis')
            // window.location.href="/UserAllDevis"
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
  };
  </script>
  
  <style lang="scss" scoped>
  @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css);
  
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
  