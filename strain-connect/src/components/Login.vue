<template>
  <div class="wrap">
    <h1>Hello!</h1>
    <h2>Welcome to StrainConnect.<br>Let's get to know each other!</h2>
    <md-field>
        <label>Full Name</label>
        <md-input type="text" name="full_name"></md-input>
    </md-field>
    <md-field>
        <label>Email Address</label>
        <md-input type="email" name="email"></md-input>
    </md-field>
    <md-field>
        <label>Password</label>
        <md-input type="text" name="email"></md-input>
    </md-field>
    <router-link :to="{ name: 'Intro' }">
      <button class="stepButton">Next</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
