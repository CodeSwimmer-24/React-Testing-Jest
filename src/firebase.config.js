import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCeIfL3PlmgNn32nrs3q-Ao72dpVSqmxP4",
    authDomain: "ice-point.firebaseapp.com",
    databaseURL: "https://ice-point-default-rtdb.firebaseio.com",
    projectId: "ice-point",
    storageBucket: "ice-point.appspot.com",
    messagingSenderId: "421126151978",
    appId: "1:421126151978:web:c02983fd1f429ed3140853",
    measurementId: "G-P9F0M7RTHY"
  };
  const app = getApp.length >  0 ? getApp : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

  export {app, firestore, storage};