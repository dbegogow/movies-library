import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDAP7s9vanyyx-InZqGVUODveqYwn83jY",
    authDomain: "movies-3dc8a.firebaseapp.com",
    databaseURL: "https://movies-3dc8a-default-rtdb.firebaseio.com",
    projectId: "movies-3dc8a",
    storageBucket: "movies-3dc8a.appspot.com",
    messagingSenderId: "578959934985",
    appId: "1:578959934985:web:fb6f9d391aad4f54be5ad8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();