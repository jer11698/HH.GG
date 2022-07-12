import firebase from "firebase/app";
import "firebase/database";

/*var firebaseConfig = {
  apiKey: "AIzaSyCOOs4sh8y1UDaOyaWdmk4e3O0EttFRVfk",
  authDomain: "web-design-project-28643.firebaseapp.com",
  projectId: "web-design-project-28643",
  storageBucket: "web-design-project-28643.appspot.com",
  messagingSenderId: "903569791597",
  appId: "1:903569791597:web:6f3d97880bbab83e9f7d64",
  measurementId: "G-D4KLLG9FLQ"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyD2E6bwOHZI8yCqZ1lR7Fq_dB20xDW-NC0",
  authDomain: "hhgg-data.firebaseapp.com",
  databaseURL: "https://hhgg-data-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hhgg-data",
  storageBucket: "hhgg-data.appspot.com",
  messagingSenderId: "448917902495",
  appId: "1:448917902495:web:3d31b33f4c35857937beaa",
  measurementId: "G-0FYPSQBZPN"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .database();
