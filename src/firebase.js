// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // ✅ Missing import

// Firebase config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDgQMTMqXyhq3svlulD1c3s3AJoDg62Vo4",
    authDomain: "portfolio-e9e41.firebaseapp.com",
    projectId: "portfolio-e9e41",
    storageBucket: "portfolio-e9e41.appspot.com", // ✅ corrected bucket (remove `.app`)
    messagingSenderId: "463820392788",
    appId: "1:463820392788:web:88546f943aec5933daa0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
