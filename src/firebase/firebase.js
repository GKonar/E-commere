
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

// Firebase config 
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// access to all database features
const database = firebase.database();
const storage = firebase.storage();

// get download_url for the image
// storage.ref('images/basket.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Handmade basket',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '25$'
//     });
//   });
// storage.ref('images/beads.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Colorful beads',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '50$'
//     });
//   });
// storage.ref('images/bee_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden bee',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '15$'
//     });
//   });
// storage.ref('images/cat_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden cat',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '15$'
//     });
//   });
// storage.ref('images/cow_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden cow',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '17$'
//     });
//   });
// storage.ref('images/crock_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden crock',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '19$'
//     });
//   });
// storage.ref('images/dino_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden dinosaur',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '21$'
//     });
//   });
// storage.ref('images/dinosaurs.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden dinosaurs beginner set',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '12$'
//     });
//   });
// storage.ref('images/dinosaurs_2.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden dinosaurs advanced set',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '10$'
//     });
//   });


// storage.ref('images/elephant_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden elephant',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '43$'
//     });
//   });
// storage.ref('images/fish_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Beautiful wooden fish',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '26$'
//     });
//   });
// storage.ref('images/ladybird_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden ladybird',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '12$'
//     });
//   });
// storage.ref('images/mask.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Hand painted mask',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '17$'
//     });
//   });
// storage.ref('images/octopus_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Smiling octopus',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '18$'
//     });
//   });

// storage.ref('images/purse.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Custom purse',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '112$'
//     });
//   });
// storage.ref('images/sweater.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Scandinavian Sweater',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '212$'
//     });
//   });
// storage.ref('images/trumpet_man.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Handmade figure',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '46$'
//     });
//   });
// storage.ref('images/wallet.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Leather wallet',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '123$'
//     });
//   });
// storage.ref('images/whale_toys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Happy Whale',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '48$'
//     });
//   });

// storage.ref('images/woodenshelves.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Wooden shelves',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '160$'
//     });
//   });
// storage.ref('images/zootoys.jpeg').getDownloadURL()
//   .then((url) => {
//     database.ref('products').push({
//       name: 'Zoo set',
//       imageUrl: url,
//       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laborum odio tempora eveniet quasi dolore placeat dolorum amet dicta accusantium, fuga ex! Molestiae quae voluptate fugiat delectus, deserunt nobis eligendi.',
//       price: '60$'
//     });
//   });

// DATA schape:
// product_type : {
//   name,
//   imageUrl,
//   description,
//   id: key, // przy snapshocie
//   price 
// }
