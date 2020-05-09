import firebase from 'firebase/app';
import 'firebase/firestore';  
  
  // Your web app's Firebase configuration
  // ** Important - rename this file to just firestore.js removing the config_

  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();