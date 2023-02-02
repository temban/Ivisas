<template>
    <div>
      <router-link to="/AdminParticularUserDevis" ><img class="back" src="@/assets/back.gif"/></router-link> 

      <div class="container rounded bg-white mt-5 mb-5">
        <vue-html2pdf
  :show-layout="false"
  :float-layout="true"
  :enable-download="true"
  :preview-modal="true"
  :paginate-elements-by-height="10"
  filename="DevisPDF"
  :pdf-quality="4"
  :manual-pagination="false"
  pdf-format="a4"
  :pdf-margin="10"
  pdf-orientation="portrait"
  pdf-content-width="100%"
  @progress="onProgress($event)"
  ref="blaise"
>
  <section slot="pdf-content">
  
   
<doc4/>
   

       
    </section>
</vue-html2pdf>
<div>
    
<doc3/>




       

</div>


      </div>

      <div class="mt-2 mb-4 text-center">
               <button class="btn profile-button" type="button" @click="generatePDF()">
                 Generate pdf <div class="spinner-border text-light spinner-border-sm mb-1 " role="status" v-if="formSpinner">
           <span class="sr-only">Loading...</span></div>
               </button>
             </div>




             
    </div>
  </template>
  
  <script>
  // import neutralNavBar from '../components/navbars/neutralNavBar.vue';
  import doc4 from "./PdfDownloadDevi.vue";    
  import doc3 from "./PdfDisplayDevi.vue";
  import VueHtml2pdf from "vue-html2pdf";
  export default {
    name: "footer",
    data() {
      return {
    

              
      };
    },
    watch: {},
    components:{
        doc3,
        doc4,
        // neutralNavBar;
        VueHtml2pdf
    },
   
    methods: {
        onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.blaise.generatePdf();
    },
    
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
  