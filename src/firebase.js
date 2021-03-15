import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDX8ihxWWox3Qz6hqG_Oo-5E-3-oQqnGT8",
    authDomain: "netflix-build-8f911.firebaseapp.com",
    projectId: "netflix-build-8f911",
    storageBucket: "netflix-build-8f911.appspot.com",
    messagingSenderId: "445075834793",
    appId: "1:445075834793:web:21a00d92378017537826b8"
  };  

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth };
  export default db ;