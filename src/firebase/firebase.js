import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDYMOnVsZ5rWpaoL3BLJ1WZApPBbvQf-zY",
  authDomain: "expensify-f7143.firebaseapp.com",
  databaseURL: "https://expensify-f7143.firebaseio.com",
  projectId: "expensify-f7143",
  storageBucket: "expensify-f7143.appspot.com",
  messagingSenderId: "804131330408"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Daniel Ferreira',
  age: 25,
  isSingle: true,
  location: {
    city: 'Ubirata',
    country: 'Brazil'
  }
});

database.ref('attributes').set({
  height: 177,
  weight: 88
})