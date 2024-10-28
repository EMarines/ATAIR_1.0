import { getContacts } from '$lib/firebase/fbContacts.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const contacts = await getContacts();
  return { contacts };
}

  