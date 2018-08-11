import  firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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



  export const signUp = async (email, password) => {
    try{

      //check if email exists before passing to firebase, send the rest data to database
      let userSign = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userSign;

    }catch(error){
        console.error(error);
        return error;
    }
  };

  export const doSignInWithEmailAndPassword =  (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email.trim() , password)
};

export const writeData = (title, data) => {
  firebase.database().ref(title).set({
    data
  });
};

export const postData = (dataToPost, title) => {
    const url = `https://assesment-tool.firebaseio.com/${title}.json`;
    const data = {
        method: 'POST',
        body: JSON.stringify(dataToPost),
        };
    try{
        axios.post(url , data)
        .then(response => response.status)
    }catch(error){
        console.error(error);
        return error;
    }
};


export const getData = async (title) => {
    const url = `https://assesment-tool.firebaseio.com/${title}.json`;
    //const myInit = { method: 'GET', type : 'application/json'};
    try{
        let fetchedData = await axios.get(url).then(response =>  response.data );
        return fetchedData;
    }catch(error){
        console.error(error);
        return error;
    }
}

export const loginWithGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const providerWithRepo = provider.addScope('repo');
    // get all allowed emails
    const allowedEmails =  await getData('allowedEmails');
    const authDetails = await firebase.auth().signInWithPopup(providerWithRepo).then(function(result) {
      // check user email allowed to signIn
      const userAllowed = Object.values(allowedEmails).includes(result.user.email);
      if (userAllowed) {
        const user = result.user;
        const profile = result.additionalUserInfo.profile;
        return {user: user, repo: profile};
      }
      else return false
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      return {errorCode, errorMessage, email, credential}
    });
  return authDetails;
}


export const signOut = async () => {
    try{
        const signOutData = await firebase.auth().signOut().then(function() {});
        return signOutData;
    }catch(error){
        console.error(error);
        return error;
    }
}

export const doSendPasswordResetEmail = (email) => {
    const auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
}

export const linkloginAccounts = async (email, password) => {
    try{
        let credential = await firebase.auth.EmailAuthProvider.credential(email, password);
        const user = await firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then((usercred)=> {
                        let user = usercred.user;
                        console.log("Account linking success", user);
                    })
        return user;
    }catch(error){
        console.error(error);
        return error;
    }
}
