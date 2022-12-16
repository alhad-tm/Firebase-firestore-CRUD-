import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDl3xnQWSINJq4QwsE11tlZ_yya7C8B_rI",
    authDomain: "fir-db2cf.firebaseapp.com",
    projectId: "fir-db2cf",
    storageBucket: "fir-db2cf.appspot.com",
    messagingSenderId: "841006103731",
    appId: "1:841006103731:web:fdb8b9e40557ef140e04c6",
    measurementId: "G-Y24G73TKNN"
  };

  
export const Firebase= firebase.initializeApp(firebaseConfig)