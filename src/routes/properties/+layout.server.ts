import type { LayoutServerLoad } from './$types';
import { dbContacts } from '$lib/firebase/firebase.js';
import { redirect } from '@sveltejs/kit';


console.log(dbContacts, "contacts desde layout server");
// console.log(auth);

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
  const accessToken = cookies.get('state')
  if(accessToken) {
    const response = await fetch('api/easybroker/properties?page=1&limit=20');
    // const propiedades: object[] =  props
    const fbContacts =  dbContacts
    const properties = await response.json()
    const userDisplay = cookies.get('useremail')

    if(properties || fbContacts) {      
        return { 
          properties,
          // propiedades,
          fbContacts,
          userDisplay
        }
      } else {
        return {
          properties: null,
          contacts: null,
          userDisplay: null
        }
      }
  } else {
    throw redirect(307, '/api/auth/login')
  }
};
