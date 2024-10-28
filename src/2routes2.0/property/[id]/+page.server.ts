import type { PageServerLoad } from './$types';
import { EASYBORKER_APP_CLIENT_ID } from '$env/static/private'
import { redirect } from '@sveltejs/kit';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Authorization':  EASYBORKER_APP_CLIENT_ID
  }
};

export const load: PageServerLoad = async({ params, fetch }) => {

  const response =await fetch(`https://api.easybroker.com/v1/properties/${params.id}`, options)

  const property = await response.json()

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
      color
		};
	}
  throw redirect(303, '/properties')

};