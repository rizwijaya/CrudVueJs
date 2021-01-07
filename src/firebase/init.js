import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCfTRDDtu8Ff7ZItH_ydbzx9N2fhbJf0wE",
    authDomain: "crudaplikasivuejs.firebaseapp.com",
    projectId: "crudaplikasivuejs",
    storageBucket: "crudaplikasivuejs.appspot.com",
    messagingSenderId: "809434714540",
    appId: "1:809434714540:web:0201d5eac038733d54ea09",
    measurementId: "G-N0FVEH30P0"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({timestampsInSnapshots : true})

  export default firebaseApp.firestore()