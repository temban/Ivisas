<template>
    
    <div >
        <main>



  <ul class="infoGraphic"> 
    <li>
      <div class="numberWrap">
        <div class="number fontColor1">1</div>
        <div class="coverWrap">
          <div class="numberCover"></div>
        </div>
      </div>
      <div class="content">
        <div class="icon "><i class='fa fa-globe'></i>
</div>
        <p>Cliquez  sur le continent de votre pays  de destination.</p>
      </div>
    </li>
    <li>
      <div class="numberWrap">
        <div class="number fontColor1">2</div>
        <div class="coverWrap">
          <div class="numberCover"></div>
        </div>
      </div>
      <div class="content">
        <div class="icon "><i class='fab fa-font-awesome-flag'></i></div>
        <p>Sélectionnez votre pays de destination.</p>
      </div>
    </li>
    <li>
      <div class="numberWrap">
        <div class="number  fontColor1">3</div>
        <div class="coverWrap">
          <div class="numberCover"></div>
        </div>
      </div>
      <div class="content">
        <div class="icon "><i class='fa fa-file-text'></i></div>
        <p>Remplissez le formulaire de demande de devis.</p>
      </div>
    </li>
    <li>
      <div class="numberWrap">
        <div class="number  fontColor1">4</div>
        <div class="coverWrap">
          <div class="numberCover"></div>
        </div>
      </div>
      <div class="content">
        <div class="icon "><i class='fas fa-praying-hands'></i></div>
        <p>Après quoi nous vous remercions de votre patience.</p>
      </div>
    </li>
    <!--     <li>
      <div class="numberWrap">
      <div class="number  fontColor6">6</div>
      <div class="coverWrap">
        <div class="numberCover"></div>
      </div>
        </div>
      <div class="content">
        <div class="icon iconPeace"></div>
        <h2>Succeed</h2>
        <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
      </div>
    </li> -->
  </ul>

</main>
    </div>
  </template>
  
  <script>
  import $ from 'jquery';
  export default {
    name: "VisaSteps",  
    data() {
      return {};
    },

    components: { 
    },
    watch: {},
    mounted() {
        ///////////////////////////////////////////
// Resizing Slider

const inputs = document.querySelectorAll("input");

function handleInputChange() {
  const units = this.dataset.units || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + units
  );
}

inputs.forEach((input) => input.addEventListener("input", handleInputChange));
var range = $("input#range"),
  value = $(".range-value");
value.html(range.attr("value"));
range.on("input", function () {
  value.html(this.value);
});

  },
    created() {},
    methods: {},
  };
  </script>
  <style lang="scss" scoped>

:root {
  // Scale is using this font-size
  --font-size: 0.8em;

  --bg1: #f5f8f7;
  --blue: #3498db;
  --green: #2ecc71;
  --purple: #9b59b6;
  --gold: #f1c40f;
  --red: #e74c3c;
  --orange: #e67e22;
  --shadow1: 0 2px 4px #00000026, 0 3px 6px #0000001f;
  --shadow2: 0 2px 6px #00000044, 0 4px 7px #00000022;
}

main {
  padding: 2vw;
  overflow: hidden;
}

ul.infoGraphic {
  // Resize with Ems
  overflow: hidden;
  max-width: 100%;
  font-size: var(--font-size);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    position: relative;
    width: 100%;
    max-width: 25em;
    background: var(--bg1);
    border-radius: 0.5em;
    padding: 0.5em;
    z-index: 1;
    transition: all 0.2s;
    cursor: pointer;
    
    .numberWrap {
      position: absolute;
    }
    .number {
      font-family: "maven pro", sans-serif;
      font-size: 13em;
      font-weight: 900;
      width: 0.9em;
      text-align: center;
      &.fontColor1 {
color: #f1c40f;
  text-shadow: 13px 13px 16px #141313;
  -webkit-background-clip: text;
  position: relative;
  margin: 0;
  font-size: 10.8em;
  font-weight: 700;
  margin: 0 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
      }
      &.fontColor2 {
        color: var(--gold);
      }
      &.fontColor3 {
        color: var(--gold);
      }
      &.fontColor4 {
        color: var(--gold);
      }
      &.fontColor5 {
        color: var(--gold);
      }
      &.fontColor6 {
        color: var(--orange);
      }
    }
    .coverWrap {
      overflow: hidden;
      transform: rotate(90deg);
      position: absolute;
      width: 18em;
      height: 15em;
      left: -3em;
      top: -1em;
    
      .numberCover {
        position: absolute;
        background: rgba(172, 167, 167, 0.064);
        width: 18em;
        height: 6em;
        border-radius: 10% 50% 0 0;
        border-bottom: 3px solid #f5f8f7;
        transition: all 0.4s;

        &::before {
          position: absolute;
          content: "";
          bottom: 5px;
          left: 4em;
          right: 4em;
          top: 5em;
          box-shadow: 0 0 30px 17px #48668577;
          border-radius: 100px / 10px;
          z-index: -1;
        }
        &::after {
          position: absolute;
          bottom: 0;
          content: "";
          left: -10%;
          width: 220%;
          height: 150%;
          background: radial-gradient(
            at bottom,
            #48668533,
            transparent,
            transparent
          );
          z-index: 1;
        }
      }
    }
    .content {
      margin: 8em 3em 1em 7em;
      position: relative;
     
      p {
        font-size: 1.1rem;
        margin-left: 1.5rem;
        // font-weight: 700;
        margin-top: -1.5rem;
        margin-bottom: 1rem;
        line-height: 1em;
        width: 12rem;
      }
    }
  }
}

// I like the curved version too, so I made it a hover for fun.
ul.infoGraphic li:hover .coverWrap .numberCover {
  border-radius: 100%;
}


/////////////////////////////////////
// Fontawesome Icons
// List: http://astronautweb.co/snippet/font-awesome/

.icon {
  position: absolute;
  font-size: 2.5rem;
  text-align: center;
  top: -1.4em;
  left: 50%;
  transform: translatex(-50%);
  &:before {
    color: rgb(64, 63, 63);
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
  }
}

.iconCodepen {
  &:before {
    content: "\f1cb";
  }
}

.iconSocial {
  &:before {
    content: "\f08a";
  }
}

.iconAirplane {
  &:before {
    content: "\f1d9";
  }
}

.iconMap {
  &:before {
    content: "\f278";
  }
}

.iconBulb {
  &:before {
    content: "\f0eb";
  }
}

.iconPeace {
  &:before {
    content: "\f25b";
  }
}

// --------------
// General Layout
// --------------

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@800&display=swap");

html {
  height: 100%;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}


///////////////////////
// Controls

.controls {
    position: relative;
    width: 12rem;
    z-index: 2;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #d7d7d7a1;
    padding: .5rem 2em;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border: 1px solid #0000004d;
}

.sliderBox {
  text-align: center;
  .range-value {
    font-weight: 500;
    font-size: 22px;
  }
}

input[type="range"] {
  width: 100%;
  margin: 1em 0;
  -webkit-appearance: none;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #00000066;
  border: 0;
  border-radius: 1.3px;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  margin-top: -10px;
  width: 20px;
  height: 20px;
  background: #eee;
  box-shadow: inset 0px 1px 1px #ffffff66, 0px 1px 3px rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #eee;
}
input[type="range"]::-moz-range-track {
  background: #000;
  border: 0;
  border-radius: 1.3px;
  width: 100%;
  height: 1px;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #151728;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 13px 0;
  color: transparent;
  width: 100%;
  height: 1px;
  cursor: pointer;
}
input[type="range"]::-ms-fill-lower {
  background: #151728;
  border: 0;
  border-radius: 2.6px;
}
input[type="range"]::-ms-fill-upper {
  background: #151728;
  border: 0;
  border-radius: 2.6px;
}
input[type="range"]::-ms-thumb {
  width: 25px;
  height: 25px;
  background: #151728;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type="range"]:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #ffffff;
}



@media (max-width: 630px) {

    ul.infoGraphic {
  // Resize with Ems
  overflow: hidden;
  max-width: 100%;
  font-size: var(--font-size);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    position: relative;
    width: 100%;
    max-width: 25em;
    background: var(--bg1);
    border-radius: 0.5em;
    padding: 0.5em;
    z-index: 1;
    transition: all 0.2s;
    cursor: pointer;
    
    .numberWrap {
      position: absolute;
    }
    .number {
      font-family: "maven pro", sans-serif;
      font-size: 2em;
      font-weight: 900;
      width: 0.9em;
      text-align: center;
      &.fontColor1 {
color: #f1c40f;
  text-shadow: 13px 13px 16px #141313;
  -webkit-background-clip: text;
  position: relative;
  margin: 2rem 0 0 0;
  font-size: 6.8em;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
      }
      &.fontColor2 {
        color: var(--gold);
      }
      &.fontColor3 {
        color: var(--gold);
      }
      &.fontColor4 {
        color: var(--gold);
      }
      &.fontColor5 {
        color: var(--gold);
      }
      &.fontColor6 {
        color: var(--orange);
      }
    }
    .coverWrap {
      overflow: hidden;
      transform: rotate(90deg);
      position: absolute;
      width: 18em;
      height: 12em;
      left: -3em;
      top: -1em;
    
      .numberCover {
        position: absolute;
        background: rgba(172, 167, 167, 0.064);
        width: 18em;
        height: 6em;
        border-radius: 10% 50% 0 0;
        border-bottom: 3px solid #f5f8f7;
        transition: all 0.4s;


        &::before {
          position: absolute;
          content: "";
          bottom: 5px;
          left: 4em;
          right: 4em;
          top: 5em;
          box-shadow: 0 0 30px 17px #48668577;
          border-radius: 100px / 10px;
          z-index: -1;
        }
        &::after {
          position: absolute;
          bottom: 0;
          content: "";
          left: -10%;
          width: 220%;
          height: 150%;
          background: radial-gradient(
            at bottom,
            #48668533,
            transparent,
            transparent
          );
          z-index: 1;
        }
      }
    }
    .content {
      margin: 8em 3em 1em 7em;
      position: relative;
     
      p {
        font-size: 1rem;
        margin-left: 1.5rem;
        // font-weight: 700;
        margin-top: -1.5rem;
        margin-bottom: 1rem;
        line-height: 1em;
        width: 12rem;
      }
    }
  }
}

}

</style>
  