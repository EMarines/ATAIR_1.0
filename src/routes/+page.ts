import type { PageLoad } from './$types';

export const load: PageLoad = async( { fetch }) => {

    const res1 =  await fetch('/api/easybroker/properties');
    const res2 = await fetch	('/api/easybroker/contact_requests');

    const properties = await res1.json();
    const contacts = await res2.json();

  return {
    properties,
    contacts,
  } 
}
