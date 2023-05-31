//const logoutBtn = document.querySelector(".logout-btn")

//logoutBtn.addEventListener("click",()=>{
//    window.location.replace("homepage-main.html")
//})
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// Initialize Firebase
// Web's Firebase configuration
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
  
  // Logout the user
  function logout() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      // Sign-out successful.
      // Redirect the user to the login page or home page
      window.location.href = '/AWS Website/homepage-main.html';
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }