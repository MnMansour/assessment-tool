import  firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

import axios from 'axios';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID ,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
};
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const auth = firebase.auth();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const storage = firebase.storage().ref();

export const linkloginAccounts = async (email, password) => {
  try {
    let credential = await firebase.auth.EmailAuthProvider.credential(email, password);
    return await firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential);
  }catch(error){
    console.error(error);
    return error;
  }
}
