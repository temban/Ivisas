<template>
  <!-- /* Please ❤ this if you like it! 😊 */ -->

  <!-- Page wrapper/Container Section -->
  <div>
    <b-modal id="modal-xl" size="xl">
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
                  <input readonly
                  
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
                  <input readonly
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
                  <input readonly
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
                  <input readonly
                    type="text"
                    name="name"
                    placeholder="Lieu de naissance"
                    
                    v-model="birthPlace"
                  />
                </div>
              </div>
              <div class="col_half p2">
                <div class="title_container1">
                  <h6>Date de naissance:</h6>
                </div>
                <div class="input_field">
                  <input readonly
                    type="text"
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
              <input readonly
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
              <input readonly
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
              <input readonly
                type="text"
                name="name"
                placeholder="Nationalité d'origine"
                
                v-model="birthCountry"
              />
            </div>
            <div class="title_container1">
              <h6>Nationalité actuelle:</h6>
            </div>
            <div class="input_field">
              <input readonly
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
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Célibataire"
                    name="familyStatus1"
                    id="familyStatus1"
                    v-model="familyStatus"
                    
                  />
                  <label for="familyStatus1">Célibataire</label>
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Marié(e)"
                    name="familyStatus2"
                    id="familyStatus2"
                    v-model="familyStatus"
                    
                  />
                  <label for="familyStatus2">Marié(e)</label>
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Divorcé(e)"
                    name="familyStatus3"
                    id="familyStatus3"
                    v-model="familyStatus"
                    
                  />
                  <label for="familyStatus3">Divorcé(e)</label>
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Veuf(ve)"
                    name="familyStatus4"
                    id="familyStatus4"
                    v-model="familyStatus"
                    
                  />
                  <label for="familyStatus4">Veuf(ve)</label>
                </div>
              </div>
            </div>

            <div class="title_container1">
              <h6>Nom et Prénom du conjoint:</h6>
            </div>
            <div class="input_field space">
              <input readonly
                type="text"
                name="email"
                placeholder="Nom et Prénom du conjoint"
                
                v-model="partnerName"
              />
            </div>

            <div class="row clearfix">
              <div class="col_half">
                <h4>Nature du document du voyage:</h4>
              </div>
              <div class="col_half1">
                <div class="input_field checkbox_option">
                  <input readonly
                    value="Passport ordinaire"
                    onclick="javascript: return false;"
                    type="radio" 
                    name="documentType"
                    id="rd5"
                    v-model="documentType"
                    
                  />
                  <label for="rd5">Passport ordinaire</label>
                  <input readonly
                    value="Passport diplomatique"
                    onclick="javascript: return false;"
                    type="radio" 
                    name="documentType"
                    id="rd6"
                    v-model="documentType"
                  />
                  <label for="rd6">Passport diplomatique</label>
                  <input readonly
                    value="Passport de service"
                    onclick="javascript: return false;"
                    type="radio" 
                    name="documentType"
                    id="rd7"
                    v-model="documentType"
                    
                  />
                  <label for="rd7">Passport de service</label>
                </div>
              </div>
              <div class="col_half input_field checkbox_option">
                   
                   onclick="javascript: return false;"<input readonly value="Passport de service: " 
                   type="radio"  name="radiogroup1" id="rd8" />
                 <label class="laS" for="rd8">Passport de service(priser la nature) :</label>
                 <div class="input_field">
                 <input readonly type="text" name="email" placeholder="Passport de service(priser la nature) "  v-model="documentType"/>
               </div>  
               </div>


            </div>

            <div class="title_container1">
              <h6>Numéro du passeport:</h6>
            </div>
            <div class="input_field">
              <input readonly
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
                  <input readonly
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
                  <input readonly
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
                  <input readonly
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
                  <input readonly
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
                  <input readonly
                    type="text"
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
                  <input readonly
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
                      <input readonly type="text" name="email" 
                      placeholder=" Email " 
                       v-model="email"/>

                    </div>
                  </div>
                  <div class="col_half">
                    <div class="title_container1">
            <h6>Profession:</h6>
          </div>
                    <div class="input_field">
                      <input readonly
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
                  <input readonly
                    type="text"
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
                  <input readonly
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
              <input readonly
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
                  <input readonly
                    type="text"
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
                  <input readonly
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
              <input readonly
                type="text"
                name="name"
                placeholder="Motif du séjour"
                
                v-model="travelReason"
              />
            </div>
            <div class="title_container1">
              <h6>Durée du séjour au Cameroun du et au:</h6>
            </div>
            <div class="input_field">
              <input readonly
                type="text"
                name="name"
                placeholder="Motif du séjour"
                
                v-model="durationOfStay"
              />
            </div>

            <div class="title_container1">
              <h6>Nombre d'entrées et sorties:</h6>
            </div>
            <div class="input_field">
              <input readonly
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
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Transit"
                    name="visaNature"
                    id="rd10"
                    v-model="visaNature"
                  />
                  <label for="rd10">Transit</label>
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Tourisme"
                    name="visaNature"
                    id="rd20"
                    v-model="visaNature"
                  />
                  <label for="rd20">Tourisme</label>
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="Temporaire"
                    name="visaNature"
                    id="rd30"
                    v-model="visaNature"
                  />
                  <label for="rd30">Temporaire</label>
                  <input readonly
                  onclick="javascript: return false;"  
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
              <input readonly
                type="text"
                name="name"
                placeholder="Pays de destination après séjour au Cameroun"
                
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
                  <input readonly
                  onclick="javascript: return false;"  
                  type="radio" 
                    value="OUI"
                    name="radiogroup1"
                    id="rd100"
                    v-model="question"
                  />
                  <label for="rd100">OUI</label>
                  <input readonly
                  onclick="javascript: return false;"  
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
              <input readonly
                type="text"
                name="name"
                placeholder="Moyen de transport utilisé"
                
                v-model="travelMode"
              />
            </div>
          </form>
        </div>
      </div>
    </b-modal>

    <!-- Responsive Table Section -->
    <table class="responsive-table">
      <!-- Responsive Table Header Section -->
      <thead class="responsive-table__head">
        <tr class="responsive-table__row">
          <th
            class="responsive-table__head__title responsive-table__head__title--name"
          >
            Nom
          </th>
          <th
            class="responsive-table__head__title responsive-table__head__title--date"
          >
            Date d'envoi
          </th>
          <th
            class="responsive-table__head__title responsive-table__head__title--status"
          ></th>
          <th
            class="responsive-table__head__title responsive-table__head__title--country"
          ></th>
        </tr>
      </thead>
      <!-- Responsive Table Body Section -->
      <tbody class="responsive-table__body">
        <tr class="responsive-table__row" v-for="visa in visasa.slice(1, visasa.length)" :key="visa.id">
          <td v-if= "visa.firstName === undefined &&  visa.lastName  === undefined" style="dispaly:none"
            class="responsive-table__body__text responsive-table__body__text--name"
          >
         
          </td>
		  <td v-else
            class="responsive-table__body__text responsive-table__body__text--name"
          >
            {{ visa.firstName + " " + visa.lastName }}
          </td>
          <td
            class="responsive-table__body__text responsive-table__body__text--date"
          >
            {{ visa.sendedDate }}
          </td>

          <td
            v-if="visa.rejected"
            class="responsive-table__body__text responsive-table__body__text--status"
          >
            <span class="badge badge-danger font-weight-100 mx-20">Rejeté</span>
          </td>
          <td
            v-else
            class="responsive-table__body__text responsive-table__body__text--status"
          ></td>
          <td v-if= "visa.firstName === undefined &&  visa.lastName  == undefined"
            class="responsive-table__body__text responsive-table__body__text--country"
            width="210" style="dispaly:none"
          ></td>


		  <td v-else
            class="responsive-table__body__text responsive-table__body__text--country"
            width="210"
          >
            <a
              href="#"
              class="btn btn-sm btn-square btn-info text-danger-hover"
              v-b-modal.modal-xl
              variant="primary"
              @click="viewVisa(visa.id)"
              ><i class="bi bi-eye"></i></a
            >
            <a href="#" @click="editVisa(visa.id)" 
            class="btn btn-sm btn-square btn-warning text-danger-hover  mx-2">
            <i class="bi bi-pencil"></i></a>

            <button
              @click="deleteVisa(visa)"
              type="button"
              class="btn btn-sm btn-square btn-danger text-danger-hover"
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
  name: "UserAllVisa",
  data() {
    return {
      visas: [],
      visasa: [],
      firstName: "",
      durationOfStay: "",
      lastName: "",
      sex: "",
      birthday: "",
      birthPlace:"",
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
    // let all = []   for(let i=0; i<visas.orderVisas.length; i++){}
    let visas = JSON.parse(localStorage.getItem("infoUser"));
    for (let j = 0; j < visas.orderVisas.length; j++) {
      this.visas.push(visas.orderVisas[j]);
      //   console.log("cart----------------------------", this.visas.firstName);
    }
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
          this.child = this.myArray[i].orderVisas;
          for (let j = 0; j < this.child.length; j++) {
            // console.log("childdddddddd",this.child[j]);
          }

          this.child2 = this.myArray[i].orderVisas;
          for (let j = 0; j < this.child2.length; j++) {
            // console.log("child1111111111111",this.child2[j]);
          }
        }

      this.visasa  = [...this.myArray, ...this.child];

        

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
      ".responsive-table__head__title--date"
    );
    const headTitleTypes = document.querySelector(
      ".responsive-table__head__title--status"
    );
    const headTitleCountry = document.querySelector(
      ".responsive-table__head__title--country"
    );

    // Select tbody text from Dom
    const bodyTextName = document.querySelectorAll(
      ".responsive-table__body__text--name"
    );
    const bodyTextStatus = document.querySelectorAll(
      ".responsive-table__body__text--date"
    );
    const bodyTextTypes = document.querySelectorAll(
      ".responsive-table__body__text--status"
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
      bodyTextCountry[i].setAttribute("data-title", headTitleCountry.innerText);
    }
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
            (this.birthPlace = response.data.birthPlace),
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
    editVisa(id){
    localStorage.setItem("editVisaId", id)
    window.location.href="/EditVisa"
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
  margin: 1rem 0;
  padding: 4rem;
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
          content: attr(data-title) "";
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

  .p2 {
    width: 33.3%;
    float: left;
  }
  .visNature {
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
    &[type="radio" ] {
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
h4 {
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
.left {
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
    width: 60%;
    float: left;
    margin-left: -15rem;
  }
  .visNatureMarg {
    margin-left: -14rem;
    margin-top: 0.2rem;
  }
}
@media (max-width: 1439px) {
  .left {
    margin-left: -10rem;
  }
  .visNatureMarg {
    margin-left: 0rem;
    margin-top: -0.7rem;
  }
}

@media (max-width: 1000px) {
  .left {
    margin-left: -1rem;
  }
  .visNatureMarg {
    margin-left: 0rem;
    margin-top: 0.7rem;
  }
}

@media (max-width: 750px) {
  .left {
    margin-left: 1rem;
  }
  .visNatureMarg {
    margin-left: 0rem;
    margin-top: 0.7rem;
  }
}

@media (max-width: 630px) {
  .col_half1 {
    margin-bottom: -1.5rem;
  }
  .visNatureMarg {
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
  .left {
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
