import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAyncq5CEsRETBXwUjrieHeBPfg3YguF9A",
    authDomain: "my-slack-ab23c.firebaseapp.com",
    projectId: "my-slack-ab23c",
    storageBucket: "my-slack-ab23c.appspot.com",
    messagingSenderId: "1000241712859",
    appId: "1:1000241712859:web:0a94ae878284bd1f2f86fe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };