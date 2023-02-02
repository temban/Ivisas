<template>
    <div>
      <router-link to="/UserAllDevis" ><img class="back" src="@/assets/back.gif"/></router-link> 
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
            <img v-if="profileImage === 'null'"
              class="rounded-circle mt-5"
              width="150px"
              src="@/assets/u.png"
            />
            <img v-else
              class="rounded-circle mt-5"
              :src="profile" style="border-radius: 160px;
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
  
            <span class="font-weight-bold">{{ this.name}}</span
              ><span class="text-black-50">{{this.email}}</span
              ><span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Mettez à jour votre demande de devis</h4>
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
                    v-model="currentdate"
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
                    v-model="deliveredBy"
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
                  <label class="labels">Date d’expiration de l'autorisation:</label
                 ><input 
                   v-model="residencePermitExpirationDate"
                   type="date"
                   class="form-control"
                   value=""
                   placeholder="Date d’expiration"
                 />
               </div>

               <div class="col-md-12">
                 <label class="labels">Adresse du domicile :</label
                 ><input 
                   v-model="homeAddress"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Profession actuelle "
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
                  <label class="labels">Objet(s) du voyage :</label>
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
  
                <div class="mt-5 text-center">
                <button class="btn profile-button" type="button" @click="updateDevis()">
                  Envoyer <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
            <span class="sr-only">Loading...</span></div>
                </button>
              </div>
              
            </div>
          </div>
        </div>

        <div class="row">
        <div class="col-md-12">
            <div id="grid">
  <div class="cell">
    <label>Je suis informé que les droits de visa ne sont pas remboursés si le visa est refusé
</label>  </div>
  <div class="cell">Applicable en cas de demande de visa à entrées multiples,
Je suis informé de la nécessité de disposer d’une 
assurance maladie en voyage adéquate pour mon premier séjour et lors de  
voyages ultérieurs sur le territoire Camerounais

  </div>
  <div class="cell">
       En connaissance de cause, j'accepte ce qui suit: aux fins de l'examen de ma demande de visa, il y a lieu de recueillir
        les données requises dans ce formulaire, de me photographier et, le cas échéant, de prendre mes empreintes digitales.
         Les données à caractère personnel me concernant qui figurent dans le présent formulaire de demande de visa, ainsi que 
          mes empreintes digitales et ma photo, seront communiquées aux autorités compétentes camerounaise et traitées par elles, 
          aux fins de la décision relative à ma demande de visa.
Ces données ainsi que celles concernant la décision relative
 à ma demande de visa, ou toute décision d'annulation, d'abrogation ou de
prolongation de visa, seront saisies et conservées dans le système des visas pendant une période 
maximale de cinq ans, durant laquelle elles seront
accessibles aux autorités chargées des visas,aux autorités 
compétentes chargées de contrôler les visas aux frontières extérieures et dans les États
membres, aux autorités compétentes en matière d'immigration et d'asile dans les
 États membres aux fins de la vérification du respect des
