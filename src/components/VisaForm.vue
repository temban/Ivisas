<template>
    <div>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <img src="@/assets/visa.png"/>
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
                      <input type="text" name="name" placeholder="Nom" v-model="firstName"/>
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
                      <input type="text" name="name" placeholder="Sexe" v-model="sex"/>
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
                        type="date"
                        name="name"
                        placeholder="Date de naissance"
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
                    required v-model="currentCountry"
                  />
                </div>
                <div class="row clearfix">
                  <div class="col_half">
                  <h4>Situation de famille:</h4>
                  </div>
                  <div class="col_half left">
                  
                <div class="input_field checkbox_option">
                  <input type="radio" value="Célibataire" name="familyStatus" id="familyStatus1" v-model="familyStatus" />
                  <label for="familyStatus1">Célibataire</label>
                  <input type="radio" value="Marié(e)" name="familyStatus" id="familyStatus2" v-model="familyStatus" />
                  <label for="familyStatus2">Marié(e)</label>
                  <input type="radio" value="Divorcé(e)" name="familyStatus" id="familyStatus3" v-model="familyStatus" />
                  <label for="familyStatus3">Divorcé(e)</label>
                  <input type="radio" value="Veuf(ve)" name="familyStatus" id="familyStatus4" v-model="familyStatus" />
                  <label for="familyStatus4">Veuf(ve)</label>
                </div>
                  </div>

                </div>
               
                <div class="title_container1">
            <h6>Nom et Prénom du conjoint:</h6>
          </div>
                <div class="input_field space">
                  <input type="text" name="email" placeholder="Nom et Prénom du conjoint"  v-model="partnerName"/>
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
                   
                    <input value="priser la nature: " type="radio" name="radiogroup1" id="rd8" v-model="documentType"/>
                  <label class="laS" for="rd8">Passport de service(priser la nature) :</label>
                  <div class="input_field">
                  <input type="text" name="text" placeholder="Passport de service(priser la nature) "  v-model="documentType"/>
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
                     v-model="passportNumber"
                  />
                </div>     

                <div class="row clearfix">
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Date de délivrance:</h6>
          </div>
                    <div class="input_field">
                      <input type="date" name="name" placeholder="Date de délivrance" v-model="deliveredDate"
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
                      <input type="date" name="name" placeholder="Valide jusqu'au" v-model="expiredDate"
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
                      <input  type="text"
                    name="name"
                    placeholder="Votre adresse exacte en France"
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
                      <input  type="text"
                    name="name"
                    placeholder="Nom de l'employeur"
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
                     v-model="inputTown"
                  />
                </div>


                <div class="row clearfix">
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Personne de contact au Cameroun pendant le séjour:</h6>
          </div>
                    <div class="input_field">
                      <input  type="text"
                    name="name"
                    placeholder="Personne de contact au Cameroun pendant le séjour"
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
                     v-model="travelReason"
                  />
                </div>
               
                

                <div class="row clearfix">
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Durée du séjour au Cameroun du et au:</h6>
          </div>                    <div class="input_field">
                      <input type="date" name="name" placeholder="Durée du séjour au Cameroun du:" v-model="durationOfStay1"
/>
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Durée du séjour au Cameroun du et au:</h6>
          </div>                    <div class="input_field">
                      <input
                        type="date"
                        name="name"
                        placeholder="Durée du séjour au Cameroun au:"
                        required v-model="durationOfStay2"
                      />
                    </div>
                  </div>
                </div>

                <div class="title_container1">
            <h6>Nombre d'entrées et sorties:</h6>
          </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre d'entrées et sorties"
                     v-model="numberOfInputOutput"
                  />
                </div>

                <div class="row clearfix">
                  <div class="col_half">
                  <h4>Nature du visa sollicité:</h4>
                  </div>
                  <div class="col_half1 left">
                  
                <div class="input_field checkbox_option">
                  <input type="radio" value="Transit" name="visaNature" id="rd10" v-model="visaNature"/>
                  <label for="rd10">Transit</label>
                  <input type="radio" value="Tourisme" name="visaNature" id="rd20" v-model="visaNature"/>
                  <label for="rd20">Tourisme</label>
                  <input type="radio" value="Temporaire" name="visaNature" id="rd30" v-model="visaNature"/>
                  <label for="rd30">Temporaire</label>
                  <input type="radio" value="Long séjour" name="visaNature" id="rd40" v-model="visaNature"/>
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
                     v-model="destinationCountry"
                  />
                </div>
                <div class="row clearfix">
                  <div class="col_half">
                  <h4>En cas de transit: ete-vous titulaire d'une autorisation dentrée dans le pays de destination?</h4>
                  </div>
                  <div class="col_half ">
                  
                <div class="input_field checkbox_option">
                  <input type="radio" value="OUI" name="radiogroup1" id="rd100" v-model="question"/>
                  <label for="rd100">OUI</label>
                  <input type="radio" value="NON" name="radiogroup1" id="rd200" v-model="question"/>
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
                     v-model="travelMode" 
                  />
                </div>
                
