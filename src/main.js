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

