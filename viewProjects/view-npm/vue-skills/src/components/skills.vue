<!--html template for rendering-->
<template>
  <div class="hello">

    <div class="holder">
      <ul>
        <!-- uses the v-for directive and acceess the data by index in the skills array in data-->
        <!--  loops over the skills list  and sets thekeys to be index-->
        <li v-for= "(data, index) in skills" :key = 'index'>{{index}} : {{data.skill}}</li>
      </ul>
      <ul>
        <li v-for="info of info">{{info.name}}</li>
      </ul>
    </div>

  <!--  any v-action is called a directive -->

  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Skills',
  data(){
    return {
      // this will beinerated over
      info: [],
      errors: [],
      skills:[
        {"skill":"Vue.js"},
        {"skill":"Node.js"},
        {"skill":"Python"}
      ]
    }
  },
    created() {
      axios.get('http://myjson.com/m6wsy')
      .then(response => {
        // JSON responses are automatically parsed.
        this.info = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
