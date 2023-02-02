<template>

  <div >

    
    <div class="form_wrapper">

<div class="title_container">
<img src="@/assets/visa.png"  style="height:16rem;max-width: 100rem; width: 100%;"/>
<h2>FICHE DE DEMANDE DE VISA</h2>
</div>


<div >
<form>
<div class="row clearfix">
<div class="col_half">
<div class="title_container1">
<h4>Nom:</h4>
</div>
<div >
  <input type="text" name="name" class="form-control" placeholder="Nom" v-model="firstName" readonly/>
</div>
</div>
<div class="col_half">
<div class="title_container1">
<h4>Prénom:</h4>
</div>
<div >
  <input
    type="text"
    name="name"
    class="form-control"
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
<h4>Sexe:</h4>
</div>
<div >
  <input class="form-control" type="text" name="name" placeholder="Sexe" v-model="sex" readonly/>
</div>
</div>
<div class="col_half p2">
<div class="title_container1">
<h4>Lieu de naissance:</h4>
</div>
<div >
  <input
    type="text"
    name="name"
    class="form-control"
    placeholder="Lieu de naissance"
    readonly v-model="birthPlace" 
  />
</div>
</div>
<div class="col_half p2">
<div class="title_container1">
<h4>Date de naissance:</h4>
</div>
<div >
  <input
    type="text"
    name="name"
    placeholder="Date de naissance"
    readonly 
    v-model="birthday"
    class="form-control"
  />
</div>
</div>





</div>
<div class="title_container1 mt-3">
<h4>Nom et prénom du père:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Nom et prénom du père"
readonly v-model="fatherName"
/>
</div>
<div class="title_container1 mt-3">
<h4>Nom et prénom de la mère:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Nom et prénom du mère"
readonly v-model="motherName"
/>
</div>
<div class="title_container1 mt-3">
<h4>Nationalité d'origine:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Nationalité d'origine"
readonly v-model="birthCountry"
/>
</div>
<div class="title_container1 mt-3">
<h4>Nationalité actuelle:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Nationalité actuelle"
readonly
 v-model="currentCountry"
/>
</div>
<div class="row clearfix">
<div class="col_halfN">
<h4>Situation de famille:</h4>
</div>
<div class="col_half1 left">

<div class="checkbox_option">
<input type="radio" value="Célibataire" name="familyStatus1" id="familyStatus1" v-model="familyStatus" readonly/>
<label for="familyStatus1">Célibataire</label>
<input type="radio" value="Marié(e)" name="familyStatus2" id="familyStatus2" v-model="familyStatus" readonly/>
<label for="familyStatus2">Marié(e)</label>
<input type="radio" value="Divorcé(e)" name="familyStatus3" id="familyStatus3" v-model="familyStatus" readonly/>
<label for="familyStatus3">Divorcé(e)</label>
<input type="radio" value="Veuf(ve)" name="familyStatus4" id="familyStatus4" v-model="familyStatus" readonly/>
<label for="familyStatus4">Veuf(ve)</label>
</div>
</div>

</div>

<div class="title_container1">
<h4>Nom et Prénom du conjoint:</h4>
</div>
<div class=" space">
<input class="form-control" type="text" name="email" placeholder="Nom et Prénom du conjoint" readonly v-model="partnerName"/>
</div>



<div class="row clearfix mt-6">
<div class="col_halfM">
<h4>Nature du document du voyage:</h4>
</div>
<div class="col_half2">

<div class="checkbox_option">
<input value="Passport ordinaire" type="radio" name="documentType1" id="rd51" v-model="documentType"/>
<label for="rd51">Passport ordinaire</label>
<input value="Passport diplomatique" type="radio" name="documentType1" id="rd61"  v-model="documentType"/>
<label for="rd61">Passport diplomatique</label>
<input value="Passport de service" type="radio" name="documentType1" id="rd71"  v-model="documentType"/>
<label for="rd71">Passport de service</label>

</div>
</div>
<div class="col_half checkbox_option">

