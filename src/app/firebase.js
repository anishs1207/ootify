import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvYpCEQ2_k1yhfw8M0FHGCui2hjrGFqT8",
  authDomain: "ootify-f4334.firebaseapp.com",
  projectId: "ootify-f4334",
  storageBucket: "ootify-f4334.firebasestorage.app",
  messagingSenderId: "34566436940",
  appId: "1:34566436940:web:8ac5ddd00abecf54921ce9",
  measurementId: "G-N4JENJZK4R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };