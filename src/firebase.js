import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmnW9W_gHuiEEsPw3XI-9SHwrVx5nnh9Y",
    authDomain: "shine-dc466.firebaseapp.com",
    projectId: "shine-dc466",
    storageBucket: "shine-dc466.appspot.com",
    messagingSenderId: "379613040309",
    appId: "1:379613040309:web:dc367838d998b79f70b8fc"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

export {firebase, auth};