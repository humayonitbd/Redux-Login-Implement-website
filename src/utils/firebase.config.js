import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBx889HWnONaipKndTamWHJbR12DfuOL08",
  authDomain: "reduxloginsetup.firebaseapp.com",
  projectId: "reduxloginsetup",
  storageBucket: "reduxloginsetup.appspot.com",
  messagingSenderId: "98098644141",
  appId: "1:98098644141:web:5c49f11a872bcc76003224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
