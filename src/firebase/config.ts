import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBS_JWGy5eIIZwSPe2Vne-KJTvabSN0mPY",
  authDomain: "t-p-u-934c1.firebaseapp.com",
  projectId: "t-p-u-934c1",
  storageBucket: "t-p-u-934c1.appspot.com",
  messagingSenderId: "288859648408",
  appId: "1:288859648408:web:2fa88a5cbc21ccb2897bed",
  measurementId: "G-P571WHZP3Q"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
