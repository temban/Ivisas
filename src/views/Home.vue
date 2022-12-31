<template>
  <div>
 <navHome/>
    <body>
      <sliderVue/>
<listingVue/>
<testimonialVue/>
<div>
</div>

    </body>
  </div>
</template>

<script>
import sliderVue from '../components/slider.vue';
import listingVue from '../components/listing.vue';
import navHome from '../components/navbars/navHome.vue';
import testimonialVue from '../components/testimonial.vue';
export default {
  name: "Home",
  components: {
    sliderVue,
    listingVue, 
    navHome, 
    testimonialVue
  },
};
</script>
<style>

</style>
