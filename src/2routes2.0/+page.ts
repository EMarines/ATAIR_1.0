import type { PageLoad } from './$types';


export const load: PageLoad = async( { fetch }) => {

  // const userid  = cookies.get('userid')
 const newProperties =  fetch('/api/easybroker/properties?page=1&limit=5');
 const newContacts =  fetch('/api/easybroker/contact_requests?page=1&limit=5');
  // const userDisplay = cookies.get('userDisplay')

//  const userCurrent = userid

 const [newPropertiesRes, newContactsRes] = await Promise.all([ newProperties, newContacts ])
//  const [newPropertiesRes] = await Promise.all([ newProperties ])

//  console.log( await newPropertiesRes.json(), "newPropertiesRes desde +page.ts")
//  console.log( await newContactsRes.json(), "newContactsRes desde +page.ts")

 return {
  newProperties: newPropertiesRes.ok ?  newPropertiesRes.json() : undefined,
  newContacts: newContactsRes.ok ? newContactsRes.json() : undefined,
 }
}

