import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

// replace firebase v8 with v9
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAxB8GRSk64vvcp6YEtojgpVj3TjoXCOwo",
    authDomain: "immertec-c5ec7.firebaseapp.com",
    projectId: "immertec-c5ec7",
    storageBucket: "immertec-c5ec7.appspot.com",
    messagingSenderId: "716791695680",
    appId: "1:716791695680:web:db611db90951473782d2a5"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

export const app = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();