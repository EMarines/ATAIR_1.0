import { getContacts } from '$lib/firebase/fbContacts.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const contacts = await getContacts();
  const contact = contacts.find(contact => contact.id === params.id);

  console.log(contact, params, "contact desde fbContact/[id]/+page.server.ts");
  return { contact };
} 