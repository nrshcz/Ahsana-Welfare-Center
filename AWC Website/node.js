import * as admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import serviceAccount from './path/to/serviceAccountKey.json';

const firebaseConfig = {
  apiKey: "AIzaSyAnRXDaONlj8ebUzJh-8veX1GtgI9IF3Hs",
  authDomain: "ahsana-welfare-center-52143.firebaseapp.com",
  databaseURL: "https://ahsana-welfare-center-52143-default-rtdb.firebaseio.com",
  projectId: "ahsana-welfare-center-52143",
  storageBucket: "ahsana-welfare-center-52143.appspot.com",
  messagingSenderId: "52579977535",
  appId: "1:52579977535:web:d259c9b4952431c5daab8a"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ahsana-welfare-center-52143-default-rtdb.firebaseio.com"
});

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahsanastaff.info@gmail.com',
    pass: 'Ahsana12345'
  }
});

// Function to send receipt email
async function sendReceiptEmail(email, amount) {
  try {
    const mailOptions = {
      from: 'ahsanastaff.info@gmail.com',
      to: email,
      subject: 'Donation Receipt',
      text: `Thank you for your donation of $${amount}.`
    };

    await transporter.sendMail(mailOptions);
    console.log('Receipt email sent successfully');
  } catch (error) {
    console.error('Error sending receipt email:', error);
  }
}

// Function to store donation data in Firebase
function storeDonationData(email, amount) {
  const database = admin.database();
  const donationsRef = database.ref('donations');

  const newDonationRef = donationsRef.push();
  newDonationRef.set({
    email: email,
    amount: amount
  })
  .then(() => {
    console.log('Donation data stored in Firebase');
    sendReceiptEmail(email, amount); // Send receipt email after storing the data
  })
  .catch((error) => {
    console.error('Error storing donation data in Firebase:', error);
  });
}

// Example usage
const email = 'user@example.com';
const donationAmount = 1000;

storeDonationData(email, donationAmount);