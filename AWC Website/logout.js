// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnRXDaONlj8ebUzJh-8veX1GtgI9IF3Hs",
  authDomain: "ahsana-welfare-center-52143.firebaseapp.com",
  databaseURL: "https://ahsana-welfare-center-52143-default-rtdb.firebaseio.com",
  projectId: "ahsana-welfare-center-52143",
  storageBucket: "ahsana-welfare-center-52143.appspot.com",
  messagingSenderId: "52579977535",
  appId: "1:52579977535:web:d259c9b4952431c5daab8a"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const database = getDatabase(app);
  const auth = getAuth(app);

//logout
const logout = document.querySelector(#logout)
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    Auth.signOut(),then(() => {
        console.log('user signed out');
    });
});