<input value="Passport de service: " type="radio" name="radiogroup1" id="rd8" />
<label class="laS" for="rd8">Passport de service:</label>
<div >
<input class="form-control" type="text" name="email" placeholder="Passport de service(priser la nature) "  v-model="documentType" readonly/>
</div>  
</div>

</div>

<div class="title_container1" style="margin-top:2.5rem">
<h4>Numéro du passeport:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Numéro du passeport"
readonly v-model="passportNumber"
/>
</div>     

<div class="row clearfix">
<div class="col_half">
<div class="title_container1">
<h4>Date de délivrance:</h4>
</div>
<div >
  <input type="text" name="name" class="form-control" readonly placeholder="Date de délivrance" v-model="deliveredDate"
/>
</div>
</div>
<div class="col_half">
<div class="title_container1">
<h4>Lieu de délivrance:</h4>
</div>
<div >
  <input
    type="text"
    name="name"
    class="form-control"
    placeholder="Lieu de délivrance"
    readonly v-model="lieuDelivrance"
  />
</div>
</div>
</div>
<div class="row clearfix">
<div class="col_half">
<div >
    <div class="title_container1">
<h4>Valide jusqu'au:</h4>
</div>
  <input type="text" name="name" class="form-control" readonly placeholder="Valide jusqu'au" v-model="expiredDate"
/>
</div>
</div>
<div class="col_half">
<div class="title_container1">
<h4>Autorité Ayant délivré ce document:</h4>
</div>
<div >
  <input
    type="text"
    name="name"
    class="form-control"
    placeholder="Autorité Ayant délivré ce document"
    readonly v-model="approvedBy"
  />
</div>
</div>
</div>


<div class="row clearfix">
<div class="col_half">
<div class="title_container1">
<h4>Votre adresse exacte en France:</h4>
</div>
<div >
  <input  type="text"
name="name"
class="form-control"
placeholder="Votre adresse exacte en France"
readonly v-model="adress"
/>
</div>
</div>
<div class="col_half">
<div class="title_container1">
<h4>Votre numéro de téléphone:</h4>
</div>
<div >
  <input
  type="text"
name="name"
class="form-control"
placeholder="Votre numéro de téléphone"
readonly v-model="phone"
  />
</div>
</div>
</div>




<div class="row clearfix">
<div class="col_half">
<div class="title_container1">
<h4>Email:</h4>
</div>
<div >
  <input type="text" name="email" 
  placeholder=" Email " 
  class="form-control"
  readonly
   v-model="email"/>

</div>
</div>
<div class="col_half">
<div class="title_container1">
<h4>Profession:</h4>
</div>
<div >
  <input
type="text"
name="name"
class="form-control"
placeholder="Profession"
 v-model="profession"
 readonly
/>
</div>
</div>
</div>

<div class="row clearfix">
<div class="col_half">
<div class="title_container1">
<h4>Nom de l'employeur:</h4>
</div>
<div >
  <input  type="text"
name="name"
class="form-control"
placeholder="Nom de l'employeur"
readonly v-model="employer" 
/>
</div>
</div>
<div class="col_half">
<div class="title_container1">
<h4>Adresse de l'employeur:</h4>
</div>
<div >
  <input
  type="text"
  name="name"
  class="form-control"
  placeholder="Adresse de l'employeur"
  readonly v-model="employerAdress" 
  />
</div>
</div>
</div>


<div class="title_container1">
<h4>Personne de contact au Cameroun pendant le séjour:</h4>
</div>
<div >
  <input  type="text"
name="name"
class="form-control"
placeholder="Personne de contact au Cameroun pendant le séjour"
readonly v-model="host"
/>
</div>




<div class="row clearfix">
<div class="col_half">

<div class="title_container1">
<h4>Ville d'entrées au Cameroun:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Ville d'entrées au Cameroun"
readonly v-model="inputTown"
/>
</div>

