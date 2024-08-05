import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC9xbSZLMl0XSlJLFnsmTLGyCABwQiKu78",

  authDomain: "inventory-management-ffaff.firebaseapp.com",

  projectId: "inventory-management-ffaff",

  storageBucket: "inventory-management-ffaff.appspot.com",

  messagingSenderId: "856157403108",

  appId: "1:856157403108:web:1dd5e8a6e5c2206565f9f1"

};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };