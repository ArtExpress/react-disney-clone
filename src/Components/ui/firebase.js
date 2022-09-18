import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDzHUzveMCiNx554Awecl5nHrRBrp5wlsM",
    authDomain: "react-disney-clone-5c34e.firebaseapp.com",
    projectId: "react-disney-clone-5c34e",
    storageBucket: "react-disney-clone-5c34e.appspot.com",
    messagingSenderId: "1092124877600",
    appId: "1:1092124877600:web:7c7f23bfa816aca7dded45"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export { db, auth, provider, storage }

  