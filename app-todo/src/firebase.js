import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDt6umj4GRi4PDjvFSRhQXL_AGWTxg3Znc",
    authDomain: "creat-b33cf.firebaseapp.com",
    databaseURL: "https://creat-b33cf.firebaseio.com",
    projectId: "creat-b33cf",
    storageBucket: "creat-b33cf.appspot.com",
    messagingSenderId: "441801375496"
};
firebase.initializeApp(config);
export const database = firebase.database();