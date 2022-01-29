import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfJdKLOQea1QaqMuaFQ6i5f6SoV86fUvg",
    authDomain: "bookings-1a284.firebaseapp.com",
    projectId: "bookings-1a284",
    storageBucket: "bookings-1a284.appspot.com",
    messagingSenderId: "688452362632",
    appId: "1:688452362632:web:b4c1515467460eeb845a3d",
    measurementId: "G-97SFGRBPLK"
  };


 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

  export default db;