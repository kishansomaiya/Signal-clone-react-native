import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsn5J11oZ9toTsC-pH8_8Ebj7DmXIVhSY",
    authDomain: "signal-clone-f5049.firebaseapp.com",
    projectId: "signal-clone-f5049",
    storageBucket: "signal-clone-f5049.appspot.com",
    messagingSenderId: "394476807814",
    appId: "1:394476807814:web:62a6dfd6a805aae5b99307"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
