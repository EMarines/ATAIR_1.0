import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


// Proyecto Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCkuw82zTqtiPDp3eS2qwGr8UUQFDBBglM",
  authDomain: "curso-svelte-58c5d.firebaseapp.com",
  projectId: "curso-svelte-58c5d",
  storageBucket: "curso-svelte-58c5d.appspot.com",
  messagingSenderId: "1067367490239",
  appId: "1:1067367490239:web:8a8aeae384fa8319515c0a"
};


// // Match Home Firebase Config
// const firebaseConfig = {
//   apiKey: "AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",
//   authDomain: "match-home-7d1f9.firebaseapp.com",
//   databaseURL: "https://match-home-7d1f9-default-rtdb.firebaseio.com",
//   projectId: "match-home-7d1f9",
//   storageBucket: "match-home-7d1f9.appspot.com",
//   messagingSenderId: "747751099607",
//   appId: "1:747751099607:web:29d1e5beda87c847dfb492"
// };




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


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

// export async function getContacts() {
//   const querySnapshot = await getDocs(collection(db, 'contacts'));
//   console.log(querySnapshot);
//   return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// }

// loadProperties();
// loadContacts();


// export {
//   dbProperties,
//   dbContacts
// };
