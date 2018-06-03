<template>
  <div id="app">
    <Header></Header>
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'app',
  components: {
    Header
  },
  watch: {
      '$route' (to, from){
        let n = 0;
        console.log('route change app watcher');
        if (this.$route.name == "Ailments") {
          n =  1;
        } else if (this.$route.name == "Effects") {
          n =  2; 
        } else if (this.$route.name == "Personality") {
          n = 4;
        }
        this.$store.state.step = n;
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: #9282bc;
  overflow-x: hidden;
}

#app {
  font-family: 'Josefin Sans','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}


h1 {
  font-size: 38px;
  line-height: 38px;
}

h2 {
  font-size: 20px;
  line-height: 20px;
}

p {
  font-size: 14px;
  line-height: 14px;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
button.stepButton {
  background-color: #71ccd7;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0px !important;
  left: 0px;
  width: 100%;
  height: 60px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 2em;
}
.wrap {
  padding-left: 10%;
  padding-right: 5%;
  padding-top: 5%;
  position: relative;
  display: block;
  color: white;
}
.stepImg {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-color: transparent;
  margin-left: -120px;
  margin-bottom: -93px;
}
</style>
