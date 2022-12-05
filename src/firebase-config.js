import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOiT8rRB8QszDnGz6MMjrzE8DnJqiN3kA",
    authDomain: "bookstore-e2f1b.firebaseapp.com",
    projectId: "bookstore-e2f1b",
    storageBucket: "bookstore-e2f1b.appspot.com",
    messagingSenderId: "605000112364",
    appId: "1:605000112364:web:8bda9bca5b38da5b42edc9",
    measurementId: "G-2FHKWE8RRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const storage = getStorage(app);