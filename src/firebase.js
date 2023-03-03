import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsEHK6-u_B5RNVNZhQF7xaB0pIboDK4xg",
  authDomain: "line-clone-chatapp.firebaseapp.com",
  projectId: "line-clone-chatapp",
  storageBucket: "line-clone-chatapp.appspot.com",
  messagingSenderId: "184803599318",
  appId: "1:184803599318:web:37a1e803df2960c20cba77"
})

export const db = firebaseApp.firestore()
export const auth = firebase.auth()

