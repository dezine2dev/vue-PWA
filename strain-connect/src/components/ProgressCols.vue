<template>
  <div v-if="showProgress" id="progressCols" class="md-layout">
    <div class="md-layout-item" :class="[{ activeStep: $store.state.step >= 0 }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: $store.state.step > 1 }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: $store.state.step > 2 }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: $store.state.step > 3 }, '.md-elevation-1']"></div>
    <div class="md-layout-item" :class="[{ activeStep: $store.state.step > 4 }, '.md-elevation-1']"></div>
  </div>
</template>

<script>

  export default {
    name: 'ProgressCols',
    data: function(){
      return {
        showProgress: true
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