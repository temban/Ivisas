<template>
  <div>
    <!-- Banner -->
    <!-- <a href="https://webpixels.io/components?ref=codepen" class="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style="z-index: 1000;">
    <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
</a> -->

 
<!-- Dashboard -->
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <!-- Vertical Navbar -->
    <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
            <!-- Toggler -->
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Brand -->
            <router-link to="/AdminDashboard" >
                <a class="navbar-logo py-lg-2 mb-lg-5 px-lg-12 me-0" href="#">
                <img src="@/assets/logo-jpg.png" alt="...">
            </a>
            </router-link>
            
            <!-- User menu (mobile) -->
            
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidebarCollapse">
                <!-- Navigation -->
                <ul class="navbar-nav">
                    <router-link to="/AdminDashboard">
                        <li class="nav-item">
                        <a class="nav-link active">
                            <i class="bi bi-house"></i> Tableau de bord
                        </a>
                    </li>
                    </router-link >
                    
                    <router-link to="/AdminAllDevis" >
                        <li >
                        <a class="nav-link" >
                            <i class="bi bi-pencil-square"></i> Demandes des devis
                            <!-- <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> -->
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/AdminAllVisas">
                        <li class="nav-item">
                        <a class="nav-link" >
                            <i class="fa fa-plane" style="font-size: 20px;"></i> Demandes des visas
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/Suggestions" >
                        <li >
                        <a class="nav-link" >
                            <i class="bi bi-chat"></i> Suggestions
                            <!-- <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> -->
                        </a>
                    </li>
                    </router-link>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-bookmarks"></i> Collections
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-people"></i> Users
                        </a>
                    </li> -->
                </ul>
                <!-- Divider -->
           
                <!-- Push content down -->
                <div class="mt-auto"></div>
                <!-- User (md) -->
                <ul class="navbar-nav">
                    <li class="nav-item" style="cursor:pointer">
                        <a class="nav-link" @click="singout()">
                            <i class="bi bi-box-arrow-left"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <!-- Header -->
        <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                            <!-- Title -->
                            <h1 class="h2 mb-0 ls-tight">Suggestions</h1>
                        </div>
                        <!-- Actions -->
                        <!-- <div class="col-sm-6 col-12 text-sm-end">
                            <div class="mx-n1">
                                <a href="#" class="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                    <span class=" pe-2">
                                        <i class="bi bi-pencil"></i>
                                    </span>
                                    <span>Edit</span>
                                </a>
                                <a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
                                    <span class=" pe-2">
                                        <i class="bi bi-plus"></i>
                                    </span>
                                    <span>Create</span>
                                </a>
                            </div>
                        </div> -->
                    </div>
                    <!-- Nav -->
                    <ul class="nav nav-tabs mt-4 overflow-x border-0">
                        
                    <router-link to="/AdminDashboard"><li class="nav-item ">
                            <a  class="nav-link">Tableau de bord</a>
                        </li>
                    </router-link>
                        
                 
                        <li class="nav-item">
                            <a class="nav-link active">Suggestions</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a href="#" class="nav-link font-regular">Particular user name</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </header>
        <!-- Main -->
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
            <!-- Card stats -->

            <section class="comments">
              <article class="comment" v-for="item in allSuggestions" :key="item">
                <a class="comment-img" href="#non">
                  <img
                    src="@/assets/logo-jpg.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </a>
                <div class="comment-body">
                    
                  <div class="text">
                    <p>{{ item.message }}</p>
                  </div>
                  <p class="attribution">
                    by <span class="s">{{ item.senderName }}</span>   <span class="e"> {{ item.senderEmail }}</span> 
                  </p>
                </div>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAllDevis",
  data() {
    return {
      allSuggestions: [],
    };
  },
  components: {},
  watch: {},
  created() {
    var axios = require('axios').default;

var config = {
  method: 'get',
  url: this.$url + '/suggestions',
  headers: { 
    'Content-Type': 'application/json', 
    Authorization: "Bearer " + localStorage.getItem("access-token"),
  }
};

axios(config)
.then( (response) => {
  console.log(JSON.stringify(response.data));
  this.allSuggestions = response.data;
})
.catch(function (error) {
  console.log(error);
});

  },
  methods: {
    singout() {
            localStorage.removeItem("access-token");
            this.isLogged = this.checkIfIsLogged();
            localStorage.clear();
            window.location.href = "/";
        },
        checkIfIsLogged() {
            let token = localStorage.getItem("access-token");
            //localStorage.getItem('access-token')
            if (token) {
                return true;
            } else {
                return false;
            }
        },
  },
};
</script>

<style lang="scss" scoped>
/* Webpixels CSS */
/* Utility and component-centric Design System based on Bootstrap for fast, responsive UI development */
/* URL: https://github.com/webpixels/css */

@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0);

/* Bootstrap Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot?#iefix)
      format("embedded-opentype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff2)
      format("woff2"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff)
      format("woff"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.ttf)
      format("truetype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.svg#wf)
      format("svg");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot?#iefix)
      format("embedded-opentype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff2)
      format("woff2"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff)
      format("woff"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.ttf)
      format("truetype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.svg#wf)
      format("svg");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot);
  src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot?#iefix)
      format("embedded-opentype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff2)
      format("woff2"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff)
      format("woff"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.ttf)
      format("truetype"),
    url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.svg#wf)
      format("svg");
  font-weight: 700;
  font-style: normal;
}

body {
  width: 500px;
  margin: 20px auto;
  font: 16px/1.4 Arial, sans-serif;
  background: #f3eee9;
}

p {
  margin: 0 0 1em;
}

.s{
    font-size: 1.1rem;
    font-weight: 600;
    margin-right: 1.5rem;
    margin-left: 0.2rem;

    color: goldenrod
}
.e{
    font-size: 0.9rem;
    font-weight: 500;
    color: black;
}
.comment {
  overflow: hidden;
  padding: 0 0 1em;
  border-bottom: 1px solid #ddd;
  margin: 0 0 1em;
  *zoom: 1;
}

.comment-img {
  float: left;
  margin-right: 33px;
  border-radius: 5px;
  overflow: hidden;
}

.comment-img img {
  display: block;
}

.comment-body {
  overflow: hidden;
}

.comment .text {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background: #fff;
}

.comment .text p:last-child {
  margin: 0;
}

.comment .attribution {
  margin: 0.5em 0 0;
  font-size: 14px;
  color: #666;
}

/* Decoration */

.comments,
.comment {
  position: relative;
}

.comments:before,
.comment:before,
.comment .text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 65px;
}

.comments:before {
  width: 3px;
  top: -20px;
  bottom: -20px;
  background: rgba(0, 0, 0, 0.1);
}

.comment:before {
  width: 9px;
  height: 9px;
  border: 3px solid #fff;
  border-radius: 100px;
  margin: 16px 0 0 -6px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #ccc;
}

.comment:hover:before {
  background: orange;
}

.comment .text:before {
  top: 18px;
  left: 78px;
  width: 9px;
  height: 9px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: #e5e5e5;
  background: #fff;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
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
