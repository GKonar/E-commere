
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

// import beads from '../assets/images/beads.jpeg';
// import mask from '../assets/images/mask.jpeg';
// import purse from '../assets/images/purse.jpeg';
// // import sweater from '../assets/images/sweater.jpeg';
// import woodenshelves from '../assets/images/woodenshelves.jpeg';
// import trumpet_man from '../assets/images/trumpet_man.jpeg';
// // import octopus_toys from './assets/images/octopus_toys.jpeg';
// import wallet from '../assets/images/wallet.jpeg';
// import zootoys from '../assets/images/zootoys.jpeg';

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
// shopItems.forEach((item) => {
//   database.ref('shopItems').push({
//     name: item.name,
//     description: item.description,
//     price: item.price,
//     image: item.image,
//     inStock: item.inStock
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


// const shopItems = [

//   // FOR HIM:
//   {
//     name: 'Wallet',
//     price: '140$',
//     image: wallet,
//     description: 'Wallet Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
//     inStock: true
//   },
//   {
//     name: 'Purse',
//     price: '100$',
//     image: purse,
//     description: 'Sweater Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
//     inStock: true
//   },
//   {
//     name: 'Trumpet man',
//     price: '35$',
//     image: trumpet_man,
//     description: 'This fancy cap Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
//     inStock: true
//   },
//   {
//     name: 'Custom mask',
//     price: '25$',
//     image: mask,
//     description: 'Socks Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
//     inStock: true
//   },
//   {
//     name: 'Beads',
//     price: '35$',
//     image: beads,
//     description: 'Gloves Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
//     inStock: true
//   },
//   {
//     name: 'Wooden shelves',
//     price: '40$',
//     image: woodenshelves,
//     description: 'T-shirt Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
//     inStock: true
//   },
// ]