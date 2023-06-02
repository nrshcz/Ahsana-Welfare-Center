// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

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

firebase.initializeApp(firebaseConfig);

// Function to reset the user's password
async function resetPassword(email) {
    try {
      // Check if the user exists in the database
      const snapshot = await firebase.database().ref('https://console.firebase.google.com/u/0/project/ahsana-welfare-center-52143/authentication/users').orderByChild('identifier').equalTo(email).once('value');
      const userData = snapshot.val();
  
      if (!userData) {
        console.log('User with provided email does not exist.');
        return;
      }
  
      // Get the user's Firebase UID
      const userId = Object.keys(userData)[0];
  
      // Send password reset email
      await firebase.auth().sendPasswordResetEmail(email);
  
      console.log('Password reset email sent successfully!');
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  }
  
  // Add event listener to the reset button
  document.getElementById('reset').addEventListener('click', function() {
    const userEmail = document.getElementById('email').value;
    resetPassword(userEmail);
  });