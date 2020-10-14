import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMaRjXpa6cilx17ahv-53eXJ5l9NfHKqI",
  authDomain: "clone-83616.firebaseapp.com",
  databaseURL: "https://clone-83616.firebaseio.com",
  projectId: "clone-83616",
  storageBucket: "clone-83616.appspot.com",
  messagingSenderId: "748305419788",
  appId: "1:748305419788:web:d5493ef793d8399e8a2829"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }; 
