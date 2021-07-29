import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB_w19fMbPlBUyFYjoRjVbCfZfZYLUyCio",
    authDomain: "discord-clone-29408.firebaseapp.com",
    databaseURL: "https://discord-clone-29408.firebaseio.com",
    projectId: "discord-clone-29408",
    storageBucket: "discord-clone-29408.appspot.com",
    messagingSenderId: "160785180738",
    appId: "1:160785180738:web:64795bfeeaae9de8cba5db",
    measurementId: "G-2JDYJM24LV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
 
const db =firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider}
export default db;
