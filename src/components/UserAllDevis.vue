<template>

    <!-- /* Please ❤ this if you like it! 😊 */ -->
  
  <!-- Page wrapper/Container Section -->
  <div >


    <b-modal id="modal-xl" size="xl">
       
        <div class="row">
          <div class="col-md-3 border-right">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
            <img v-if="profileImage === null"
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
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

      <!-- Responsive Table Section -->
      <table class="responsive-table">
		<!-- Responsive Table Header Section -->
		<thead class="responsive-table__head">
			<tr class="responsive-table__row">
				<th class="responsive-table__head__title responsive-table__head__title--name">Nom</th>
				<th class="responsive-table__head__title responsive-table__head__title--types">Date d'envoi</th>
                <!-- <th class="responsive-table__head__title responsive-table__head__title--update"></th>
				<th class="responsive-table__head__title responsive-table__head__title--status">travelMode</th>
                <th class="responsive-table__head__title responsive-table__head__title--country">action</th> -->

			</tr>
		</thead>
		<!-- Responsive Table Body Section -->
        <tbody class="responsive-table__body">
        <tr class="responsive-table__row" v-for="devi in devis.slice(1, devis.length)" :key="devi.id">
          <td 
            class="responsive-table__body__text responsive-table__body__text--name"
          >
            {{ devi.familyName + " " + devi.birthName + " "+ devi.lastName }}
          </td>
          <td
            class="responsive-table__body__text responsive-table__body__text--date"
          >
            {{ devi.sendedDate }}
          </td>

          <td   v-if="devi.rejected"
            class="responsive-table__body__text responsive-table__body__text--status"
          >
            <span class="badge badge-danger font-weight-100 mx-20">Rejeté</span>
          </td>
          <td
            v-else
            class="responsive-table__body__text responsive-table__body__text--status"
          ></td>

          <td v-if="devi.authorized && devi.destinationCountry ==='Cameroun'"><a
              href="/VisaFormPage"
              class="btn btn-sm btn-success"
              variant="primary"
              >Formulaire de visa</a
            ></td>
            <td
            v-else
            class="responsive-table__body__text responsive-table__body__text--status"
          ></td>

          <td 
            class="responsive-table__body__text responsive-table__body__text--country"
            width="210"
          >
          
          
            <a
              class="btn btn-sm btn-neutral"
              v-b-modal.modal-xl
              variant="primary"
              @click="viewDevis(devi.id)"
              >View</a
            >
            <a @click="editDevis(devi.id)" class="btn btn-sm btn-neutral mx-2">Edit</a>

            <button
              @click="deleteDevi(devi)"
              type="button"
              class="btn btn-sm btn-square btn-neutral text-danger-hover"
            >
              <i class="bi bi-trash"></i>
            </button>
          </td>

          <!-- <td class="responsive-table__body__text responsive-table__body__text--name">
				<img enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" class="user-icon"  src="@/assets/logo-png.png"/>
				</td> -->
          <!-- <td class="responsive-table__body__text responsive-table__body__text--status"><span class="status-indicator status-indicator--active"></span>Active</td> -->
        </tr>
      </tbody>
      </table>
  </div>
  
      </template>
      
      <script>
      import Swal from "sweetalert2";
      export default {
        name: "UserAlldevi",
        data() {
          return {
            profileImage: localStorage.getItem("profileImage"),
        profile: this.$url+'/'+localStorage.getItem("profileImage"),
            email: localStorage.getItem("email"),
          name: localStorage.getItem("Name"),
              devis:[],
              new: [],
              myArray: [],
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
        destinationCountry:"",
        rejected: false,
        view: false,
          };
        },
        watch: {},
        created(){
          // let all = []   for(let i=0; i<devis.orderdevis.length; i++){}
//           let devis = JSON.parse(localStorage.getItem("infoUser"));
//   for (let j = 0; j < devis.orderDevisDaos.length; j++) {
//     this.devis.push(devis.orderDevisDaos[j])
//     console.log("cart----------------------------",this.devis.firstName);
//   }
  
  
  
  
        },
    mounted() {




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
        // console.log(JSON.stringify(res.data));

        this.myArray.push(res.data);
        for (let i = 0; i < this.myArray.length; i++) {
          this.child = this.myArray[i].orderDevisDaos;
          for (let j = 0; j < this.child.length; j++) {
            // console.log("childdddddddd",this.child[j]);
          }

          this.child2 = this.myArray[i].orderDevisDaos;
          for (let j = 0; j < this.child2.length; j++) {
            // console.log("child1111111111111",this.child2[j]);
          }
        }

      this.devis  = [...this.myArray, ...this.child];

      
          console.log("devissssssssss",this.devis);

        

        //localStorage.setItem('refresh-token', refreshtoken);
        //localStorage.setItem('access-token', accesstoken);
      })
      .catch(function (error) {
        console.log(error);
        //  localStorage.clear()
        // window.location.href = "/"
      });
  
      /* Please ❤ this if you like it! 😊 */
  
  // Select thead titles from Dom
  const headTitleName = document.querySelector(
      ".responsive-table__head__title--name"
  );
  const headTitleStatus = document.querySelector(
      ".responsive-table__head__title--status"
  );
  const headTitleTypes = document.querySelector(
      ".responsive-table__head__title--types"
  );
  const headTitleUpdate = document.querySelector(
      ".responsive-table__head__title--update"
  );
  const headTitleCountry = document.querySelector(
      ".responsive-table__head__title--country"
  );
  
  // Select tbody text from Dom
  const bodyTextName = document.querySelectorAll(
      ".responsive-table__body__text--name"
  );
  const bodyTextStatus = document.querySelectorAll(
      ".responsive-table__body__text--status"
  );
  const bodyTextTypes = document.querySelectorAll(
      ".responsive-table__body__text--types"
  );
  const bodyTextUpdate = document.querySelectorAll(
      ".responsive-table__body__text--update"
  );
  const bodyTextCountry = document.querySelectorAll(
      ".responsive-table__body__text--country"
  );
  
  // Select all tbody table row from Dom
  const totalTableBodyRow = document.querySelectorAll(
      ".responsive-table__body .responsive-table__row"
  );
  
  // Get thead titles and append those into tbody table data items as a "data-title" attribute
  for (let i = 0; i < totalTableBodyRow.length; i++) {
      bodyTextName[i].setAttribute("data-title", headTitleName.innerText);
      bodyTextStatus[i].setAttribute("data-title", headTitleStatus.innerText);
      bodyTextTypes[i].setAttribute("data-title", headTitleTypes.innerText);
      bodyTextUpdate[i].setAttribute("data-title", headTitleUpdate.innerText);
      bodyTextCountry[i].setAttribute("data-title", headTitleCountry.innerText);
  }
  
    },
    
        methods: {
editDevis(id){
    localStorage.setItem("editDevisId", id)
    window.location.href="/EditDevis"
},


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
        },
      };
      </script>
      
      <style lang="scss" scoped>
   /* Please ❤ this if you like it! 😊 */
  
  //SCSS Variables:
  $bg-color: #f2f6f9;
  $active-color: #25be64;
  $inactive-color: #dadde4;
  $new-color: #febf02;
  $text-color: #141a4e;
  $table-bg-color: #fefefe;
  $table-head-bg-color: #e1e8f2;
  $table-border-color: #edeef2;
  $hover-bg-color: rgb(224, 191, 5);
  $hover-text-color: #ffffff;
  
  //Responsive Breakpoint SCSS Mixin:
  
  //xxs
  @mixin mobile-xxs {
      @media (max-width: 400px) {
          @content;
      }
  }
  //min-sm
  @mixin min-tablet {
      @media (min-width: 768px) {
          @content;
      }
  }
  //md
  @mixin desktop {
      @media (max-width: 991px) {
          @content;
      }
  }
  //sm to md
  @mixin tablet-to-desktop {
      @media (min-width: 768px) and (max-width: 991px) {
          @content;
      }
  }
  
  /* Googles Font Link */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  
  /* Reset Style */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  html {
      font-size: 10px;
  }
  
  body {
      
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: "Poppins", sans-serif;
      color: $text-color;
      background-color: $bg-color;
      font-size: 1.6rem;
  }
  
  /* Page Wrapper/Container Style */
  .container {
      width: 100%;
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 15px;
  }
  
  /* Responsive Table Style */
  .responsive-table {
      background-color: $table-bg-color;
      border-collapse: collapse;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.02);
      width: 100%;
      margin: 2rem 0;
      overflow: hidden;
      &__row {
          display: grid;
          border-bottom: 1px solid $table-border-color;
          padding: 0 1.5rem;
          @include min-tablet {
              grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
          }
          @include tablet-to-desktop {
              grid-template-columns: 1fr 2fr 1fr;
          }
          th,
          td {
              padding: 1rem;
          }
      }
      &__head {
          background-color: $table-head-bg-color;
          @include desktop {
              display: none;
          }
          &__title {
              display: flex;
              align-items: center;
              font-weight: 500;
              text-transform: capitalize;
          }
  
          
      }
      &__body {
          .responsive-table__row {
              transition: 0.1s linear;
              transition-property: color, background;
              &:last-child {
                  border-bottom: none;
              }
              &:hover {
                  color: $hover-text-color;
                  background-color: $hover-bg-color;
              }
          }
          &__text {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              &::before {
                  margin-right: 1rem;
                  font-weight: 600;
                  text-transform: capitalize;
              }
              @include desktop {
                  &::before {
                      content: attr(data-title) " :";
                  }
              }
              @include mobile-xxs {
                  &::before {
                      width: 100%;
                      margin-bottom: 1rem;
                      color: #000000;
                      
                  }
              }
              &--name {
                  font-weight: 600;
                  @include min-tablet {
                      &::before {
                          display: none;
                      }
                  }
                  @include tablet-to-desktop {
                      grid-column: 1 / 2;
                      flex-direction: column;
                  }
              }
              &--status,
              &--types,
              &--update {
                  @include tablet-to-desktop {
                      grid-column: 2/ 3;
                  }
              }
              &--country {
                  @include tablet-to-desktop {
                      grid-column: 3/ -1;
                  }
              }
              &--name,
              &--country {
                  @include tablet-to-desktop {
                      grid-row: 2;
                  }
              }
          }
      }
  }
  
  /* SVG Up Arrow Style */
  .up-arrow {
      height: 100%;
      max-height: 1.8rem;
      margin-left: 1rem;
  }
  
  /* SVG User Icon Style */
  .user-icon {
      width: 100%;
      max-width: 4rem;
      height: auto;
      margin-right: 1rem;
  }
  
  /* Status Indicator Style */
  .status-indicator {
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      background: #222222;
      margin-right: 0.5rem;
      &--active {
          background: $active-color;
      }
      &--inactive {
          background: $inactive-color;
      }
      &--new {
          background: $new-color;
      }
  }
  

    
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
      