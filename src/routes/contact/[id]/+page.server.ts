import type { PageServerLoad } from './$types';
// import { redirect } from '@sveltejs/kit';
// import { dbContacts } from '$lib/firebase/firebase.js';

export const load: PageServerLoad = async({ params, fetch }) => {
  const response = await fetch(`/api/firebase/dbContacts/${params.id}`);

  const currCont =  await response.json()

  
  console.log( currCont, "desde pasge.svelte");


  return{
    currCont
  }
}
