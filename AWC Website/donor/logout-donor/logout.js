// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

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


  // User's Sign out

  let logOut = document.getElementById("logout")
  signOut(auth);
  //Signing out user's
  logOut.addEventListener("click", () => {
      signOut(auth).then(() => {
        alert("You have logged out");
      // code for redirect user to Log-in page
      window.location.href = "/Master%20Ahsana%20Welfare%20Center/Ahsana-Welfare-Center/AWC%20Website/homepage-main.html";
  })
  .catch((error) => {
      console.log(error);
  });  
})