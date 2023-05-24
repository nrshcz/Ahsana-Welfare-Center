// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, updatePassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const auth = getAuth(app);

function changePassword(password2) {
    const user = auth.currentUser;
    const newPassword = document.getElementById('password2').value;

    updatePassword(user, newPassword).then(() => {
        console.log('Password updated');
        alert("Password is updated succesfully");
    }).catch((error) =>{
        console.log('Error');
        alert("Ops! Something went wrong");
    });
}