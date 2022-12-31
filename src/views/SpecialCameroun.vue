<template>
  <div style="position:relative; ">
    <navSCVue />
    <SpecialCameroonBackgroundVue/>
    <div style="position:relative; margin-top:1rem"> 
      <SpecialCameroonPricingVue/>
    </div>


  </div>
</template>

<script>
import navSCVue from "../components/navbars/navSC.vue";
import SpecialCameroonBackgroundVue from "../components/SpecialCameroonBackground.vue";
import SpecialCameroonPricingVue from "../components/SpecialCameroonPricing.vue";
export default {
  name: "SpecialCameroun",
  data() {
    return {};
  },
  components: {
    navSCVue,
    SpecialCameroonBackgroundVue,
    SpecialCameroonPricingVue
  },
  watch: {},
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>

</style>

