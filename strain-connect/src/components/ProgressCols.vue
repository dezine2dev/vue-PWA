<template>
  <div id="progressCols" class="md-layout">
    <div class="md-layout-item" :class="[{ activeStep: currentStep(1) }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: currentStep(2) }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: currentStep(3) }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: currentStep(4) }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: currentStep(5) }, '.md-elevation-1']"></div>
  </div>
</template>

<script>

  export default {
    name: 'ProgressCols',
    methods: {
      currentStep(i){
        if (i== 2){return false}
        return true

        // return this.$routes.step == i; 
      }
    }
  }

</script>

<style scoped>

  .md-layout-item {
    height: 40px;
    background-color: white;
  }

  .activeStep {
    background-color: #71ccd7;
  }

</style>