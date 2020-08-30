import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmyxT3G7H1b28nbw_EEf85UISppM_WVq0",
    authDomain: "fb-clone-fabc5.firebaseapp.com",
    databaseURL: "https://fb-clone-fabc5.firebaseio.com",
    projectId: "fb-clone-fabc5",
    storageBucket: "fb-clone-fabc5.appspot.com",
    messagingSenderId: "193977449128",
    appId: "1:193977449128:web:eb35818a15340eb5dd609d",
    measurementId: "G-TGC87VPP3X",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;