
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZfbl0lbydg7VzL--C5u9vZSPOL3-kByo",
    authDomain: "app-turnos-49479.firebaseapp.com",
    projectId: "app-turnos-49479",
    storageBucket: "app-turnos-49479.appspot.com",
    messagingSenderId: "53417789850",
    appId: "1:53417789850:web:987f8f970bd130b89a1223",

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getFirestore(app);




