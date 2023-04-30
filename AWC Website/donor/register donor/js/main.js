// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {

  apiKey: "AIzaSyAnRXDaONlj8ebUzJh-8veX1GtgI9IF3Hs",

  authDomain: "ahsana-welfare-center-52143.firebaseapp.com",

  databaseURL: "https://ahsana-welfare-center-52143-default-rtdb.firebaseio.com",

  projectId: "ahsana-welfare-center-52143",

  storageBucket: "ahsana-welfare-center-52143.appspot.com",

  messagingSenderId: "52579977535",

  appId: "1:52579977535:web:d259c9b4952431c5daab8a"

};


firebase.initializeApp(firebaseConfig);

// Reference messages collection
var registerRef = firebase.database().ref('register');

// Listen for form submit
document.getElementById('register-form').addEventListener('signUp', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var father_name = getInputVal('father_name');
  var city = getInputVal('city');
  var email = getInputVal('email');
  var phoneNum = getInputVal('phoneNum');
  var postcode = getInputVal('postcode');
  var birth_date = getInputVal('birth_date');
  var female = getInputVal('female');
  var male = getInputVal('male');
  var state = getInputVal('state');
  


  // Save message
  saveMessage(name, father_name, city, email, phoneNum, postcode, birth_date, female, male, state);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('register-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, father_name, city, email, phoneNum, postcode, birth_date, female, male, state){
  var newRegisterRef = registerRef.push();
  newRegisterRef.set({
    name: name,
     father_name:father_name,
      city:city, 
      email:email,
       phoneNum:phoneNum, 
       postcode:postcode,
        birth_date:birth_date,
         female:female,
          male:male,
           state:state
  });
}