<div class="button1">
  <button class="button" type="button" @click="order()" value="Envoyer" >Envoyer  
    <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
          <span class="sr-only">Loading...</span></div></button>

</div>
            
                <!-- <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">I agree with terms and conditions</label>
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label for="cb2">I want to receive the Class routine</label>
                </div> -->
              </form>
            </div>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import Swal from 'sweetalert2'
  export default {
    name: "VisaForm.vue",
    data() {
      return {
        formSpinner: false,
        firstName: "string",
  lastName: "string",
  sex: "string",
  birthday: "string",
  fatherName: "string",
  motherName: "string",
  birthCountry: "string",
  currentCountry: "string",
  familyStatus: "Célibataire",
  partnerName: "string",
  documentType: "Passport diplomatique",
  passportNumber: "string",
  deliveredDate: "string",
  expiredDate: "string",
  approvedBy: "string",
  adress: "string",
  phone: "string",
  email: "string",
  profession: "string",
  employer: "string",
  employerAdress: "string",
  inputTown: "string",
  host: "string",
  hostAddress: "string",
  travelReason: "travelReason",
  durationOfStay1: "durationOfStay",
  durationOfStay2: "durationOfStay",
  numberOfInputOutput: "string",
  visaNature: "Transit",
  destinationCountry: "string",
  question: "OUI",
  travelMode: "travelMode",
  sendedDate: "string",
  lieuDelivrance:""
      };
    },
    watch: {},
    created() {},
    methods: {
      order(){
        this.formSpinner = true;
        var axios = require('axios').default;
var data = JSON.stringify({
  "firstName": this.firstName,
  "lastName": this.lastName,
  "sex": this.sex,
  "birthday": this.birthday,
  "fatherName": this.fatherName,
  "motherName": this.motherName,
  "birthCountry": this.birthCountry,
  "currentCountry": this.currentCountry,
  "familyStatus": this.familyStatus,
  "partnerName": this.partnerName,
  "documentType": this.documentType,
  "passportNumber": this.passportNumber,
  "deliveredDate": this.deliveredDate,
  "expiredDate": this.expiredDate,
  "approvedBy": this.approvedBy,
  "adress": this.adress,
  "phone": this.phone,
  "email": this.email,
  "profession": this.profession,
  "employer": this.employer,
  "employerAdress": this.employerAdress,
  "inputTown": this.inputTown,
  "host": this.host,
  "hostAddress": this.hostAddress,
  "travelReason": this.hostAddress,
  "durationOfStay": "du:"+ " "+ this.durationOfStay1 + " " + "au:"+ " "+ this.durationOfStay1,
  "numberOfInputOutput": this.numberOfInputOutput, 
  "visaNature":this.visaNature,
  "destinationCountry": this.destinationCountry,
  "question": this.question,
  "travelMode": this.travelMode,
  "rejected": false,
  "view": false
});

var config = {
  method: 'post',
  url:  this.$url+'/order/visa',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
  },
  data : data
};

axios(config)
.then((response)=> {
  console.log(JSON.stringify(response.data));
  Swal.fire({
    icon: "success",
   title: 'Succès',
   text: 'Votre demande de visa a été envoyée avec succès',
}).then(() => {
          // Go to page after successfully login
          // this.$router.push('')

          // window.location.href="/UserAllVisas"
        });
})
.catch(function (error) {
  Swal.fire("Échec !", "Quelque chose s'est mal passé !", "error").then(() => {
          // Go to page after successfully login
          window.location.reload();
        });
  console.log(error);
});

      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  $yellow: #f5ba1a;
  $black: #000000;
  $grey: #cccccc;
  
  body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 14px;
    background: #f2f2f2;
  }
  .clearfix {
    &:after {
      content: "";
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
    }
  }

  .form_wrapper {
    background: #fff;
    max-width: 90%;
    box-sizing: border-box;
    padding: 25px;
    margin: 1% auto 0;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    border-top: 5px solid $yellow;
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.58);
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
      width: 77.2%;
      float: left;
   }
 
    .input_field {
      position: relative;
      margin-bottom: 20px;
      -webkit-animation: bounce 0.6s ease-out;
      animation: bounce 0.6s ease-out;
      
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
      &[type="date"],
      &[type="number"]{
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
    .button1{
      width: 100%;
      display: flex;
            justify-content: center;
            align-items: center;
    }
    .button{
      background: $yellow;
        height: 50px;
        line-height: 35px;
text-align: center;
        width: 40%;
        border: none;
        border-radius: 0.5rem;
        outline: none;
        cursor: pointer;
        color: #fff;
        font-size: 1.4em;
        margin-bottom: 10px;
        margin-top: 10px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: darken($yellow, 10%);
        }
        &:focus {
          background: darken($yellow, 50%);
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
    font-weight: 500;
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
  .left{
    margin-left: -30rem;
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
      width:50%;
      float: left;
      margin-left: -25rem;
    }
    .visNatureMarg{
    margin-left: -23rem;
   }
  }
  @media (max-width: 1439px) {
    .left{
    margin-left: -15rem;
  }
  }

  @media (max-width: 950px) {
    .left{
    margin-left: -4rem;
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
  </style>
  