import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC342n54P4KTpi8caWHzAw3nSSFrR98_4A",
  authDomain: "zelisline-phone.firebaseapp.com",
  projectId: "zelisline-phone",
  storageBucket: "zelisline-phone.firebasestorage.app",
  messagingSenderId: "319650308758",
  appId: "1:319650308758:web:3c8eeffe940bda087858b7",
  measurementId: "G-N1P9R7ZVD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 