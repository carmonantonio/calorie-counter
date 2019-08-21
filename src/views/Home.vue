
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="calculadora">
        <h1 class="title"><i class="fa fa-heartbeat"></i> Contador de Calorias</h1>
        <div class="entry header">
          <div class="long">Descripción</div>
          <div class="short">Calorias</div>
          <div class="short">Grasas</div>
          <div class="short">Carbohidratos</div>
          <div class="short">Proteinas</div>
        </div>
        <div class="entry" v-for="entry in entries" transition="fade">
          <input type="text"  v-model="entry.description" class="long" v-on:keyup.enter="saveEntry">
          <input type="number"  v-model="entry.calories" class="short" v-on:keyup.enter="saveEntry">
          <input type="number"  v-model="entry.fat" class="short" v-on:keyup.enter="saveEntry">
          <input type="number"  v-model="entry.carbs" class="short" v-on:keyup.enter="saveEntry">
          <input type="number"  v-model="entry.protein" class="short" v-on:keyup.enter="saveEntry">
          <button class="material-delete" v-on:click="removeEntry($index)">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <div class="totals">
          <div class="long">Totales:</div>
          <div class="short">{{ totalCalories }}</div>
          <div class="short">{{ totalFat }}</div>
          <div class="short">{{ totalCarbs }}</div>
          <div class="short">{{ totalProtein }}</div>
        </div>
        <div class="new">
          <input type="text" v-model="newDescription" v-on:keyup.enter="addEntry" class="long" placeholder="Descripción">
          <input type="number" v-model="newCalories" v-on:keyup.enter="addEntry" class="short" placeholder="Calorias">
          <input type="number" v-model="newFat" v-on:keyup.enter="addEntry" class="short" placeholder="Grasas">
          <input type="number" v-model="newCarbs" v-on:keyup.enter="addEntry" class="short" placeholder="Carbohidratos">
          <input type="number" v-model="newProtein" v-on:keyup.enter="addEntry" class="short" placeholder="Proteinas">
          <button class="material-button" v-on:click="addEntry()">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
    <button @click="logout"> SALIR </button>
  </div>
  
</template>


<script>
// @ is an alias to /src
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue'; 

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
