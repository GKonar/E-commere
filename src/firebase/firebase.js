
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

// import products from './content';

//**  Firebase config 
const firebaseConfig = {
  apiKey: "AIzaSyAnecAp8bG-KwhlHm_a0AaQFaGLkhiZakc",
  authDomain: "handcrafted-831b3.firebaseapp.com",
  databaseURL: "https://handcrafted-831b3.firebaseio.com",
  projectId: "handcrafted-831b3",
  storageBucket: "handcrafted-831b3.appspot.com",
  messagingSenderId: "656618562449",
  appId: "1:656618562449:web:7fb93ae31de2fb7f62b030",
  measurementId: "G-EXD6JV75Z6"
};
//**  Initialize Firebase
firebase.initializeApp(firebaseConfig);

//**  access to all database features
const database = firebase.database();
// const storage = firebase.storage();

//** set products in firebase
// products.forEach((product) => {
//   database.ref('products').push({
//     name: product.name,
//     description: product.description,
//     price: product.price
//   })
// })

// database.ref('products')
//   .once('value')
//   .then((snapshot) => {
//     const products = [];
//     snapshot.forEach(product => {
//       products.push(product.val());
//     })
//     console.log('Products array: ', products);
//   });

// ** on value change 
database.ref('products').on('value', snapshot => {
  const products = [];
  snapshot.forEach(product => {
    products.push(product.val());
  })
  console.log(products);
})



