import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

let app='';

var firebaseConfig = {
  apiKey: "AIzaSyC6napvWFoI481KzcNZlZSBAz63nQXfAzQ",
  authDomain: "calorie-counter-5850e.firebaseapp.com",
  databaseURL: "https://calorie-counter-5850e.firebaseio.com",
  projectId: "calorie-counter-5850e",
  storageBucket: "",
  messagingSenderId: "507351355460",
  appId: "1:507351355460:web:a8d8b0c8b6fffdb6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

var myapp = new Vue({
  el: '#calculadora',
  data: {
    newDescription: '',
    newCalories: '',
    newFat: '',
    newCarbs: '',
    newProtein: '',
    totalCalories: '',
    totalFat: '',
    totalCarbs: '',
    totalProtein: '',
    entries: [
      { id: 3, description:'Esto es una entrada de ejemplo', calories: 223, fat: 12, carbs: 30, protein: 10 },
      { id: 2, description:'Esto tambien', calories: 50, fat: 1, carbs: 10, protein: 1 },
      { id: 1, description:'Soy una comida chula', calories: 175, fat: 3, carbs: 15, protein: 8 }
    ]
  },
  methods: {
    addEntry: function () {
      var description = this.newDescription.trim()
      var calories = parseInt(this.newCalories.trim()) || 0
      var fat = parseInt(this.newFat.trim()) || 0
      var carbs = parseInt(this.newCarbs.trim()) || 0
      var protein = parseInt(this.newProtein.trim()) || 0
      if (description && calories) {
        this.entries.push({ description: description, calories: calories, fat: fat, carbs: carbs, protein: protein })
        this.newDescription = ''
        this.newCalories = ''
        this.newFat = ''
        this.newCarbs = ''
        this.newProtein = ''
        calculateTotals(this)
      } else {
        alert("Necesita ingresar descripción y calorias")
      }
    },
    removeEntry: function (index) {
      this.entries.splice(index, 1)
      calculateTotals(this)
    },
    saveEntry: function() {
      calculateTotals(this)
    }
  }
})

function calculateTotals(app) {
  app.totalCalories = parseTotals(app.entries, 'calories')
  app.totalFat = parseTotals(app.entries, 'fat')
  app.totalCarbs = parseTotals(app.entries, 'carbs')
  app.totalProtein = parseTotals(app.entries, 'protein')
}

calculateTotals(myapp)

function parseTotals(array, element) {
  var sum = 0
  array.forEach(function(entry) {
    sum = sum + parseInt(entry[element])
  }, sum, element)
  return sum
}