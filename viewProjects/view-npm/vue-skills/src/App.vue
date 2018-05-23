<!--  the .vue is saying that this is a single component-->

<!-- where the html renderig happens as well as calls to components -->
<template>
  <div id="app">
    <!-- Based on the script, and whats in HelloWorld.vue msg is the full html output of the template-->
    <skills />
  </div>
</template>
<!-- this handles any and all js that may come in-->
<script>
//import the class that youll be using  from the component folder
import Skills from './components/skills.vue'

export default {
  name: 'app',
  // references hello world, head there to seee whats its importing
  components: {
    Skills
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
