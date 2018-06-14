<template>
  <div id='intro' class="wrap">
    <h1><div id="logo"></div>Strains just for you in 3 minutes</h1>
    <h2>Take this 3-minute medical evaluation to help provide accurate cannabis recommendation...<br>just for YOU!</h2>
    <br>
    <h3>( Going back to this page resets the evaluation )</h3>
    <br><br><br>
    <md-field>
        <label>First Name</label>
        <md-input type="text" name="first_name" v-model="firstName"  v-on:input="nameChange"></md-input>
    </md-field>
    <md-field>
        <label>Email Address</label>
        <md-input type="email" name="email" v-model="email" v-on:input="emailChange"></md-input>
    </md-field>
    <md-field>
        <label>Zip</label>
        <md-input type="number" name="zip" v-model="zip" v-on:input="zipChange"></md-input>
    </md-field>
    <router-link :to="{ path: 'ailments' }">
      <button class="stepButton" :class="{ disabled: isDisabled }" >Start</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  mounted(){
    this.$store.commit("resetState");
  },
  computed: {
      isDisabled: function ()  {
        let s = this.$store.state;

        return s.firstName != null && s.email != null && s.zip != null ? false : true;

      }
      // searchMatch: true,
      // search: ''
  },
  methods: {
    nameChange(){
      this.$store.commit("setFirstName", this.firstName);
    },
    emailChange(){
      this.$store.commit("setEmail", this.email);
    },
    zipChange(){
      this.$store.commit("setZip", this.zip);
    }
  },
  data () {
    return {
      firstName: null,
      email: null,
      zip: null
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
