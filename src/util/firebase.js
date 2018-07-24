import * as firebase from 'firebase';
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


  export const signUp = async (email, password) => {
    try{
        if(password<8){
            alert('Password must be 8 or more characters')
            return;
        }else{
            //check if email exists before passing to firebase, send the rest data to database 
            let userSign = await firebase.auth().createUserWithEmailAndPassword(email, password);
            return userSign;
        }
    }catch(error){
        console.error(error);
        return error;
    }
  };

  export const signIn = async (email, password) => {
      console.log(firebaseConfig);
      
    try{
        let userDetails = await firebase.auth().signInWithEmailAndPassword(email.trim() , password)
        .then(user => user)
        return userDetails;
    }catch(error){
        console.error(error);
        return error;
    }
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
        let fetchedData = await axios.get(url).then(response => response.data);
        return fetchedData;
    }catch(error){
        console.error(error);
        return error;
    }
}

export const loginWithGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const providerWithRepo = provider.addScope('repo');
    const authDetails = await firebase.auth().signInWithPopup(providerWithRepo).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const profile = result.additionalUserInfo.profile;
        return {token: token, user: user, repo: profile};
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

export const sendPasswordResetEmail = (email) => {
    const auth = firebase.auth();
    const emailAddress = email;
    auth.sendPasswordResetEmail(emailAddress).then(function(response) {
        console.log(response);
        return response;
    }).catch(function(error) {
        console.error(error);
    });
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