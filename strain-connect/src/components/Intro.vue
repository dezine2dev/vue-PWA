<template>
  <div id='intro' class="wrap">
    <h1><div id="logo"></div>Strains just for you in 3 minutes</h1>
    <h2>Take this 3-minute medical evaluation to help provide accurate cannabis recommendation...<br>just for YOU!</h2>
    <br>
    <h3>( Going back to this page resets the evaluation )</h3>
    <router-link :to="{ path: 'ailments' }">
      <button class="stepButton">Start</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  mounted(){
    this.$store.state.commit("resetState");
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#intro h1 {
  line-height: 60px;
}
#logo {
  float: left;
  height: 60px;
  width: 60px;
  background-position: 0px -5px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../assets/logo.png');
}
h1 {
  text-transform: uppercase;
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
button.stepButton {
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
