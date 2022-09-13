import firebase from  'firebase/app' ;
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCMs1dFW9lRctKDxCjrcLORNYXEyNo-tVQ",
  authDomain: "fir-e9470.firebaseapp.com",
  projectId: "fir-e9470",
  storageBucket: "fir-e9470.appspot.com",
  messagingSenderId: "586965225214",
  appId: "1:586965225214:web:0042e4da2a67e564c01faf",
  measurementId: "G-WYZVJRK4BV"
};

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();

export { auth, firebase };