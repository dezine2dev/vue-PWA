<template>
  <div class="wrap">
    <h1>Strains just for you in 3 minutes</h1>
    <h2>Take this 3-minute medical evaluation to help provide accurate cannabis recommendation...<br>just for YOU!</h2>
    <router-link :to="{ path: 'ailments' }">
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
