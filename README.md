
# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need React.js and Node.js installed on your computer.

2) You will need an account on [Firebase](https://firebase.com) and you should create a project on your firebase account.

3) Then From your terminal, you should do the following:

4) Install dependencies
#### npm install

5) Then you will need to create the ./src/lib/firebase.prod.js file in your local repo, The content of firebase.prod.js file will be like the following:

```js
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };

```

6) Then you should use your firebase project information to fill the config information in firebase.prod.js file.

```js
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

```
7) Run the app
#### npm start
```

9) Now you can see the project in your browser.
