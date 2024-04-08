// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  // Your FireStoe Key
  


apiKey: "AIzaSyANmxArQkB_RK90tXHSJthhCB_wttCwrGs",
authDomain: "you-build-45ca6.firebaseapp.com",
projectId: "you-build-45ca6",
storageBucket: "you-build-45ca6.appspot.com",
messagingSenderId: "768405751671",
appId: "1:768405751671:web:5d8102dcdf0638a16c8372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = initializeAuth(app,{    // diasble the aSync Waring
  persistence: getReactNativePersistence(AsyncStorage)
});

export {db, auth};
