<template>
    <div>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>FICHE DE DEMANDE DE VISA</h2>
          </div>
         
            <div class="">
              <form>
                <div class="row clearfix">
                  <div class="col_half">
                    <div class="input_field">
                      <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="Nom" v-model="Nom"/>
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="input_field">
                      <span><i aria-hidden="true" class="fa fa-user"></i></span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Prénom"
                        required
                        v-model="Prénom"
                      />
                    </div>
                  </div>

                </div>
                <div class="row clearfix">
                  <div class="col_half">
                    <div class="input_field">
                      <span><i aria-hidden="true" class="fa fa-mars"></i></span>
                      <input type="text" name="name" placeholder="Sexe" v-model="Sexe"
/>
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="input_field">
                      <span><i aria-hidden="true" class="fa fa-calendar"></i></span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Date et lieu de naissance"
                        required v-model="dateNaissance"
                      />
                    </div>
                  </div>
                </div>
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-person"></i></span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Nom et prénom du père"
                    required v-model="pere"
                  />
                </div>
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-person"></i></span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Nom et prénom du mère"
                    required v-model="mere"
                  />
                </div>
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-flag"></i></span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Nationalité d'origine"
                    required v-model="nationalityOrigin"
                  />
                </div>

                <div class="row clearfix">
                  <div class="col_half">
                  <h4>Situation de famille:</h4>
                  </div>
                  <div class="col_half left">
                  
                <div class="input_field checkbox_option">
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label for="rd1">Célibataire</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label for="rd2">Marié(e)</label>
                  <input type="radio" name="radiogroup1" id="rd3" />
                  <label for="rd3">Divorcé(e)</label>
                  <input type="radio" name="radiogroup1" id="rd4" />
                  <label for="rd4">Veuf(ve)</label>
                </div>
                  </div>

                </div>
               

                <div class="input_field space">
                  <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                  <input type="text" name="email" placeholder="Nom et Prénom du conjoint" required v-model="conjoint"/>
                </div>



                <div class="row clearfix">
                  <div class="col_half">
                  <h4>Nature du document du voyage:</h4>
                  </div>
                  <div class="col_half1">
                  
                <div class="input_field checkbox_option">
                  <input type="radio" name="radiogroup1" id="rd5" />
                  <label for="rd5">Passport ordinaire</label>
                  <input type="radio" name="radiogroup1" id="rd6" />
                  <label for="rd6">Passport diplomatique</label>
                  <input type="radio" name="radiogroup1" id="rd7" />
                  <label for="rd7">Passport de service</label>
                  
                </div>
                  </div>

                  <div class="row clearfix">
                  <div class="col_half input_field checkbox_option">
                   
                    <input type="radio" name="radiogroup1" id="rd8" />
                  <label for="rd8">Passport de service</label>
                  </div>
                  <div class="col_half">
                  
                    <div class="input_field">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
               
                  </div>
                </div>
                </div>


                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
               


                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                  />
                </div>
  
                <div class="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label for="rd1">Student</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label for="rd2">Admin</label>
                </div>
                <div class="input_field select_option">
                  <select>
                    <option>Select a country</option>
                    <option>Bangladesh</option>
                    <option>USA</option>
                  </select>
                  <div class="select_arrow"></div>
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">I agree with terms and conditions</label>
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label for="cb2">I want to receive the Class routine</label>
                </div>
                <input class="button" type="submit" value="Register" />
              </form>
            </div>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VisaForm.vue",
    data() {
      return {};
    },
    watch: {},
    created() {},
    methods: {},
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
    position: relative;
    z-index: 1;
    border-top: 5px solid $yellow;
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
      &[type="password"] {
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
      &[type="password"]:hover {
        background: #fafafa;
      }
      &[type="text"]:focus,
      &[type="email"]:focus,
      &[type="password"]:focus {
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
  