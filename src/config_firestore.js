import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  
  // Your web app's Firebase configuration
  // ** Important - rename this file to just firestore.js removing the config_
  // create a collection called 'users' in firebase console

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
  export const auth = firebase.auth();