conditions d'entrée et de séjour réguliers sur le territoire des États 
membres, aux fins de l'identification des personnes qui ne remplissent
pas ou plus ces conditions, aux fins de l'examen d'une 
demande d'asile et de la détermination de l'autorité responsable de cet examen. 
Dans
certaines conditions, ces données seront aussi accessibles aux autorités 
désignées des États membres et à Europol aux fins de la
prévention et de la détection des infractions terroristes et des autres infractions pénales graves, ainsi qu'aux fins des enquêtes en la matière.
Les autorités compétentes pour le traitement des données sont le Ministère des relations extérieurs au Cameroun (VGH8+G34, Yaoundé,
Cameroun) et le Ministère des Affaires Etrangères (VGH8+G34, Yaoundé, Cameroun).
Je suis informé(e) de mon droit d'obtenir auprès de IVISAS-AFFAIRES la notification des données me concernant qui sont enregistrées dans les
services ainsi que de l'État membre qui les a transmises, et de demander que les données me concernant soient rectifiées si elles sont erronées .
À ma demande expresse, l'autorité qui a examiné ma demande m'informera de la manière dont je peux exercer mon droit de vérifier les
données à caractère personnel me concernant et de les faire rectifier ou supprimer, y compris des voies de recours prévues à cet égard par
la législation nationale de l'État concerné. L'autorité de contrôle nationale du Cameroun pourra être saisie des demandes concernant la
protection des données
Je déclare qu'à ma connaissance, toutes les indications que j'ai fournies sont correctes et complètes. Je suis informé(e) que toute fausse
déclaration entraînera le rejet de mademande ou l'annulation du visa s'il a déjà été délivré, et peut entraîner des poursuites pénales à mon égard
en application du droit de l'État membre qui traite la demande.
Je m'engage à quitter le territoire du Cameroun avant l'expiration du visa, si celui-ci m'est délivré. J'ai été informé(e) que la possession d'un
visa n'est que l'une des conditions de l'entrée sur le territoire Camerounais. Le simple fait qu'un visa m'ait été accordé n'implique pas que j'aurai
droit attachés aux citoyens du territoire, je dois prendre des informations auprès des services compétentes pour connaitre les droits qui me sont
accordés.
  </div>
  <div class="cell1">Lieu et date :<br/>
    Lieu : <span style="font-weight:700">{{ this.homeAddress }} </span><br/> 
    Date : <span style="font-weight:700">{{ this.sendedDate }} </span>  
  </div>
  <div class="cell1">Signature (pour les mineurs, signature de l’autorité parentale/du
tuteur légal) : </div>
</div>
        </div>
    </div> 
      </div>
    </div>
  </template>
  
  <script>
  // import neutralNavBar from '../components/navbars/neutralNavBar.vue';
      import Swal from 'sweetalert2'
  export default {
    name: "footer",
    data() {
      return {
        profileImage: localStorage.getItem("profileImage"),
        profile: this.$url+'/'+localStorage.getItem("profileImage"),
          email: localStorage.getItem("email"),
          name: localStorage.getItem("Name"),
          formSpinner: false,
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
        sendedDate:"",
        destinationCountry:"",
        rejected: "",
        view: "",
      };
    },
    watch: {},
    components:{
        // neutralNavBar
    },
    created() {
      var axios = require('axios').default;

var config = {
  method: 'get',
  url: this.$url+'/id/devis?id='+ localStorage.getItem("editDevisId"),
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
  
  
      updateDevis(){
          this.formSpinner = true;
      var axios = require("axios").default;
      var data = JSON.stringify({
        id: this.id,
        familyName: this.familyName,
        birthName: this.birthName,
        lastName: this.lastName,
        birthday: this.birthday,
        birthplace: this.birthplace,
        currentNationality: this.currentNationality,
        birthNationality: this.birthNationality,
        anotherNationality: this.anotherNationality,
        sex: this.sex,
        civilStatus: this.civilStatus,
        parentalAuthority: this.parentalAuthority,
        cniNumber: this.cniNumber,
        travelDocumentType: this.travelDocumentType,
        travelDocumentNumber: this.travelDocumentNumber,
        expiredDate: this.expiredDate,
        deliveredBy: this.deliveredBy,
        homeAddress: this.homeAddress,
        applicantEmailAddress: this.applicantEmailAddress,
        phoneNumber: this.phoneNumber,
        anotherHome: this.anotherHome,
        residencePermitNumber: this.residencePermitNumber,
        residencePermitExpirationDate: this.residencePermitExpirationDate,
        profession: this.profession,
        travelReason: this.travelReason,
        currentdate: this.currentdate, 
        sendedDate: this.sendedDate,
        destinationCountry: this.destinationCountry,
        rejected: false,
        view: false,
      });
  
      var config = {
        method: "put",
        url: this.$url+"/devis",
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
            window.location.href="/UserAllDevis"
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
  