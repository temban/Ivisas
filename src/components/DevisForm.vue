<template>
  <div>
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
              <h4 class="text-right">DEMANDE DE DEVIS</h4>
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
                  placeholder="Pr??nom(s)"
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
                <label class="labels">Nationalit?? actuelle:</label
                ><input
                  v-model="currentNationality"
                  type="text"
                  class="form-control"
                  placeholder="Nationalit?? actuelle"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"
                  >Nationalit?? ?? la naissance, si diff??rente :</label
                ><input
                  v-model="birthNationality"
                  type="text"
                  class="form-control"
                  placeholder="Nationalit?? ?? la naissance, si diff??rente"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Autre(s) nationalit??(s) :</label
                ><input
                  v-model="anotherNationality"
                  type="text"
                  class="form-control"
                  placeholder="Autre(s) nationalit??(s) :"
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
                    value="F??minin"
                    name="sexe"
                    id="4sex"
                    v-model="sex"
                  />
                  <label for="4sex">F??minin</label>
                </div>
              </div>

              <div class="col-md-12">
                <label class="labels">Etat Civil :</label>
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="C??libataire"
                    name="familyStatus"
                    id="1s"
                    v-model="civilStatus"
                  />
                  <label for="1s">C??libataire</label>

                  <input
                    type="radio"
                    value="Mari??(e)"
                    name="familyStatus"
                    id="2s"
                    v-model="civilStatus"
                  />
                  <label for="2s">Mari??(e)</label>

                  <input
                    type="radio"
                    value="Divorc??(e)"
                    name="familyStatus"
                    id="3s"
                    v-model="civilStatus"
                  />
                  <label for="3s">Divorc??(e)</label>

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
                    value="S??par??(e)"
                    name="familyStatus"
                    id="5s"
                    v-model="civilStatus"
                  />
                  <label for="5s">S??par??(e)</label>

                 
                </div>
              </div>
              <div class="col-md-12">
                <div class="input_field checkbox_option">

                  <input
                    type="radio"
                    value="Pr??ciser ici :  "
                    name="familyStatus"
                    id="6s"
                    v-model="civilStatus"
                  />
                  <label for="6s">Autre (?? pr??ciser)</label>

                <input
                v-model="civilStatus"
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="pr??ciser le type de document de voyage"
                />
                </div>
              </div>

              <div class="col-md-12">
                <label class="labels"
                  >Autorit?? parentale (pour les mineurs)/tuteur l??gal ( nom,
                  pr??nom, adresse (si diff??rente de celle du demandeur), num??ro
                  de t??l??phone, adresse ??lectronique et nationalit??: </label
                ><input
                  v-model="parentalAuthority"
                  type="text"
                  class="form-control"
                  placeholder="Autorit?? parentale"
                  value=""
                />
              </div>

              <div class="col-md-12">
                <label class="labels"
                  >Num??ro national d???identit??, le cas ??ch??ant :</label
                ><input
                  v-model="cniNumber"
                  type="text"
                  class="form-control"
                  placeholder="Num??ro national d???identit??, le cas ??ch??ant"
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
                    value="Passeport sp??cial"
                    name="travelDocumentType"
                    id="4pass"
                    v-model="travelDocumentType"
                  />
                  <label for="4pass">Passeport sp??cial</label>
                </div>
              </div>
              <div class="col-md-12">
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="S??par??(e)"
                    name="travelDocumentType"
                    id="5pass"
                    v-model="travelDocumentType"
                  />
                  <label for="5pass">Passeport de service</label>

                </div>
              </div>
              <div class="col-md-12">
                <div class="input_field checkbox_option">

                  <input
                    type="radio"
                    value="Pr??ciser ici :  "
                    name="travelDocumentType"
                    id="6pass"
                    v-model="travelDocumentType"
                  />
                  <label for="6pass">Autre document de voyage</label>
               <input
                v-model="travelDocumentType"
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="pr??ciser le type de document de voyage"
                />
                </div>
              </div>

              <div class="col-md-12">
                <label class="labels">Num??ro du document de voyage :</label
                ><input
                  v-model="travelDocumentNumber"
                  type="text"
                  class="form-control"
                  placeholder="Num??ro du document de voyage"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Date de d??livrance :</label
                ><input
                  v-model="currentdate"
                  type="date"
                  class="form-control"
                  placeholder="Date de d??livrance"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Date d???expiration :</label
                ><input
                  v-model="expiredDate"
                  type="date"
                  class="form-control"
                  placeholder="Date d???expiration"
                  value=""
                />
              </div>

              <div class="col-md-12">
                <label class="labels">D??livr?? par (pays) :</label
                ><input
                  v-model="deliveredBy"
                  type="text"
                  class="form-control"
                  placeholder="D??livr?? par (pays)"
                  value=""
                />
              </div>

              <div class="col-md-12">
                <label class="labels">Adresse ??lectronique du demandeur :</label
                ><input
                  v-model="applicantEmailAddress"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Adresse ??lectronique du demandeur"
                  value=""
                />
              </div>
           
            </div>
          
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
           
            <div class="col-md-12">
                <label class="labels">N?? de t??l??phone :</label
                ><input
                  v-model="phoneNumber"
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="N?? de t??l??phone"
                />
              </div>

              <div class="col-md-12">
                <label class="labels"
                  >R??sidence dans un pays autre que celui de la nationalit??
                  actuelle:</label
                >
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="Oui"
                    name="R??sidence"
                    id="oui"
                    v-model="anotherHome"
                  />
                  <label for="oui">Oui</label>
                  <input
                    type="radio"
                    value="Non"
                    name="R??sidence"
                    id="non"
                    v-model="anotherHome"
                  />
                  <label for="non">Non</label>
                </div>
              </div>

              <div class="col-md-12">
                <label class="labels"
                  >Autorisation de s??jour ou ??quivalent N?? :</label
                ><input
                  v-model="residencePermitNumber"
                  type="text"
                  class="form-control"
                  placeholder="Autorisation de s??jour ou ??quivalent N??"
                  value=""
                />
              </div>
              <div class="col-md-12">
                 <label class="labels">Date d???expiration de l'autorisation:</label
                 ><input 
                   v-model="residencePermitExpirationDate"
                   type="date"
                   class="form-control"
                   value=""
                   placeholder="Date d???expiration"
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
                    value="Transit a??roportuaire"
                    name="travelReason"
                    id="Transit"
                    v-model="travelReason"
                  />
                  <label for="Transit">Transit a??roportuaire</label>
                </div>
              </div>

              <div class="col-md-12">
                <div class="input_field checkbox_option">
                  <input
                    type="radio"
                    value="Raisons m??dicales"
                    name="travelReason"
                    id="raison"
                    v-model="travelReason"
                  />
                  <label for="raison">Raisons m??dicales</label>


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
                    value="??tudes"
                    name="travelReason"
                    id="??tudes"
                    v-model="travelReason"
                  />
                  <label for="??tudes">??tudes</label>

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
                    value="Visite ?? la famille ou ?? des amis"
                    name="travelReason"
                    id="visit"
                    v-model="travelReason"
                  />
                  <label for="visit">Visite ?? la famille ou ?? des amis</label>
                </div>
              </div>

                  
              <div class="col-md-12">
                <div class="input_field checkbox_option">

                  <input
                    type="radio"
                    value="Pr??ciser ici :  "
                    name="travelReason"
                    id="autre"
                    v-model="travelReason"
                  />
                  <label for="autre">Autre (?? pr??ciser)</label>

                <input
                v-model="travelReason"
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="pr??ciser le type de document de voyage"
                />
                </div>
              </div>

              <div class="mt-5 text-center">
              <button class="btn profile-button" type="button" @click="postDevis()">
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
    <label>Je suis inform?? que les droits de visa ne sont pas rembours??s si le visa est refus??
</label>  </div>
  <div class="cell">Applicable en cas de demande de visa ?? entr??es multiples,
Je suis inform?? de la n??cessit?? de disposer d???une 
assurance maladie en voyage ad??quate pour mon premier s??jour et lors de  
voyages ult??rieurs sur le territoire Camerounais

  </div>
  <div class="cell">
       En connaissance de cause, j'accepte ce qui suit: aux fins de l'examen de ma demande de visa, il y a lieu de recueillir
        les donn??es requises dans ce formulaire, de me photographier et, le cas ??ch??ant, de prendre mes empreintes digitales.
         Les donn??es ?? caract??re personnel me concernant qui figurent dans le pr??sent formulaire de demande de visa, ainsi que 
          mes empreintes digitales et ma photo, seront communiqu??es aux autorit??s comp??tentes camerounaise et trait??es par elles, 
          aux fins de la d??cision relative ?? ma demande de visa.
Ces donn??es ainsi que celles concernant la d??cision relative
 ?? ma demande de visa, ou toute d??cision d'annulation, d'abrogation ou de
prolongation de visa, seront saisies et conserv??es dans le syst??me des visas pendant une p??riode 
maximale de cinq ans, durant laquelle elles seront
accessibles aux autorit??s charg??es des visas,aux autorit??s 
comp??tentes charg??es de contr??ler les visas aux fronti??res ext??rieures et dans les ??tats
membres, aux autorit??s comp??tentes en mati??re d'immigration et d'asile dans les
 ??tats membres aux fins de la v??rification du respect des
conditions d'entr??e et de s??jour r??guliers sur le territoire des ??tats 
membres, aux fins de l'identification des personnes qui ne remplissent
pas ou plus ces conditions, aux fins de l'examen d'une 
demande d'asile et de la d??termination de l'autorit?? responsable de cet examen. 
Dans
certaines conditions, ces donn??es seront aussi accessibles aux autorit??s 
d??sign??es des ??tats membres et ?? Europol aux fins de la
pr??vention et de la d??tection des infractions terroristes et des autres infractions p??nales graves, ainsi qu'aux fins des enqu??tes en la mati??re.
Les autorit??s comp??tentes pour le traitement des donn??es sont le Minist??re des relations ext??rieurs au Cameroun (VGH8+G34, Yaound??,
Cameroun) et le Minist??re des Affaires Etrang??res (VGH8+G34, Yaound??, Cameroun).
Je suis inform??(e) de mon droit d'obtenir aupr??s de IVISAS-AFFAIRES la notification des donn??es me concernant qui sont enregistr??es dans les
services ainsi que de l'??tat membre qui les a transmises, et de demander que les donn??es me concernant soient rectifi??es si elles sont erron??es .
?? ma demande expresse, l'autorit?? qui a examin?? ma demande m'informera de la mani??re dont je peux exercer mon droit de v??rifier les
donn??es ?? caract??re personnel me concernant et de les faire rectifier ou supprimer, y compris des voies de recours pr??vues ?? cet ??gard par
la l??gislation nationale de l'??tat concern??. L'autorit?? de contr??le nationale du Cameroun pourra ??tre saisie des demandes concernant la
protection des donn??es
Je d??clare qu'?? ma connaissance, toutes les indications que j'ai fournies sont correctes et compl??tes. Je suis inform??(e) que toute fausse
d??claration entra??nera le rejet de mademande ou l'annulation du visa s'il a d??j?? ??t?? d??livr??, et peut entra??ner des poursuites p??nales ?? mon ??gard
en application du droit de l'??tat membre qui traite la demande.
Je m'engage ?? quitter le territoire du Cameroun avant l'expiration du visa, si celui-ci m'est d??livr??. J'ai ??t?? inform??(e) que la possession d'un
visa n'est que l'une des conditions de l'entr??e sur le territoire Camerounais. Le simple fait qu'un visa m'ait ??t?? accord?? n'implique pas que j'aurai
droit attach??s aux citoyens du territoire, je dois prendre des informations aupr??s des services comp??tentes pour connaitre les droits qui me sont
accord??s.
  </div>
  <div class="cell1"></div>
  <div class="cell1">Signature (pour les mineurs, signature de l???autorit?? parentale/du
tuteur l??gal) : </div>
</div>
        </div>
    </div> 
    </div>
  </div>
</template>

<script>
    import Swal from 'sweetalert2'
export default {
  name: "footer",
  data() {
    return {
        email: localStorage.getItem("email"),
        name: localStorage.getItem("Name"),
        profileImage: "",
        profile: "",
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
      destinationCountry: localStorage.getItem("selected_country"),
      rejected: false,
      view: false,
    };
  },
  watch: {
    
  },
  mounted() {
    this.profileImage = localStorage.getItem("profileImage");
    this.profile = this.$url+'/'+localStorage.getItem("profileImage");
   
    // console.log(localStorage.getItem("profileImage"))
  },
  methods: {

    p(){
        
        this.formSpinner = true;
        Swal.fire({
    icon: "success",
   title: 'Succ??s',
   text: 'Votre demande de visa a ??t?? envoy??e avec succ??s',
}).then(() => {
          // Go to page after successfully login
          this.formSpinner = false;
        });
    },



    postDevis() {
      Swal.fire({
        title: "Attention!",
        text: "Assurez-vous de remplir toutes les informations n??cessaires, en particulier votre adresse mail, sinon votre demande sera rejet??e!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Envoyer",
      }).then((result) => {
        if (result.isConfirmed) {

          this.formSpinner = true;
    var axios = require("axios").default;
    var data = JSON.stringify({
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
      rejected: false,
      view: false,
      destinationCountry: this.destinationCountry,
    });

    var config = {
      method: "post",
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
   title: 'Succ??s',
   text: 'Votre demande de visa a ??t?? envoy??e avec succ??s',
}).then(() => {
          // Go to page after successfully login
          // this.$router.push('/UserAllDevis')
          window.location.href="/UserAllDevis"
        });
      })
      .catch( (error) => {
        console.log(error);
        Swal.fire("??chec !", "Quelque chose s'est mal pass????!", "error").then(() => {
                      this.formSpinner = false;

          // Go to page after successfully login
        });
      });


        }
      });
    },

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
