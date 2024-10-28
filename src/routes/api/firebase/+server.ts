// import { initializeApp } from "firebase/app";
// import { getFirestore, getDocs, collection } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyCkuw82zTqtiPDp3eS2qwGr8UUQFDBBglM",
//   authDomain: "curso-svelte-58c5d.firebaseapp.com",
//   projectId: "curso-svelte-58c5d",
//   storageBucket: "curso-svelte-58c5d.appspot.com",
//   messagingSenderId: "1067367490239",
//   appId: "1:1067367490239:web:8a8aeae384fa8319515c0a"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);


// let dbProperties = [];
// let dbContacts = [];

// const loadProperties = async () => {
//   const response = await getDocs(collection(db, "properties"));
//   dbProperties = response.docs.map((item) => {
//     return {... item.data(), id: item.id};
//   });
// };

// const loadContacts = async () => {
//   const response = await getDocs(collection(db, "contacts"));
//   dbContacts = response.docs.map((item) => {
//     return {... item.data(), id: item.id};
//   });
// };

// loadProperties();
// loadContacts();


// export {
//   dbProperties,
//   dbContacts,
//   auth
// };





