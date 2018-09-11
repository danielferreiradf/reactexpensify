import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBRASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBRASE_MESSSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses)
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

// database.ref('expenses').push({
//   description: 'expense 1',
//   note: 'expense 1',
//   amount: 100,
//   createdAt: 0
// })
// database.ref('expenses').push({
//   description: 'expense 2',
//   note: 'expense 2',
//   amount: 200,
//   createdAt: 0
// })
// database.ref('expenses').push({
//   description: 'expense 3',
//   note: 'expense 3',
//   amount: 300,
//   createdAt: 0
// })



// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// })

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '84545',
//   title: 'Second note!',
//   body: 'This is my second note'
// }]

// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e) => {
//   console.log('Error with data fetching', e)
// });
// setTimeout(() => {
//   database.ref('job/title').set('Manager')
// }, 3000);
// setTimeout(() => {
//   database.ref('job/company').set('Google')
// }, 3000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })

// database.ref().set({
//   name: 'Daniel Ferreira',
//   age: 25,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Ubirata',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((err) => {
//   console.log('This failed.', err)
// })

// database.ref('attributes').set({
//   height: 177,
//   weight: 88
// }).then(() => {
//   console.log('Data is saved')
// }).catch(() => {
//   console.log('Failed to save data')
// })

// database.ref().update({
//   'stressLevel': 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// })

// database.ref().remove()
//   .then(() => {
//     console.log('Data removed');
//   }).catch(() => {
//     console.log('Did not remove data');
//   })