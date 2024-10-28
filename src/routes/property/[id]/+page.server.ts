import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getContacts, getBinnacle } from '$lib/firebase/fbContacts';

export const load: PageServerLoad = async({ params, fetch }) => {

  const response =await fetch(`/api/easybroker/properties/${params.id}`)
  const property = await response.json()
	const fbContacts = await getContacts();
	const currBinnList = await getBinnacle();

  let color = null;

  if (property.property_images.length > 0) {
		const colorRes = await fetch(
			`/api/average-color?${new URLSearchParams({
				image: property.property_images[0].url
			}).toString()}`
		);
		if (colorRes.ok) {
			color = (await colorRes.json()).color;
		}
	}

  if (response.ok) {
		return {
			property,
      color,
			fbContacts,
			currBinnList
		};
	}
  throw redirect(303, '/properties')

};