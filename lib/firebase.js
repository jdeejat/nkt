// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBznmyMTqdqP2koqEtqkfR2wEhxl4PzC7k',
  authDomain: 'nkt-firebaseapp.firebaseapp.com',
  projectId: 'nkt-firebaseapp',
  storageBucket: 'nkt-firebaseapp.appspot.com',
  messagingSenderId: '596851014901',
  appId: '1:596851014901:web:4e7bc97c4f3b8c7e7419bc',
  measurementId: 'G-FHPLSTEK6V',
};

// Initialize Firebase
// need if becaue next may try to initialize twice
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.email');

export { db, auth, storage, provider };