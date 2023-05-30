//const logoutBtn = document.querySelector(".logout-btn")

//logoutBtn.addEventListener("click",()=>{
//    window.location.replace("homepage-main.html")
//})
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Initialize Firebase
var firebaseConfig = {
    // Your Firebase configuration
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Logout the user
  function logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      // Redirect the user to the login page or home page
      window.location.href = '/homepage-main.html';
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }