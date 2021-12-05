import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyB_71g2fuRiZprEnb_GYfvf8e93o0DQGQE",
  authDomain: "techselector-f01de.firebaseapp.com",
  databaseURL: "https://techselector-f01de-default-rtdb.firebaseio.com",
  projectId: "techselector-f01de",
  storageBucket: "techselector-f01de.appspot.com",
  messagingSenderId: "966868984701",
  appId: "1:966868984701:web:fbdd768ce7bed80148e214",
  measurementId: "G-P3QFC4PC4V"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data
seedDatabase(firebase);
export { firebase };
