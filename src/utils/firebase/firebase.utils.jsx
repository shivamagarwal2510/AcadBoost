import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc // sets doc data
}from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJsv0O_4VXXkF2yMbzsDpiHQpzsXYr5rY",
  authDomain: "acadboost-db.firebaseapp.com",
  projectId: "acadboost-db",
  storageBucket: "acadboost-db.appspot.com",
  messagingSenderId: "690733356991",
  appId: "1:690733356991:web:2177ef2bbb2846c182f30a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const singnInWithGooglePopup = ()=>signInWithPopup(auth, provider);
export const singnInWithGoogleRedirect = ()=>signInWithRedirect(auth, provider);

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const db  = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=>{
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
}

export const signOutUser = async ()=> signOut(auth);