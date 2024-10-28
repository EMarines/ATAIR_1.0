import { db } from './firebase'; // Import your Firestore instance
import { collection, getDocs } from 'firebase/firestore'; 

export async function getContacts() {
  try {
    const contactsCollection = collection(db, 'contacts'); // Replace 'contacts' with your collection name
    const contactsSnapshot = await getDocs(contactsCollection);
    const contactsData = contactsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return contactsData;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return []; // Return an empty array in case of an error
  }
}

export async function getBinnacle() {
  try {
    const contactsCollection = collection(db, 'binnacles'); // Replace 'contacts' with your collection name
    const contactsSnapshot = await getDocs(contactsCollection);
    const contactsData = contactsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return contactsData;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return []; // Return an empty array in case of an error
  }
}