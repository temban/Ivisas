<template>
  <div>
    <!---start-content---->
    <div class="div" style="margin: 6rem">
      <div class="content">
        <section class="articles">
          <div class="features">
            <div class="item item2">
              <!-- <img
            class="item-photo"
            src="@/assets/voyage1.jpg"            
            alt="small drone photo catched mid-air"
          /> -->
              <img
                class="item-photo"
                src="@/assets/img/v4.jpg"
                alt="small drone photo catched mid-air"
              />
            </div>
            <div class="item item1">
              <img
                class="item-photo"
                src="@/assets/img/logo.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />
            </div>

            <div class="item item3">
              <img
                class="item-photo"
                src="@/assets/p2.png"
                alt="hand holding phone with whatsapp converstaion"
              />
            </div>
          </div>
        </section>
        <div class="top-grids">
          <div class="section group"></div>
        </div>

        <div
          class="mid-grid"
          style="
            box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.507);
            padding: 3rem;
          "
        >
          <h3 style="font-size: 2rem; font-weight: 700">
            Obtenez votre visa en un click!!
          </h3>
          <p style="font-size: 1.1rem; color: black">
            Specialiste de la gestion de vos voyages, nous sommes là pour vous
            servir, parce que vvous êtes precieux. Le monde est entre vos mains,
            demandez rapidement un Devis. Concentrez-vous sur votre bonheur,
            votre satisfaction est notre priorité.
          </p>
          <div class="button">
            <router-link to="/Visas" class="router-listing"
              ><span style="font-size: 1.2rem">
                Demandez votre devis
                <i
                  class="fa fa-smile-o"
                  style="font-size: 20px; color: white; margin-left: 0.2rem"
                >
                </i
              ></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!---End-content---->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  color: rgba(9, 146, 105, 0.8);
}

.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  max-width: 90rem;
  column-gap: 2rem;
  row-gap: 2rem;
}

.item {
  height: rem;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right bottom, #dee2e6, #dbdbdb);
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.507);
  overflow: hidden;
  border-radius: 30px;
  transition: all 0.3s;
  margin-bottom: 2rem;

  position: relative;
}

.item:hover {
  transform: translateY(-1.1rem);
}

.item-photo {
  margin: 0.5rem;
  width: 95%;
  height: auto;
  border-radius: 2rem;
  align-self: center;
}

.item-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 2rem;
  gap: 1rem;
}

.item-icon {
  width: 2.4rem;
  height: 2.4rem;
}

.item-title {
  font-size: 2.4rem;
  font-weight: 400;
}

.item-text {
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.3;
  padding: 0 2rem;
  margin-bottom: 3rem;
}

.item-link:link,
.item-link:visited {
  display: inline-block;
  font-size: 1.6rem;

  padding: 1.6rem 2.4rem;
  text-decoration: underline #099268;
  color: #099268;

  /* stick link to the bottom of item */
  margin-top: auto;
}

.item-link:hover,
.item-link:active {
  color: #3aa886;
  text-decoration: underline #3aa886;
}

/* TABLETS */
@media (max-width: 950px) {
  h1 {
    font-size: 2.8rem;
  }
  .item-photo {
    margin: 0.5rem;
    width: 95%;
    height: 50vh;
  }
  .item {
    height: 11rem;
  }
  .content {
    margin: -5rem;
  }
  .features {
    grid-template-columns: 1fr 1fr;
    max-width: 60rem;
  }

  .item1 {
    grid-column: span 2;
  }

  .item-title {
    font-size: 3rem;
  }

  .item-text {
    font-size: 2rem;
  }

  .item-link:link,
  .item-link:visited {
    font-size: 2rem;
  }
}

/* MOBILES */
@media (max-width: 630px) {
  .item-photo {
    margin: 0.5rem;
    width: 95%;
    height: 50vh;
  }

  .item {
    height: 21rem;
  }
  .content {
    margin: -5rem;
  }
  .features {
    grid-template-columns: 1fr;
    max-width: 30rem;
  }

  .item1 {
    grid-column: span 1;
  }

  h1 {
    font-size: 2.4rem;
  }
  .button a {
    max-width: 16rem;
  }
  .button a {
    font-size: 1.1rem;
    padding-top: 0.6rem;
  }
  .button i {
    margin-top: 0rem;
  }
}

@media (max-width: 538px) {
  .button a {
    max-width: 24rem;
  }
  .button a {
    font-size: 0rem;
    padding-top: 0.6rem;
  }
  .button i {
    margin-top: 0rem;
  }
}
</style>
