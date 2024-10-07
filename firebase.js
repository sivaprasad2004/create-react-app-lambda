
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';  
import { getAnalytics } from 'firebase/analytics';  


const firebaseConfig = {
    apiKey: "AIzaSyDPPWiGlDgLLUHmeEwrilPLuhryufvrSSU",
    authDomain: "project-aa209.firebaseapp.com",
    projectId: "project-aa209",
    storageBucket: "project-aa209.appspot.com",
    messagingSenderId: "979644191873",
    appId: "1:979644191873:web:a8f60cf8dce3bfe2a9a980",
    measurementId: "G-KPPXJNQ2G6"
};


let db;
let storage;
let auth;
let analytics;

try {
   
    const app = initializeApp(firebaseConfig);

   
    db = getFirestore(app);
    storage = getStorage(app);
    auth = getAuth(app);  
    analytics = getAnalytics(app);  

    console.log("Firebase initialized successfully!");
} catch (error) {
    console.error("Firebase initialization error: ", error);

   
    if (error.code === "auth/invalid-api-key") {
        console.error("Invalid API key provided.");
    } else if (error.code === "auth/network-request-failed") {
        console.error("Network error: Check your internet connection.");
    }
    
}


export { db, storage, auth, analytics };
