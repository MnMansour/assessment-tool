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