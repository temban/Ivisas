<template>
    <div>
     
<div>
    
    <div class="container rounded bg-white mt-5 mb-5">


    <div class="row">
         
         
         <div class="col-md-8 border-right">
           <div class="p-3 py-5">
            
             <div class="row">
               <div class="col-md-6">
                   <div class="d-flex flex-column align-items-center text-center p-3 py-1">
           <img 
             src="@/assets/slide4.png" style="border-radius: 10px;
             border: 1rem;
                             image-resolution: 3000000dpi;
                             background-color: #000;
                             background-position: center;
                             background-size: cover;
                             background-repeat: no-repeat;
                             max-width: 100%; 
                             max-height: 100%; 
                             height: 90px; 
                             width: 90px;"
           />
 
          
           </div>

               </div>
               <div class="col-md-6">
                   <div  class="d-flex flex-column align-items-center text-right p-3 py-1"
           >
           <img v-if="pUserPhoto === null"
             class="p-1"
            
             src="@/assets/u.png" 
             style="border-radius: 10px;
                             image-resolution: 3000000dpi;
                             background-color: #000;
                             background-position: center;
                             background-size: cover;
                             background-repeat: no-repeat;
                             max-width: 100%;
                             max-height: 100%; 
                             height: 90px; 
                             width: 90px;"
           />
           <img v-else  class="align-items-right p-1 float-left"
             :src="profile" style="border-radius: 10px;
                             image-resolution: 3000000dpi;
                             background-color: #000;
                             background-position: center;
                             background-size: cover;
                             background-repeat: no-repeat;
                             max-width: 100%;
                             max-height: 100%; 
                             height: 90px; 
                             width: 90px;"
           />
 
          
           </div>

               </div>
             </div>

         

               <h5 class="text-center mt-2 mb-1">Demande de devis</h5>
           
             <div class="row">
               <div class="col-md-6">
                 <label class="labels">Nom [nom de famille] :</label
                 ><input readonly
                   v-model="familyName"
                   type="text"
                   class="form-control"
                   placeholder="Nom [nom de famille]"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Nom(s) de naissance :</label
                 ><input readonly
                   v-model="birthName"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Nom(s) de naissance "
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Nom(s) de naissance :</label
                 ><input readonly
                   v-model="lastName"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Prénom(s)"
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Date de naissance :</label
                 ><input readonly
                   v-model="birthday"
                   type="date"
                   class="form-control"
                   placeholder="Date de naissance "
                   value=""
                 />
               </div>
             </div>

             <div class="row">
              
               <div class="col-md-12">
                 <label class="labels">Lieu de naissance :</label
                 ><input readonly
                   v-model="birthplace"
                   type="text"
                   class="form-control"
                   placeholder="Lieu de naissance"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Nationalité actuelle:</label
                 ><input readonly
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
                 ><input readonly
                   v-model="birthNationality"
                   type="text"
                   class="form-control"
                   placeholder="Nationalité à la naissance, si différente"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Autre(s) nationalité(s) :</label
                 ><input readonly
                   v-model="civilStatu"
                   type="text"
                   class="form-control"
                   placeholder="Autre(s) nationalité(s) :"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Sexe</label>
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Masculin"
                     name="sex1e"
                     id="3sex1"
                     v-model="sex1"
                   />
                   <label for="3sex1">Masculin</label>
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Féminin"
                     name="sex1e"
                     id="4sex1"
                     v-model="sex1"
                   />
                   <label for="4sex1">Féminin</label>
                 </div>
               </div>
 
               <div class="col-md-10" style="position:relative;margin-top:-1rem">
                 <label class="labels">Etat Civil :</label>
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Célibataire"
                     name="familyStatus1"
                     id="1s1"
                     v-model="civilStatu"
                   />
                   <label for="1s1">Célibataire</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Marié(e)"
                     name="familyStatus1"
                     id="2s1"
                     v-model="civilStatu"
                   />
                   <label for="2s1">Marié(e)</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Divorcé(e)"
                     name="familyStatus1"
                     id="3s1"
                     v-model="civilStatu"
                   />
                   <label for="3s1">Divorcé(e)</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Veuf(ve)"
                     name="familyStatus1"
                     id="4s1"
                     v-model="civilStatu"
                   />
                   <label for="4s1">Veuf(ve)</label>
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Séparé(e)"
                     name="familyStatus1"
                     id="5s1"
                     v-model="civilStatu"
                   />
                   <label for="5s1">Séparé(e)</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Autre"
                     name="familyStatus"
                     id="6s"
                     v-model="civilStatu"
                   />
                   <label for="6s">Autre</label>
                 </div>
               </div>
              
               <div class="col-md-12"  style="position:relative;margin-top:-1rem">
                 <label class="labels"
                   >Autorité parentale (pour les mineurs)/tuteur légal ( nom,
                   prénom, adresse (si différente de celle du demandeur), numéro
                   de téléphone, adresse électronique et nationalité: </label
                 ><input readonly
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
                 ><input readonly
                   v-model="cniNumber"
                   type="text"
                   class="form-control"
                   placeholder="Numéro national d’identité, le cas échéant"
                   value=""
                 />
               </div>

               <div class="col-md-12">
                 <label class="labels">Adresse électronique du demandeur :</label
                 ><input readonly
                   v-model="applicantEmailAddress"
                   type="text"
                   class="form-control"
                   placeholder="Adresse électronique du demandeur"
                   value=""
                 />
               </div>

               <div class="row">
        <div class="col-md-12">

        </div>
    </div>
 
               <div class="col-md-12 mt-5">
                 <label class="labels">Type de document de voyage :</label>
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Passeport ordinaire"
                     name="travelDocumentType1"
                     id="1pass"
                     v-model="travelDocumentType1"
                   />
                   <label for="1pass">Passeport ordinaire</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Passeport officie"
                     name="travelDocumentType1"
                     id="2pass"
                     v-model="travelDocumentType1"
                   />
                   <label for="2pass">Passeport officie</label>
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Passeport diplomatique"
                     name="travelDocumentType1"
                     id="3pass"
                     v-model="travelDocumentType1"
                   />
                   <label for="3pass">Passeport diplomatique</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Passeport spécial"
                     name="travelDocumentType1"
                     id="4pass"
                     v-model="travelDocumentType1"
                   />
                   <label for="4pass">Passeport spécial</label>
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Séparé(e)"
                     name="travelDocumentType1"
                     id="5pass"
                     v-model="travelDocumentType1"
                   />
                   <label for="5pass">Passeport de service</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Autre document de voyage"
                     name="travelDocumentType1"
                     id="6pass"
                     v-model="travelDocumentType1"
                   />
                   <label for="6pass">Autre document de voyage</label>
                 </div>
               </div>
 
               <div class="col-md-12" style="position:relative;margin-top:-1rem">
                 <label class="labels">Numéro du document de voyage :</label
                 ><input readonly
                   v-model="travelDocumentNumber"
                   type="text"
                   class="form-control"
                   placeholder="Numéro du document de voyage"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Date de délivrance :</label
                 ><input readonly
                   v-model="deliveredBy"
                   type="date"
                   class="form-control"
                   placeholder="Date de délivrance"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Date d’expiration :</label
                 ><input readonly
                   v-model="expiredDate"
                   type="date"
                   class="form-control"
                   placeholder="Date d’expiration"
                   value=""
                 />
               </div>
 
               <div class="col-md-12">
                 <label class="labels">Délivré par (pays) :</label
                 ><input readonly
                   v-model="homeAddress"
                   type="text"
                   class="form-control"
                   placeholder="Délivré par (pays)"
                   value=""
                 />
               </div>


               <div class="col-md-12">
                 <label class="labels">N° de téléphone :</label
                 ><input readonly
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
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Oui"
                     name="Résidence1"
                     id="oui1"
                     v-model="anotherH"
                   />
                   <label for="oui1">Oui</label>
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Non"
                     name="Résidence1"
                     id="non1"
                     v-model="anotherH"
                   />
                   <label for="non">Non</label>
                 </div>
               </div>
 
               <div class="col-md-12" style="position:relative;margin-top:-1rem">
                 <label class="labels"
                   >Autorisation de séjour ou équivalent N° :</label
                 ><input readonly
                   v-model="residencePermitNumber"
                   type="text"
                   class="form-control"
                   placeholder="Autorisation de séjour ou équivalent N°"
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Date d’expiration:</label
                 ><input readonly
                   v-model="residencePermitExpirationDate"
                   type="date"
                   class="form-control"
                   value=""
                   placeholder="Date d’expiration"
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Profession actuelle :</label
                 ><input readonly
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
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Tourisme"
                     name="travelReason1"
                     id="Tourisme1"
                     v-model="travelReason"
                   />
                   <label for="Tourisme1">Tourisme</label>
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Visite officielle "
                     name="travelReason1"
                     id="o1"
                     v-model="travelReason"
                   />
                   <label for="o1">Visite officielle </label>
 
 
                  
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Sports"
                     name="travelReason1"
                     id="Sports1"
                     v-model="travelReason"
                   />
                   <label for="Sports1">Sports</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Transit aéroportuaire"
                     name="travelReason1"
                     id="Transit1"
                     v-model="travelReason"
                   />
                   <label for="Transit1">Transit aéroportuaire</label>
                 </div>
               </div>
 
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Raisons médicales"
                     name="travelReason1"
                     id="raison1"
                     v-model="travelReason"
                   />
                   <label for="raison1">Raisons médicales</label>
 
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Affaires"
                     name="travelReason1"
                     id="Affaires1"
                     v-model="travelReason"
                   />
                   <label for="Affaires1">Affaires </label>
 
                  
                 </div>
               </div>
 
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
                     <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Études"
                     name="travelReason1"
                     id="Études1"
                     v-model="travelReason"
                   />
                   <label for="Études1">Études</label>
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Culture"
                     name="travelReason1"
                     id="Culture1"
                     v-model="travelReason"
                   />
                   <label for="Culture1">Culture</label>
 
                  
                 </div>
               </div>
 
               
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Visite à la famille ou à des amis"
                     name="travelReason1"
                     id="visit1"
                     v-model="travelReason"
                   />
                   <label for="visit1">Visite à la famille ou à des amis</label>
                 </div>
               </div>
 
                   
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="- "
                     name="travelReason1"
                     id="autre1"
                     v-model="travelReason"
                   />
                   <label for="autre1">Autre (à préciser)</label>
 
                 <input readonly
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
           <div class=" py-5">
               <h5 class="text-left">Partie réservée à l’administration</h5>
  
               <div style="margin:5rem 0 0 0.5rem" v-if="this.checkAvis.length === 0">
               <h1>Pas d'avis!</h1>
             </div>
             <div v-else>
               <div class="col-md-12">
                 <label class="labels">Date de la demande :</label
                 ><input readonly
                   v-model="requestDate"
                   type="date"
                   class="form-control"
                   placeholder="Date de la demande "
                   value=""
                 />
               </div>
               <div class="col-md-12">
                 <label class="labels">Numéro de la demande :</label
                 ><input readonly
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
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Auprès de VA"
                     name="requestMade1"
                     id="VA"
                     v-model="requestMade1"
                   />
                   <label for="VA">Auprès de VA</label>
                 </div>
               </div>
               <div class="col-md-12">
                 <div class="input_field checkbox_option">
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="- "
                     name="requestMade1"
                     id="autre1"
                     v-model="requestMade1"
                   />
                   <label for="autre1">Autre (à préciser)</label>
 
                 <input readonly
                 v-model="requestMade1"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="préciser le type de document de voyage"
                 />
                 </div>
               </div>

               <div class="col-md-12">
                 <label class="labels">Responsable du dossier :</label
                 ><input readonly
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
                    <input readonly
                      type="radio"  onclick="javascript: return false;"
                      value="Complet"
                      name="supportDocument111"
                      id="Complet11"
                      v-model="supportDocument"
                    />
                    <label for="Complet1">Complet</label>

                    <input readonly
                      type="radio"  onclick="javascript: return false;"
                      value="Incomplet"
                      name="supportDocument111"
                      id="Incomplet11"
                      v-model="supportDocument"
                    />
                    <label for="Incomplet11">Incomplet</label>

                    <input readonly
                      type="radio"  onclick="javascript: return false;"
                      value="En attente"
                      name="attente11"
                      id="attente11"
                      v-model="supportDocument"
                    />
                    <label for="attente11">En attente</label>

                 </div>
               </div>
               <!-- <div class="col-md-12">
                 <div class="input_field checkbox_option">
 
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="- "
                     name="travelReason"
                     id="autre"
                     v-model="travelReason"
                   />
                   <label for="autre">Autre (à préciser)</label>
 
                 <input readonly
                 v-model="travelReason"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="préciser le type de document de voyage"
                 />
                 </div>
               </div> -->

               <div class="col-md-12">
                 <label class="labels">Décision concernant le visas:</label>
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Délivré"
                     name="visaDecision1"
                     id="Délivré"
                     v-model="visaDecision1"
                   />
                   <label for="Délivré">Délivré</label>

                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="En cours"
                     name="visaDecision1"
                     id="En-cours"
                     v-model="visaDecision1"
                   />
                   <label for="En-cours">En cours</label>

                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Refusé"
                     name="visaDecision1"
                     id="Refusé"
                     v-model="visaDecision1"
                   />
                   <label for="Refusé">Refusé</label>

                 </div>
               </div>

               <div class="row">
   <div class="col-md-6">
                 <label class="labels">Valable du :</label
                 ><input readonly
                   v-model="validFrom"
                   type="date"
                   class="form-control"
                   placeholder="Date de délivrance"
                   value=""
                 />
               </div>
               <div class="col-md-6">
                 <label class="labels">Au :</label
                 ><input readonly
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
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="1"
                     name="numberInputs1"
                     id="1"
                     v-model="numberInputs1"
                   />
                   <label for="1">1</label>

                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="2"
                     name="numberInputs1"
                     id="2"
                     v-model="numberInputs1"
                   />
                   <label for="2">2</label>

                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Multiples"
                     name="numberInputs1"
                     id="Multiples"
                     v-model="numberInputs1"
                   />
                   <label for="Multiples">Multiples</label>

                 </div>
               </div>

               <div class="col-md-12">
                 <label class="labels">Nombres de jours :</label
                 ><input readonly
                   v-model="numberDay"
                   type="text"
                   class="form-control"
                   value=""
                   placeholder="Nombres de jours"
                 />
               </div>

               <div class="col-md-12">
                 <label class="labels">Nombre d’entrées :</label>
                 <div class="input_field checkbox_option">
                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Espèces"
                     name="paymentMethod1"
                     id="Espèces"
                     v-model="paymentMethod1"
                   />
                   <label for="Espèces">Espèces</label>

                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Carte bleue"
                     name="paymentMethod1"
                     id="Carte"
                     v-model="paymentMethod1"
                   />
                   <label for="Carte"> Carte bleue</label>

                   <input readonly
                     type="radio"  onclick="javascript: return false;"
                     value="Chèques de bancaire"
                     name="paymentMethod1"
                     id="Chèques"
                     v-model="paymentMethod1"
                   />
                   <label for="Chèques">Chèques de bancaire</label>

                 </div>
               </div>



             </div>
               
       
           </div>
         </div>
       </div>

       <div class="row">
        <div class="col-md-12">
            <div id="grid" style="margin-top: 4rem;">
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
  <div class="cell1">Lieu et date : </div>
  <div class="cell1">Signature (pour les mineurs, signature de l’autorité parentale/du
tuteur légal) : </div>
</div>
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
        pUserPhoto: "",
        profile: "",
        pUserEmail: "",
          pUserName: "",
          formSpinner: false,
        familyName: "",
        birthName: "",
        lastName: "",
        birthday: "",
        birthplace: "",
        currentNationality: "",
        birthNationality: "",
        anotherNationality: "",
        sex1: "",
        civilStatu: "",
        parentalAuthority: "",
        cniNumber: "",
        travelDocumentType1: "",
        travelDocumentNumber: "",
        expiredDate: "",
        deliveredBy: "",
        homeAddress: "",
        applicantEmailAddress: "",
        phoneNumber: "",
        anotherH: "",
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
    requestMade1: "",
    personInCharge: "",
    supportDocument: "",
    visaDecision1: "",
    validFrom: "",
    validTo: "",
    numberInputs1: "",
    numberDay: "",
    paymentMethod1: "",
    checkAvis:"",

              
      };
    },
    watch: {},
    components:{
        // neutralNavBar;
        
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
    this.user=res.data;
           this.pUserPhoto = res.data.profileImage;
          this.pUserName = res.data.name;
          this.pUserEmail = res.data.email;
          this.profile = this.$url+'/'+ this.pUserPhoto;
          console.log("user",  this.user);
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

this.checkAvis = [];
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
    this.orderDevis = res.data;
    console.log("this.orderDevis", this.orderDevis);


  this.id = res.data.id,
   this.familyName = res.data.familyName,
      this.birthName = res.data.birthName,
      this.lastName = res.data.lastName,
      this.birthday = res.data.birthday,
      this.birthplace = res.data.birthplace,
      this.currentNationality = res.data.currentNationality,
      this.birthNationality = res.data.birthNationality,
      this.anotherNationality = res.data.anotherNationality,
      this.sex1 = res.data.sex,
      this.civilStatu = res.data.civilStatus,
      this.parentalAuthority = res.data.parentalAuthority,
      this.cniNumber = res.data.cniNumber,
      this.travelDocumentType1 = res.data.travelDocumentType,
      this.travelDocumentNumber = res.data.travelDocumentNumber,
      this.expiredDate = res.data.expiredDate,
      this.deliveredBy = res.data.deliveredBy,
      this.homeAddress = res.data.homeAddress,
      this.applicantEmailAddress = res.data.applicantEmailAddress,
      this.phoneNumber = res.data.phoneNumber,
      this.anotherH = res.data.anotherHome,
      this.residencePermitNumber = res.data.residencePermitNumber,
      this.residencePermitExpirationDate = res.data.residencePermitExpirationDate,
      this.profession = res.data.profession,
      this.travelReason = res.data.travelReason,
      this.currentdate = res.data.currentdate, 
      this.sendedDate = res.data.sendedDate,
      this.destinationCountry =  res.data.destinationCountry
      this.rejected = res.data.rejected,
        this.view = res.data.view;


        this.requestDate = res.data.adminDevisDao[0].requestDate
    this.requestNumber = res.data.adminDevisDao[0].requestNumber
    this.requestMade1 = res.data.adminDevisDao[0].requestMade
    this.personInCharge = res.data.adminDevisDao[0].personInCharge
    this.supportDocument = res.data.adminDevisDao[0].supportDocument
    this.visaDecision1 = res.data.adminDevisDao[0].visaDecision
    this.validFrom = res.data.adminDevisDao[0].validFrom
    this.validTo = res.data.adminDevisDao[0].validTo
    this.numberInputs1 = res.data.adminDevisDao[0].numberInputs
    this.numberDay = res.data.adminDevisDao[0].numberDay
    this.paymentMethod1 = res.data.adminDevisDao[0].paymentMethod

this.checkAvis = res.data.adminDevisDao;
})
.catch(function (error) {
  console.log(error);
});



    },
    methods: {
        onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
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
    "requestDate": this.requestDate,
    "requestNumber": this.requestNumber,
    "requestMade1":this.requestMade1,
    "personInCharge": this.personInCharge,
    "supportDocument11": this.supportDocument11,
    "visaDecision1": this.visaDecision1,
    "validFrom": this.validFrom,
    "validTo":this.validTo,
    "numberInputs1": this.numberInputs1,
    "numberDay": this.numberDay,
    "paymentMethod1": this.paymentMethod1,
});
      var config = {
        method: "post",
        url: this.$url+"/admin/devis?orderDevisId="+ this.orderDevis.id +"&userId="+ this.user.id,
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
            window.location.href="/AdminParticularUserDevis"
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
  
  span{
    font-size: 1rem;
  }
  .input_field {
    position: relative;
    margin-bottom: 10px;
  }
  input {
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

  .back{
    width: 4.5rem;
    cursor: pointer;
    position: relative;
    margin-top: 1rem;
    margin-left: 1rem;
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

  </style>
  