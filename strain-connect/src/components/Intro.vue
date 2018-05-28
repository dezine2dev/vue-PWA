<template>
  <div class="wrap">
    <h1>Strains just for you in 3 minutes</h1>
    <h2>Take this 3-minute medical evaluation to help provide accurate cannabis recommendation...<br>just for YOU!</h2>
    <router-link :to="{ name: 'StepOne' }">
      <button class="stepButton">Start</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wrap {
  padding-left: 10%;
  padding-right: 5%;
  padding-top: 10%;
  position: relative;
  display: block;
  color: white;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
.md-input {
  color: white;
  border-bottom: 2px solid !important;
}
router-link button.stepButton {
  background-color: #71ccd7;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
}
</style>
