import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyA4_rOaHzTzSj1YkYoKrz5-XwXWMX18Y4U",
  authDomain: "thermos-5c4e6.firebaseapp.com",
  databaseURL: "https://thermos-5c4e6-default-rtdb.firebaseio.com",
  projectId: "thermos-5c4e6",
  storageBucket: "thermos-5c4e6.appspot.com",
  messagingSenderId: "764285553443",
  appId: "1:764285553443:web:849ec3741e43b1f3245a96",
  measurementId: "G-2CB3JPZQCN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app.database().ref();