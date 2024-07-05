import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5TZ64lDkYLMSYRqropSrKMHWodvnfNtw",
  authDomain: "blogproject-601d8.firebaseapp.com",
  projectId: "blogproject-601d8",
  storageBucket: "blogproject-601d8.appspot.com",
  messagingSenderId: "156399568730",
  appId: "1:156399568730:web:1561a697224cded293d563",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
