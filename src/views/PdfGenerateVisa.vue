<template>

    <div >

      <router-link to="/AdminParticularUserVisa" ><img class="back" src="@/assets/back.gif"/></router-link> 


<vue-html2pdf
  :show-layout="false"
  :float-layout="true"
  :enable-download="true"
  :preview-modal="true"
  :paginate-elements-by-height="10"
  filename="VisaPDF"
  :pdf-quality="4"
  :manual-pagination="false"
  pdf-format="a4"
  :pdf-margin="3"
  pdf-orientation="portrait"
  pdf-content-width="100%"
  @progress="onProgress($event)"
  ref="html2Pdf"
>
  <section slot="pdf-content">

<PdfDownloadVisa/>
      
  </section>
</vue-html2pdf>
<div style="margin: 1rem 2rem 1rem 2rem;">

  <PdfDownloadVisa/>

  <div class="mt-2 mb-4 text-center">
               <button class="btn profile-button" type="button" @click="genPDF()">
                 Generate pdf <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
           <span class="sr-only">Loading...</span></div>
               </button>
             </div>
</div>

</div>
</template>

<script>
import PdfDownloadVisa from "./PdfDownloadVisa.vue";
import VueHtml2pdf from "vue-html2pdf";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
export default {
  components: {
    VueHtml2pdf,
    PdfDownloadVisa
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
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    genPDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    async download() {
      this.working = true;
      
      await this.$nextTick();
      
      // A4 in 96dpi
      // 29.7cm x 21cm
      const pageWidth = 1123;
      const pageHeight = 794;
      
      const doc = new jsPDF({
        orientation: "l",
        unit: "px",
        hotfixes: ["px_scaling"],
        format: [pageWidth, pageHeight],
        compressPdf: true
      });
      
      // Slower, Larger, But maintain the html elements
      // doc.html(this.$refs.pdf, {
      //   callback: async doc => {
      //     const pageCount = doc.internal.getNumberOfPages();
      //     doc.deletePage(pageCount);
      //     await doc.save("favorites.pdf");
      //     this.working = false;
      //   },
      // });
      
      // Faster, Smaller, Flatten all elements
      const canvas = await html2canvas(this.$refs.pdf, {
        allowTaint: true,
        useCORS: true,
        width: pageWidth,
        y: 0
      })
      const img = canvas.toDataURL("image/jpeg", 0.8);
      const totalHeight = pageHeight * this.pageTotal;
      for (let i = 0; i < this.pageTotal; i++) {
        doc.addImage(img, "JPEG", 0, -pageHeight * i, pageWidth, totalHeight, undefined, "FAST");
        if (i < this.pageTotal - 1) {
          doc.addPage();
        }
      }
      await doc.save("favorites.pdf");
      this.working = false;
    },
    slice(string, length, ellipsis = " ...") {
      return string.length > length
        ? string.slice(0, length) + ellipsis
        : string;
    }
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
        color: #000000;
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

.profile-button {
    background:gold;
    box-shadow:3px 3px 5px rgba(0, 0, 0, 0.841);
    border: none;
    color: black;
    max-width: 100%;
    width: 20rem  
  }
  
  .profile-button:hover {
    background: rgb(161, 121, 22);
    color: whitesmoke;
  }
  
  .profile-button:focus {
    background: grey;
    box-shadow: none;
  }
  
  .profile-button:active {
    background: grey;
    box-shadow: none;
  }
  
  .back:hover {
    color: goldenrod;
    cursor: pointer;
  }
</style>