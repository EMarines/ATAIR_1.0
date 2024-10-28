import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export async function getProperties() {
  const querySnapshot = await getDocs(collection(db, 'properties'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}