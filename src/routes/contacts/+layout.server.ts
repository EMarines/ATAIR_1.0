import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit'
// import { dbProperties, dbContacts } from '$lib/firebase/firebase.js';


export const load: LayoutServerLoad = async ({  cookies, fetch: eventFetch }) => {
  const accessToken = cookies.get('state')
  if(accessToken) {
    try {
      const response = await eventFetch('/api/firebase');
      // const propiedades =  dbProperties;
      // const contactos =  dbContacts;
      const fbContacts = await response.json()
      console.log(await response.json(), "fbContacts---------------------");
      // console.log(fbContacts, "contacts desde layout server");
      const userDisplay = cookies.get('useremail')
      
      if(response.status === 200) {      
        return { 
          // contactos,
          // propiedades,
          fbContacts,
          userDisplay
        }
      } else {
        return {
          properties: null,
          // contacts: null,
          userDisplay: null
        }
      }
    } catch (error) {
      
      console.log(error, "error en layout server");
    }
    

   
    } 
  else {
    throw redirect(307, '/api/auth/login')
  }
  };