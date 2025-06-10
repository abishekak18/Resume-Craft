import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYluuXGTQ1fUvvojUQBPyYu12jMjrKuuY",
  authDomain: "resume-builder-94200.firebaseapp.com",
  projectId: "resume-builder-94200",
  storageBucket: "resume-builder-94200.firebasestorage.app",
  messagingSenderId: "401631750355",
  appId: "1:401631750355:web:62e3236928f9b4ed474c26"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
