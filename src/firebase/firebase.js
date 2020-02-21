
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

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

export default database;



// ***** USERS MANUAL *****

// ** PUSH ITEMS TO FIREBASE
// toys.forEach((product) => {
//   database.ref('products/toys').push({
//     name: product.name,
//     description: product.description,
//     price: product.price,
//     images: product.images,
//     inStock: product.inStock
//   })
// })

// ** UPDATE ELEMENTS 
// database.ref('shopItems/-M0U43_MGWd8v3bdb8ud').update({
//   image: [purse, woodenshelves, mask, beads]
// });

// ** READ ITEMS FROM FIREBASE
// database.ref('products')
//   .once('value')
//   .then((snapshot) => {
//     const products = [];
//     snapshot.forEach(product => {
//       products.push(product.val());
//     })
//     console.log('Products array: ', products);
//   });

// ** SET SUBSCRIPTION TO FIREBASE
// database.ref('products').on('value', snapshot => {
//   const products = [];
//   snapshot.forEach(product => {
//     products.push(product.val());
//   })
//   console.log(products);
// })
// database.ref('shopItems').on('value', snapshot => {
//   const shopItems = [];
//   snapshot.forEach(item => {
//     shopItems.push(item.val());
//   })
//   console.log(shopItems);
// })