import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBpvOKmq7zuKMrlIaluYdKHT5gFPikVY9A",
    authDomain: "story-hub-bf91c.firebaseapp.com",
    databaseURL: "https://story-hub-bf91c.firebaseio.com",
    projectId: "story-hub-bf91c",
    storageBucket: "story-hub-bf91c.appspot.com",
    messagingSenderId: "144011763726",
    appId: "1:144011763726:web:df25cdff36e403c8dedc5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore(); 