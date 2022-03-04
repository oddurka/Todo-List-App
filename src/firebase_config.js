import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyALJo0p99gDeibycOvI8yc3d3q0w4k8OFI",
    authDomain: "todolist-2762f.firebaseapp.com",
    projectId: "todolist-2762f",
    storageBucket: "todolist-2762f.appspot.com",
    messagingSenderId: "1060785627914",
    appId: "1:1060785627914:web:beffdd54208eaffdda90f3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };