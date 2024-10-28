import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/easybroker/contact_requests');
  const response2 = await fetch('/api/easybroker/properties')
  // const response3 = await fetch('/api/firebase/dbContacts')

  const contacts = await response.json();
  const properties = await response2.json();
  // const contactos = await response3.json();
  // const contactos = await response3.json();

  // console.log(contactos, "contacts desde page.ts");

  return{
    contacts,
    properties,
    // dbFB
  }	
	
};