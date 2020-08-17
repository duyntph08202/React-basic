import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAm34_SNFXohyqgQw-Uk17F5czB5hn-_hM",
    authDomain: "asm-react-e708b.firebaseapp.com",
    databaseURL: "https://asm-react-e708b.firebaseio.com",
    projectId: "asm-react-e708b",
    storageBucket: "asm-react-e708b.appspot.com",
    messagingSenderId: "389527762686",
    appId: "1:389527762686:web:afc75f9ce02d31cd7817af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase