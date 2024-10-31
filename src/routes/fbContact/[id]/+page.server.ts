import { getContacts, getBinnacle } from '$lib/firebase/fbContacts.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const contacts = await getContacts();
  const contact = contacts.find(contact => contact.id === params.id);
  // const contactTelephon = contact?.telephon;

  const binnacle = await getBinnacle();

  // const binnacle = totalBinnacle.filter(binn => binn.to === contactTelephon);


  

  return { 
    contact,
    binnacle
  };
} 