</div>
<div class="col_half">
<div class="title_container1">
<h4>Adresse au Cameroun pendant le séjour:</h4>
</div>
<div >
  <input
  type="text"
name="name"
class="form-control"
placeholder="Adresse au Cameroun pendant le séjour"
readonly v-model="hostAddress"
  />
</div>
</div>
</div>




<div class="title_container1">
<h4>Motif du séjour:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Motif du séjour"
readonly v-model="travelReason"
/>
</div>
<div class="title_container1 mt-3">
<h4>Durée du séjour au Cameroun du et au:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Motif du séjour"
readonly v-model="durationOfStay"
/>
</div>




<div class="row clearfix">
<div class="col_halfV">
<h4>Nature du visa sollicité:</h4>
</div>
<div class="col_halfL left">

<div class=" checkbox_option">
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


<div class="row clearfix">
<div class="col_halfS">

<div class="title_container1">
<h4>Nombre d'entrées et sorties:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Nombre d'entrées et sorties"
readonly v-model="numberOfInputOutput"
/>
</div>

</div>
<div class="col_halfP">

<div class="title_container1">
<h4>Pays de destination après séjour au Cameroun:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Pays de destination après séjour au Cameroun"
readonly v-model="destinationCountry"
/>
</div>


</div>
</div>




<div class="row clearfix">
<div class="col_halfE mt-4">
<h4>En cas de transit: ete-vous titulaire d'une autorisation dentrée dans le pays de destination?</h4>
</div>
<div class="col_halfO ">

<div class=" checkbox_option">
<input type="radio" value="OUI" name="radiogroup1" id="rd100" v-model="question"/>
<label for="rd100">OUI</label>
<input type="radio" value="NON" name="radiogroup1" id="rd200" v-model="question"/>
<label for="rd200">NON</label>
</div>
</div>

</div>
<div class="title_container1">
<h4>Moyen de transport utilisé:</h4>
</div>
<div >
<input
type="text"
name="name"
class="form-control"
placeholder="Moyen de transport utilisé"
readonly v-model="travelMode" 
/>
</div>




<!-- <div class=" checkbox_option">
<input type="checkbox" id="cb1" />
<label for="cb1">I agree with terms and conditions</label>
</div>
<div class=" checkbox_option">
<input type="checkbox" id="cb2" />
<label for="cb2">I want to receive the Class routine</label>
</div> -->
</form>
</div>




<!-- <div class="flex">
<a @click="exportToPDF" class="btn btn-download">Generate PDF</a>
</div> -->

</div>


</div>
</template>

<script>

export default {
components: {
},
data () {
  return {
 d:"pdf/hors-EU.pdf",
 Visas:[],
 pageTotal: 1,
    working: false,
          loading:false,
      firstName: "",
      durationOfStay:"",
      birthPlace:"string",
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
sendedDate: "",
  }
},
computed: {
 
},

created(){

          var axios = require('axios').default;

var config = {
method: 'get',
url: this.$url + '/order/visa?id=' + localStorage.getItem("pdfVisaId"),
headers: { 
  'Content-Type': 'application/json', 
  'Authorization': 'Bearer ' + localStorage.getItem('access-token')
}
};

axios(config)
.then((response) => {
console.log(JSON.stringify(response.data));

 this.firstName = response.data.firstName,
this.lastName =  response.data.lastName,
this.sex = response.data.sex,
this.birthday =  response.data.birthday ,
this.birthPlace =  response.data.birthPlace ,
this.fatherName =  response.data.fatherName,
this.motherName =  response.data.motherName,
this.birthCountry =  response.data.birthCountry,
this.currentCountry =  response.data.currentCountry,
this.familyStatus=  response.data.familyStatus,
this.partnerName=  response.data.partnerName,
this.documentType=  response.data.documentType,
this.passportNumber=  response.data.passportNumber,
this.deliveredDate=  response.data.deliveredDate,
this.expiredDate=  response.data.expiredDate,
this.approvedBy=  response.data.approvedBy,
this.adress=  response.data.adress,
this.phone=  response.data.phone,
this.email=  response.data.email,
this.profession=  response.data.profession,
this.employer=  response.data.employer,
this.employerAdress=  response.data.employerAdress,
 this.inputTown=  response.data.inputTown,
this.host=  response.data.host,
this.travelReason = response.data.travelReason,
this.hostAddress=  response.data.hostAddress,
this.hostAddress=  response.data.hostAddress,
this.durationOfStay=  response.data.durationOfStay,
this.numberOfInputOutput=  response.data.numberOfInputOutput,
this.visaNature=  response.data.visaNature,
this.destinationCountry=  response.data.destinationCountry,
this.question=  response.data.question,
this.travelMode=  response.data.travelMode,
this.sendedDate =  response.data.sendedDate
})
.catch(function (error) {
console.log(error);
});

      
},
methods: {

}

}
</script>
<style lang="scss" scoped>
/* Webpixels CSS */
/* Utility and component-centric Design System based on Bootstrap for fast, responsive UI development */
/* URL: https://github.com/webpixels/css */

