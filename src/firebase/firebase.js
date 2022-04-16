import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBEPK1Ldusye6jvoXyc73NTntxb1OJfUEk",
    authDomain: "thammyviensks-1c5e1.firebaseapp.com",
    projectId: "thammyviensks-1c5e1",
    storageBucket: "thammyviensks-1c5e1.appspot.com",
    messagingSenderId: "656877359722",
    appId: "1:656877359722:web:9d481c1423dbb327ab7013",
    measurementId: "G-6W57D6BN61"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };