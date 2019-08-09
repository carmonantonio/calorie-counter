<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout"> SALIR </button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() =>{
        this.$router.replace('login')
      })
    }
  },
}
</script>