@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);

/* Bootstrap Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");

@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css);

$yellow: #f5ba1a;
$black: #000000;
$grey: #cccccc;

body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 1.1rem;
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
  h4 {
    font-size: 1.1em;
    font-weight: normal;
    line-height: 1.5em;
    margin: 0;
  }
  label {
    font-size: 1.1rem;
    color: #000000;
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

  .col_half1 {
    width:77%;
    float: right;
   
  }
  .col_halfN {
    width:23%;
    float: left;
   
  }



  
  .col_half2 {
    width:50%;
    float: left;
   
  }
  .col_halfM {
    width:100%;
    float: left;
   
  }

  .col_halfS {
    width:40%;
    float: left;
   
  }
  .col_halfL {
    width:80%;
    float: left;
   
  }

  .col_halfV {
    width:20%;
    float: left;
   
  }
  .col_halfP {
    width:60%;
    float: left;
   
  }

  .col_halfO {
    width:40%;
    float: right;
   
  }
  .col_halfE {
    width:60%;
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
 h4{
  font-weight: 600;
 }

  .input_field {
    position: relative;
    margin-bottom: 10px;
    color: #000000;
    -webkit-animation: bounce 0.6s ease-out;
    animation: bounce 0.6s ease-out;
    > span {
      position: absolute;
      left: 0;
      top: 0;
      color: rgb(0, 0, 0);
      height: 100%;
      border-right: 1px solid $grey;
      text-align: center;
      width: 30px;
      > i {
        padding-top: 10px;
      }
    }
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
      padding: 4px 10px 0px 35px;
      height: 35px;
      text-color: #000000;
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
      color: #000000;
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

.checkbox_option {
  label {
      font-size: 1.1rem;
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
      border: 2px solid black;
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
        display: block;
        width: 8px;
        height: 17px;
        border-color: $black;
      }
    }
  }
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
      font-size: 1.1rem;
    margin-right: 2em;
    position: relative;
    color: #000;
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


/* NEW STYLE EDIT */
#block1{
font-family: "Times New Roman", serif;
}


h1 {
  background: linear-gradient(to bottom, #634f2c 24%, #686254 26%, #605c52 27%,#c6b173 40%,#3b2b0c 78%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
font-family: 'Playfair Display', serif;
  position: relative;
text-transform: uppercase;	
font-size: 2vw;
margin: 0;
font-weight: 700;
    text-shadow:	5px 5px 10px rgba(0, 0, 0, 0.4);

}

h1:after {
  background: none;
  content: attr(data-heading);
  left: 0;
top: 0;
  z-index: -1;
  position: absolute;
  text-shadow: 
  -1px 0 1px #c6bb9f, 
  0 1px 1px #c6bb9f, 
  5px 5px 10px rgba(0, 0, 0, 0.4),
  -5px -5px 10px rgba(0, 0, 0, 0.4);
}

.back{
  width: 4.5rem;
  cursor: pointer;
  position: relative;
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>